'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import ButtonSecondary from '@/components/ButtonSecondary';

type View = 'grid' | 'list';

export type WorkCaseStudy = {
  slug:         string;
  number:       string;
  title:        string;
  tags:         string;
  description:  string;
  thumbnailSrc: string | null;
  thumbnailAlt: string;
};

const HOVER_BG_URL = 'https://res.cloudinary.com/drd6p33en/image/upload/v1779141549/Hover_state_background_1_r6em3n.png';

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

// Circle centre positions as % of card width/height (derived from Figma: 210×210 circle in 400×400 card)
const CIRCLE_POSITIONS = [
  { left: '19%',   top: '92.5%' },
  { left: '19%',   top: '52.5%' },
  { left: '94%',   top: '50%'   },
  { left: '19%',   top: '12.5%' },
  { left: '79%',   top: '92.5%' },
  { left: '82%',   top: '5%'    },
];

function GridCard({ study, index }: { study: WorkCaseStudy; index: number }) {
  const { left, top } = CIRCLE_POSITIONS[index % 6];

  return (
    <div className={`relative group hover:z-10${index >= 4 ? ' hidden md:block' : ''}`}>
      {/* Background texture — revealed when card translates on hover */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url('${HOVER_BG_URL}')` }}
        aria-hidden
      />

      <Link
        href={`/work/${study.slug}`}
        className={[
          'relative block overflow-hidden aspect-square',
          'bg-bg-primary',
          'border border-text-primary',
          'md:border-t-0 md:border-l-0',
          'md:group-hover:border-t md:group-hover:border-l',
          'mb-4 mr-4 md:mb-0 md:mr-0',
          'md:group-hover:-translate-x-4 md:group-hover:-translate-y-4',
          'transition-transform duration-300 ease-out',
        ].join(' ')}
      >
        {/* Circle — 52.5% of card width, centre positioned per Figma, clipped by overflow-hidden */}
        <div
          className="absolute w-[52.5%] aspect-square -translate-x-1/2 -translate-y-1/2 text-text-brand pointer-events-none"
          style={{ left, top }}
          aria-hidden
        >
          <svg viewBox="0 0 210 210" fill="none" className="w-full h-full">
            <circle cx="105" cy="105" r="103" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Idle layer: large heading at ~39% from top — hidden on mobile (no hover), visible on desktop */}
        <div className="absolute left-5 right-5 top-[39%] opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-200">
          <p
            className="font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {study.title}<span className="text-text-brand">.</span>
          </p>
        </div>

        {/* Hover layer: small heading + body + link — always visible on mobile, fades in on desktop hover */}
        <div className="absolute inset-5 flex flex-col gap-xl md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 md:delay-150">
          <p
            className="font-heading font-semibold text-heading-s leading-[28px] uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {study.title}<span className="text-text-brand">.</span>
          </p>
          <p className="font-body not-italic text-sm leading-[20px] text-text-primary">
            {study.description}
          </p>
          <span className="text-link font-body not-italic text-base text-text-primary self-start mt-auto">
            Read the story
          </span>
        </div>
      </Link>
    </div>
  );
}

// ── List item ────────────────────────────────────────────────────────────────

function ListItem({ study }: { study: WorkCaseStudy }) {
  return (
    <div className="border-b border-border-primary pt-lg pb-4xl flex flex-col lg:flex-row gap-5xl items-start">
      <div className="relative shrink-0 w-full aspect-[3/2] lg:w-[240px]">
        {study.thumbnailSrc ? (
          <Image src={study.thumbnailSrc} alt={study.thumbnailAlt} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-[#d9d9d9]" />
        )}
      </div>
      <div className="flex flex-col justify-between self-stretch shrink-0 w-full lg:w-[240px] gap-xl lg:gap-0">
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
      <div className="flex-1 flex flex-col gap-xl min-w-0">
        <p className="font-body not-italic text-sm leading-[20px] text-text-primary">
          {study.description}
        </p>
        <Link href={`/work/${study.slug}`} className="text-link font-body not-italic text-base text-text-primary self-start">
          Read the story
        </Link>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WorkPageClient({ studies }: { studies: WorkCaseStudy[] }) {
  const [view, setView] = useState<View>('grid');

  return (
    <section className="bg-bg-primary px-margin pt-4xl pb-[80px] flex flex-col gap-4xl">

      <div className="flex gap-3xl items-center">
        <ViewToggle label="Grid" active={view === 'grid'} onClick={() => setView('grid')} />
        <ViewToggle label="List" active={view === 'list'} onClick={() => setView('list')} />
      </div>

      {view === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-text-primary">
          {studies.map((study, index) => (
            <GridCard key={study.number} study={study} index={index} />
          ))}
        </div>
      )}

      {view === 'list' && (
        <div className="flex flex-col">
          {studies.map((study) => (
            <ListItem key={study.number} study={study} />
          ))}
        </div>
      )}

      <div className="flex justify-center pt-3xl">
        <ButtonSecondary label="Load more" />
      </div>

    </section>
  );
}
