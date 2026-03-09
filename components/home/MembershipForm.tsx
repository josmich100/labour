"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, type Variants } from "framer-motion";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { KENYAN_COUNTIES_LIST } from "@/lib/data/counties";

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().regex(/^\+?254[0-9]{9}$|^0[7][0-9]{8}$/, "Enter a valid Kenyan phone number"),
  county: z.string().min(1, "Please select your county"),
  occupation: z.string().min(2, "Occupation is required"),
  idNumber: z.string().min(7, "Enter a valid ID number").max(10),
  gender: z.enum(["male", "female", "prefer_not_to_say"]),
  membershipType: z.enum(["regular", "student", "senior"]),
  heardFrom: z.string().min(1, "Please select an option"),
  terms: z.literal(true, { message: "You must accept the terms" }),
});

type FormData = z.infer<typeof schema>;

const HEARD_FROM_OPTIONS = [
  "Social Media (Facebook/Instagram)",
  "Twitter / X",
  "TikTok",
  "Word of Mouth",
  "Party Rally or Event",
  "TV or Radio",
  "Newspaper",
  "LPK Website",
  "Other",
];

const STATS = [
  { value: "46,500+", label: "Registered Members" },
  { value: "27", label: "Active Counties" },
  { value: "1998", label: "Year Founded" },
  { value: "Free", label: "Membership Cost" },
];

const BENEFITS = [
  "Vote in party elections & primaries",
  "Access national and county events",
  "Shape LPK policy & Strategic Plan 2024â€“2029",
  "Free leadership training programs",
  "Connect with 46,500+ members nationwide",
];

const fieldVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const inputCls =
  "w-full bg-white/[0.05] border border-white/10 text-white placeholder:text-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/60 focus:bg-white/[0.08] transition-all duration-200";

const selectCls =
  "w-full bg-[#1a1a1a] border border-white/10 text-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600/60 transition-all duration-200";

export default function MembershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    reset();
    toast.success("âœ… Welcome to LPK! Check your email for next steps.", { duration: 6000 });
  };

  return (
    <section className="bg-[#0d0d0d] overflow-hidden relative">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-red-600/8 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 min-h-[800px]">

          {/* â”€â”€ LEFT PANEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-900 p-10 md:p-16 flex flex-col justify-between overflow-hidden"
          >
            {/* Texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
            {/* Glow blobs */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8fbb44]/20 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-black/40 rounded-full blur-[70px] pointer-events-none" />

            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-white/50 rounded-full" />
                <span className="text-white/60 text-xs font-bold tracking-[0.25em] uppercase">Join the Movement</span>
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6">
                Haki<br />
                <span className="text-[#8fbb44]">Na Usawa</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-12 max-w-sm">
                Become an active voice in Kenya&apos;s progressive social democratic party. Membership is free and open to all Kenyans.
              </p>

              {/* Stats bento grid */}
              <div className="grid grid-cols-2 gap-3 mb-12">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-black/30 transition-colors duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-black text-white leading-none">{stat.value}</div>
                    <div className="text-white/50 text-xs mt-1.5 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Benefits list */}
              <ul className="space-y-3">
                {BENEFITS.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-3 text-white/80 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#8fbb44]/20 border border-[#8fbb44]/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#8fbb44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer badge */}
            <div className="relative z-10 mt-10">
              <div className="inline-flex items-center gap-2.5 bg-black/30 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
                <span className="text-xl">ðŸ‡°ðŸ‡ª</span>
                <span className="text-white/75 text-sm font-semibold">Labour Party of Kenya â€” Est. 1998</span>
              </div>
            </div>
          </motion.div>

          {/* â”€â”€ RIGHT PANEL â€” Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-[#111111] p-8 md:p-14 flex flex-col justify-center border-l border-white/[0.05]"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-red-600 rounded-full" />
                <span className="text-red-500 text-xs font-bold tracking-[0.2em] uppercase">Membership Registration</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Join LPK Today</h3>
              <p className="text-gray-500 text-sm">Fill in your details below â€” it takes less than 2 minutes.</p>
            </div>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >

              <motion.div variants={fieldVariant} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">First Name *</label>
                  <input {...register("firstName")} placeholder="e.g. Amani" className={inputCls} />
                  {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">Last Name *</label>
                  <input {...register("lastName")} placeholder="e.g. Mwangi" className={inputCls} />
                  {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">Email Address *</label>
                <input {...register("email")} type="email" placeholder="you@example.com" className={inputCls} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </motion.div>

              <motion.div variants={fieldVariant} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">Phone (+254) *</label>
                  <input {...register("phone")} type="tel" placeholder="+254 7XX XXX XXX" className={inputCls} />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">National ID *</label>
                  <input {...register("idNumber")} placeholder="e.g. 12345678" className={inputCls} />
                  {errors.idNumber && <p className="text-red-400 text-xs mt-1">{errors.idNumber.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={fieldVariant} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">County *</label>
                  <select {...register("county")} className={selectCls}>
                    <option value="">Select county</option>
                    {KENYAN_COUNTIES_LIST.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.county && <p className="text-red-400 text-xs mt-1">{errors.county.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">Occupation *</label>
                  <input {...register("occupation")} placeholder="e.g. Teacher" className={inputCls} />
                  {errors.occupation && <p className="text-red-400 text-xs mt-1">{errors.occupation.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={fieldVariant} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-2">Gender</label>
                  <div className="flex gap-3 flex-wrap">
                    {(["male", "female", "prefer_not_to_say"] as const).map((g) => (
                      <label key={g} className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-500 hover:text-white transition-colors">
                        <input type="radio" {...register("gender")} value={g} className="accent-red-600" />
                        {g === "male" ? "Male" : g === "female" ? "Female" : "Other"}
                      </label>
                    ))}
                  </div>
                  {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-2">Membership Type</label>
                  <div className="flex gap-3 flex-wrap">
                    {(["regular", "student", "senior"] as const).map((t) => (
                      <label key={t} className="flex items-center gap-1.5 cursor-pointer text-sm text-gray-500 hover:text-white transition-colors">
                        <input type="radio" {...register("membershipType")} value={t} className="accent-red-600" />
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="block text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">How did you hear about us?</label>
                <select {...register("heardFrom")} className={selectCls}>
                  <option value="">Select option</option>
                  {HEARD_FROM_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.heardFrom && <p className="text-red-400 text-xs mt-1">{errors.heardFrom.message}</p>}
              </motion.div>

              <motion.div variants={fieldVariant}>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    {...register("terms")}
                    className="mt-0.5 accent-red-600 w-4 h-4 shrink-0"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors leading-relaxed">
                    I agree to the{" "}
                    <a href="/terms" className="text-red-500 hover:text-red-400 underline">Terms of Membership</a>
                    {" "}and{" "}
                    <a href="/privacy" className="text-red-500 hover:text-red-400 underline">Privacy Policy</a>
                    , and confirm the information provided is accurate.
                  </span>
                </label>
                {errors.terms && <p className="text-red-400 text-xs mt-1">{errors.terms.message}</p>}
              </motion.div>

              <motion.div variants={fieldVariant}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/20 hover:shadow-red-600/35 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Join the Movement ðŸ‡°ðŸ‡ª
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </motion.div>

            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
