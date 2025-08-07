import React, { useState } from 'react';
import { CalculatorIcon } from 'lucide-react';
export const CostCalculator = () => {
  const [roomSize, setRoomSize] = useState(15);
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [systemType, setSystemType] = useState('electric');
  // Simple calculation for demonstration
  const calculateCost = () => {
    const baseCost = systemType === 'electric' ? 0.12 : 0.08; // cost per kWh
    const powerUsage = systemType === 'electric' ? 150 : 100; // watts per square meter
    const dailyCost = roomSize * powerUsage / 1000 * hoursPerDay * baseCost;
    const monthlyCost = dailyCost * 30;
    return {
      daily: dailyCost.toFixed(2),
      monthly: monthlyCost.toFixed(2)
    };
  };
  const costs = calculateCost();
  return <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Running Cost Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estimate how much it will cost to run your underfloor heating system
            based on your specific requirements.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-medium mb-2">
                    Room Size (m²)
                  </label>
                  <input type="range" min="5" max="50" value={roomSize} onChange={e => setRoomSize(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>5 m²</span>
                    <span className="font-medium">{roomSize} m²</span>
                    <span>50 m²</span>
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">
                    Hours of Operation Per Day
                  </label>
                  <input type="range" min="1" max="24" value={hoursPerDay} onChange={e => setHoursPerDay(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>1 hour</span>
                    <span className="font-medium">{hoursPerDay} hours</span>
                    <span>24 hours</span>
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">
                    System Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button className={`p-4 rounded-lg border-2 transition-all ${systemType === 'electric' ? 'border-[#ce1226] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setSystemType('electric')}>
                      <div className="font-medium">Electric System</div>
                      <div className="text-sm text-gray-500">
                        Direct heat, faster response
                      </div>
                    </button>
                    <button className={`p-4 rounded-lg border-2 transition-all ${systemType === 'water' ? 'border-[#ce1226] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => setSystemType('water')}>
                      <div className="font-medium">Water System</div>
                      <div className="text-sm text-gray-500">
                        Hydronic, more efficient
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 text-white flex flex-col justify-center">
              <div className="mb-6 flex items-center">
                <CalculatorIcon size={28} className="mr-3" />
                <h3 className="text-2xl font-semibold">Estimated Costs</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-gray-300 mb-1">Daily Running Cost</div>
                  <div className="text-3xl font-bold">£{costs.daily}</div>
                </div>
                <div>
                  <div className="text-gray-300 mb-1">Monthly Running Cost</div>
                  <div className="text-3xl font-bold">£{costs.monthly}</div>
                </div>
                <div className="pt-4">
                  <div className="text-sm text-gray-300">
                    Based on average energy costs. Actual costs may vary
                    depending on your energy provider and usage patterns.
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors w-full">
                  Get a Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};