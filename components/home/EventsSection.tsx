"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight, Users, ChevronRight } from "lucide-react";
import { EVENTS } from "@/lib/data/events";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-KE", { day: "2-digit" }),
    month: d.toLocaleDateString("en-KE", { month: "short" }).toUpperCase(),
    year: d.toLocaleDateString("en-KE", { year: "numeric" }),
    full: d.toLocaleDateString("en-KE", { weekday: "short", day: "numeric", month: "long" }),
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  Convention: "#DC2626",
  Summit:     "#8fbb44",
  "Town Hall": "#f59e0b",
  Forum:      "#8b5cf6",
  Workshop:   "#06b6d4",
};

export default function EventsSection() {
  const upcomingEvents = EVENTS.filter(e => !e.isPast).slice(0, 4);
  const [active, setActive] = useState(upcomingEvents[0]?.id ?? "");

  const featured = upcomingEvents.find(e => e.id === active) ?? upcomingEvents[0];

  return (
    <section className="relative bg-gray-50 overflow-hidden py-24 lg:py-32">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-50 rounded-full blur-[100px] opacity-40 pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-7 h-[2px] bg-red-600 rounded-full" />
              <span className="text-red-600 text-[11px] font-black tracking-[0.3em] uppercase">
                Get Involved · 2026
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.0] tracking-tight"
            >
              Upcoming<br />
              <span className="text-red-600">Events</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base max-w-xs leading-relaxed lg:text-right"
          >
            Join us at rallies, forums, and summits driving change across Kenya&apos;s 47 counties.
          </motion.p>
        </div>

        {/* ── Main layout: featured + list ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Featured card */}
          <div className="lg:col-span-3 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured?.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative rounded-3xl overflow-hidden h-[480px] lg:h-full min-h-[480px] group shadow-xl shadow-gray-200"
              >
                {/* Image */}
                <Image
                  src={featured?.image ?? ""}
                  alt={featured?.title ?? ""}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                {/* Category pill */}
                <div className="absolute top-5 left-5">
                  <span
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase text-white"
                    style={{ background: CATEGORY_COLORS[featured?.category ?? ""] ?? "#DC2626" }}
                  >
                    {featured?.category}
                  </span>
                </div>

                {/* Capacity badge */}
                <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 text-center">
                  <div className="text-white text-sm font-black">
                    {Math.round(((featured?.registered ?? 0) / (featured?.capacity ?? 1)) * 100)}%
                  </div>
                  <div className="text-white/60 text-[10px]">Full</div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  {/* Date row */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="text-xs font-black px-2.5 py-1 rounded-lg"
                      style={{ background: `${CATEGORY_COLORS[featured?.category ?? ""] ?? "#DC2626"}30`, color: "#fff" }}
                    >
                      {formatDate(featured?.date ?? "").full}
                    </div>
                    <div className="text-white/40 text-xs">·</div>
                    <div className="text-white/60 text-xs flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {featured?.time}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight mb-3">
                    {featured?.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      {featured?.venue}, {featured?.city}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <Users className="w-3.5 h-3.5 text-[#8fbb44] shrink-0" />
                      {featured?.registered?.toLocaleString()} going
                    </div>
                  </div>

                  {/* Capacity bar visual */}
                  <div className="mb-5">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.round(((featured?.registered ?? 0) / (featured?.capacity ?? 1)) * 100)}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                      />
                    </div>
                  </div>

                  <Link
                    href={`/events/${featured?.slug}`}
                    className="group/btn inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/40 hover:shadow-red-600/60 text-sm"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Event list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {upcomingEvents.map((event, i) => {
              const date = formatDate(event.date);
              const isActive = event.id === active;
              const fill = CATEGORY_COLORS[event.category] ?? "#DC2626";
              const pct = Math.round((event.registered / event.capacity) * 100);

              return (
                <motion.button
                  key={event.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  onClick={() => setActive(event.id)}
                  className={`group w-full text-left rounded-2xl p-5 border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-white border-red-200 shadow-lg shadow-red-100"
                      : "bg-white/60 border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {/* Active glow strip */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStrip"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-600 rounded-full"
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Date block */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center"
                      style={{ background: `${fill}15`, border: `1px solid ${fill}30` }}
                    >
                      <span className="text-lg font-black leading-none" style={{ color: fill }}>
                        {date.day}
                      </span>
                      <span className="text-[9px] font-bold leading-none mt-0.5" style={{ color: fill }}>
                        {date.month}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span
                          className="text-[10px] font-black tracking-wider"
                          style={{ color: fill }}
                        >
                          {event.category.toUpperCase()}
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-all duration-300 ${
                            isActive ? "text-red-500 translate-x-0.5" : "text-gray-300 group-hover:text-gray-400"
                          }`}
                        />
                      </div>
                      <h4 className={`text-sm font-black leading-snug truncate transition-colors duration-300 ${
                        isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                      }`}>
                        {event.title}
                      </h4>
                      <p className="text-gray-400 text-[11px] mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 shrink-0" />
                        {event.city}
                      </p>
                    </div>
                  </div>

                  {/* Mini progress */}
                  <div className="mt-3.5 flex items-center gap-2.5">
                    <div className="flex-1 h-[3px] bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, background: fill }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold shrink-0">{pct}% full</span>
                  </div>
                </motion.button>
              );
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="mt-1"
            >
              <Link
                href="/events"
                className="group flex items-center justify-between w-full bg-white hover:bg-red-600 border border-gray-200 hover:border-red-600 rounded-2xl px-5 py-4 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-red-600/20"
              >
                <span className="text-sm font-black text-gray-500 group-hover:text-white transition-colors duration-300">
                  View all events
                </span>
                <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
