'use client';

import Image from 'next/image';

const block1Logos = [
  { src: '/logos/block1/1740736941606_400x122 1.svg', alt: 'Brand 1' },
  { src: '/logos/block1/Group 130 3.svg', alt: 'Brand 2' },
  { src: '/logos/block1/Group 134 2.svg', alt: 'Brand 3' },
  { src: '/logos/block1/Group.svg', alt: 'Brand 4' },
];

const block2Logos = [
  { src: '/logos/block2/Credsettle Logo 3.svg', alt: 'Brand 1' },
  { src: '/logos/block2/Group 214.svg', alt: 'Brand 2' },
  { src: '/logos/block2/logo-white-1.0x200 1.svg', alt: 'Brand 3' },
  { src: '/logos/block2/mil-logo 1.svg', alt: 'Brand 4' },
];

const block3Logos = [
  { src: '/logos/block3/Group 136 1.svg', alt: 'Brand 1' },
  { src: '/logos/block3/Group 216.svg', alt: 'Brand 2' },
  { src: '/logos/block3/image_url__2Fjivologo-removebg-preview 1.svg', alt: 'Brand 3' },
  { src: '/logos/block3/logo-white 1.svg', alt: 'Brand 4' },
];

interface LogoItem { src: string; alt: string; }

function VerticalCarousel({ logos, speed = 20 }: { logos: LogoItem[]; speed?: number }) {
  const duplicated = [...logos, ...logos, ...logos];
  return (
    <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
      {/* top fade */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to bottom, white, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      {/* bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to top, white, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          animation: `brandScrollUp ${speed}s linear infinite`,
        }}
      >
        {duplicated.map((logo, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 20px',
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              style={{ objectFit: 'contain', maxHeight: 48, width: 'auto', filter: 'grayscale(80%)', opacity: 0.8 }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes brandScrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
      `}</style>
    </div>
  );
}

export default function BrandGrid() {
  const columns = [
    { logos: block1Logos, speed: 18 },
    { logos: block2Logos, speed: 22 },
    { logos: block3Logos, speed: 20 },
    { logos: [],          speed: 0  }, // block4 — empty, logos to be added later
    { logos: [],          speed: 0  }, // block5 — empty, logos to be added later
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#0C002B] font-nunito text-[32px] md:text-[42px] font-bold text-center mb-12 leading-[1.2]">
          Chosen by businesses <br className="md:hidden" /> that move fast
        </h2>

        <div className="grid grid-cols-2 md:flex md:border-t border-blue-200/50">
          {columns.map((col, index) => (
            <div
              key={index}
              className={`
                aspect-square md:aspect-auto md:h-36 md:flex-1 flex items-center justify-center bg-white
                border-r border-blue-200
                ${index < 2 ? 'border-b md:border-b-0' : ''}
                ${index % 2 === 0 ? 'border-l md:border-l-0' : ''}
                ${index === 0 ? 'md:border-l' : ''}
                ${index >= 4 ? 'hidden md:flex' : ''}
                overflow-hidden
              `}
            >
              {col.logos.length > 0 ? (
                <div style={{ width: '100%', height: '100%' }}>
                  <VerticalCarousel logos={col.logos} speed={col.speed} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
