import type { Metadata } from "next";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import CampaignGallery from "@/components/home/CampaignGallery";
import ManifestoPreview from "@/components/home/ManifestoPreview";
import LeadershipCarousel from "@/components/home/LeadershipCarousel";
import WhyJoinSection from "@/components/home/WhyJoinSection";
import NewsSection from "@/components/home/NewsSection";
import EventsSection from "@/components/home/EventsSection";
import MembershipForm from "@/components/home/MembershipForm";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CountyMapTeaser from "@/components/home/CountyMapTeaser";
import NewsletterSection from "@/components/home/NewsletterSection";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Labour Party of Kenya — Building a Better Kenya",
  description:
    "The Labour Party of Kenya champions workers' rights, social justice, and economic empowerment for every Kenyan. Join 50,000+ members building a better Kenya.",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <StatsSection />
      <AboutSection />
      <CampaignGallery />
      <ManifestoPreview />
      <LeadershipCarousel />
      <WhyJoinSection />
      <NewsSection />
      <EventsSection />
      <MembershipForm />
      <TestimonialsSection />
      <CountyMapTeaser />
      <NewsletterSection />
    </div>
  );
}
