'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const STATS = [
  { value: '46,500+', label: 'Members' },
  { value: '27', label: 'Counties' },
  { value: '1998', label: 'Founded' },
  { value: 'SI', label: 'Global Affiliate' },
];

export default function Hero() {
  const heroRef     = useRef<HTMLDivElement>(null);
  const eyebrowRef  = useRef<HTMLDivElement>(null);
  const line1Ref    = useRef<HTMLDivElement>(null);
  const line2Ref    = useRef<HTMLDivElement>(null);
  const line3Ref    = useRef<HTMLDivElement>(null);
  const bodyRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);
  const chipRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Image column slides in from right
      tl.from(imageColRef.current, { opacity: 0, x: 80, duration: 1.1, delay: 0.1 })
        // Eyebrow
        .from(eyebrowRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.7')
        // Headline lines stagger
        .from([line1Ref.current, line2Ref.current, line3Ref.current], {
          opacity: 0, y: 60, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        }, '-=0.4')
        .from(bodyRef.current, { opacity: 0, y: 20, duration: 0.7 }, '-=0.3')
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from(statsRef.current?.children ? Array.from(statsRef.current.children) : [], {
          opacity: 0, y: 16, duration: 0.5, stagger: 0.07,
        }, '-=0.3')
        // Floating overlays pop in
        .from(badgeRef.current, { opacity: 0, scale: 0.8, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2')
        .from(chipRef.current, { opacity: 0, scale: 0.8, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3');

      // Subtle breathing animation on badge
      gsap.to(badgeRef.current, {
        y: -6,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative bg-[#0d0d0d] overflow-hidden min-h-screen flex items-center pt-24 pb-12"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8fbb44]/6 rounded-full blur-[130px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── LEFT: Copy ─────────────────────────────── */}
          <div className="order-2 lg:order-1 py-8 lg:py-0">

            {/* Eyebrow */}
            <div ref={eyebrowRef} className="flex items-center gap-3 mb-7">
              <div className="w-8 h-[2px] bg-red-600 rounded-full" />
              <span className="text-red-500 text-xs font-black tracking-[0.3em] uppercase">
                Labour Party of Kenya · Est. 1998
              </span>
            </div>

            {/* Headline */}
            <div className="mb-7 overflow-hidden">
              <div ref={line1Ref} className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                Haki
              </div>
              <div ref={line2Ref} className="text-6xl md:text-7xl lg:text-8xl font-black text-red-600 leading-[0.9] tracking-tight">
                Na Usawa
              </div>
              <div ref={line3Ref} className="text-6xl md:text-7xl lg:text-8xl font-black text-[#8fbb44] leading-[0.9] tracking-tight">
                Kenya.
              </div>
            </div>

            {/* Body */}
            <p ref={bodyRef} className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
              Kenya&apos;s progressive social democratic party — fighting for workers&apos; rights, gender equity,
              and a classless society where every Kenyan prospers.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-12">
              <a
                href="#membership"
                className="group relative inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:scale-[1.02] text-sm"
              >
                Join the Movement
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#manifesto"
                className="group inline-flex items-center gap-2.5 border border-white/15 hover:border-[#8fbb44]/50 text-gray-400 hover:text-[#8fbb44] font-bold px-8 py-4 rounded-xl transition-all duration-300 text-sm hover:bg-[#8fbb44]/5"
              >
                Our Manifesto
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div ref={statsRef} className="flex flex-wrap gap-6 pt-8 border-t border-white/[0.07]">
              {STATS.map((s, i) => (
                <div key={i} className="group">
                  <div className="text-2xl font-black text-white group-hover:text-red-500 transition-colors duration-300 leading-none">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-gray-600 mt-1 font-medium uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image panel ──────────────────────── */}
          <div ref={imageColRef} className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 560 }}>
                {/* Red overlay gradient at top */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-red-600/60 to-transparent z-10 pointer-events-none" />
                {/* Dark gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

                <Image
                  src="https://res.cloudinary.com/dpk27rbno/image/upload/v1773076517/Prof-Julia-Ojiambo_pgyfbw.jpg"
                  alt="Hon. Prof. Julia Ojiambo — National Chairperson, LPK"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Top-left party badge */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-red-600/40 rounded-full px-3.5 py-1.5">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    <span className="text-white text-[11px] font-bold tracking-wider uppercase">LPK · 2026</span>
                  </div>
                </div>

                {/* Bottom name plate */}
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <p className="text-[#8fbb44] text-[11px] font-black tracking-[0.2em] uppercase mb-1">
                    National Chairperson
                  </p>
                  <h3 className="text-white text-xl font-black leading-snug">
                    Hon. Prof. Julia Ojiambo
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">Labour Party of Kenya</p>
                </div>
              </div>

              {/* Floating badge — Years */}
              <div
                ref={badgeRef}
                className="absolute -top-4 -right-4 bg-[#8fbb44] text-black rounded-2xl px-5 py-4 shadow-2xl shadow-[#8fbb44]/30 text-center"
              >
                <div className="text-3xl font-black leading-none">26+</div>
                <div className="text-[10px] font-black uppercase tracking-widest mt-1 leading-tight">
                  Years of<br />Advocacy
                </div>
              </div>

              {/* Floating chip — SI */}
              <div
                ref={chipRef}
                className="absolute -bottom-4 -left-4 bg-[#111] border border-white/10 text-white rounded-2xl shadow-2xl px-5 py-4"
              >
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Affiliated</div>
                <div className="text-base font-black text-white">Socialist</div>
                <div className="text-base font-black text-red-500">International</div>
              </div>

              {/* Decorative red strip at right edge */}
              <div className="absolute top-10 -right-2 w-1 h-28 bg-gradient-to-b from-red-600 to-transparent rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
