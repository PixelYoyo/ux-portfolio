'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
type CaseStudyDesignItem = { heading: string; body: string[]; imageSrc: string; imageAlt: string; imageCaption: string };

export default function DesignSection({
  tagline,
  items,
}: {
  tagline: string;
  items: CaseStudyDesignItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function updateDesktopActive() {
      if (window.innerWidth < 768) return;
      const mid = window.innerHeight / 2;
      let next = 0;
      desktopCardRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= mid) next = i;
      });
      setActiveIndex(next);
    }
    window.addEventListener('scroll', updateDesktopActive, { passive: true });
    updateDesktopActive();

    return () => {
      window.removeEventListener('scroll', updateDesktopActive);
    };
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

        {/* ── Mobile: stacked image → caption → heading → body ────────── */}
        <div className="md:hidden flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-xl border-b border-border-primary pb-7xl${i > 0 ? ' pt-5xl' : ''}`}
            >
              <div className="relative w-full aspect-[3/2]">
                <Image src={item.imageSrc} alt={item.imageAlt} fill quality={90} className="object-cover" />
              </div>
              <p className="font-body not-italic text-sm leading-[20px] text-text-primary text-center">
                {item.imageCaption}
              </p>
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
              self-stretch overrides items-start so this cell fills the full grid
              track height (N×100vh), giving the sticky element room to scroll. */}
          <div className="self-stretch">
            <div className="sticky top-0 h-[100vh] flex items-center">
              <div className="w-full flex flex-col gap-[24px]">
                <div className="relative w-full aspect-[3/2]">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 motion-safe:transition-opacity motion-safe:duration-300"
                      style={{ opacity: i === activeIndex ? 1 : 0 }}
                    >
                      <Image src={item.imageSrc} alt={item.imageAlt} fill quality={90} className="object-cover" />
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
