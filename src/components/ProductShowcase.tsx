import React, { useState } from 'react';
import { ArrowRightIcon, ThermometerIcon, DropletIcon } from 'lucide-react';
export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('electric');
  return <section id="products" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-4">
            <span className="text-[#ce1226] text-sm font-medium">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Underfloor Heating Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of industry-leading underfloor heating systems
            designed for any project, from single room renovations to
            whole-house installations.
          </p>
        </div>
        <div className="mb-12">
          <div className="flex justify-center border-b border-gray-200">
            <button className={`py-3 px-6 font-medium text-lg flex items-center ${activeTab === 'electric' ? 'border-b-2 border-[#ce1226] text-[#ce1226]' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('electric')}>
              <ThermometerIcon className="mr-2 h-5 w-5" />
              Electric Systems
            </button>
            <button className={`py-3 px-6 font-medium text-lg flex items-center ${activeTab === 'water' ? 'border-b-2 border-[#ce1226] text-[#ce1226]' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('water')}>
              <DropletIcon className="mr-2 h-5 w-5" />
              Water Systems
            </button>
          </div>
        </div>
        {activeTab === 'electric' && <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/DCM-PRO-underfloor-heating-system-1536x864.jpg" alt="Warmup DCM-PRO System" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">DCM-PRO System</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our flagship electric floor heating system combines a
                  self-adhesive anti-fracture membrane with a heating cable,
                  providing crack isolation and uniform heat distribution.
                </p>
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Anti-fracture membrane</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Fast installation</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Uniform heat distribution</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Lifetime warranty</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-lg">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-4 py-2 rounded-full">
                      Bathrooms
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-full">
                      Kitchens
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-full">
                      Conservatories
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-full">
                      Irregular shaped rooms
                    </span>
                  </div>
                </div>
                <a href="https://www.warmup.co.uk/underfloor-heating/electric/dcm-pro" className="inline-flex items-center bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                  View Product Details
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/Electric-underfloor-heating-mat.jpg" alt="StickyMat System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">StickyMat System</h3>
                  <p className="text-gray-600 mb-4">
                    Ultra-thin heating mats with pre-spaced cables on an
                    adhesive mesh for quick and precise installation.
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Ultra-thin 3mm profile</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Rapid warm-up time</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">
                        Ideal for regular shaped rooms
                      </span>
                    </div>
                  </div>
                  <a href="https://www.warmup.co.uk/underfloor-heating/electric/sticky-mat" className="text-[#ce1226] font-medium flex items-center hover:underline">
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/Bathroom-Underfloor-Heating-Installation-1536x1025.jpg" alt="Loose Wire System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Loose Wire System</h3>
                  <p className="text-gray-600 mb-4">
                    Flexible heating wire that can be installed at variable
                    spacing for complex layouts and small areas.
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">
                        Ultra-thin 1.8mm heating wire
                      </span>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Variable spacing options</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Ideal for complex layouts</span>
                    </div>
                  </div>
                  <a href="https://www.warmup.co.uk/underfloor-heating/electric/loose-wire" className="text-[#ce1226] font-medium flex items-center hover:underline">
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.warmup.co.uk/wp-content/uploads/2023/01/4iE-Smart-WiFi-Thermostat-Onyx-Black-Front-View-1-1536x1536.jpg" alt="Smart Controls" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Smart Controls</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced thermostats with smart features to maximize comfort
                    while minimizing energy consumption.
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Smartphone control</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Energy usage monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Automated energy saving</span>
                    </div>
                  </div>
                  <a href="https://www.warmup.co.uk/thermostats" className="text-[#ce1226] font-medium flex items-center hover:underline">
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'water' && <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/Warmup_Total-16_Installation_Screed_Living-Room-1536x1024.jpg" alt="Warmup Total-16 System" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Total-16 System</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our innovative low-profile water underfloor heating system is
                  just 16mm deep, making it ideal for renovation projects where
                  floor height is limited.
                </p>
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Ultra-low 16mm profile</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Rapid response time</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Works with all floor finishes</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="bg-red-100 rounded-full p-1 mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>50-year warranty</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-lg">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-4 py-2 rounded-full">
                      Renovations
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-full">
                      Height-restricted projects
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-full">
                      Quick heat-up requirements
                    </span>
                  </div>
                </div>
                <a href="https://www.warmup.co.uk/underfloor-heating/hydronic/total-16" className="inline-flex items-center bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                  View Product Details
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup_Nexxa-Panel_Installation-1536x1024.jpg" alt="Clypso System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Clypso System</h3>
                  <p className="text-gray-600 mb-4">
                    Versatile water system using plastic clips to secure pipes
                    to insulation, suitable for any floor construction.
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Flexible pipe spacing</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Works with screed floors</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Ideal for large areas</span>
                    </div>
                  </div>
                  <a href="https://www.warmup.co.uk/underfloor-heating/hydronic/clypso" className="text-[#ce1226] font-medium flex items-center hover:underline">
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Forte-Grid-System-Installation-1536x1024.jpg" alt="Forte Grid System" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Forte Grid System</h3>
                  <p className="text-gray-600 mb-4">
                    Robust wire grid system for pipe installation, providing
                    excellent stability and heat transfer in concrete floors.
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">
                        Strong wire grid construction
                      </span>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Excellent heat output</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Ideal for concrete floors</span>
                    </div>
                  </div>
                  <a href="https://www.warmup.co.uk/underfloor-heating/hydronic/forte" className="text-[#ce1226] font-medium flex items-center hover:underline">
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Compact-Mixing-Unit-1536x1024.jpg" alt="Hydronic Controls" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Hydronic Controls</h3>
                  <p className="text-gray-600 mb-4">
                    Complete range of manifolds, mixing units, and controls for
                    efficient water underfloor heating systems.
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">
                        Precise temperature control
                      </span>
                    </div>
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Multi-zone capability</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ce1226] mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">
                        Compatible with heat pumps
                      </span>
                    </div>
                  </div>
                  <a href="https://www.warmup.co.uk/underfloor-heating/hydronic/controls" className="text-[#ce1226] font-medium flex items-center hover:underline">
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>}
        <div className="mt-8 text-center">
          <a href="https://www.warmup.co.uk/products" className="inline-flex items-center bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
            View All Products
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>;
};