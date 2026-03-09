"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "Voting rights in party elections and primaries",
  "Access to exclusive party events and conventions",
  "Shape party policy and the 2024–2029 Strategic Plan",
  "Nationwide network across 27+ counties and growing",
  "Free leadership training programmes",
  "Exclusive member newsletter and updates",
];

export default function WhyJoinSection() {
  return (
    <section className="py-20 bg-red-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-yellow-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold uppercase tracking-widest text-red-300 mb-4"
            >
              Membership
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Be Part of<br />the Change
            </motion.h2>

            <div className="space-y-4 mb-10">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-red-100 text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/join" className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl text-base">
                Join LPK Today <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg"
              alt="Kenyan community gathering"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-white font-bold text-lg mb-1">50,000+ Members</div>
                <div className="text-red-200 text-sm">and growing every day across Kenya</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
