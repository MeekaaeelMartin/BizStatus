import { LegalLayout } from '../components/LegalLayout'

const sections = [
  {
    title: '1. Who we are',
    paragraphs: [
      'BizStatus.co.za (“BizStatus”, “we”, “us”, or “our”) is a South African platform that helps customers discover local businesses, view live open/closed status, and book appointments. Our head office is at Workshop 17, Watershed, V&A Waterfront, Cape Town, 8002.',
      'This Privacy Policy explains how we collect, use, store, and share your personal information when you use our website, apps, and related services. We process personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA) and other applicable South African law.',
    ],
  },
  {
    title: '2. Information we collect',
    paragraphs: ['Depending on how you use BizStatus, we may collect:'],
    bullets: [
      'Identity and contact details — name, email address, phone number, and business trading name.',
      'Account and profile data — login credentials, store listings, photos, operating hours, and status preferences.',
      'Booking information — appointment times, selected services, and related messages between customers and businesses.',
      'Payment and billing data — plan type and billing references for paid merchant subscriptions (processed via secure payment providers; we do not store full card numbers).',
      'Technical data — IP address, browser type, device information, and approximate location derived from your connection when you search the directory.',
      'Usage data — pages viewed, searches, filters used, and interaction with listings or blog content.',
    ],
  },
  {
    title: '3. How we use your information',
    paragraphs: ['We use personal information to:'],
    bullets: [
      'Provide, operate, and improve the BizStatus directory, live status features, and booking tools.',
      'Create and manage customer and merchant accounts.',
      'Process subscriptions, send invoices, and respond to support requests.',
      'Send service messages (for example booking confirmations or status-related alerts you opt into).',
      'Detect fraud, abuse, and security incidents.',
      'Comply with legal obligations and enforce our Terms of Use.',
      'Analyse aggregated, anonymised trends to improve local discovery across South Africa.',
    ],
  },
  {
    title: '4. Legal bases for processing',
    paragraphs: [
      'Where POPIA applies, we process personal information when it is necessary to conclude or perform a contract with you, when you have consented, when we have a legitimate interest that does not override your rights (such as securing the platform), or when we must comply with the law.',
    ],
  },
  {
    title: '5. Sharing your information',
    paragraphs: [
      'We do not sell your personal information. We may share information with:',
    ],
    bullets: [
      'Businesses you book with — so they can fulfil appointments and contact you about your booking.',
      'Service providers who host our infrastructure, send emails/SMS, process payments, or provide analytics — under confidentiality and POPIA-aligned agreements.',
      'Professional advisers or authorities when required by law, court order, or to protect rights, safety, and security.',
      'A successor entity if BizStatus is involved in a merger, acquisition, or asset sale, subject to continued protection of your information.',
    ],
  },
  {
    title: '6. Cross-border transfers',
    paragraphs: [
      'Some service providers may process data outside South Africa. Where we transfer personal information internationally, we take reasonable steps to ensure an adequate level of protection consistent with POPIA, including contractual safeguards.',
    ],
  },
  {
    title: '7. Retention',
    paragraphs: [
      'We keep personal information only as long as needed for the purposes described above, including to meet legal, accounting, or reporting requirements. Booking and account records are typically retained for as long as your account remains active and for a reasonable period afterwards. You may request deletion subject to legal retention duties.',
    ],
  },
  {
    title: '8. Security',
    paragraphs: [
      'We use administrative, technical, and organisational measures designed to protect personal information against unauthorised access, loss, or misuse. No online service is completely secure; please use a strong password and keep your login details confidential.',
    ],
  },
  {
    title: '9. Your rights',
    paragraphs: [
      'Subject to POPIA, you may request access to your personal information, correction of inaccurate data, deletion or restriction in certain cases, objection to certain processing, and withdrawal of consent where processing is consent-based. To exercise these rights, email support@bizstatus.co.za. You may also lodge a complaint with the Information Regulator (South Africa).',
    ],
  },
  {
    title: '10. Cookies and similar technologies',
    paragraphs: [
      'We use cookies and similar technologies to keep you signed in, remember preferences, measure site performance, and understand how the directory is used. You can control cookies through your browser settings. Disabling some cookies may limit certain features.',
    ],
  },
  {
    title: '11. Children’s privacy',
    paragraphs: [
      'BizStatus is aimed at adults and businesses. We do not knowingly collect personal information from children under 18 without appropriate consent from a competent person. If you believe we have collected such information, contact us and we will take steps to delete it.',
    ],
  },
  {
    title: '12. Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of BizStatus after an update means you accept the revised policy, where permitted by law.',
    ],
  },
  {
    title: '13. Contact',
    paragraphs: [
      'For privacy questions or requests: support@bizstatus.co.za or partners@bizstatus.co.za. Postal address: Workshop 17, Watershed, V&A Waterfront, Cape Town, 8002, South Africa.',
    ],
  },
]

export function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="29 September 2026"
      intro="This policy describes how BizStatus.co.za collects and protects your personal information when you browse the directory, book appointments, or manage a business listing."
      sections={sections}
      related={{ label: 'Terms of Use', to: '/terms' }}
    />
  )
}
