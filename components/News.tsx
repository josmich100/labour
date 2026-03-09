'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function News() {
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
          delay: index * 0.12,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const newsItems = [
    {
      date: 'Feb 5, 2026',
      category: 'Policy',
      categoryColor: 'bg-primary-100 text-primary-700',
      headerBg: 'from-primary-600 to-primary-800',
      title: 'New Workers Protection Bill Introduced',
      excerpt:
        'LPK presents comprehensive legislation to enhance workers\' rights and improve labour conditions across all sectors of Kenya.',
      icon: '📰',
    },
    {
      date: 'Feb 3, 2026',
      category: 'Events',
      categoryColor: 'bg-secondary-100 text-secondary-700',
      headerBg: 'from-secondary-500 to-secondary-700',
      title: 'Nationwide Town Hall Meetings Announced',
      excerpt:
        'Join us in community conversations across Kenya as we listen to citizens and share our vision for the future.',
      icon: '🗣️',
    },
    {
      date: 'Jan 30, 2026',
      category: 'Achievement',
      categoryColor: 'bg-primary-100 text-primary-700',
      headerBg: 'from-primary-500 to-secondary-600',
      title: '50,000 New Members Join the Movement',
      excerpt:
        'LPK celebrates reaching a major milestone as thousands of Kenyans join our growing movement for change and justice.',
      icon: '🎉',
    },
  ];

  return (
    <section id="news" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Stay Informed
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Latest News</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stay updated with the latest developments from the Labour Party of Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <div
                className={`h-44 bg-gradient-to-br ${item.headerBg} flex items-center justify-center text-7xl`}
              >
                {item.icon}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  <span className={`${item.categoryColor} px-3 py-1 rounded-full text-xs font-bold`}>
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-5 text-sm">{item.excerpt}</p>

                <button className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group-hover:gap-2">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary-600 text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
