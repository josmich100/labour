'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { AnimatePresence, motion, animate, useMotionValue, useTransform } from 'framer-motion';

const HERO_SLIDES = [
  {
    src: 'https://res.cloudinary.com/dpk27rbno/image/upload/v1773312755/cover_d2x5cr.jpg',
    alt: 'Supporters gathered at a Labour Party event.',
    eyebrow: 'Grassroots Organizing',
    title: 'A people-first movement built in public.',
    body: 'From estates to marketplaces, from campuses to county halls, the Labour Party organizes where real life happens.',
    metric: '47 counties active',
  },
  {
    src: 'https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/four_ps2utz.jpg',
    alt: 'Campaign moment with supporters and party leaders.',
    eyebrow: 'National Momentum',
    title: 'A brighter campaign language for a new Kenya.',
    body: 'Modern, disciplined, and rooted in social justice, the movement is designed to feel hopeful, credible, and unmistakably Kenyan.',
    metric: '12K+ active members',
  },
  {
    src: 'https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/six_jff93h.jpg',
    alt: 'Community members attending an outdoor political meeting.',
    eyebrow: 'Community Power',
    title: 'Leadership that shows up where people need it most.',
    body: 'We believe political dignity starts with presence: listening closely, building trust, and acting with consistency.',
    metric: '26+ years of advocacy',
  },
  {
    src: 'https://res.cloudinary.com/dpk27rbno/image/upload/v1773081473/three_sslr0m.jpg',
    alt: 'Crowd scene from a Labour Party gathering.',
    eyebrow: 'Justice in Motion',
    title: 'A stronger visual voice for workers, families, and youth.',
    body: 'This campaign is not only about policy. It is about energy, clarity, and building a future people can actually see themselves in.',
    metric: '98% grassroots driven',
  },
];

const PILLARS = [
  { icon: '⚖️', title: "Workers' Rights", blurb: 'Fair wages and dignity at work.' },
  { icon: '🌱', title: 'Gender Equity', blurb: 'Equal voice and equal opportunity.' },
  { icon: '🏥', title: 'Universal Health', blurb: 'Care that reaches every family.' },
  { icon: '📚', title: 'Education First', blurb: 'Quality learning as a right.' },
  { icon: '🌍', title: 'Climate Justice', blurb: 'Protecting land and livelihoods.' },
  { icon: '🤝', title: 'Social Cohesion', blurb: 'Unity beyond tribe and class.' },
];

const STATS = [
  { end: 47, suffix: '', label: 'Counties Represented' },
  { end: 26, suffix: '+', label: 'Years of Advocacy' },
  { end: 12, suffix: 'K+', label: 'Active Members' },
  { end: 98, suffix: '%', label: 'Grassroots Driven' },
];

const TAGLINES = [
  'Justice with momentum.',
  'A modern movement for working people.',
  'Bright, disciplined, and rooted in dignity.',
  'Kenya deserves more than survival.',
];

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const unsubscribe = rounded.on('change', (value) => setDisplay(String(value)));
    const controls = animate(count, end, { duration: 2.1, ease: 'easeOut', delay: 1.1 });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, end, rounded]);

  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 backdrop-blur-sm">
      <div className="text-3xl font-black leading-none text-white transition-colors duration-300 group-hover:text-red-400 md:text-4xl tabular-nums">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-[10px] font-bold uppercase leading-tight tracking-[0.25em] text-gray-300">
        {label}
      </div>
    </div>
  );
}

function PillarRail({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="rounded-[28px] border border-white/[0.1] bg-white/[0.05] p-4 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-[2px] w-6 rounded-full bg-[#8fbb44]" />
        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#cfe58e]">Our Pillars</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {PILLARS.map((pillar, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={pillar.title}
              animate={{
                scale: isActive ? 1.02 : 1,
                borderColor: isActive ? 'rgba(220,38,38,0.38)' : 'rgba(255,255,255,0.08)',
                backgroundColor: isActive ? 'rgba(220,38,38,0.12)' : 'rgba(255,255,255,0.03)',
              }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border px-4 py-4"
            >
              <div className="mb-2 text-2xl">{pillar.icon}</div>
              <div className="text-sm font-black leading-snug text-white">{pillar.title}</div>
              <div className="mt-1 text-[11px] leading-relaxed text-gray-300">{pillar.blurb}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  const [tagIdx, setTagIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const tagTimer = window.setInterval(() => {
      setTagIdx((current) => (current + 1) % TAGLINES.length);
    }, 3200);

    return () => window.clearInterval(tagTimer);
  }, []);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setSlideIdx((current) => (current + 1) % HERO_SLIDES.length);
    }, 4600);

    return () => window.clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const denominator = scrollHeight - clientHeight;
      setScrollPct(denominator > 0 ? (scrollTop / denominator) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(eyebrowRef.current, { opacity: 0, y: 24, duration: 0.7, delay: 0.12 })
        .from(headlineRef.current, { opacity: 0, y: 56, duration: 0.9 }, '-=0.42')
        .from(bodyRef.current, { opacity: 0, y: 24, duration: 0.72 }, '-=0.4')
        .from(ctaRef.current, { opacity: 0, y: 24, duration: 0.6 }, '-=0.32')
        .from(statsRef.current, { opacity: 0, y: 26, duration: 0.6 }, '-=0.22')
        .from(mediaRef.current, { opacity: 0, x: 56, scale: 0.96, duration: 0.9 }, '-=0.68')
        .from(thumbsRef.current, { opacity: 0, y: 24, duration: 0.55 }, '-=0.5')
        .from(pillarsRef.current, { opacity: 0, y: 26, duration: 0.65 }, '-=0.42');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const activeSlide = HERO_SLIDES[slideIdx];
  const activePillarIndex = slideIdx % PILLARS.length;

  const goToSlide = (index: number) => {
    setSlideIdx((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#091015] pt-20"
    >
      <motion.div
        className="fixed left-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-red-500 via-[#d7f197] to-white"
        style={{ width: `${scrollPct}%` }}
      />

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.src}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[#071017]/72" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,23,0.96)_0%,rgba(7,16,23,0.82)_44%,rgba(7,16,23,0.68)_66%,rgba(7,16,23,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(220,38,38,0.34),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(143,187,68,0.26),transparent_24%),radial-gradient(circle_at_50%_92%,rgba(255,255,255,0.1),transparent_18%)]" />
      </div>

      <div className="pointer-events-none absolute -left-24 top-20 h-[26rem] w-[26rem] rounded-full bg-red-500/30 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-6rem] top-12 h-[24rem] w-[24rem] rounded-full bg-[#8fbb44]/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-5rem] left-[20%] h-[18rem] w-[18rem] rounded-full bg-white/10 blur-[120px]" />

      <motion.div
        className="pointer-events-none absolute inset-y-0 left-[58%] w-px bg-gradient-to-b from-white/0 via-white/35 to-white/0"
        animate={{ opacity: [0.25, 0.8, 0.25], scaleX: [1, 4, 1] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.32) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 4 + (index % 4) * 2,
            height: 4 + (index % 4) * 2,
            left: `${(index * 11 + 7) % 98}%`,
            top: `${(index * 13 + 12) % 88}%`,
            background: index % 3 === 0 ? '#f87171' : index % 3 === 1 ? '#cfe58e' : '#ffffff',
          }}
          animate={{ y: [0, -32 - index * 2, 0], opacity: [0.24, 0.72, 0.24] }}
          transition={{ duration: 4.8 + index * 0.35, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <div ref={eyebrowRef} className="mb-8 flex items-center gap-3">
              <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-red-500 to-transparent" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-red-300">
                Labour Party of Kenya · Est. 1998
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-[#d7f197] shadow-[0_0_16px_rgba(215,241,151,0.8)]" />
            </div>

            <div ref={headlineRef} className="max-w-2xl">
              <h1 className="text-2xl font-black leading-[1.98] tracking-tight text-white md:text-4xl ">
                <span className="block">A Brighter</span>
                <span className="block bg-gradient-to-r from-red-400 via-white to-[#d7f197] bg-clip-text text-transparent">
                  Future for Work,
                </span>
                <span className="block text-white/95">Justice and Kenya.</span>
              </h1>

              <div className="mt-5 min-h-[2rem] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={tagIdx}
                    initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm font-black uppercase tracking-[0.35em] text-[#d7f197]"
                  >
                    {TAGLINES[tagIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* <p ref={bodyRef} className="mt-6 max-w-xl text-lg leading-relaxed text-gray-100/50 lg:text-[1.08rem]">
              Kenya&apos;s progressive social democratic party, reimagined with more energy, more clarity,
              and a stronger visual language. We are building a movement for workers, families, youth,
              and every community that deserves dignity, fairness, and real opportunity.
            </p> */}

            <div ref={pillarsRef} className="mt-4">
              <PillarRail activeIndex={activePillarIndex} />
            </div>

            <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#membership"
                whileHover={{ scale: 1.04, boxShadow: '0 0 38px rgba(248,113,113,0.45)' }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl bg-red-500 px-8 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(220,38,38,0.3)]"
              >
                <motion.div
                  className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.3, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
                />
                <span className="relative z-10">Join the Movement</span>
                <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="#manifesto"
                whileHover={{ scale: 1.03, borderColor: 'rgba(215,241,151,0.6)', color: '#f7ffe3' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white backdrop-blur-md"
              >
                Read the Manifesto
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>

            {/* <div ref={statsRef} className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
              {STATS.map((stat) => (
                <Counter key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} />
              ))}
            </div> */}
          </div>

          <div className="order-1 lg:order-2">
            <div ref={mediaRef} className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/[0.12] bg-white/[0.05] shadow-[0_40px_140px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                <div className="relative h-[27rem] sm:h-[31rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide.src + '-stage'}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeSlide.src}
                        alt={activeSlide.alt}
                        fill
                        priority
                        className="object-cover object-center"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* <div ref={pillarsRef} className="mt-4">
                    <PillarRail activeIndex={activePillarIndex} />
                  </div> */}

                  <div className="absolute inset-0 bg-gradient-to-b from-[#071017] via-transparent to-[#071017]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#071017] via-transparent to-[#071017]" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-black uppercase tracking-[0.32em] text-white backdrop-blur-md">
                      {activeSlide.eyebrow}
                    </div>
                    <div className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-100 backdrop-blur-md">
                      {String(slideIdx + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlide.title}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.45 }}
                      >
                        <div className="mb-3 inline-flex rounded-full border border-[#d7f197]/30 bg-[#d7f197]/12 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-[#eef9cb]">
                          {activeSlide.metric}
                        </div>
                        <h2 className="max-w-md text-2xl font-black leading-tight text-white sm:text-[1.9rem]">
                          {activeSlide.title}
                        </h2>
                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-[0.95rem]">
                          {activeSlide.body}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="absolute bottom-5 right-5 flex gap-2">
                    <button
                      type="button"
                      aria-label="Previous slide"
                      onClick={() => goToSlide(slideIdx - 1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-white/10"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Next slide"
                      onClick={() => goToSlide(slideIdx + 1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-black/30 text-white backdrop-blur-md transition-colors hover:bg-white/10"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  <motion.div
                    key={activeSlide.src + '-progress'}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4.6, ease: 'linear' }}
                    className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-red-500 via-[#d7f197] to-white"
                  />
                </div>
              </div>
            </div>

            <div ref={thumbsRef} className="mt-4 grid grid-cols-4 gap-3">
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === slideIdx;

                return (
                  <motion.button
                    key={slide.src}
                    type="button"
                    onClick={() => goToSlide(index)}
                    whileHover={{ y: -4 }}
                    className="relative h-24 overflow-hidden rounded-2xl border text-left shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                    animate={{
                      borderColor: isActive ? 'rgba(215,241,151,0.6)' : 'rgba(255,255,255,0.12)',
                      opacity: isActive ? 1 : 0.72,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image src={slide.src} alt={slide.alt} fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071017]/82 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/92">
                      {slide.eyebrow}
                    </div>
                  </motion.button>
                );
              })}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
