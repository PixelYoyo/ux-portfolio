const LOGOS = [
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459635/Goodman_logo_eicqy2.png',       alt: 'Goodman',       w: 46.2,   h: 46.2   },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459635/dexus_logo_xs86dh.png',         alt: 'Dexus',         w: 110.88, h: 29.684 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459636/novo_nordisk_logo_jfhrsw.png',  alt: 'Novo Nordisk',  w: 71.94,  h: 52.719 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459634/cadbury_logo_hirwfm.png',       alt: 'Cadbury',       w: 88.11,  h: 33.031 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459635/kfc_logo_i0dkrc.png',           alt: 'KFC',           w: 49.17,  h: 49.361 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459635/ing_logo_ovxuw0.png',           alt: 'ING',           w: 124.74, h: 29.723 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459637/spotify_logo_ah6po3.png',       alt: 'Spotify',       w: 113,    h: 34     },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459635/lululemon_logo_mu3xaz.png',     alt: 'lululemon',     w: 185.46, h: 39.565 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459635/minterelllison_logo_reibci.png',alt: 'MinterEllison', w: 205.92, h: 32.986 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459638/omoda_jaecoo_logo_holn6q.png',  alt: 'Omoda Jaecoo',  w: 347.49, h: 32.986 },
  { src: 'https://res.cloudinary.com/drd6p33en/image/upload/v1783459636/Dan_murphys_logo_j7smob.png',   alt: "Dan Murphy's",  w: 188,    h: 32     },
];

function LogoStrip({ hidden }: { hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden}
      className="flex items-center gap-[24px] lg:gap-[48px] pr-[24px] lg:pr-[48px] shrink-0"
    >
      {LOGOS.map((logo, i) => (
        <div key={i} className="shrink-0" style={{ width: logo.w, height: logo.h }}>
          <img
            src={logo.src}
            alt={hidden ? '' : logo.alt}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </span>
  );
}

export default function LogoTicker() {
  return (
    <>
      <style>{`
        @keyframes logo-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-ticker-track {
          animation: logo-ticker 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-ticker-track { animation: none; }
        }
      `}</style>

      <section
        className="bg-bg-primary overflow-x-hidden py-[40px] lg:py-[64px] flex flex-col gap-[24px]"
        aria-label="Brands I've worked with"
      >
        <p className="px-margin font-body font-bold not-italic text-xs uppercase text-text-primary shrink-0">
          Brands I&apos;ve worked with
        </p>

        <div className="logo-ticker-track flex items-center w-max">
          <LogoStrip />
          <LogoStrip hidden />
        </div>
      </section>
    </>
  );
}
