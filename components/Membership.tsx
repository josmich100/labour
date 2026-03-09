'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Membership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    county: '',
    occupation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
        x: -40,
        duration: 0.9,
      });

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: 40,
        duration: 0.9,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitMessage('Thank you for joining the Labour Party of Kenya! We will contact you soon.');
    setIsSubmitting(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      county: '',
      occupation: '',
    });

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const kenyanCounties = [
    'Nairobi',
    'Mombasa',
    'Kisumu',
    'Nakuru',
    'Eldoret',
    'Kiambu',
    'Machakos',
    'Meru',
    'Nyeri',
    'Kakamega',
    'Bungoma',
    'Kisii',
    'Kitui',
    'Garissa',
    'Other',
  ];

  const benefits = [
    { icon: '🗳️', text: 'Voting rights in party elections' },
    { icon: '📢', text: 'Access to party events and rallies' },
    { icon: '📋', text: 'Shape party policy and manifesto' },
    { icon: '🤝', text: 'Connect with a nationwide network' },
    { icon: '🎓', text: 'Free leadership training programs' },
    { icon: '📰', text: 'Exclusive member newsletter' },
  ];

  return (
    <section id="membership" ref={sectionRef} className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-secondary-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Be Part of the Change
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Join Our Movement
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Be part of the change. Join thousands of Kenyans working towards a better future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div
            ref={leftRef}
            className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-secondary-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                🇰🇪
              </div>
              <h3 className="text-3xl font-extrabold mb-3">Why Join LPK?</h3>
              <p className="text-white/75 mb-8 text-base leading-relaxed">
                As a member of the Labour Party of Kenya, you become an active voice in shaping the
                direction of our great nation. Your membership drives real change.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-white/90 font-medium">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
                {[
                  { value: '50K+', label: 'Members' },
                  { value: '47', label: 'Counties' },
                  { value: '30+', label: 'Years' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-extrabold text-secondary-300">{stat.value}</p>
                    <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                Membership Registration
              </h3>
              <p className="text-gray-500 text-sm mb-7">
                Fill in your details to become a member today.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    placeholder="Last name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    placeholder="+254 700 000000"
                  />
                </div>
                <div>
                  <label htmlFor="county" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    County *
                  </label>
                  <select
                    id="county"
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                  >
                    <option value="">Select county</option>
                    {kenyanCounties.map((county) => (
                      <option key={county} value={county}>
                        {county}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="occupation" className="block text-gray-700 font-semibold mb-1.5 text-sm">
                    Occupation *
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all text-sm"
                    placeholder="Your occupation"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-base hover:bg-primary-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Join the Movement'}
              </button>

              {submitMessage && (
                <div className="mt-5 p-4 bg-secondary-50 border border-secondary-300 text-secondary-800 rounded-xl text-center text-sm">
                  {submitMessage}
                </div>
              )}

              <p className="mt-5 text-xs text-gray-400 text-center">
                By joining, you agree to receive updates from LPK. We respect your privacy and
                will never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
