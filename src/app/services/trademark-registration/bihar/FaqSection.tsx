import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="bg-neutral-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400">
            Common queries about Trademark Registration in Bihar
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-neutral-800 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#ddab5a] hover:no-underline data-[state=open]:text-[#ddab5a] bg-neutral-900">
                How can I register a trademark in Bihar?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-neutral-400 bg-neutral-900/50">
                Trademark registration in Bihar is a centralized online process governed by the Controller General of Patents, Designs, and Trademarks (CGPDTM). You can file your application online through the official IP India portal. While the process is online, the jurisdiction for Bihar falls under the Trademark Registry in Kolkata. It is advisable to consult with IP professionals to ensure a smooth registration process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-neutral-800 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#ddab5a] hover:no-underline data-[state=open]:text-[#ddab5a] bg-neutral-900">
                Which Trademark Registry covers Bihar?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-neutral-400 bg-neutral-900/50">
                For applicants based in Bihar, the appropriate jurisdiction is the Trademark Registry located in Kolkata. All legal proceedings, hearings, and official correspondence regarding your trademark application will be handled by the Kolkata office.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-neutral-800 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#ddab5a] hover:no-underline data-[state=open]:text-[#ddab5a] bg-neutral-900">
                What documents are required for trademark registration in Bihar?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-neutral-400 bg-neutral-900/50">
                The documents required depend on the type of applicant. Generally, you need:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Individuals:</strong> ID proof (Aadhaar/PAN), address proof, and the trademark logo/name.</li>
                  <li><strong>Businesses (Companies/LLPs):</strong> Certificate of Incorporation, MSME certificate (for fee concession), Board Resolution, and ID proof of the authorized signatory.</li>
                  <li><strong>Partnerships:</strong> Partnership Deed and ID proofs of partners.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-neutral-800 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#ddab5a] hover:no-underline data-[state=open]:text-[#ddab5a] bg-neutral-900">
                How long does the trademark registration process take in Bihar?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-neutral-400 bg-neutral-900/50">
                The process typically takes 6 to 12 months if there are no objections or oppositions. However, if legal hurdles arise, such as third-party oppositions or registry objections, the timeline can extend to 18-24 months.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-neutral-800 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-[#ddab5a] hover:no-underline data-[state=open]:text-[#ddab5a] bg-neutral-900">
                Can I register a Geographical Indication (GI) as a trademark?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-neutral-400 bg-neutral-900/50">
                No, a Geographical Indication (GI) cannot be registered as a private trademark by an individual. GIs like 'Madhubani Paintings' or 'Bhagalpur Silk' belong to the community of that region. However, you can register a unique brand name under which you sell these authentic products, provided it doesn't infringe on the GI protection.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
