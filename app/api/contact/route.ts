/**
 * Contact form → GoHighLevel (LeadConnector API v2).
 *
 * Runs server-side so the private integration token stays out of the bundle.
 * The contact upsert is the critical path; the note carrying the enquiry text
 * is best-effort, because a lead we can reach is worth more than a lost
 * submission if the notes scope is missing.
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

type Payload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function splitName(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] ?? name,
    lastName: parts.slice(1).join(" ") || undefined,
  };
}

function ghlHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

async function addNote(token: string, contactId: string, body: string) {
  const response = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: ghlHeaders(token),
    body: JSON.stringify({ body }),
  });

  if (!response.ok) {
    console.error("GHL note failed", response.status, await response.text());
  }
}

export async function POST(request: Request) {
  const token = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error("GHL_API_KEY or GHL_LOCATION_ID is not set");
    return Response.json({ error: "Form is not configured." }, { status: 500 });
  }

  let input: Partial<Payload>;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(input.name, 120);
  const phone = clean(input.phone, 40);
  const email = clean(input.email, 200);
  const message = clean(input.message);

  if (!name || !phone || !email || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { firstName, lastName } = splitName(name);

  // Upsert rather than create: a returning enquirer would 400 as a duplicate.
  const response = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: ghlHeaders(token),
    body: JSON.stringify({
      locationId,
      name,
      firstName,
      lastName,
      email,
      phone,
      source: "CloserX website",
      tags: ["website-inquiry"],
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    console.error("GHL upsert failed", response.status, result);
    return Response.json(
      { error: "We could not send that just now. Please email info@closerx.ai." },
      { status: 502 },
    );
  }

  const contactId: string | undefined = result?.contact?.id;
  if (contactId) {
    await addNote(token, contactId, `Website enquiry\n\n${message}`);
  }

  return Response.json({ ok: true });
}
