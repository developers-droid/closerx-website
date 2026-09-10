import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function AboutHero() {
  return (
    <section id="about" className="relative pb-16 pt-32 sm:pb-24 lg:pt-44">
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal className="text-center text-xs font-bold uppercase tracking-[0.3em] text-ink/85 sm:text-sm">
              Get to know
            </Reveal>

            <Reveal
              delay={0.06}
              className="mt-8 text-center font-display text-[clamp(3.5rem,12vw,10rem)] font-light uppercase leading-[0.9] tracking-[-0.04em] text-ink lg:mt-12 lg:text-left"
            >
              About
            </Reveal>

            <Reveal
              delay={0.12}
              className="mt-10 max-w-xl text-sm leading-relaxed text-ink/80 sm:text-base lg:mt-16 lg:text-justify"
            >
              Driven by a fervent commitment to innovation, we dedicate
              ourselves to leveraging the boundless potential of artificial
              intelligence, pioneering transformative solutions that empower
              businesses, drive growth, and shape a brighter future for
              generations to come.
            </Reveal>
          </div>

          <Reveal
            delay={0.1}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] sm:rounded-[36px]"
          >
            <Image
              src="/about-vr.jpg"
              alt="A person interacting with an AI interface through a VR headset"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
