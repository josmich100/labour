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
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const manifestoItems = [
    {
      icon: '💼',
      title: 'Workers\' Rights',
      description: 'Protecting and strengthening workers\' rights, ensuring fair wages, safe working conditions, and job security for all Kenyans.',
    },
    {
      icon: '🏥',
      title: 'Universal Healthcare',
      description: 'Implementing accessible, affordable, and quality healthcare for every citizen, regardless of income or location.',
    },
    {
      icon: '📚',
      title: 'Quality Education',
      description: 'Free, quality education from primary to university level, empowering the next generation of Kenyan leaders.',
    },
    {
      icon: '🏠',
      title: 'Affordable Housing',
      description: 'Building affordable, quality housing for working families and ensuring secure tenure for all communities.',
    },
    {
      icon: '🌾',
      title: 'Agricultural Support',
      description: 'Supporting small-scale farmers with resources, fair prices, and modern farming techniques to boost food security.',
    },
    {
      icon: '⚡',
      title: 'Infrastructure Development',
      description: 'Investing in roads, energy, water, and digital infrastructure to drive economic growth across all regions.',
    },
  ];

  return (
    <section id="manifesto" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Manifesto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to building a stronger, more equitable Kenya for all citizens
          </p>
        </div>

        {/* Manifesto Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manifestoItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#membership"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Support Our Vision
          </a>
        </div>
      </div>
    </section>
  );
}
