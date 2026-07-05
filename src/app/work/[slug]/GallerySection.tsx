'use client';

import { useState } from 'react';
import Image from 'next/image';
type CaseStudyGalleryImage = { src: string; alt: string; caption: string };

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
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous image' : 'Next image'}
      className="relative h-[56px] w-[64px] shrink-0 text-icon-primary"
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

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const image = images[current];

  return (
    <section className="bg-bg-primary pt-4xl pb-7xl lg:py-7xl">

      {/* Image row: 3-column grid on desktop so the centre slot is always the
          same width regardless of whether arrows are shown. On mobile, the two
          arrow-slot divs are hidden and the centre column is full-width. */}
      <div className="px-margin max-w-[1440px] mx-auto lg:grid lg:grid-cols-[64px_1fr_64px] lg:gap-[40px] lg:items-center">

        {/* Desktop left arrow slot — always in the grid, empty when single image */}
        <div className="hidden lg:block">
          {images.length > 1 && (
            <ArrowButton direction="prev" onClick={prev} />
          )}
        </div>

        {/* Centre column: image + captions/dots on desktop */}
        <div className="flex flex-col gap-lg lg:gap-[20px]">

          {/* Image */}
          <div className="relative w-full aspect-[3/2]">
            {image.src ? (
              <Image src={image.src} alt={image.alt} fill quality={90} className="object-cover" />
            ) : (
              <div className="absolute inset-0 bg-[#c6c6c6]" />
            )}
          </div>

          {/* Mobile: caption below image */}
          <p className="lg:hidden font-body not-italic text-sm leading-[20px] text-text-primary text-center w-full">
            {image.caption}
          </p>

          {/* Desktop: dots (left) + caption (right, wrapping) */}
          <div className="hidden lg:flex items-start gap-[20px]">
            {images.length > 1 && <Dots count={images.length} current={current} />}
            <p className="flex-1 min-w-0 font-body not-italic text-sm leading-[20px] text-text-primary text-right break-words">
              {image.caption}
            </p>
          </div>
        </div>

        {/* Desktop right arrow slot — always in the grid, empty when single image */}
        <div className="hidden lg:block">
          {images.length > 1 && (
            <ArrowButton direction="next" onClick={next} />
          )}
        </div>
      </div>

      {/* Mobile: arrows + dots row — hidden when only one image */}
      {images.length > 1 && (
        <div className="px-margin max-w-[1440px] mx-auto lg:hidden flex items-end justify-between">
          <ArrowButton direction="prev" onClick={prev} />
          <Dots count={images.length} current={current} />
          <ArrowButton direction="next" onClick={next} />
        </div>
      )}

    </section>
  );
}
