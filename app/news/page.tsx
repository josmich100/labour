"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_ARTICLES } from "@/lib/data/news";
import { Search, Calendar, Tag } from "lucide-react";

const CATEGORIES = ["All", "Policy", "Events", "Achievement", "Press Release", "Statement"];

export default function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(6);

  const filtered = NEWS_ARTICLES.filter((a) => {
    const matchQ = a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchC = category === "All" || a.category === category;
    return matchQ && matchC;
  });

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-60 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920"
          alt="News"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
            Latest Updates
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            News & Press
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  category === cat
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-lg font-medium">No articles found.</p>
            <button onClick={() => { setQuery(""); setCategory("All"); }} className="mt-4 text-red-600 underline text-sm">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(0, visible).map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.date).toLocaleDateString("en-KE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-red-600 transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full"
                      >
                        <Tag className="w-2.5 h-2.5" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + 6)}
              className="px-8 py-3 border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
