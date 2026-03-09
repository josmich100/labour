'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const events = [
  {
    date: '15',
    month: 'FEB',
    year: '2026',
    day: 'Sunday',
    title: 'National Workers Convention',
    location: 'Nairobi Convention Center',
    time: '9:00 AM – 5:00 PM',
    description:
      'Join our annual convention bringing together workers from across Kenya to shape national policy and drive the 2024–2029 Strategic Plan forward.',
    tag: 'National',
    gold: false,
  },
  {
    date: '20',
    month: 'FEB',
    year: '2026',
    day: 'Friday',
    title: 'Youth Leadership Summit',
    location: 'Mombasa Beach Hotel',
    time: '10:00 AM – 4:00 PM',
    description:
      'Empowering the next generation of Kenyan leaders with vision, skills, and political courage under the Haki na Usawa movement.',
    tag: 'Youth',
    gold: true,
  },
  {
    date: '28',
    month: 'FEB',
    year: '2026',
    day: 'Saturday',
    title: 'Community Town Hall – Kisumu',
    location: 'Kisumu Community Centre',
    time: '2:00 PM – 6:00 PM',
    description:
      'Open dialogue with community members about local issues, county governance, and LPK policies at ground level.',
    tag: 'Community',
    gold: false,
  },
  {
    date: '05',
    month: 'MAR',
    year: '2026',
    day: 'Thursday',
    title: 'Women in Leadership Forum',
    location: 'Nakuru Civic Centre',
    time: '11:00 AM – 3:00 PM',
    description:
      "Celebrating gender equity in politics — supporting women's leadership in line with LPK's core value of gender equity and meritocracy.",
    tag: 'Women',
    gold: true,
  },
];

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power4.out',
      });

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.75,
          delay: i * 0.08,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="events" ref={sectionRef} className="py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8fbb44]/6 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[3px] bg-red-600 rounded-full" />
            <span className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase">Get Involved</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
              Upcoming<br />
              <span className="text-red-600">Events</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:mb-2">
              Every event is an opportunity to build a stronger Kenya. Be part of the movement.
            </p>
          </div>
          <div className="mt-10 h-px bg-gradient-to-r from-red-600/50 via-white/10 to-transparent" />
        </div>

        {/* Events Stack */}
        <div className="space-y-3">
          {events.map((event, index) => (
            <div
              key={index}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
                ${hoveredIndex === index
                  ? 'border-red-600/50 bg-white/[0.05] shadow-2xl shadow-red-600/10'
                  : 'border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
            >
              {/* Animated left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-500
                  ${hoveredIndex === index
                    ? event.gold ? 'bg-[#8fbb44]' : 'bg-red-600'
                    : 'bg-white/[0.08]'
                  }`}
              />

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 pl-5 pr-6 py-6 md:py-7">

                {/* Giant date number */}
                <div className="flex-shrink-0 text-center w-20 md:w-24">
                  <div className={`text-6xl md:text-7xl font-black leading-none tabular-nums transition-colors duration-400
                    ${hoveredIndex === index
                      ? event.gold ? 'text-[#8fbb44]' : 'text-red-500'
                      : 'text-white/15'
                    }`}>
                    {event.date}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-gray-600 mt-1 uppercase">
                    {event.month} {event.year}
                  </div>
                </div>

                {/* Vertical rule */}
                <div className={`hidden md:block w-px h-14 flex-shrink-0 transition-colors duration-400
                  ${hoveredIndex === index ? 'bg-white/20' : 'bg-white/[0.07]'}`} />

                {/* Body */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span className={`inline-block text-[11px] font-black px-3 py-1 rounded-full tracking-wider uppercase
                      ${event.gold ? 'bg-[#8fbb44]/20 text-[#8fbb44] border border-[#8fbb44]/30' : 'bg-red-600/20 text-red-400 border border-red-600/30'}`}>
                      {event.tag}
                    </span>
                    <span className="text-xs text-gray-600">{event.day}</span>
                  </div>

                  <h3 className={`text-lg md:text-2xl font-black mb-2 transition-colors duration-300
                    ${hoveredIndex === index ? 'text-white' : 'text-white/80'}`}>
                    {event.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-5 text-xs text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <button
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300
                      ${hoveredIndex === index
                        ? event.gold
                          ? 'bg-[#8fbb44] text-black shadow-lg shadow-[#8fbb44]/20'
                          : 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                        : 'bg-white/[0.06] text-gray-400 border border-white/10 hover:border-white/20'
                      }`}
                  >
                    Register
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-white/[0.07]">
          <p className="text-gray-600 text-sm">More events announced regularly — follow LPK for updates.</p>
          <button className="flex items-center gap-2.5 border border-[#8fbb44]/50 text-[#8fbb44] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#8fbb44] hover:text-black hover:border-transparent transition-all duration-300 group">
            View All Events
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
