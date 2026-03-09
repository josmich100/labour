"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { NEWS_ARTICLES } from "@/lib/data/news";

const CATEGORY_COLORS: Record<string, string> = {
  Policy: "bg-blue-100 text-blue-700",
  Events: "bg-purple-100 text-purple-700",
  Achievement: "bg-green-100 text-green-700",
  "Press Release": "bg-amber-100 text-amber-700",
  Statement: "bg-red-100 text-red-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsSection() {
  const articles = NEWS_ARTICLES.filter(a => a.featured).slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="section-tag">Stay Informed</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair)" }}>
              Latest from <span className="text-red-600">LPK</span>
            </h2>
          </div>
          <Link href="/news" className="btn-outline shrink-0">
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 card-hover"
            >
              {/* Image */}
              <div className="img-zoom relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-700"}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(article.date)}
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-3 line-clamp-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">
                  {article.excerpt}
                </p>
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:gap-3 transition-all duration-200"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
