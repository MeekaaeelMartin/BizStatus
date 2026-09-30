import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getStoreBySlug } from '../data/stores'
import { Reveal } from '../components/Reveal'

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as const

function buildCalendarDays(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = i + 1
    const weekday = new Date(year, month, date).getDay()
    const label = DAYS[weekday === 0 ? 6 : weekday - 1]
    return { date, label }
  })
}

export function StoreDetail() {
  const { slug } = useParams<{ slug: string }>()
  const store = slug ? getStoreBySlug(slug) : undefined

  const [service, setService] = useState('')
  const [monthOffset, setMonthOffset] = useState(0)
  const [selectedDate, setSelectedDate] = useState(16)
  const [selectedMonthOffset, setSelectedMonthOffset] = useState(0)
  const [selectedTime, setSelectedTime] = useState('11:30')
  const [booked, setBooked] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)

  useEffect(() => {
    setService('')
    setMonthOffset(0)
    setSelectedDate(16)
    setSelectedMonthOffset(0)
    setSelectedTime(store?.timeSlots[1] ?? '11:30')
    setBooked(false)
    setReviewOpen(false)
  }, [slug, store?.timeSlots])

  const calendar = useMemo(() => {
    const base = new Date(2024, 9, 1)
    const d = new Date(base.getFullYear(), base.getMonth() + monthOffset, 1)
    const allDays = buildCalendarDays(d.getFullYear(), d.getMonth())
    const start =
      monthOffset === selectedMonthOffset
        ? Math.max(0, Math.min(selectedDate - 4, allDays.length - 7))
        : Math.min(13, Math.max(0, allDays.length - 7))
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      label: d.toLocaleString('en-ZA', { month: 'long', year: 'numeric' }),
      days: allDays.slice(start, start + 7),
    }
  }, [monthOffset, selectedDate, selectedMonthOffset])

  if (!store) {
    return <Navigate to="/stores" replace />
  }

  const activeService = service || store.bookingServices[0]

  function handleBook(e: FormEvent) {
    e.preventDefault()
    setBooked(true)
  }

  return (
    <div className="bg-surface">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-slate-500 sm:px-5 lg:px-8">
          <Link to="/stores" className="shrink-0 transition hover:text-brand-blue">
            Stores
          </Link>
          <span className="shrink-0 text-slate-300">›</span>
          <span className="truncate font-medium text-navy">{store.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-5 sm:py-8 lg:px-8 lg:py-10">
        {/* Hero image */}
        <Reveal variant="fade" className="relative overflow-hidden rounded-2xl">
          <img
            src={store.image}
            alt={store.name}
            className="aspect-[21/9] min-h-[180px] w-full object-cover sm:min-h-[220px] lg:aspect-[2.4/1]"
          />
          <span
            className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-white shadow sm:right-4 sm:top-4 ${
              store.open ? 'bg-brand-green' : 'bg-red-500'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {store.open ? 'Open Now' : 'Closed'}
          </span>
        </Reveal>

        {/* Two-column layout */}
        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Left column */}
          <div className="min-w-0 space-y-5 sm:space-y-6">
            {/* Info card */}
            <Reveal as="section" className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-brand-blue px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-white">
                  {store.category}
                </span>
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={i < Math.round(store.rating) ? '#FBBF24' : '#E2E8F0'}
                      >
                        <path d="M12 2l2.9 6.6L22 9.3l-5 4.7 1.4 7-6.4-3.6L5.6 21 7 14 2 9.3l7.1-.7L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span>
                    {store.rating.toFixed(1)} ({store.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-navy sm:text-[1.85rem]">
                {store.name}
              </h1>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-body">{store.description}</p>
            </Reveal>

            {/* Services */}
            <Reveal as="section" delay={80} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-navy">Our Services</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {store.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-brand-blue"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Hours */}
            <Reveal as="section" delay={120} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-navy">Operating Hours</h2>
              <ul className="mt-4 divide-y divide-slate-100">
                {store.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <span className="font-medium text-navy">{h.day}</span>
                    <span className={h.closed ? 'font-semibold text-red-500' : 'text-slate-600'}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Contact */}
            <Reveal as="section" delay={160} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-navy">Contact Information</h2>
              <ul className="mt-4 space-y-4">
                <ContactRow
                  label="Phone Number"
                  value={store.phone}
                  href={`tel:${store.phone.replace(/\s/g, '')}`}
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
                    </svg>
                  }
                />
                <ContactRow
                  label="Email Address"
                  value={store.email}
                  href={`mailto:${store.email}`}
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  }
                />
                <ContactRow
                  label="Website"
                  value={store.website}
                  href={`https://${store.website}`}
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                    </svg>
                  }
                />
              </ul>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 sm:space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* Booking */}
            <Reveal as="section" variant="right" className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-navy">Book an Appointment</h2>
              <p className="mt-1 text-sm text-slate-500">{store.bookingCaption}</p>

              {booked ? (
                <div className="mt-5 rounded-xl border border-brand-green/30 bg-emerald-50 p-4 text-center">
                  <p className="font-semibold text-emerald-800">Appointment requested!</p>
                  <p className="mt-1 text-sm text-emerald-700">
                    {activeService} on {selectedDate} {calendar.label.split(' ')[0]} at {selectedTime}
                  </p>
                  <button
                    type="button"
                    onClick={() => setBooked(false)}
                    className="mt-3 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    Book another slot
                  </button>
                </div>
              ) : (
                <form className="mt-5 space-y-5" onSubmit={handleBook}>
                  <div>
                    <label className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                      Select Service
                    </label>
                    <select
                      value={activeService}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-navy outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                    >
                      {store.bookingServices.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <button
                        type="button"
                        aria-label="Previous month"
                        onClick={() => setMonthOffset((m) => m - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                      >
                        ‹
                      </button>
                      <p className="text-sm font-semibold text-navy">{calendar.label}</p>
                      <button
                        type="button"
                        aria-label="Next month"
                        onClick={() => setMonthOffset((m) => m + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                      >
                        ›
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {calendar.days.map((d) => {
                        const active =
                          selectedDate === d.date && selectedMonthOffset === monthOffset
                        return (
                          <button
                            key={d.date}
                            type="button"
                            onClick={() => {
                              setSelectedDate(d.date)
                              setSelectedMonthOffset(monthOffset)
                            }}
                            className={`flex flex-col items-center rounded-lg py-2 text-xs transition ${
                              active
                                ? 'bg-brand-blue text-white'
                                : 'text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <span className={active ? 'font-bold' : 'font-medium text-slate-400'}>
                              {d.date}
                            </span>
                            <span className={active ? 'font-semibold' : ''}>{d.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                      Available Time Slots
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {store.timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`rounded-lg py-2.5 text-sm font-semibold transition ${
                            selectedTime === t
                              ? 'bg-brand-blue text-white'
                              : 'border border-slate-200 bg-white text-navy hover:border-brand-blue/40'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!store.open}
                    className="btn-press w-full rounded-lg bg-brand-blue py-3 text-sm font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:hover:transform-none"
                  >
                    {store.open ? 'Book Appointment' : 'Currently Closed'}
                  </button>
                </form>
              )}
            </Reveal>

            {/* Map */}
            <Reveal as="section" variant="right" delay={100} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <iframe
                title={`${store.name} map`}
                src={store.mapEmbed}
                className="h-40 w-full border-0 sm:h-44"
                loading="lazy"
              />
              <div className="p-4 sm:p-5">
                <p className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#EF4444">
                    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                  </svg>
                  Physical Address
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy">{store.address}</p>
              </div>
            </Reveal>

            {/* Manager */}
            <Reveal as="section" variant="right" delay={160} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
              <img
                src={store.manager.photo}
                alt={store.manager.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-semibold text-navy">
                  <span className="truncate">{store.manager.name}</span>
                  <svg
                    className="shrink-0 text-brand-green"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-label="Verified"
                  >
                    <path d="M12 2l2.1 2.1L16.8 3l.8 2.7L20.3 7l-.9 2.6 1.9 2.1-1.9 2.1.9 2.6-2.7.3-.8 2.7-2.7-1.1L12 22l-2.1-2.1L7.2 21l-.8-2.7L3.7 17l.9-2.6L2.7 12.3l1.9-2.1L3.7 7.6l2.7-.3.8-2.7 2.7 1.1L12 2zm-1.2 13.3l5.5-5.5-1.4-1.4-4.1 4.1-2-2-1.4 1.4 3.4 3.4z" />
                  </svg>
                </p>
                <p className="text-sm text-slate-500">{store.manager.title}</p>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Gallery */}
        <Reveal as="section" className="mt-8 sm:mt-10">
          <h2 className="text-xl font-bold text-navy">Store Gallery</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {store.gallery.map((img, i) => (
              <div key={img} className="img-zoom overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`${store.name} gallery ${i + 1}`}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Reviews */}
        <Reveal as="section" delay={80} className="mt-8 pb-4 sm:mt-10 sm:pb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-navy">What Customers Say</h2>
            <button
              type="button"
              onClick={() => setReviewOpen((v) => !v)}
              className="text-sm font-semibold text-brand-blue hover:underline"
            >
              Write a Review
            </button>
          </div>

          {reviewOpen && (
            <form
              className="mt-4 space-y-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault()
                setReviewOpen(false)
                alert('Thanks for your review! It will appear after moderation.')
              }}
            >
              <textarea
                required
                rows={3}
                placeholder="Share your experience..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
              />
              <div className="flex flex-wrap gap-2">
                <button
                  type="submit"
                  className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={() => setReviewOpen(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {store.reviews.map((review, i) => (
              <Reveal
                key={review.name}
                as="article"
                delay={i * 90}
                className="hover-lift rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-navy">{review.name}</p>
                      <p className="text-xs text-slate-400">{review.ago}</p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-600">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.6L22 9.3l-5 4.7 1.4 7-6.4-3.6L5.6 21 7 14 2 9.3l7.1-.7L12 2z" />
                    </svg>
                    {review.rating}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">{review.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

function ContactRow({
  label,
  value,
  href,
  icon,
}: {
  label: string
  value: string
  href: string
  icon: ReactNode
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <a href={href} className="break-all text-sm font-medium text-navy hover:text-brand-blue" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
          {value}
        </a>
      </div>
    </li>
  )
}
