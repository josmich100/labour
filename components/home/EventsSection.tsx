"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Calendar } from "lucide-react";
import { EVENTS } from "@/lib/data/events";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-KE", { day: "2-digit" }),
    month: d.toLocaleDateString("en-KE", { month: "short" }),
    year: d.toLocaleDateString("en-KE", { year: "numeric" }),
    full: d.toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" }),
  };
}

export default function EventsSection() {
  const upcomingEvents = EVENTS.filter(e => !e.isPast).slice(0, 4);

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
            Get Involved
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Upcoming <span className="text-red-600">Events</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-green-500 -translate-x-1/2" />

          <div className="space-y-10">
            {upcomingEvents.map((event, i) => {
              const date = formatDate(event.date);
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-center gap-4 lg:gap-0 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Event Card */}
                  <div className={`flex-1 ${isLeft ? "lg:pr-14 lg:text-right" : "lg:pl-14 lg:text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 card-hover">
                      <div className="flex items-center gap-3 mb-3 flex-wrap lg:flex-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700`}>
                          {event.category}
                        </span>
                        <span className="text-gray-400 text-xs flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />{date.full}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        {event.title}
                      </h3>
                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          {event.venue}, {event.city}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          {event.time}
                        </div>
                      </div>
                      <Link
                        href={`/events/${event.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:gap-3 transition-all"
                      >
                        Register Now <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Center Date Badge (desktop) */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="hidden lg:flex flex-col items-center justify-center w-16 h-16 bg-red-600 text-white rounded-2xl shadow-lg shrink-0 relative z-10"
                  >
                    <span className="text-xl font-bold leading-none">{date.day}</span>
                    <span className="text-xs text-red-200 leading-none">{date.month}</span>
                  </motion.div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/events" className="btn-primary text-base px-8">
            View All Events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
