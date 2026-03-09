"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaStar } from "react-icons/fa";

interface NavChild {
  label: string;
  href: string;
  desc: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Leadership", href: "/leadership" },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "All News", href: "/news", desc: "Latest stories and reports" },
      { label: "Policy Updates", href: "/news?category=Policy", desc: "Our policy positions and proposals" },
      { label: "Press Releases", href: "/news?category=Press+Release", desc: "Official party statements" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Upcoming Events", href: "/events", desc: "Rallies, town halls and more" },
      { label: "Past Events", href: "/events?tab=past", desc: "Browse the events archive" },
    ],
  },
  { label: "Counties", href: "/counties" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06),0_6px_24px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      {/* Bottom accent line â€” only visible when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? "h-[60px]" : "h-[72px]"
          }`}
        >
          {/* â”€â”€ Logo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div
              className="relative w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-[1.06]"
              style={{ boxShadow: "0 0 0 2px #8fbb44, 0 4px 14px rgba(0,0,0,0.25)" }}
            >
              <FaStar className="text-white w-[18px] h-[18px]" />
            </div>
            <div className="hidden sm:block">
              <p
                className={`text-[16px] font-bold leading-none transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.35)]"
                }`}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Labour
              </p>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.14em] mt-[3px] transition-colors duration-300"
                style={{ color: "#8fbb44" }}
              >
                Haki na Usawa
              </p>
            </div>
          </Link>

          {/* â”€â”€ Desktop nav â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-[3px] px-3 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 group ${
                    scrolled
                      ? isActive(link.href)
                        ? "text-red-600"
                        : "text-gray-700 hover:text-red-600 hover:bg-red-50/70"
                      : isActive(link.href)
                        ? "text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-[3px] left-2 right-2 h-[2px] rounded-full"
                      style={{ backgroundColor: "#8fbb44" }}
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.17, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-2 min-w-[256px] z-50"
                    >
                      <div className="px-4 pt-1.5 pb-2 border-b border-gray-50">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-gray-400">
                          {link.label}
                        </p>
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/item flex items-start gap-3 px-4 py-3 hover:bg-[#8fbb44]/8 transition-colors"
                        >
                          <div
                            className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors"
                            style={{ backgroundColor: "#8fbb44" }}
                          />
                          <div>
                            <p className="text-[13px] font-semibold text-gray-800 group-hover/item:text-red-600 transition-colors leading-snug">
                              {child.label}
                            </p>
                            <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{child.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* â”€â”€ CTA buttons â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="hidden lg:flex items-center gap-1.5">
            <Link
              href="/volunteer"
              className={`px-4 py-2 text-[12.5px] font-semibold rounded-lg border-[1.5px] transition-all duration-200 ${
                scrolled
                  ? "border-red-500/60 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                  : "border-white/50 text-white hover:bg-white hover:text-red-600 hover:border-white"
              }`}
            >
              Volunteer
            </Link>
            <Link
              href="/join"
              className="px-4 py-2 text-[12.5px] font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-px"
            >
              Join Now
            </Link>
            <Link
              href="/donate"
              className="px-4 py-2 text-[12.5px] font-semibold rounded-lg text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-px"
              style={{ backgroundColor: "#8fbb44" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#7aa83a")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#8fbb44")}
            >
              Donate
            </Link>
          </div>

          {/* â”€â”€ Mobile hamburger â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-200 ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/15"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* â”€â”€ Mobile drawer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[min(340px,100vw)] bg-white z-50 flex flex-col shadow-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center shadow-md"
                    style={{ boxShadow: "0 0 0 2px #8fbb44, 0 2px 8px rgba(0,0,0,0.2)" }}
                  >
                    <FaStar className="text-white w-[16px] h-[16px]" />
                  </div>
                  <div>
                    <p
                      className="text-[15px] font-bold text-gray-900 leading-none"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Labour Party
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mt-1" style={{ color: "#8fbb44" }}>
                      Haki na Usawa
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-[18px] h-[18px]" />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 overflow-y-auto py-4 px-3">
                <nav className="space-y-0.5">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                    >
                      {link.children ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileExpanded(
                                mobileExpanded === link.label ? null : link.label
                              )
                            }
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                              isActive(link.href)
                                ? "text-red-600 bg-red-50/80"
                                : "text-gray-800 hover:bg-gray-50"
                            }`}
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                mobileExpanded === link.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileExpanded === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                <div className="ml-4 pl-3.5 pr-2 py-1 space-y-0.5 border-l-2 mb-1" style={{ borderLeftColor: "#8fbb44" }}>
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-red-50/70 transition-colors group"
                                    >
                                      <span className="text-[13px] font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                                        {child.label}
                                      </span>
                                      <span className="text-[11px] text-gray-400 mt-0.5">{child.desc}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                            isActive(link.href)
                              ? "text-red-600 bg-red-50/80"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                        >
                          {link.label}
                          {isActive(link.href) && (
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8fbb44" }} />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* CTA footer */}
              <div className="px-4 pb-8 pt-4 border-t border-gray-100 space-y-2.5">
                <Link
                  href="/join"
                  className="flex items-center justify-center w-full py-3 text-[14px] font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all shadow-md"
                >
                  Join the Movement
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/volunteer"
                    className="flex items-center justify-center py-2.5 text-[13px] font-semibold rounded-xl border-2 border-red-200 text-red-600 hover:border-red-500 hover:bg-red-50 transition-all"
                  >
                    Volunteer
                  </Link>
                  <Link
                    href="/donate"
                    className="flex items-center justify-center py-2.5 text-[13px] font-semibold rounded-xl text-white transition-all"
                    style={{ backgroundColor: "#8fbb44" }}
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
