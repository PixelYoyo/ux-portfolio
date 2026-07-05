'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type CaseStudyGalleryImage = { src: string; alt: string; caption: string };

// ── Icons ─────────────────────────────────────────────────────────────────────

function ArrowLeftSvg() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="40" y1="24" x2="8" y2="24" />
      <polyline points="20,12 8,24 20,36" />
    </svg>
  );
}

function ArrowRightSvg() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="8" y1="24" x2="40" y2="24" />
      <polyline points="28,12 40,24 28,36" />
    </svg>
  );
}

function ExpandSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-5">
      <polyline points="15,3 21,3 21,9" />
      <polyline points="9,21 3,21 3,15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function CloseSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Shared components ─────────────────────────────────────────────────────────

function ArrowButton({
  direction,
  onClick,
  light = false,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  light?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous image' : 'Next image'}
      className={`relative h-[56px] w-[64px] shrink-0 ${light ? 'text-white' : 'text-icon-primary'}`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-[27px] bg-bg-brand" />
      <div className="absolute top-0 left-[8px] bottom-[8px] w-[48px] flex items-center justify-center">
        <div className="size-[48px]">
          {direction === 'prev' ? <ArrowLeftSvg /> : <ArrowRightSvg />}
        </div>
      </div>
    </button>
  );
}

function Dots({
  count,
  current,
  light = false,
}: {
  count: number;
  current: number;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-lg">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={`size-[16px] border-[0.5px] border-solid ${light ? 'border-white' : 'border-text-primary'}${i === current ? ' bg-bg-brand' : ''}`}
        />
      ))}
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  current,
  onClose,
  onPrev,
  onNext,
}: {
  images: CaseStudyGalleryImage[];
  current: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // Zoom state — kept in both ref (for event handlers) and state (for rendering)
  const zoomRef = useRef({ scale: 1, x: 0, y: 0 });
  const [zoom, setZoom] = useState({ scale: 1, x: 0, y: 0 });

  const applyZoom = (next: { scale: number; x: number; y: number }) => {
    zoomRef.current = next;
    setZoom(next);
  };

  // Touch tracking refs
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);
  const dragRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);

  // Reset zoom when the image changes
  useEffect(() => {
    applyZoom({ scale: 1, x: 0, y: 0 });
  }, [current]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Unlock screen orientation so the device can rotate freely
  useEffect(() => {
    try { screen.orientation?.unlock(); } catch { /* not supported in all browsers */ }
  }, []);

  const getTouchDist = (a: React.Touch, b: React.Touch) =>
    Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchRef.current = { dist: getTouchDist(e.touches[0], e.touches[1]), scale: zoomRef.current.scale };
      dragRef.current = null;
    } else if (e.touches.length === 1) {
      dragRef.current = {
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        originX: zoomRef.current.x,
        originY: zoomRef.current.y,
      };
      pinchRef.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      const dist = getTouchDist(e.touches[0], e.touches[1]);
      const next = Math.min(Math.max(pinchRef.current.scale * (dist / pinchRef.current.dist), 1), 5);
      applyZoom({ scale: next, x: next === 1 ? 0 : zoomRef.current.x, y: next === 1 ? 0 : zoomRef.current.y });
    } else if (e.touches.length === 1 && dragRef.current && zoomRef.current.scale > 1) {
      applyZoom({
        scale: zoomRef.current.scale,
        x: dragRef.current.originX + (e.touches[0].clientX - dragRef.current.startX),
        y: dragRef.current.originY + (e.touches[0].clientY - dragRef.current.startY),
      });
    }
  };

  const handleTouchEnd = () => {
    pinchRef.current = null;
    dragRef.current = null;
    // Snap back to 1× if nearly unzoomed
    if (zoomRef.current.scale < 1.15) {
      applyZoom({ scale: 1, x: 0, y: 0 });
    }
  };

  const isZoomed = zoom.scale !== 1 || zoom.x !== 0 || zoom.y !== 0;
  const image = images[current];

  return (
    <div
      className="fixed inset-0 z-50 bg-bg-primary flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
    >
      {/* Top bar */}
      <div className="flex justify-end px-4 pt-4 pb-2 shrink-0">
        <button
          onClick={onClose}
          aria-label="Close fullscreen"
          className="size-[48px] text-icon-primary flex items-center justify-center"
        >
          <CloseSvg />
        </button>
      </div>

      {/* Image — touch-action: none so we own all gestures */}
      <div
        className="flex-1 relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'none' }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale})`,
            transformOrigin: 'center',
            transition: isZoomed ? 'none' : 'transform 0.25s ease',
            willChange: 'transform',
          }}
        >
          {image.src ? (
            <Image src={image.src} alt={image.alt} fill className="object-contain" />
          ) : (
            <div className="absolute inset-0 bg-[#c6c6c6]" />
          )}
        </div>
      </div>

      {/* Bottom controls */}
      {images.length > 1 && (
        <div className="shrink-0 flex items-center justify-between px-margin py-lg">
          <ArrowButton direction="prev" onClick={onPrev} />
          <Dots count={images.length} current={current} />
          <ArrowButton direction="next" onClick={onNext} />
        </div>
      )}
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────

export default function GallerySection({ images }: { images: CaseStudyGalleryImage[] }) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const image = images[current];

  return (
    <>
      <section className="bg-bg-primary pt-4xl pb-7xl lg:py-7xl">

        <div className="px-margin max-w-[1440px] mx-auto lg:grid lg:grid-cols-[64px_1fr_64px] lg:gap-[40px] lg:items-center">

          <div className="hidden lg:block">
            {images.length > 1 && <ArrowButton direction="prev" onClick={prev} />}
          </div>

          <div className="flex flex-col gap-lg lg:gap-[20px]">

            {/* Image with expand button */}
            <div className="relative w-full aspect-[3/2]">
              {image.src ? (
                <Image src={image.src} alt={image.alt} fill quality={90} className="object-cover" />
              ) : (
                <div className="absolute inset-0 bg-[#c6c6c6]" />
              )}
              <button
                onClick={() => setLightboxOpen(true)}
                aria-label="View fullscreen"
                className="absolute top-3 right-3 size-[36px] bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ExpandSvg />
              </button>
            </div>

            <p className="lg:hidden font-body not-italic text-sm leading-[20px] text-text-primary text-center w-full">
              {image.caption}
            </p>

            <div className="hidden lg:flex items-start gap-[20px]">
              {images.length > 1 && <Dots count={images.length} current={current} />}
              <p className="flex-1 min-w-0 font-body not-italic text-sm leading-[20px] text-text-primary text-right break-words">
                {image.caption}
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            {images.length > 1 && <ArrowButton direction="next" onClick={next} />}
          </div>
        </div>

        {images.length > 1 && (
          <div className="px-margin max-w-[1440px] mx-auto lg:hidden flex items-end justify-between">
            <ArrowButton direction="prev" onClick={prev} />
            <Dots count={images.length} current={current} />
            <ArrowButton direction="next" onClick={next} />
          </div>
        )}

      </section>

      {lightboxOpen && (
        <Lightbox
          images={images}
          current={current}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
