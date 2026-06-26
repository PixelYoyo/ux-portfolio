'use client';

import { useEffect, useRef } from 'react';
import type { CaseStudyContextItem } from '@/content/portfolio';

// ── Inline SVG icons (FA Pro classic light/thin) ──────────────────────────────

function GearIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16.5 24C16.5 19.875 19.7812 16.5 24 16.5C28.125 16.5 31.5 19.875 31.5 24C31.5 28.2188 28.125 31.5 24 31.5C19.7812 31.5 16.5 28.2188 16.5 24ZM24 18C20.625 18 18 20.7188 18 24C18 27.375 20.625 30 24 30C27.2812 30 30 27.375 30 24C30 20.7188 27.2812 18 24 18ZM39.8438 8.25C41.1562 7.78125 42.6562 8.34375 43.3125 9.5625L46.125 14.5312C46.875 15.75 46.5938 17.25 45.5625 18.1875L41.8125 21.6562C41.9062 22.4062 42 23.25 42 24C42 24.8438 41.9062 25.6875 41.8125 26.4375L45.5625 29.9062C46.5938 30.8438 46.875 32.3438 46.125 33.5625L43.3125 38.5312C42.6562 39.75 41.1562 40.3125 39.8438 39.8438L34.9688 38.3438C33.6562 39.2812 32.25 40.0312 30.8438 40.6875L29.7188 45.6562C29.4375 47.0625 28.2188 48 26.8125 48H21.0938C19.6875 48 18.4688 47.0625 18.1875 45.6562L17.0625 40.6875C15.6562 40.0312 14.25 39.2812 12.9375 38.3438L8.0625 39.8438C6.75 40.3125 5.25 39.75 4.59375 38.5312L1.78125 33.5625C1.03125 32.3438 1.3125 30.8438 2.34375 29.9062L6.09375 26.4375C6 25.6875 6 24.8438 6 24C6 23.25 6 22.4062 6.09375 21.6562L2.34375 18.1875C1.3125 17.25 1.03125 15.75 1.78125 14.5312L4.59375 9.5625C5.25 8.34375 6.75 7.78125 8.0625 8.25L12.9375 9.75C14.25 8.8125 15.6562 7.96875 17.0625 7.40625L18.1875 2.4375C18.4688 1.03125 19.6875 0 21.0938 0H26.8125C28.2188 0 29.4375 1.03125 29.7188 2.4375L30.8438 7.40625C32.25 7.96875 33.6562 8.8125 34.9688 9.75L39.8438 8.25ZM13.875 10.9688L13.2188 11.4375L7.59375 9.65625C6.9375 9.46875 6.28125 9.75 5.90625 10.3125L3.09375 15.2812C2.71875 15.8438 2.8125 16.5938 3.375 17.0625L7.6875 21.0938L7.59375 21.8438C7.5 22.5938 7.5 23.3438 7.5 24C7.5 24.75 7.5 25.5 7.59375 26.25L7.6875 27L3.375 30.9375C2.8125 31.4062 2.71875 32.25 3.09375 32.8125L5.90625 37.7812C6.28125 38.3438 6.9375 38.625 7.59375 38.4375L13.2188 36.6562L13.875 37.125C15 37.9688 16.3125 38.7188 17.625 39.2812L18.375 39.5625L19.6875 45.375C19.7812 46.0312 20.4375 46.5 21.0938 46.5H26.8125C27.4688 46.5 28.125 46.0312 28.2188 45.375L29.5312 39.5625L30.2812 39.2812C31.5938 38.7188 32.9062 37.9688 34.0312 37.125L34.6875 36.6562L40.3125 38.4375C40.9688 38.625 41.625 38.3438 42 37.7812L44.8125 32.8125C45.1875 32.25 45.0938 31.4062 44.5312 30.9375L40.2188 27L40.3125 26.25C40.4062 25.5 40.5 24.75 40.5 24C40.5 23.3438 40.4062 22.5938 40.3125 21.8438L40.2188 21.0938L44.5312 17.0625C45.0938 16.5938 45.1875 15.8438 44.8125 15.2812L42 10.3125C41.625 9.75 40.9688 9.46875 40.3125 9.65625L34.6875 11.4375L34.0312 10.9688C32.9062 10.125 31.5938 9.375 30.2812 8.8125L29.5312 8.53125L28.2188 2.71875C28.125 2.0625 27.4688 1.5 26.8125 1.5H21.0938C20.4375 1.5 19.7812 2.0625 19.6875 2.71875L18.375 8.53125L17.625 8.8125C16.3125 9.375 15 10.125 13.875 10.9688Z" />
    </svg>
  );
}

function ShapesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M27 0C28.0312 0 28.9688 0.5625 29.5312 1.5L38.5312 16.5C39.0938 17.4375 39.0938 18.5625 38.5312 19.5C38.0625 20.4375 37.0312 21 36 21H18C16.875 21 15.8438 20.4375 15.375 19.5C14.8125 18.5625 14.8125 17.4375 15.375 16.5L24.375 1.5C24.9375 0.5625 25.875 0 27 0ZM28.2188 2.25C27.9375 1.78125 27.4688 1.5 27 1.5C26.4375 1.5 25.9688 1.78125 25.6875 2.25L16.6875 17.25C16.4062 17.7188 16.4062 18.2812 16.6875 18.75C16.875 19.2188 17.4375 19.5 18 19.5H36C36.4688 19.5 37.0312 19.2188 37.2188 18.75C37.5 18.2812 37.5 17.7188 37.2188 17.25L28.2188 2.25ZM44.25 25.5C46.3125 25.5 48 27.1875 48 29.25V42.75C48 44.9062 46.3125 46.5 44.25 46.5H30.75C28.5938 46.5 27 44.9062 27 42.75V29.25C27 27.1875 28.5938 25.5 30.75 25.5H44.25ZM44.25 27H30.75C29.4375 27 28.5 28.0312 28.5 29.25V42.75C28.5 44.0625 29.4375 45 30.75 45H44.25C45.4688 45 46.5 44.0625 46.5 42.75V29.25C46.5 28.0312 45.4688 27 44.25 27ZM24 36C24 42.6562 18.5625 48 12 48C5.34375 48 0 42.6562 0 36C0 29.4375 5.34375 24 12 24C18.5625 24 24 29.4375 24 36ZM12 25.5C6.1875 25.5 1.5 30.2812 1.5 36C1.5 41.8125 6.1875 46.5 12 46.5C17.7188 46.5 22.5 41.8125 22.5 36C22.5 30.2812 17.7188 25.5 12 25.5Z" />
    </svg>
  );
}

function ThinkingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 1.5C11.5312 1.5 1.5 11.625 1.5 24C1.5 27.4688 2.25 30.75 3.65625 33.75C3.84375 34.125 3.65625 34.5 3.28125 34.6875C2.90625 34.875 2.4375 34.6875 2.25 34.3125C0.75 31.2188 0 27.75 0 24C0 10.7812 10.6875 0 24 0C37.2188 0 48 10.7812 48 24C48 37.3125 37.2188 48 24 48C23.5312 48 23.25 47.7188 23.25 47.25C23.25 46.875 23.5312 46.5 24 46.5C36.375 46.5 46.5 36.4688 46.5 24C46.5 11.625 36.375 1.5 24 1.5ZM12.2812 12.6562C12 12.9375 11.5312 12.75 11.3438 12.375C11.0625 12.0938 11.25 11.625 11.625 11.4375L12.2812 10.9688C15.2812 9.28125 19.0312 9.65625 21.75 11.9062L22.9688 12.9375C23.25 13.2188 23.25 13.6875 23.0625 14.0625C22.7812 14.3438 22.3125 14.3438 21.9375 14.1562L20.7188 13.0312C18.5625 11.1562 15.4688 10.875 13.0312 12.2812L12.2812 12.6562ZM15 18C15 17.25 15.6562 16.5 16.5 16.5C17.3438 16.5 18 17.25 18 18C18 18.8438 17.3438 19.5 16.5 19.5C15.6562 19.5 15 18.8438 15 18ZM25.7812 26.7188C28.5938 27.4688 30.6562 30 30.6562 32.9062C30.75 34.5 29.8125 36 28.2188 36.5625L24.1875 38.0625L22.0312 44.0625C21.1875 46.5 18.9375 48 16.4062 48H12C8.625 48 6 45.375 6 42V30.75C6 28.6875 7.59375 27 9.75 27C11.8125 27 13.5 28.6875 13.5 30.75V33.9375L25.6875 29.5312C26.3438 29.25 27 29.25 27.5625 29.3438C27 28.7812 26.25 28.4062 25.4062 28.2188L17.8125 26.25C17.3438 26.1562 17.1562 25.7812 17.25 25.4062C17.3438 24.9375 17.7188 24.75 18.0938 24.8438L25.7812 26.7188ZM29.0625 32.25C28.6875 31.125 27.375 30.4688 26.1562 30.9375L12.9375 35.7188C12.75 35.8125 12.4688 35.8125 12.2812 35.625C12.0938 35.5312 12 35.25 12 35.0625V30.75C12 29.5312 10.9688 28.5 9.75 28.5C8.4375 28.5 7.5 29.5312 7.5 30.75V42C7.5 44.5312 9.46875 46.5 12 46.5H16.4062C18.2812 46.5 19.9688 45.375 20.625 43.5938L22.9688 37.2188C22.9688 36.9375 23.1562 36.8438 23.3438 36.75L27.75 35.1562C28.5938 34.7812 29.1562 33.9375 29.25 33H29.1562C29.1562 32.7188 29.1562 32.5312 29.0625 32.25ZM33 19.5C33 20.3438 32.3438 21 31.5 21C30.6562 21 30 20.3438 30 19.5C30 18.75 30.6562 18 31.5 18C32.3438 18 33 18.75 33 19.5Z" />
    </svg>
  );
}

const ICON_COMPONENTS: Record<string, () => React.JSX.Element> = {
  'gear':     GearIcon,
  'shapes':   ShapesIcon,
  'thinking': ThinkingIcon,
};

// ── Section ───────────────────────────────────────────────────────────────────

export default function ContextSection({
  tagline,
  items,
}: {
  tagline: string;
  items:   CaseStudyContextItem[];
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = Array.from(section.querySelectorAll<HTMLElement>('[data-fade]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg-primary pt-4xl pb-7xl lg:py-4xl"
    >
      <style>{`
        [data-fade] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-fade] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="px-margin max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between">
      {/* Tagline */}
      <p
        data-fade
        className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary mb-[48px] lg:mb-0 lg:font-semibold lg:text-heading-l lg:leading-[44px] lg:max-w-[453px] lg:w-[35%] lg:shrink-0"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        {tagline}
      </p>

      {/* Content blocks */}
      <div className="flex flex-col gap-[64px] lg:max-w-[572px] lg:w-[45%] lg:shrink-0">
        {items.map((item, i) => {
          const Icon = ICON_COMPONENTS[item.icon];
          return (
            <div
              key={i}
              data-fade
              style={{ transitionDelay: `${i * 120}ms` }}
              className="border-b border-border-primary pb-4xl flex flex-col gap-xl"
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
      </div>
    </section>
  );
}

// ── Icon strip ────────────────────────────────────────────────────────────────

function IconStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[56px] w-[64px] shrink-0">
      {/* Brand-green highlight bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[27px] bg-bg-brand" />
      {/* Icon sits above, overlapping the bar */}
      <div className="absolute top-0 left-[8px] bottom-[8px] w-[48px] flex items-center justify-center">
        <div className="size-[48px] text-icon-primary">
          {children}
        </div>
      </div>
    </div>
  );
}
