import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from 'lucide-react';
interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
export const ExtendedFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const faqData: FAQItem[] = [
  // General Questions
  {
    question: 'What is underfloor heating and how does it work?',
    answer: 'Underfloor heating is a form of central heating that achieves indoor climate control using conductive, radiant, and convective heat transfer. The system works by running either electrical heating elements or water pipes beneath your floor. These emit heat upward through the floor surface, creating a comfortable, even warmth throughout the room. Unlike traditional radiators that heat the air near them first (creating hot and cold spots), underfloor heating provides consistent warmth across the entire floor area.',
    category: 'general'
  }, {
    question: 'What are the benefits of underfloor heating compared to radiators?',
    answer: 'Underfloor heating offers numerous advantages over traditional radiators: 1) More comfortable heat distribution with no cold spots, 2) More energy efficient, typically saving 15-25% on heating costs, 3) Invisible heating solution that frees up wall space, 4) Compatible with renewable energy sources like heat pumps, 5) Healthier heating with reduced air circulation that minimizes dust movement, 6) Individual room temperature control for personalized comfort, and 7) Silent operation with no noise from water flow or expansion.',
    category: 'general'
  }, {
    question: 'Is underfloor heating suitable for my home?',
    answer: "Underfloor heating can be installed in virtually any home, whether new build or renovation. Electric systems are particularly versatile due to their minimal height build-up (as little as 3mm) and can be installed under almost any floor finish. Water systems are ideal for new builds or major renovations where floor height isn't a constraint. Both systems work well with most floor coverings including tile, stone, engineered wood, laminate, vinyl, and even carpet (with appropriate underlay). The suitability depends on your specific requirements, budget, and project type.",
    category: 'general'
  }, {
    question: 'How long does underfloor heating last?',
    answer: 'Warmup electric underfloor heating systems come with a lifetime warranty and can last for decades without maintenance when properly installed. Water underfloor heating systems are equally durable, with pipes carrying a 50-year warranty. The most common replacement part is the thermostat, which typically has a lifespan of 10-15 years. The exceptional durability of underfloor heating makes it a long-term investment in your property.',
    category: 'general'
  },
  // Installation Questions
  {
    question: 'Can I install underfloor heating myself?',
    answer: 'While DIY installation is possible for electric systems if you have good DIY skills, we recommend professional installation to ensure optimal performance and safety. Electric systems are generally easier to install than water systems, with the StickyMat system being particularly DIY-friendly. However, all electrical connections must be made by a qualified electrician regardless of who installs the system. Water underfloor heating systems are more complex and should always be installed by qualified professionals to ensure proper functioning and maintain warranty coverage.',
    category: 'installation'
  }, {
    question: 'Can underfloor heating be installed under existing floors?',
    answer: "Yes, particularly electric systems which can be installed with minimal floor height increase. For existing floors that can't be raised, options include: 1) Lifting the existing floor covering and installing a thin electric system (3-4mm), 2) Using Warmup Ultralight insulation boards (6mm) beneath the heating system to improve efficiency without significant height increase, or 3) For water systems, low-profile options like the Total-16 system (16mm total height) are available. The feasibility depends on your specific floor construction and whether the slight increase in floor height can be accommodated at doorways and transitions.",
    category: 'installation'
  }, {
    question: 'How long does installation take?',
    answer: "Installation time varies based on system type and room size. For electric systems, a standard bathroom (5-10m²) might take 1-2 days including floor preparation and heating installation. Water systems for whole-house heating could take 2-5 days for pipe installation. These timeframes don't include drying time for screed if required (which can add several days to weeks depending on screed type) or final floor covering installation. For renovation projects using electric systems with minimal floor preparation, you could have the system fully installed and operational within 2-3 days.",
    category: 'installation'
  }, {
    question: 'What floor coverings work with underfloor heating?',
    answer: "Most floor coverings are compatible with underfloor heating, though their thermal conductivity affects efficiency. Tile and stone are ideal as they conduct heat effectively and have low thermal resistance. Engineered wood (up to 18mm thickness) works well when designed for underfloor heating. Laminate and vinyl are suitable but should be limited to a maximum temperature of 27°C. Carpet can be used with underfloor heating if the combined tog value of the carpet and underlay doesn't exceed 2.5 tog. Always check the floor manufacturer's guidelines for compatibility with underfloor heating.",
    category: 'installation'
  }, {
    question: 'Do I need insulation with underfloor heating?',
    answer: 'Insulation is highly recommended with all underfloor heating systems as it significantly improves energy efficiency by directing heat upward into the room rather than allowing it to be lost downward. For electric systems, Warmup Ultralight insulation boards can improve efficiency by up to 50%. For water systems, insulation panels form an integral part of the system. Building regulations typically require a minimum level of insulation beneath any heating system. Even in upper-floor installations, acoustic insulation with thermal properties is beneficial for improving system performance and reducing heat transfer to the room below.',
    category: 'installation'
  },
  // Running Costs Questions
  {
    question: 'How much does underfloor heating cost to run?',
    answer: 'Running costs depend on various factors including room size, insulation, usage patterns, and energy tariffs. Typically, electric systems cost between £0.10-£0.20 per m² per day, while water systems range from £0.06-£0.12 per m² per day. For example, a 10m² bathroom with electric underfloor heating might cost approximately £0.12-0.24 per hour to run. Using smart controls with features like programming, weather compensation, and adaptive learning can reduce running costs by 25% or more. Water systems connected to heat pumps can achieve even greater efficiency, especially when operating at lower temperatures.',
    category: 'costs'
  }, {
    question: 'Will underfloor heating save me money?',
    answer: 'Underfloor heating can reduce energy costs by 15-25% compared to traditional radiators when used with smart controls. The system operates at lower temperatures (40-45°C for water systems, compared to 70-80°C for radiators) while providing the same comfort level, resulting in greater efficiency. The initial investment is typically recovered through energy savings over time, especially for water systems connected to renewable energy sources like heat pumps. Additionally, the even heat distribution allows you to set the thermostat 2-3°C lower than with radiators while maintaining the same comfort level, further reducing energy consumption.',
    category: 'costs'
  }, {
    question: 'How does underfloor heating affect my energy bills?',
    answer: "Underfloor heating can make your home more energy-efficient, potentially reducing bills despite rising energy costs. While electricity typically costs more per kWh than gas, electric underfloor heating systems are 100% efficient at the point of use and provide precise zone control, allowing you to heat only the rooms you're using. Water underfloor heating systems are particularly economical when connected to heat pumps or other renewable energy sources. Smart thermostats further optimize energy usage by learning your schedule and adjusting heating accordingly. For the most accurate estimate of how underfloor heating will affect your specific energy bills, use our running cost calculator or contact our technical team.",
    category: 'costs'
  }, {
    question: 'What is the initial cost of installing underfloor heating?',
    answer: 'The initial cost varies depending on system type, room size, and installation complexity. As a general guide, electric systems typically cost £75-£120 per m² including installation and controls. Water systems generally cost £80-£150 per m² including installation but excluding the heat source (boiler/heat pump). Additional costs may include insulation, screed, and floor covering. While the initial investment is higher than traditional radiators, the long-term energy savings, improved comfort, and added property value make underfloor heating a worthwhile investment. Warmup offers various financing options to help spread the cost of installation.',
    category: 'costs'
  },
  // Operation Questions
  {
    question: 'How long does underfloor heating take to warm up?',
    answer: 'Warm-up times vary by system type and floor covering. Electric systems typically reach optimal temperature in 30-60 minutes, with response times faster under tile and stone (20-30 minutes) than under wood or carpet (40-60 minutes). Water systems generally take longer, typically 1-2 hours to reach full temperature. Factors affecting warm-up time include subfloor insulation quality, floor covering material, and room insulation. Using the programmable timer on your thermostat to pre-heat the room before use ensures comfortable temperatures when needed without wasting energy.',
    category: 'operation'
  }, {
    question: 'Should underfloor heating be left on all the time?',
    answer: 'For most installations, leaving underfloor heating on continuously at a lower temperature is more efficient than frequently turning it on and off at high temperatures. This is particularly true for water systems and in well-insulated homes. The recommended approach is to maintain a background temperature (typically 16-18°C) when the room is unoccupied and increase to comfort temperature (20-22°C) when in use. Smart thermostats optimize this process automatically by learning your schedule and adjusting temperatures accordingly. During extended absences (more than a day), setting a lower frost protection temperature (around 12°C) is more economical.',
    category: 'operation'
  }, {
    question: 'How do I control underfloor heating in different rooms?',
    answer: "Underfloor heating offers excellent zone control capabilities, allowing different temperatures in each room. For electric systems, each room or zone requires its own thermostat connected to the heating in that area. For water systems, individual room control is achieved using a manifold with actuators controlled by room thermostats. Smart thermostats like the Warmup 4iE can be networked together and controlled via a smartphone app, allowing you to manage your entire home's heating from anywhere. This zone control capability is one of the major advantages of underfloor heating, enabling you to heat only the rooms you're using and set appropriate temperatures for different areas (e.g., warmer bathrooms, cooler bedrooms).",
    category: 'operation'
  }, {
    question: 'Can underfloor heating be used with renewable energy sources?',
    answer: "Water underfloor heating systems are particularly well-suited to renewable energy sources due to their low operating temperatures. They work exceptionally well with air and ground source heat pumps, which operate most efficiently when providing water at 35-45°C—precisely the temperature range needed for underfloor heating. Solar thermal systems can also contribute to heating water for underfloor systems, especially in shoulder seasons. While electric underfloor heating isn't directly compatible with heat pumps, it can be powered by renewable electricity from solar PV systems or green energy tariffs. The combination of underfloor heating and renewable energy sources represents one of the most sustainable heating solutions available for modern homes.",
    category: 'operation'
  },
  // Maintenance Questions
  {
    question: 'What maintenance does underfloor heating require?',
    answer: 'Warmup underfloor heating systems are designed to be virtually maintenance-free. Electric systems have no moving parts and require no maintenance once properly installed. Water systems benefit from occasional checks: 1) Annual inspection of the manifold to ensure proper pressure (typically 1-1.5 bar when cold) and check for leaks, 2) Every 3-5 years, have a heating engineer check and top up the corrosion inhibitor in the system, and 3) Periodic inspection of actuators and controls to ensure proper operation. Both system types benefit from keeping thermostats updated with the latest firmware if using smart models. With minimal maintenance, your underfloor heating system should provide reliable performance for decades.',
    category: 'maintenance'
  }, {
    question: 'What warranty do your systems come with?',
    answer: 'Warmup offers industry-leading warranties on all our products: 1) Electric underfloor heating systems come with a lifetime warranty covering manufacturing defects, 2) Water underfloor heating pipes are covered by a 50-year warranty, 3) Smart thermostats carry a 3-year warranty, and 4) Insulation boards and accessories typically have a 10-year warranty. Our SafetyNet™ Installation Guarantee also means that if a system is accidentally damaged during installation, Warmup will replace it free of charge. To maintain warranty coverage, systems must be installed according to our guidelines, registered within 30 days of purchase, and electrical connections must be made by a qualified electrician.',
    category: 'maintenance'
  }, {
    question: 'What should I do if my underfloor heating stops working?',
    answer: "If your system stops working: 1) Check if the thermostat is receiving power and is set to heating mode, 2) Verify that the circuit breaker hasn't tripped, 3) For water systems, check if the boiler/heat source is functioning and that the manifold valves are open, 4) Ensure the programmer is set correctly, and 5) Test the thermostat by increasing the set temperature well above the current room temperature. If these steps don't resolve the issue, consult the troubleshooting guide in your system manual or contact Warmup Technical Support at 0345 345 2288. For electric systems, having resistance readings from when the system was installed can help diagnose issues. Never attempt to repair an electric underfloor heating system yourself—always consult a qualified professional.",
    category: 'maintenance'
  }, {
    question: 'Can underfloor heating pipes or cables be repaired if damaged?',
    answer: "Yes, both electric and water systems can be repaired if damaged. For electric systems, pinpointing the damage location is done using a thermal imaging camera and specialized equipment. Once located, the damaged section can be repaired using a splice kit by a qualified electrician. For water systems, leak detection equipment helps locate the issue, and the pipe can be repaired using specialized fittings. Warmup provides comprehensive repair kits and technical support for both system types. In case of damage during installation, our SafetyNet™ Installation Guarantee means we'll replace the system free of charge. For systems damaged after installation, repairs are usually possible without removing the entire floor.",
    category: 'maintenance'
  },
  // Technical Questions
  {
    question: 'What temperature should I set my underfloor heating to?',
    answer: 'The ideal temperature setting depends on room usage, floor covering, and personal preference. For living areas, 20-22°C is typically comfortable. Bathrooms are often set warmer at 22-24°C. Bedrooms are usually kept cooler at 18-20°C. The maximum recommended temperature for most floor surfaces is 29°C (except for wooden floors where 27°C is the recommended maximum). Rather than focusing on the floor temperature, set your thermostat to achieve a comfortable room temperature. Smart thermostats like the Warmup 4iE will automatically determine the appropriate floor temperature to reach your desired room temperature efficiently.',
    category: 'technical'
  }, {
    question: "What's the difference between electric and water underfloor heating?",
    answer: 'Electric systems use heating cables to generate warmth, while water systems circulate warm water through pipes. Electric systems are thinner (3-4mm vs. 15-100mm for water), faster to install, and have lower initial costs, making them ideal for single room installations and renovations. Water systems have lower running costs, work efficiently with renewable energy sources like heat pumps, and are better suited for whole-house heating in new builds or major renovations. Electric systems heat up faster (20-30 minutes vs. 1-2 hours for water) but typically cost more to run. Both provide the same quality of heat and comfort once operating at temperature. The best choice depends on your specific project requirements, budget, and energy sources available.',
    category: 'technical'
  }, {
    question: 'Can underfloor heating cause floor damage?',
    answer: "When properly installed and controlled, underfloor heating will not damage your floors. All Warmup systems are designed to work safely with appropriate floor coverings. For wooden floors, it's important to: 1) Use engineered wood rather than solid wood where possible, 2) Ensure the wood is suitable for underfloor heating (check manufacturer guidelines), 3) Limit the maximum floor temperature to 27°C, 4) Allow new wood to acclimatize before turning on the heating, and 5) Increase temperature gradually when first heating or after periods of non-use. For tile and stone, use flexible adhesives and grouts specifically designed for underfloor heating. Following these guidelines ensures your floor covering will perform well with underfloor heating throughout its lifetime.",
    category: 'technical'
  }, {
    question: 'How deep does underfloor heating need to be?',
    answer: "The required depth varies by system type. Electric systems are extremely thin: Warmup StickyMat is just 3mm thick, while DCM-PRO is 5.5mm including the membrane. Water systems typically require more depth: the ultra-low profile Total-16 system is 16mm deep, while standard screeded systems may require 65-75mm (including screed). The total build-up height also depends on insulation requirements and floor covering. For renovation projects where floor height is limited, electric systems or low-profile water systems like Total-16 are ideal. In new builds where floor height isn't constrained, standard water systems often provide the most cost-effective solution for whole-house heating.",
    category: 'technical'
  }];
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const categories = [{
    id: 'all',
    name: 'All Questions'
  }, {
    id: 'general',
    name: 'General'
  }, {
    id: 'installation',
    name: 'Installation'
  }, {
    id: 'costs',
    name: 'Running Costs'
  }, {
    id: 'operation',
    name: 'Operation'
  }, {
    id: 'maintenance',
    name: 'Maintenance'
  }, {
    id: 'technical',
    name: 'Technical'
  }];
  const filteredFAQs = faqData.filter(faq => (activeCategory === 'all' || faq.category === activeCategory) && (searchQuery === '' || faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase())));
  return <section id="faq" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive answers to common questions about underfloor heating
            systems, installation, running costs, and maintenance.
          </p>
        </div>
        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input type="text" placeholder="Search for a question..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent" />
              <div className="absolute left-4 top-3.5 text-gray-400">
                <SearchIcon size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.id ? 'bg-[#ce1226] text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? filteredFAQs.map((faq, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none" onClick={() => toggleFAQ(index)}>
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {activeIndex === index ? <ChevronUpIcon size={20} className="flex-shrink-0 text-[#ce1226]" /> : <ChevronDownIcon size={20} className="flex-shrink-0 text-gray-500" />}
                </button>
                {activeIndex === index && <div className="px-6 pb-6 text-gray-700">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>}
              </div>) : <div className="text-center py-12">
              <p className="text-gray-500">
                No questions found matching your search. Please try a different
                search term.
              </p>
            </div>}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Our experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-md font-semibold transition-colors">
              Download Complete FAQ Guide
            </button>
          </div>
        </div>
      </div>
    </section>;
};