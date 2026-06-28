'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
type FooterContent = {
  name:      string;
  currently: { role: string; location: string };
  contact:   { linkedinLabel: string; linkedinHref: string; emailLabel: string; emailHref: string };
  copyright: string;
};

export default function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="bg-bg-primary px-margin pt-4xl lg:pt-7xl pb-2xl flex flex-col gap-[40px]">

      {/* ── Name with top border ──────────────────────────────── */}
      <div className="border-t border-border-primary pt-[16px]">
        <p
          className="font-heading font-medium lg:font-semibold text-[28px] lg:text-[40px] leading-[28px] lg:leading-[44px] uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {content.name}<span className="text-text-brand">.</span>
        </p>
      </div>

      {/* ── Data points ───────────────────────────────────────── */}
      <div className="flex flex-col gap-[64px]">

        {/* Currently */}
        <div className="flex flex-col">
          <p className="font-body font-bold not-italic text-xs uppercase text-text-primary pb-[8px]">
            Currently
          </p>
          <div className="flex items-center justify-between font-body not-italic text-base text-text-primary">
            <p>{content.currently.role}</p>
            <p className="text-right">{content.currently.location}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <p className="font-body font-bold not-italic text-xs uppercase text-text-primary pb-[8px]">
            Contact
          </p>
          <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-[24px]">
            <Link
              href={content.contact.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[8px] font-body not-italic text-base text-text-primary self-start"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="flex-shrink-0" />
              <span className="text-link">{content.contact.linkedinLabel}</span>
            </Link>
            <a
              href={content.contact.emailHref}
              className="flex items-center gap-[8px] font-body not-italic text-base text-text-primary self-start"
            >
              <FontAwesomeIcon icon={faEnvelope} className="flex-shrink-0" />
              <span className="text-link">{content.contact.emailLabel}</span>
            </a>
          </div>
        </div>

      </div>

      {/* ── Attribution ───────────────────────────────────────── */}

      {/* Mobile: stacked column */}
      <div className="flex flex-col gap-[12px] pt-[48px] lg:hidden">
        <div className="flex items-center gap-[8px]">
          <FontAwesomeIcon icon={faCode} className="size-[16px] text-text-primary" />
          <p className="font-body not-italic text-xs text-text-primary">Developed with Claude Code</p>
        </div>
        <div className="flex items-center gap-[4px]">
          <FontAwesomeIcon icon={faUser} className="size-[16px] text-text-primary" />
          <p className="font-body not-italic text-xs text-text-primary">Content &amp; design by a human</p>
        </div>
        <p className="font-body not-italic text-xs text-text-primary">{content.copyright}</p>
      </div>

      {/* Desktop: left / center (absolute) / right */}
      <div className="hidden lg:flex items-center justify-between relative pt-[120px]">
        <div className="flex items-center gap-[8px]">
          <FontAwesomeIcon icon={faCode} className="size-[16px] text-text-primary" />
          <p className="font-body not-italic text-xs text-text-primary">Developed with Claude Code</p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[4px]">
          <FontAwesomeIcon icon={faUser} className="size-[16px] text-text-primary" />
          <p className="font-body not-italic text-xs text-text-primary">Content &amp; design by a human</p>
        </div>
        <p className="font-body not-italic text-xs text-text-primary text-right">{content.copyright}</p>
      </div>

    </footer>
  );
}
