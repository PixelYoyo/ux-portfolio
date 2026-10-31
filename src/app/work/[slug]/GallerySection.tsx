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

function CloseSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function RotateSvg() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5 shrink-0 text-icon-primary">
      <path d="M18.75 1.32812C19.1406 1.48438 19.375 1.83594 19.375 2.22656V7.8125C19.375 8.32031 18.9453 8.75 18.3984 8.75H12.7734C12.4219 8.75 12.0703 8.55469 11.9141 8.16406C11.7969 7.8125 11.875 7.42188 12.1484 7.14844L14.6875 4.60938C13.3594 3.47656 11.6797 2.8125 9.92188 2.8125C6.36719 2.8125 3.35938 5.35156 2.77344 8.82812C2.77344 8.86719 2.69531 9.10156 2.42188 9.0625C2.26562 9.0625 2.14844 8.86719 2.1875 8.71094C2.8125 4.96094 6.09375 2.1875 9.92188 2.1875C11.8359 2.1875 13.6719 2.89062 15.1172 4.14062L17.6953 1.5625C18.0078 1.28906 18.3984 1.21094 18.75 1.32812ZM18.75 7.8125V2.22656C18.75 1.91406 18.3594 1.79688 18.1641 1.99219L12.5781 7.57812C12.3828 7.77344 12.5 8.16406 12.8125 8.16406H18.3984C18.5938 8.16406 18.75 8.00781 18.75 7.8125ZM17.5391 10.9766C17.6953 10.9766 17.8125 11.1328 17.7734 11.3281C17.1484 15.0781 13.8672 17.8125 10.0391 17.8125C8.125 17.8125 6.28906 17.1484 4.84375 15.8984L2.26562 18.4766C1.95312 18.75 1.5625 18.8672 1.21094 18.7109C0.820312 18.5547 0.625 18.2031 0.625 17.8125V12.2266C0.625 11.7188 1.01562 11.2891 1.5625 11.25H7.14844C7.53906 11.2891 7.89062 11.4844 8.04688 11.8359C8.16406 12.2266 8.08594 12.6172 7.8125 12.8906L5.27344 15.4297C6.60156 16.5625 8.28125 17.1875 10.0391 17.1875C13.5938 17.1875 16.6016 14.6875 17.1875 11.2109C17.1875 11.0547 17.3828 10.9375 17.5391 10.9766ZM1.79688 18.0469L7.38281 12.4609C7.57812 12.2656 7.46094 11.875 7.14844 11.875H1.5625C1.36719 11.875 1.25 12.0312 1.25 12.2266V17.8125C1.25 18.125 1.60156 18.2422 1.79688 18.0469Z" />
    </svg>
  );
}

function PinchSvg() {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" aria-hidden="true" className="shrink-0 text-icon-primary">
      <path d="M12.8804 11.1588V6.75342C12.8804 6.05831 12.312 5.49496 11.6108 5.49496C10.9095 5.49496 10.3409 6.05831 10.3409 6.75342V16.8245C9.27875 14.1156 8.05988 13.6314 7.51927 13.5271C7.03701 13.4317 6.61232 13.5455 6.44668 13.7367C6.08348 14.4168 6.30904 15.0955 6.9729 15.9195C7.87776 17.0429 8.24619 18.1149 8.60259 19.1523C9.0388 20.4227 9.47055 21.6801 10.8744 22.9537C11.9318 23.8705 13.2894 24.3758 14.6943 24.375C18.247 24.375 20.5 21.3388 20.5 16.5506V13.6763C20.5 12.9811 19.9309 12.4175 19.2296 12.4175C18.5283 12.4175 17.9597 12.9811 17.9597 13.6763M12.8804 11.1588C12.8804 10.4637 13.4487 9.90009 14.15 9.90009C14.8513 9.90009 15.4199 10.4637 15.4199 11.1588V12.4178M12.8804 11.1588V14.3055M15.4199 12.4178C15.4199 11.7227 15.9885 11.1591 16.6898 11.1591C17.3911 11.1591 17.9597 11.7227 17.9597 12.4178V13.6763M15.4199 12.4178V14.3055M17.9597 13.6763V14.9438M9.13195 8.56382C8.73683 8.03523 8.52723 7.3964 8.52723 6.75342C8.52723 5.06492 9.90781 3.68975 11.6113 3.68975C13.3148 3.68975 14.7027 5.06492 14.7027 6.75342C14.7027 7.3964 14.4931 8.03523 14.0911 8.56382M9.13169 12.1564C8.60861 11.7805 7.9751 11.5785 7.33244 11.5785C5.62922 11.5785 4.2489 12.9469 4.2489 14.6351C4.2489 16.0671 5.25189 17.3067 6.6623 17.6171M13.6832 2.9355L15.0735 0.375M15.445 1.6013L15.0735 0.375L13.8363 0.743564M5.26131 18.4507L3.87445 21.012M5.10745 20.644L3.87445 21.012L3.5 19.7855" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Rotation helpers ──────────────────────────────────────────────────────────

const MOBILE_QUERY = '(max-width: 1023px) and (pointer: coarse)';

const isMobile = () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches;
const isPortraitViewport = () => window.innerHeight > window.innerWidth;

// iOS only sends motion events after the user grants permission, and the
// request has to come from a tap — so this runs when "Expand gallery" is tapped.
function requestMotionPermission() {
  const DM = (typeof window !== 'undefined' ? window.DeviceMotionEvent : undefined) as
    | (typeof DeviceMotionEvent & { requestPermission?: () => Promise<string> })
    | undefined;
  if (DM?.requestPermission) DM.requestPermission().catch(() => {});
}

// Reads the motion sensor to tell when the phone is physically held sideways,
// even if the screen itself won't rotate (orientation lock is on).
// Returns the angle to rotate the viewer by: 0, 90 or -90.
function usePhysicalRotation(enabled: boolean) {
  const [angle, setAngle] = useState<0 | 90 | -90>(0);

  useEffect(() => {
    if (!enabled) return;
    // iOS reports gravity with the opposite sign to Android; the sign is
    // re-learnt whenever the phone is clearly upright.
    let ySign = /iP(hone|ad|od)/.test(navigator.userAgent) ? -1 : 1;
    let current: 0 | 90 | -90 = 0;
    const THRESHOLD = 7; // m/s², roughly 45° of tilt

    const onMotion = (e: DeviceMotionEvent) => {
      const g = e.accelerationIncludingGravity;
      if (!g || g.x == null || g.y == null) return;
      // The browser rotated the page itself, so no help is needed.
      if (!isPortraitViewport()) {
        if (current !== 0) setAngle((current = 0));
        return;
      }
      const x = g.x * ySign;
      const y = g.y;
      let next = current;
      if (Math.abs(y) > THRESHOLD && Math.abs(y) > Math.abs(x)) {
        if (Math.abs(y * ySign) > THRESHOLD) ySign = Math.sign(y) as 1 | -1;
        next = 0;
      } else if (Math.abs(x) > THRESHOLD && Math.abs(x) > Math.abs(y)) {
        // Right edge down → turn content anticlockwise, left edge down → clockwise.
        next = x < 0 ? -90 : 90;
      }
      if (next !== current) setAngle((current = next));
    };

    const onResize = () => {
      if (!isPortraitViewport() && current !== 0) setAngle((current = 0));
    };

    window.addEventListener('devicemotion', onMotion);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('devicemotion', onMotion);
      window.removeEventListener('resize', onResize);
    };
  }, [enabled]);

  return enabled ? angle : 0;
}

// ── Mobile tips ───────────────────────────────────────────────────────────────

function Toast({
  placement,
  duration,
  dismissed = false,
  dismissOnOutsideTap = false,
  dismissOnTurn = false,
  hug = false,
  bottomOffset = 'calc(env(safe-area-inset-bottom) + 16px)',
  onGone,
  icon,
  children,
}: {
  placement: 'top' | 'bottom';
  duration: number;
  dismissed?: boolean;
  dismissOnOutsideTap?: boolean;
  dismissOnTurn?: boolean;
  hug?: boolean;
  bottomOffset?: string;
  onGone: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const [shown, setShown] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  // Slide in on the frame after mounting so the transition runs
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Slide back out after the duration, plus any optional triggers
  useEffect(() => {
    const hide = () => setShown(false);
    const timer = window.setTimeout(hide, duration);
    const onPointer = (e: PointerEvent) => {
      if (!toastRef.current?.contains(e.target as Node)) hide();
    };
    const onResize = () => { if (!isPortraitViewport()) hide(); };
    if (dismissOnOutsideTap) document.addEventListener('pointerdown', onPointer);
    if (dismissOnTurn) window.addEventListener('resize', onResize);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', onResize);
    };
  }, [duration, dismissOnOutsideTap, dismissOnTurn]);

  const visible = shown && !dismissed;
  const hiddenOffset = placement === 'top' ? '-translate-y-[calc(100%+80px)]' : 'translate-y-[calc(100%+80px)]';

  return (
    <div
      ref={toastRef}
      role="status"
      aria-live="polite"
      onTransitionEnd={() => { if (!visible) onGone(); }}
      className={`lg:hidden absolute z-[60] flex ${hug ? 'left-1/2 -translate-x-1/2 w-max max-w-[calc(100%-40px)]' : 'left-margin right-margin'} items-center justify-center gap-md bg-bg-brand px-xl py-lg pointer-events-none transition-transform duration-300 ease-out ${visible ? 'translate-y-0' : hiddenOffset}`}
      style={
        placement === 'top'
          ? { top: 'calc(env(safe-area-inset-top) + 16px)' }
          : { bottom: bottomOffset }
      }
    >
      {icon}
      <p className="font-body not-italic text-sm leading-[20px] text-text-primary text-center">
        {children}
      </p>
    </div>
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

  // Turn the viewer when the phone is held sideways, even with rotation locked
  const [mobile] = useState(isMobile);
  const angle = usePhysicalRotation(mobile);
  const angleRef = useRef(angle);
  useEffect(() => { angleRef.current = angle; }, [angle]);

  // Show the rotate tip on mobile when opened in portrait
  const [toastOpen, setToastOpen] = useState(() => mobile && isPortraitViewport());

  // Pinch tip: appears shortly after the phone is turned or the rotate tip goes,
  // and leaves after 4s or as soon as the user starts to zoom
  const [pinchOpen, setPinchOpen] = useState(false);
  const [pinchDone, setPinchDone] = useState(false);
  const [pinchDismissed, setPinchDismissed] = useState(false);

  useEffect(() => {
    if (!mobile || pinchOpen || pinchDone || pinchDismissed) return;
    if (toastOpen && angle === 0) return;
    const timer = window.setTimeout(() => setPinchOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, [mobile, toastOpen, angle, pinchOpen, pinchDone, pinchDismissed]);

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
      setPinchDismissed(true);
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
      const dx = e.touches[0].clientX - dragRef.current.startX;
      const dy = e.touches[0].clientY - dragRef.current.startY;
      // Map finger movement into the viewer's own (possibly rotated) axes
      const a = angleRef.current;
      const [lx, ly] = a === 90 ? [dy, -dx] : a === -90 ? [-dy, dx] : [dx, dy];
      applyZoom({
        scale: zoomRef.current.scale,
        x: dragRef.current.originX + lx,
        y: dragRef.current.originY + ly,
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

  const rotatedStyle: React.CSSProperties | undefined = angle
    ? {
        inset: 'auto',
        top: '50%',
        left: '50%',
        width: '100dvh',
        height: '100dvw',
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }
    : undefined;

  return (
    <>
    {toastOpen && (
      <div className="fixed inset-0 z-[60] pointer-events-none">
        <Toast
          placement="top"
          duration={3000}
          dismissed={angle !== 0}
          dismissOnOutsideTap
          dismissOnTurn
          onGone={() => setToastOpen(false)}
          icon={<RotateSvg />}
        >
          Rotate your phone sideways
        </Toast>
      </div>
    )}
    <div
      className="fixed inset-0 z-50 bg-bg-primary flex flex-col"
      style={rotatedStyle}
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

        {/* Inside the image area so it sits above the arrows and dots, and stays at the visual bottom when rotated */}
        {pinchOpen && (
          <Toast
            placement="bottom"
            hug
            bottomOffset={images.length > 1 ? '16px' : undefined}
            duration={4000}
            dismissed={pinchDismissed}
            onGone={() => { setPinchOpen(false); setPinchDone(true); }}
            icon={<PinchSvg />}
          >
            Pinch to zoom
          </Toast>
        )}
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
    </>
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

            {/* Image with expand link above */}
            <div className="flex flex-col items-end gap-3 w-full">
              <button
                onClick={() => {
                  if (isMobile()) requestMotionPermission();
                  setLightboxOpen(true);
                }}
                className="text-link font-body not-italic text-base text-text-primary cursor-pointer"
              >
                Expand gallery
              </button>
              <div className="relative w-full aspect-[3/2]">
                {image.src ? (
                  <Image src={image.src} alt={image.alt} fill quality={90} className="object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-[#c6c6c6]" />
                )}
              </div>
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
