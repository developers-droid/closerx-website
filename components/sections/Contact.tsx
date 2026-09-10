import Script from "next/script";
import Reveal from "../ui/Reveal";

const FORM_ID = "DNcTU2V8UYGAqELwx9uw";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1560px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16 lg:px-12">
        <div className="lg:sticky lg:top-32">
          <Reveal className="font-display text-[clamp(3.25rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.04em] text-ink">
            Let&apos;s talk.
          </Reveal>
          <Reveal
            delay={0.08}
            className="mt-7 max-w-lg text-base leading-7 text-ink/70 sm:text-lg"
          >
            Tell us a little about your agency and what you want to build. Our
            team will get back to you with the best next step.
          </Reveal>
        </div>

        <Reveal delay={0.12} className="min-w-0">
          <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_30px_80px_-35px_rgba(18,13,45,0.65)]">
            <iframe
              src={`https://link.closerx.ai/widget/form/${FORM_ID}`}
              className="block h-[626px] w-full border-0"
              id={`inline-${FORM_ID}`}
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="contact us"
              data-height="626"
              data-layout-iframe-id={`inline-${FORM_ID}`}
              data-form-id={FORM_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Contact us"
            />
          </div>
        </Reveal>
      </div>

      <Script
        src="https://link.closerx.ai/s/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
