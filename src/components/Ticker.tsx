const REPEAT = 6; // copies per half — enough to fill any viewport width

interface TickerProps {
  text: string;
}

export default function Ticker({ text }: TickerProps) {
  const items = Array.from({ length: REPEAT }, (_, i) => (
    <span key={i} className="shrink-0">
      {text}
      <span className="text-text-brand">.</span>
      &nbsp;&nbsp;
    </span>
  ));

  return (
    <>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 16s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>

      <section
        className="overflow-hidden bg-bg-primary pt-7xl pb-4xl"
        aria-label={text}
      >
        <div
          className="ticker-track flex whitespace-nowrap font-heading font-bold text-heading-xl tracking-impact leading-none uppercase text-text-primary"
          style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {items}
          <span aria-hidden="true" className="contents">
            {items}
          </span>
        </div>
      </section>
    </>
  );
}
