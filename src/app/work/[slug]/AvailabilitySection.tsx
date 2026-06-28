type CaseStudyLinkGroup = { category: string; links: { label: string; href: string }[] };

export default function AvailabilitySection({ linkGroups }: { linkGroups: CaseStudyLinkGroup[] }) {
  return (
    <section className="bg-bg-primary py-4xl">
      <div className="px-margin max-w-[1440px] mx-auto flex flex-col gap-[20px] lg:flex-row-reverse lg:items-start">

        {/* Heading — top on mobile, right on desktop (flex-row-reverse) */}
        <p
          className="font-heading font-medium text-heading-m leading-[28px] uppercase text-text-primary lg:font-semibold lg:text-heading-l lg:leading-[44px] lg:flex-1 lg:text-right"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          Availability<span className="text-text-brand">.</span>
        </p>

        {/* Link groups — below on mobile, left on desktop */}
        <div className="flex flex-col lg:w-[670px] lg:shrink-0">
          {linkGroups.map((group, i) => (
            <div key={i} className="border-b border-border-primary flex flex-col gap-lg pt-lg pb-6xl lg:pb-7xl">
              <p className="font-body font-bold text-[12px] uppercase text-text-primary leading-normal">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-lg">
                {group.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tertiary font-body not-italic text-sm leading-[20px] text-text-primary px-lg py-md"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
