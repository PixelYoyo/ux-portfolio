'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const SUFFIX     = 'olandi Lehner';
const TYPE_MS    = 60;
const DELETE_MS  = 40;

export default function Navigation() {
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
    if (dirRef.current === 'typing' && countRef.current < SUFFIX.length) {
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

  return (
    <nav className="w-full bg-bg-primary flex items-center justify-between px-margin py-lg whitespace-nowrap">
      <Link
        href="/"
        className="shrink-0 font-heading font-medium text-heading-m uppercase text-text-primary"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Yolandi Lehner — home"
      >
        Y{SUFFIX.slice(0, count)}<span className="text-text-brand">.</span>
      </Link>
      <div className="flex items-center gap-5xl shrink-0 font-body text-xs not-italic text-text-primary">
        <Link href="/work" className="relative group">
          Work
          <span aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-text-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </Link>
        <Link href="/contact" className="relative group">
          Contact
          <span aria-hidden="true" className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-text-brand transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </Link>
      </div>
    </nav>
  );
}
