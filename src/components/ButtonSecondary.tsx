import Link from 'next/link';

interface Props {
  label: string;
  href?: string;
  external?: boolean;
  className?: string;
}

export default function ButtonSecondary({ label, href, external, className = '' }: Props) {
  const cls = `btn-secondary flex items-center justify-center px-4xl py-3xl ${className}`;

  const inner = (
    <span
      className="relative z-10 font-heading font-bold text-button leading-[20px] uppercase whitespace-nowrap select-none pointer-events-none"
      style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
    >
      {label}
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {inner}
      </Link>
    );
  }
  return <div className={cls}>{inner}</div>;
}
