'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -50,
        duration: 0.9,
      });

      gsap.from(rightRef.current, {
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: 50,
        duration: 0.9,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leaders = [
    {
      name: 'Dr. Amani Mwangi',
      position: 'Party Leader',
      bio: 'Economist and advocate for workers\' rights with over 20 years of experience in labour movements.',
      initials: 'AM',
      color: 'from-primary-600 to-primary-800',
    },
    {
      name: 'Hon. Grace Wanjiku',
      position: 'Deputy Party Leader',
      bio: 'Former trade union leader and champion of women\'s economic empowerment.',
      initials: 'GW',
      color: 'from-secondary-500 to-secondary-700',
    },
    {
      name: 'Prof. James Omondi',
      position: 'Secretary General',
      bio: 'Political scientist and grassroots organizer committed to social justice.',
      initials: 'JO',
      color: 'from-primary-500 to-secondary-600',
    },
    {
      name: 'Ms. Fatuma Hassan',
      position: 'National Treasurer',
      bio: 'Financial expert with a track record of transparent and accountable management.',
      initials: 'FH',
      color: 'from-secondary-600 to-primary-700',
    },
  ];

  const pillars = [
    {
      icon: '⚖️',
      title: 'Party Values',
      desc: 'Integrity, transparency, and service to every Kenyan worker and family.',
    },
    {
      icon: '🎯',
      title: 'Party Mission',
      desc: 'Championing policies that uplift the working class and build a just Kenya.',
    },
  ];

  return (
    <section id="leadership" ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={leftRef} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${leader.color} rounded-2xl flex flex-col items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow ${index === 1 ? 'mt-8' : ''} ${index === 3 ? '-mt-8' : ''}`}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mb-4 shadow-inner">
                    <span className="text-3xl font-extrabold text-white">{leader.initials}</span>
                  </div>
                  <p className="text-white font-bold text-center text-sm">{leader.name}</p>
                  <p className="text-white/75 text-xs text-center mt-1">{leader.position}</p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-4 bg-primary-700 text-white rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3">
              <span className="text-4xl">🏆</span>
              <div>
                <p className="text-2xl font-extrabold leading-none">25+</p>
                <p className="text-xs text-white/70">Years of Service</p>
              </div>
            </div>
          </div>

          <div ref={rightRef}>
            <p className="text-secondary-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our People
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
              We Build Strong
              <br />
              Political Leadership
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              Our dedicated leaders bring decades of experience in labour advocacy, public policy,
              and grassroots organizing. Together they drive LPK&apos;s vision for a just Kenya.
            </p>

            <div className="space-y-5 mb-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <div className="w-12 h-12 bg-secondary-50 border border-secondary-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{pillar.title}</h4>
                    <p className="text-gray-500 text-sm">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-extrabold">AM</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">{leaders[0].name}</p>
                <p className="text-sm text-gray-500">{leaders[0].position}</p>
              </div>
              <a
                href="#manifesto"
                className="bg-primary-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-primary-700 transition-colors shadow-md"
              >
                More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
