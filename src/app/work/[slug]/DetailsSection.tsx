type CaseStudyDetail = { label: string; value: string };

export default function DetailsSection({ details }: { details: CaseStudyDetail[] }) {
  return (
    <section className="hidden md:block bg-bg-primary py-4xl">
      <div className="px-margin max-w-[1440px] mx-auto flex flex-col gap-[24px] lg:flex-row lg:items-start lg:justify-between lg:gap-[20px]">

        <p
          className="flex-1 font-heading font-semibold text-heading-l leading-[44px] uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          Project details<span className="text-text-brand">.</span>
        </p>

        <div className="flex flex-col w-full lg:w-[670px] lg:shrink-0">
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

      </div>
    </section>
  );
}
