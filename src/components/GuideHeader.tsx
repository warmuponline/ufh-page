import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const GuideHeader = () => {
  return <section className="relative w-full bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/DCM-PRO-underfloor-heating-system-1536x864.jpg" alt="Underfloor heating installation" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-center mb-6">
          <img src="https://www.warmup.co.uk/wp-content/themes/warmup-v4/assets/images/logo.svg" alt="Warmup Logo" className="h-10" />
        </div>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Complete Guide to Underfloor Heating
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Everything you need to know about selecting, installing, and
            maintaining the perfect underfloor heating system for your home or
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Get Expert Advice
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-md font-semibold transition-colors">
              Download Full Guide (PDF)
            </button>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              25+ Years Experience
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              3.1M+ Systems Installed
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Lifetime Warranties
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Energy Efficient Solutions
            </span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500 mb-1">
              Scroll to explore
            </span>
            <ChevronDownIcon className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
      <nav className="sticky top-0 bg-white shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="https://www.warmup.co.uk/wp-content/themes/warmup-v4/assets/images/logo.svg" alt="Warmup Logo" className="h-8" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Products
              </a>
              <a href="#installation" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Installation
              </a>
              <a href="#costs" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Costs
              </a>
              <a href="#maintenance" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Maintenance
              </a>
              <a href="#faq" className="text-gray-700 hover:text-[#ce1226] font-medium">
                FAQs
              </a>
            </div>
            <div>
              <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>;
};