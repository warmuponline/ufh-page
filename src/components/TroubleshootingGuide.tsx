import React from 'react';
import { HelpCircleIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react';
export const TroubleshootingGuide = () => {
  return <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Troubleshooting
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for resolving common issues with your
            underfloor heating system.
          </p>
        </div>
        <div className="mb-16">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangleIcon className="h-8 w-8 text-[#ce1226] mr-4" />
              <h3 className="text-2xl font-bold">
                Electric System Troubleshooting
              </h3>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Fault: System Not Heating
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-semibold mb-3 text-[#ce1226]">
                      Possible Causes
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Power supply issue</li>
                      <li>• Thermostat programming</li>
                      <li>• Tripped RCD/circuit breaker</li>
                      <li>• Loose connections</li>
                      <li>• Damaged heating cable</li>
                      <li>• Faulty thermostat</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm md:col-span-2">
                    <h5 className="font-semibold mb-3 text-[#ce1226]">
                      Diagnostic Steps
                    </h5>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>
                        <span className="font-medium">Check power supply:</span>{' '}
                        Verify that the circuit breaker is on and the system is
                        receiving power.
                      </li>
                      <li>
                        <span className="font-medium">Test thermostat:</span>{' '}
                        Set the thermostat to 5°C above current room temperature
                        and check if the heating indicator appears on the
                        display.
                      </li>
                      <li>
                        <span className="font-medium">Check resistance:</span>{' '}
                        If you have a multimeter, measure the resistance of the
                        heating cable and compare it to the values on the
                        product label.
                      </li>
                      <li>
                        <span className="font-medium">
                          Inspect connections:
                        </span>{' '}
                        Ensure all electrical connections are secure at the
                        thermostat.
                      </li>
                      <li>
                        <span className="font-medium">Test floor sensor:</span>{' '}
                        Measure the resistance of the floor sensor (typically
                        10kΩ at 25°C).
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <div className="flex">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold mb-1">Solution:</h5>
                      <p className="text-gray-700">
                        If the thermostat is functioning but the floor isn't
                        heating, the issue may be with the heating cable.
                        Contact Warmup technical support with your resistance
                        readings for further guidance. If the thermostat shows
                        no signs of power, check the circuit breaker and RCD.
                        For programming issues, reset the thermostat to factory
                        settings and reprogram according to the user manual.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Fault: Thermostat Showing Error Codes
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                          Error Code
                        </th>
                        <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                          Meaning
                        </th>
                        <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-600">
                          Solution
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          E1
                        </td>
                        <td className="px-4 py-3 text-sm">
                          Floor sensor error
                        </td>
                        <td className="px-4 py-3 text-sm">
                          Check floor sensor connection or replace if damaged
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          E2
                        </td>
                        <td className="px-4 py-3 text-sm">Air sensor error</td>
                        <td className="px-4 py-3 text-sm">
                          Thermostat may need replacement
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          E3
                        </td>
                        <td className="px-4 py-3 text-sm">Overheating</td>
                        <td className="px-4 py-3 text-sm">
                          Check temperature settings and ensure no external heat
                          sources are affecting the thermostat
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          E4/E5
                        </td>
                        <td className="px-4 py-3 text-sm">Internal error</td>
                        <td className="px-4 py-3 text-sm">
                          Reset thermostat or replace if error persists
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          WiFi Symbol Flashing
                        </td>
                        <td className="px-4 py-3 text-sm">
                          Connectivity issue
                        </td>
                        <td className="px-4 py-3 text-sm">
                          Check WiFi signal strength, router settings, or reset
                          network connection
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <AlertTriangleIcon className="h-8 w-8 text-[#ce1226] mr-4" />
              <h3 className="text-2xl font-bold">
                Water System Troubleshooting
              </h3>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Fault: Uneven Heating or Cold Spots
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-semibold mb-3 text-[#ce1226]">
                      Possible Causes
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Air trapped in the system</li>
                      <li>• Unbalanced circuits</li>
                      <li>• Pump issues</li>
                      <li>• Blocked pipes</li>
                      <li>• Incorrect manifold settings</li>
                      <li>• Faulty actuators</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm md:col-span-2">
                    <h5 className="font-semibold mb-3 text-[#ce1226]">
                      Diagnostic Steps
                    </h5>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>
                        <span className="font-medium">Bleed the system:</span>{' '}
                        Release any trapped air using the bleed valves on the
                        manifold.
                      </li>
                      <li>
                        <span className="font-medium">Check flow rates:</span>{' '}
                        Verify that all circuits are receiving similar flow
                        rates by checking the flow meters on the manifold.
                      </li>
                      <li>
                        <span className="font-medium">
                          Inspect pump operation:
                        </span>{' '}
                        Ensure the circulation pump is running and at the
                        correct speed setting.
                      </li>
                      <li>
                        <span className="font-medium">Test actuators:</span>{' '}
                        Manually trigger each actuator to confirm they're
                        opening and closing properly.
                      </li>
                      <li>
                        <span className="font-medium">
                          Check system pressure:
                        </span>{' '}
                        Verify that the system is maintaining proper pressure
                        (typically 1-1.5 bar when cold).
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <div className="flex">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold mb-1">Solution:</h5>
                      <p className="text-gray-700">
                        If air is found in the system, thoroughly bleed all
                        circuits until water flows smoothly without bubbles. For
                        unbalanced circuits, adjust the flow rates using the
                        manifold balancing valves. If actuators aren't
                        functioning, they may need replacement. For persistent
                        issues, check for blockages in the pipework or consider
                        having the system professionally power-flushed to remove
                        any debris.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Fault: System Pressure Dropping
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h5 className="font-semibold mb-3 text-[#ce1226]">
                      Possible Causes
                    </h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Leaks in the pipework</li>
                      <li>• Faulty expansion vessel</li>
                      <li>• Loose connections</li>
                      <li>• Automatic air vent issues</li>
                      <li>• Pressure relief valve leaking</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm md:col-span-2">
                    <h5 className="font-semibold mb-3 text-[#ce1226]">
                      Diagnostic Steps
                    </h5>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>
                        <span className="font-medium">Visual inspection:</span>{' '}
                        Check all visible pipework, connections, and the
                        manifold for signs of water or dampness.
                      </li>
                      <li>
                        <span className="font-medium">
                          Test expansion vessel:
                        </span>{' '}
                        Check if the expansion vessel is functioning correctly
                        by testing its air pressure.
                      </li>
                      <li>
                        <span className="font-medium">Monitor pressure:</span>{' '}
                        Note how quickly pressure drops to determine severity.
                      </li>
                      <li>
                        <span className="font-medium">
                          Check automatic air vents:
                        </span>{' '}
                        Ensure they're not continuously releasing water along
                        with air.
                      </li>
                      <li>
                        <span className="font-medium">
                          Inspect pressure relief valve:
                        </span>{' '}
                        Check if it's leaking or opening at too low a pressure.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <div className="flex">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold mb-1">Solution:</h5>
                      <p className="text-gray-700">
                        For visible leaks, tighten connections or replace
                        damaged components. If the expansion vessel is faulty,
                        it will need replacement. For hidden leaks, a
                        professional leak detection service may be required. In
                        some cases, adding a leak sealant to the system may
                        resolve minor issues. If the pressure relief valve is
                        faulty, it should be replaced to prevent unnecessary
                        water loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-xl font-bold">Professional Support Options</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5 text-center">
                <div className="text-[#ce1226] mb-4">
                  <HelpCircleIcon className="h-12 w-12 mx-auto" />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Technical Support
                </h4>
                <p className="text-gray-600 mb-4">
                  Expert advice for troubleshooting and resolving system issues
                </p>
                <p className="font-semibold">0345 345 2288</p>
                <p className="text-sm text-gray-500">
                  Mon-Fri: 8:30am - 5:30pm
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5 text-center">
                <div className="text-[#ce1226] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Service Engineers
                </h4>
                <p className="text-gray-600 mb-4">
                  Professional on-site diagnostics and repair services
                </p>
                <button className="w-full bg-[#ce1226] hover:bg-[#b10e20] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Book an Engineer
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5 text-center">
                <div className="text-[#ce1226] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2">Knowledge Base</h4>
                <p className="text-gray-600 mb-4">
                  Access our extensive library of guides, videos, and FAQs
                </p>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Browse Resources
                </button>
              </div>
            </div>
            <div className="mt-8 p-5 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Warranty Information</h4>
              <p className="text-gray-700 mb-4">
                Warmup offers industry-leading warranties on all our products.
                If you're experiencing issues with a system under warranty, our
                support team can help guide you through the warranty claim
                process.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-md border border-gray-200">
                  <span className="block text-sm text-gray-500">
                    Electric Systems
                  </span>
                  <span className="font-semibold">Lifetime Warranty</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-md border border-gray-200">
                  <span className="block text-sm text-gray-500">
                    Water Systems
                  </span>
                  <span className="font-semibold">50 Year Warranty</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-md border border-gray-200">
                  <span className="block text-sm text-gray-500">
                    Thermostats
                  </span>
                  <span className="font-semibold">3 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};