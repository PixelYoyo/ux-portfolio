import { values } from '@/content/portfolio';

export default function Values() {
  return (
    <section className="bg-bg-primary px-margin lg:px-[128px] pt-7xl">

      {/* Value words — right-aligned, full content width */}
      <div className="flex flex-col items-end">
        {values.items.map((value) => (
          <p
            key={value}
            className="font-heading font-bold text-heading-l lg:text-heading-xl leading-none lg:tracking-impact uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {value}<span className="text-text-brand">.</span>
          </p>
        ))}
      </div>

      {/* Description — always below headings, left half on desktop */}
      <div className="mt-7xl pb-7xl border-b border-border-primary w-full lg:w-[calc(50%-20px)]">
        <div className="font-body not-italic text-sm lg:text-base text-text-primary">
          {values.description.map((para, i) => (
            <p
              key={i}
              className={`leading-normal${i < values.description.length - 1 ? ' mb-lg' : ''}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

    </section>
  );
}
