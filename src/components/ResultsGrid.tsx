'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const testimonials = [
  {
    id: 't1',
    quote: "Super smooth process. I checked and filed my trademark in minutes without any confusion.",
    author: "Anuj Anand Malik",
    role: "Founder",
    founderImage: "/results/anuj.png",
    companyLogo: "/results/ama-logo.svg", // Stand-in for AMA Legal Solutions
  },
  {
    id: 't2',
    quote: "The AI report saved me from choosing a risky name. Honestly, this is a must-have tool.",
    author: "Lavanya",
    role: "Founder",
    founderImage: "/Lavanya.png",
    companyLogo: "/clientlogos/15.png",
  },
  {
    id: 't3',
    quote: "Way faster than traditional agents. Everything was clear, transparent, and quick.",
    author: "Akanksha",
    role: "Senior Executive",
    founderImage: "/akanksha.jpeg",
    companyLogo: "/clientlogos/13.png",
  }
];

export default function ResultsGrid() {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-[#0C002B] font-nunito text-[32px] md:text-[46px] font-bold text-center mb-12 leading-[1.2] tracking-tight">
          Results that speak louder <br className="hidden md:block" /> than claims
        </h2>

        {/* 4-Column Grid Layout */}
        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid w-full grid-cols-4 gap-5">
          {/* Row 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 bg-[#FFAEAC] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[46px] font-medium leading-[1]">60 sec</div>
            <div className="text-[#0C002B]/70 font-medium text-[20px] leading-[1.3] pt-8">
              AI-powered <br /> brand analysis
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 bg-[#CCFFAD] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[46px] font-medium leading-[1]">3x faster</div>
            <div className="text-[#0C002B]/70 font-medium text-[20px] leading-[1.3] pt-8">
              compared to <br /> traditional filing
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 bg-[#F7F7FA] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[24px] leading-[1.3] font-medium">
              “{testimonials[0].quote}”
            </div>
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#EBEBE4] w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image src={testimonials[0].founderImage} alt={testimonials[0].author} width={64} height={64} className="object-cover mt-2 w-full h-full" />
                </div>
                <div>
                  <div className="text-[#0C002B] font-bold text-[14px]">{testimonials[0].author}</div>
                  <div className="text-[#0C002B]/60 text-[13px]">{testimonials[0].role}</div>
                </div>
              </div>
              <Image src={testimonials[0].companyLogo} alt="Company Logo" width={80} height={30} className="object-contain opacity-80" />
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="col-span-2 bg-[#F7F7FA] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[24px] leading-[1.3] font-medium">
              “{testimonials[1].quote}”
            </div>
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#EBEBE4] w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image src={testimonials[1].founderImage} alt={testimonials[1].author} width={64} height={64} className="object-cover mt-2 w-full h-full" />
                </div>
                <div>
                  <div className="text-[#0C002B] font-bold text-[14px]">{testimonials[1].author}</div>
                  <div className="text-[#0C002B]/60 text-[13px]">{testimonials[1].role}</div>
                </div>
              </div>
              <Image src={testimonials[1].companyLogo} alt="Company Logo" width={50} height={15} className="object-contain opacity-80" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 bg-[#FFF080] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[46px] font-medium leading-[1]">5,000+</div>
            <div className="text-[#0C002B]/70 font-medium text-[20px] leading-[1.3] pt-8">
              founders & <br /> businesses trust us
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 bg-[#DAB6FC] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[46px] font-medium leading-[1]">95%</div>
            <div className="text-[#0C002B]/70 font-medium text-[20px] leading-[1.3] pt-8">
              success rate for <br /> approval-ready names
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="col-span-1 bg-[#9BFFEB] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[46px] font-medium leading-[1]">7,000+</div>
            <div className="text-[#0C002B]/70 font-medium text-[20px] leading-[1.3] pt-8">
              Trademarks <br /> registered
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 bg-[#ADC8FF] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[46px] font-medium leading-[1]">10,000+</div>
            <div className="text-[#0C002B]/70 font-medium text-[20px] leading-[1.3] pt-8">
              Trademarks <br /> searched monthly
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 bg-[#F7F7FA] rounded-[24px] p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div className="text-[#0C002B] font-nunito text-[24px] leading-[1.3] font-medium">
              “{testimonials[2].quote}”
            </div>
            <div className="flex items-center justify-between pt-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#EBEBE4] w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image src={testimonials[2].founderImage} alt={testimonials[2].author} width={45} height={45} className="object-cover mt-2 w-full h-full" />
                </div>
                <div>
                  <div className="text-[#0C002B] font-bold text-[14px]">{testimonials[2].author}</div>
                  <div className="text-[#0C002B]/60 text-[13px]">{testimonials[2].role}</div>
                </div>
              </div>
              <Image src={testimonials[2].companyLogo} alt="Company Logo" width={80} height={30} className="object-contain opacity-80" />
            </div>
          </motion.div>
        </div>

        {/* Mobile Grid (Hidden on Desktop) */}
        <div className="grid md:hidden w-full grid-cols-2 gap-3">
          {/* Item 1 - Small */}
          <div className="bg-[#FFAEAC] rounded-[24px] p-6 flex flex-col justify-between aspect-square">
            <div className="text-[#0C002B] font-nunito text-[32px] font-bold leading-[1]">60 sec</div>
            <div className="text-[#0C002B]/70 font-medium text-[16px] leading-[1.3]">
              Al-powered <br /> brand analysis
            </div>
          </div>

          {/* Item 2 - Small */}
          <div className="bg-[#CCFFAD] rounded-[24px] p-6 flex flex-col justify-between aspect-square">
            <div className="text-[#0C002B] font-nunito text-[32px] font-bold leading-[1]">3x faster</div>
            <div className="text-[#0C002B]/70 font-medium text-[16px] leading-[1.3]">
              compared to <br /> traditional filing
            </div>
          </div>

          {/* Item 3 - Big (Testimonial) */}
          <div className="col-span-2 bg-[#F7F7FA] rounded-[24px] p-6 flex flex-col justify-between">
            <div className="text-[#0C002B] font-nunito text-[18px] leading-[1.4] font-medium mb-12">
              “{testimonials[1].quote}”
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="bg-[#EBEBE4] w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image src={testimonials[1].founderImage} alt={testimonials[1].author} width={56} height={56} className="object-cover mt-2 w-full h-full" />
                </div>
                <div>
                  <div className="text-[#0C002B] font-bold text-[14px] leading-tight">{testimonials[1].author}</div>
                  <div className="text-[#0C002B]/60 text-[13px]">{testimonials[1].role}</div>
                </div>
              </div>
              <Image src={testimonials[1].companyLogo} alt="Logo" width={45} height={15} className="object-contain opacity-80" />
            </div>
          </div>

          {/* Item 4 - Small */}
          <div className="bg-[#FFF080] rounded-[24px] p-6 flex flex-col justify-between aspect-square">
            <div className="text-[#0C002B] font-nunito text-[32px] font-bold leading-[1]">5000+</div>
            <div className="text-[#0C002B]/70 font-medium text-[16px] leading-[1.3]">
              founders & <br /> businesses trust <br /> us
            </div>
          </div>

          {/* Item 5 - Small */}
          <div className="bg-[#DAB6FC] rounded-[24px] p-6 flex flex-col justify-between aspect-square">
            <div className="text-[#0C002B] font-nunito text-[32px] font-bold leading-[1]">95%</div>
            <div className="text-[#0C002B]/70 font-medium text-[16px] leading-[1.3]">
              success rate for <br /> approval-ready <br /> names
            </div>
          </div>

          {/* Item 6 - Big (Testimonial/Another Card) */}
          <div className="col-span-2 bg-[#F7F7FA] rounded-[24px] p-6 flex flex-col justify-between">
            <div className="text-[#0C002B] font-nunito text-[18px] leading-[1.4] font-medium mb-12">
              “{testimonials[2].quote}”
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="bg-[#EBEBE4] w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image src={testimonials[2].founderImage} alt={testimonials[2].author} width={56} height={56} className="object-cover mt-2 w-full h-full" />
                </div>
                <div>
                  <div className="text-[#0C002B] font-bold text-[14px] leading-tight">{testimonials[2].author}</div>
                  <div className="text-[#0C002B]/60 text-[13px]">{testimonials[2].role}</div>
                </div>
              </div>
              <Image src={testimonials[2].companyLogo} alt="Logo" width={90} height={30} className="object-contain opacity-80" />
            </div>
          </div>

        </div>

        <Link href="/blog">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 bg-[#0C002B] text-white px-8 py-3.5 rounded-[12px] font-semibold text-[15px] transition-all duration-300 hover:bg-[#1A0B42] active:scale-[0.98]"
          >
            View more stories
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
