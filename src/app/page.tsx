import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Ticker from '@/components/Ticker';
import FeaturedWork from '@/components/FeaturedWork';
import { ticker } from '@/content/portfolio';

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Ticker text={ticker.featuredWork} />
      <FeaturedWork />
    </>
  );
}
