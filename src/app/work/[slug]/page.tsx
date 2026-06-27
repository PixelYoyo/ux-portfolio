import { notFound } from 'next/navigation';
import Image from 'next/image';
import { caseStudyPages, type CaseStudyPage, type CaseStudyStat } from '@/content/portfolio';
import AnchorNav from './AnchorNav';
import ContextSection from './ContextSection';
import GallerySection from './GallerySection';
import ScrollCardsSection from './ScrollCardsSection';
import DesignSection from './DesignSection';
import ImageGridSection from './ImageGridSection';
import TestimonialsSection from './TestimonialsSection';
import ReflectionSection from './ReflectionSection';
import DetailsSection from './DetailsSection';
import AvailabilitySection from './AvailabilitySection';
import NextSection from './NextSection';

const TICKER_REPEAT = 4; // copies per half — fills any viewport at both font sizes

export async function generateStaticParams() {
  return Object.keys(caseStudyPages).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyPages[slug];
  if (!study) notFound();
  const nextStudies = Object.values(caseStudyPages).filter(s => s.slug !== slug);
  return (
    <>
      <Hero study={study} />
      {study.executiveSummary.length > 0 && <ExecutiveSummary study={study} />}
      <AnchorNav study={study} />
      <SectionHeading label="The context" id="context" />
      {study.contextItems.length > 0 && (
        <ContextSection tagline={study.contextTagline} items={study.contextItems} />
      )}
      {study.gallery.length > 0 && <GallerySection images={study.gallery} />}
      {study.scrollCards.length > 0 && (
        <ScrollCardsSection tagline={study.scrollCardsTagline} items={study.scrollCards} />
      )}
      <SectionHeading label="The design" id="design" />
      {study.designItems.length > 0 && (
        <DesignSection tagline={study.designTagline} items={study.designItems} />
      )}
      {study.imageGrid.length > 0 && (
        <ImageGridSection images={study.imageGrid} />
      )}
      {study.quotes.length > 0 && (
        <TestimonialsSection quotes={study.quotes} />
      )}
      {study.reflectionItems.length > 0 && (
        <>
          <SectionHeading label="The learnings" id="learnings" />
          <ReflectionSection tagline={study.reflectionTagline} items={study.reflectionItems} />
        </>
      )}
      <SectionHeading label="The details" id="details" />
      {study.details.length > 0 && (
        <DetailsSection details={study.details} />
      )}
      {study.linkGroups.length > 0 && (
        <AvailabilitySection linkGroups={study.linkGroups} />
      )}
      <NextSection studies={nextStudies} />
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ study }: { study: CaseStudyPage }) {
  const titleBody = study.title.endsWith('.') ? study.title.slice(0, -1) : study.title;

  const items = Array.from({ length: TICKER_REPEAT }, (_, i) => (
    <span key={i} className="shrink-0">
      {titleBody}<span className="text-text-brand">.</span>
      {'  '}
    </span>
  ));

  return (
    <section className="bg-bg-primary flex flex-col pt-4xl pb-7xl gap-[32px] lg:pt-6xl lg:pb-4xl lg:gap-[40px]">

      {/* Full-bleed scrolling ticker */}
      <style>{`
        @keyframes cs-hero-tick {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cs-hero-ticker {
          animation: cs-hero-tick 20s linear infinite;
          font-variation-settings: 'opsz' 14, 'wdth' 100;
        }
        @media (min-width: 1024px) {
          .cs-hero-ticker { font-variation-settings: 'opsz' 96, 'wdth' 100; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-hero-ticker { animation: none; }
        }
      `}</style>
      <div className="overflow-hidden w-full" aria-label={study.title}>
        <div className="cs-hero-ticker flex whitespace-nowrap font-heading font-bold text-[80px] leading-none uppercase text-text-primary lg:font-extrabold lg:text-impact lg:tracking-impact">
          {items}
          <span aria-hidden="true" className="contents">{items}</span>
        </div>
      </div>

      {/* Credit line */}
      <p className="px-margin max-w-[1440px] mx-auto w-full font-body not-italic text-sm leading-[20px] text-text-primary text-right">
        {study.role} · {study.company} · {study.year}
      </p>

      {/* Stats + image — image leads on mobile, trails on desktop */}
      <div className="px-margin max-w-[1440px] mx-auto w-full flex flex-col gap-[24px] items-end lg:gap-[48px]">

        {/* Image */}
        <div className="order-1 md:order-last w-full aspect-[3/2] lg:aspect-[1400/788] relative">
          {study.heroImageSrc ? (
            <Image
              src={study.heroImageSrc}
              alt={study.heroImageAlt}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#d9d9d9]" />
          )}
        </div>

        {/* Stats */}
        <div className="order-2 md:order-first flex flex-col gap-[40px] w-full md:flex-row md:gap-[20px] lg:gap-[64px]">
          {study.stats.map((stat) => (
            <Stat key={stat.number} stat={stat} />
          ))}
        </div>

      </div>

    </section>
  );
}

// ─── Stat ─────────────────────────────────────────────────────────────────────

function Stat({ stat }: { stat: CaseStudyStat }) {
  return (
    <div className="flex flex-col gap-md flex-1">
      <div className="border-b border-border-primary pb-xl w-full">
        <p
          className="font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary lg:font-bold lg:text-heading-xl lg:tracking-impact lg:leading-normal"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {stat.number}
        </p>
      </div>
      <p className="font-body not-italic text-sm leading-[20px] text-text-primary lg:text-base">
        {stat.description}
      </p>
    </div>
  );
}

// ─── Section Heading ──────────────────────────────────────────────────────────

function SectionHeading({ label, id }: { label: string; id?: string }) {
  const body = label.endsWith('.') ? label.slice(0, -1) : label;
  return (
    <section id={id} className="bg-bg-primary pt-4xl pb-3xl lg:pt-7xl lg:pb-4xl">
      <div className="px-margin max-w-[1440px] mx-auto">
      <p
        className="font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary lg:font-bold lg:text-heading-xl lg:tracking-impact lg:leading-normal"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        {body}<span className="text-text-brand">.</span>
      </p>
      </div>
    </section>
  );
}

// ─── Executive Summary ────────────────────────────────────────────────────────

function ExecutiveSummary({ study }: { study: CaseStudyPage }) {
  return (
    <section id="summary" className="bg-bg-primary pt-4xl pb-7xl">
      <div className="px-margin max-w-[1440px] mx-auto flex flex-col gap-6xl lg:gap-7xl">

      {/* Heading */}
      <p
        className="font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        Executive summary<span className="text-text-brand">.</span>
      </p>

      {/* Body — constrained reading width, border rule below */}
      <div className="border-b border-border-primary pb-7xl max-w-[720px] flex flex-col gap-[12px]">
        {study.executiveSummary.map((paragraph, i) => (
          <p
            key={i}
            className="font-body not-italic text-sm leading-[20px] lg:text-base text-text-primary"
          >
            {paragraph}
          </p>
        ))}
      </div>

      </div>
    </section>
  );
}
