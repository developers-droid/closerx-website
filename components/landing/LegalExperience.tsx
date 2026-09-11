"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { Footer, Navigation } from "@/components/landing/CloserExperience";
import type { LegalBlock } from "@/content/legal";

/** Heading text doubles as the anchor id, so the aside can jump to it. */
function slug(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function LegalExperience({
  eyebrow,
  title,
  intro,
  blocks,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string[];
  blocks: LegalBlock[];
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <div className="cx-site">
      <motion.div className="cx-progress" style={{ scaleX }} />
      <main>
        <section id="top" className="cx-legal-hero">
          <Navigation page="legal" />
          <div className="cx-about-grid" aria-hidden="true" />
          <motion.div
            className="cx-legal-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{eyebrow}</p>
            <h1>{title}</h1>
          </motion.div>
        </section>

        <section className="cx-legal-body">
          <aside className="cx-legal-toc" aria-label="On this page">
            <p>On this page</p>
            <ol>
              {blocks.map((block, index) => (
                <li key={block.h}>
                  <a href={`#${slug(block.h)}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {block.h}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="cx-legal-content">
            <div className="cx-legal-intro">
              {intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {blocks.map((block, index) => (
              <article key={block.h} id={slug(block.h)} className="cx-legal-block">
                <span className="cx-legal-no">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{block.h}</h2>
                {block.sub && <h3>{block.sub}</h3>}
                {block.p?.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                {block.ul && (
                  <ul>
                    {block.ul.map((item) =>
                      Array.isArray(item) ? (
                        <li key={item[0]}>
                          <strong>{item[0]}:</strong> {item[1]}
                        </li>
                      ) : (
                        <li key={item}>{item}</li>
                      ),
                    )}
                  </ul>
                )}
              </article>
            ))}

            <p className="cx-legal-foot">
              Questions about this document?{" "}
              <a href="mailto:info@closerx.ai">info@closerx.ai</a>
            </p>
          </div>
        </section>
      </main>
      <Footer homeHref="/" />
    </div>
  );
}
