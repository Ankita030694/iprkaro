'use client';

import Image from 'next/image';

const block1Logos = [
  { src: '/logos/block1/1740736941606_400x122 1.svg', alt: 'Brand 1' },
  { src: '/logos/block1/Group 130 3.svg', alt: 'Brand 2' },
  { src: '/logos/block1/Group 134 2.svg', alt: 'Brand 3' },
  { src: '/logos/block1/Group.svg', alt: 'Brand 4' },
];

const block2Logos = [
  { src: '/logos/block2/Credsettle Logo 3.svg', alt: 'Brand 5' },
  { src: '/logos/block2/Group 214.svg', alt: 'Brand 6' },
  { src: '/logos/block2/logo-white-1.0x200 1.svg', alt: 'Brand 7' },
  { src: '/logos/block2/mil-logo 1.svg', alt: 'Brand 8' },
];

const block3Logos = [
  { src: '/logos/block3/Group 136 1.svg', alt: 'Brand 9' },
  { src: '/logos/block3/Group 216.svg', alt: 'Brand 10' },
  { src: '/logos/block3/image_url__2Fjivologo-removebg-preview 1.svg', alt: 'Brand 11' },
  { src: '/logos/block3/logo-white 1.svg', alt: 'Brand 12' },
];

interface LogoItem { src: string; alt: string; }

function MarqueeRow({ logos, direction = 'left' }: { logos: LogoItem[], direction?: 'left' | 'right' }) {
  // Duplicate the array multiple times to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden flex bg-white py-2.5 md:py-4 border-y border-blue-100 mt-[-1px]">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: direction === 'left'
            ? 'marqueeLeft 30s linear infinite'
            : 'marqueeRight 30s linear infinite',
          width: 'max-content'
        }}
      >
        {duplicatedLogos.map((logo, i) => (
          <div
            key={i}
            className="w-40 md:w-64 flex-shrink-0 flex items-center justify-center px-4 md:px-8"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={64}
              className="object-contain w-auto h-12 md:h-20 transition-all duration-300"
              style={{
                filter: 'brightness(0)', // Force black color
                opacity: 0.9,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const keyframes = `
@keyframes marqueeLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marqueeRight {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
`;

export default function BrandGrid() {
  const allLogos = [...block1Logos, ...block2Logos, ...block3Logos];
  const row1Logos = allLogos.slice(0, 6);
  const row2Logos = allLogos.slice(6, 12);

  return (
    <section className="w-full bg-white py-6 md:py-10 px-0">
      <div className="max-w-7xl mx-auto mb-5 md:mb-7 px-2 md:px-4">
        <div className="text-[#0C002B] font-nunito text-[26px] md:text-[42px] font-semibold text-center leading-[1.2] tracking-tight">
          Chosen by businesses <br className="md:hidden" /> that <span className="text-[#1952C7]">move fast</span>
        </div>
      </div>

      <div className="w-full overflow-hidden flex flex-col">
        <MarqueeRow logos={row1Logos} direction="right" />
        <MarqueeRow logos={row2Logos} direction="left" />
      </div>

      <style jsx global>{keyframes}</style>
    </section>
  );
}
