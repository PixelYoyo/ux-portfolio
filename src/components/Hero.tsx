import Image from 'next/image';
import ScrollIndicator from '@/components/ScrollIndicator';

type HeroProps = {
  heading:         string;
  bio:             string[];
  profileImageSrc: string;
  profileImageAlt: string;
};

export default function Hero({ heading, bio, profileImageSrc, profileImageAlt }: HeroProps) {
  return (
    <section
      id="hero"
      className="
        relative flex flex-col overflow-hidden bg-bg-primary
        pt-3xl px-margin gap-3xl
        lg:pt-6xl lg:pl-margin lg:pr-[651px] lg:pb-4xl lg:gap-0 lg:justify-between lg:min-h-[calc(100vh-52px)]
      "
    >
      {/* Text block */}
      <div className="flex flex-col gap-xl lg:gap-3xl text-text-primary w-full lg:max-w-[690px]">
        <h1
          className="font-heading font-bold text-[64px] lg:text-[80px] leading-none uppercase"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {heading}<span className="text-text-brand">.</span>
        </h1>

        <div className="font-body not-italic text-base lg:text-heading-s">
          {bio.map((para, i) => (
            <p
              key={i}
              className={`leading-normal lg:leading-[30px]${i < bio.length - 1 ? ' mb-lg lg:mb-[28px]' : ''}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Photo — in-flow on mobile, absolute bottom-right on desktop */}
      <div
        className="
          relative w-full aspect-[399/374] shrink-0 overflow-hidden
          lg:aspect-auto lg:absolute lg:bottom-0 lg:right-0 lg:h-[610px] lg:w-[651px]
        "
      >
        <Image
          src={profileImageSrc}
          alt={profileImageAlt}
          fill
          className="object-cover object-[center_top]"
          priority
        />
      </div>
    </section>
  );
}
