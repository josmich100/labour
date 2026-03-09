"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const GALLERY_ITEMS = [
  { id: 1, src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800", alt: "Workers rally Nairobi", category: "Rallies" },
  { id: 2, src: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=800", alt: "Leadership summit", category: "Leadership" },
  { id: 3, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800", alt: "Annual convention", category: "Events" },
  { id: 4, src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800", alt: "Community outreach Kisumu", category: "Community" },
  { id: 5, src: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800", alt: "Parliament session", category: "Leadership" },
  { id: 6, src: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=800", alt: "Youth programme", category: "Community" },
  { id: 7, src: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800", alt: "Farmers forum Eldoret", category: "Events" },
  { id: 8, src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=800", alt: "Mombasa coast rally", category: "Rallies" },
  { id: 9, src: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=800", alt: "Nairobi cityscape meeting", category: "Events" },
  { id: 10, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", alt: "Party members briefing", category: "Events" },
  { id: 11, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", alt: "Women leadership forum", category: "Leadership" },
  { id: 12, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800", alt: "Community clean-up", category: "Community" },
  { id: 13, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800", alt: "Youth coding bootcamp", category: "Community" },
  { id: 14, src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800", alt: "Media briefing", category: "Leadership" },
  { id: 15, src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800", alt: "Town hall meeting", category: "Events" },
  { id: 16, src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800", alt: "Nakuru rally 2025", category: "Rallies" },
  { id: 17, src: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=800", alt: "Lake Victoria region meeting", category: "Community" },
  { id: 18, src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800", alt: "Annual report launch", category: "Events" },
];

const CATEGORIES = ["All", "Events", "Leadership", "Rallies", "Community"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = GALLERY_ITEMS.filter((i) => filter === "All" || i.category === filter);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const next = () => setLightboxIdx((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <div className="pt-24 min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative h-56 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1920"
          alt="Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
            Photo Gallery
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Gallery
          </h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-16 lg:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                filter === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group mb-4"
              onClick={() => openLightbox(idx)}
            >
              <div className="relative w-full" style={{ paddingBottom: idx % 3 === 0 ? "75%" : idx % 3 === 1 ? "120%" : "60%" }}>
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-xl flex items-end p-3">
                  <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-5 h-5" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].alt}
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              {lightboxIdx + 1} / {filtered.length} — {filtered[lightboxIdx].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
