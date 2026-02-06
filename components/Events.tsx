'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Events() {
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
          y: 30,
          duration: 0.6,
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const events = [
    {
      date: 'Feb 15',
      month: 'FEB',
      year: '2026',
      title: 'National Workers Convention',
      location: 'Nairobi Convention Center',
      time: '9:00 AM - 5:00 PM',
      description: 'Join us for our annual convention bringing together workers from across Kenya.',
    },
    {
      date: '20',
      month: 'FEB',
      year: '2026',
      title: 'Youth Leadership Summit',
      location: 'Mombasa',
      time: '10:00 AM - 4:00 PM',
      description: 'Empowering the next generation of Kenyan leaders with skills and vision.',
    },
    {
      date: '28',
      month: 'FEB',
      year: '2026',
      title: 'Community Town Hall - Kisumu',
      location: 'Kisumu Community Center',
      time: '2:00 PM - 6:00 PM',
      description: 'Open dialogue with community members about local issues and national policies.',
    },
    {
      date: '05',
      month: 'MAR',
      year: '2026',
      title: 'Women in Leadership Forum',
      location: 'Nakuru',
      time: '11:00 AM - 3:00 PM',
      description: 'Celebrating and supporting women\'s leadership in politics and society.',
    },
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at upcoming events and be part of the movement for change
          </p>
        </div>

        {/* Events List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              {/* Date Box */}
              <div className="flex-shrink-0 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-lg p-6 text-center min-w-[120px]">
                <div className="text-sm font-semibold mb-1">{event.month}</div>
                <div className="text-4xl font-bold">{event.date}</div>
                <div className="text-sm mt-1">{event.year}</div>
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>

                <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>

                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{event.description}</p>

                <button className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events */}
        <div className="mt-12 text-center">
          <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}
