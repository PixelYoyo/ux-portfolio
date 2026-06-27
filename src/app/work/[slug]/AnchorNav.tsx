'use client';

import { useState, useEffect, useRef } from 'react';
import ButtonPrimary from '@/components/ButtonPrimary';
import type { CaseStudyPage } from '@/content/portfolio';

function NavLink({
  link,
  active,
}: {
  link: { label: string; href: string };
  active: boolean;
}) {
  return (
    <a
      href={link.href}
      className={`font-body not-italic text-[16px] leading-normal whitespace-nowrap transition-colors duration-200 ${
        active ? 'text-link text-text-primary' : 'anchor-nav-inactive text-[#696969]'
      }`}
    >
      {link.label}
    </a>
  );
}

export default function AnchorNav({ study }: { study: CaseStudyPage }) {
  const [activeId, setActiveId] = useState('summary');
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: 'Summary',  href: '#summary'   },
    { label: 'Context',  href: '#context'   },
    { label: 'Design',   href: '#design'    },
    ...(study.reflectionItems.length > 0
      ? [{ label: 'Learnings', href: '#learnings' }]
      : []),
    { label: 'Details',  href: '#details'   },
  ];

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topmost.target.id);
        }
      },
      { rootMargin: '-10% 0px -85% 0px', threshold: 0 },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links.length]);

  useEffect(() => {
    if (!open) return;
    function onOutside(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, [open]);

  const activeLink = links.find(l => l.href === `#${activeId}`) ?? links[0];

  return (
    <section className="sticky top-0 z-50 bg-bg-primary border-b border-border-primary">
      <div className="px-margin max-w-[1440px] mx-auto py-lg md:py-xl flex items-center gap-[20px] md:gap-0 md:justify-between">

        {/* Desktop links */}
        <div className="hidden lg:flex gap-[40px] items-center">
          {links.map(link => (
            <NavLink key={link.href} link={link} active={activeId === link.href.slice(1)} />
          ))}
        </div>

        {/* Tablet links */}
        <div className="hidden md:flex lg:hidden gap-[16px] items-center">
          {links.map(link => (
            <NavLink key={link.href} link={link} active={activeId === link.href.slice(1)} />
          ))}
        </div>

        {/* Mobile dropdown — flex-1 fills space before CTA */}
        <div ref={dropRef} className="md:hidden flex-1 relative">
          <button
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            className="border border-border-primary flex items-center justify-center gap-xl px-lg py-md w-full max-w-[240px]"
          >
            <span className="flex-1 min-w-0 font-body not-italic text-[16px] leading-normal text-text-primary text-center">
              {activeLink.label}
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 text-text-primary shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {open && (
            <div className="absolute top-full left-0 min-w-full bg-bg-primary border border-border-primary border-t-0 z-10">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-lg py-md font-body not-italic text-[16px] leading-normal ${
                    activeId === link.href.slice(1) ? 'text-text-primary' : 'text-[#696969]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Desktop + tablet: primary CTA */}
        <div className="hidden md:block">
          <ButtonPrimary
            label="Get in touch"
            href="mailto:yolandi.uxdesign@gmail.com"
            className="md:px-2xl md:py-xl lg:px-4xl lg:py-3xl"
          />
        </div>

        {/* Mobile: text-link CTA */}
        <a
          href="mailto:yolandi.uxdesign@gmail.com"
          className="md:hidden shrink-0 text-link font-body not-italic text-[16px] leading-normal text-text-primary"
        >
          Get in touch
        </a>

      </div>
    </section>
  );
}
