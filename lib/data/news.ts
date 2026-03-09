export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Policy" | "Events" | "Achievement" | "Press Release" | "Statement";
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    slug: "new-workers-protection-bill-2026",
    title: "New Workers Protection Bill Introduced in National Assembly",
    excerpt: "LPK legislators have tabled a comprehensive Workers Protection Bill that seeks to extend sick leave, maternity benefits, and establish a minimum wage review board.",
    content: `The Labour Party of Kenya has taken a bold step forward in championing workers' rights by introducing the Workers Protection Bill 2026 in the National Assembly. The landmark legislation, drafted over eighteen months in consultation with trade unions, civil society organisations, and workers across all 47 counties, proposes the most comprehensive overhaul of Kenya's labour laws in two decades.

**Key Provisions of the Bill**

The bill introduces a mandatory minimum wage adjustment formula tied to the annual inflation index, ensuring that the purchasing power of Kenya's workers is protected regardless of economic fluctuations. Currently, minimum wage reviews are discretionary and often lag significantly behind the cost of living.

Under the proposed legislation, all formal sector employees will be entitled to a minimum of 21 days of paid sick leave per year, up from the current 7 days. For workers dealing with chronic illness or disability, the bill provides for extended medical leave of up to 90 days without risk of termination.

Maternity benefits have also been substantially expanded. Female workers in both the public and private sector will receive 13 weeks of fully paid maternity leave, while paternity leave is extended from 14 days to 30 days — a provision LPK's Secretary General described as "essential for building equitable family structures in modern Kenya."

**Protecting Gig Economy Workers**

One of the most forward-looking aspects of the bill is its recognition of gig economy and informal sector workers. As platform-based work grows rapidly, millions of Kenyan workers — from ride-hailing drivers to freelance creatives — have been excluded from basic workplace protections. The bill proposes a new "dependent contractor" category that extends core labour protections to these workers while acknowledging the flexibility of their employment relationships.

**Opposition and Support**

The bill has received strong endorsement from the Central Organisation of Trade Unions (COTU) and the Federation of Kenya Employers (FKE), though the latter has raised concerns about the cost implications for small and medium enterprises. LPK has announced plans for a graduated implementation timeline that would give small businesses 18 months to comply with the new standards.

Speaking at the National Assembly, LPK Party Leader Dr. Amani Mwangi stated: "For too long, workers have been treated as a cost rather than an asset. This bill recognises that Kenya's greatest wealth is its people, and we must invest in their security and dignity."

**What Happens Next**

The bill has been committed to the Labour Committee for review. LPK is calling on all progressive legislators — regardless of party — to support its passage. Public participation hearings are scheduled across 15 counties in February and March 2026.`,
    category: "Policy",
    date: "2026-02-05",
    author: "Dr. Amani Mwangi",
    authorRole: "Party Leader",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200",
    tags: ["Workers Rights", "Legislation", "Bill 2026"],
    featured: true,
  },
  {
    id: "2",
    slug: "nationwide-town-hall-meetings-2026",
    title: "Nationwide Town Hall Meetings Announced for February",
    excerpt: "LPK will hold 47 simultaneous town hall meetings across all counties to consult citizens on the party manifesto and gather grassroots policy priorities.",
    content: `The Labour Party of Kenya has announced an ambitious nationwide consultation exercise that will see party officials, elected representatives, and policy experts hold simultaneous town hall meetings across every one of Kenya's 47 counties during the month of February 2026. The initiative, dubbed "LPK Listens", underscores the party's commitment to participatory democracy and bottom-up governance.

**Why Town Halls?**

Deputy Party Leader Hon. Grace Wanjiku explained the rationale at a press conference in Nairobi: "Policy must be shaped by the people it affects, not by technocrats in city offices. LPK Listens is our commitment to take the conversation to every corner of Kenya — from Turkana to Taita Taveta, from Mandera to Mombasa."

**Format and Focus Areas**

Each town hall is expected to run for approximately four hours and will be structured around four key thematic areas: economic empowerment and jobs, education and youth development, healthcare access, and land and housing rights. Participants will be given structured opportunity to both ask questions of their representatives and to contribute policy priorities that will directly inform the 2026 manifesto revision.

LPK has partnered with community radio stations in each county to broadcast the sessions live, ensuring citizens in remote areas without physical access can still participate. An SMS feedback line (+254 700 555 LPK) will also be active throughout the month.

**Registration and Attendance**

Attendance at the town halls is free and open to all Kenyans — members and non-members alike. LPK has urged county coordinators to work with local chiefs, school administrators, religious leaders, and civil society to mobilise attendance. Childcare facilities and accessibility accommodations will be provided at all venues.

The town hall schedule, venues, and registration portal are available on the LPK website and app.`,
    category: "Events",
    date: "2026-02-03",
    author: "Hon. Grace Wanjiku",
    authorRole: "Deputy Party Leader",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    tags: ["Town Hall", "Consultation", "47 Counties"],
    featured: true,
  },
  {
    id: "3",
    slug: "50000-new-members-milestone",
    title: "50,000 New Members Join the Movement in Record Recruitment Drive",
    excerpt: "Labour Party of Kenya has reached a historic milestone with its total membership surpassing the 50,000 mark, making it one of the fastest-growing labour-aligned parties in East Africa.",
    content: `In an extraordinary demonstration of popular support, the Labour Party of Kenya has achieved a historic milestone, registering its 50,000th member in a nationwide recruitment drive that ran through January 2026. The achievement makes LPK one of the fastest-growing political parties in Kenya and the leading labour-aligned political organisation in East Africa.

**By the Numbers**

The milestone was achieved just 18 months after LPK launched its "50K for Kenya" recruitment campaign. The new members span all age groups — with a notable 38% being between 18 and 35 years old, signalling strong youth engagement. Women constitute 44% of the new registrations, with the party surpassing its gender equity target of 40%.

Geographically, the growth has been truly nationwide. While Nairobi and Kisumu lead in absolute numbers, the fastest growth rates have been recorded in traditionally underserved regions: Turkana County saw a 340% increase in registered members, and Marsabit and Mandera have each established functional county chapters for the first time.

**Celebration Events**

To mark the milestone, LPK has announced a series of celebratory and reflective events. The centrepiece will be a National Members Convention at the Kasarani Sports Complex on March 15, 2026 — open to all 50,000+ members. The convention will feature policy workshops, entertainment, and the official unveiling of LPK's updated strategic plan for 2026–2031.

At county level, each chapter has been authorised to hold a local celebration event during the first week of March, funded by a special KES 20,000 grant from the party's national development fund.

**What Drives the Growth?**

Party leaders attribute the surge to several factors: the Workers Protection Bill generating national attention, the party's strong social media presence (LPK's TikTok account has amassed 850,000 followers in eight months), and the perceived openness and inclusivity of the party's internal processes.

Party Leader Dr. Amani Mwangi noted: "50,000 is not just a number. Each member is a Kenyan who believes that their voice, their future, and their family's dignity are worth fighting for. We are humbled and energised."`,
    category: "Achievement",
    date: "2026-01-30",
    author: "Communications Office",
    authorRole: "LPK Communications",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200",
    tags: ["Membership", "Milestone", "Growth"],
    featured: true,
  },
  {
    id: "4",
    slug: "universal-healthcare-policy-2026",
    title: "LPK Unveils Comprehensive Universal Healthcare Policy Framework",
    excerpt: "The party has published a detailed 40-page policy framework laying out a phased roadmap to achieve universal health coverage for all Kenyans by 2031.",
    content: `The Labour Party of Kenya has released its most detailed policy document to date — a 40-page Universal Healthcare Framework that charts a clear, costed, and phased path toward ensuring every Kenyan has access to quality healthcare regardless of income, county, or circumstance.

The framework, developed in partnership with the Kenya Medical Association and several international health policy experts, proposes a three-tier approach...`,
    category: "Policy",
    date: "2026-01-25",
    author: "Prof. James Omondi",
    authorRole: "Secretary General",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200",
    tags: ["Healthcare", "Policy", "Universal Coverage"],
  },
  {
    id: "5",
    slug: "youth-leadership-summit-2026",
    title: "LPK Youth Wing Sets Agenda for Annual Leadership Summit",
    excerpt: "Over 2,000 young Kenyans aged 18–35 are expected to gather in Mombasa for the LPK Youth Leadership Summit, themed 'Young Voices, Bold Kenya'.",
    content: `The LPK Youth Wing has finalised preparations for its flagship annual summit, bringing together promising young leaders from across the country...`,
    category: "Events",
    date: "2026-01-20",
    author: "Youth Wing Secretariat",
    authorRole: "LPK Youth Wing",
    authorImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200",
    tags: ["Youth", "Summit", "Leadership"],
  },
  {
    id: "6",
    slug: "agriculture-support-programme",
    title: "LPK Launches Smallholder Farmer Support Programme in 15 Counties",
    excerpt: "A pilot programme connecting smallholder farmers to markets, credit, and modern farming techniques launches in 15 counties this February.",
    content: `The Labour Party of Kenya has launched a pilot agricultural support programme targeting smallholder farmers in 15 counties...`,
    category: "Achievement",
    date: "2026-01-15",
    author: "Agricultural Policy Unit",
    authorRole: "LPK Policy Division",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200",
    tags: ["Agriculture", "Farmers", "Rural Development"],
  },
  {
    id: "7",
    slug: "klp-statement-on-cost-of-living",
    title: "LPK Statement: Urgent Action Needed on Cost of Living Crisis",
    excerpt: "The party issues a formal statement calling on the government to immediately implement fuel subsidy relief, VAT reduction on basic foodstuffs, and emergency rent controls.",
    content: `The Labour Party of Kenya issues the following statement on the worsening cost of living crisis affecting millions of Kenyan households...`,
    category: "Statement",
    date: "2026-01-10",
    author: "Dr. Amani Mwangi",
    authorRole: "Party Leader",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    image: "https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=1200",
    tags: ["Cost of Living", "Statement", "Economic Policy"],
  },
  {
    id: "8",
    slug: "women-in-leadership-forum",
    title: "Women in Leadership Forum to Convene in Nakuru, March 2026",
    excerpt: "LPK's Women's League announces the third annual Women in Leadership Forum, spotlighting women in public office and community leadership across Kenya.",
    content: `The LPK Women's League is proud to announce the third edition of the Women in Leadership Forum, to be held in Nakuru...`,
    category: "Events",
    date: "2026-01-08",
    author: "Ms. Fatuma Hassan",
    authorRole: "Party Treasurer & Women's League Chair",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200",
    tags: ["Women", "Leadership", "Forum"],
  },
  {
    id: "9",
    slug: "klp-education-manifesto-launch",
    title: "LPK Launches 'Education for All' Manifesto Chapter at KICC",
    excerpt: "A dedicated education manifesto chapter is formally launched, promising free tertiary education, double the number of public universities, and a national coding curriculum.",
    content: `The Labour Party of Kenya formally launched its Education Manifesto Chapter at the Kenyatta International Convention Centre...`,
    category: "Press Release",
    date: "2025-12-20",
    author: "Communications Office",
    authorRole: "LPK Communications",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200",
    tags: ["Education", "Manifesto", "Policy"],
  },
];
