"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "@/lib/data/events";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

type Tab = "upcoming" | "past";

export default function EventsPage() {
  const [tab, setTab] = useState<Tab>("upcoming");

  const upcoming = EVENTS.filter((e) => !e.isPast);
  const past = EVENTS.filter((e) => e.isPast);
  const displayed = tab === "upcoming" ? upcoming : past;

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-60 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920"
          alt="Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
            What&apos;s On
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Events
          </h1>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2">
          {(["upcoming", "past"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${
                tab === t
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t} Events{" "}
              <span className="ml-1 opacity-70">
                ({t === "upcoming" ? upcoming.length : past.length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((event) => (
            <div
              key={event.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${
                      event.isPast
                        ? "bg-gray-700 text-gray-200"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {event.isPast ? "Past" : "Upcoming"}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-white rounded-xl px-3 py-2 text-center min-w-[56px] shadow">
                  <div className="text-red-600 font-bold text-lg leading-none">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-gray-500 text-xs uppercase">
                    {new Date(event.date).toLocaleString("en-KE", {
                      month: "short",
                    })}
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">
                  {event.category}
                </span>
                <h3
                  className="font-bold text-gray-900 text-lg mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {event.title}
                </h3>
                <div className="space-y-1.5 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0 text-red-500" />
                    {event.venue}, {event.county}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-red-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 shrink-0 text-red-500" />
                    {event.capacity.toLocaleString()} capacity
                  </div>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mb-5 flex-1">
                  {event.description}
                </p>
                <Link
                  href={`/events/${event.slug}`}
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    event.isPast
                      ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      : "bg-red-600 text-white hover:bg-red-700 shadow"
                  }`}
                >
                  {event.isPast ? "View Summary" : "Register Now"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
