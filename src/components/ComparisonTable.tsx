import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
export const ComparisonTable = () => {
  return <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            System Comparison
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Compare our underfloor heating systems to find the perfect solution
            for your project requirements.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="px-6 py-4 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-4 bg-gray-100 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Electric Systems
                </th>
                <th className="px-6 py-4 bg-gray-100 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Water Systems
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Installation Complexity
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  Simpler, DIY-friendly
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  More complex, professional installation
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Installation Time
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  1-2 days per room
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  3-7 days for whole system
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  System Height
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  3-4mm
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  15-100mm
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Heat-up Time
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  20-30 minutes
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  1-2 hours
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Running Costs
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  £0.10-£0.20 per m² per day
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  £0.06-£0.12 per m² per day
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Ideal Project Type
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  Renovations, single rooms
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  New builds, whole house
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Compatible with Renewables
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <XIcon className="h-5 w-5 text-red-500" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Zoned Control
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Warranty
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  Lifetime
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  50 Years
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Initial Cost
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  Lower
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                  Higher
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">
            Which System Is Right For You?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-[#ce1226]">
                Choose Electric Systems If:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You're renovating a single room or small area</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Floor height is limited and you need a thin system
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You want a DIY-friendly installation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quick heat-up times are important</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You want lower initial installation costs</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-[#ce1226]">
                Choose Water Systems If:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    You're building a new home or doing major renovations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    You want to heat multiple rooms or an entire property
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You have access to renewable energy sources</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You want the lowest possible running costs</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Floor height isn't a significant constraint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};