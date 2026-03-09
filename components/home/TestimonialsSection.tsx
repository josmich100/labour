"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "LPK gave me a platform to fight for my fellow tea pickers. After joining, our cooperative negotiated better wages for over 3,000 workers in Kericho. This party truly listens.",
    name: "Margaret Chepkoech",
    county: "Kericho County",
    year: "Member since 2019",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200",
  },
  {
    id: 2,
    quote: "As a nurse in a rural health centre, I've seen the healthcare gaps that LPK's manifesto addresses directly. Their Universal Healthcare Framework is not just a dream — it's a real plan.",
    name: "Samuel Otieno Oloo",
    county: "Homa Bay County",
    year: "Member since 2021",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
  {
    id: 3,
    quote: "The LPK Youth Leadership Summit changed my life. I started my own business after attending their entrepreneurship clinic. Now I employ 12 young people from my county.",
    name: "Amina Wanjiru",
    county: "Nairobi County",
    year: "Member since 2022",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
  },
  {
    id: 4,
    quote: "As a smallholder farmer in Meru, I benefit directly from LPK's agricultural policies. The input subsidy programme saved my farm during the drought. I can't think of another party that actually delivers.",
    name: "David Muriithi",
    county: "Meru County",
    year: "Member since 2020",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=200",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => { setDirection(-1); setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { setDirection(1); setCurrent(c => (c + 1) % TESTIMONIALS.length); };

  const t = TESTIMONIALS[current];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>
            What Our <span className="text-red-600">Members Say</span>
          </h2>
        </div>

        <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12 shadow-lg overflow-hidden">
          {/* Large quote mark */}
          <Quote className="absolute top-6 right-8 w-20 h-20 text-red-100" strokeWidth={1} />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative z-10"
            >
              <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-200 shrink-0">
                  <Image src={t.image} alt={t.name} width={56} height={56} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-red-600 text-sm">{t.county}</div>
                  <div className="text-gray-400 text-xs">{t.year}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-7 h-2.5 bg-red-600" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-red-600 hover:text-red-600 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
