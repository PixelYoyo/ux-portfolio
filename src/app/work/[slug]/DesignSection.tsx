'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import type { CaseStudyDesignItem } from '@/content/portfolio';

export default function DesignSection({
  tagline,
  items,
}: {
  tagline: string;
  items: CaseStudyDesignItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Fires at the viewport centre line. h-[100vh] containers guarantee
    // exactly one item crosses the centre at a time — no gap between transitions.
    const desktopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    );
    desktopCardRefs.current.forEach((el) => { if (el) desktopObserver.observe(el); });

    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: 0 },
    );
    mobileCardRefs.current.forEach((el) => { if (el) mobileObserver.observe(el); });

    return () => { desktopObserver.disconnect(); mobileObserver.disconnect(); };
  }, []);

  const activeCaption = items[activeIndex]?.imageCaption ?? '';

  return (
    <section className="bg-bg-primary py-4xl">
      <div className="px-margin max-w-[1440px] mx-auto flex flex-col gap-2xl md:gap-5xl">

        {/* Tagline */}
        <p
          className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary md:font-semibold md:text-heading-l md:leading-[44px]"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {tagline}
        </p>

        {/* ── Mobile ──────────────────────────────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-2xl">

          {/* Sticky image + dots */}
          <div className="sticky top-0 z-10 bg-bg-primary flex flex-col gap-lg pb-xl">
            <div className="flex items-center gap-lg">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`size-[16px] border-[0.5px] border-solid border-text-primary transition-colors duration-300${
                    i === activeIndex ? ' bg-bg-brand' : ''
                  }`}
                />
              ))}
            </div>
            <div className="relative w-full aspect-[3/2]">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="absolute inset-0 motion-safe:transition-opacity motion-safe:duration-300"
                  style={{ opacity: i === activeIndex ? 1 : 0 }}
                >
                  <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="font-body not-italic text-sm leading-[20px] text-text-primary text-center">
              {activeCaption}
            </p>
          </div>

          {/* Content cards */}
          <div className="flex flex-col">
            {items.map((item, i) => (
              <div
                key={i}
                ref={(el) => { mobileCardRefs.current[i] = el; }}
                data-index={i}
                className="border-b border-border-primary pb-7xl flex flex-col gap-xl"
              >
                <p
                  className="font-heading font-medium text-heading-s leading-[28px] uppercase text-text-primary"
                  style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
                >
                  {item.heading}
                </p>
                <div className="flex flex-col gap-[12px]">
                  {item.body.map((para, j) => (
                    <p key={j} className="font-body not-italic text-sm leading-[20px] text-text-primary">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tablet / Desktop ────────────────────────────────────────────── */}
        {/* Grid (not flex) so the right cell inherits the full left-column
            height (~3×100vh), giving position:sticky the parent room it
            needs to scroll. align-items:start keeps both columns top-aligned. */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-[20px] lg:grid-cols-[1fr_608px] lg:gap-[40px] items-start">

          {/* Left: scrolling text blocks. Active = opacity 1, inactive = 0.4. */}
          <div className="flex flex-col">
            {items.map((item, i) => (
              <div
                key={i}
                ref={(el) => { desktopCardRefs.current[i] = el; }}
                data-index={i}
                className="h-[100vh] flex items-center motion-safe:transition-opacity motion-safe:duration-300"
                style={{ opacity: i === activeIndex ? 1 : 0.4 }}
              >
                <div className="w-full border-b border-border-primary pb-7xl flex flex-col gap-xl">
                  <p
                    className="font-heading font-medium text-heading-s leading-[28px] uppercase text-text-primary"
                    style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
                  >
                    {item.heading}
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    {item.body.map((para, j) => (
                      <p key={j} className="font-body not-italic text-sm leading-[20px] text-text-primary">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky image centred in the viewport.
              top-0 + h-[100vh] + flex items-center places the image at 50vh.
              The grid cell is the full section height so sticky has room to scroll. */}
          <div>
            <div className="sticky top-0 h-[100vh] flex items-center">
              <div className="w-full flex flex-col gap-[24px]">
                <div className="relative w-full aspect-[3/2]">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 motion-safe:transition-opacity motion-safe:duration-300"
                      style={{ opacity: i === activeIndex ? 1 : 0 }}
                    >
                      <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="font-body not-italic text-sm leading-[20px] text-text-primary text-center">
                  {activeCaption}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
