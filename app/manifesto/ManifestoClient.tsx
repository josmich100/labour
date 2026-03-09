"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";

const POLICIES = [
  {
    id: "workers-rights",
    icon: "⚒️",
    title: "Workers' Rights",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200",
    points: [
      "Mandatory minimum wage tied to annual inflation index",
      "21 days minimum paid sick leave (up from 7)",
      "13 weeks fully paid maternity leave; 30 days paternity leave",
      "Legal recognition and protection for gig economy workers",
      "Independent National Workplace Safety Inspectorate",
      "Strengthened collective bargaining rights for all sectors",
      "Ban on zero-hours employment contracts",
      "Mandatory employer-funded pension contributions of 10%",
    ],
    timeline: [
      { year: "Year 1", action: "Table and pass Workers Protection Bill 2026" },
      { year: "Year 2", action: "Operationalise independent wage review board" },
      { year: "Year 3", action: "Full gig worker protections activated" },
      { year: "Year 4–5", action: "Complete reviews of all sector CBAs" },
    ],
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Universal Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200",
    points: [
      "Phase-in Universal Health Coverage by 2031",
      "Free primary healthcare at all level 1–3 facilities",
      "Fully funded national medicines supply system",
      "Expand community health volunteer programme to 100,000",
      "Build 200 new rural health centres in underserved areas",
      "Mental health integration at primary care level",
      "Cancer screening and treatment subsidies nationwide",
      "Emergency ambulance service in all 47 counties",
    ],
    timeline: [
      { year: "Year 1", action: "Free primary healthcare at all public dispensaries" },
      { year: "Year 2", action: "National medicines supply pipeline fully operational" },
      { year: "Year 3", action: "200 new rural health centres built" },
      { year: "Year 4–5", action: "Full UHC Coverage achieved" },
    ],
  },
  {
    id: "education",
    icon: "📚",
    title: "Quality Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200",
    points: [
      "Free tuition at all public universities and TTCs",
      "Double the number of public universities in 5 years",
      "National coding and digital literacy curriculum for all schools",
      "100% transition rate from primary to secondary schools",
      "Special support grants for students with disabilities",
      "Mobile school libraries for arid and semi-arid areas",
      "Teacher training and pay reform — 30% salary increase",
      "School feeding programme for all public primary schools",
    ],
    timeline: [
      { year: "Year 1", action: "Free tuition at all public universities begins" },
      { year: "Year 2", action: "National coding curriculum rolled out to all schools" },
      { year: "Year 3", action: "10 new public universities established" },
      { year: "Year 4–5", action: "100% secondary school transition achieved" },
    ],
  },
  {
    id: "housing",
    icon: "🏠",
    title: "Affordable Housing",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    points: [
      "Build 200,000 affordable units annually for low-income families",
      "First-time buyer subsidy of KES 500,000 for households under KES 100K/month",
      "Slum upgrading programme in all urban areas",
      "Nationwide rental control legislation for major cities",
      "Public land audit and reallocation for housing projects",
      "Cooperative housing model promotion and incentives",
      "Green building standards for all new public housing",
      "Student and youth hostel programme at TVET and universities",
    ],
    timeline: [
      { year: "Year 1", action: "Launch national public land audit" },
      { year: "Year 2", action: "First 50,000 affordable units delivered" },
      { year: "Year 3", action: "Slum upgrading for 200,000 households begins" },
      { year: "Year 4–5", action: "200,000 annual housing target fully achieved" },
    ],
  },
  {
    id: "agriculture",
    icon: "🌾",
    title: "Agricultural Support",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200",
    points: [
      "50% input subsidy for smallholder farmers on seeds and fertiliser",
      "Guaranteed minimum commodity prices for key crops",
      "Expand national irrigation infrastructure to 500,000 new acres",
      "National Smallholder Farmer Credit Scheme at 5% interest",
      "Cold storage and agro-processing hubs in each county",
      "Weather-indexed crop insurance for all registered farmers",
      "Youth in Agriculture programme with 1 million acres of land allocation",
      "Soil health monitoring and regenerative farming incentives",
    ],
    timeline: [
      { year: "Year 1", action: "Input subsidies and guaranteed prices operational" },
      { year: "Year 2", action: "Smallholder credit scheme launched nationwide" },
      { year: "Year 3", action: "Irrigation expansion Phase 1 complete" },
      { year: "Year 4–5", action: "Cold storage hubs operating in all 47 counties" },
    ],
  },
  {
    id: "technology",
    icon: "💻",
    title: "Technology & Innovation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    points: [
      "Connect all 22,000 public schools to broadband internet by 2029",
      "Connect all public health facilities to telemedicine networks",
      "KES 50 billion Digital Kenya Innovation Fund over 5 years",
      "Free digital literacy training for 2 million Kenyans annually",
      "Data protection and digital rights legislation",
      "Incentives for Kenyan tech startups in special economic zones",
      "National AI and blockchain policy framework",
      "Open-source government systems to reduce costs and corruption",
    ],
    timeline: [
      { year: "Year 1", action: "Digital Kenya Fund established and operational" },
      { year: "Year 2", action: "All county headquarters connected to broadband" },
      { year: "Year 3", action: "50% of public schools connected" },
      { year: "Year 4–5", action: "Universal broadband for schools and health facilities" },
    ],
  },
];

export default function ManifestoPageClient() {
  const [activeTab, setActiveTab] = useState(POLICIES[0].id);
  const active = POLICIES.find(p => p.id === activeTab)!;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-72 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1920" alt="Manifesto" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-3">Our Platform</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            LPK Manifesto 2026
          </h1>
          <p className="text-gray-300 text-lg mt-3">Six bold policy pillars for a better Kenya.</p>
        </div>
      </section>

      {/* Tab Nav */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto no-scrollbar py-2">
            {POLICIES.map(policy => (
              <button
                key={policy.id}
                onClick={() => setActiveTab(policy.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeTab === policy.id
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span>{policy.icon}</span>
                {policy.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
              <div>
                <span className="text-5xl mb-4 block">{active.icon}</span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                  {active.title}
                </h2>
                <ul className="space-y-3">
                  {active.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <ChevronRight className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-base">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image src={active.image} alt={active.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 text-xl mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Implementation Timeline
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {active.timeline.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                    <div className="text-red-600 font-bold text-sm mb-2">{item.year}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Download CTA */}
      <section className="py-16 bg-red-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Download the Full Manifesto
          </h2>
          <p className="text-red-200 mb-7">
            Get the complete LPK Manifesto 2026 — all six policy pillars, costed projections, and implementation timelines.
          </p>
          <a href="#" className="inline-flex items-center gap-2 px-7 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl">
            <Download className="w-5 h-5" /> Download Manifesto PDF
          </a>
        </div>
      </section>
    </div>
  );
}
