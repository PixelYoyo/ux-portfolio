'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import type { CaseStudyGridImage } from '@/content/portfolio';

export default function ImageGridSection({ images }: { images: CaseStudyGridImage[] }) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Each image transitions from blur(8px)/opacity 0.6 → blur(0)/opacity 1.
  // Delay is based on the image's position in the images array so desktop
  // columns (even/odd indices) interleave naturally: 0s, 0.15s, 0.3s, …
  const imgStyle = (index: number): React.CSSProperties => ({
    filter:           visible ? 'blur(0px)' : 'blur(8px)',
    opacity:          visible ? 1 : 0.6,
    transition:       'filter 0.8s ease, opacity 0.8s ease',
    transitionDelay:  visible ? `${index * 0.15}s` : '0s',
  });

  const col1 = images.filter((_, i) => i % 2 === 0);
  const col2 = images.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-bg-primary py-7xl">
      <div ref={containerRef} className="px-margin max-w-[1440px] mx-auto">

        {/* Mobile: single column */}
        <div className="flex flex-col gap-[20px] md:hidden">
          {[...col1, ...col2].map((img, displayIdx) => (
            <div
              key={displayIdx}
              className="relative w-full aspect-[3/2] border border-[rgba(105,105,105,0.2)]"
              style={imgStyle(displayIdx)}
            >
              <Image src={img.src} alt={img.alt} fill quality={90} className="object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop: two staggered columns, interleaved delays */}
        <div className="hidden md:flex gap-[20px] items-start">
          <div className="flex flex-1 flex-col gap-[32px]">
            {col1.map((img, i) => (
              <div
                key={i}
                className="relative w-full aspect-[3/2] border border-[rgba(105,105,105,0.2)]"
                style={imgStyle(i * 2)}
              >
                <Image src={img.src} alt={img.alt} fill quality={90} className="object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-[32px] pt-[80px]">
            {col2.map((img, i) => (
              <div
                key={i}
                className="relative w-full aspect-[3/2] border border-[rgba(105,105,105,0.2)]"
                style={imgStyle(i * 2 + 1)}
              >
                <Image src={img.src} alt={img.alt} fill quality={90} className="object-cover" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
