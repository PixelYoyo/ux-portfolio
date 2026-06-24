'use client';

import { useEffect, useRef } from 'react';
import type { CaseStudyContextItem } from '@/content/portfolio';

function PeopleIcon() {
  return (
    <svg viewBox="0 0 58 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <path d="M51.8438 16.3125L57.0938 29.8125C57.2812 30.1875 57.0938 30.5625 56.625 30.75C56.5312 30.75 56.4375 30.75 56.4375 30.75C56.0625 30.75 55.7812 30.6562 55.6875 30.2812L50.4375 16.875C49.6875 14.8125 47.7188 13.5 45.5625 13.5H41.7188C39.5625 13.5 37.6875 14.8125 36.8438 16.875L31.5938 30.2812C31.4062 30.75 31.0312 30.9375 30.6562 30.75C30.1875 30.5625 30 30.1875 30.1875 29.8125L35.4375 16.3125C36.4688 13.6875 38.9062 12 41.7188 12H45.5625C48.375 12 50.8125 13.6875 51.8438 16.3125ZM43.6875 9.75C40.9688 9.75 38.8125 7.59375 38.8125 4.875C38.8125 2.25 40.9688 0 43.5938 0C46.3125 0 48.5625 2.25 48.5625 4.875C48.5625 7.59375 46.3125 9.75 43.6875 9.75ZM43.6875 1.5C41.8125 1.5 40.3125 3.09375 40.3125 4.875C40.3125 6.75 41.8125 8.25 43.6875 8.25C45.4688 8.25 47.0625 6.75 47.0625 4.875C47.0625 3.09375 45.4688 1.5 43.6875 1.5ZM48.9375 19.5938L54.6562 35.0625C54.75 35.25 54.75 35.5312 54.5625 35.7188C54.4688 35.9062 54.1875 36 54 36H50.3438V45C50.3438 46.6875 48.9375 48 47.3438 48C45.75 48 44.4375 46.6875 44.4375 45V36H42.9375V45C42.9375 46.6875 41.5312 48 39.8438 48C38.25 48 36.9375 46.6875 36.9375 45V36H33.1875C33 36 32.7188 35.9062 32.625 35.7188C32.4375 35.5312 32.4375 35.25 32.5312 35.0625L38.3438 19.5938C38.4375 19.125 38.9062 18.9375 39.2812 19.125C39.6562 19.2188 39.8438 19.6875 39.75 20.0625L34.3125 34.5H52.9688L47.5312 20.0625C47.4375 19.6875 47.625 19.2188 48 19.125C48.375 18.9375 48.8438 19.125 48.9375 19.5938ZM41.4375 45V36H38.4375V45C38.4375 45.8438 39.0938 46.5 39.9375 46.5C40.6875 46.5 41.4375 45.8438 41.4375 45ZM48.9375 45V36H45.9375V45C45.9375 45.8438 46.5938 46.5 47.4375 46.5C48.1875 46.5 48.9375 45.8438 48.9375 45ZM15.5625 12C18.375 12 20.8125 13.6875 21.8438 16.3125L27.0938 29.8125C27.2812 30.1875 27.0938 30.5625 26.625 30.75C26.5312 30.75 26.4375 30.75 26.4375 30.75C26.0625 30.75 25.7812 30.6562 25.6875 30.2812L20.4375 16.875C19.6875 14.8125 17.7188 13.5 15.5625 13.5H11.7188C9.5625 13.5 7.59375 14.8125 6.84375 16.875L1.59375 30.2812C1.40625 30.75 1.03125 30.9375 0.65625 30.75C0.1875 30.5625 0 30.1875 0.1875 29.8125L5.4375 16.3125C6.46875 13.6875 8.90625 12 11.7188 12H15.5625ZM19.6875 23.25C20.0625 23.25 20.4375 23.625 20.4375 24V45C20.4375 46.6875 18.8438 48 17.3438 48C15.75 48 14.4375 46.6875 14.4375 45V32.25C14.4375 31.875 14.0625 31.5 13.6875 31.5C13.2188 31.5 12.9375 31.875 12.9375 32.25V45C12.9375 46.6875 11.3438 48 9.84375 48C8.25 48 6.9375 46.6875 6.9375 45V24C6.9375 23.625 7.21875 23.25 7.6875 23.25C8.0625 23.25 8.4375 23.625 8.4375 24V45C8.4375 45.8438 9.09375 46.5 9.9375 46.5C10.6875 46.5 11.4375 45.8438 11.4375 45V32.25C11.4375 31.0312 12.375 30 13.6875 30C14.9062 30 15.9375 31.0312 15.9375 32.25V45C15.9375 45.8438 16.5938 46.5 17.4375 46.5C18.1875 46.5 18.9375 45.8438 18.9375 45V24C18.9375 23.625 19.2188 23.25 19.6875 23.25ZM13.6875 9.75C10.9688 9.75 8.71875 7.59375 8.71875 4.875C8.71875 2.25 10.9688 0 13.6875 0C16.3125 0 18.5625 2.25 18.5625 4.875C18.5625 7.59375 16.3125 9.75 13.6875 9.75ZM13.6875 1.5C11.8125 1.5 10.2188 3.09375 10.3125 4.875C10.3125 6.75 11.8125 8.25 13.6875 8.25C15.4688 8.25 17.0625 6.75 17.0625 4.875C17.0625 3.09375 15.4688 1.5 13.6875 1.5Z" />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <path d="M30.8438 28.5C33.6562 28.5 35.0625 30.9375 35.0625 32.7188C35.0625 33.8438 34.5938 34.875 33.75 35.7188L27.6562 41.7188C27.4688 41.9062 27.1875 42 26.9062 42C26.7188 42 26.4375 41.9062 26.25 41.7188L20.1562 35.7188C19.3125 34.875 18.8438 33.8438 18.8438 32.7188C18.8438 30.9375 20.25 28.5 23.0625 28.5C24.2812 28.5 25.4062 28.9688 26.3438 29.9062L26.9062 30.4688L27.5625 29.9062C28.5 28.9688 29.625 28.5 30.8438 28.5ZM33.5625 32.7188C33.5625 31.875 32.9062 30 30.8438 30C30 30 29.25 30.375 28.5938 30.9375L27 32.625L25.3125 30.9375C24.6562 30.375 23.9062 30 23.0625 30C22.5 30 20.3438 30.4688 20.3438 32.7188C20.3438 33.4688 20.625 34.125 21.1875 34.6875L26.9062 40.3125L32.7188 34.6875C33.2812 34.125 33.5625 33.4688 33.5625 32.7188ZM42.75 9C44.8125 9 46.5 10.6875 46.5 12.75V32.25C46.5 40.9688 39.375 48 30.75 48H24.8438C19.7812 48 15.0938 46.0312 11.5312 42.4688L1.40625 32.3438C0.46875 31.5 0 30.2812 0 29.0625C0 25.5 3.375 24.75 4.3125 24.75C5.53125 24.75 6.65625 25.2188 7.40625 26.0625L12 30.4688V6.75C12 4.6875 13.6875 3 15.75 3C17.8125 3 19.5 4.6875 19.5 6.75V22.5C19.5 22.9688 19.7812 23.25 20.25 23.25C20.625 23.25 21 22.9688 21 22.5V3.75C21 1.6875 22.5938 0 24.75 0C26.8125 0 28.5 1.6875 28.5 3.75V22.5C28.5 22.9688 28.7812 23.25 29.25 23.25C29.625 23.25 30 22.9688 30 22.5V6.75C30 4.6875 31.6875 3 33.75 3C35.8125 3 37.5 4.6875 37.5 6.75V22.5C37.5 22.9688 37.7812 23.25 38.25 23.25C38.625 23.25 39 22.9688 39 22.5V12.75C39 10.6875 40.6875 9 42.75 9ZM45 32.25V12.75C45 11.5312 43.9688 10.5 42.75 10.5C41.5312 10.5 40.5 11.5312 40.5 12.75V22.5C40.5 23.8125 39.4688 24.75 38.25 24.75C37.0312 24.75 36 23.8125 36 22.5V6.75C36 5.53125 34.9688 4.5 33.75 4.5C32.4375 4.5 31.5 5.53125 31.5 6.75V22.5C31.5 23.8125 30.4688 24.75 29.25 24.75C27.9375 24.75 27 23.8125 27 22.5V3.75C27 2.53125 25.9688 1.5 24.75 1.5C23.4375 1.5 22.5 2.53125 22.5 3.75V22.5C22.5 23.8125 21.4688 24.75 20.25 24.75C19.0312 24.75 18 23.8125 18 22.5V6.84375C18 5.53125 16.9688 4.59375 15.75 4.59375C14.4375 4.59375 13.5 5.53125 13.5 6.84375V32.3438C13.5 32.7188 13.125 33.0938 12.75 33.0938C12.5625 33.0938 12.375 33 12.1875 32.8125L6.375 27.0938C5.8125 26.5312 5.0625 26.25 4.3125 26.25C3 26.25 1.5 27.2812 1.5 29.0625C1.5 29.9062 1.875 30.6562 2.4375 31.3125L12.5625 41.4375C15.8438 44.7188 20.25 46.5 24.8438 46.5H30.75C38.625 46.5 45 40.125 45 32.25Z" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 50 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <path d="M25.0312 30C24.5625 30 24.2812 29.7188 24.2812 29.25V14.25C24.2812 13.875 24.5625 13.5 25.0312 13.5C25.4062 13.5 25.7812 13.875 25.7812 14.25V29.25C25.7812 29.7188 25.4062 30 25.0312 30ZM48.4688 39.0938C49.9688 41.7188 48.0938 45 45 45H4.96875C1.875 45 0 41.7188 1.40625 39.0938L21.4688 4.96875C22.3125 3.65625 23.625 3 25.0312 3C26.3438 3 27.6562 3.65625 28.5 4.96875L48.4688 39.0938ZM47.1562 42.2812C47.625 41.5312 47.625 40.6875 47.1562 39.9375L27.1875 5.8125C26.7188 4.96875 25.875 4.5 25.0312 4.5C24.0938 4.5 23.25 4.96875 22.7812 5.8125L2.8125 39.9375C2.34375 40.6875 2.34375 41.5312 2.8125 42.2812C3.28125 43.125 4.03125 43.5 4.96875 43.5H45C45.9375 43.5 46.6875 43.0312 47.1562 42.2812ZM25.0312 34.5C25.7812 34.5 26.5312 35.25 26.5312 36C26.5312 36.8438 25.7812 37.5 25.0312 37.5C24.1875 37.5 23.5312 36.8438 23.5312 36C23.5312 35.25 24.1875 34.5 25.0312 34.5Z" />
    </svg>
  );
}

const ICON_COMPONENTS: Record<string, () => React.JSX.Element> = {
  people:  PeopleIcon,
  hand:    HandIcon,
  warning: WarningIcon,
};

function IconStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[56px] w-[64px] shrink-0">
      <div className="absolute bottom-0 left-0 right-0 h-[27px] bg-bg-brand" />
      <div className="absolute top-0 left-[8px] bottom-[8px] w-[48px] flex items-center justify-center">
        <div className="size-[48px] text-icon-primary">{children}</div>
      </div>
    </div>
  );
}

export default function ScrollCardsSection({
  tagline,
  items,
}: {
  tagline: string;
  items: CaseStudyContextItem[];
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    let maxShift = 0;
    let startOffset = 0;

    const setSize = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        track.style.transform = '';
        outer.style.height = '';
        maxShift = 0;
        return;
      }

      maxShift = track.scrollWidth - track.clientWidth;
      if (!maxShift) {
        outer.style.height = '';
        return;
      }

      const outerRect = outer.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const trackBottomFromOuterTop = trackRect.bottom - outerRect.top;
      startOffset = Math.max(0, trackBottomFromOuterTop - window.innerHeight);

      outer.style.height = `calc(100vh + ${startOffset}px + ${maxShift}px + 40px)`;
    };

    const onScroll = () => {
      if (!maxShift) return;
      const { top } = outer.getBoundingClientRect();
      const scrolled = Math.max(0, -top);
      const progress = Math.max(0, Math.min(1, (scrolled - startOffset) / maxShift));
      track.style.transform = `translateX(${-progress * maxShift}px)`;
    };

    const onResize = () => { setSize(); onScroll(); };

    setSize();
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={outerRef}>
      <section className="sticky top-0 overflow-hidden bg-bg-primary px-margin py-4xl flex flex-col gap-5xl">

        <p
          className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary lg:font-semibold lg:text-heading-l lg:leading-[44px]"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {tagline}
        </p>

        <div ref={trackRef} className="flex gap-4xl lg:gap-9xl">
          {items.map((item, i) => {
            const Icon = ICON_COMPONENTS[item.icon];
            return (
              <div
                key={i}
                className="w-[290px] lg:w-[520px] shrink-0 border-b border-border-primary pb-7xl flex flex-col gap-xl"
              >
                <IconStrip>{Icon && <Icon />}</IconStrip>
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
            );
          })}
        </div>

      </section>
    </div>
  );
}
