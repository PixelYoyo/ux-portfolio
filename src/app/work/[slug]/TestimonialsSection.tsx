'use client';

import { useEffect, useRef, useState } from 'react';
import type { CaseStudyQuote } from '@/content/portfolio';

const CAROUSEL_MS = 4000;
const FADE_MS     = 400;
const TYPE_MS     = 30;

function ThinArrow({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-9 h-9 text-text-primary"
    >
      {direction === 'prev'
        ? <path d="M19 12H5M12 19l-7-7 7-7" />
        : <path d="M5 12h14M12 5l7 7-7 7" />}
    </svg>
  );
}

function ArrowButton({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
      className="relative h-[64px] w-[54px] cursor-pointer flex-shrink-0 overflow-hidden"
    >
      <div className="absolute left-[8px] right-[8px] top-0 bottom-[8px] flex items-center justify-center">
        <ThinArrow direction={direction} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[27px] bg-bg-brand" />
    </button>
  );
}

export default function TestimonialsSection({ quotes }: { quotes: CaseStudyQuote[] }) {
  const [index, setIndex]           = useState(0);
  const [opacity, setOpacity]       = useState(1);
  const [started, setStarted]       = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const indexRef   = useRef(0);
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger typewriter once when section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Type out the first quote character by character
  useEffect(() => {
    if (!started || !quotes[0]) return;
    const fullText = `“${quotes[0].text}”`;
    let count = 0;
    typingRef.current = setInterval(() => {
      count += 1;
      setTypedCount(count);
      if (count >= fullText.length) {
        clearInterval(typingRef.current!);
        typingRef.current = null;
        setTypingDone(true);
      }
    }, TYPE_MS);
    return () => { if (typingRef.current) clearInterval(typingRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  // Start carousel rotation only after typing finishes
  function fadeTo(next: number) {
    if (next === indexRef.current) return;
    setOpacity(0);
    setTimeout(() => {
      indexRef.current = next;
      setIndex(next);
      setOpacity(1);
    }, FADE_MS);
  }

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      fadeTo((indexRef.current + 1) % quotes.length);
    }, CAROUSEL_MS);
  }

  function goTo(i: number) { fadeTo(i); startTimer(); }
  function goPrev() { goTo((indexRef.current - 1 + quotes.length) % quotes.length); }
  function goNext() { goTo((indexRef.current + 1) % quotes.length); }

  useEffect(() => {
    if (typingDone && quotes.length > 1) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typingDone]);

  const quote = quotes[index];
  if (!quote) return null;

  const showNav = quotes.length > 1;

  // What to render as the quote body
  const fullText   = quotes[0] ? `“${quotes[0].text}”` : '';
  const isTyping   = started && !typingDone;
  const quoteBody  = isTyping
    ? <>{fullText.slice(0, typedCount)}<span className="typewriter-cursor" aria-hidden="true">|</span></>
    : <>&ldquo;{quote.text}&rdquo;</>;

  // Attribution fades in after typing completes; stays hidden during typing
  const attrStyle: React.CSSProperties = {
    opacity:    typingDone ? 1 : 0,
    transition: typingDone ? 'opacity 0.6s ease' : 'none',
  };

  return (
    <>
      <style>{`
        @keyframes tw-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .typewriter-cursor { animation: tw-blink 0.8s step-end infinite; }
      `}</style>

      <div ref={sectionRef}>

        {/* ── Desktop ─────────────────────────────────────────────────────── */}
        <section className="hidden lg:block bg-bg-primary pt-7xl">
          <div className="relative pl-10xl pr-margin pb-10xl max-w-[1440px] mx-auto">
            <div
              aria-live="polite"
              aria-atomic="true"
              style={{ opacity, transition: `opacity ${FADE_MS}ms ease` }}
              className="flex flex-col gap-xl max-w-[777px]"
            >
              <p className="font-body not-italic text-[48px] leading-[52px] text-text-primary">
                {quoteBody}
              </p>
              <p className="font-body not-italic text-sm leading-[20px] text-text-primary" style={attrStyle}>
                {quote.attribution}
              </p>
            </div>

            {showNav && (
              <>
                <div className="absolute bottom-[116px] left-[16px] right-[24px] flex items-center justify-between">
                  <ArrowButton direction="prev" onClick={goPrev} />
                  <ArrowButton direction="next" onClick={goNext} />
                </div>
                <div
                  className="absolute bottom-[64px] left-1/2 -translate-x-1/2 flex gap-lg items-center"
                  role="tablist"
                  aria-label="Testimonial navigation"
                >
                  {quotes.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Testimonial ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`size-[16px] border-[0.5px] border-text-primary cursor-pointer transition-colors duration-200 ${
                        i === index ? 'bg-bg-brand' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── Mobile ──────────────────────────────────────────────────────── */}
        <section className="lg:hidden relative bg-bg-primary px-margin pt-7xl pb-[128px]">
          <div
            aria-live="polite"
            aria-atomic="true"
            style={{ opacity, transition: `opacity ${FADE_MS}ms ease` }}
            className="flex flex-col gap-xl w-full min-h-[220px]"
          >
            <p className="font-body not-italic text-[24px] leading-[30px] text-text-primary">
              {quoteBody}
            </p>
            <p className="font-body not-italic text-sm leading-[20px] text-text-primary" style={attrStyle}>
              {quote.attribution}
            </p>
          </div>

          {showNav && (
            <div className="absolute bottom-7xl left-margin right-margin flex gap-md items-center justify-end">
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-lg items-center"
                role="tablist"
                aria-label="Testimonial navigation"
              >
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`size-[16px] border-[0.5px] border-text-primary cursor-pointer transition-colors duration-200 ${
                      i === index ? 'bg-bg-brand' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
              <ArrowButton direction="prev" onClick={goPrev} />
              <ArrowButton direction="next" onClick={goNext} />
            </div>
          )}
        </section>

      </div>
    </>
  );
}
