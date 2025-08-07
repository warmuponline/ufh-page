import React from 'react';
import { CheckCircleIcon, ThermometerIcon, HomeIcon, BatteryChargingIcon } from 'lucide-react';
export const FeaturesSection = () => {
  return <section className="bg-gray-50 py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Superior Heating Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Warmup underfloor heating systems deliver unparalleled comfort and
            efficiency, transforming how you experience your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#ce1226] mb-5">
              <ThermometerIcon size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Even Heat Distribution</h3>
            <p className="text-gray-600">
              Experience consistent warmth across your entire floor surface,
              eliminating cold spots and creating a perfectly comfortable
              environment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#ce1226] mb-5">
              <BatteryChargingIcon size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Energy Efficient</h3>
            <p className="text-gray-600">
              Save up to 25% on heating costs with our advanced systems that
              operate at lower temperatures while delivering superior warmth.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#ce1226] mb-5">
              <HomeIcon size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Invisible Comfort</h3>
            <p className="text-gray-600">
              No radiators or visible heating elements means more usable space
              and complete design freedom for your interior.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="https://www.warmup.co.uk/wp-content/uploads/2023/01/4iE-Smart-WiFi-Thermostat-Onyx-Black-Front-View-1-1536x1536.jpg" alt="Warmup Smart Thermostat" className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Smart Control At Your Fingertips
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our intuitive smart thermostats learn your schedule and optimize
                heating for maximum comfort and efficiency.
              </p>
              <ul className="space-y-4">
                {['Remote control via smartphone app', 'Automatic temperature optimization', 'Energy usage monitoring and reporting', 'Smart home integration with major platforms'].map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircleIcon className="text-[#ce1226] mr-3 h-6 w-6 flex-shrink-0" />
                    <span>{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};