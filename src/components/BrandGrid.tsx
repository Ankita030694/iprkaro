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

function SlotMachineColumn({ logos }: { logos: LogoItem[] }) {
  // 4 unique logos -> Reel [L1, L2, L3, L4, L1] (5 items)
  // Upward motion: y = 0 -> -20% -> -40% -> -60% -> -80%
  const reel = [...logos.slice(0, 4), logos[0]];
  
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <div
        className="flex flex-col items-center"
        style={{
          animation: 'brandSlotUp 12s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        }}
      >
        {reel.map((logo, i) => (
          <div
            key={i}
            className="w-full h-20 md:h-36 flex-shrink-0 flex items-center justify-center p-4 md:p-8"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={64}
              className="object-contain w-auto h-auto max-h-full transition-all duration-300"
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
@keyframes brandSlotUp {
  0%, 18%   { transform: translateY(0); }
  22%, 40%  { transform: translateY(-20%); }
  44%, 62%  { transform: translateY(-40%); }
  66%, 84%  { transform: translateY(-60%); }
  88%, 98%  { transform: translateY(-80%); }
  100%      { transform: translateY(0); }
}
`;

export default function BrandGrid() {
  const columns = [
    block1Logos,
    block2Logos,
    block3Logos,
    [...block1Logos].reverse(),
    [...block2Logos].sort(() => 0.5 - Math.random()),
  ];

  return (
    <section className="w-full bg-white py-12 md:py-24 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#0C002B] font-nunito text-[26px] md:text-[42px] font-extrabold text-center mb-12 md:mb-20 leading-[1.2] tracking-tight">
          Chosen by businesses <br className="md:hidden" /> that move fast
        </h2>

        <div className="flex flex-nowrap border-y border-blue-100 bg-white shadow-sm">
          {columns.map((logos, index) => (
            <div
              key={index}
              className={`
                h-20 md:h-36 flex-1
                border-blue-100
                ${index === 0 ? 'border-l' : ''}
                border-r
                overflow-hidden
              `}
            >
              <SlotMachineColumn logos={logos} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{keyframes}</style>
    </section>
  );
}
