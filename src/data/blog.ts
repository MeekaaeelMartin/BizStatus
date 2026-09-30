export type BlogPost = {
  id: string
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  author: string
  readTime: string
  image: string
  featured?: boolean
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'featured',
    slug: 'transforming-south-african-storefronts',
    category: 'Retail Growth',
    date: 'April 20, 2026',
    title: 'Transforming South African storefronts with digital transparency',
    excerpt:
      'An in-depth look at how the real-time open/closed status trend is boosting sales for small-scale local retailers by reducing customer uncertainty and friction.',
    author: 'Thabo Sithole',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'For decades, South African shoppers have relied on static opening hours — Google listings, handwritten signs, and word of mouth. The problem is obvious: load shedding, staff shortages, and sudden stock delays mean those hours are often wrong. Customers arrive to locked doors, and businesses lose foot traffic they never knew they had.',
      'Real-time open/closed status flips that script. When owners can toggle their live status from a phone in seconds, customers stop gambling on a drive across town. Early BizStatus merchants in Cape Town, Johannesburg, and Durban report fewer no-shows at the door and more confident walk-ins during peak hours.',
      'Transparency also builds trust. A store that consistently updates its status signals reliability. Shoppers start to treat that listing as the source of truth — ahead of outdated map pins — and return more often because the experience feels predictable.',
      'For small retailers competing with large franchises, this is a practical edge. You may not match national marketing budgets, but you can be the most honest about when you are actually open. That honesty converts into sales.',
      'Looking ahead, digital transparency will not stop at open/closed toggles. Appointment booking, SMS alerts, and suburb-level discovery are already stacking on top of live status. The storefronts that adopt early will own the habit of “check before you go” in their neighbourhoods.',
    ],
  },
  {
    id: '1',
    slug: 'succeeding-as-a-local-retail-shop-in-2026',
    category: 'Retail Growth',
    date: 'April 12, 2026',
    title: 'Succeeding as a local retail shop in 2026',
    excerpt:
      'How small businesses in South Africa are using dynamic live hours to capture foot traffic and beat larger franchise competitors.',
    author: 'Kabelo Dube',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Local retail in South Africa has never been more competitive. Franchise chains bring scale, but independent shops still win on neighbourhood knowledge, personal service, and speed. In 2026, the shops pulling ahead are the ones that remove uncertainty for their customers.',
      'Dynamic live hours are a simple lever with outsized impact. When a hardware store in Simon’s Town or a bookstore in Stellenbosch can flip status the moment they open — or pause during a sudden outage — nearby customers rearrange their errands accordingly.',
      'Merchants using BizStatus report that “Open Now” visibility drives impulse visits that static directories never captured. People searching during lunch breaks or after work filter for places they can actually reach in time.',
      'Beating franchises is not about matching every SKU. It is about being present, accurate, and bookable. Live status plus appointment slots for key cutting, fittings, or consultations turns a browse into a planned visit.',
      'If you run a single-location shop, start with a complete profile, a habit of toggling status, and a clear booking offer. Those three habits compound into foot traffic that larger competitors cannot easily copy.',
    ],
  },
  {
    id: '2',
    slug: 'the-rise-of-micro-appointments-post-lockdown',
    category: 'Scheduling',
    date: 'March 29, 2026',
    title: 'The rise of micro-appointments post-lockdown',
    excerpt:
      'Why scheduling specific slots for picking up goods or receiving diagnostics is the new customer expectation.',
    author: 'Sarah Jenkins',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Post-lockdown shopping behaviour never fully snapped back to walk-in chaos. Customers got used to timed slots — for vaccines, collections, and consultations — and they kept the preference for control.',
      'Micro-appointments are short, purpose-built bookings: a 15-minute key cut, a tyre check, a spa express facial, or a takeaway pickup window. They reduce queues for the business and waiting anxiety for the customer.',
      'For service-heavy categories like automotive, health & beauty, and repair, micro-slots also improve staff planning. Instead of guessing afternoon demand, managers see a filled calendar and staff accordingly.',
      'The expectation is now default in metros. If your competitors let customers book a slot on their phone, a “walk in and hope” model feels dated. Pair live open status with bookable times and you meet people where they already are.',
      'Start with three daily slots and one service type. Expand once the habit sticks. The goal is not a complex clinic system — it is a clear promise: arrive at 14:00 and you will be seen.',
    ],
  },
  {
    id: '3',
    slug: 'building-a-trust-first-brand-profile-in-south-africa',
    category: 'Branding',
    date: 'March 15, 2026',
    title: 'Building a trust-first brand profile in South Africa',
    excerpt:
      'Tips on verifying your physical address, gathering honest customer ratings, and why live status consistency matters.',
    author: 'Lindiwe Cele',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Trust is the currency of local discovery. Before a customer drives across Sandton or Umhlanga, they scan for signals: a verified address, recent reviews, and proof that the business is actually open.',
      'Start with verification. Confirm your physical address, phone, and operating hours on BizStatus. A verified manager badge tells shoppers a real person stands behind the listing — not a ghost profile.',
      'Honest ratings beat inflated ones. Encourage customers to leave specific feedback after appointments. Respond politely to criticism. Profiles that engage look alive; silent five-star walls look suspicious.',
      'Live status consistency is branding in motion. If your toggle says Open but the door is locked, you burn trust faster than any logo refresh can repair. Treat status updates as part of opening and closing ritual.',
      'Finally, keep visuals current. Gallery photos of your actual storefront, team, and services help customers recognise you on arrival. A trust-first profile is not decoration — it is operational honesty made visible.',
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0]
}

export function getRecentPosts(): BlogPost[] {
  return blogPosts.filter((p) => !p.featured)
}
