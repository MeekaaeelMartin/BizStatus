import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const navItems = [
  { to: '/', label: 'Home', match: (path: string) => path === '/' },
  { to: '/stores', label: 'Stores', match: (path: string) => path.startsWith('/stores') },
  { to: '/pricing', label: 'Pricing', match: (path: string) => path.startsWith('/pricing') },
  { to: '/blog', label: 'Blog', match: (path: string) => path.startsWith('/blog') },
  { to: '/contact', label: 'Contact', match: (path: string) => path.startsWith('/contact') },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-5 lg:px-8">
        <Link to="/" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
          <Logo variant="light" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => {
            const isActive = item.match(location.pathname)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative pb-1 text-[0.95rem] font-medium transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-brand-blue transition-all duration-300 ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          <Link
            to="/pricing"
            className="btn-press rounded-lg bg-brand-blue px-5 py-2.5 text-[0.9rem] font-semibold text-white hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy px-4 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = item.match(location.pathname)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive ? 'bg-brand-blue/20 text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="mt-3 border-t border-white/10 pt-4">
              <Link
                to="/pricing"
                className="block rounded-lg bg-brand-blue px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
