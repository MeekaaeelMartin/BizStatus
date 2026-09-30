import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function resetForm() {
    setSubmitted(false)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-[700px] px-4 pb-12 pt-10 text-center sm:px-5 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand-blue sm:text-[0.8rem]">
            Get in Touch
          </p>
          <h1 className="mt-3 text-[1.75rem] font-extrabold tracking-tight text-white sm:text-[2.25rem] lg:text-[2.6rem]">
            How can we help you?
          </h1>
          <p className="mt-4 text-[0.98rem] text-slate-400 sm:text-[1.05rem]">
            We typically respond to all inquiries within 4 business hours.
          </p>
        </div>
      </section>

      <section className="bg-surface py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-5 lg:px-8">
          <Reveal className="grid gap-8 overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/70 sm:gap-10 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-10">
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-navy">Send Us a Message</h2>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-brand-green/30 bg-emerald-50 p-6 text-center">
                  <p className="font-semibold text-emerald-800">Message sent!</p>
                  <p className="mt-1 text-sm text-emerald-700">
                    Thanks{name ? `, ${name.split(' ')[0]}` : ''} — we&apos;ll get back to you within
                    4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-4 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Sipho Mandela"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sipho@mandela.co.za"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your details or inquiries here..."
                      className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-press w-full rounded-lg bg-brand-blue py-3.5 text-sm font-semibold text-white hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-7 border-t border-slate-100 pt-8 sm:space-y-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div>
                <h3 className="text-[1.05rem] font-bold text-navy">Business Inquiries</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">
                  Want to claim multiple listings or inquire about APIs? Email us at{' '}
                  <a
                    href="mailto:partners@bizstatus.co.za"
                    className="font-medium text-brand-green hover:underline"
                  >
                    partners@bizstatus.co.za
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-[1.05rem] font-bold text-navy">Customer Support</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">
                  Need help with your client appointment bookings? Raise a ticket at{' '}
                  <a
                    href="mailto:support@bizstatus.co.za"
                    className="font-medium text-brand-green hover:underline"
                  >
                    support@bizstatus.co.za
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-[1.05rem] font-bold text-navy">Head Office</h3>
                <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-slate-body">
                  <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="#EF4444">
                    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
                  </svg>
                  Workshop 17, Watershed, V&A Waterfront, Cape Town, 8002
                </p>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <iframe
                    title="BizStatus Head Office Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=18.412%2C-33.910%2C18.425%2C-33.900&layer=mapnik&marker=-33.905%2C18.4185"
                    className="h-40 w-full grayscale-[30%] contrast-[0.95] sm:h-44"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
