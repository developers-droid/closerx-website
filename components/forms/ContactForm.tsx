"use client";

import { useState, type FormEvent } from "react";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 19 19 5M9 5h10v10" />
    </svg>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setSending(true);
    setStatus("Sending…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus(result?.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("Thanks — we have your details and will reply within one business day.");
    } catch {
      setStatus("Network error. Please try again, or email info@closerx.ai.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="cx-contact-form" onSubmit={handleSubmit}>
      <div className="cx-form-meta" aria-hidden="true">
        <span>Inquiry form / 2026</span>
        <span>All fields required</span>
      </div>

      <div className="cx-form-grid">
        <label className="cx-field">
          <span><b>01</b> Your name</span>
          <input type="text" name="name" autoComplete="name" placeholder="Jane Smith" required />
        </label>

        <label className="cx-field">
          <span><b>02</b> Phone number</span>
          <input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="+1 555 000 0000" required />
        </label>

        <label className="cx-field cx-field-wide">
          <span><b>03</b> Work email</span>
          <input type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required />
        </label>

        <label className="cx-field cx-field-wide">
          <span><b>04</b> What are you looking to build?</span>
          <textarea name="message" placeholder="Tell us about your goals, call volume and timeline." rows={4} required />
        </label>
      </div>

      <div className="cx-form-actions">
        <p>Your details stay private. We typically reply within one business day.</p>
        <button type="submit" className="cx-form-submit" disabled={sending}>
          <span>{sending ? "Sending…" : "Send inquiry"}</span>
          <Arrow />
        </button>
      </div>

      <p className="cx-form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
