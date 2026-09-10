import Reveal from "../ui/Reveal";

const features = [
  {
    title: "Unlimited AI Voice Agents",
    body: "Scale operations without limits. Oversee and control numerous client accounts from a single, centralized dashboard.",
  },
  {
    title: "Unlimited Whitelabel Accounts",
    body: "Rebrand the entire platform with your agency logo, colors and domain for a seamless client experience.",
  },
  {
    title: "Automated Appointment Booking",
    body: "Streamline scheduling with AI-powered booking that writes straight into Google and CRM calendars.",
  },
  {
    title: "Call Recording and Transcription",
    body: "Capture and convert every conversation into searchable text for easy reference.",
  },
  {
    title: "Superior Noise Reduction in Calls",
    body: "Ensure crystal-clear communication with advanced real-time audio processing.",
  },
  {
    title: "Train Your AI Agent in 10 Seconds",
    body: "Quickly customize AI behavior using existing call recordings or a pre-built script.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl font-display text-[clamp(1.75rem,4.2vw,3.4rem)] font-bold leading-[1.12] tracking-tight text-ink">
          24/7 appointment setting{" "}
          <span className="text-accent">
            automated with the smoothest conversational AI
          </span>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.08}
              className="group relative pl-0 sm:pl-8 sm:[&:nth-child(3n+1)]:pl-0"
            >
              {/* column rules, mirroring the divided grid on the live page */}
              <span className="absolute left-0 top-0 hidden h-full w-px bg-ink/20 sm:block sm:[:nth-child(3n+1)>&]:hidden" />
              <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                {f.title}
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/75">
                {f.body}
              </p>
              <span className="mt-6 block h-px w-0 bg-accent transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
