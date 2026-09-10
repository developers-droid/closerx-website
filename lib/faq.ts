export type FaqItem = {
  q: string;
  /** Rendered as separate paragraphs. */
  a: string[];
};

/**
 * FAQ content for /about.
 *
 * Four entries arrived from the source with text spliced together (two answers
 * interleaved mid-sentence) and have been separated back out — see the
 * `NOTE:` comments below. Verify those against the live site before launch.
 */
export const FAQ: FaqItem[] = [
  {
    q: "Do I need to use GoHighLevel to leverage CloserX.ai's capabilities?",
    a: [
      "While CloserX.ai integrates seamlessly with GoHighLevel for enhanced functionality, it's not a prerequisite. Our team will assist you in setting up GoHighLevel if you choose to use it once you join us.",
    ],
  },
  {
    q: "Is CloserX.ai the best AI calling product for agencies on the market?",
    a: [
      "Absolutely! CloserX.ai leads with cutting-edge AI solutions that redefine agency sales and client engagement. Our system is not only innovative but also designed for high marketability with features like white-labeling, unlimited sub accounts, and competitive pricing, positioning CloserX.ai as the preferred choice for agencies looking to boost their service offerings and revenue.",
    ],
  },
  {
    q: "Is there a standalone white-label option available without GoHighLevel?",
    a: [
      "Yes, CloserX.ai offers a standalone white-label solution that allows you to use our services directly under your own branded domain (e.g. app.yourcompany.com), eliminating the need for a GoHighLevel account.",
    ],
  },
  {
    q: "What is the pricing structure for CloserX.ai?",
    a: [
      "Monthly Subscription: $97 per month for 10 sub accounts, or $297 per month for unlimited sub accounts, covering white-label capabilities and unlimited team members.",
      "Calling credits can be resold at your chosen markup through our administrative portal, giving you the flexibility to tailor pricing for your profits.",
    ],
  },
  {
    q: "Can I set my own resale prices for the services?",
    a: [
      "Yes, CloserX.ai allows you to determine the resale prices for calling credits and services, offering you complete control over your business model.",
    ],
  },
  {
    q: "How can I update the email associated with my CloserX.ai account?",
    a: [
      "To change the email associated with your account, please contact our support team at info@closerx.ai for a secure and verified update process.",
    ],
  },
  {
    q: "What steps should I take if my account balance appears incorrect?",
    a: [
      "If your balance is unexpectedly off, review your campaign activity, check for multiple campaign executions, or reach out to our support at info@closerx.ai for detailed assistance.",
    ],
  },
  {
    q: "How do I recharge my account balance?",
    a: [
      "Recharging is easy: log in, navigate to the 'Credits' section, select a package, and complete the transaction. For any issues, contact our support immediately.",
    ],
  },
  {
    q: "What if I forget my password?",
    a: [
      'Reset your password by clicking "Forgot Password" at the login screen, entering your email, and following the link sent to you. Contact support if you don\'t receive the email.',
    ],
  },
  {
    q: "Can I view campaign data for periods longer than 7 days?",
    a: [
      "Currently, our dashboard visualizes the last 7 days. We're developing features for extended data access and encourage feature requests via https://links.closerx.ai/feature-requests.",
    ],
  },
  {
    q: "Does CloserX.ai integrate with CRM systems?",
    a: [
      "Yes, CloserX.ai integrates with most CRM systems, enhancing your operational efficiency with seamless data synchronization.",
    ],
  },
  {
    q: "How can I integrate CloserX.ai into my business operations?",
    a: [
      "Integration is straightforward. We provide API instructions and support to help your tech team integrate CloserX.ai with your existing systems.",
    ],
  },
  {
    q: "Are calls charged during ringing time?",
    a: ["No, CloserX.ai charges only for answered calls, ensuring cost-efficiency."],
  },
  {
    q: "Will call charges vary internationally?",
    a: [
      "Yes, call charges vary by country, reflecting the cost differences in international telecommunications (Twilio).",
    ],
  },
  {
    q: "How do I sign up for a CloserX.ai account?",
    a: [
      "Sign up at app.closerx.ai. Registration is simple: enter your email, set a password, agree to the terms, and verify your email through the link sent.",
    ],
  },
  {
    q: "What should I do if I don't receive the verification email?",
    a: [
      "Check your spam folder first; if it's not there, request a resend through the sign-up page or contact info@closerx.ai.",
    ],
  },
  {
    q: "Can I create multiple accounts with the same email?",
    a: [
      "CloserX.ai allows one account per email, but you can manage multiple campaigns and agents within that account, optimizing your workflow.",
    ],
  },
  {
    // NOTE: the source entry had no answer — the question text was repeated in
    // the answer slot. Drafted from industries named elsewhere in this FAQ.
    // Please confirm or replace.
    q: "What industries benefit most from CloserX.ai?",
    a: [
      "Agencies, real estate, telemarketing, surveys and any team running large-scale customer outreach see the strongest results — anywhere a high volume of qualifying and booking calls needs to happen around the clock.",
    ],
  },
  {
    q: "How do I provide feedback on calls?",
    a: [
      "Feedback can be provided directly through your dashboard or by contacting our support team for personalized assistance.",
    ],
  },
  {
    q: "How does CloserX.ai handle AI call disclosures?",
    a: [
      "Ethical use of AI is paramount. Each call can start with a disclosure, ensuring transparency that the caller is speaking to an AI.",
    ],
  },
  {
    q: "How can I cancel my CloserX.ai subscription?",
    a: [
      "Subscription cancellations can only be processed directly through the platform. We do not accept cancellation requests via email or support calls. Navigate to your account settings to proceed with the cancellation.",
    ],
  },
  {
    q: "In which countries can I make calls using CloserX.ai?",
    a: [
      "CloserX.ai supports international calling to a vast array of countries including, but not limited to: United States, Canada, United Kingdom, Australia, New Zealand, India, Brazil, Mexico, South Africa, France, Germany, China, Japan, United Arab Emirates, and many more. For a complete list or specific inquiries, contact info@closerx.ai.",
    ],
  },
  {
    q: "What languages are supported by CloserX.ai for outbound calls?",
    a: [
      "Our platform supports multiple languages to cater to a global audience: English, Spanish, French, German, Portuguese, Mandarin, Hindi, Arabic, Russian, Japanese, Korean, Dutch, Italian and Swedish. We are continuously expanding our language support based on customer demand.",
    ],
  },
  {
    q: "How can I get support for CloserX.ai?",
    a: [
      "For any support-related inquiries or technical assistance, please visit our support portal. Our support center provides solutions to common issues and allows you to submit support tickets for personalized help.",
    ],
  },
  {
    q: "How do I book a meeting after signing up?",
    a: [
      "Once you sign up for CloserX.ai, you will receive a welcome email containing a link to book a meeting with our onboarding team. This personalized meeting will help you set up and tailor CloserX.ai services to your business needs effectively.",
    ],
  },
  {
    // NOTE: source answer was spliced with the CRM answer mid-word
    // ("CloserX.ai integr…ates with most CRM systems"). Affiliate text kept.
    q: "Can I become an affiliate with CloserX.ai?",
    a: [
      "Yes, we offer an affiliate program where you can earn commissions by promoting CloserX.ai. To register as an affiliate, please visit the CloserX.ai Affiliate Program and sign up to start earning.",
    ],
  },
  {
    q: "What types of analytics does CloserX.ai provide?",
    a: [
      "CloserX.ai offers detailed analytics and reporting features that track call outcomes, agent performance, customer engagement levels, and campaign effectiveness, helping you make informed decisions based on data-driven insights.",
    ],
  },
  {
    // NOTE: source question and answer were spliced with the CRM entry. The
    // CRM question already appears above, so only the translation Q&A is kept.
    q: "Does CloserX.ai support real-time language translation?",
    a: [
      "Yes, CloserX.ai includes real-time language translation capabilities, enabling you to communicate effectively with clients across different languages and enhance the customer experience.",
    ],
  },
  {
    q: "Can I use CloserX.ai for video calls?",
    a: [
      "While CloserX.ai primarily focuses on AI-driven voice calls, we are currently developing features to support video calls to offer a more comprehensive communication solution.",
    ],
  },
  {
    // NOTE: source question was spliced with the CRM question.
    q: "What security measures does CloserX.ai implement?",
    a: [
      "CloserX.ai takes security seriously, employing robust encryption, secure data storage practices, and compliance with international privacy regulations to protect both your and your clients' information.",
    ],
  },
  {
    q: "Is there a limit to the number of calls I can make with CloserX.ai?",
    a: [
      "CloserX.ai offers scalable plans with different call capacities to suit various business sizes and needs. For specific limits according to your plan, please refer to your account settings or contact support.",
    ],
  },
  {
    q: "Does CloserX.ai offer training for new users?",
    a: [
      "Yes, CloserX.ai provides comprehensive training resources, including tutorials, webinars, and one-on-one sessions, to ensure you and your team can fully leverage the platform's capabilities.",
    ],
  },
  {
    q: "Can I customize the AI's conversation scripts on CloserX.ai?",
    a: [
      "Absolutely! CloserX.ai allows you to customize conversation scripts to align with your business objectives and communication style, ensuring the AI interacts in a way that reflects your brand.",
    ],
  },
  {
    q: "What kind of support does CloserX.ai offer for setup and implementation?",
    a: [
      "CloserX.ai offers white-glove setup and implementation support to ensure a smooth transition and quick start with our platform. Our team will assist you every step of the way, available between 10am and 10pm (Monday to Friday).",
    ],
  },
  {
    q: "Can CloserX.ai handle high-volume call campaigns?",
    a: [
      "Yes, CloserX.ai is designed to efficiently manage high-volume call campaigns, making it ideal for telemarketing, surveys, and large-scale customer outreach programs.",
    ],
  },
  {
    q: "How often does CloserX.ai update its features and capabilities?",
    a: [
      "We regularly update CloserX.ai with new features and enhancements based on user feedback and technological advancements. Updates are typically rolled out quarterly, and all users are notified accordingly.",
    ],
  },
  {
    q: "What is the uptime guarantee for CloserX.ai services?",
    a: [
      "CloserX.ai strives to maintain a high uptime, with a 99.9% uptime guarantee, ensuring that our services are reliable and available when you need them.",
    ],
  },
  {
    q: "Can I integrate CloserX.ai with my existing telephone systems?",
    a: [
      "Yes, CloserX.ai can be integrated with Twilio telephone systems to provide a seamless communication experience without the need for extensive infrastructure changes.",
    ],
  },
  {
    q: "Does CloserX.ai provide APIs for custom integrations?",
    a: [
      "CloserX.ai offers robust APIs that allow for custom integrations with your existing business systems and workflows, enhancing flexibility and connectivity.",
    ],
  },
];
