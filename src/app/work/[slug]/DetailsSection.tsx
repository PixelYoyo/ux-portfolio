import type { CaseStudyDetail, CaseStudyLinkGroup } from '@/content/portfolio';

export default function DetailsSection({
  details,
  linkGroups,
}: {
  details:    CaseStudyDetail[];
  linkGroups: CaseStudyLinkGroup[];
}) {
  return (
    <>
      {/* ── Desktop: project metadata table ───────────────────────────────── */}
      <section className="hidden lg:flex items-start justify-between bg-bg-primary px-margin py-4xl gap-[20px]">

        <p
          className="flex-1 font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          Project details<span className="text-text-brand">.</span>
        </p>

        <div className="flex flex-col w-[670px] shrink-0">
          {details.map((row, i) => (
            <div key={i} className="border-b border-border-primary flex gap-lg items-center py-lg">
              <div className="w-[140px] shrink-0">
                <p className="font-body font-bold text-[12px] uppercase text-text-primary leading-normal">
                  {row.label}
                </p>
              </div>
              <p className="flex-1 font-body not-italic text-base leading-normal text-text-primary">
                {row.value}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── Mobile: availability link groups ──────────────────────────────── */}
      <section className="flex flex-col gap-[20px] bg-bg-primary px-margin py-4xl lg:hidden">

        <p
          className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          Availability<span className="text-text-brand">.</span>
        </p>

        <div className="flex flex-col">
          {linkGroups.map((group, i) => (
            <div key={i} className="border-b border-border-primary flex flex-col gap-lg pt-lg pb-6xl">
              <p className="font-body font-bold text-[12px] uppercase text-text-primary leading-normal">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-[24px]">
                {group.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target={link.href !== '#' ? '_blank' : undefined}
                    rel={link.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="text-link font-body not-italic text-sm leading-[20px] text-text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
