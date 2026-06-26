import Image from 'next/image';
import type { CaseStudyGridImage } from '@/content/portfolio';

function GridImage({ src, alt }: CaseStudyGridImage) {
  return (
    <div className="relative w-full aspect-[3/2] border border-[rgba(105,105,105,0.2)]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default function ImageGridSection({ images }: { images: CaseStudyGridImage[] }) {
  const col1 = images.filter((_, i) => i % 2 === 0);
  const col2 = images.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-bg-primary py-7xl">
      <div className="px-margin max-w-[1440px] mx-auto">
        {/* Mobile: col1 then col2, single column */}
        <div className="flex flex-col gap-[20px] lg:hidden">
          {[...col1, ...col2].map((img, i) => (
            <GridImage key={i} {...img} />
          ))}
        </div>

        {/* Desktop: two staggered columns */}
        <div className="hidden lg:flex gap-[20px] items-start">
          <div className="flex flex-1 flex-col gap-[32px]">
            {col1.map((img, i) => (
              <GridImage key={i} {...img} />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-[32px] pt-[80px]">
            {col2.map((img, i) => (
              <GridImage key={i} {...img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
