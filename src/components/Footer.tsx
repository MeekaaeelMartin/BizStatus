import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const customerLinks = [
  { label: 'Browse Directory', to: '/stores' },
  { label: 'Search Stores', to: '/stores' },
  { label: 'Bookings', to: '/stores' },
  { label: 'Help Center', to: '/contact' },
]

const businessLinks = [
  { label: 'Claim Your Store', to: '/pricing' },
  { label: 'Pricing Plans', to: '/pricing' },
  { label: 'Merchant Dashboard', to: '/pricing' },
  { label: 'Success Stories', to: '/blog' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Contact Support', to: '/contact' },
  { label: 'API Access', to: '/contact' },
]

function SocialIcon({ children, label }: { children: ReactNode; label: string }) {
  return (
    <a
      href={`https://${label.toLowerCase()}.com`}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-4 pb-8 pt-12 sm:px-5 sm:pb-10 sm:pt-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="max-w-xs sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-[0.9rem] leading-relaxed text-slate-400">
              Connecting South African businesses with customers in real-time. Instantly know who is
              open, book appointments, and support local trade.
            </p>
            <div className="mt-5 flex items-center gap-1">
              <SocialIcon label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5H3.5V20.5H6.5V8.5ZM5 3.5C4 3.5 3.2 4.3 3.2 5.3C3.2 6.3 4 7.1 5 7.1C6 7.1 6.8 6.3 6.8 5.3C6.8 4.3 6 3.5 5 3.5ZM20.5 13.3C20.5 10.1 18.9 8.3 16.2 8.3C14.9 8.3 14 9 13.6 9.7H13.5V8.5H10.6V20.5H13.6V14.1C13.6 12.4 14 10.8 16 10.8C17.9 10.8 17.9 12.7 17.9 14.2V20.5H20.9L20.5 13.3Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <FooterColumn title="For Customers" links={customerLinks} />
          <FooterColumn title="For Businesses" links={businessLinks} />
          <FooterColumn title="Legal & Support" links={legalLinks} />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.8rem] text-slate-500 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BizStatus.co.za. Built for South African Businesses.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-white">
              Terms of Use
            </Link>
            <p>Cape Town • Johannesburg • Durban</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; to: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 text-[0.95rem] font-semibold text-white">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="text-[0.9rem] text-slate-400 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
