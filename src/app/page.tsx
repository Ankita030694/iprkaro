import { HeroSection, WhyTrademark, OurServices, SimplePlans, Faq } from "@/components";

export default function Home() {
  return (
    <>

      <HeroSection />
      <WhyTrademark />
      <div className="-mt-10">
      <OurServices />

      </div>
      <SimplePlans />
      <Faq />
    </>
  );
}
