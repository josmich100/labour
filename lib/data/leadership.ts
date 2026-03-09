export interface Leader {
  id: number;
  name: string;
  title: string;
  shortTitle: string;
  bio: string;
  fullBio: string;
  image: string;
  county: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
  committee: "National Executive" | "County Coordinator" | "Advisory";
  order: number;
}

export const LEADERS: Leader[] = [
  {
    id: 1,
    name: "Hon. Prof. Julia Ojiambo",
    title: "National Chairperson",
    shortTitle: "National Chairperson",
    bio: "Veteran politician, academic and social democrat. Hon. Prof. Julia Ojiambo leads LPK as National Chairperson, championing social democracy, gender equity, and workers' rights across Kenya.",
    fullBio:
      "Hon. Prof. Julia Ojiambo is one of Kenya's most distinguished political leaders and academics. A long-time champion of social democracy, gender equity, and the rights of Kenyan workers, she leads the Labour Party of Kenya as National Chairperson. Under her leadership, LPK has deepened its commitment to progressive governance, inclusive development, and international solidarity through the Socialist International. Her vision is a Kenya where every citizen — worker, woman, youth, or person with disability — enjoys genuine socio-economic prosperity and equal democratic participation.",
    image:
      "https://res.cloudinary.com/dpk27rbno/image/upload/v1773076517/Prof-Julia-Ojiambo_pgyfbw.jpg",
    county: "Nairobi",
    twitter: "@profjulia",
    linkedin: "profjuliaojiambo",
    email: "chairperson@labourpartykenya.ke",
    committee: "National Executive",
    order: 1,
  },
  // {
  //   id: 2,
  //   name: "Mr. Martin Gavole",
  //   title: "Secretary General",
  //   shortTitle: "Secretary General",
  //   bio: "Secretary General of the Labour Party of Kenya. Core driver of LPK party administration, NEC coordination, and implementation of the 2024–2029 Strategic Plan.",
  //   fullBio:
  //     "Mr. Martin Gavole serves as the Secretary General of the Labour Party of Kenya, overseeing party administration, coordination of the National Executive Council (NEC), and the implementation of LPK's 2024–2029 Strategic Plan. He is a central figure in LPK's drive to strengthen party structures across Kenya's 47 counties, increase membership, and advance the party's progressive social democratic agenda for workers and all Kenyans.",
  //   image:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
  //   county: "Nairobi",
  //   email: "sg@labourpartykenya.ke",
  //   committee: "National Executive",
  //   order: 2,
  // },
  // {
  //   id: 2,
  //   name: "Hon. Grace Wanjiku",
  //   title: "Deputy Party Leader",
  //   shortTitle: "Deputy Leader",
  //   bio: "Former MP, Kiambu County. Passionate advocate for gender equity, healthcare access, and youth empowerment.",
  //   fullBio:
  //     "Hon. Grace Wanjiku has served two terms as a Member of Parliament for Kiambu County and is widely regarded as one of Kenya's most effective legislators. She holds a law degree from the University of Nairobi and an LLM from the London School of Economics. As Deputy Party Leader, she oversees party strategy, gender inclusion, and legislative affairs. She chairs the party's women and youth empowerment committee and has been instrumental in the development of the Workers Protection Bill.",
  //   image:
  //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
  //   county: "Kiambu",
  //   twitter: "@gracewanjikuKLP",
  //   linkedin: "gracewanjiku",
  //   email: "deputy@labourparty.ke",
  //   committee: "National Executive",
  //   order: 2,
  // },
  // {
  //   id: 3,
  //   name: "Prof. James Omondi",
  //   title: "Secretary General",
  //   shortTitle: "Secretary General",
  //   bio: "Professor of Political Science at UoN. Renowned political analyst and author of three books on Kenyan governance.",
  //   fullBio:
  //     "Professor James Omondi is a Professor of Political Science and Public Administration at the University of Nairobi. He holds a PhD from Oxford University and has authored three seminal books on Kenyan governance and political party development. As Secretary General, Prof. Omondi oversees party administration, policy development, and organisational strategy. He is widely respected for his intellectual rigour and his ability to translate complex policy into practical programmes for everyday Kenyans.",
  //   image:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
  //   county: "Kisumu",
  //   twitter: "@profomondiKLP",
  //   linkedin: "profomondi",
  //   email: "sg@labourparty.ke",
  //   committee: "National Executive",
  //   order: 3,
  // },
  // {
  //   id: 4,
  //   name: "Ms. Fatuma Hassan",
  //   title: "National Treasurer & Women's League Chair",
  //   shortTitle: "Treasurer",
  //   bio: "Certified Public Accountant and social entrepreneur. Founded three women-owned cooperatives in Mombasa and Garissa.",
  //   fullBio:
  //     "Ms. Fatuma Hassan is a Certified Public Accountant with over 15 years of experience in financial management in the non-profit and cooperative sectors. A social entrepreneur, she has founded three successful women-owned savings and credit cooperatives in Mombasa and Garissa, collectively serving over 4,000 members. As National Treasurer, she oversees LPK's finances with unimpeachable transparency and has introduced digital financial management systems that have significantly improved accountability.",
  //   image:
  //     "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
  //   county: "Mombasa",
  //   twitter: "@fatumaKLP",
  //   linkedin: "fatumahassan",
  //   email: "treasurer@labourparty.ke",
  //   committee: "National Executive",
  //   order: 4,
  // },
  // {
  //   id: 5,
  //   name: "Mr. David Kipchoge",
  //   title: "Director of Political Affairs",
  //   shortTitle: "Dir., Political Affairs",
  //   bio: "Veteran political strategist with expertise in election management and grassroots mobilisation across 25 counties.",
  //   fullBio:
  //     "Mr. David Kipchoge has managed three successful general election campaigns and is recognised as one of Kenya's foremost political strategists. He holds a Master's in Political Communication from Strathmore University and has worked with progressive political parties across East Africa. At LPK, he oversees political strategy, elections coordination, and inter-party relations.",
  //   image:
  //     "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
  //   county: "Uasin Gishu",
  //   twitter: "@davekipchoge",
  //   linkedin: "davidkipchoge",
  //   committee: "National Executive",
  //   order: 5,
  // },
  // {
  //   id: 6,
  //   name: "Dr. Aisha Mohamed",
  //   title: "Director of Policy & Research",
  //   shortTitle: "Dir., Policy",
  //   bio: "Public health specialist and policy researcher. Lead architect of LPK's Universal Healthcare Framework.",
  //   fullBio:
  //     "Dr. Aisha Mohamed holds a PhD in Public Health Policy from the University of Cape Town and has worked with the WHO, UNICEF, and several African governments on health systems strengthening. She is the lead architect of LPK's landmark Universal Healthcare Framework and heads the party's policy and research division, a team of 12 specialists covering health, education, labour, agriculture, and technology.",
  //   image:
  //     "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600",
  //   county: "Garissa",
  //   twitter: "@draishaKLP",
  //   linkedin: "draishamohamed",
  //   committee: "National Executive",
  //   order: 6,
  // },
  // {
  //   id: 7,
  //   name: "Mr. Brian Otieno",
  //   title: "Youth Wing Chairperson",
  //   shortTitle: "Youth Chair",
  //   bio: "Technology entrepreneur and youth advocate, 31. Founder of a digital skills bootcamp serving 5,000+ young Kenyans.",
  //   fullBio:
  //     "At just 31 years old, Brian Otieno is one of Kenya's most dynamic young leaders. A graduate of Strathmore University and alumnus of the Tony Elumelu Entrepreneurship Programme, he founded CodeKenya, a digital skills bootcamp that has trained over 5,000 young Kenyans in software development and digital marketing. As Youth Wing Chairperson, he is the driving force behind LPK's social media presence and youth engagement strategy.",
  //   image:
  //     "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600",
  //   county: "Nairobi",
  //   twitter: "@brianotieno",
  //   linkedin: "brianotieno",
  //   committee: "National Executive",
  //   order: 7,
  // },
  // {
  //   id: 8,
  //   name: "Ms. Rose Adhiambo",
  //   title: "Director of Communications",
  //   shortTitle: "Dir., Comms",
  //   bio: "Award-winning journalist and communications strategist with 12 years of media experience at KBC and NMG.",
  //   fullBio:
  //     "Rose Adhiambo is a seasoned communications professional with a background in broadcast journalism at Kenya Broadcasting Corporation and the Nation Media Group. She holds a Master's in Strategic Communications from USIU-Africa. At LPK, she leads the party's communications strategy including media relations, digital content, and the party's national publicity operations. Under her leadership, LPK's digital following has grown from 30,000 to over 2 million across platforms.",
  //   image:
  //     "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600",
  //   county: "Homa Bay",
  //   twitter: "@roseadhiamboKLP",
  //   linkedin: "roseadhiambo",
  //   committee: "National Executive",
  //   order: 8,
  // },
];
