import React from 'react';
export const HeroSection = () => {
  return <section className="relative w-full bg-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/DCM-PRO-underfloor-heating-system-1536x864.jpg" alt="Underfloor heating installation" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="flex items-center mb-6">
              <img src="https://www.warmup.co.uk/wp-content/themes/warmup-v4/assets/images/logo.svg" alt="Warmup Logo" className="h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Underfloor Heating Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Experience ultimate comfort with energy-efficient heating that
              transforms your home. The world's best-selling floor heating
              brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Get a Quote
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-md font-semibold transition-colors">
                Explore Products
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/DCM-PRO-underfloor-heating-system-1536x864.jpg" alt="Warmup underfloor heating system" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm">
                    Energy Efficient
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};