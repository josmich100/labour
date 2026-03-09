"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const POLICIES = [
  {
    emoji: "⚒️",
    title: "Workers' Rights",
    description: "Comprehensive labour law reforms ensuring fair wages, safe workplaces, and strong collective bargaining rights for every Kenyan worker.",
    href: "/manifesto#workers-rights",
    color: "from-red-50 to-red-100",
    border: "border-red-200 hover:border-red-500",
    iconBg: "bg-red-100",
  },
  {
    emoji: "🏥",
    title: "Universal Healthcare",
    description: "A phased roadmap to achieve full universal health coverage by 2031, making quality medical care accessible to every Kenyan.",
    href: "/manifesto#healthcare",
    color: "from-green-50 to-green-100",
    border: "border-green-200 hover:border-green-500",
    iconBg: "bg-green-100",
  },
  {
    emoji: "📚",
    title: "Quality Education",
    description: "Free tertiary education, doubled public universities, a national coding curriculum, and special support for students with disabilities.",
    href: "/manifesto#education",
    color: "from-blue-50 to-blue-100",
    border: "border-blue-200 hover:border-blue-500",
    iconBg: "bg-blue-100",
  },
  {
    emoji: "🏠",
    title: "Affordable Housing",
    description: "A national programme to build 200,000 affordable housing units annually, with priority for low-income families and first-time buyers.",
    href: "/manifesto#housing",
    color: "from-amber-50 to-amber-100",
    border: "border-amber-200 hover:border-amber-500",
    iconBg: "bg-amber-100",
  },
  {
    emoji: "🌾",
    title: "Agricultural Support",
    description: "Subsidised inputs, guaranteed minimum prices, expanded irrigation, and a national smallholder farmer credit scheme.",
    href: "/manifesto#agriculture",
    color: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200 hover:border-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    emoji: "💻",
    title: "Technology & Innovation",
    description: "Connecting all Kenyan schools and health centres to broadband, a Digital Kenya Fund, and incentives for local tech startups.",
    href: "/manifesto#technology",
    color: "from-purple-50 to-purple-100",
    border: "border-purple-200 hover:border-purple-500",
    iconBg: "bg-purple-100",
  },
];

export default function ManifestoPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag"
          >
            Our Platform
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A Manifesto for{" "}
            <span className="relative text-red-600">
              Every Kenyan
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-red-600 rounded-full" />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto"
          >
            Six bold policy pillars that will transform Kenya into a just, prosperous, and dignified nation for all its citizens.
          </motion.p>
        </div>

        {/* Policy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {POLICIES.map((policy, i) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative bg-gradient-to-br ${policy.color} rounded-2xl p-6 border-2 ${policy.border} transition-all duration-300 card-hover overflow-hidden`}
            >
              {/* Red bottom border slide */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />

              <div className={`w-14 h-14 rounded-2xl ${policy.iconBg} flex items-center justify-center text-3xl mb-5 transition-transform duration-300 group-hover:scale-110`}>
                {policy.emoji}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                {policy.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{policy.description}</p>

              <Link
                href={policy.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:gap-3 transition-all duration-200"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/manifesto" className="btn-primary text-base px-8 py-4">
            View Full Manifesto <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
