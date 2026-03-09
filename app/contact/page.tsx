"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject required"),
  department: z.string().min(1, "Select department"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    reset();
    toast.success("Message sent! We'll respond within 24 hours.");
  };

  const contacts = [
    { icon: MapPin, label: "Head Office", value: "616 Twiga Towers, Moi Avenue, Nairobi CBD, Kenya" },
    { icon: Phone, label: "Phone", value: "+254 710 842 239" },
    { icon: Mail, label: "General Enquiries", value: "info@labourpartykenya.ke" },
    { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8:00am – 5:00pm EAT" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-56 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1920" alt="Contact" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Contact Us
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-5 gap-12">
        {/* Info */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
            We&apos;d Love to Hear from You
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Have questions, press enquiries, partnership proposals, or just want to connect? Reach us through any of the channels below.
          </p>
          <div className="space-y-4">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 text-red-600">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-gray-800 font-semibold text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* County contacts */}
          <div className="bg-gray-100 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              County Offices
            </p>
            {[
              { county: "Nairobi", phone: "+254 20 765 4321" },
              { county: "Mombasa", phone: "+254 41 123 4567" },
              { county: "Kisumu", phone: "+254 57 123 456" },
              { county: "Nakuru", phone: "+254 51 234 567" },
            ].map((o) => (
              <div key={o.county} className="flex justify-between text-sm py-1.5 border-b border-gray-200 last:border-0">
                <span className="text-gray-600 font-medium">{o.county}</span>
                <a href={`tel:${o.phone}`} className="text-red-600 font-semibold hover:underline">{o.phone}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-5">We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="text-red-600 underline text-sm">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                  Send Us a Message
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input {...register("name")} className="form-input" placeholder="Your name" />
                    {errors.name && <p className="form-error">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input {...register("email")} type="email" className="form-input" placeholder="you@example.com" />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Phone (optional)</label>
                    <input {...register("phone")} type="tel" className="form-input" placeholder="07XX XXX XXX" />
                  </div>
                  <div>
                    <label className="form-label">Department</label>
                    <select {...register("department")} className="form-input">
                      <option value="">Select…</option>
                      {["General Enquiries", "Press & Media", "Membership", "Volunteer", "Events", "Policy"].map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    {errors.department && <p className="form-error">{errors.department.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="form-label">Subject</label>
                  <input {...register("subject")} className="form-input" placeholder="What is this about?" />
                  {errors.subject && <p className="form-error">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea {...register("message")} className="form-input min-h-[120px] resize-none" placeholder="Tell us more…" />
                  {errors.message && <p className="form-error">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
