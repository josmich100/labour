'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: index * 0.15,
        });
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
    },
    {
      name: 'Hon. Grace Wanjiku',
      position: 'Deputy Party Leader',
      bio: 'Former trade union leader and champion of women\'s economic empowerment.',
      initials: 'GW',
    },
    {
      name: 'Prof. James Omondi',
      position: 'Secretary General',
      bio: 'Political scientist and grassroots organizer committed to social justice.',
      initials: 'JO',
    },
    {
      name: 'Ms. Fatuma Hassan',
      position: 'National Treasurer',
      bio: 'Financial expert with a track record of transparent and accountable management.',
      initials: 'FH',
    },
  ];

  return (
    <section id="leadership" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders driving positive change for all Kenyans
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="text-center group"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-105 transform duration-300">
                  <span className="text-5xl font-bold text-white">{leader.initials}</span>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
              <p className="text-primary-600 font-semibold mb-3">{leader.position}</p>
              <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals to join our movement and make a
            difference in Kenya&apos;s future.
          </p>
          <a
            href="#membership"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
