import type { Metadata } from "next";
import LegalExperience from "@/components/landing/LegalExperience";
import { PRIVACY_BLOCKS, PRIVACY_INTRO } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | CloserX.AI",
  description:
    "How CloserX.ai collects, uses, shares and protects personal data across its AI voice services.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalExperience
      eyebrow="Legal / Data & privacy"
      title={
        <>
          Privacy
          <br />
          <em>policy.</em>
        </>
      }
      intro={PRIVACY_INTRO}
      blocks={PRIVACY_BLOCKS}
    />
  );
}
