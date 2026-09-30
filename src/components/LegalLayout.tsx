import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

type LegalSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  related,
}: {
  eyebrow: string
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
  related: { label: string; to: string }
}) {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-[800px] px-4 pb-12 pt-10 sm:px-5 sm:pb-14 sm:pt-12 lg:px-8">
          <p className="hero-animate-item hero-delay-1 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-brand-blue sm:text-[0.8rem]">
            {eyebrow}
          </p>
          <h1 className="hero-animate-item hero-delay-2 mt-3 text-[1.85rem] font-extrabold tracking-tight text-white sm:text-[2.4rem]">
            {title}
          </h1>
          <p className="hero-animate-item hero-delay-3 mt-3 text-sm text-slate-400">
            Last updated: {updated}
          </p>
          <p className="hero-animate-item hero-delay-4 mt-5 text-[1rem] leading-relaxed text-slate-300">
            {intro}
          </p>
        </div>
      </section>

      <section className="bg-surface py-10 sm:py-14">
        <div className="mx-auto max-w-[800px] px-4 sm:px-5 lg:px-8">
          <Reveal className="space-y-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:space-y-10 sm:p-8 lg:p-10">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-lg font-bold text-navy sm:text-xl">{section.title}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-[0.95rem] leading-relaxed text-slate-body">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-slate-body">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <div className="border-t border-slate-100 pt-6">
              <p className="text-sm text-slate-500">
                Questions about this document?{' '}
                <Link to="/contact" className="font-semibold text-brand-blue hover:underline">
                  Contact us
                </Link>{' '}
                or read our{' '}
                <Link to={related.to} className="font-semibold text-brand-blue hover:underline">
                  {related.label}
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
