import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Target, Eye, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Labour Party of Kenya",
  description:
    "Learn the history, mission, vision, and values of the Labour Party of Kenya (LPK) — a progressive social democratic party championing workers and social justice since 1998.",
  openGraph: {
    title: "About the Labour Party of Kenya",
    description: "Founded in 1998, LPK has been Kenya's progressive social democratic voice for workers' rights, gender equity, and social justice.",
  },
};

const TIMELINE = [
  { year: "1998", title: "Party Founded", desc: "Labour Party of Kenya (LPK) first registered under the Societies Act on 30th March 1998, founded on social democracy with a major focus on the welfare of workers, gender parity and equal opportunities for all Kenyans.", image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=600" },
  { year: "2001", title: "First General Election", desc: "LPK contests general elections for the first time, fielding candidates across multiple constituencies to push for workers' rights and social justice.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600" },
  { year: "2005", title: "Referendum Participation", desc: "LPK plays an active role in the 2005 referendum, successfully campaigning to defeat the Wako Draft and protect democratic gains.", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600" },
  { year: "2007", title: "Progressive Reform Agenda", desc: "LPK advances a progressive reform agenda championing workers' rights, gender parity and devolved governance — contributing to laws governing the Cotton Industry, Nutrition, Public Procurement and Gender Parity.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600" },
  { year: "2010", title: "New Constitution Promulgated", desc: "LPK actively supports Kenya's new Constitution in August 2010, championing devolution, social justice, human rights and gender equality.", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600" },
  { year: "2012", title: "PPA2011 Registration", desc: "LPK officially registered as a Political Party under the Political Parties Act 2011, receiving Registration Certificate No. 3 on 29th March 2012.", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600" },
  { year: "2013", title: "Electoral Engagement", desc: "Following the March 2013 General Election, LPK deepens its engagement with workers' unions, civil society, and the Socialist International to advance its progressive agenda.", image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600" },
  { year: "2022", title: "General Election & Advocacy", desc: "LPK participates in the 2022 General Election while advocating against rising corruption, erosion of constitutional rights, and the heavy tax burden on ordinary Kenyans.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" },
  { year: "2024", title: "Strategic Plan 2024–2029", desc: "LPK launches its five-year Strategic Plan with 10 strategic directions — strengthening party organs, scaling membership to all 47 counties, and deepening advocacy for Kenyan workers.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600" },
  { year: "2029", title: "Vision: National Presence", desc: "LPK's 2024–2029 goal: active presence in all 47 counties, a parliamentary group, increased representation in governance structures, and a credible voice for workers across the continent.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600" },
];

const VALUES = [
  { icon: Target, title: "Our Mission", desc: "Empowering the citizens of Kenya to form a government that will ensure a classless society that guarantees socio-economic prosperity for all.", color: "bg-red-50 border-red-200 text-red-600" },
  { icon: Eye, title: "Our Vision", desc: "To be the best social democratic party in Africa — building a Kenya where every citizen enjoys equal rights, equitable opportunity, and genuine democratic participation.", color: "bg-blue-50 border-blue-200 text-blue-600" },
  { icon: Heart, title: "Our Core Values", desc: "Integrity · Democracy · Respect for citizens' rights · Respect for the rule of law · Gender equity · Equity and meritocracy · Commitment · Justice · Accountability.", color: "bg-green-50 border-green-200 text-green-600" },
];

const STRUCTURE = [
  { level: 1, title: "National Chairperson", name: "Hon. Prof. Julia Ojiambo", items: [] },
  { level: 2, title: "Secretary General", name: "Mr. Martin Gavole", items: [] },
  { level: 3, title: "National Executive Council (NEC)", name: "Party leadership & policy body", items: [] },
  { level: 3, title: "Party Congresses", name: "Women · Youth · Disability & Marginalised Groups", items: [] },
  { level: 4, title: "The Supreme Council", name: "Oversight & governance", items: [] },
  { level: 4, title: "National Delegates Congress", name: "Supreme decision-making body", items: [] },
  { level: 4, title: "County Branches", name: "Active in 27 counties, expanding to all 47", items: [] },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1920"
          alt="Kenyan Parliament"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-3">About LPK</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            About the Labour<br />Party of Kenya
          </h1>
          <p className="text-gray-300 text-lg mt-3 max-w-xl">A progressive social democratic party, building a better Kenya since 1998.</p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>
              Mission, Vision & <span className="text-red-600">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {VALUES.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className={`rounded-2xl p-7 border-2 ${color}`}>
                <div className={`w-14 h-14 rounded-2xl border-2 ${color} flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Our History</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>
              Over Two Decades of <span className="text-red-600">Advocacy</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-green-500" />

            <div className="space-y-12">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={item.year} className={`relative flex gap-6 md:gap-0 items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                      <div className={`bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow inline-block w-full`}>
                        <span className="text-red-600 font-bold text-sm">{item.year}</span>
                        <h3 className="font-bold text-gray-900 text-base mt-1 mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-md z-10 top-4" />

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Party Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Organisation</span>
          <h2 className="section-title mb-14" style={{ fontFamily: "var(--font-playfair)" }}>
            Party <span className="text-red-600">Structure</span>
          </h2>

          <div className="space-y-3">
            {STRUCTURE.map((role, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border-2 ${
                  role.level === 1 ? "bg-red-700 border-red-700 text-white" :
                  role.level === 2 ? "bg-red-100 border-red-300 text-gray-900 ml-6" :
                  role.level === 3 ? "bg-gray-100 border-gray-200 text-gray-900 ml-12" :
                  "bg-gray-50 border-gray-200 text-gray-700 ml-16"
                } flex items-center justify-between`}
              >
                <div className={role.level === 1 ? "text-white" : "text-gray-800"}>
                  <div className="font-bold text-sm">{role.title}</div>
                  <div className={`text-xs ${role.level === 1 ? "text-red-200" : "text-gray-500"}`}>{role.name}</div>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constitution Download */}
      <section className="py-14 bg-red-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Party Constitution
          </h2>
          <p className="text-red-200 mb-7">
            Download the Labour Party of Kenya Constitution and learn about our governing principles, member rights, and party procedures.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Party Constitution (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
