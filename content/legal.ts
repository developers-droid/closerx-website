/**
 * Legal copy, kept as data so both pages share one renderer and the wording
 * can be edited without touching layout. `ul` entries are either a plain
 * sentence or a [term, definition] pair rendered with the term emphasised.
 */
export type LegalBlock = {
  h: string;
  sub?: string;
  p?: string[];
  ul?: (string | [string, string])[];
};

export const TERMS_INTRO = [
  "Welcome to CloserX.ai. This Terms of Use Agreement (“Agreement”) governs the relationship between CloserX.ai (“Company”, “we”, “us”, or “our”) and the users (“Subscriber”, “you”) who engage with our AI-powered calling services (“Services”).",
  "This Agreement sets forth the legally binding terms for your use of our Services. By registering for, accessing, or using our Services, you affirm your acceptance of this Agreement, including any modifications that we make from time to time.",
  "Failure to comply with these terms can result in termination of your access to the Services.",
];

export const TERMS_BLOCKS: LegalBlock[] = [
  {
    h: "Acceptance of Terms",
    p: [
      "When you complete the registration process, you legally agree to the provisions of this Agreement. If you do not agree to these terms, you should not use our Services. By continuing to use the Services, you agree to be bound by this Agreement.",
    ],
  },
  {
    h: "Description of Services",
    p: [
      "CloserX.ai provides white-label AI calling solutions tailored for agency owners, enhancing business communications and operations. Services include, but are not limited to:",
    ],
    ul: [
      "Automated calling systems",
      "Client management and interaction tracking",
      "Integration capabilities with various CRM platforms",
      "Real-time analytics and reporting features",
    ],
  },
  {
    h: "Subscription and Billing",
    p: [
      "Access to the Services requires a paid subscription. The following terms apply to your subscription:",
    ],
    ul: [
      [
        "Fees and Charges",
        "You agree to pay all applicable fees related to your use of the Services as described during the subscription process. Prices are subject to change at any time.",
      ],
      [
        "Billing Cycle",
        "The fees for the subscription service will be billed on a monthly basis. You will be automatically billed each month on the anniversary date of your subscription, using the payment method on file.",
      ],
      [
        "No Refunds",
        "Payments are non-refundable. There are no refunds or credits for partially used periods, unless required by law.",
      ],
      [
        "Free Trial",
        "We offer a 7-day free trial to new subscribers. You must cancel your trial before it ends to avoid being charged the subscription fee.",
      ],
    ],
  },
  {
    h: "Subscriber Responsibilities",
    p: [
      "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to:",
    ],
    ul: [
      "Use the Services in compliance with all applicable laws and regulations, including privacy laws and regulations governing communications.",
      "Ensure that your use of the Services does not infringe the rights of any third party or violate any agreement with any third party.",
      "Any attempt to bypass the Platform’s security measures — including but not limited to using sub-addressed emails or fraudulent email addresses — will be considered a violation of these Terms. Accounts found to violate these Terms would lead to immediate account suspension and further security review.",
      "You agree that during the term of your subscription, you or your team will not, directly or indirectly, solicit, hire, or attempt to hire any current and past employee, contractor, or affiliate of CloserX.ai, or engage with any other clients of CloserX.ai in a manner that interferes with CloserX.ai’s business relationships, including but not limited to solicitation for employment, business partnerships, or any activity that disrupts or harms CloserX.ai’s operations; any violation of this will result in immediate and permanent termination of your account without compensation or refund.",
      "You agree that during the term of your subscription and thereafter, you or your team will not attempt to extract unauthorized information from CloserX.ai’s employees, contractors, or affiliates, including but not limited to details about our proprietary data, intellectual property, development processes, CloserX.ai’s other clients’ information or internal operations. Any violation of this will result in immediate and permanent termination of your account without compensation or refund.",
      "You or your team will not request or direct our team to undertake any unauthorized actions, including but not limited to alterations to your account, changes to client credentials, or any other activity not explicitly permitted under this Agreement. Any violation of this will result in immediate and permanent termination of your account without compensation or refund.",
    ],
  },
  {
    h: "Cancellation",
    p: [
      "Subscribers may cancel their subscription at any time. To cancel, you must notify us via email at info@closerx.ai (ensure the subject line or body clearly states your intent to cancel). Key terms include:",
    ],
    ul: [
      [
        "Effective Date",
        "Cancellations will take effect at the end of your current billing cycle. You will retain access to the Services until this date.",
      ],
      [
        "No Refunds",
        "As stated in the Subscription and Billing section, payments are non-refundable. No prorated refunds will be issued for cancellations mid-cycle, except where legally required.",
      ],
      [
        "Confirmation",
        "We will send a confirmation email upon processing your cancellation request. If you do not receive this confirmation, contact us immediately to verify receipt.",
      ],
      [
        "Renewal and Cancellation",
        "Subscriptions are automatically renewed according to the subscription plan. You must cancel your subscription at least 24 hours before the next billing cycle to avoid being charged for the next period.",
      ],
    ],
  },
  {
    h: "Suspension and Data Deletion",
    p: [
      "Failure to cancel before your billing cycle renewal date will result in automatic charges for the next period.",
      "If you cancel your subscription or initiate a dispute regarding charges or payments, your account will be immediately suspended, and all associated data, including stored information and credits, will be permanently deleted after 30 days from the cancellation or dispute date. Any remaining credits in your account will be forfeited upon deletion and are non-refundable. Once deleted, account data cannot be recovered, and you will need to create a new account to access our services.",
    ],
  },
  {
    h: "Credits Expiration Policy",
    p: [
      "All purchased credits must be utilized within six (6) months from the date of purchase. Any unused credits will automatically expire after this period. Please note that all credit purchases are final and non-refundable.",
    ],
  },
  {
    h: "Intellectual Property Rights",
    p: [
      "All intellectual property rights related to the Services, including trademarks, trade names, patents, registered designs, and any other automatic intellectual property rights derived from the aesthetics or functionality of the Services, remain the property of CloserX.ai.",
    ],
  },
  {
    h: "User Contents",
    p: [
      "You grant CloserX.ai a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute any content you upload or post on the Services. This may include text, images, or other material.",
    ],
  },
  {
    h: "Limitation of Liability",
    p: [
      "In no event will CloserX.ai, its directors, employees, partners, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
    ],
    ul: [
      "Your access to or use of or inability to access or use the Services;",
      "Any conduct or content of any third party on the Services;",
      "Any content obtained from the Services; and",
      "Unauthorized access, use, or alteration of your transmissions or content.",
    ],
  },
  {
    h: "Indemnification",
    p: [
      "You agree to defend, indemnify, and hold harmless CloserX.ai and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees), resulting from or arising out of your use and access of the Services, by you or any person using your account and password.",
    ],
  },
  {
    h: "Changes to Terms",
    p: [
      "CloserX.ai reserves the right to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
    ],
  },
  {
    h: "Termination",
    p: [
      "We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.",
    ],
  },
  {
    h: "Governing Law",
    p: [
      "These terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.",
    ],
  },
  {
    h: "Entire Agreement",
    p: [
      "These Terms constitute the entire agreement between us regarding our Services and supersede and replace any prior agreements we might have had between us regarding the Services.",
    ],
  },
  {
    h: "Contact Information",
    p: [
      "For any questions about these Terms, please contact us at info@closerx.ai.",
    ],
  },
];

export const PRIVACY_INTRO = [
  "Welcome to CloserX.ai (“Company”, “we”, “us”, or “our”). This Privacy Policy outlines our commitment to protecting the privacy and the handling of personal data collected from users (“you” or “your”) through our extensive suite of AI-powered voice services and white-label solutions.",
  "Our services include but are not limited to AI voice agents, whitelabeling tools, real-time communications, and customer relationship management integrations.",
];

export const PRIVACY_BLOCKS: LegalBlock[] = [
  {
    h: "Information We Collect",
    sub: "Personal Information",
    ul: [
      [
        "Identifiable Information",
        "Such as names, email addresses, and payment details necessary for processing transactions and communicating with you.",
      ],
      [
        "Agency Information",
        "We collect details about your agency including client lists, service preferences, and interaction patterns to enhance service delivery.",
      ],
    ],
  },
  {
    h: "Usage and Technical Data",
    ul: [
      [
        "Technical Details",
        "Includes IP addresses, browser types, operating systems, and device information to ensure optimal service performance.",
      ],
      [
        "Usage Metrics",
        "Such as page views, user interactions, and traffic data to improve website functionality and user experience.",
      ],
    ],
  },
  {
    h: "Use of Information",
    ul: [
      [
        "Service Enhancement",
        "To provide personalized setups such as custom domain names, UI customizations, and advanced features like noise reduction in calls.",
      ],
      [
        "Customer Support",
        "To offer white-glove onboarding, one-on-one consultations, and premium support to ensure your satisfaction with our services.",
      ],
      [
        "Communication",
        "We use your information to send important updates and to manage customer relationships effectively through customized communication tools.",
      ],
      [
        "Compliance and Safety",
        "To comply with legal obligations, protect the rights and safety of our users, and ensure the integrity of our services.",
      ],
    ],
  },
  {
    h: "Sharing and Disclosure of Information",
    ul: [
      [
        "Service Providers",
        "We engage various service providers and partners to support our operational needs, including payment processing, data management, and customer support, all while ensuring they adhere to strict data protection standards.",
      ],
      [
        "Legal and Compliance",
        "We may disclose information if required by law or if it’s necessary to protect our rights or the rights of others.",
      ],
      [
        "Business Transfers",
        "In the event of a merger, acquisition, or sale, your personal information may be transferred as part of that transaction.",
      ],
    ],
  },
  {
    h: "Data Security and Retention",
    ul: [
      [
        "Security Measures",
        "We employ robust security measures to protect your data from unauthorized access, alteration, and loss.",
      ],
      [
        "Retention",
        "Your personal information is retained only as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.",
      ],
    ],
  },
  {
    h: "Your Rights and Choices",
    p: [
      "You have rights regarding the management of your personal data, including the right to access, correct, or delete your information. Specific rights may vary depending on your location but generally include:",
    ],
    ul: [
      [
        "Access and Updates",
        "You can review and update your personal information to ensure it is accurate.",
      ],
      [
        "Deletion",
        "You can request the deletion of your personal data, subject to certain exceptions prescribed by law.",
      ],
      [
        "Objections and Restrictions",
        "You have the right to object to processing or request restrictions on certain uses of your personal information.",
      ],
    ],
  },
  {
    h: "Children’s Privacy",
    p: [
      "Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information from our files.",
    ],
  },
  {
    h: "Changes to Our Privacy Policy",
    p: [
      "We may update this Privacy Policy periodically to reflect changes in our practices and service offerings. If we make material changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with more prominent notice.",
    ],
  },
  {
    h: "Contact Information",
    p: [
      "For any questions or concerns about our privacy practices or this Privacy Policy, please contact us at info@closerx.ai.",
    ],
  },
];
