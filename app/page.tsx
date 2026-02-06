import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Leadership from '@/components/Leadership';
import News from '@/components/News';
import Events from '@/components/Events';
import Membership from '@/components/Membership';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Manifesto />
      <Leadership />
      <News />
      <Events />
      <Membership />
      <Footer />
    </main>
  );
}
