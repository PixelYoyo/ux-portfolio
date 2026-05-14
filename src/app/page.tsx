import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Ticker from '@/components/Ticker';
import FeaturedWork from '@/components/FeaturedWork';

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Ticker text="Featured work" />
      <FeaturedWork />
    </>
  );
}
