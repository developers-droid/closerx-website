import type { Metadata } from "next";
import LegalExperience from "@/components/landing/LegalExperience";
import { TERMS_BLOCKS, TERMS_INTRO } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | CloserX.AI",
  description:
    "The terms governing your use of CloserX.ai's white-label AI calling services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalExperience
      eyebrow="Legal / Terms of use"
      title={
        <>
          Terms &amp;
          <br />
          <em>conditions.</em>
        </>
      }
      intro={TERMS_INTRO}
      blocks={TERMS_BLOCKS}
    />
  );
}
