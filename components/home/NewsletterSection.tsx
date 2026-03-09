"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Mail, Loader2 } from "lucide-react";

const PARTNERS = [
  "Central Organisation of Trade Unions",
  "Kenya National Union of Teachers",
  "Kenya Medical Workers Union",
  "University Academic Staff Union",
  "Dock Workers Union",
  "Kenya Plantation & Agricultural Workers Union",
  "Amalgamated Union of Kenya Metal Workers",
  "Engineering Workers Union",
];

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setEmail("");
    toast.success("🎉 You're subscribed! Welcome to the LPK community.");
  };

  return (
    <>
      {/* Partners Strip */}
      <section className="py-10 bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Trusted & Endorsed By Kenya&apos;s Leading Unions
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-8 marquee-track">
              {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                <div
                  key={i}
                  className="shrink-0 px-6 py-3 bg-white rounded-xl border border-gray-200 text-gray-500 text-sm font-medium whitespace-nowrap shadow-sm"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1920)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Stay Updated with LPK
            </h2>
            <p className="text-gray-300 text-base mb-8">
              Get the latest news, policy updates, and event invitations delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 disabled:opacity-70 text-white font-semibold rounded-xl transition-all text-sm flex items-center gap-2 shrink-0"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-4">
              We respect your privacy. Unsubscribe at any time. Read our{" "}
              <a href="/privacy" className="text-red-400 underline">Privacy Policy</a>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
