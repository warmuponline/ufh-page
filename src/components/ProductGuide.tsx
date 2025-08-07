import React, { useState } from 'react';
import { ThermometerIcon, DropletIcon, SmartphoneIcon, LayersIcon } from 'lucide-react';
type ProductCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  products: Product[];
};
type Product = {
  id: string;
  name: string;
  description: string;
  features: string[];
  idealFor: string[];
  image: string;
};
export const ProductGuide = () => {
  const [activeCategory, setActiveCategory] = useState('electric');
  const categories: ProductCategory[] = [{
    id: 'electric',
    name: 'Electric Systems',
    icon: <ThermometerIcon className="h-6 w-6" />,
    description: 'Electric underfloor heating systems are ideal for renovation projects and single room installations, offering quick and responsive heat with minimal height build-up.',
    products: [{
      id: 'dcm-pro',
      name: 'DCM-PRO System',
      description: 'The DCM-PRO System combines a self-adhesive anti-fracture membrane with a heating cable, providing crack isolation and uniform heat distribution.',
      features: ['Anti-fracture membrane protects floor finishes', 'Fast installation with self-adhesive membrane', 'Uniform heat distribution', 'Suitable for irregular shaped rooms', 'Lifetime warranty'],
      idealFor: ['Bathrooms', 'Kitchens', 'Conservatories', 'Irregular shaped rooms'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2023/09/DCM-PRO-underfloor-heating-system-1536x864.jpg'
    }, {
      id: 'stickymat',
      name: 'StickyMat System',
      description: 'The StickyMat System features a heating wire pre-spaced on a self-adhesive mesh, ensuring quick and precise installation with consistent heat output.',
      features: ['Pre-spaced heating cables on adhesive mesh', 'Ultra-thin 3mm profile', 'Rapid warm-up time', 'Ideal for regular shaped rooms', 'Lifetime warranty'],
      idealFor: ['Bathrooms', 'Kitchens', 'Living rooms', 'Regular shaped areas'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2023/09/Electric-underfloor-heating-mat.jpg'
    }, {
      id: 'loose-wire',
      name: 'Loose Wire System',
      description: 'The Loose Wire System offers maximum flexibility for irregular shaped areas, with a thin heating wire that can be installed at variable spacing.',
      features: ['Flexible installation for any room shape', 'Variable cable spacing for custom heat output', 'Ultra-thin 1.8mm heating wire', 'Ideal for complex layouts', 'Lifetime warranty'],
      idealFor: ['Complex room layouts', 'Small areas', 'Renovations with height restrictions'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Bathroom-Underfloor-Heating-Installation-1536x1025.jpg'
    }]
  }, {
    id: 'water',
    name: 'Water Systems',
    icon: <DropletIcon className="h-6 w-6" />,
    description: 'Water underfloor heating systems are perfect for whole-house heating in new builds and major renovations, offering excellent efficiency when connected to renewable heat sources.',
    products: [{
      id: 'total-16',
      name: 'Total-16 System',
      description: 'The Total-16 low-profile water underfloor heating system is just 16mm deep, making it ideal for renovation projects where floor height is limited.',
      features: ['Ultra-low 16mm profile', 'Rapid response time', 'Compatible with all floor finishes', 'Suitable for renovation projects', '50-year warranty'],
      idealFor: ['Renovations', 'Projects with height restrictions', 'Quick heat-up requirements'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2023/09/Warmup_Total-16_Installation_Screed_Living-Room-1536x1024.jpg'
    }, {
      id: 'clypso',
      name: 'Clypso System',
      description: 'The Clypso System uses plastic clips to secure pipes to insulation, offering versatile installation options for new-build and renovation projects.',
      features: ['Suitable for any floor construction', 'Flexible pipe spacing for optimal heat output', 'Compatible with screed floors', 'Ideal for large areas', '50-year warranty'],
      idealFor: ['New builds', 'Large open spaces', 'Projects with screed floors'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup_Nexxa-Panel_Installation-1536x1024.jpg'
    }, {
      id: 'forte',
      name: 'Forte Grid System',
      description: 'The Forte Grid System uses a strong wire grid for pipe installation, providing excellent stability and heat transfer in concrete floor constructions.',
      features: ['Robust wire grid construction', 'Excellent heat output', 'Ideal for concrete floors', 'Simple installation process', '50-year warranty'],
      idealFor: ['New builds', 'Concrete floor constructions', 'Commercial projects'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Forte-Grid-System-Installation-1536x1024.jpg'
    }]
  }, {
    id: 'smart',
    name: 'Smart Controls',
    icon: <SmartphoneIcon className="h-6 w-6" />,
    description: 'Smart thermostats and controls allow precise management of your underfloor heating system from anywhere, optimizing energy usage and comfort.',
    products: [{
      id: '4ie',
      name: '4iE Smart WiFi Thermostat',
      description: 'The 4iE Smart WiFi Thermostat learns how you use your heating and the unique way your house responds, automatically suggesting energy-saving settings.',
      features: ['Smartphone control via MyHeating app', 'AutoSwitch energy-saving feature', 'SmartGeo location-based control', 'Energy monitoring reports', '3-year warranty'],
      idealFor: ['Energy-conscious homeowners', 'Smart home enthusiasts', 'Both electric and water systems'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2023/01/4iE-Smart-WiFi-Thermostat-Onyx-Black-Front-View-1-1536x1536.jpg'
    }, {
      id: 'element',
      name: 'Element WiFi Thermostat',
      description: 'The Element WiFi Thermostat offers intuitive control of your underfloor heating through a simple smartphone app with energy usage monitoring.',
      features: ['Minimalist design', 'Smartphone control', 'Energy usage monitoring', 'Easy programming', '3-year warranty'],
      idealFor: ['Design-conscious homeowners', 'Simple smart control requirements', 'Electric underfloor heating systems'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Element-WiFi-Thermostat-1536x1536.jpg'
    }, {
      id: 'tempo',
      name: 'Tempo Digital Thermostat',
      description: 'The Tempo Digital Thermostat provides programmable control of your underfloor heating with an easy-to-use interface and energy monitoring features.',
      features: ['Simple programming interface', 'Energy monitoring', '7-day scheduling', 'Suitable for all electric systems', '3-year warranty'],
      idealFor: ['Budget-conscious homeowners', 'Simple programming needs', 'Electric underfloor heating systems'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Tempo-Thermostat-1536x1536.jpg'
    }]
  }, {
    id: 'insulation',
    name: 'Insulation Boards',
    icon: <LayersIcon className="h-6 w-6" />,
    description: 'Insulation boards improve system efficiency by directing heat upward into the room rather than allowing it to be lost to the subfloor.',
    products: [{
      id: 'ultralight',
      name: 'Ultralight Insulation Boards',
      description: 'Ultralight boards are a high-performance thermal insulation solution that enhance the efficiency of electric underfloor heating systems.',
      features: ['Lightweight and easy to cut', 'Excellent thermal insulation properties', 'Waterproof and rot-proof', 'Minimal height build-up (6mm)', 'Compatible with all Warmup electric systems'],
      idealFor: ['Renovation projects', 'Height-restricted installations', 'Improving system efficiency'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Ultralight-Insulation-Board-Installation-1536x1024.jpg'
    }, {
      id: 'marmox',
      name: 'Marmox Insulation Boards',
      description: "Marmox boards offer superior insulation with a waterproof, cement-coated surface that's ready for tiling, perfect for bathrooms and wet areas.",
      features: ['Waterproof core', 'Ready-to-tile surface', 'Multiple thickness options (10-60mm)', 'High compressive strength', 'Ideal for wet areas'],
      idealFor: ['Bathrooms', 'Wet rooms', 'Areas requiring waterproofing', 'Varying insulation requirements'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Marmox-Board-Installation-1536x1024.jpg'
    }]
  }, {
    id: 'accessories',
    name: 'Accessories',
    icon: <div className="h-6 w-6" />,
    description: 'Complete your underfloor heating installation with essential accessories that ensure optimal performance and longevity of your system.',
    products: [{
      id: 'pressure-test',
      name: 'Pressure Testing Kit',
      description: 'The Pressure Testing Kit is essential for testing water underfloor heating systems before, during, and after installation to ensure there are no leaks.',
      features: ['Accurate pressure monitoring', 'Prevents costly water damage', 'Easy to use', 'Compatible with all Warmup water systems', 'Reusable for multiple installations'],
      idealFor: ['Water underfloor heating installations', 'Professional installers', 'DIY enthusiasts'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Pressure-Test-Kit-1536x1024.jpg'
    }, {
      id: 'repair-kit',
      name: 'Repair Kit',
      description: 'The Repair Kit contains all necessary components to fix damaged electric heating cables, ensuring your system continues to function properly.',
      features: ['Complete repair solution', 'Easy-to-follow instructions', 'Compatible with all Warmup electric cables', 'Professional-grade components', 'Quick repair process'],
      idealFor: ['Emergency repairs', 'Maintaining existing systems', 'Professional installers'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Repair-Kit-1536x1024.jpg'
    }, {
      id: 'mixing-unit',
      name: 'Compact Mixing Unit',
      description: 'The Compact Mixing Unit regulates water temperature in hydronic underfloor heating systems, ensuring optimal performance and energy efficiency.',
      features: ['Precise temperature control', 'Compact design for small spaces', 'Compatible with all heat sources', 'Easy installation and maintenance', 'Built-in pump and bypass valve'],
      idealFor: ['Water underfloor heating systems', 'Energy-efficient installations', 'Professional installations'],
      image: 'https://www.warmup.co.uk/wp-content/uploads/2022/11/Warmup-Compact-Mixing-Unit-1536x1024.jpg'
    }]
  }];
  const activeProducts = categories.find(cat => cat.id === activeCategory)?.products || [];
  return <section id="products" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warmup Product Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of underfloor heating solutions
            designed to meet any project requirement, from single room
            renovations to whole-house new builds.
          </p>
        </div>
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`p-4 rounded-lg border-2 transition-all ${activeCategory === category.id ? 'border-[#ce1226] bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-2 ${activeCategory === category.id ? 'text-[#ce1226]' : 'text-gray-600'}`}>
                    {category.icon}
                  </div>
                  <div className="font-medium">{category.name}</div>
                </div>
              </button>)}
          </div>
        </div>
        <div className="mb-12 bg-gray-50 p-6 rounded-lg">
          <p className="text-lg">
            {categories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>
        {activeProducts.map((product, index) => <div key={product.id} className={`mb-16 ${index !== activeProducts.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-lg text-gray-700 mb-6">
                  {product.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {product.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.idealFor.map((item, idx) => <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>)}
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                    View Details
                  </button>
                  <button className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-colors">
                    Download Datasheet
                  </button>
                </div>
              </div>
            </div>
          </div>)}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4">
            Not sure which system is right for you?
          </h3>
          <p className="text-gray-600 mb-6">
            Our experts can help you choose the perfect underfloor heating
            solution for your project.
          </p>
          <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-8 py-3 rounded-md font-semibold transition-colors">
            Get Personalized Advice
          </button>
        </div>
      </div>
    </section>;
};