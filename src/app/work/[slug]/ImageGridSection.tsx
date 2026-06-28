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

  const imgStyle = (index: number): React.CSSProperties => ({
    opacity:          visible ? 1 : 0,
    transform:        visible ? 'translateY(0)' : 'translateY(30px)',
    transition:       'opacity 0.7s ease-out, transform 0.7s ease-out',
    transitionDelay:  visible ? `${index * 0.2}s` : '0s',
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
              className="relative w-full aspect-[3/2]"
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
                className="relative w-full aspect-[3/2]"
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
                className="relative w-full aspect-[3/2]"
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
