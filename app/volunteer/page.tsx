"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Check } from "lucide-react";
import { useState } from "react";
import { KENYAN_COUNTIES_LIST } from "@/lib/data/counties";

const SKILLS = [
  "Canvassing / Door-to-door",
  "Social Media & Digital",
  "Event Organisation",
  "Legal Support",
  "Translation / Interpretation",
  "Photography / Videography",
  "Data Entry",
  "Research & Policy",
  "Medical / First Aid",
  "Driving / Logistics",
  "Teaching / Training",
  "IT & Tech Support",
];

const schema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(9, "Valid phone required"),
  county: z.string().min(1, "Select county"),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  availability: z.enum(["weekdays", "weekends", "both", "evenings"], { error: "Required" }),
  hoursPerWeek: z.string().min(1, "Required"),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

export default function VolunteerPage() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { skills: [] },
  });

  const selectedSkills = watch("skills") ?? [];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setValue("skills", selectedSkills.filter((s) => s !== skill), { shouldValidate: true });
    } else {
      setValue("skills", [...selectedSkills, skill], { shouldValidate: true });
    }
  };

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setDone(true);
    toast.success("Thank you for volunteering! We'll be in touch soon.");
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-60 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920" alt="Volunteer" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">Get Involved</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Volunteer
          </h1>
          <p className="text-gray-300 mt-2">Give your time. Change Kenya.</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {done ? (
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Thank You!
            </h2>
            <p className="text-gray-500">Your volunteer application has been received. Our county coordinator will reach out within 48 hours.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Volunteer Application
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">First Name</label>
                  <input {...register("firstName")} className="form-input" />
                  {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input {...register("lastName")} className="form-input" />
                  {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Email</label>
                  <input {...register("email")} type="email" className="form-input" />
                  {errors.email && <p className="form-error">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input {...register("phone")} type="tel" className="form-input" />
                  {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label className="form-label">County</label>
                <select {...register("county")} className="form-input">
                  <option value="">Select county</option>
                  {KENYAN_COUNTIES_LIST.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.county && <p className="form-error">{errors.county.message}</p>}
              </div>

              {/* Skills */}
              <div>
                <label className="form-label mb-2 block">Skills / Areas of Interest</label>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => {
                    const active = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          active
                            ? "bg-red-600 text-white border-red-600"
                            : "border-gray-200 text-gray-600 hover:border-red-400"
                        }`}
                      >
                        {active && <Check className="w-3 h-3 inline mr-1" />}{skill}
                      </button>
                    );
                  })}
                </div>
                {errors.skills && <p className="form-error mt-1">{errors.skills.message}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Availability</label>
                  <select {...register("availability")} className="form-input">
                    <option value="">Select…</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both</option>
                    <option value="evenings">Evenings only</option>
                  </select>
                  {errors.availability && <p className="form-error">{errors.availability.message}</p>}
                </div>
                <div>
                  <label className="form-label">Hours per week</label>
                  <select {...register("hoursPerWeek")} className="form-input">
                    <option value="">Select…</option>
                    {["1–3 hours", "4–6 hours", "7–10 hours", "10+ hours"].map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  {errors.hoursPerWeek && <p className="form-error">{errors.hoursPerWeek.message}</p>}
                </div>
              </div>

              <div>
                <label className="form-label">Any additional message? (optional)</label>
                <textarea {...register("message")} className="form-input min-h-[80px] resize-none" placeholder="Tell us anything else we should know…" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                ) : "Submit Application"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
