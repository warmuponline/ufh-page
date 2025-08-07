import React, { useState } from 'react';
import { CheckIcon, HelpCircleIcon, ArrowRightIcon } from 'lucide-react';
export const ProductSelector = () => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [floorType, setFloorType] = useState('');
  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const getRecommendation = () => {
    if (projectType === 'renovation' && floorType === 'tile') {
      return {
        name: 'DCM-PRO System',
        description: 'Our anti-fracture membrane system is perfect for renovation projects with tile flooring, providing crack protection and uniform heat distribution.',
        image: 'https://www.warmup.co.uk/wp-content/uploads/2023/09/DCM-PRO-underfloor-heating-system-1536x864.jpg',
        link: 'https://www.warmup.co.uk/underfloor-heating/electric/dcm-pro'
      };
    } else if (projectType === 'renovation' && floorType === 'wood') {
      return {
        name: 'StickyMat System with Insulation',
        description: 'Our ultra-thin StickyMat system paired with Ultralight insulation boards is ideal for renovation projects with wood flooring.',
        image: 'https://www.warmup.co.uk/wp-content/uploads/2023/09/Electric-underfloor-heating-mat.jpg',
        link: 'https://www.warmup.co.uk/underfloor-heating/electric/sticky-mat'
      };
    } else if (projectType === 'new-build') {
      return {
        name: 'Total-16 Water System',
        description: 'For new builds, our Total-16 water system provides efficient whole-house heating compatible with renewable energy sources.',
        image: 'https://www.warmup.co.uk/wp-content/uploads/2023/09/Warmup_Total-16_Installation_Screed_Living-Room-1536x1024.jpg',
        link: 'https://www.warmup.co.uk/underfloor-heating/hydronic/total-16'
      };
    } else {
      return {
        name: 'Custom Solution',
        description: 'Based on your specific requirements, we recommend speaking with our heating experts for a tailored solution.',
        image: 'https://www.warmup.co.uk/wp-content/uploads/2023/06/Warmup-Underfloor-Heating-Smart-Thermostat-Living-Room-1536x1024.jpg',
        link: 'https://www.warmup.co.uk/contact'
      };
    }
  };
  return <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-4">
            <span className="text-[#ce1226] text-sm font-medium">
              Find Your Perfect System
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Product Selector
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Answer a few quick questions and we'll recommend the ideal Warmup
            system for your project.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 bg-gray-50 border-b">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map(s => <div key={s} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s < step ? 'bg-[#ce1226] text-white' : s === step ? 'bg-[#ce1226] text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {s < step ? <CheckIcon className="h-5 w-5" /> : s}
                  </div>
                  <div className="text-xs mt-1 text-gray-500">
                    {s === 1 ? 'Project' : s === 2 ? 'Room' : s === 3 ? 'Floor' : 'Result'}
                  </div>
                </div>)}
            </div>
          </div>
          <div className="p-8">
            {step === 1 && <div>
                <h3 className="text-xl font-bold mb-6">
                  What type of project are you working on?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className={`p-6 border-2 rounded-lg text-left hover:border-[#ce1226] transition-colors ${projectType === 'renovation' ? 'border-[#ce1226] bg-red-50' : 'border-gray-200'}`} onClick={() => setProjectType('renovation')}>
                    <div className="font-semibold mb-2">Renovation</div>
                    <p className="text-gray-600 text-sm">
                      Upgrading an existing space or adding underfloor heating
                      to a single room.
                    </p>
                  </button>
                  <button className={`p-6 border-2 rounded-lg text-left hover:border-[#ce1226] transition-colors ${projectType === 'new-build' ? 'border-[#ce1226] bg-red-50' : 'border-gray-200'}`} onClick={() => setProjectType('new-build')}>
                    <div className="font-semibold mb-2">New Build</div>
                    <p className="text-gray-600 text-sm">
                      Building a new property or undertaking a major renovation
                      project.
                    </p>
                  </button>
                </div>
              </div>}
            {step === 2 && <div>
                <h3 className="text-xl font-bold mb-6">
                  Which room are you heating?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {['Bathroom', 'Kitchen', 'Living Room', 'Bedroom', 'Conservatory', 'Whole House'].map(room => <button key={room} className={`p-4 border-2 rounded-lg text-center hover:border-[#ce1226] transition-colors ${roomType === room.toLowerCase() ? 'border-[#ce1226] bg-red-50' : 'border-gray-200'}`} onClick={() => setRoomType(room.toLowerCase())}>
                      <div className="font-semibold">{room}</div>
                    </button>)}
                </div>
              </div>}
            {step === 3 && <div>
                <h3 className="text-xl font-bold mb-6">
                  What type of floor covering will you have?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {['Tile & Stone', 'Engineered Wood', 'Laminate', 'Vinyl', 'Carpet'].map(floor => <button key={floor} className={`p-4 border-2 rounded-lg text-center hover:border-[#ce1226] transition-colors ${floorType === floor.toLowerCase().split(' ')[0] ? 'border-[#ce1226] bg-red-50' : 'border-gray-200'}`} onClick={() => setFloorType(floor.toLowerCase().split(' ')[0])}>
                      <div className="font-semibold">{floor}</div>
                    </button>)}
                </div>
              </div>}
            {step === 4 && <div>
                <h3 className="text-xl font-bold mb-6">
                  Your Recommended System
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <img src={getRecommendation().image} alt={getRecommendation().name} className="rounded-lg shadow-sm" />
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="text-xl font-bold mb-2">
                        {getRecommendation().name}
                      </h4>
                      <p className="text-gray-600 mb-6">
                        {getRecommendation().description}
                      </p>
                      <a href={getRecommendation().link} className="inline-flex items-center bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                        View Product Details
                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg flex items-start">
                  <HelpCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700">
                    Need more specific advice? Our heating experts are available
                    to provide personalized recommendations based on your exact
                    requirements.
                    <a href="https://www.warmup.co.uk/contact" className="block mt-2 font-medium hover:underline">
                      Contact our team
                    </a>
                  </p>
                </div>
              </div>}
            <div className="mt-8 flex justify-between">
              <button onClick={handleBack} className={`px-6 py-2 border border-gray-300 rounded-md ${step === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`} disabled={step === 1}>
                Back
              </button>
              {step < 4 && <button onClick={handleNext} className={`px-6 py-2 bg-[#ce1226] text-white rounded-md ${step === 1 && !projectType || step === 2 && !roomType || step === 3 && !floorType ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#b10e20]'}`} disabled={step === 1 && !projectType || step === 2 && !roomType || step === 3 && !floorType}>
                  Next
                </button>}
              {step === 4 && <button onClick={() => setStep(1)} className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  Start Over
                </button>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};