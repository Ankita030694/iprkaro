import { HeroSection, WhyTrademark, Expert, SimplePlans, Faq } from "@/components";

export default function Home() {
  return (
    <>
    <div className="mt-20">
      <HeroSection />
      </div>
      <WhyTrademark />
      <Expert />
      <SimplePlans />
      <Faq />
    </>
  );
}
