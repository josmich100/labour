"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Check, ChevronsRight, User, Briefcase, FileCheck } from "lucide-react";
import { KENYAN_COUNTIES_LIST } from "@/lib/data/counties";

// — Step schemas —
const step1Schema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(9, "Valid phone required"),
  idNumber: z.string().min(7, "ID number required"),
  dob: z.string().min(1, "Date of birth required"),
  gender: z.enum(["male", "female", "prefer_not_to_say"], { error: "Select gender" }),
  county: z.string().min(1, "Select your county"),
});

const step2Schema = z.object({
  occupation: z.string().min(2, "Occupation required"),
  employer: z.string().optional(),
  membershipType: z.enum(["standard", "premium"], { error: "Select membership type" }),
  heardFrom: z.string().min(1, "Required"),
  whyJoin: z.string().min(20, "Tell us why you want to join (min 20 chars)"),
  agreeTerms: z.literal(true, { message: "You must agree to the terms" }),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

const STEPS = [
  { id: 1, label: "Personal Info", icon: User },
  { id: 2, label: "Professional", icon: Briefcase },
  { id: 3, label: "Review & Confirm", icon: FileCheck },
];

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema) });
  const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema) });

  const onStep1 = (data: Step1Data) => {
    setStep1Data(data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onStep2 = () => {
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onFinalSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    toast.success("Welcome to the Labour Party of Kenya! Check your email.");
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-3xl p-12 shadow-xl text-center max-w-md w-full mx-4">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
            Welcome, Comrade!
          </h2>
          <p className="text-gray-500 mb-6">
            Your LPK membership application has been received. We&apos;ll review and activate your account within 24 hours. Check your email for confirmation.
          </p>
          <div className="bg-red-50 rounded-xl p-4 text-sm text-red-700 font-medium">
            🇰🇪 Building a Better Kenya — Together.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-52 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1920"
          alt="Join LPK"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
            Join the Movement
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Become a Member
          </h1>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Stepper */}
        <div className="flex items-center justify-between mb-10">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isComplete = step > s.id;
            const isActive = step === s.id;
            return (
              <div key={s.id} className="flex items-center flex-1">
                <div className={`flex flex-col items-center ${i < STEPS.length - 1 ? "flex-1" : ""}`}>
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      isComplete
                        ? "bg-green-600 text-white"
                        : isActive
                        ? "bg-red-600 text-white shadow-lg ring-4 ring-red-100"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {isComplete ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs mt-1.5 font-semibold ${isActive ? "text-red-600" : isComplete ? "text-green-600" : "text-gray-400"}`}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-3 mb-4 ${step > s.id ? "bg-green-500" : "bg-gray-200"}`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Step 1 */}
          {step === 1 && (
            <form onSubmit={form1.handleSubmit(onStep1)} className="space-y-5">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
                Personal Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">First Name</label>
                  <input {...form1.register("firstName")} className="form-input" placeholder="e.g. Wanjiku" />
                  {form1.formState.errors.firstName && <p className="form-error">{form1.formState.errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input {...form1.register("lastName")} className="form-input" placeholder="e.g. Kamau" />
                  {form1.formState.errors.lastName && <p className="form-error">{form1.formState.errors.lastName.message}</p>}
                </div>
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input {...form1.register("email")} type="email" className="form-input" placeholder="you@example.com" />
                {form1.formState.errors.email && <p className="form-error">{form1.formState.errors.email.message}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Phone Number</label>
                  <input {...form1.register("phone")} type="tel" className="form-input" placeholder="07XX XXX XXX" />
                  {form1.formState.errors.phone && <p className="form-error">{form1.formState.errors.phone.message}</p>}
                </div>
                <div>
                  <label className="form-label">National ID Number</label>
                  <input {...form1.register("idNumber")} className="form-input" placeholder="e.g. 12345678" />
                  {form1.formState.errors.idNumber && <p className="form-error">{form1.formState.errors.idNumber.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Date of Birth</label>
                  <input {...form1.register("dob")} type="date" className="form-input" />
                  {form1.formState.errors.dob && <p className="form-error">{form1.formState.errors.dob.message}</p>}
                </div>
                <div>
                  <label className="form-label">County</label>
                  <select {...form1.register("county")} className="form-input">
                    <option value="">Select county</option>
                    {KENYAN_COUNTIES_LIST.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {form1.formState.errors.county && <p className="form-error">{form1.formState.errors.county.message}</p>}
                </div>
              </div>
              <div>
                <label className="form-label">Gender</label>
                <div className="flex gap-4 mt-1">
                  {(["male", "female", "prefer_not_to_say"] as const).map((g) => (
                    <label key={g} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                      <input type="radio" {...form1.register("gender")} value={g} className="accent-red-600" />
                      {g === "male" ? "Male" : g === "female" ? "Female" : "Prefer not to say"}
                    </label>
                  ))}
                </div>
                {form1.formState.errors.gender && <p className="form-error">{form1.formState.errors.gender.message}</p>}
              </div>
              <button type="submit" className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                Continue <ChevronsRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form onSubmit={form2.handleSubmit(onStep2)} className="space-y-5">
              <h2 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                Professional Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Occupation</label>
                  <input {...form2.register("occupation")} className="form-input" placeholder="e.g. Teacher" />
                  {form2.formState.errors.occupation && <p className="form-error">{form2.formState.errors.occupation.message}</p>}
                </div>
                <div>
                  <label className="form-label">Employer (optional)</label>
                  <input {...form2.register("employer")} className="form-input" placeholder="Your employer" />
                </div>
              </div>
              <div>
                <label className="form-label">Membership Type</label>
                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  {(["standard", "premium"] as const).map((type) => (
                    <label
                      key={type}
                      className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        form2.watch("membershipType") === type
                          ? "border-red-600 bg-red-50"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <input type="radio" {...form2.register("membershipType")} value={type} className="sr-only" />
                      <div className="font-bold text-gray-900 capitalize mb-1">{type}</div>
                      <div className="text-sm text-gray-500">
                        {type === "standard" ? "Free — Basic voting rights" : "KES 500/yr — Full benefits + newsletter"}
                      </div>
                      {form2.watch("membershipType") === type && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </label>
                  ))}
                </div>
                {form2.formState.errors.membershipType && <p className="form-error">{form2.formState.errors.membershipType.message}</p>}
              </div>
              <div>
                <label className="form-label">How did you hear about us?</label>
                <select {...form2.register("heardFrom")} className="form-input">
                  <option value="">Select…</option>
                  {["Social Media", "Friend / Family", "TV / Radio", "Newspaper", "Community Meeting", "Other"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {form2.formState.errors.heardFrom && <p className="form-error">{form2.formState.errors.heardFrom.message}</p>}
              </div>
              <div>
                <label className="form-label">Why do you want to join LPK?</label>
                <textarea {...form2.register("whyJoin")} className="form-input min-h-[90px] resize-none" placeholder="Tell us briefly…" />
                {form2.formState.errors.whyJoin && <p className="form-error">{form2.formState.errors.whyJoin.message}</p>}
              </div>
              <div className="flex items-start gap-3">
                <input {...form2.register("agreeTerms")} type="checkbox" id="agreeTerms" className="mt-0.5 accent-red-600 w-4 h-4" />
                <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="/terms" className="text-red-600 underline" target="_blank">Terms & Conditions</a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-red-600 underline" target="_blank">Privacy Policy</a>.
                </label>
              </div>
              {form2.formState.errors.agreeTerms && <p className="form-error">{form2.formState.errors.agreeTerms.message}</p>}
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-300 transition-colors">
                  Back
                </button>
                <button type="submit" className="flex-2 flex-1 btn-primary py-3 flex items-center justify-center gap-2">
                  Review <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Step 3 — Review */}
          {step === 3 && step1Data && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
                Review & Confirm
              </h2>
              <div className="space-y-3 mb-6">
                {[
                  ["Full Name", `${step1Data.firstName} ${step1Data.lastName}`],
                  ["Email", step1Data.email],
                  ["Phone", step1Data.phone],
                  ["ID Number", step1Data.idNumber],
                  ["Date of Birth", step1Data.dob],
                  ["County", step1Data.county],
                  ["Gender", step1Data.gender],
                  ["Occupation", form2.getValues("occupation")],
                  ["Membership Type", form2.getValues("membershipType")],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between py-2 border-b border-gray-100 text-sm">
                    <span className="text-gray-500 font-medium">{label}</span>
                    <span className="text-gray-900 font-semibold capitalize">{val}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-300 transition-colors">
                  Back
                </button>
                <button onClick={onFinalSubmit} className="flex-1 btn-primary py-3 flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" /> Submit Application
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
