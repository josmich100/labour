'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'News', href: '#news' },
    { name: 'Events', href: '#events' },
    { name: 'Join Us', href: '#membership' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-primary-700 text-white text-sm hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@labourparty.ke
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nairobi, Kenya
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/70">Follow Us:</span>
            {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((s) => (
              <a key={s} href="#" className="text-white/80 hover:text-white transition-colors text-xs font-medium">{s[0]}</a>
            ))}
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#home" className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">LPK</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-gray-900">Labour Party of Kenya</span>
                <span className="text-xs text-secondary-600 font-medium">Building a Better Kenya</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-7 items-center">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-medium text-gray-700 hover:text-primary-600 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center bg-secondary-600 text-white rounded-full px-5 py-2 shadow-md hover:bg-secondary-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-xs text-white/80">Call Anytime</span>
                  <span className="font-bold text-sm">+254 700 000 000</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-primary-600 font-medium py-2 border-b border-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              <li className="pt-2">
                <a
                  href="#membership"
                  className="block w-full text-center bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Now
                </a>
              </li>
            </ul>
          </div>
        )}
        </div>
      </nav>
    </header>
  );
}
