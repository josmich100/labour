"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Calendar, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { EVENTS } from "@/lib/data/events";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(9, "Valid phone required"),
  dietary: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

interface Props {
  params: { slug: string };
}

export default function EventDetailClient({ params }: Props) {
  const event = EVENTS.find((e) => e.slug === params.slug);
  const [registered, setRegistered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  if (!event) {
    return (
      <div className="pt-32 text-center text-gray-500 min-h-screen">
        Event not found.
      </div>
    );
  }

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setRegistered(true);
    reset();
    toast.success(`Registered! See you at ${event.title}.`);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-72 md:h-[400px]">
        <Image src={event.image} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute bottom-0 max-w-7xl mx-auto left-0 right-0 px-4 sm:px-6 lg:px-8 pb-10">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">
            {event.category}
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {event.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2 space-y-8">
          {/* Details */}
          <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-2 gap-5">
            {[
              { icon: <Calendar className="w-5 h-5 text-red-600" />, label: "Date", value: new Date(event.date).toLocaleDateString("en-KE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) },
              { icon: <Clock className="w-5 h-5 text-red-600" />, label: "Time", value: event.time },
              { icon: <MapPin className="w-5 h-5 text-red-600" />, label: "Venue", value: `${event.venue}, ${event.county} County` },
              { icon: <Users className="w-5 h-5 text-red-600" />, label: "Capacity", value: `${event.capacity.toLocaleString()} attendees` },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                  <p className="text-gray-800 font-semibold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              About This Event
            </h2>
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>

          {/* Agenda */}
          {event.agenda && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Event Agenda
              </h2>
              <div className="space-y-3">
                {event.agenda.map((item: { time: string; activity: string }, i: number) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-red-600 font-bold text-sm w-16 shrink-0 pt-0.5">{item.time}</span>
                    <p className="text-gray-700 text-sm">{item.activity}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Map embed placeholder */}
          <div className="h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 overflow-hidden">
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">{event.venue}</p>
              <p className="text-xs opacity-70">{event.county} County, Kenya</p>
            </div>
          </div>
        </div>

        {/* Sidebar — Registration */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-lg sticky top-24">
            {event.isPast ? (
              <div className="text-center py-6">
                <p className="text-gray-400 font-medium">This event has concluded.</p>
              </div>
            ) : registered ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  You&apos;re Registered!
                </h3>
                <p className="text-gray-500 text-sm">See you at {event.title}. Check your email for details.</p>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  Register for this Event
                </h3>
                <p className="text-gray-500 text-sm mb-5">Free admission. Seats are limited.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input {...register("name")} className="form-input" placeholder="Your full name" />
                    {errors.name && <p className="form-error">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input {...register("email")} type="email" className="form-input" placeholder="you@example.com" />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Phone</label>
                    <input {...register("phone")} type="tel" className="form-input" placeholder="07XX XXX XXX" />
                    {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Dietary Requirements (optional)</label>
                    <input {...register("dietary")} className="form-input" placeholder="e.g. Vegetarian" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Registering...
                      </span>
                    ) : (
                      "Confirm Registration"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
