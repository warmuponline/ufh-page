import React, { Component } from 'react';
export const SpecificationsSection = () => {
  return <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Product Specifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our underfloor heating systems are engineered to the highest
            standards, ensuring reliable performance and longevity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/Electric-underfloor-heating-mat.jpg" alt="Warmup electric underfloor heating mat" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Electric Underfloor Heating
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">System Type</div>
                  <div className="font-semibold">Electric Heating Mat</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Power Output</div>
                  <div className="font-semibold">150W/m²</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Cable Thickness</div>
                  <div className="font-semibold">3mm</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Warranty</div>
                  <div className="font-semibold">Lifetime</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Heating Element</div>
                  <div className="font-semibold">Twin-conductor</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">IP Rating</div>
                  <div className="font-semibold">IPX7</div>
                </div>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold mb-2">
                  Compatible Floor Coverings
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Tile & Stone</li>
                  <li>Engineered Wood</li>
                  <li>Laminate</li>
                  <li>Vinyl</li>
                  <li>Carpet (with appropriate underlay)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Installation Depth</h4>
                <p className="text-gray-700">
                  As thin as 3mm, making it ideal for renovation projects where
                  floor height is a concern.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">
                Water Underfloor Heating
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">System Type</div>
                    <div className="font-semibold">Hydronic</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Pipe Material</div>
                    <div className="font-semibold">PE-RT</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Pipe Diameter</div>
                    <div className="font-semibold">16mm</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Warranty</div>
                    <div className="font-semibold">50 Years</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">
                      Max Operating Temp
                    </div>
                    <div className="font-semibold">55°C</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">
                      Max Operating Pressure
                    </div>
                    <div className="font-semibold">6 bar</div>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold mb-2">System Components</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Insulation panels</li>
                    <li>Manifold</li>
                    <li>Actuators</li>
                    <li>Mixing unit</li>
                    <li>Smart controls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Installation Height</h4>
                  <p className="text-gray-700">
                    From 15mm above insulation, suitable for both new builds and
                    major renovation projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/Warmup_Total-16_Installation_Screed_Living-Room-1536x1024.jpg" alt="Warmup water underfloor heating system" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};