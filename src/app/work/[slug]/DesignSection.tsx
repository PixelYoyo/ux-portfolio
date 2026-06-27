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
  // tracks which desktop text blocks are in the centre zone → opacity 1
  const [visibleSet, setVisibleSet] = useState<Set<number>>(() => new Set<number>());

  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Desktop: fire at the exact centre line of the viewport.
    // With min-h-[100vh] items there is always exactly one item crossing
    // the centre, so the handoff between items is seamless.
    const desktopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setActiveIndex(i);
            setVisibleSet((prev) => { const s = new Set(prev); s.add(i); return s; });
          } else {
            setVisibleSet((prev) => { const s = new Set(prev); s.delete(i); return s; });
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    );
    desktopCardRefs.current.forEach((el) => { if (el) desktopObserver.observe(el); });

    // Mobile: wider zone so the image crossfades responsively as
    // compact cards scroll into the middle third of the viewport.
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
                  className={`size-[16px] border-[0.5px] border-solid border-text-primary transition-colors duration-500${
                    i === activeIndex ? ' bg-bg-brand' : ''
                  }`}
                />
              ))}
            </div>
            <div className="relative w-full aspect-[3/2]">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-700 ${
                    i === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
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
        <div className="hidden md:flex md:items-start md:gap-[20px] lg:gap-[40px]">

          {/* Left: tall scroll containers, one per item.
              rootMargin -50%/-50% fires exactly as each block crosses the
              viewport centre — with min-h-[100vh] containers, exactly one
              block is in the zone at any moment, so there is no gap. */}
          <div className="flex-1 flex flex-col">
            {items.map((item, i) => (
              <div key={i} className="min-h-[100vh] flex items-center">
                <div
                  ref={(el) => { desktopCardRefs.current[i] = el; }}
                  data-index={i}
                  className="w-full border-b border-border-primary pb-7xl flex flex-col gap-xl motion-safe:transition-opacity motion-safe:duration-700"
                  style={{ opacity: visibleSet.has(i) ? 1 : 0 }}
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
              </div>
            ))}
          </div>

          {/* Right: sticky image — sticks just below the sticky anchor nav */}
          <div className="md:flex-1 lg:flex-none lg:w-[608px] shrink-0">
            <div className="sticky md:top-[86px] lg:top-[102px] flex flex-col gap-[24px]">
              <div className="relative w-full aspect-[3/2]">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-700 ${
                      i === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
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
    </section>
  );
}
