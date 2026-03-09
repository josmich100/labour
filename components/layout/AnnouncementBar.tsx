"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const ANNOUNCEMENTS = [
  { text: "LPK Strategic Plan 2024–2029 — 10 Strategic Directions for a Better Kenya", href: "/about" },
  { text: "Join 46,500+ Kenyans building a progressive, social democratic Kenya — Haki na Usawa", href: "/join" },
  { text: "LPK Is Active in 27 Counties and Expanding — Find Your Local Branch", href: "/counties" },
  { text: "Workers' Rights Are Human Rights — LPK Advocates for Decent Pay & Safe Workplaces", href: "/manifesto" },
  { text: "LPK — Affiliated with the Socialist International (SI) & IUSY for Global Labour Solidarity", href: "/about" },
];

const SOCIAL = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaTwitter, href: "#", label: "Twitter / X" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
  { Icon: FaTiktok, href: "#", label: "TikTok" },
];

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ANNOUNCEMENTS.length), 4500);
    return () => clearInterval(t);
  }, []);

  if (dismissed) return null;

  return (
    <div className="relative z-50">
      {/* ── Ticker strip ─────────────────────────────────────── */}
      <div className="bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-9 gap-3">
          {/* Badge */}
          <span className="flex-shrink-0 bg-red-600 border-l-[3px] border-[#8fbb44] text-[10px] font-extrabold uppercase tracking-[0.14em] text-white px-2.5 py-[3px] rounded-[3px] select-none">
            Latest
          </span>

          {/* Rotating announcement */}
          <div className="relative h-9 flex-1 min-w-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute inset-0 flex items-center"
              >
                <Link
                  href={ANNOUNCEMENTS[idx].href}
                  className="text-[11.5px] text-gray-400 hover:text-white transition-colors duration-150 truncate"
                >
                  {ANNOUNCEMENTS[idx].text}
                  <span className="ml-2 font-semibold" style={{ color: "#8fbb44" }}>Read more →</span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next / Dismiss */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => setIdx((i) => (i === 0 ? ANNOUNCEMENTS.length - 1 : i - 1))}
              aria-label="Previous announcement"
              className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-[#8fbb44] transition-colors rounded"
            >
              <ChevronRight className="w-3.5 h-3.5 rotate-180" />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % ANNOUNCEMENTS.length)}
              aria-label="Next announcement"
              className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-[#8fbb44] transition-colors rounded"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <div className="w-px h-3.5 bg-gray-700 mx-2" />
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss bar"
              className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-gray-300 transition-colors rounded"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Info bar ───────────────────────────────────────────── */}
      <div className="bg-red-700 border-b-[2px]" style={{ borderBottomColor: "#8fbb44" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          {/* Contact */}
          <div className="flex items-center gap-5 text-[11px] text-red-100">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              Nairobi, Kenya
            </span>
            <a
              href="tel:+254700000000"
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 flex-shrink-0" />
              +254 700 000 000
            </a>
            <a
              href="mailto:info@labourparty.ke"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 flex-shrink-0" />
              info@labourparty.ke
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center">
            {SOCIAL.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-7 h-7 flex items-center justify-center text-red-200 transition-all duration-150 hover:scale-110"
                style={{}}
                onMouseEnter={e => (e.currentTarget.style.color = "#8fbb44")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}
              >
                <Icon className="w-[11px] h-[11px]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
