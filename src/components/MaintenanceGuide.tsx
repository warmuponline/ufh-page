import React from 'react';
import { WrenchIcon, ClockIcon, ThermometerIcon, AlertTriangleIcon } from 'lucide-react';
export const MaintenanceGuide = () => {
  return <section id="maintenance" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Maintenance & Care Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to properly maintain your underfloor heating system to
            ensure optimal performance, efficiency, and longevity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://www.warmup.co.uk/wp-content/uploads/2023/01/4iE-Smart-WiFi-Thermostat-Onyx-Black-Front-View-1-1536x1536.jpg" alt="Warmup thermostat maintenance" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Routine Maintenance</h3>
            <p className="text-lg text-gray-700 mb-6">
              Warmup underfloor heating systems are designed to be virtually
              maintenance-free. However, some simple routine checks can help
              ensure optimal performance and identify any potential issues
              early.
            </p>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 text-[#ce1226]">
                  <ClockIcon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Seasonal System Check</h4>
                  <p className="text-gray-700">
                    Before the heating season begins, run your system to ensure
                    it's functioning properly. Check that all zones heat up
                    evenly and that the thermostats are responding correctly.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-[#ce1226]">
                  <ThermometerIcon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Thermostat Calibration</h4>
                  <p className="text-gray-700">
                    Every 2-3 years, verify that your thermostat is reading
                    temperatures accurately. If you notice discrepancies,
                    recalibrate or contact Warmup support for assistance.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-[#ce1226]">
                  <WrenchIcon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Water System Checks</h4>
                  <p className="text-gray-700">
                    For water systems, check manifold pressure annually and
                    inspect for any signs of leaks. Ensure the system is
                    properly balanced and that all actuators are functioning
                    correctly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">
              Optimizing System Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#ce1226]">
                  For Electric Systems:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        1
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Program your thermostat efficiently:
                      </span>{' '}
                      Use the scheduling feature to lower temperatures when
                      rooms are unoccupied and increase them before you return.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        2
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Update firmware regularly:
                      </span>{' '}
                      If you have a smart thermostat, ensure it's running the
                      latest firmware for optimal energy-saving features.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        3
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Use energy monitoring:
                      </span>{' '}
                      Review your system's energy usage reports to identify
                      opportunities for further efficiency improvements.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        4
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Maintain consistent temperatures:
                      </span>{' '}
                      Avoid frequent large temperature adjustments, as this can
                      increase energy consumption.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-[#ce1226]">
                  For Water Systems:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        1
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Check system pressure annually:
                      </span>{' '}
                      Ensure the system is maintaining the correct pressure
                      (typically 1-1.5 bar when cold).
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        2
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Bleed air from the system:
                      </span>{' '}
                      If you notice uneven heating or gurgling sounds, air may
                      need to be removed from the system.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        3
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Check inhibitor levels:
                      </span>{' '}
                      Every 3-5 years, have a heating engineer check and top up
                      the corrosion inhibitor in the system.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-[#ce1226] font-semibold text-sm">
                        4
                      </span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">
                        Optimize flow temperatures:
                      </span>{' '}
                      Set the lowest flow temperature that provides comfortable
                      heating to maximize energy efficiency.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <AlertTriangleIcon className="h-8 w-8 text-yellow-500 mr-4" />
              <h3 className="text-2xl font-bold">
                Troubleshooting Common Issues
              </h3>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">
                  System Not Heating
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                      Check if the thermostat is on and set to heating mode
                    </li>
                    <li>Verify that the circuit breaker hasn't tripped</li>
                    <li>
                      For water systems, check if the boiler/heat source is
                      functioning
                    </li>
                    <li>Ensure the programmer is set correctly</li>
                    <li>
                      Test the thermostat by increasing the set temperature well
                      above the current room temperature
                    </li>
                  </ol>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Uneven Heating</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                      For water systems, check for air in the system that may
                      need bleeding
                    </li>
                    <li>
                      Ensure the system has had sufficient time to warm up (can
                      take 1-2 hours)
                    </li>
                    <li>
                      Check for furniture or thick rugs covering heated areas
                    </li>
                    <li>
                      For water systems, verify that the manifold balancing
                      valves are set correctly
                    </li>
                    <li>
                      For electric systems, there may be variations in cable
                      spacing from installation
                    </li>
                  </ol>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">
                  Thermostat Issues
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Check if the thermostat is receiving power</li>
                    <li>
                      For smart thermostats, ensure they're connected to WiFi
                    </li>
                    <li>Try resetting the thermostat to factory settings</li>
                    <li>
                      Verify that the floor sensor is properly connected (for
                      floor sensing thermostats)
                    </li>
                    <li>
                      Check if the thermostat is in a suitable location (away
                      from drafts, heat sources)
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">
            When to Call a Professional
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            While Warmup systems are reliable and low-maintenance, certain
            situations require professional assistance:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-red-200 rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-3 text-[#ce1226]">
                For Electric Systems:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• System trips the RCD or circuit breaker</li>
                <li>• Thermostat shows error codes</li>
                <li>• Floor temperature sensor failure</li>
                <li>• System stops heating entirely</li>
                <li>• Visible damage to thermostat or controls</li>
                <li>
                  • Partial heating of the floor (may indicate cable damage)
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-3 text-[#ce1226]">
                For Water Systems:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Leaks from any part of the system</li>
                <li>• Persistent air in the system despite bleeding</li>
                <li>• Unusual noises (gurgling, banging)</li>
                <li>• Manifold component failures</li>
                <li>• Actuator failures</li>
                <li>• Pump or mixing valve issues</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Warmup Technical Support
            </button>
          </div>
        </div>
      </div>
    </section>;
};