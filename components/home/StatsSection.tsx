"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: 46500, suffix: "+", label: "Party Members", prefix: "" },
  { value: 27, suffix: "", label: "County Chapters", prefix: "" },
  { value: 290, suffix: "+", label: "Constituencies", prefix: "" },
  { value: 1998, suffix: "", label: "Founded", prefix: "" },
  { value: 2012, suffix: "", label: "Registered", prefix: "" },
  { value: 10, suffix: "", label: "Strategic Directions", prefix: "" },
];

function useCountUp(end: number, duration: number = 2000, started: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * (end - startValue) + startValue));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [end, duration, started]);
  return count;
}

function StatItem({ stat, started }: { stat: typeof STATS[0]; started: boolean }) {
  const count = useCountUp(stat.value, 2200, started);
  const display = stat.value >= 1000 ? count.toLocaleString() : count;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center px-4 py-2"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
        {stat.prefix}{display}{stat.suffix}
      </div>
      <div className="text-red-200 text-sm mt-2 font-medium uppercase tracking-wide">{stat.label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-red-700 py-14 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-red-600/50">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
