"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, MapPin, TrendingUp, Shield } from "lucide-react";

const STAT_CARDS = [
  { icon: Users, value: "46K+", label: "Members", color: "bg-red-600" },
  { icon: MapPin, value: "27", label: "Counties", color: "bg-green-600" },
  { icon: TrendingUp, value: "26+", label: "Years Active", color: "bg-amber-500" },
  { icon: Shield, value: "SI", label: "Global Affiliate", color: "bg-blue-600" },
];

const HEADLINE_WORDS = ["Championing", "Workers.", "Building", "Kenya's", "Future."];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; color: string;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["rgba(220,38,38,", "rgba(22,163,74,", "rgba(245,158,11,"];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10 || p.x > canvas.width + 10) p.vx *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1920"
          alt="Kenyan rally"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
      </div>

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6"
            >
              🇰🇪 Labour Party of Kenya · 2026
            </motion.div>

            {/* Animated Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                  className={`inline-block mr-3 ${i === 3 || i === 4 ? "text-red-400" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg"
            >
              The Labour Party of Kenya (LPK) is Kenya's progressive social democratic party,
              fighting for every worker, every family, and every community. Founded in 1998, LPK
              is anchored on the philosophy of social democracy, equity, justice, and human dignity
              for all Kenyans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/manifesto" className="btn-primary text-base px-7 py-3.5">
                Discover More <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/join" className="btn-ghost text-base px-7 py-3.5">
                <Play className="w-4 h-4 fill-current" /> Join the Movement
              </Link>
            </motion.div>
          </div>

          {/* Right: Hero Card + Floating Stats */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Main Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-red-500 shadow-2xl shadow-red-900/40"
              style={{ transform: "rotate(-3deg)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800"
                alt="LPK Leader"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>Hon. Prof. Julia Ojiambo</div>
                <div className="text-red-300 text-sm">National Chairperson, LPK</div>
              </div>
            </motion.div>

            {/* Floating Stat Cards */}
            {STAT_CARDS.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.15, type: "spring", stiffness: 200 }}
                className={`absolute glass rounded-xl p-3 flex items-center gap-2.5 shadow-lg ${
                  i === 0
                    ? "-top-6 -left-8"
                    : i === 1
                    ? "-top-4 right-4"
                    : i === 2
                    ? "-bottom-6 -left-6"
                    : "-bottom-4 right-2"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">{value}</div>
                  <div className="text-gray-300 text-xs">{label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-red-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
