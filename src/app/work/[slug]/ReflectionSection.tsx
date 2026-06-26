'use client';

import { useEffect, useRef } from 'react';
import type { CaseStudyContextItem } from '@/content/portfolio';

function DiagramIcon() {
  return (
    <svg viewBox="0 0 54 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <path d="M12.75 3C15.5625 3 18 5.4375 18 8.25V11.25H36V8.25C36 5.4375 38.3438 3 41.25 3H48.75C51.5625 3 54 5.4375 54 8.25V15.75C54 18.6562 51.5625 21 48.75 21H41.25C38.3438 21 36 18.6562 36 15.75V12.75H18V15.75C18 17.0625 17.5312 18.1875 16.7812 19.0312L23.1562 28.0312C24 27.375 25.125 27 26.25 27H33.75C36.5625 27 39 29.4375 39 32.25V39.75C39 42.6562 36.5625 45 33.75 45H26.25C23.3438 45 21 42.6562 21 39.75V32.25C21 31.0312 21.375 29.9062 22.125 29.0625L15.75 20.0625C14.9062 20.7188 13.7812 21 12.75 21H5.25C2.34375 21 0 18.6562 0 15.75V8.25C0 5.4375 2.34375 3 5.25 3H12.75ZM12.75 4.5H5.25C3.09375 4.5 1.5 6.1875 1.5 8.25V15.75C1.5 17.9062 3.09375 19.5 5.25 19.5H12.75C14.8125 19.5 16.5 17.9062 16.5 15.75V8.25C16.5 6.1875 14.8125 4.5 12.75 4.5ZM33.75 28.5H26.25C24.0938 28.5 22.5 30.1875 22.5 32.25V39.75C22.5 41.9062 24.0938 43.5 26.25 43.5H33.75C35.8125 43.5 37.5 41.9062 37.5 39.75V32.25C37.5 30.1875 35.8125 28.5 33.75 28.5ZM37.5 8.25V15.75C37.5 17.9062 39.0938 19.5 41.25 19.5H48.75C50.8125 19.5 52.5 17.9062 52.5 15.75V8.25C52.5 6.1875 50.8125 4.5 48.75 4.5H41.25C39.0938 4.5 37.5 6.1875 37.5 8.25Z" />
    </svg>
  );
}

function NibIcon() {
  return (
    <svg viewBox="0 0 50 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <path d="M42.2812 18.5625C42.5625 18.2812 43.0312 18.2812 43.3125 18.5625C43.5938 18.8438 43.5938 19.3125 43.3125 19.5938L17.625 45.1875C15.8438 47.0625 13.4062 48 10.7812 48C7.875 48 5.15625 46.7812 3.375 44.625C0 40.7812 0.375 34.875 4.21875 31.0312L29.5312 5.8125C29.8125 5.53125 30.2812 5.53125 30.5625 5.8125C30.8438 6.09375 30.8438 6.5625 30.5625 6.84375L13.3125 24H36.75L42.2812 18.5625ZM16.5938 44.1562L35.25 25.5H11.8125L5.25 32.1562C2.0625 35.3438 1.6875 40.4062 4.5 43.6875C6 45.4688 8.34375 46.5 10.6875 46.5C12.9375 46.5 15 45.6562 16.5938 44.1562ZM48.8438 16.7812C49.125 17.0625 49.125 17.5312 48.8438 17.8125C48.75 18 48.5625 18 48.375 18C48.0938 18 47.9062 18 47.8125 17.8125L31.4062 1.3125C31.125 1.03125 31.125 0.5625 31.4062 0.28125C31.6875 0 32.1562 0 32.4375 0.28125L48.8438 16.7812Z" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M29.9062 39C30.75 39 31.4062 39.75 31.4062 40.5V42.6562C31.4062 43.125 31.2188 43.875 30.9375 44.25L29.3438 46.6875C28.875 47.4375 27.75 48 26.8125 48H21.0938C20.1562 48 19.0312 47.4375 18.5625 46.6875L16.9688 44.3438C16.6875 43.7812 16.5 43.2188 16.5 42.6562V40.5C16.5 39.6562 17.1562 39 18 39H29.9062ZM29.9062 42.6562V40.5938H18V42.6562C18 42.9375 18.0938 43.2188 18.2812 43.5L19.875 45.8438C20.0625 46.2188 20.7188 46.5938 21.0938 46.5938H26.8125C27.1875 46.5938 27.8438 46.2188 28.125 45.8438L29.7188 43.5C29.8125 43.3125 29.9062 42.8438 29.9062 42.6562ZM35.625 4.875C38.7188 7.96875 40.5 12.1875 40.5 16.5938C40.5 20.625 39 24.4688 36.2812 27.4688C35.0625 28.9688 32.7188 32.3438 31.7812 35.4375C31.6875 35.8125 31.4062 36.0938 31.0312 36.0938H30.9375C30.5625 36 30.2812 35.625 30.2812 35.25V35.1562C31.3125 31.6875 33.8438 28.0312 35.1562 26.5312C37.5938 23.8125 38.9062 20.25 38.9062 16.5938C38.9062 12.5625 37.3125 8.8125 34.5 5.90625C31.6875 3.09375 27.9375 1.5 24 1.5H23.9062C15.5625 1.59375 8.90625 8.15625 8.90625 16.5938C8.90625 20.25 10.3125 23.8125 12.6562 26.5312C13.9688 28.0312 16.5 31.7812 17.5312 34.9688V35.25C17.5312 35.625 17.25 36 16.875 36C16.5 36.0938 16.125 35.8125 16.0312 35.3438C15.1875 32.3438 12.8438 28.9688 11.5312 27.4688C8.90625 24.4688 7.5 20.625 7.5 16.5938C7.5 7.5 14.8125 0.09375 23.9062 0.09375C23.9062 0.09375 23.9062 0 24 0C28.3125 0 32.5312 1.78125 35.625 4.875ZM24.6562 6.75C24.6562 7.21875 24.375 7.5 23.9062 7.5C18.5625 7.5 14.25 11.9062 14.25 17.25C14.25 17.7188 13.7812 18 13.4062 18C13.0312 18 12.6562 17.625 12.6562 17.25C12.6562 11.0625 17.7188 6.09375 23.9062 6.09375C24.2812 6.09375 24.6562 6.375 24.6562 6.75Z" />
    </svg>
  );
}

const ICON_COMPONENTS: Record<string, () => React.JSX.Element> = {
  'diagram':   DiagramIcon,
  'nib':       NibIcon,
  'lightbulb': LightbulbIcon,
};

function IconStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[56px] w-[64px] shrink-0">
      <div className="absolute bottom-0 left-0 right-0 h-[27px] bg-bg-brand" />
      <div className="absolute top-0 left-[8px] bottom-[8px] w-[48px] flex items-center justify-center">
        <div className="size-[48px] text-icon-primary">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ReflectionSection({
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

      <div className="px-margin max-w-[1440px] mx-auto flex flex-col lg:flex-row-reverse lg:items-start lg:justify-between">
      {/* Tagline — first in DOM (mobile: top), right column on desktop */}
      <p
        data-fade
        className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary mb-[48px] lg:mb-0 lg:font-semibold lg:text-heading-l lg:leading-[44px] lg:max-w-[453px] lg:w-[35%] lg:shrink-0 lg:text-right"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        {tagline}
      </p>

      {/* Content cards — left column on desktop */}
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
