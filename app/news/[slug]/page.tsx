import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS_ARTICLES } from "@/lib/data/news";
import { Calendar, User, Tag, ArrowLeft, Twitter, Facebook, Linkedin } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = NEWS_ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  ).slice(0, 3);

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-80 md:h-[420px]">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-4">
            {article.category}
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-200">
              <Image src={article.authorImage} alt={article.author} fill className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{article.author}</p>
              <p className="text-xs text-gray-400">LPK Communications</p>
            </div>
          </div>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(article.date).toLocaleDateString("en-KE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-red-600"
          style={{ fontFamily: "var(--font-inter)" }}
          dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, "<br />") }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              <Tag className="w-3.5 h-3.5" /> {tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
          <p className="font-semibold text-gray-700 mb-3 text-sm">Share this article</p>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-xl text-sm font-semibold hover:bg-sky-600 transition-colors"
            >
              <Twitter className="w-4 h-4" /> Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://labourparty.org/news/${article.slug}`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://labourparty.org/news/${article.slug}`)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-xl text-sm font-semibold hover:bg-blue-900 transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Back */}
        <div className="mt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/news/${a.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      {a.category}
                    </span>
                    <h3
                      className="font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-red-600 transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
