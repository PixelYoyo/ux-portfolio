'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import { featuredWork } from '@/content/portfolio';

const { featured: FEATURED, projects: PROJECTS } = featuredWork;

export default function FeaturedWork() {
  const outerRef     = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // wrapper around the track
  const trackRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer     = outerRef.current;
    const container = containerRef.current;
    const track     = trackRef.current;
    if (!outer || !container || !track) return;

    let maxShift    = 0;
    let startOffset = 0; // extra scroll before animation begins

    const setSize = () => {
      if (window.innerWidth >= 1024) {
        track.style.transform = '';
        outer.style.height    = '';
        maxShift    = 0;
        startOffset = 0;
        return;
      }

      maxShift = track.scrollWidth - track.clientWidth;

      // Structural distance from the outer div's top to the track container's bottom.
      // This is constant regardless of current scroll position.
      // When the section first pins (outer.top = 0), this equals the container
      // bottom's distance from the viewport top.
      const outerRect     = outer.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const containerBottomFromOuterTop = containerRect.bottom - outerRect.top;

      // How many extra pixels the outer must scroll before the full track row
      // is visible in the viewport (0 if it already fits).
      startOffset = Math.max(0, containerBottomFromOuterTop - window.innerHeight);

      // Outer height budget:
      //   100vh   — section pins and content scrolls into view
      //   startOffset — wait until the full track row is visible
      //   maxShift    — full horizontal animation travel
      //   40px        — buffer so last card isn't flush against bottom
      outer.style.height = `calc(100vh + ${startOffset}px + ${maxShift}px + 40px)`;
    };

    const onScroll = () => {
      if (!maxShift) return;
      const { top } = outer.getBoundingClientRect();
      // scrolled: how far the outer has moved past the viewport top
      const scrolled  = Math.max(0, -top);
      // progress: 0 until the full track row is in view, then 0→1 over maxShift px
      const progress  = Math.max(0, Math.min(1, (scrolled - startOffset) / maxShift));
      track.style.transform = `translateX(${-progress * maxShift}px)`;
    };

    const onResize = () => { setSize(); onScroll(); };

    setSize();
    onScroll();

    window.addEventListener('scroll', onScroll,  { passive: true });
    window.addEventListener('resize', onResize,  { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    // Outer div: tall on mobile to provide vertical scroll budget for the parallax.
    // Height is set in JS: calc(100vh + startOffset + maxShift + 40px).
    <div ref={outerRef}>
      {/* sticky top-0 on mobile keeps the section pinned while the outer scrolls. */}
      {/* lg:static restores normal flow on desktop.                               */}
      <section className="sticky top-0 lg:static bg-bg-primary px-margin pt-4xl pb-[160px] lg:pb-7xl flex flex-col gap-[80px] items-end">

        {/* Featured project 01 */}
        {/* Mobile: stacked (number → thumbnail → text/CTA) | Desktop: two-column row */}
        <Link href={FEATURED.href} className="flex flex-col lg:flex-row gap-gutter items-start w-full border-b border-border-primary pb-6xl lg:border-b-0 lg:pb-0 cursor-pointer">

          {/* Number — mobile only, sits above thumbnail */}
          <p
            className="lg:hidden font-heading font-bold text-heading-xl leading-none uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {FEATURED.number}<span className="text-text-brand">.</span>
          </p>

          {/* Thumbnail — order 2 on mobile, right col on desktop */}
          <div className="order-2 lg:order-last lg:border-b lg:border-border-primary lg:pb-7xl w-full lg:max-w-[585px]">
            <div className="aspect-video relative w-full">
              <Image
                src={FEATURED.thumbnailSrc}
                alt={FEATURED.thumbnailAlt}
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

            <ButtonPrimary label="Read the story" className="w-full lg:w-auto lg:self-start" />
          </div>
        </Link>

        {/* Projects 02–04 */}
        {/* Mobile: overflow-hidden clips the parallax track at the container boundary. */}
        {/* Desktop: right-aligned 585px vertical stack, overflow visible.             */}
        <div
          ref={containerRef}
          className="overflow-hidden w-[calc(100%+40px)] ml-[-20px] mr-[-20px] lg:overflow-visible lg:w-[585px] lg:ml-0 lg:mr-0"
        >
          <div
            ref={trackRef}
            className="flex flex-row gap-4xl pl-margin lg:flex-col lg:gap-7xl lg:pl-0"
          >
            {PROJECTS.map((project) => (
              <Link key={project.number} href={project.href} className="flex flex-col gap-xl shrink-0 w-[311px] lg:w-full cursor-pointer">
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

                  {/* relative z-10 ensures the button sits above any stacking-context siblings */}
                  <span className="relative z-10 isolate font-body not-italic text-base text-text-primary self-start cursor-pointer group">
                    Read the story
                    <span aria-hidden="true" className="absolute left-0 -z-10 h-[6px] w-full bg-bg-brand origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" style={{ top: 'calc(50% + 3px)' }} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEE ALL CASE STUDIES */}
        {/* Mobile: full-width | Desktop: right-aligned within 585px column */}
        <div className="flex justify-end pt-3xl w-full lg:w-[585px]">
          <ButtonSecondary label="See all case studies" href={featuredWork.seeAllHref} className="w-full lg:w-auto" />
        </div>

      </section>
    </div>
  );
}
