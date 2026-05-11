import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full bg-bg-primary flex items-center justify-between px-margin py-lg whitespace-nowrap">
      <Link
        href="/"
        className="shrink-0 font-heading font-medium text-heading-m uppercase text-text-primary"
        style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
      >
        YL<span className="text-text-brand">.</span>
      </Link>
      <div className="flex items-center gap-5xl shrink-0 font-body text-xs not-italic text-text-primary">
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
