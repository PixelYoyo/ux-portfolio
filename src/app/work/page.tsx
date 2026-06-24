'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import ButtonSecondary from '@/components/ButtonSecondary';
import { workPage } from '@/content/portfolio';

type View = 'grid' | 'list';
type CaseStudy = (typeof workPage.caseStudies)[number];

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

function GridCard({ study, index }: { study: CaseStudy; index: number }) {

  return (
    // Mobile: pb-4 pr-4 reveals the Cloudinary background in a 16px strip at
    // right/bottom without translating the card (card stays in place, no clipping).
    // Desktop: no padding — the card translates on hover instead.
    // Cards beyond index 3 are hidden on mobile (show only 4).
    <div
      className={`relative group hover:z-10${index >= 4 ? ' hidden md:block' : ''}`}
    >
      {/* Background layer: same size as outer div.
          Mobile: visible in 16px gap created by Link's mr-4 mb-4.
          Desktop: fully covered by Link in idle; revealed when Link translates on hover. */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url('${HOVER_BG_URL}')` }}
        aria-hidden
      />

      <Link
        href={`/work/${study.slug}`}
        className={[
          'relative flex flex-col overflow-hidden',
          'bg-bg-primary',
          'border border-text-primary',
          'md:border-t-0 md:border-l-0',
          'md:group-hover:border-t md:group-hover:border-l',
          'mb-4 mr-4 md:mb-0 md:mr-0',
          'md:group-hover:-translate-x-4 md:group-hover:-translate-y-4',
          'transition-transform duration-300 ease-out',
        ].join(' ')}
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-[3/2]">
          {study.thumbnailSrc ? (
            <Image
              src={study.thumbnailSrc}
              alt={study.thumbnailAlt}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#d9d9d9]" />
          )}
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-xl px-[20px] pt-[20px] pb-[28px]">
          <p
            className="font-heading font-semibold text-heading-s leading-[28px] md:text-heading-m md:leading-[28px] uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {study.title}
          </p>

          {/* Description + CTA: always visible on mobile, expands on hover on desktop */}
          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
            <div className="overflow-hidden">
              <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-100 flex flex-col gap-xl">
                <p className="font-body not-italic text-sm leading-[20px] text-text-primary">
                  {study.description}
                </p>
                <span className="text-link font-body not-italic text-base text-text-primary self-start">
                  Read the story
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ── List item ────────────────────────────────────────────────────────────────

function ListItem({ study }: { study: CaseStudy }) {
  return (
    <div className="border-b border-border-primary pt-lg pb-4xl flex flex-col lg:flex-row gap-5xl items-start">

      {/* Thumbnail */}
      <div className="relative shrink-0 w-full aspect-[3/2] lg:w-[240px]">
        {study.thumbnailSrc ? (
          <Image src={study.thumbnailSrc} alt={study.thumbnailAlt} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-[#d9d9d9]" />
        )}
      </div>

      {/* Left col — title + number */}
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

      {/* Right col — description + read more */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-text-primary">
          {studies.map((study, index) => (
            <GridCard key={study.number} study={study} index={index} />
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
