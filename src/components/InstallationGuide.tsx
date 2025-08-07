import React, { useState } from 'react';
import { CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
export const InstallationGuide = () => {
  const [activeTab, setActiveTab] = useState('electric');
  return <section id="installation" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Installation Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow our step-by-step guide to ensure a successful underfloor
            heating installation, whether you're a professional installer or
            tackling a DIY project.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex border-b border-gray-200">
            <button className={`py-3 px-6 font-medium text-lg ${activeTab === 'electric' ? 'border-b-2 border-[#ce1226] text-[#ce1226]' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('electric')}>
              Electric System Installation
            </button>
            <button className={`py-3 px-6 font-medium text-lg ${activeTab === 'water' ? 'border-b-2 border-[#ce1226] text-[#ce1226]' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('water')}>
              Water System Installation
            </button>
          </div>
        </div>
        {activeTab === 'electric' && <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/Bathroom-Underfloor-Heating-Installation-1536x1025.jpg" alt="Electric underfloor heating installation" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Before You Begin</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Before installing your electric underfloor heating system,
                  ensure you have all necessary materials and that the subfloor
                  is clean, dry, and structurally sound.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Materials Needed:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Warmup heating system (mat or cable)</li>
                    <li>Warmup thermostat</li>
                    <li>Insulation boards (recommended)</li>
                    <li>Digital multimeter</li>
                    <li>Floor sensor</li>
                    <li>Tape measure and marker</li>
                    <li>
                      Scissors (for cutting mat backing, not the heating wire)
                    </li>
                    <li>Electrical tape</li>
                    <li>Flexible conduit for floor sensor</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
                  <div className="flex">
                    <AlertCircleIcon className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <p className="text-sm text-yellow-700">
                      Always consult a qualified electrician for the final
                      connections to your thermostat and electrical supply. All
                      electrical work must comply with current regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 1
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Prepare the Subfloor
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Ensure the subfloor is clean, dry, and free from debris.
                    Install insulation boards if required for improved
                    efficiency.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Remove any dust, debris, and sharp objects</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Apply primer if installing on a concrete subfloor
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Install insulation boards following manufacturer's
                        instructions
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 2
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Plan the Layout
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Carefully plan where the heating system will be installed,
                    ensuring coverage of high-traffic areas and avoiding fixed
                    furniture.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Measure the free floor area (avoiding fixed furniture)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Mark the position of the thermostat and floor sensor
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Draw the mat/cable layout on the floor or a sketch
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 3
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Install the Sensor
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Install the floor sensor in a conduit between two heating
                    elements, positioned centrally in the heated area.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Place the sensor conduit in a groove in the subfloor
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Position sensor midway between two heating wires
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Run the sensor cable back to the thermostat location
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 4
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Install the Heating System
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Roll out the heating mat or lay the cable according to your
                    planned layout, securing it to the subfloor.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Test the system resistance before installation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lay the mat/cable according to your plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        For mats: cut the backing (never the wire) to navigate
                        corners
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure to the floor with tape or adhesive</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 5
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Test and Connect
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Test the system again after installation and connect the
                    cold tail leads to the thermostat.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Test resistance again and record the readings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Take photos of the installed system for records
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Have a qualified electrician connect the system to the
                        thermostat
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 6
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Install Floor Covering
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Apply tile adhesive, self-leveling compound, or appropriate
                    underlay and install your chosen floor covering.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Apply flexible tile adhesive for tile/stone floors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Use self-leveling compound for vinyl/laminate floors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Wait the recommended time before turning on the system
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Important Safety Considerations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-[#ce1226]">Do:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Test the system resistance three times (before, during,
                        and after installation)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Use flexible tile adhesive and grout with underfloor
                        heating
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Install the floor sensor between two heating wires
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Have a qualified electrician make the final connections
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-[#ce1226]">Don't:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cut or shorten the heating wire</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Install the heating system under fixed furniture or
                        appliances
                      </span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Turn on the system until adhesive/compound is fully
                        cured
                      </span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Forget to register your warranty with Warmup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Download Detailed Installation Guide
              </button>
            </div>
          </div>}
        {activeTab === 'water' && <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <img src="https://www.warmup.co.uk/wp-content/uploads/2023/09/Warmup_Total-16_Installation_Screed_Living-Room-1536x1024.jpg" alt="Water underfloor heating installation" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Before You Begin</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Water underfloor heating systems are more complex than
                  electric systems and typically require professional
                  installation. Here's what you need to know before starting.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    Professional Requirements:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Experienced plumber for pipe connections</li>
                    <li>Qualified electrician for controls and wiring</li>
                    <li>Heating engineer for boiler/heat pump integration</li>
                    <li>Flooring specialist for final floor covering</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
                  <div className="flex">
                    <AlertCircleIcon className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                    <p className="text-sm text-yellow-700">
                      Water underfloor heating systems must be installed by
                      qualified professionals to ensure proper functioning and
                      to maintain warranty coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 1
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Design the System
                  </h4>
                  <p className="text-gray-700 mb-4">
                    A proper design is crucial for water systems, including heat
                    output calculations, pipe spacing, and manifold locations.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Calculate the required heat output for each room
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Determine optimal pipe spacing (typically 150-200mm)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plan manifold locations and pipe routes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 2
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Prepare the Subfloor
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Install insulation boards to prevent downward heat loss and
                    improve system efficiency.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Ensure the subfloor is clean, level, and structurally
                        sound
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Install edge insulation around the perimeter of each
                        room
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Lay insulation boards according to the system
                        requirements
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 3
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Install the Manifold
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Mount the manifold in a central, accessible location that
                    allows for easy connection to all heating circuits.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Mount the manifold at the correct height (typically
                        40-60cm from the floor)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Connect the primary flow and return pipes to the
                        boiler/heat source
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Install the mixing unit and pump if required</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 4
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Lay the Pipe Circuits
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Install the heating pipes in continuous loops from the
                    manifold, following the designed layout and spacing.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Start each circuit from the manifold, creating a
                        continuous loop
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Maintain consistent pipe spacing as per the design
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Secure pipes to the insulation using staples, clips, or
                        system-specific methods
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Label each circuit for identification</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 5
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Pressure Test the System
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Conduct a thorough pressure test to check for leaks before
                    applying the screed or final floor covering.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Connect the pressure testing kit to the manifold
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pressurize the system (typically to 6 bar)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Leave the system under pressure for at least 24 hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Check for pressure drops and visible leaks</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 6
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Apply Screed and Flooring
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Cover the pipes with screed or appropriate floor
                    construction and install the final floor covering.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Apply screed to the required depth (typically 65-75mm
                        for standard screed)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Allow screed to fully cure (usually 7-21 days depending
                        on type)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Install the final floor covering using appropriate
                        methods
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 7
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Install Controls
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Install thermostats, actuators, and control systems to
                    manage the heating system efficiently.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Mount thermostats in appropriate locations in each room
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Install actuators on the manifold for each circuit
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Connect wiring between thermostats and actuators
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Set up the central controller if using a smart system
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 8
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    Commission the System
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Balance the system, purge air, and set up the controls for
                    optimal performance.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fill the system with water and add inhibitor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Purge air from all circuits using the manifold valves
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Balance the flow rates for each circuit</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Set up control parameters and test operation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-[#ce1226] mb-4">
                    Step 9
                  </div>
                  <h4 className="text-xl font-semibold mb-3">First Heat-Up</h4>
                  <p className="text-gray-700 mb-4">
                    Gradually increase the system temperature for the first time
                    to protect the floor construction.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Start with a low temperature (around 20-25°C)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Increase by 5°C every 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reach maximum design temperature gradually</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Set normal operating parameters after initial heat-up
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                Important Considerations for Water Systems
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-[#ce1226]">
                    System Design:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Maximum recommended circuit length: 100m for 16mm pipe
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Typical pipe spacing: 150mm for living areas, 100mm near
                        external walls/windows
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Recommended flow temperature: 35-45°C for screed floors
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-[#ce1226]">
                    Compatibility:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Works with various heat sources: gas boilers, heat
                        pumps, solar thermal
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Compatible with most floor coverings (check manufacturer
                        guidelines)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Can be integrated with existing radiator systems
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Download Professional Installation Guide
              </button>
            </div>
          </div>}
      </div>
    </section>;
};