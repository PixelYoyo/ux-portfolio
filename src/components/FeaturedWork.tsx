'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const THUMBNAIL_SRC =
  'https://res.cloudinary.com/drd6p33en/image/upload/q_auto,f_auto/v1778584285/Dexus_project_thumbnail_litcor.png';

const FEATURED = {
  number: '01',
  title: 'Dexus digital transformation.',
  tags: 'Research · Information Architecture · Design Systems',
  description:
    "A $51.5 billion real estate portfolio. A website that couldn't tell an investor from a tenant.",
};

const PROJECTS = [
  {
    number: '02',
    title: 'FRNSW Service booking system.',
    tags: 'Service · Design · Research UX Design',
    description:
      'The work that prevents fire emergencies before they happen was being tracked in personal diaries.',
  },
  {
    number: '03',
    title: 'Case study heading.',
    tags: 'Service · Design · Research UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    number: '04',
    title: 'Case study heading.',
    tags: 'Service · Design · Research UX Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
];

export default function FeaturedWork() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    let maxShift = 0;

    // Called on mount + resize: measures scroll distance, sets outer height.
    const setSize = () => {
      if (window.innerWidth >= 1024) {
        track.style.transform = '';
        outer.style.height = '';
        maxShift = 0;
        return;
      }
      // Total cards overflow beyond the container's visible width.
      maxShift = track.scrollWidth - track.clientWidth;
      // Outer height = 100vh + maxShift so the section stays pinned for exactly
      // the full horizontal scroll distance before unsticking.
      outer.style.height = `calc(100vh + ${maxShift}px + 40px)`;
    };

    // Called on every scroll frame: translates track based on outer's scroll position.
    const onScroll = () => {
      if (!maxShift) return;
      const { top } = outer.getBoundingClientRect();
      // 0 when outer top hits viewport top; 1 when outer has scrolled maxShift px.
      const progress = Math.max(0, Math.min(1, -top / maxShift));
      track.style.transform = `translateX(${-progress * maxShift}px)`;
    };

    setSize();
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { setSize(); onScroll(); }, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', () => { setSize(); onScroll(); });
    };
  }, []);

  return (
    // Outer div: tall on mobile to provide vertical scroll budget for the parallax.
    // Height is set in JS: calc(100vh + maxShift).
    <div ref={outerRef}>
      {/* sticky top-0 on mobile keeps the section pinned while the outer scrolls. */}
      {/* lg:static restores normal flow on desktop. */}
      <section className="sticky top-0 lg:static bg-bg-primary px-margin pt-4xl pb-[160px] lg:pb-7xl flex flex-col gap-[80px] items-end overflow-x-clip">

        {/* Featured project 01 */}
        {/* Mobile: stacked (number → thumbnail → text/CTA) | Desktop: two-column row */}
        <div className="flex flex-col lg:flex-row gap-gutter items-start w-full border-b border-border-primary pb-6xl lg:border-b-0 lg:pb-0">

          {/* Number — mobile only, sits above thumbnail */}
          <p
            className="lg:hidden font-heading font-bold text-heading-xl leading-none uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {FEATURED.number}<span className="text-text-brand">.</span>
          </p>

          {/* Thumbnail — order 2 on mobile, right col on desktop */}
          <div className="order-2 lg:order-last lg:border-b lg:border-border-primary lg:pb-7xl w-full lg:max-w-[585px]">
            <div className="aspect-video relative w-full overflow-hidden">
              <Image
                src={THUMBNAIL_SRC}
                alt="Dexus digital transformation project thumbnail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text + CTA — order 3 on mobile, left col on desktop */}
          <div className="order-3 lg:order-first lg:flex-1 flex flex-col gap-4xl justify-end min-w-0">

            {/* Number — desktop only */}
            <p
              className="hidden lg:block font-heading font-bold text-heading-xl leading-none uppercase text-text-primary"
              style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              {FEATURED.number}<span className="text-text-brand">.</span>
            </p>

            <div className="flex flex-col gap-xl text-text-primary">
              <div className="flex flex-col gap-xxs">
                <p
                  className="font-heading font-medium text-heading-m leading-[28px] uppercase"
                  style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
                >
                  {FEATURED.title}
                </p>
                <p className="font-body not-italic text-xs">{FEATURED.tags}</p>
              </div>
              <p className="font-body not-italic text-sm leading-[20px]">{FEATURED.description}</p>
            </div>

            <div className="bg-bg-brand flex items-center justify-center px-4xl py-3xl w-full lg:w-auto lg:self-start">
              <span
                className="font-heading font-bold text-button leading-[20px] uppercase text-text-primary whitespace-nowrap"
                style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
              >
                READ THE STORY
              </span>
            </div>
          </div>
        </div>

        {/* Projects 02–04 */}
        {/* Mobile: parallax horizontal track — extends to right viewport edge so card 2 peeks */}
        {/* Desktop: right-aligned 585px vertical stack */}
        <div className="w-[calc(100%+20px)] mr-[-20px] lg:w-[585px] lg:mr-0">
          <div
            ref={trackRef}
            className="flex flex-row gap-4xl will-change-transform lg:flex-col lg:gap-7xl"
          >
            {PROJECTS.map((project) => (
              <div key={project.number} className="flex flex-col gap-xl shrink-0 w-[311px] lg:w-full">
                <p
                  className="font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary"
                  style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
                >
                  {project.number}<span className="text-text-brand">.</span>
                </p>

                <div className="border-b border-border-primary pb-7xl flex flex-col gap-[32px]">
                  <div className="flex flex-col gap-xl text-text-primary">
                    <div className="flex flex-col gap-xxs">
                      <p
                        className="font-heading font-medium text-heading-m leading-[28px] uppercase"
                        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
                      >
                        {project.title}
                      </p>
                      <p className="font-body not-italic text-xs opacity-60">{project.tags}</p>
                    </div>
                    <p className="font-body not-italic text-sm leading-[20px]">{project.description}</p>
                  </div>

                  <span className="relative isolate font-body not-italic text-base text-text-primary self-start cursor-pointer group">
                    Read the story
                    <span aria-hidden="true" className="absolute left-0 -z-10 h-[6px] w-full bg-bg-brand origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" style={{ top: 'calc(50% + 3px)' }} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEE ALL CASE STUDIES */}
        {/* Mobile: full-width | Desktop: right-aligned within 585px column */}
        <div className="flex justify-end pt-3xl w-full lg:w-[585px]">
          <div className="border-[3px] border-border-brand flex items-center justify-center px-4xl py-3xl w-full lg:w-auto">
            <span
              className="font-heading font-bold text-button leading-[20px] uppercase text-text-primary whitespace-nowrap"
              style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              SEE ALL CASE STUDIES
            </span>
          </div>
        </div>

      </section>
    </div>
  );
}
