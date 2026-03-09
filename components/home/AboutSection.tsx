"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const VALUES = [
  "Championing workers' rights, decent pay and safe working conditions",
  "Gender equity and equal opportunities for all Kenyans",
  "Inclusive governance for youth, women, and marginalised communities",
  "Devolved democracy and accountability at county and national level",
  "Environmental justice and sustainable socio-economic development",
  "International solidarity through the Socialist International (SI)",
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl diagonal-strip">
              <Image
                src="https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/four_ps2utz.jpg"
                alt="Kenyan Parliament Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-red-700 text-white rounded-2xl p-5 shadow-2xl"
            >
              <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>26+</div>
              <div className="text-red-200 text-sm font-medium">Years of Advocacy</div>
            </motion.div>
            {/* Accent corner */}
            <div className="absolute -top-4 -left-4 w-14 h-14 rounded-xl bg-[#8fbb44] opacity-80 rotate-12" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">About the Party</span>
            <h2 className="section-title mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Building Kenya<br />
              <span className="text-red-600">One Community</span> at a Time
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 1998 by progressive leaders committed to social democracy, the Labour Party
              of Kenya (LPK) has grown into a credible political force championing workers' welfare,
              gender parity, and equal opportunities for all Kenyans — including persons with
              disability and marginalised communities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Officially registered in 2012 under Kenya&apos;s Political Parties Act (Certificate No. 3),
              LPK today has over 46,500 registered members across 27 counties, with an active
              expansion drive to reach all 47 counties as outlined in the 2024–2029 Strategic Plan.
            </p>

            <div className="space-y-3 mb-8">
              {VALUES.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                  {value}
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
