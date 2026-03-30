import SearchClient from './SearchClient';

export default function CtaSection() {
  return (
    <section className="w-full bg-[#A3C3FF] py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-white font-nunito text-[40px] md:text-[56px] font-bold text-center leading-[1.1] mb-12 tracking-tight">
          Make Your Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A56DB] via-[#DAB6FC] to-[#059669] animate-gradient">Future-Proof</span><br />
          with AI
        </h2>

        <div className="w-full relative z-10">
          <SearchClient />
        </div>
      </div>
    </section>
  );
}
