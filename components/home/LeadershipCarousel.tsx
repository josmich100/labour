"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Linkedin } from "lucide-react";
import { LEADERS } from "@/lib/data/leadership";

export default function LeadershipCarousel() {
  const displayLeaders = LEADERS.slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-tag">Our Leaders</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>
              Meet the Team{" "}
              <span className="text-red-600">Driving Change</span>
            </h2>
          </div>
          <Link href="/leadership" className="btn-outline shrink-0">
            Meet All Leaders <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Leader Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {displayLeaders.map((leader, i) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="img-zoom relative h-64 md:h-72">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end p-4">
                  <p className="text-gray-200 text-xs leading-relaxed line-clamp-3 mb-3">
                    {leader.bio}
                  </p>
                  <div className="flex gap-2">
                    {leader.twitter && (
                      <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                        <Twitter className="w-3.5 h-3.5 text-white" />
                      </a>
                    )}
                    {leader.linkedin && (
                      <a href="#" className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Linkedin className="w-3.5 h-3.5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-900 text-sm leading-tight">{leader.name}</h3>
                <p className="text-red-600 text-xs mt-0.5">{leader.shortTitle}</p>
                <p className="text-gray-400 text-xs mt-1">{leader.county} County</p>
              </div>

              {/* Bottom red line */}
              <div className="h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
