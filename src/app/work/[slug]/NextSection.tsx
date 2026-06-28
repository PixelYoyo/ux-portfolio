'use client';

import { useState } from 'react';
import Image from 'next/image';
import ButtonPrimary from '@/components/ButtonPrimary';
type NextStudy = {
  slug:         string;
  title:        string;
  tags:         string;
  description:  string;
  heroImageUrl: string | null;
  heroImageAlt: string;
};

function DesktopCard({ study, index }: { study: NextStudy; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <div className="flex flex-col gap-4xl items-start pb-6xl w-full md:flex-1 lg:w-[452px] lg:shrink-0">
      <p
        className="font-heading font-bold text-heading-xl tracking-impact leading-none uppercase text-text-primary"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        {num}<span className="text-text-brand">.</span>
      </p>
      <div className="relative w-full aspect-[3/2]">
        {study.heroImageUrl
          ? <Image src={study.heroImageUrl} alt={study.heroImageAlt} fill quality={90} className="object-cover" />
          : <div className="absolute inset-0 bg-[#d9d9d9]" />}
      </div>
      <div className="flex flex-col gap-4xl w-full">
        <div className="flex flex-col gap-xl">
          <div className="flex flex-col gap-xxs">
            <p
              className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary"
              style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              {study.title}
            </p>
            <p className="font-body not-italic text-xs text-text-primary opacity-60">
              {study.tags}
            </p>
          </div>
          <p className="font-body not-italic text-base leading-normal text-text-primary">
            {study.description}
          </p>
        </div>
        <ButtonPrimary label="Read the story" href={`/work/${study.slug}`} />
      </div>
    </div>
  );
}

function MobileCard({ study, index }: { study: NextStudy; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <div className="flex flex-col gap-[24px] items-start pb-6xl w-full">
      <p
        className="font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        {num}<span className="text-text-brand">.</span>
      </p>
      <div className="relative w-[240px] h-[160px] shrink-0">
        {study.heroImageUrl
          ? <Image src={study.heroImageUrl} alt={study.heroImageAlt} fill quality={90} className="object-contain" />
          : <div className="absolute inset-0 bg-[#d9d9d9]" />}
      </div>
      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex flex-col gap-lg">
          <div className="flex flex-col gap-xxs">
            <p
              className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary"
              style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              {study.title}
            </p>
            <p className="font-body not-italic text-xs text-text-primary opacity-60">
              {study.tags}
            </p>
          </div>
          <p className="font-body not-italic text-sm leading-[20px] text-text-primary">
            {study.description}
          </p>
        </div>
        <ButtonPrimary label="Read the story" href={`/work/${study.slug}`} className="w-full" />
      </div>
    </div>
  );
}

export default function NextSection({ studies }: { studies: NextStudy[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (studies.length === 0) return null;

  const desktopStudies = studies.slice(0, 2);
  const activeStudy = studies[activeIndex] ?? studies[0];

  return (
    <section className="bg-bg-primary pt-4xl pb-7xl md:pb-4xl">
      <div className="px-margin max-w-[1440px] mx-auto flex flex-col gap-[40px]">

      {/* ── Desktop ─────────────────────────────────────────────────────── */}
      <div className="hidden md:flex flex-col gap-[40px]">
        <div className="flex justify-end">
          <p
            className="font-heading font-bold text-heading-xl tracking-impact leading-none uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            Next<span className="text-text-brand">.</span>
          </p>
        </div>
        <div className="flex gap-[20px] items-start justify-end">
          {desktopStudies.map((study, i) => (
            <DesktopCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>

      {/* ── Mobile ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-[40px] md:hidden">
        <p
          className="font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          Next<span className="text-text-brand">.</span>
        </p>
        <MobileCard study={activeStudy} index={activeIndex} />
        {studies.length > 1 && (
          <div className="flex gap-lg items-center">
            {studies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Case study ${i + 1}`}
                className={`size-[16px] border-[0.5px] border-text-primary cursor-pointer transition-colors duration-200 ${
                  i === activeIndex ? 'bg-bg-brand' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      </div>
    </section>
  );
}
