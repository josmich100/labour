export interface EventItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  county: string;
  category: string;
  description: string;
  image: string;
  capacity: number;
  registered: number;
  isPast: boolean;
  organizer: string;
  mapEmbed?: string;
  agenda?: { time: string; activity: string }[];
}

export const EVENTS: EventItem[] = [
  {
    id: "1",
    slug: "national-workers-convention-2026",
    title: "National Workers Convention",
    date: "2026-02-15",
    time: "08:00 AM – 06:00 PM",
    venue: "Nairobi Convention Centre",
    city: "Nairobi",
    county: "Nairobi",
    category: "Convention",
    description:
      "The flagship annual gathering of Labour Party of Kenya members, trade union leaders, civil society representatives, and workers from across the country. This year's theme is 'Dignity at Work: Building Kenya's Future Together'. Expect keynote speeches, policy workshops, and the announcement of LPK's 2026 action plan.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 3000,
    registered: 2450,
    isPast: false,
    organizer: "LPK National Secretariat",
  },
  {
    id: "2",
    slug: "youth-leadership-summit-mombasa",
    title: "Youth Leadership Summit",
    date: "2026-02-20",
    time: "09:00 AM – 05:00 PM",
    venue: "Pride Inn Paradise Beach Resort",
    city: "Mombasa",
    county: "Mombasa",
    category: "Summit",
    description:
      "The second annual LPK Youth Leadership Summit brings together over 2,000 young Kenyans aged 18-35 from across the country. Themed 'Young Voices, Bold Kenya', the summit features mentorship sessions, entrepreneurship clinics, and a youth manifesto drafting workshop.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 2000,
    registered: 1850,
    isPast: false,
    organizer: "LPK Youth Wing",
  },
  {
    id: "3",
    slug: "community-town-hall-kisumu",
    title: "Community Town Hall — Kisumu",
    date: "2026-02-28",
    time: "10:00 AM – 02:00 PM",
    venue: "Kisumu Community Centre",
    city: "Kisumu",
    county: "Kisumu",
    category: "Town Hall",
    description:
      "Part of LPK's nationwide 'LPK Listens' consultation exercise. Residents of Kisumu and surrounding areas are invited to engage directly with party leadership on issues of local importance including the revival of the Kisumu Port, healthcare access, and youth unemployment.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 500,
    registered: 320,
    isPast: false,
    organizer: "LPK Kisumu Chapter",
  },
  {
    id: "4",
    slug: "women-in-leadership-forum-nakuru",
    title: "Women in Leadership Forum",
    date: "2026-03-05",
    time: "08:30 AM – 04:00 PM",
    venue: "Nakuru War Memorial Hospital Conference Centre",
    city: "Nakuru",
    county: "Nakuru",
    category: "Forum",
    description:
      "The third annual Women in Leadership Forum spotlights the achievements of women in public office, business, and community leadership across Kenya. Featuring panel discussions, networking, and the launch of LPK's Women in Leadership mentorship programme.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 800,
    registered: 620,
    isPast: false,
    organizer: "LPK Women's League",
  },
  {
    id: "5",
    slug: "national-members-convention-kasarani",
    title: "National Members Convention — 50K Celebration",
    date: "2026-03-15",
    time: "10:00 AM – 08:00 PM",
    venue: "Kasarani Sports Complex",
    city: "Nairobi",
    county: "Nairobi",
    category: "Convention",
    description:
      "A historic celebration of LPK's milestone of 50,000 registered members. All members are welcome. Features cultural performances, policy workshops, a gala dinner, and the launch of LPK's 2026–2031 Strategic Plan.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 10000,
    registered: 7800,
    isPast: false,
    organizer: "LPK National Secretariat",
  },
  {
    id: "6",
    slug: "farmers-forum-eldoret",
    title: "Smallholder Farmers Forum",
    date: "2026-03-22",
    time: "09:00 AM – 03:00 PM",
    venue: "Eldoret Convention Centre",
    city: "Eldoret",
    county: "Uasin Gishu",
    category: "Forum",
    description:
      "LPK Agricultural Policy Unit convenes farmers from the Rift Valley region to discuss the implementation of the Smallholder Support Programme, input costs, and market access challenges.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 600,
    registered: 380,
    isPast: false,
    organizer: "LPK Agricultural Policy Unit",
  },
  {
    id: "7",
    slug: "workers-protection-bill-public-hearing-nairobi",
    title: "Workers Protection Bill — Public Hearing (Nairobi)",
    date: "2026-01-15",
    time: "09:00 AM – 05:00 PM",
    venue: "KICC, Nairobi",
    city: "Nairobi",
    county: "Nairobi",
    category: "Public Hearing",
    description:
      "Public participation forum on the Workers Protection Bill 2026. Over 800 workers, employers, and unions attended to give their views to the Labour Committee.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 800,
    registered: 800,
    isPast: true,
    organizer: "LPK Legislative Team",
  },
  {
    id: "8",
    slug: "klp-end-year-gala-2025",
    title: "LPK End-of-Year Gala & Awards Night 2025",
    date: "2025-12-12",
    time: "06:00 PM – 11:00 PM",
    venue: "Radisson Blu Hotel, Nairobi",
    city: "Nairobi",
    county: "Nairobi",
    category: "Gala",
    description:
      "Annual awards night recognising outstanding members, county coordinators, and allies. The 2025 edition also marked LPK's 31st year of advocacy.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg",
    capacity: 400,
    registered: 400,
    isPast: true,
    organizer: "LPK National Secretariat",
  },
];
