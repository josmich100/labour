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
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const newsItems = [
    {
      date: 'Feb 5, 2026',
      category: 'Policy',
      title: 'New Workers Protection Bill Introduced',
      excerpt: 'KLP presents comprehensive legislation to enhance workers\' rights and improve labour conditions across all sectors.',
      image: '📰',
    },
    {
      date: 'Feb 3, 2026',
      category: 'Events',
      title: 'Nationwide Town Hall Meetings Announced',
      excerpt: 'Join us in community conversations across Kenya as we listen to citizens and share our vision for the future.',
      image: '🗣️',
    },
    {
      date: 'Jan 30, 2026',
      category: 'Achievement',
      title: '50,000 New Members Join the Movement',
      excerpt: 'KLP celebrates reaching a milestone as thousands of Kenyans join our growing movement for change.',
      image: '🎉',
    },
  ];

  return (
    <section id="news" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments from the Kenya Labour Party
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>

                <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center group-hover:gap-2 transition-all">
                  Read More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:ml-2 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
