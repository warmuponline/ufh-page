import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const BrandHeader = () => {
  return <section className="relative w-full bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src="https://www.warmup.co.uk/wp-content/uploads/2023/06/Warmup-Underfloor-Heating-Smart-Thermostat-Living-Room-1536x1024.jpg" alt="Warmup underfloor heating in a modern living room" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-center mb-6">
          <img src="https://www.warmup.co.uk/wp-content/themes/warmup-v4/assets/images/logo.svg" alt="Warmup Logo" className="h-12" />
        </div>
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-6">
            <span className="text-[#ce1226] text-sm font-medium">
              The World's Best-Selling Floor Heating Brand
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Experience Premium Underfloor Heating Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Discover why over 3.1 million homes worldwide trust Warmup for
            superior comfort, energy efficiency, and unmatched reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center justify-center">
              Find Your Perfect System
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-md font-semibold transition-colors">
              Request a Quote
            </button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center">
              <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/trustpilot-5-stars.svg" alt="Trustpilot 5 stars" className="h-8 mr-3" />
              <div>
                <div className="font-semibold">4.9/5 on Trustpilot</div>
                <div className="text-sm text-gray-500">
                  Based on 2,500+ reviews
                </div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300 mx-2 hidden md:block"></div>
            <div className="flex items-center">
              <div className="bg-[#ce1226] rounded-full p-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">25+ Years Experience</div>
                <div className="text-sm text-gray-500">
                  Industry leaders since 1994
                </div>
              </div>
            </div>
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
              <a href="#why-warmup" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Why Warmup
              </a>
              <a href="#case-studies" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Case Studies
              </a>
              <a href="#history" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Our History
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-[#ce1226] font-medium">
                Reviews
              </a>
            </div>
            <div>
              <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>;
};