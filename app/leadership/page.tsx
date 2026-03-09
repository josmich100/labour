import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LEADERS } from "@/lib/data/leadership";
import { Twitter, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the Labour Party of Kenya national leadership team — dedicated Kenyans fighting for workers' rights, social justice, and a better Kenya.",
};

export default function LeadershipPage() {
  const secretary = LEADERS[0];
  const rest = LEADERS.slice(1);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-64 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1920"
          alt="Leadership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-3">Our Team</p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Party Leadership
          </h1>
          <p className="text-gray-300 text-lg mt-2">
            Dedicated Kenyans building a better tomorrow.
          </p>
        </div>
      </section>

      {/* Secretary General */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag">Secretary General</span>
            <h2
              className="section-title mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Party Leadership
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={secretary.image}
                alt={secretary.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <p className="text-white font-bold text-lg">{secretary.name}</p>
                  <p className="text-red-300 text-sm">{secretary.title}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-5">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-red-700 font-semibold text-sm">
                  {secretary.title}
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {secretary.name}
              </h2>
              <p className="text-gray-500 text-sm mb-1">
                {secretary.county} County · {secretary.committee}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">{secretary.bio}</p>
              <div className="flex gap-3">
                {secretary.twitter && (
                  <a
                    href={`https://twitter.com/${secretary.twitter}`}
                    className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 hover:bg-sky-100 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {secretary.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${secretary.linkedin}`}
                    className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 hover:bg-blue-100 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:${secretary.name.toLowerCase().replace(/ /g, ".")}@labourparty.org`}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Executive Committee */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">National Executive</span>
            <h2
              className="section-title mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Executive Committee
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                    {leader.title}
                  </div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {leader.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">
                    {leader.county} County · {leader.committee}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-3">{leader.bio}</p>
                  <div className="flex gap-2 mt-4">
                    {leader.twitter && (
                      <a
                        href={`https://twitter.com/${leader.twitter}`}
                        className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 hover:bg-sky-100 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {leader.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${leader.linkedin}`}
                        className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 hover:bg-blue-100 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Join the Movement?
          </h2>
          <p className="text-red-200 mb-7">
            Be part of the team building a better Kenya. Join the Kenya Labour
            Party today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="px-7 py-3.5 bg-white text-red-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              Become a Member
            </Link>
            <Link
              href="/volunteer"
              className="px-7 py-3.5 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
