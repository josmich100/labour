import Image from "next/image";

const ROW_1 = Array.from({ length: 15 }, (_, i) => ({
  src: `/webimages/img-${i + 1}.jpeg`,
  alt: `Labour campaign graphic ${i + 1}`,
}));

const ROW_2 = Array.from({ length: 15 }, (_, i) => ({
  src: `/webimages/img-${i + 16}.jpeg`,
  alt: `Labour campaign graphic ${i + 16}`,
}));

const edgeMask: React.CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
};

export default function CampaignGallery() {
  return (
    <section className="py-20 bg-gray-950 overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-14">
        <span className="inline-block text-xs font-bold uppercase text-red-500 tracking-[0.15em] mb-3">
          Labour In Action
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
          Fighting for Every Kenyan
        </h2>
        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          From tea farms in Kericho to matatu stages in Nairobi — Labour&apos;s
          message reaches every corner of Kenya.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-4" style={edgeMask}>
        <div className="marquee-gallery">
          {[...ROW_1, ...ROW_1].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 h-72 relative rounded-2xl overflow-hidden ring-1 ring-white/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden" style={edgeMask}>
        <div className="marquee-gallery-reverse">
          {[...ROW_2, ...ROW_2].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 h-72 relative rounded-2xl overflow-hidden ring-1 ring-white/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
