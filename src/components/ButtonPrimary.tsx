'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTypewriter } from '@/hooks/useTypewriter';

interface Props {
  label: string;
  href?: string;
  className?: string;
}

function renderLabel(str: string) {
  if (str.startsWith('→')) {
    return <><FontAwesomeIcon icon={faArrowRight} />{str.slice(1)}</>;
  }
  return str;
}

export default function ButtonPrimary({ label, href, className = '' }: Props) {
  const { displayed, active, onMouseEnter, onMouseLeave } = useTypewriter(label);

  const cls = `bg-bg-brand flex items-center justify-center px-4xl py-3xl cursor-pointer ${className}`;

  const inner = (
    <span
      className="font-heading font-bold text-button leading-[20px] uppercase text-text-primary whitespace-nowrap select-none pointer-events-none"
      style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
    >
      {renderLabel(displayed)}
      {active && <span className="cursor-blink ml-[2px] font-normal normal-case">|</span>}
    </span>
  );

  if (href) {
    return <Link href={href} className={cls} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{inner}</Link>;
  }
  return <div className={cls} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{inner}</div>;
}
