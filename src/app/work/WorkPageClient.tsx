'use client';

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

// Circle variants — different size + position per card slot (cycles every 6)
const CIRCLE_VARIANTS = [
  { left: '19%',   top: '92.5%', size: '52%' },
  { left: '19%',   top: '52.5%', size: '72%' },
  { left: '94%',   top: '50%',   size: '44%' },
  { left: '19%',   top: '12.5%', size: '64%' },
  { left: '79%',   top: '92.5%', size: '38%' },
  { left: '82%',   top: '5%',    size: '58%' },
];

function GridCard({ study, index }: { study: WorkCaseStudy; index: number }) {
  const { left, top, size } = CIRCLE_VARIANTS[index % 6];
  const title = study.title.replace(/\.+$/, '');

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
        {/* Circle — size + position unique per card slot, clipped by overflow-hidden */}
        <div
          className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 text-text-brand pointer-events-none"
          style={{ left, top, width: size }}
          aria-hidden
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="50" cy="50" r="48.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Single content area — heading animates in place between idle and hover states */}
        <div className="absolute inset-5 flex flex-col overflow-hidden">

          {/* Heading: sits at ~38% from top on desktop idle, slides to top and shrinks on hover */}
          <p
            className={[
              'font-heading font-semibold uppercase text-text-primary shrink-0',
              'text-heading-s leading-[28px] mt-0',
              'md:text-heading-l md:leading-[44px] md:mt-[38%]',
              'md:group-hover:text-heading-s md:group-hover:leading-[28px] md:group-hover:mt-0',
              'transition-[font-size,line-height,margin-top] duration-300 ease-out',
            ].join(' ')}
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {title}<span className="text-text-brand">.</span>
          </p>

          {/* Body + link: visible on mobile, slides in on desktop hover */}
          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 md:delay-100">
            <div className="overflow-hidden">
              <div className="pt-xl flex flex-col gap-xl">
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

function ListItem({ study }: { study: WorkCaseStudy }) {
  return (
    <div className="border-b border-border-primary pt-lg pb-4xl flex flex-col lg:flex-row gap-5xl items-start">
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
