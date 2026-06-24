'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { CaseStudyGalleryImage } from '@/content/portfolio';

function ArrowLeftSvg() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="40" y1="24" x2="8" y2="24" />
      <polyline points="20,12 8,24 20,36" />
    </svg>
  );
}

function ArrowRightSvg() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="8" y1="24" x2="40" y2="24" />
      <polyline points="28,12 40,24 28,36" />
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous image' : 'Next image'}
      className="relative h-[56px] w-[64px] shrink-0 text-icon-primary transition-opacity disabled:opacity-40"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[27px] bg-bg-brand" />
      <div className="absolute top-0 left-[8px] bottom-[8px] w-[48px] flex items-center justify-center">
        <div className="size-[48px]">
          {direction === 'prev' ? <ArrowLeftSvg /> : <ArrowRightSvg />}
        </div>
      </div>
    </button>
  );
}

function Dots({ count, current }: { count: number; current: number }) {
  return (
    <div className="flex items-center gap-lg">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={`size-[16px] border-[0.5px] border-solid border-text-primary${i === current ? ' bg-bg-brand' : ''}`}
        />
      ))}
    </div>
  );
}

export default function GallerySection({ images }: { images: CaseStudyGalleryImage[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(images.length - 1, i + 1));

  const image = images[current];

  return (
    <section className="bg-bg-primary px-margin pt-4xl pb-7xl lg:py-7xl flex flex-col gap-lg lg:gap-[20px]">

      {/* Image row: arrows flank on desktop, hidden on mobile */}
      <div className="flex items-center lg:gap-[40px]">

        {/* Desktop left arrow */}
        <div className="hidden lg:block">
          <ArrowButton direction="prev" onClick={prev} disabled={current === 0} />
        </div>

        {/* Center column: image + captions/dots on desktop */}
        <div className="flex-1 flex flex-col gap-lg lg:gap-[20px] lg:max-w-[1200px]">

          {/* Image */}
          <div className="relative w-full aspect-[3/2]">
            {image.src ? (
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            ) : (
              <div className="absolute inset-0 bg-[#c6c6c6]" />
            )}
          </div>

          {/* Mobile: caption below image */}
          <p className="lg:hidden font-body not-italic text-sm leading-[20px] text-text-primary text-center w-full">
            {image.caption}
          </p>

          {/* Desktop: dots (left) + caption (right) */}
          <div className="hidden lg:flex items-center justify-between">
            <Dots count={images.length} current={current} />
            <p className="font-body not-italic text-sm leading-[20px] text-text-primary">
              {image.caption}
            </p>
          </div>
        </div>

        {/* Desktop right arrow */}
        <div className="hidden lg:block">
          <ArrowButton direction="next" onClick={next} disabled={current === images.length - 1} />
        </div>
      </div>

      {/* Mobile: arrows + dots row */}
      <div className="lg:hidden flex items-end justify-between">
        <ArrowButton direction="prev" onClick={prev} disabled={current === 0} />
        <Dots count={images.length} current={current} />
        <ArrowButton direction="next" onClick={next} disabled={current === images.length - 1} />
      </div>

    </section>
  );
}
