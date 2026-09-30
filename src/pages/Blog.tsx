import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedPost, getRecentPosts } from '../data/blog'
import { Reveal } from '../components/Reveal'

const categories = ['All', 'Retail Growth', 'Scheduling', 'Branding']

export function Blog() {
  const [active, setActive] = useState('All')
  const featured = getFeaturedPost()
  const posts = getRecentPosts()
  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 pb-10 pt-8 sm:gap-10 sm:px-5 sm:pb-14 sm:pt-10 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-16 lg:pt-12">
          <Link to={`/blog/${featured.slug}`} className="img-zoom block overflow-hidden rounded-2xl">
            <img
              src={featured.image}
              alt={featured.title}
              className="aspect-[16/10] w-full object-cover lg:aspect-[4/3]"
            />
          </Link>

          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.6L22 9.3l-5 4.7 1.4 7-6.4-3.6L5.6 21 7 14 2 9.3l7.1-.7L12 2z" />
              </svg>
              Featured Article
            </span>

            <Link to={`/blog/${featured.slug}`}>
              <h1 className="mt-4 text-[1.55rem] font-extrabold leading-tight tracking-tight text-white transition hover:text-blue-100 sm:mt-5 sm:text-[1.85rem] lg:text-[2.25rem]">
                {featured.title}
              </h1>
            </Link>

            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-400 sm:text-[1rem]">
              {featured.excerpt}
            </p>

            <p className="mt-5 text-sm text-slate-500 sm:mt-6">
              By {featured.author} • {featured.readTime}
            </p>

            <Link
              to={`/blog/${featured.slug}`}
              className="btn-press mt-6 inline-flex rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Read Article
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-[1.4rem] font-extrabold tracking-tight text-navy sm:text-[1.65rem]">
              Recent Insights & Stories
            </h2>

            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:overflow-visible">
              {categories.map((cat) => {
                const isActive = active === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-[0.8rem] font-semibold transition ${
                      isActive
                        ? 'bg-brand-blue text-white'
                        : 'border border-slate-200 bg-white text-navy hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-slate-500">No articles in this category yet.</p>
          ) : (
            <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <Reveal
                  key={post.id}
                  delay={i * 80}
                  className="hover-lift overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/70"
                >
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <div className="img-zoom aspect-[16/10]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[0.7rem] font-bold uppercase tracking-wide text-brand-blue">
                          {post.category}
                        </span>
                        <span className="shrink-0 text-xs text-slate-400">{post.date}</span>
                      </div>
                      <h3 className="mt-2.5 text-[1.05rem] font-bold leading-snug text-navy transition-colors group-hover:text-brand-blue">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-body">{post.excerpt}</p>
                      <p className="mt-4 text-xs text-slate-400">By {post.author}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
