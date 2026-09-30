import { Link, useParams, Navigate } from 'react-router-dom'
import { getPostBySlug, blogPosts } from '../data/blog'

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="bg-surface">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[800px] items-center gap-2 overflow-x-auto px-4 py-3 text-sm text-slate-500 sm:px-5 lg:max-w-[900px] lg:px-8">
          <Link to="/blog" className="shrink-0 text-brand-blue hover:underline">
            Blog
          </Link>
          <span className="shrink-0 text-slate-300">›</span>
          <span className="truncate font-medium text-navy">{post.title}</span>
        </div>
      </div>

      <article className="mx-auto max-w-[800px] px-4 py-8 sm:px-5 sm:py-12 lg:max-w-[900px] lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand-blue px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-white">
            {post.category}
          </span>
          <span className="text-sm text-slate-500">{post.date}</span>
          <span className="text-sm text-slate-400">•</span>
          <span className="text-sm text-slate-500">{post.readTime}</span>
        </div>

        <h1 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-tight text-navy sm:text-[2.25rem] lg:text-[2.5rem]">
          {post.title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-body sm:text-lg">{post.excerpt}</p>

        <div className="mt-5 flex items-center gap-3 border-b border-slate-200 pb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
            {post.author
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">By {post.author}</p>
            <p className="text-xs text-slate-500">{post.date}</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" />
        </div>

        <div className="mt-8 space-y-5 sm:mt-10">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-[1.05rem] leading-[1.75] text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-navy">Ready to list your business?</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-body">
            Join thousands of South African businesses using live status and smart bookings on
            BizStatus.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/pricing"
              className="rounded-lg bg-brand-blue px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-600"
            >
              View Pricing
            </Link>
            <Link
              to="/stores"
              className="rounded-lg border border-slate-200 px-5 py-2.5 text-center text-sm font-semibold text-navy hover:bg-slate-50"
            >
              Browse Stores
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-5 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-extrabold text-navy">More Insights</h2>
              <Link to="/blog" className="text-sm font-semibold text-brand-blue hover:underline">
                Back to Blog
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="text-[0.7rem] font-bold uppercase tracking-wide text-brand-blue">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-[1.05rem] font-bold leading-snug text-navy group-hover:text-brand-blue">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-400">By {item.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
