"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// City coordinates as % of SVG viewBox (simplified Kenya map bounding box)
const CITIES = [
  { name: "Nairobi", x: 52, y: 62, size: 10, label: "Nairobi" },
  { name: "Mombasa", x: 63, y: 79, size: 7, label: "Mombasa" },
  { name: "Kisumu", x: 33, y: 56, size: 6, label: "Kisumu" },
  { name: "Nakuru", x: 44, y: 52, size: 6, label: "Nakuru" },
  { name: "Eldoret", x: 38, y: 43, size: 5, label: "Eldoret" },
  { name: "Meru", x: 58, y: 48, size: 5, label: "Meru" },
  { name: "Garissa", x: 70, y: 58, size: 4, label: "Garissa" },
  { name: "Kisii", x: 38, y: 60, size: 4, label: "Kisii" },
  { name: "Machakos", x: 56, y: 67, size: 4, label: "Machakos" },
  { name: "Kakamega", x: 32, y: 48, size: 4, label: "Kakamega" },
  { name: "Nyeri", x: 52, y: 49, size: 4, label: "Nyeri" },
  { name: "Lamu", x: 75, y: 67, size: 3, label: "Lamu" },
  { name: "Malindi", x: 69, y: 72, size: 3, label: "Malindi" },
  { name: "Lodwar", x: 28, y: 22, size: 3, label: "Turkana" },
  { name: "Mandera", x: 82, y: 18, size: 3, label: "Mandera" },
];

export default function CountyMapTeaser() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs font-bold uppercase tracking-widest text-red-400 mb-4"
            >
              National Presence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We Are{" "}
              <span className="text-red-500">Everywhere</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              LPK has active chapters in all 47 counties of Kenya, with elected coordinators, 
              registered members, and regular community activities from Turkana to Mombasa.
            </motion.p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[["47", "Counties"], ["290+", "Constituencies"], ["50K+", "Members"]].map(([val, lbl]) => (
                <div key={lbl} className="text-center p-4 bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>{val}</div>
                  <div className="text-gray-400 text-xs mt-1">{lbl}</div>
                </div>
              ))}
            </div>

            <Link href="/counties" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-red-500 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all">
              View All Counties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* SVG Kenya Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-800">
              <svg
                viewBox="0 0 100 100"
                className="w-full"
                style={{ maxHeight: "420px" }}
              >
                {/* Simplified Kenya silhouette */}
                <path
                  d="M 30 15 L 45 12 L 55 10 L 70 12 L 82 18 L 85 30 L 82 40 L 88 52 L 80 65 L 72 78 L 62 85 L 52 88 L 44 85 L 38 78 L 30 72 L 20 65 L 18 55 L 22 45 L 18 35 L 22 25 Z"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="1.5"
                  strokeDasharray="2 1"
                />
                <path
                  d="M 30 15 L 45 12 L 55 10 L 70 12 L 82 18 L 85 30 L 82 40 L 88 52 L 80 65 L 72 78 L 62 85 L 52 88 L 44 85 L 38 78 L 30 72 L 20 65 L 18 55 L 22 45 L 18 35 L 22 25 Z"
                  fill="rgba(220,38,38,0.05)"
                />
                {/* Dots for cities */}
                {CITIES.map((city) => (
                  <g key={city.name}>
                    {/* Pulse ring */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.size * 1.5}
                      fill="rgba(220,38,38,0.15)"
                      className="origin-center animate-ping"
                      style={{ animationDuration: `${2 + Math.random()}s` }}
                    />
                    {/* Dot */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.size / 2}
                      fill="#dc2626"
                    />
                    {/* Label */}
                    {city.size >= 5 && (
                      <text
                        x={city.x}
                        y={city.y - city.size / 2 - 1.5}
                        textAnchor="middle"
                        fontSize="2.8"
                        fill="#9ca3af"
                      >
                        {city.label}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
              <p className="text-center text-gray-500 text-xs mt-3">47 County Chapters — Active Nationwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
