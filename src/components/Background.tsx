import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';
import { background } from '@/content/portfolio';

export default function Background() {
  return (
    <section className="bg-bg-primary px-margin pt-4xl pb-7xl flex flex-col items-end">
      <div className="flex flex-col gap-6xl lg:gap-7xl w-full lg:w-[690px]">

        {/* Job listings */}
        {background.jobs.map((job) => (
          <div
            key={job.company}
            className="flex flex-col gap-2xl border-b border-border-primary pb-5xl"
          >
            {/* Logo + title */}
            <div className="flex flex-col gap-xxs">
              <div className="h-8 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={job.logoSrc}
                  alt={job.logoAlt}
                  width={job.logoWidth}
                  height={job.logoHeight}
                  className="object-contain max-h-full"
                />
              </div>
              <p
                className="font-heading font-medium lg:font-semibold text-heading-m lg:text-heading-l leading-[28px] lg:leading-[44px] uppercase text-text-primary"
                style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
              >
                {job.title}
              </p>
            </div>

            {/* Period + description */}
            <div className="flex flex-col gap-md text-text-primary">
              <p className="font-body font-bold not-italic text-xs uppercase leading-none">
                {job.period}
              </p>
              <p className="font-body not-italic text-sm leading-[20px]">
                {job.description}
              </p>
            </div>
          </div>
        ))}

        {/* CTAs */}
        <div className="flex flex-col lg:flex-row gap-[12px] w-full lg:w-auto lg:self-end">
          <ButtonPrimary
            label="Download resume"
            href={background.resumeHref}
            className="w-full lg:w-auto"
          />
          <ButtonSecondary
            label="Visit LinkedIn profile"
            href={background.linkedinHref}
            external
            className="w-full lg:w-auto"
          />
        </div>

      </div>
    </section>
  );
}
