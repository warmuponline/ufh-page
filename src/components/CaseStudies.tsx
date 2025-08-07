import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const CaseStudies = () => {
  const caseStudies = [{
    title: 'Luxury Penthouse Renovation',
    location: 'London, UK',
    projectType: 'Residential',
    system: 'DCM-PRO Electric System',
    area: '150m²',
    challenge: 'Integrating high-performance heating without raising floor levels in this premium London penthouse.',
    solution: "Warmup's ultra-thin DCM-PRO system was installed throughout the property, providing luxurious warmth without compromising on design.",
    image: 'https://www.warmup.co.uk/wp-content/uploads/2023/06/Warmup-Underfloor-Heating-Smart-Thermostat-Living-Room-1536x1024.jpg'
  }, {
    title: 'Eco-Friendly New Build',
    location: 'Edinburgh, Scotland',
    projectType: 'Residential',
    system: 'Total-16 Water System with Heat Pump',
    area: '220m²',
    challenge: 'Creating an energy-efficient heating solution for a sustainable new build home.',
    solution: "Warmup's Total-16 water system was paired with an air source heat pump, delivering exceptional efficiency and comfort.",
    image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup_Nexxa-Panel_Installation-1536x1024.jpg'
  }, {
    title: 'Historic Church Conversion',
    location: 'Yorkshire, UK',
    projectType: 'Commercial/Residential',
    system: 'Clypso Water System',
    area: '350m²',
    challenge: 'Heating a large, open-plan space with high ceilings while preserving historic features.',
    solution: "Warmup's Clypso water system provided efficient background heating that complemented the building's character.",
    image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Forte-Grid-System-Installation-1536x1024.jpg'
  }];
  return <section id="case-studies" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-4">
            <span className="text-[#ce1226] text-sm font-medium">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Warmup underfloor heating solutions have transformed
            properties across the UK and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{study.title}</h3>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">
                    {study.projectType}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-1">
                    {study.location}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">System: {study.system}</span>
                    <span>Area: {study.area}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-1">Challenge:</h4>
                  <p className="text-sm text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-1">Solution:</h4>
                  <p className="text-sm text-gray-600">{study.solution}</p>
                </div>
                <a href="#" className="text-[#ce1226] font-medium flex items-center hover:underline">
                  Read Full Case Study
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Shard, London</h3>
              <div className="mb-2 text-sm text-gray-500">Featured Project</div>
              <p className="text-gray-700 mb-6">
                Warmup provided the complete underfloor heating solution for The
                Shard, Western Europe's tallest building. Our systems were
                installed throughout the luxury apartments, providing efficient
                heating while meeting the exacting standards required for this
                iconic development.
              </p>
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500">System Type</div>
                    <div className="font-medium">Total-16 Water System</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Area Covered</div>
                    <div className="font-medium">5,000+ m²</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Completion</div>
                    <div className="font-medium">2012</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Project Value</div>
                    <div className="font-medium">£1.5+ million</div>
                  </div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                View Project Details
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div>
              <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/the-shard-london-bridge-warmup.jpg" alt="The Shard, London" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="https://www.warmup.co.uk/projects" className="inline-flex items-center bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
            View All Case Studies
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>;
};