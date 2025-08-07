import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
export const FAQSection = () => {
  const faqs = [{
    question: 'How much does underfloor heating cost to run?',
    answer: 'Running costs depend on various factors including room size, insulation, and usage patterns. Typically, electric systems cost between £0.10-£0.20 per m² per day, while water systems range from £0.06-£0.12 per m² per day. Our running cost calculator can provide a more accurate estimate for your specific situation.'
  }, {
    question: 'Can I install underfloor heating myself?',
    answer: 'While DIY installation is possible for experienced individuals, we recommend professional installation to ensure optimal performance and safety. Electric systems are generally easier to install than water systems. All electrical connections must be made by a qualified electrician regardless of who installs the system.'
  }, {
    question: 'Which floor coverings work with underfloor heating?',
    answer: 'Most floor coverings are compatible with underfloor heating, including tile, stone, engineered wood, laminate, vinyl, and carpet. However, the thermal conductivity of the material affects efficiency. Tile and stone offer the best performance, while thick carpets may reduce heat output.'
  }, {
    question: 'How long does installation take?',
    answer: "Installation time varies based on system type and room size. Electric systems in a standard bathroom might take 1-2 days, while water systems for whole-house heating could take 2-5 days. This doesn't include drying time for screed if required, which can add several days."
  }, {
    question: 'Will underfloor heating save me money?',
    answer: 'Underfloor heating can reduce energy costs by 15-25% compared to traditional radiators when used with smart controls. The system operates at lower temperatures while providing the same comfort level, resulting in greater efficiency. The initial investment is typically recovered through energy savings over time.'
  }, {
    question: 'What warranty do your systems come with?',
    answer: 'Our electric underfloor heating systems come with a lifetime warranty, while our water systems are covered by a 50-year warranty. Both warranties cover manufacturing defects and are subject to proper installation and registration.'
  }];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section className="py-20 bg-white w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our underfloor heating
            systems.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none" onClick={() => toggleFAQ(index)}>
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? <ChevronUpIcon size={20} className="flex-shrink-0 text-[#ce1226]" /> : <ChevronDownIcon size={20} className="flex-shrink-0 text-gray-500" />}
              </button>
              {openIndex === index && <div className="px-6 pb-6 text-gray-700">
                  <p>{faq.answer}</p>
                </div>}
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Our experts are here to help.
          </p>
          <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>;
};