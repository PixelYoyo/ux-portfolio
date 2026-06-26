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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Fire when a card enters the band from 50%–60% of the viewport height.
    // This sits well below the sticky mobile image (~280px) on any phone size,
    // so the switch only triggers once a card is genuinely readable.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: '-50% 0px -40% 0px', threshold: 0 },
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const activeCaption = items[activeIndex]?.imageCaption ?? '';

  return (
    <section className="bg-bg-primary py-4xl">
      <div className="px-margin max-w-[1440px] mx-auto flex flex-col gap-2xl lg:gap-5xl">

      {/* Tagline */}
      <p
        className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary lg:font-semibold lg:text-heading-l lg:leading-[44px]"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        {tagline}
      </p>

      {/* Mobile: sticky image + dots, scrolls away after tagline */}
      <div className="lg:hidden sticky top-0 z-10 bg-bg-primary flex flex-col gap-lg">
        <div className="flex items-center gap-lg">
          {items.map((_, i) => (
            <div
              key={i}
              className={`size-[16px] border-[0.5px] border-solid border-text-primary${i === activeIndex ? ' bg-bg-brand' : ''}`}
            />
          ))}
        </div>
        <div className="relative w-full aspect-[3/2]">
          {items.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-700 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <p className="font-body not-italic text-sm leading-[20px] text-text-primary text-center">
          {activeCaption}
        </p>
      </div>

      {/* Two-column body */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">

        {/* Left: scrolling content cards */}
        <div className="flex flex-col lg:w-[572px] lg:py-[120px] lg:gap-[400px]">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
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

        {/* Right: sticky image — desktop only */}
        <div className="hidden lg:block lg:w-[608px]">
          <div className="sticky top-[32px] flex flex-col gap-[24px]">
            <div className="relative w-full aspect-[3/2]">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-700 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
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
