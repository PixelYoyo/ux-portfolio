'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
type NavLink = { label: string; href: string };

type NavProps = {
  logoName: string;
  links:    NavLink[];
};

const TYPE_MS   = 60;
const DELETE_MS = 40;
const AUTO_HIDE_MS = 5000; // hide again this long after the user stops scrolling up
const SCROLL_SLACK = 4;    // ignore tiny scroll jitters (px)

// Hides the nav while scrolling down and brings it back when scrolling up.
// Publishes its visible height as --top-nav-offset so sticky bars below it
// (like the case study anchor nav) can stack underneath.
function useScrollReveal() {
  const headerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const hoverRef = useRef(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    let lastY = window.scrollY;

    const show = (v: boolean) => {
      visibleRef.current = v;
      setVisible(v);
    };
    const clearHide = () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = null;
    };
    const scheduleHide = () => {
      clearHide();
      hideTimer.current = setTimeout(() => {
        if (!hoverRef.current && window.scrollY > el.offsetHeight) show(false);
      }, AUTO_HIDE_MS);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (y <= el.offsetHeight) {
        clearHide();
        if (!visibleRef.current) show(true);
      } else if (delta > SCROLL_SLACK) {
        clearHide();
        if (visibleRef.current) show(false);
      } else if (delta < -SCROLL_SLACK) {
        if (!visibleRef.current) show(true);
        scheduleHide();
      } else {
        return; // too small to count; keep lastY so slow scrolls still add up
      }
      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearHide();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Keep --top-nav-offset in sync with visibility and the nav's height
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty('--top-nav-offset', visible ? `${el.offsetHeight}px` : '0px');
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visible]);

  // Don't hide while the pointer is over the nav
  const onPointerEnter = () => {
    hoverRef.current = true;
    if (hideTimer.current) clearTimeout(hideTimer.current);
  };
  const onPointerLeave = () => {
    hoverRef.current = false;
    const el = headerRef.current;
    if (!el || window.scrollY <= el.offsetHeight) return;
    hideTimer.current = setTimeout(() => {
      if (!hoverRef.current) { visibleRef.current = false; setVisible(false); }
    }, AUTO_HIDE_MS);
  };

  return { headerRef, visible, onPointerEnter, onPointerLeave };
}

export default function Navigation({ logoName, links }: NavProps) {
  const logoSuffix = logoName.slice(1);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const dirRef   = useRef<'typing' | 'deleting' | 'idle'>('idle');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clear() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function tick() {
    if (dirRef.current === 'typing' && countRef.current < logoSuffix.length) {
      countRef.current++;
      setCount(countRef.current);
      timerRef.current = setTimeout(tick, TYPE_MS);
    } else if (dirRef.current === 'deleting' && countRef.current > 0) {
      countRef.current--;
      setCount(countRef.current);
      timerRef.current = setTimeout(tick, DELETE_MS);
    }
  }

  function handleMouseEnter() {
    clear();
    dirRef.current = 'typing';
    tick();
  }

  function handleMouseLeave() {
    clear();
    dirRef.current = 'deleting';
    tick();
  }

  useEffect(() => clear, []);

  const { headerRef, visible, onPointerEnter, onPointerLeave } = useScrollReveal();

  return (
    <header
      ref={headerRef}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onFocus={onPointerEnter}
      className={`sticky top-0 z-[45] transition-transform duration-300 ease-out motion-reduce:transition-none ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
    <nav className="w-full bg-bg-primary flex items-center justify-between px-margin py-lg whitespace-nowrap">
      <Link
        href="/"
        className="shrink-0 font-heading font-medium text-heading-m uppercase text-text-primary"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`${logoName} — home`}
      >
        {logoName[0]}{logoSuffix.slice(0, count)}<span className="text-text-brand">.</span>
      </Link>
      <div className="flex items-center gap-5xl shrink-0 font-body text-xs not-italic text-text-primary">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="relative isolate group">
            {link.label}
            <span aria-hidden="true" className="absolute left-0 -z-10 h-[6px] w-full origin-left scale-x-0 bg-text-brand transition-transform duration-300 ease-out group-hover:scale-x-100" style={{ top: 'calc(50% + 3px)' }} />
          </Link>
        ))}
      </div>
    </nav>
    </header>
  );
}
