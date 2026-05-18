import Link from 'next/link';

interface Props {
  label: string;
  href?: string;
  className?: string;
}

export default function ButtonPrimary({ label, href, className = '' }: Props) {
  const cls = `btn-primary flex items-center justify-center px-4xl py-3xl ${className}`;

  const inner = (
    <span
      className="relative z-10 font-heading font-bold text-button leading-[20px] uppercase text-text-primary whitespace-nowrap select-none pointer-events-none"
      style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
    >
      {label}
    </span>
  );

  if (href) return <Link href={href} className={cls}>{inner}</Link>;
  return <div className={cls}>{inner}</div>;
}
