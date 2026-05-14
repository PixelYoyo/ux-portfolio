const VALUES = ['Curious', 'Rigorous', 'Kind', 'Beautiful'] as const;

export default function Values() {
  return (
    <section className="bg-bg-primary px-margin lg:px-[128px] pt-7xl">

      {/* Value words — right-aligned, full content width */}
      <div className="flex flex-col items-end">
        {VALUES.map((value) => (
          <p
            key={value}
            className="font-heading font-bold text-heading-l lg:text-heading-xl leading-none uppercase text-text-primary"
            style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
          >
            {value}<span className="text-text-brand">.</span>
          </p>
        ))}
      </div>

      {/* Description — always below headings, left half on desktop */}
      <div className="mt-7xl pb-7xl border-b border-border-primary w-full lg:w-[calc(50%-20px)]">
        <div className="font-body not-italic text-sm lg:text-base text-text-primary">
          <p className="leading-normal mb-lg">
            I&apos;ve always been someone who enjoys making things and looks for
            ways to improve what&apos;s around me. Solving a real need with a
            well-crafted solution is something I genuinely love.
          </p>
          <p className="leading-normal mb-lg">
            Rigorous is how I follow through. I think systematically, sweat the
            details, and hold my work to a high standard, not because I&apos;m
            precious about it, but because I think good design and shipped design
            can be the same thing.
          </p>
          <p className="leading-normal mb-lg">
            Kind and honest is how I show up. To me it&apos;s non-negotiable, in
            how I collaborate, how I give feedback, and how I design for people
            I&apos;ll never meet.
          </p>
          <p className="leading-normal">
            Beautiful is the part I refuse to compromise on. Function without
            craft is a missed opportunity. The details that make something feel
            considered, not just correct, matter to me.
          </p>
        </div>
      </div>

    </section>
  );
}
