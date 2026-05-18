'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import { workPage } from '@/content/portfolio';

type View = 'grid' | 'list';
type CaseStudy = (typeof workPage.caseStudies)[number];

// ── View toggle indicator ─────────────────────────────────────────────────────

function ViewToggle({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-md items-center cursor-pointer bg-transparent border-none p-0"
      aria-pressed={active}
    >
      <span
        className={`size-[24px] border-[0.5px] border-text-primary shrink-0 transition-colors duration-200 ${
          active ? 'bg-bg-brand' : 'bg-transparent'
        }`}
      />
      <span className="font-body not-italic text-sm leading-[20px] text-text-primary">
        {label}
      </span>
    </button>
  );
}

// ── Grid card ────────────────────────────────────────────────────────────────

function GridCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={study.href} className="flex flex-col gap-3xl group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-square w-full bg-[#d9d9d9] overflow-hidden">
        {study.thumbnailSrc && (
          <Image
            src={study.thumbnailSrc}
            alt={study.thumbnailAlt}
            fill
            className="object-cover"
          />
        )}

        {/* Number — top left */}
        <p
          className="absolute top-[10px] left-[10px] font-heading font-bold text-heading-xl leading-none uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {study.number}<span className="text-text-brand">.</span>
        </p>

        {/* CTA button — bottom right, no href so it renders as div */}
        <div className="absolute bottom-[16px] right-[16px]">
          <ButtonPrimary label="Read the story" />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-xl text-text-primary">
        <div className="flex flex-col gap-xxs">
          <p
            className="font-heading font-medium text-heading-m leading-[28px] uppercase"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {study.title}
          </p>
          <p className="font-body not-italic text-xs opacity-60">{study.tags}</p>
        </div>
        <p className="font-body not-italic text-sm leading-[20px]">{study.description}</p>
      </div>
    </Link>
  );
}

// ── List item ────────────────────────────────────────────────────────────────

function ListItem({ study }: { study: CaseStudy }) {
  return (
    <div className="border-b border-border-primary pt-lg pb-4xl flex flex-col lg:flex-row gap-5xl items-start">
      {/* Left col — title + number */}
      <div className="flex flex-col justify-between self-stretch shrink-0 w-full lg:w-[384px] gap-xl lg:gap-0">
        <p
          className="font-heading font-medium text-heading-s leading-[28px] uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {study.title}
        </p>
        <p className="font-body not-italic text-xs uppercase text-text-primary">
          n<span className="text-[0.65em] relative -top-[0.2em]">o</span> {study.number}
        </p>
      </div>

      {/* Right col — description + read more */}
      <div className="flex-1 flex flex-col gap-xl min-w-0">
        <p className="font-body not-italic text-sm leading-[20px] text-text-primary">
          {study.description}
        </p>
        <Link
          href={study.href}
          className="relative z-10 isolate font-body not-italic text-base text-text-primary self-start cursor-pointer group"
        >
          Read the story
          <span
            aria-hidden="true"
            className="absolute left-0 -z-10 h-[6px] w-full bg-bg-brand origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
            style={{ top: 'calc(50% + 3px)' }}
          />
        </Link>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [view, setView] = useState<View>('grid');
  const studies = workPage.caseStudies;

  return (
    <section className="bg-bg-primary px-margin pt-4xl pb-[80px] flex flex-col gap-4xl">

      {/* View toggle */}
      <div className="flex gap-3xl items-center">
        <ViewToggle label="Grid" active={view === 'grid'} onClick={() => setView('grid')} />
        <ViewToggle label="List" active={view === 'list'} onClick={() => setView('list')} />
      </div>

      {/* Grid view */}
      {view === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4xl gap-y-7xl">
          {studies.map((study) => (
            <GridCard key={study.number} study={study} />
          ))}
        </div>
      )}

      {/* List view */}
      {view === 'list' && (
        <div className="flex flex-col">
          {studies.map((study) => (
            <ListItem key={study.number} study={study} />
          ))}
        </div>
      )}

      {/* Load more */}
      <div className="flex justify-center pt-3xl">
        <ButtonSecondary label="Load more" />
      </div>

    </section>
  );
}
