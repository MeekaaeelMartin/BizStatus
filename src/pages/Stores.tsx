import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { stores } from '../data/stores'
import { Reveal } from '../components/Reveal'

const PAGE_SIZE = 6

const filters = [
  'All Listings',
  'Open Now',
  'Closed',
  'Retail & Repair',
  'Restaurant & Cafe',
  'Automotive',
  'Health & Beauty',
  'Medical',
]

export function Stores() {
  const [activeFilter, setActiveFilter] = useState('All Listings')
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const [submittedLocation, setSubmittedLocation] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return stores.filter((store) => {
      const q = submittedQuery.trim().toLowerCase()
      const loc = submittedLocation.trim().toLowerCase()

      const matchesQuery =
        !q ||
        store.name.toLowerCase().includes(q) ||
        store.category.toLowerCase().includes(q) ||
        store.services.some((s) => s.toLowerCase().includes(q))

      const matchesLocation =
        !loc ||
        store.location.toLowerCase().includes(loc) ||
        store.address.toLowerCase().includes(loc)

      let matchesFilter = true
      if (activeFilter === 'Open Now') matchesFilter = store.open
      else if (activeFilter === 'Closed') matchesFilter = !store.open
      else if (activeFilter === 'Medical') matchesFilter = store.filter === 'Medical'
      else if (activeFilter !== 'All Listings') {
        matchesFilter = store.filter === activeFilter || store.category === activeFilter
      }

      return matchesQuery && matchesLocation && matchesFilter
    })
  }, [activeFilter, submittedQuery, submittedLocation])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    setSubmittedQuery(query)
    setSubmittedLocation(location)
    setPage(1)
  }

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-[1200px] px-4 pb-10 pt-8 sm:px-5 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-14 lg:pt-12">
          <h1 className="text-center text-[1.75rem] font-extrabold tracking-tight text-white sm:text-[2.15rem] lg:text-[2.5rem]">
            Explore Verified South African Businesses
          </h1>

          <form onSubmit={handleSearch} className="mx-auto mt-6 max-w-4xl sm:mt-8">
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:flex-row sm:items-stretch">
              <label className="flex flex-1 items-center gap-3 border-b border-slate-100 px-4 py-3.5 sm:border-b-0">
                <svg
                  className="shrink-0 text-slate-400"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by business name, category, or keyword..."
                  className="w-full min-w-0 border-0 bg-transparent text-sm text-navy outline-none placeholder:text-slate-400"
                />
              </label>

              <div className="hidden w-px self-stretch bg-slate-200 sm:block" />

              <label className="flex flex-1 items-center gap-3 border-b border-slate-100 px-4 py-3.5 sm:max-w-[240px] sm:border-b-0 lg:max-w-[260px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#EF4444" className="shrink-0">
                  <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" fill="white" />
                </svg>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Select Location..."
                  className="w-full min-w-0 border-0 bg-transparent text-sm text-navy outline-none placeholder:text-slate-400"
                />
              </label>

              <div className="p-2 sm:p-1.5">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white btn-press hover:bg-blue-600 sm:h-full sm:min-w-[100px]"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="-mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
              {filters.map((filter) => {
                const active = activeFilter === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => {
                      setActiveFilter(filter)
                      setPage(1)
                    }}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-[0.78rem] font-medium transition sm:px-4 ${
                      active
                        ? 'bg-brand-blue text-white'
                        : 'border border-white/25 bg-transparent text-slate-300 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </form>
        </div>
      </section>

      <section className="bg-surface py-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5 lg:px-8">
          <p className="mb-5 text-sm text-slate-500">
            Showing {pageItems.length} of {filtered.length} businesses
          </p>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {pageItems.map((store, i) => (
              <Reveal
                key={store.id}
                as="article"
                delay={(i % 6) * 70}
                className="hover-lift flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/70"
              >
                <Link to={`/stores/${store.slug}`} className="img-zoom block aspect-[16/10]">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wide text-teal-600">
                      {store.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
                        <path d="M12 2l2.9 6.6L22 9.3l-5 4.7 1.4 7-6.4-3.6L5.6 21 7 14 2 9.3l7.1-.7L12 2z" />
                      </svg>
                      {store.rating.toFixed(1)}
                    </span>
                  </div>

                  <Link to={`/stores/${store.slug}`}>
                    <h3 className="mt-2 text-lg font-bold text-navy transition hover:text-brand-blue">
                      {store.name}
                    </h3>
                  </Link>

                  <p className="mt-1.5 flex items-start gap-1.5 text-sm text-slate-500">
                    <svg className="mt-0.5 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="#EF4444">
                      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                    </svg>
                    {store.location}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    {store.open ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Open Now
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-red-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Closed
                      </span>
                    )}

                    {store.open ? (
                      <Link
                        to={`/stores/${store.slug}`}
                        className="btn-press rounded-lg bg-brand-green px-4 py-2 text-[0.8rem] font-semibold text-white hover:bg-green-600"
                      >
                        Book Now
                      </Link>
                    ) : (
                      <Link
                        to={`/stores/${store.slug}`}
                        className="btn-press rounded-lg bg-red-400 px-4 py-2 text-[0.8rem] font-semibold text-white hover:bg-red-500"
                      >
                        View
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-slate-500">No businesses match your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('All Listings')
                  setQuery('')
                  setLocation('')
                  setSubmittedQuery('')
                  setSubmittedLocation('')
                  setPage(1)
                }}
                className="mt-3 text-sm font-semibold text-brand-blue hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition ${
                    currentPage === n
                      ? 'bg-brand-blue text-white'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
