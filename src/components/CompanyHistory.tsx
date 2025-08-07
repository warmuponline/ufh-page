import React from 'react';
export const CompanyHistory = () => {
  const milestones = [{
    year: '1994',
    title: 'Warmup Founded',
    description: 'Warmup was established in the UK with a vision to create innovative heating solutions.',
    icon: '🏢'
  }, {
    year: '1999',
    title: 'International Expansion',
    description: 'Warmup began its global journey, expanding operations to Europe and North America.',
    icon: '🌎'
  }, {
    year: '2003',
    title: '1 Million Systems Milestone',
    description: 'Warmup celebrated the installation of its 1 millionth underfloor heating system worldwide.',
    icon: '🏆'
  }, {
    year: '2009',
    title: 'Smart Control Revolution',
    description: 'Launch of the first Warmup smart thermostat, bringing intelligent heating control to homes.',
    icon: '📱'
  }, {
    year: '2015',
    title: '2 Million Systems Milestone',
    description: 'Warmup reached 2 million installations, cementing its position as a global market leader.',
    icon: '🏆'
  }, {
    year: '2018',
    title: 'Research Center Expansion',
    description: 'Opening of the expanded Warmup research and development facility for next-generation heating technology.',
    icon: '🔬'
  }, {
    year: '2022',
    title: '3 Million Systems Milestone',
    description: 'Warmup celebrated its 3 millionth system installation across more than 70 countries.',
    icon: '🏆'
  }];
  return <section id="history" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-4">
            <span className="text-[#ce1226] text-sm font-medium">
              Our Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Warmup Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming the world's best-selling floor
            heating brand, discover our journey of innovation and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/warmup-office.jpg" alt="Warmup Headquarters" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">25+ Years of Innovation</h3>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1994, Warmup began with a simple mission: to deliver
              the world's best underfloor heating solutions. What started as a
              small UK operation has grown into a global enterprise with
              presence in over 70 countries and more than 3.1 million systems
              installed worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Throughout our journey, we've remained committed to innovation,
              quality, and customer satisfaction. Our research and development
              teams continuously push the boundaries of heating technology,
              resulting in patented systems that lead the industry in efficiency
              and reliability.
            </p>
            <p className="text-lg text-gray-700">
              Today, Warmup is recognized as the world's best-selling floor
              heating brand, trusted by homeowners, architects, and installers
              for projects of all sizes – from single room renovations to
              landmark developments like The Shard in London.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Key Milestones
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 md:block hidden">
                      <div className="w-12 h-12 rounded-full bg-[#ce1226] flex items-center justify-center text-white font-bold">
                        {milestone.icon}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="md:w-5/12"></div>
                    <div className={`bg-white p-6 rounded-lg shadow-sm md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#ce1226] flex items-center justify-center text-white font-bold mr-4 md:hidden">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-[#ce1226] font-bold text-2xl">
                            {milestone.year}
                          </div>
                          <h4 className="font-semibold text-lg">
                            {milestone.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Global Presence</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With operations in over 70 countries, Warmup delivers
              industry-leading heating solutions to homes and businesses
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-[#ce1226] text-3xl font-bold mb-2">70+</div>
              <div className="font-medium">Countries</div>
            </div>
            <div>
              <div className="text-[#ce1226] text-3xl font-bold mb-2">9</div>
              <div className="font-medium">Global Offices</div>
            </div>
            <div>
              <div className="text-[#ce1226] text-3xl font-bold mb-2">
                1,000+
              </div>
              <div className="font-medium">Team Members</div>
            </div>
            <div>
              <div className="text-[#ce1226] text-3xl font-bold mb-2">24/7</div>
              <div className="font-medium">Support Network</div>
            </div>
          </div>
          <div className="mt-8">
            <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/warmup-world-map.jpg" alt="Warmup Global Presence Map" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>;
};