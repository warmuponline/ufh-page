import React from 'react';
import { CheckCircleIcon, ThermometerIcon, BatteryChargingIcon, HomeIcon, AwardIcon, GlobeIcon } from 'lucide-react';
export const WhyWarmup = () => {
  return <section id="why-warmup" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-4">
            <span className="text-[#ce1226] text-sm font-medium">
              Why Choose Warmup
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The World's Best-Selling Floor Heating Brand
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over 25 years, Warmup has been the trusted choice for
            homeowners, architects, and installers worldwide. Here's why we lead
            the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#ce1226] mb-5">
              <ThermometerIcon size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Superior Technology</h3>
            <p className="text-gray-600 mb-4">
              Our systems feature advanced heating elements and smart controls
              developed through extensive R&D and rigorous testing.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Patented heating technology</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Industry-leading energy efficiency</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#ce1226] mb-5">
              <AwardIcon size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Unmatched Reliability</h3>
            <p className="text-gray-600 mb-4">
              Our products are built to last, backed by the industry's most
              comprehensive warranties and 24/7 technical support.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Lifetime warranties on electric systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>50-year warranties on water systems</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[#ce1226] mb-5">
              <GlobeIcon size={36} />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Expertise</h3>
            <p className="text-gray-600 mb-4">
              With over 3.1 million systems installed in more than 70 countries,
              we bring global expertise to every local installation.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Operations in 70+ countries</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Localized technical support</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="https://www.warmup.co.uk/wp-content/uploads/2023/01/4iE-Smart-WiFi-Thermostat-Onyx-Black-Front-View-1-1536x1536.jpg" alt="Warmup Smart Thermostat" className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-4">
                <span className="text-[#ce1226] text-sm font-medium">
                  Industry Innovation
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Pioneering Smart Heating Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Warmup has revolutionized how homes stay warm with our
                award-winning smart thermostats and energy management systems.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-[#ce1226] font-semibold text-sm">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">SmartGeo™ Technology</h4>
                    <p className="text-gray-600">
                      Automatically adjusts your heating based on your location
                      and schedule
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-[#ce1226] font-semibold text-sm">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">EasySwitch™ Algorithm</h4>
                    <p className="text-gray-600">
                      Identifies energy savings opportunities and suggests
                      optimizations
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-[#ce1226] font-semibold text-sm">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Multi-Zone Control</h4>
                    <p className="text-gray-600">
                      Manage different rooms independently for maximum comfort
                      and efficiency
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#ce1226] text-4xl font-bold mb-2">3.1M+</div>
            <div className="font-medium">Systems Installed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#ce1226] text-4xl font-bold mb-2">70+</div>
            <div className="font-medium">Countries Worldwide</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#ce1226] text-4xl font-bold mb-2">25+</div>
            <div className="font-medium">Years of Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-[#ce1226] text-4xl font-bold mb-2">4.9/5</div>
            <div className="font-medium">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>;
};