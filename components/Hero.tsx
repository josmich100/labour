'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
      })
        .from(
          subheadingRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-700 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building a Better Kenya
          <br />
          <span className="text-accent-300">For All Workers</span>
        </h1>

        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
        >
          The Kenya Labour Party champions workers' rights, social justice, and economic
          empowerment. Together, we create a prosperous future for every Kenyan.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#membership"
            className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            Join Our Movement
          </a>
          <a
            href="#manifesto"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all"
          >
            Read Our Manifesto
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
    </section>
  );
}
