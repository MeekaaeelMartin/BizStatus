import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

const plans = [
  {
    name: 'Free',
    desc: 'For single-location local businesses looking to establish online presence.',
    price: 'R0',
    cta: 'Sign Up Free',
    featured: false,
    features: [
      'Manual Status Toggle',
      'Basic Profile (Address, Phone)',
      'Public Appointment Requests',
      'SLA Email Support',
    ],
  },
  {
    name: 'Pro',
    desc: 'For fast-paced shops needing active scheduling and growth stats.',
    price: 'R299',
    cta: 'Start Free Trial',
    featured: true,
    features: [
      'Instant Live Mobile Toggle',
      'Unlimited Appointments Booked',
      'SMS Alerts for Customers',
      'Store Analytics & Views',
      'Priority Profile Listing',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'For multi-location chains requiring centralized management.',
    price: 'R999',
    cta: 'Contact Sales',
    featured: false,
    features: [
      'Multi-Store Console (Up to 10)',
      'API Integration for Statuses',
      'Custom Domain Profiles',
      '24/7 Phone Support Manager',
      'SSO/SAML Employee Login',
    ],
  },
]

const comparison = [
  {
    feature: 'Live status updates',
    free: 'Manual',
    pro: 'Real-time (Instant)',
    enterprise: 'Real-time (Instant)',
  },
  {
    feature: 'SMS client reminders',
    free: false,
    pro: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    feature: 'SLA / Support level',
    free: 'Email (48h)',
    pro: 'Priority (12h)',
    enterprise: 'Dedicated Manager',
  },
  {
    feature: 'Geographic metrics',
    free: false,
    pro: 'Available',
    enterprise: 'Advanced API',
  },
]

const faqs = [
  {
    q: 'Is the Free plan actually free?',
    a: 'Yes. You can manage your business location and manually toggle your open/closed status forever without paying a cent.',
  },
  {
    q: 'Do customers pay booking fees?',
    a: 'No, customers book appointments 100% free of charge. Only premium business features incur costs.',
  },
  {
    q: 'Can I cancel my Pro subscription easily?',
    a: 'Of course. There are no lock-in periods. You can cancel with one click from your billing settings page.',
  },
  {
    q: 'What if I have multiple branches?',
    a: 'Our Enterprise tier lets you manage multiple locations under a unified, easy-to-use regional manager portal.',
  },
]

function CheckIcon() {
  return (
    <svg className="mt-0.5 shrink-0 text-brand-green" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-500">
      ✕
    </span>
  )
}

export function Pricing() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-[800px] px-4 pb-12 pt-10 text-center sm:px-5 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand-green sm:text-[0.8rem]">
            Transparent Pricing
          </p>
          <h1 className="mt-3 text-[1.75rem] font-extrabold tracking-tight text-white sm:text-[2.25rem] lg:text-[2.6rem]">
            Choose the Right Plan for Your Business
          </h1>
          <p className="mt-4 text-[0.98rem] text-slate-400 sm:text-[1.05rem]">
            No long-term contracts. Pause or cancel your plan at any time.
          </p>
        </div>
      </section>

      <section className="bg-surface pb-12 pt-6 sm:pb-16 sm:pt-8 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5 lg:px-8">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 100}
                className={`hover-lift flex flex-col rounded-2xl bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7 ${
                  plan.featured
                    ? 'border-2 border-brand-blue md:col-span-2 lg:col-span-1'
                    : 'border border-slate-100'
                }`}
              >
                <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
                <p className="mt-2 min-h-0 text-sm leading-relaxed text-slate-body lg:min-h-[48px]">
                  {plan.desc}
                </p>
                <p className="mt-5">
                  <span className="text-[2.2rem] font-extrabold tracking-tight text-navy sm:text-[2.4rem]">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-slate-500">/ month</span>
                </p>
                <Link
                  to="/contact"
                  className="btn-press mt-5 block rounded-lg bg-brand-blue py-3 text-center text-sm font-semibold text-white hover:bg-blue-600"
                >
                  {plan.cta}
                </Link>
                <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                  Includes:
                </p>
                <ul className="mt-3 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy">
                      <CheckIcon />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef2f7] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-5 lg:px-8">
          <Reveal>
            <h2 className="text-center text-[1.45rem] font-extrabold tracking-tight text-navy sm:text-[1.75rem]">
              Deep-Dive Feature Comparison
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mt-10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3.5 font-semibold sm:px-5 sm:py-4">Feature</th>
                    <th className="px-4 py-3.5 font-semibold sm:px-5 sm:py-4">Free</th>
                    <th className="px-4 py-3.5 font-semibold sm:px-5 sm:py-4">Pro</th>
                    <th className="px-4 py-3.5 font-semibold sm:px-5 sm:py-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3.5 font-medium text-navy sm:px-5 sm:py-4">{row.feature}</td>
                      <td className="px-4 py-3.5 text-slate-600 sm:px-5 sm:py-4">
                        {row.free === false ? <CrossIcon /> : row.free}
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-navy sm:px-5 sm:py-4">{row.pro}</td>
                      <td className="px-4 py-3.5 text-slate-700 sm:px-5 sm:py-4">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-5 lg:px-8">
          <Reveal>
            <h2 className="text-center text-[1.45rem] font-extrabold tracking-tight text-navy sm:text-[1.75rem]">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 80}>
                <h3 className="text-[1.05rem] font-bold text-navy">{faq.q}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-body">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
