import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

export function Home() {
  const [liveOpen, setLiveOpen] = useState(true)

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-12 pt-8 sm:gap-12 sm:px-5 sm:pb-16 sm:pt-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="min-w-0">
            <div className="hero-animate-item hero-delay-1 mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1.5 sm:mb-6">
              <span className="anim-pulse-dot h-2 w-2 shrink-0 rounded-full bg-brand-green" />
              <span className="text-[0.75rem] font-medium text-sky-200 sm:text-[0.8rem]">
                Now Live Across South Africa
              </span>
            </div>

            <h1 className="hero-animate-item hero-delay-2 text-[2rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.15rem]">
              Know if they are open before you make the drive
            </h1>

            <p className="hero-animate-item hero-delay-3 mt-4 max-w-lg text-[0.98rem] leading-relaxed text-slate-400 sm:mt-5 sm:text-[1.05rem]">
              BizStatus connects you with retail stores, medical centers, workshops, and cafes. Store
              owners toggle their status live, so you never waste a trip.
            </p>

            <div className="hero-animate-item hero-delay-4 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/stores"
                className="btn-press inline-flex items-center justify-center rounded-lg bg-brand-blue px-6 py-3 text-center text-[0.95rem] font-semibold !text-white hover:bg-blue-600"
              >
                Find a Business
              </Link>
              <Link
                to="/pricing"
                className="btn-press inline-flex items-center justify-center rounded-lg border border-white/50 bg-transparent px-6 py-3 text-center text-[0.95rem] font-semibold !text-white hover:border-white hover:bg-white/5"
              >
                List Your Business (Free)
              </Link>
            </div>
          </div>

          <div className="hero-animate-item hero-delay-5 relative mx-auto w-full max-w-[440px] lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-3 rounded-[1.35rem] bg-brand-blue/20 blur-2xl" />
            <div className="anim-float relative overflow-hidden rounded-2xl border border-brand-blue/40 bg-[#1a2744] shadow-2xl shadow-brand-blue/20">
              <div className="flex items-start justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
                <div className="min-w-0">
                  <h3 className="truncate text-[1.05rem] font-bold text-white">Truth Coffee Roasting</h3>
                  <p className="mt-0.5 text-sm text-slate-400">Buitenkant St, Cape Town</p>
                </div>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-white transition-colors duration-300 ${
                    liveOpen ? 'bg-brand-green' : 'bg-red-500'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  {liveOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>

              <div className="px-4 py-5 sm:px-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">Live Store Status</p>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={liveOpen}
                    aria-label="Toggle live store status"
                    onClick={() => setLiveOpen((v) => !v)}
                    className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 ${
                      liveOpen ? 'bg-brand-green' : 'bg-slate-500'
                    }`}
                  >
                    <span
                      className={`status-toggle-knob absolute top-0.5 h-6 w-6 rounded-full bg-white shadow ${
                        liveOpen ? 'left-[1.35rem]' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
                <p className="mt-3 text-[0.8rem] leading-relaxed text-slate-400">
                  Clicking this updates your customers instantly on BizStatus and search indexes.
                </p>
              </div>

              <div className="border-t border-white/10 bg-white/5 px-4 py-4 sm:px-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">Next Appointment</p>
                  <span className="rounded-md bg-brand-green/15 px-2 py-0.5 text-[0.7rem] font-semibold text-brand-green">
                    Confirmed
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                    SM
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">Sipho Mandela</p>
                    <p className="text-xs text-slate-400">Table Booking • 14:00 Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 py-8 sm:gap-8 sm:px-5 sm:py-10 lg:grid-cols-4 lg:px-8 lg:py-12">
          {[
            { value: '12,450+', label: 'Verified SA Businesses' },
            { value: '89,200+', label: 'Appointments Booked' },
            { value: '99.8%', label: 'Live Toggle Accuracy' },
            { value: '15-sec', label: 'Instant Status Updates' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="text-[1.5rem] font-extrabold tracking-tight text-navy sm:text-[1.85rem] lg:text-[2rem]">
                {stat.value}
              </p>
              <p className="mt-1 text-[0.75rem] text-slate-500 sm:text-[0.85rem]">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-brand-blue sm:text-[0.8rem]">
              Engineered for Certainty
            </p>
            <h2 className="mt-3 text-[1.55rem] font-extrabold tracking-tight text-navy sm:text-[1.85rem] lg:text-[2.15rem]">
              Features Built for local South African Commerce
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Real-Time Toggle',
                desc: 'Store owners can flip status instantly from mobile. No out-of-date static Google maps hours.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                ),
              },
              {
                title: 'Smart Appointments',
                desc: 'Accept bookings, reserve service slots, and manage customer queue flows dynamically.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                ),
              },
              {
                title: 'South African Directory',
                desc: 'Optimized geographic search covering major metros down to small suburbs.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i * 100}
                className="hover-lift rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/60 sm:p-7 md:last:col-span-2 lg:last:col-span-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-brand-blue transition-transform duration-300 group-hover:scale-105">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-body">{feature.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-brand-blue sm:text-[0.8rem]">
              Simple 3-Step Process
            </p>
            <h2 className="mt-3 text-[1.55rem] font-extrabold tracking-tight text-navy sm:text-[1.85rem] lg:text-[2.15rem]">
              How BizStatus Works
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-12 sm:mt-14 md:grid-cols-3 md:gap-8 lg:gap-10">
            {[
              {
                num: '01',
                title: 'Sign Up & List Store',
                desc: 'Add your business name, address, and upload photos to establish your profile.',
              },
              {
                num: '02',
                title: 'Set Your Status',
                desc: "Toggle your store 'Open' or 'Closed' inside the secure dashboard with one tap.",
              },
              {
                num: '03',
                title: 'Get Discovered',
                desc: 'Customers browse local listings, see your active hours, and book instant visits.',
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 120} className="relative">
                <span
                  aria-hidden
                  className="pointer-events-none block text-[4.25rem] font-extrabold leading-none text-[#dbeafe] select-none sm:text-[5rem]"
                >
                  {step.num}
                </span>
                <h3 className="relative -mt-5 text-lg font-bold text-navy sm:-mt-6">{step.title}</h3>
                <p className="relative mt-2 text-[0.95rem] leading-relaxed text-slate-body">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
