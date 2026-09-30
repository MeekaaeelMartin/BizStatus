export type StoreReview = {
  name: string
  ago: string
  rating: number
  text: string
  avatar: string
}

export type StoreDetail = {
  id: string
  slug: string
  name: string
  category: string
  filter: string
  rating: number
  reviewCount: number
  location: string
  address: string
  open: boolean
  image: string
  gallery: string[]
  description: string
  services: string[]
  hours: { day: string; time: string; closed?: boolean }[]
  phone: string
  email: string
  website: string
  mapEmbed: string
  manager: {
    name: string
    title: string
    photo: string
  }
  bookingServices: string[]
  bookingCaption: string
  timeSlots: string[]
  reviews: StoreReview[]
}

export const stores: StoreDetail[] = [
  {
    id: '1',
    slug: 'cape-point-hardware',
    name: 'Cape Point Hardware',
    category: 'Retail & Repair',
    filter: 'Retail & Repair',
    rating: 4.8,
    reviewCount: 142,
    location: "Simon's Town, Cape Town",
    address: "12 Main Road, Simon's Town, Cape Town 7975",
    open: true,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80',
    ],
    description:
      "Cape Point Hardware has been serving the Simon's Town community and greater Cape Peninsula for over 25 years. We specialize in marine-grade hardware, general building supplies, expert key cutting, tool rentals, and personalized home repair consultations. Our knowledgeable staff is always ready to help you find the exact fit for your coastal DIY and structural maintenance projects.",
    services: [
      'Building Materials',
      'Power Tools',
      'Garden Supplies',
      'Plumbing',
      'Electrical',
      'Paint',
      'Key Cutting',
      'Delivery',
    ],
    hours: [
      { day: 'Monday - Friday', time: '07:30 - 17:30' },
      { day: 'Saturday', time: '08:00 - 14:00' },
      { day: 'Sunday', time: 'Closed', closed: true },
    ],
    phone: '+27 (0)21 786 1142',
    email: 'info@capepointhardware.co.za',
    website: 'www.capepointhardware.co.za',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=18.420%2C-34.200%2C18.445%2C-34.185&layer=mapnik&marker=-34.193%2C18.432',
    manager: {
      name: 'James van der Merwe',
      title: 'Store Manager (Verified)',
      photo:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    },
    bookingServices: [
      'Key Cutting & Locksmithing',
      'Tool Rental',
      'Repair Consultation',
      'Delivery Booking',
    ],
    bookingCaption: 'Schedule tool rentals or repair consults',
    timeSlots: ['09:00', '11:30', '14:00'],
    reviews: [
      {
        name: 'Sarah Jenkins',
        ago: '2 days ago',
        rating: 5,
        text: 'The best hardware store in the Cape Peninsula! James and the team helped me find the perfect anti-rust marine screws for my boat canopy. Highly recommended for friendly service and niche items.',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Devon Petersen',
        ago: '1 week ago',
        rating: 5,
        text: 'Great selection of quality power tools and garden accessories. Key cutting was super fast and everything worked perfectly. Only wish they were open later on Saturdays.',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Annatjie Coetzee',
        ago: '3 weeks ago',
        rating: 5,
        text: 'Absolutely wonderful coastal hardware shop! They have standard building supplies but keep the local charm. James is incredibly knowledgeable and always ready to share helpful tips for coastal home maintenance.',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
  {
    id: '2',
    slug: 'durban-curry-hub',
    name: 'Durban Curry Hub',
    category: 'Restaurant',
    filter: 'Restaurant & Cafe',
    rating: 4.9,
    reviewCount: 218,
    location: 'Umhlanga, Durban',
    address: '14 Lagoon Drive, Umhlanga Rocks, Durban 4320',
    open: true,
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a41f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    ],
    description:
      'Durban Curry Hub brings authentic KwaZulu-Natal flavours to Umhlanga with bunny chows, spicy curries, and freshly baked rotis. Our kitchen cooks to order so live status updates matter — when we are open, the pot is on. Reserve a table or schedule a takeaway pickup slot before you drive in.',
    services: [
      'Dine-In',
      'Takeaway',
      'Bunny Chow',
      'Vegetarian Options',
      'Halal Menu',
      'Catering',
      'Outdoor Seating',
      'Delivery',
    ],
    hours: [
      { day: 'Monday - Friday', time: '11:00 - 21:00' },
      { day: 'Saturday', time: '11:00 - 22:00' },
      { day: 'Sunday', time: '12:00 - 20:00' },
    ],
    phone: '+27 (0)31 561 8820',
    email: 'hello@durbancurryhub.co.za',
    website: 'www.durbancurryhub.co.za',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=31.070%2C-29.740%2C31.100%2C-29.715&layer=mapnik&marker=-29.728%2C31.085',
    manager: {
      name: 'Priya Naidoo',
      title: 'Store Manager (Verified)',
      photo:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    bookingServices: ['Table Booking', 'Takeaway Pickup', 'Group Catering', 'Private Dining'],
    bookingCaption: 'Reserve a table or schedule a pickup',
    timeSlots: ['12:00', '13:30', '19:00'],
    reviews: [
      {
        name: 'Thabo Molefe',
        ago: '1 day ago',
        rating: 5,
        text: 'The mutton bunny chow is legendary. Being able to check they were open before driving from Ballito saved us a wasted trip.',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Lisa Chetty',
        ago: '5 days ago',
        rating: 5,
        text: 'Spicy, authentic, and consistently great. Booking a pickup slot meant no queue when we arrived.',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Johan Botha',
        ago: '2 weeks ago',
        rating: 4,
        text: 'Fantastic flavours. Only reason for 4 stars is it gets busy on Friday nights — book ahead!',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
  {
    id: '3',
    slug: 'gauteng-auto-mechanic',
    name: 'Gauteng Auto Mechanic',
    category: 'Automotive',
    filter: 'Automotive',
    rating: 4.5,
    reviewCount: 96,
    location: 'Midrand, Johannesburg',
    address: '88 Old Pretoria Road, Midrand, Johannesburg 1685',
    open: false,
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600&q=80',
    ],
    description:
      'Gauteng Auto Mechanic is a trusted Midrand workshop for diagnostics, servicing, and roadside-ready repairs. Our technicians specialise in German and Japanese vehicles, with transparent quoting and live open/closed updates so you never wait outside a closed bay.',
    services: [
      'Diagnostics',
      'Oil Change',
      'Brake Service',
      'Tyre Fitting',
      'Battery Replacement',
      'Aircon Regas',
      'Fleet Service',
      'Towing Liaison',
    ],
    hours: [
      { day: 'Monday - Friday', time: '07:00 - 17:00' },
      { day: 'Saturday', time: '08:00 - 13:00' },
      { day: 'Sunday', time: 'Closed', closed: true },
    ],
    phone: '+27 (0)11 805 4432',
    email: 'bookings@gautengauto.co.za',
    website: 'www.gautengauto.co.za',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=28.110%2C-25.995%2C28.150%2C-25.970&layer=mapnik&marker=-25.983%2C28.130',
    manager: {
      name: 'Sipho Dlamini',
      title: 'Store Manager (Verified)',
      photo:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
    },
    bookingServices: [
      'Full Service',
      'Diagnostics',
      'Brake Inspection',
      'Tyre Fitting',
    ],
    bookingCaption: 'Book a bay before you drop off your car',
    timeSlots: ['08:00', '10:30', '13:00'],
    reviews: [
      {
        name: 'Michelle van Wyk',
        ago: '3 days ago',
        rating: 5,
        text: 'Honest pricing and they told me exactly when they would reopen on BizStatus. Smooth experience.',
        avatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Kagiso Molefe',
        ago: '1 week ago',
        rating: 4,
        text: 'Good work on my brakes. Booking a slot meant I did not sit in the waiting room all morning.',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Emma Roux',
        ago: '2 weeks ago',
        rating: 5,
        text: 'Professional team. Live status is useful on weekends when hours change.',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
  {
    id: '4',
    slug: 'kirstenbosch-tea-room',
    name: 'Kirstenbosch Tea Room',
    category: 'Cafe',
    filter: 'Restaurant & Cafe',
    rating: 4.7,
    reviewCount: 164,
    location: 'Newlands, Cape Town',
    address: 'Kirstenbosch Drive, Newlands, Cape Town 7700',
    open: true,
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    ],
    description:
      'Nestled beside the gardens, Kirstenbosch Tea Room serves light lunches, cakes, and specialty coffee with mountain views. Capacity fills fast on weekends — check live status and book a table so you do not miss your garden walk for a closed kitchen.',
    services: [
      'Coffee & Tea',
      'Light Lunches',
      'Cakes',
      'Outdoor Seating',
      'Vegetarian',
      'Kids Menu',
      'Takeaway',
      'Private Events',
    ],
    hours: [
      { day: 'Monday - Friday', time: '09:00 - 17:00' },
      { day: 'Saturday', time: '08:30 - 17:30' },
      { day: 'Sunday', time: '08:30 - 17:00' },
    ],
    phone: '+27 (0)21 761 2866',
    email: 'hello@kirstenboschtearoom.co.za',
    website: 'www.kirstenboschtearoom.co.za',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=18.420%2C-33.995%2C18.445%2C-33.975&layer=mapnik&marker=-33.987%2C18.432',
    manager: {
      name: 'Naledi Jacobs',
      title: 'Store Manager (Verified)',
      photo:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    bookingServices: ['Table for 2', 'Table for 4', 'Garden Picnic Basket', 'Private Hire'],
    bookingCaption: 'Reserve a table overlooking the gardens',
    timeSlots: ['09:30', '11:00', '14:30'],
    reviews: [
      {
        name: 'Claire Adams',
        ago: '2 days ago',
        rating: 5,
        text: 'Beautiful setting and the scones are perfect. Booking ahead on a Saturday was essential.',
        avatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Pieter de Wet',
        ago: '6 days ago',
        rating: 4,
        text: 'Great coffee and views. Live open status helped after a long garden walk.',
        avatar:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Fatima Hendricks',
        ago: '2 weeks ago',
        rating: 5,
        text: 'Friendly staff and delicious cakes. Will book again for our next visit.',
        avatar:
          'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
  {
    id: '5',
    slug: 'joburg-wellness-spa',
    name: 'Joburg Wellness Spa',
    category: 'Health & Beauty',
    filter: 'Health & Beauty',
    rating: 4.6,
    reviewCount: 87,
    location: 'Sandton, Johannesburg',
    address: '5th Street, Sandton City Precinct, Johannesburg 2196',
    open: false,
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    ],
    description:
      'Joburg Wellness Spa offers massage therapy, facials, and recovery treatments in the Sandton CBD. Therapists update live availability throughout the day — book a slot and confirm we are open before you leave the office.',
    services: [
      'Swedish Massage',
      'Deep Tissue',
      'Facials',
      'Manicure & Pedicure',
      'Hot Stone',
      'Couples Treatment',
      'Gift Vouchers',
      'Corporate Packages',
    ],
    hours: [
      { day: 'Monday - Friday', time: '09:00 - 19:00' },
      { day: 'Saturday', time: '09:00 - 17:00' },
      { day: 'Sunday', time: 'Closed', closed: true },
    ],
    phone: '+27 (0)11 783 2201',
    email: 'book@joburgwellness.co.za',
    website: 'www.joburgwellness.co.za',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=28.040%2C-26.115%2C28.065%2C-26.095&layer=mapnik&marker=-26.105%2C28.052',
    manager: {
      name: 'Thandi Mokoena',
      title: 'Store Manager (Verified)',
      photo:
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=200&q=80',
    },
    bookingServices: [
      '60-min Massage',
      'Facial Treatment',
      'Couples Package',
      'Express Manicure',
    ],
    bookingCaption: 'Book a treatment before you leave work',
    timeSlots: ['10:00', '13:00', '16:30'],
    reviews: [
      {
        name: 'Amy Pretorius',
        ago: '4 days ago',
        rating: 5,
        text: 'Relaxing atmosphere and skilled therapists. The booking system made scheduling easy.',
        avatar:
          'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Lebo Khumalo',
        ago: '1 week ago',
        rating: 4,
        text: 'Great facial. Check live status — they close early some weekdays.',
        avatar:
          'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Nina Shah',
        ago: '3 weeks ago',
        rating: 5,
        text: 'Perfect after a long week in Sandton. Will book again.',
        avatar:
          'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
  {
    id: '6',
    slug: 'the-book-nook',
    name: 'The Book Nook',
    category: 'Books & Stationery',
    filter: 'Retail & Repair',
    rating: 4.9,
    reviewCount: 73,
    location: 'Stellenbosch',
    address: '22 Church Street, Stellenbosch 7600',
    open: true,
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    ],
    description:
      'The Book Nook is an independent Stellenbosch bookstore with curated fiction, local authors, and stationery. We host reading circles and signing events — check live hours before you wander down Church Street, especially on quiet Mondays.',
    services: [
      'New Books',
      'Second-hand',
      'Stationery',
      'Gift Wrapping',
      'Local Authors',
      'Book Clubs',
      'Orders',
      'Event Space',
    ],
    hours: [
      { day: 'Monday - Friday', time: '09:00 - 18:00' },
      { day: 'Saturday', time: '09:00 - 16:00' },
      { day: 'Sunday', time: '10:00 - 14:00' },
    ],
    phone: '+27 (0)21 883 2910',
    email: 'hello@thebooknook.co.za',
    website: 'www.thebooknook.co.za',
    mapEmbed:
      'https://www.openstreetmap.org/export/embed.html?bbox=18.850%2C-33.940%2C18.875%2C-33.925&layer=mapnik&marker=-33.932%2C18.860',
    manager: {
      name: 'Willem Basson',
      title: 'Store Manager (Verified)',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    bookingServices: [
      'Book Club Seat',
      'Author Signing',
      'Personal Shopping',
      'Gift Wrap & Collect',
    ],
    bookingCaption: 'Reserve a reading-club seat or collect order',
    timeSlots: ['10:00', '12:30', '15:00'],
    reviews: [
      {
        name: 'Hannah Greyling',
        ago: '1 day ago',
        rating: 5,
        text: 'Charming shop with a brilliant South African section. Staff recommendations are spot on.',
        avatar:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Andre du Plessis',
        ago: '5 days ago',
        rating: 5,
        text: 'Love checking they are open before parking downtown. Always a gem of a find.',
        avatar:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=100&q=80',
      },
      {
        name: 'Zanele Nkosi',
        ago: '2 weeks ago',
        rating: 4,
        text: 'Beautiful stationery and calm vibe. Book club booking worked perfectly.',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      },
    ],
  },
]

export function getStoreBySlug(slug: string): StoreDetail | undefined {
  return stores.find((s) => s.slug === slug)
}

export function getStoreById(id: string): StoreDetail | undefined {
  return stores.find((s) => s.id === id)
}
