import { LegalLayout } from '../components/LegalLayout'

const sections = [
  {
    title: '1. Agreement to these terms',
    paragraphs: [
      'These Terms of Use (“Terms”) govern your access to and use of BizStatus.co.za and related services (the “Service”) operated by BizStatus. By accessing or using the Service, creating an account, listing a business, or booking an appointment, you agree to these Terms and our Privacy Policy.',
      'If you use BizStatus on behalf of a business, you confirm you have authority to bind that business to these Terms.',
    ],
  },
  {
    title: '2. The Service',
    paragraphs: [
      'BizStatus provides a South African business directory with live open/closed status, profiles, discovery tools, and appointment booking features for customers and merchants. We may add, change, or discontinue features at any time. Free and paid plans are described on our Pricing page and may change with reasonable notice for active paid subscribers.',
    ],
  },
  {
    title: '3. Accounts and eligibility',
    paragraphs: [
      'You must provide accurate registration information and keep it up to date. You are responsible for activity under your account and for keeping credentials secure. Notify us promptly of unauthorised use. We may suspend or terminate accounts that violate these Terms or pose a security risk.',
    ],
  },
  {
    title: '4. Customer use',
    bullets: [
      'Use listings and status information as a guide — always exercise your own judgement before travelling.',
      'Provide accurate booking details and attend or cancel appointments responsibly.',
      'Do not scrape, spam, harass merchants, or misuse contact information obtained through the Service.',
      'Do not attempt to disrupt the Service, bypass security, or access other users’ accounts.',
    ],
  },
  {
    title: '5. Merchant / business listings',
    paragraphs: [
      'If you claim or create a store listing, you confirm that you are authorised to represent that business and that all profile content (including hours, status, photos, prices, and services) is accurate and lawful.',
    ],
    bullets: [
      'You are solely responsible for keeping live status, hours, and booking availability correct.',
      'You must honour confirmed appointments or communicate changes promptly to customers.',
      'You must not post misleading, infringing, discriminatory, or illegal content.',
      'Paid plan features (analytics, SMS, multi-store tools, API access, etc.) are subject to the plan limits stated at purchase.',
      'You grant BizStatus a non-exclusive licence to host, display, and promote your listing content within the Service.',
    ],
  },
  {
    title: '6. Bookings and fees',
    paragraphs: [
      'Customers do not pay BizStatus a booking fee for standard appointments. Merchants may charge for their own goods or services; any such charges are between the customer and the merchant. BizStatus is not a party to those transactions and is not responsible for quality, delivery, refunds, or disputes arising from merchant services — though we may help facilitate communication where reasonable.',
      'Subscription fees for merchant plans are billed as indicated at checkout. Unless stated otherwise, plans may be cancelled from billing settings and remain active until the end of the current billing period. No long-term lock-in is required for standard Pro plans.',
    ],
  },
  {
    title: '7. Acceptable use',
    paragraphs: ['You agree not to:'],
    bullets: [
      'Use the Service for unlawful, fraudulent, or harmful purposes.',
      'Upload malware or attempt to reverse engineer the platform except as allowed by law.',
      'Misrepresent your identity, business, or open/closed status.',
      'Collect personal information of other users without a lawful basis.',
      'Interfere with other users’ enjoyment of the Service.',
    ],
  },
  {
    title: '8. Intellectual property',
    paragraphs: [
      'BizStatus branding, software, design, and content (excluding merchant- and user-submitted content) are owned by BizStatus or its licensors. You may not copy, modify, or distribute our materials without prior written consent. User content remains owned by the submitting user, subject to the licence granted above.',
    ],
  },
  {
    title: '9. Disclaimers',
    paragraphs: [
      'The Service is provided on an “as is” and “as available” basis. While we aim for accurate, timely status updates, we do not guarantee that any listing, status, map pin, or availability slot is complete, continuous, or error-free. Network outages, load shedding, merchant error, or third-party failures may affect information shown.',
      'To the fullest extent permitted by South African law (including the Consumer Protection Act where applicable), we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    title: '10. Limitation of liability',
    paragraphs: [
      'To the maximum extent permitted by law, BizStatus and its directors, employees, and partners will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost data, or travel costs arising from use of the Service or reliance on status information.',
      'Our total aggregate liability arising out of or relating to the Service will not exceed the greater of (a) the fees you paid us for the Service in the three months before the claim, or (b) R1,000 — except where liability cannot be limited by law (including for gross negligence or wilful misconduct where such exclusion is prohibited).',
    ],
  },
  {
    title: '11. Indemnity',
    paragraphs: [
      'You agree to indemnify and hold harmless BizStatus from claims, damages, and expenses (including reasonable legal fees) arising from your content, your listings, your breach of these Terms, or your misuse of the Service, to the extent permitted by law.',
    ],
  },
  {
    title: '12. Suspension and termination',
    paragraphs: [
      'You may stop using the Service at any time. We may suspend or terminate access if you breach these Terms, if required by law, or if we discontinue the Service. Provisions that by nature should survive (including intellectual property, disclaimers, limitation of liability, and indemnity) will survive termination.',
    ],
  },
  {
    title: '13. Changes to the Terms',
    paragraphs: [
      'We may update these Terms periodically. Material changes will be reflected by updating the “Last updated” date and, where appropriate, by notice on the site or by email. Continued use after changes take effect constitutes acceptance, except where mandatory law requires additional consent.',
    ],
  },
  {
    title: '14. Governing law and disputes',
    paragraphs: [
      'These Terms are governed by the laws of the Republic of South Africa. Subject to any non-waivable consumer rights, courts of South Africa (with Cape Town as a preferred venue for contractual disputes) will have jurisdiction. Nothing in these Terms limits rights you may have under the Consumer Protection Act 68 of 2008 or POPIA.',
    ],
  },
  {
    title: '15. Contact',
    paragraphs: [
      'Questions about these Terms: support@bizstatus.co.za or partners@bizstatus.co.za. Address: Workshop 17, Watershed, V&A Waterfront, Cape Town, 8002, South Africa.',
    ],
  },
]

export function Terms() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Use"
      updated="29 September 2026"
      intro="These Terms of Use set out the rules for using BizStatus.co.za — including browsing listings, booking appointments, and managing a business profile."
      sections={sections}
      related={{ label: 'Privacy Policy', to: '/privacy' }}
    />
  )
}
