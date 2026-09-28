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
    <div className="relative w-full overflow-hidden flex bg-white py-2 sm:py-2.5 md:py-3 border-y-0 md:border-y border-slate-100 mt-[-1px]">
      <div
        className="flex whitespace-nowrap items-center"
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
            className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={32}
              className={`object-contain w-auto transition-all duration-300 opacity-90 hover:opacity-100 ${
                logo.src.includes('Group 136') || logo.src.includes('Group 216')
                  ? 'h-6 sm:h-7 md:h-8 max-h-6 sm:max-h-7 md:max-h-8 max-w-[42px] sm:max-w-[50px]'
                  : logo.src.includes('jivologo')
                  ? 'h-3.5 sm:h-4 md:h-5 max-h-5 max-w-[90px] sm:max-w-[110px] md:max-w-[130px]'
                  : 'h-4 sm:h-5 md:h-6 max-h-4 sm:max-h-5 md:max-h-6 max-w-[70px] sm:max-w-[85px] md:max-w-[105px]'
              }`}
              style={
                logo.src.toLowerCase().includes('white')
                  ? { filter: 'brightness(0)' }
                  : undefined
              }
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
    <section className="w-full bg-white py-8 sm:py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2 md:px-4">
        <div className="text-[#0C002B] font-nunito text-[22px] sm:text-[26px] md:text-[42px] font-semibold text-center leading-[1.2] tracking-tight">
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
