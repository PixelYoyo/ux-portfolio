'use client';

import { useEffect, useRef, useState } from 'react';

export const HOVER_TEXT = '→ DIVE IN';

const DELETE_MS = 40;
const TYPE_MS   = 50;

type Phase = 'idle' | 'del-orig' | 'type-hover' | 'del-hover' | 'type-orig';

export function useTypewriter(originalText: string) {
  const [displayed, setDisplayed] = useState(originalText);
  const [active, setActive]       = useState(false);

  const timer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textRef = useRef(originalText);
  const phase   = useRef<Phase>('idle');

  function clearTimer() {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function update(next: string) {
    textRef.current = next;
    setDisplayed(next);
  }

  function tick() {
    switch (phase.current) {
      case 'del-orig':
        if (textRef.current.length > 0) {
          update(textRef.current.slice(0, -1));
          timer.current = setTimeout(tick, DELETE_MS);
        } else {
          phase.current = 'type-hover';
          timer.current = setTimeout(tick, TYPE_MS);
        }
        break;

      case 'type-hover':
        if (textRef.current.length < HOVER_TEXT.length) {
          update(HOVER_TEXT.slice(0, textRef.current.length + 1));
          timer.current = setTimeout(tick, TYPE_MS);
        } else {
          phase.current = 'idle';
          setActive(false);
        }
        break;

      case 'del-hover':
        if (textRef.current.length > 0) {
          update(textRef.current.slice(0, -1));
          timer.current = setTimeout(tick, DELETE_MS);
        } else {
          phase.current = 'type-orig';
          timer.current = setTimeout(tick, TYPE_MS);
        }
        break;

      case 'type-orig':
        if (textRef.current.length < originalText.length) {
          update(originalText.slice(0, textRef.current.length + 1));
          timer.current = setTimeout(tick, TYPE_MS);
        } else {
          phase.current = 'idle';
          setActive(false);
        }
        break;
    }
  }

  function onMouseEnter() {
    clearTimer();
    phase.current = 'del-orig';
    setActive(true);
    tick();
  }

  function onMouseLeave() {
    clearTimer();
    phase.current = 'del-hover';
    setActive(true);
    tick();
  }

  useEffect(() => clearTimer, []);

  return { displayed, active, onMouseEnter, onMouseLeave };
}
