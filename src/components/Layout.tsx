import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()
  const [enterKey, setEnterKey] = useState(location.pathname)

  useEffect(() => {
    setEnterKey(location.pathname)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div key={enterKey} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
