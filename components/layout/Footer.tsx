"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About LPK", href: "/about" },
    { label: "Party Manifesto", href: "/manifesto" },
    { label: "Leadership", href: "/leadership" },
    { label: "Our Counties", href: "/counties" },
    { label: "Media Gallery", href: "/gallery" },
  ],
  "Get Involved": [
    { label: "Join LPK", href: "/join" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/donate" },
    { label: "Events", href: "/events" },
    { label: "News & Press", href: "/news" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Policies": [
    { label: "Workers' Rights", href: "/manifesto#workers-rights" },
    { label: "Universal Healthcare", href: "/manifesto#healthcare" },
    { label: "Quality Education", href: "/manifesto#education" },
    { label: "Affordable Housing", href: "/manifesto#housing" },
    { label: "Agricultural Support", href: "/manifesto#agriculture" },
    { label: "Tech & Innovation", href: "/manifesto#technology" },
  ],
};

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: FaTwitter, href: "#", label: "Twitter/X", color: "hover:bg-sky-500" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
  { icon: FaTiktok, href: "#", label: "TikTok", color: "hover:bg-gray-700" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* CTA Band */}
      <div className="bg-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Ready to Build a Better Kenya?
            </h2>
            <p className="text-red-200 text-sm mt-1">Join 50,000+ members championing workers&apos; rights and social justice.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/join" className="px-6 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Join LPK Today
            </Link>
            <Link href="/donate" className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm">
              Make a Donation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center font-bold text-white text-lg">
                LPK
              </div>
              <div>
                <div className="font-bold text-white text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                  Labour Party of Kenya
                </div>
                <div className="text-red-400 text-xs">Building a Better Kenya</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              The Labour Party of Kenya is committed to workers&apos; rights, social justice, and economic empowerment 
              for every Kenyan. Founded in 1994, we have been building a better Kenya for over three decades.
            </p>
            <div className="space-y-2.5 mb-6">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Anniversary Towers, 9th Floor, University Way, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:+254700555557" className="hover:text-white transition-colors">+254 700 555 LPK</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <a href="mailto:info@labourparty.ke" className="hover:text-white transition-colors">
                  info@labourparty.ke
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center transition-colors duration-200 ${color}`}
                >
                  <Icon className="w-4 h-4 text-gray-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Labour Party of Kenya. All rights reserved. Registration No. LPK/2012/001</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
