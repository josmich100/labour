'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const manifestoItems = [
    {
      icon: '💼',
      number: '01',
      title: "Workers' Rights",
      description:
        'Protecting and strengthening workers\' rights, ensuring fair wages, safe working conditions, and job security for all Kenyans.',
    },
    {
      icon: '🏥',
      number: '02',
      title: 'Universal Healthcare',
      description:
        'Implementing accessible, affordable, and quality healthcare for every citizen, regardless of income or location.',
    },
    {
      icon: '📚',
      number: '03',
      title: 'Quality Education',
      description:
        'Free, quality education from primary to university level, empowering the next generation of Kenyan leaders.',
    },
    {
      icon: '🏠',
      number: '04',
      title: 'Affordable Housing',
      description:
        'Building affordable, quality housing for working families and ensuring secure tenure for all communities.',
    },
    {
      icon: '🌾',
      number: '05',
      title: 'Agricultural Support',
      description:
        'Supporting small-scale farmers with resources, fair prices, and modern farming techniques to boost food security.',
    },
    {
      icon: '⚡',
      number: '06',
      title: 'Infrastructure',
      description:
        'Investing in roads, energy, water, and digital infrastructure to drive economic growth across all regions.',
    },
  ];

  return (
    <section id="manifesto" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-5">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-widest mb-2">
            What We Stand For
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Policy Manifesto
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our commitment to building a stronger, more equitable Kenya for all citizens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {manifestoItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative group"
            >
              <span className="absolute top-5 right-6 text-6xl font-extrabold text-secondary-100 group-hover:text-primary-100 transition-colors select-none leading-none">
                {item.number}
              </span>

              <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center text-3xl mb-5 border border-secondary-100 group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>

              <a
                href="#membership"
                className="inline-flex items-center mt-5 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group-hover:gap-2 gap-1"
              >
                Learn More
                <svg className="w-4 h-4 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#membership"
            className="inline-block bg-secondary-600 text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-secondary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View Full Manifesto
          </a>
        </div>
      </div>
    </section>
  );
}
