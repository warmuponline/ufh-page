import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
export const QuoteForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    roomType: '',
    floorArea: '',
    floorType: '',
    name: '',
    email: '',
    phone: '',
    postcode: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const nextStep = () => {
    setFormStep(prev => prev + 1);
  };
  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    setFormStep(3); // Show success message
  };
  return <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Personalized Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tell us about your project, and we'll provide a detailed quote
            tailored to your specific needs.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {formStep === 1 && <div>
                <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Room Type
                    </label>
                    <select name="roomType" value={formData.roomType} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent">
                      <option value="">Select room type</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="livingRoom">Living Room</option>
                      <option value="bedroom">Bedroom</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Floor Area (m²)
                    </label>
                    <input type="text" name="floorArea" value={formData.floorArea} onChange={handleInputChange} placeholder="e.g. 15" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Floor Type
                    </label>
                    <select name="floorType" value={formData.floorType} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent">
                      <option value="">Select floor type</option>
                      <option value="tile">Tile/Stone</option>
                      <option value="wood">Wood</option>
                      <option value="laminate">Laminate</option>
                      <option value="carpet">Carpet</option>
                      <option value="concrete">Concrete</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8">
                  <button onClick={nextStep} className="w-full bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                    Continue
                  </button>
                </div>
              </div>}
            {formStep === 2 && <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-6">
                  Your Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Smith" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="07123 456789" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postcode
                    </label>
                    <input type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} placeholder="AB12 3CD" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ce1226] focus:border-transparent" required />
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <button type="button" onClick={prevStep} className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold transition-colors">
                    Back
                  </button>
                  <button type="submit" className="w-2/3 bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                    Get My Quote
                  </button>
                </div>
              </form>}
            {formStep === 3 && <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <CheckIcon size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your request and will be in touch with your
                  personalized quote within 24 hours.
                </p>
                <button onClick={() => setFormStep(1)} className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                  Start a New Quote
                </button>
              </div>}
          </div>
        </div>
      </div>
    </section>;
};