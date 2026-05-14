import Image from 'next/image';
import { hero } from '@/content/portfolio';

export default function Hero() {
  return (
    <section
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
          {hero.heading}<span className="text-text-brand">.</span>
        </h1>

        <div className="font-body not-italic text-base lg:text-heading-s">
          {hero.bio.map((para, i) => (
            <p
              key={i}
              className={`leading-normal lg:leading-[30px]${i < hero.bio.length - 1 ? ' mb-lg lg:mb-[28px]' : ''}`}
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
          src={hero.profileImageSrc}
          alt={hero.profileImageAlt}
          fill
          className="object-cover object-[center_top]"
          priority
        />
      </div>
    </section>
  );
}

function ScrollIndicator() {
  return (
    <>
      <style>{`
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .scroll-indicator-arrow {
          animation: scroll-bounce 1.5s ease-in-out infinite;
        }
        @keyframes highlight-draw {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .scroll-indicator-highlight {
          transform-box: fill-box;
          transform-origin: left center;
          animation: highlight-draw 0.7s ease-out forwards;
        }
      `}</style>
      <svg
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-11 lg:w-16 h-auto shrink-0"
        aria-hidden="true"
      >
        <rect className="scroll-indicator-highlight" y="29" width="64" height="27" fill="#00FFA3" />
        <path
          className="scroll-indicator-arrow"
          d="M48.5 28.875L32.4688 44.8125C32.1875 45.0938 31.7188 45.0938 31.4375 44.8125L15.4062 28.875C15.125 28.5 15.125 28.0312 15.4062 27.75C15.6875 27.4688 16.25 27.4688 16.5312 27.75L31.1562 42.4688V3.84375C31.1562 3.375 31.5312 3.09375 32 3.09375C32.375 3.09375 32.75 3.375 32.75 3.84375V42.4688L47.375 27.75C47.75 27.4688 48.2188 27.4688 48.5 27.75C48.7812 28.0312 48.7812 28.5 48.5 28.875Z"
          fill="#0D0D0D"
        />
      </svg>
    </>
  );
}
