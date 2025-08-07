import React, { useState } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
export const EnhancedTestimonials = () => {
  const [activeTab, setActiveTab] = useState('customer');
  const customerTestimonials = [{
    name: 'Sarah Johnson',
    location: 'London',
    text: "We installed Warmup in our bathroom renovation and couldn't be happier. The floor is perfectly warm every morning, and the smart controls make it incredibly efficient. The installation was straightforward with excellent support from the technical team.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    system: 'DCM-PRO Electric System',
    date: 'January 2023'
  }, {
    name: 'Mark Thompson',
    location: 'Manchester',
    text: "As a builder, I've installed many heating systems, but Warmup is by far the most reliable. My clients love the comfort and the energy savings they're seeing. The technical support team is always available to answer questions during installation.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    system: 'Total-16 Water System',
    date: 'March 2023'
  }, {
    name: 'Emma Wilson',
    location: 'Edinburgh',
    text: 'The installation was straightforward and the support team was incredibly helpful. Our home feels so much more comfortable now, especially during those cold Scottish winters! The energy monitoring feature on the smart thermostat has helped us optimize our usage.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    system: 'StickyMat System',
    date: 'November 2022'
  }];
  const professionalTestimonials = [{
    name: 'David Richardson',
    title: 'Architect, RIBA',
    company: 'Richardson & Associates',
    text: "I've specified Warmup for numerous high-end residential projects. Their technical team provides excellent design support, and the finished systems deliver the comfort and efficiency my clients demand. The low-profile options are particularly valuable in renovation projects.",
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Jennifer Patel',
    title: 'Interior Designer',
    company: 'JP Interiors',
    text: 'Warmup systems have become my go-to recommendation for clients seeking luxury and comfort. The invisible heating solution complements my designs perfectly, and the smart controls add a technological touch that modern homeowners appreciate. Their product range suits every project type.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Michael Thomas',
    title: 'Building Contractor',
    company: 'Thomas Construction Ltd',
    text: 'After trying several underfloor heating brands, we now exclusively install Warmup. Their systems are consistently reliable, the installation support is unmatched, and our customers are always satisfied with the results. The comprehensive warranties give both us and our clients peace of mind.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }];
  const trustpilotReviews = [{
    name: 'James Wilson',
    rating: 5,
    date: '2 weeks ago',
    text: 'Excellent product and service. The technical team was incredibly helpful with my installation questions, and the system has been running flawlessly. Very happy with my purchase!'
  }, {
    name: 'Patricia Roberts',
    rating: 5,
    date: '1 month ago',
    text: 'Warmup underfloor heating has transformed our home. Installation was straightforward with the clear instructions provided, and the smart controls are intuitive and effective.'
  }, {
    name: 'Richard Taylor',
    rating: 4,
    date: '2 months ago',
    text: 'Good quality product that performs as advertised. The only reason for 4 stars instead of 5 is that delivery took slightly longer than expected, but the customer service team kept me informed throughout.'
  }, {
    name: 'Susan Campbell',
    rating: 5,
    date: '3 months ago',
    text: 'From quotation to installation support, Warmup provided excellent service. The heating system works perfectly and has significantly reduced our energy bills compared to our old radiator system.'
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev => prev === (activeTab === 'customer' ? customerTestimonials.length - 1 : professionalTestimonials.length - 1) ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? activeTab === 'customer' ? customerTestimonials.length - 1 : professionalTestimonials.length - 1 : prev - 1);
  };
  return <section id="reviews" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-50 px-3 py-1.5 rounded-full mb-4">
            <span className="text-[#ce1226] text-sm font-medium">
              Customer Voices
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What People Say About Warmup
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from homeowners, professionals, and industry experts who have
            experienced the Warmup difference.
          </p>
        </div>
        <div className="mb-12">
          <div className="flex justify-center border-b border-gray-200 mb-8">
            <button className={`py-3 px-6 font-medium text-lg ${activeTab === 'customer' ? 'border-b-2 border-[#ce1226] text-[#ce1226]' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => {
            setActiveTab('customer');
            setCurrentSlide(0);
          }}>
              Homeowner Reviews
            </button>
            <button className={`py-3 px-6 font-medium text-lg ${activeTab === 'professional' ? 'border-b-2 border-[#ce1226] text-[#ce1226]' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => {
            setActiveTab('professional');
            setCurrentSlide(0);
          }}>
              Professional Testimonials
            </button>
            <button className={`py-3 px-6 font-medium text-lg ${activeTab === 'trustpilot' ? 'border-b-2 border-[#ce1226] text-[#ce1226]' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => {
            setActiveTab('trustpilot');
            setCurrentSlide(0);
          }}>
              Trustpilot Reviews
            </button>
          </div>
          {activeTab === 'customer' && <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                  {customerTestimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gray-50 rounded-xl p-8 md:p-12 relative">
                        <QuoteIcon className="h-12 w-12 text-gray-200 absolute top-6 right-6" />
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className="md:w-1/4 flex flex-col items-center text-center">
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                            <div className="font-semibold text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-gray-500 mb-2">
                              {testimonial.location}
                            </div>
                            <div className="flex mb-2">
                              {Array.from({
                          length: 5
                        }).map((_, i) => <StarIcon key={i} size={18} className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />)}
                            </div>
                            <div className="text-sm text-gray-500">
                              <div>{testimonial.system}</div>
                              <div>{testimonial.date}</div>
                            </div>
                          </div>
                          <div className="md:w-3/4">
                            <p className="text-lg text-gray-700 italic">
                              "{testimonial.text}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              <div className="flex justify-center mt-8 gap-2">
                {customerTestimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#ce1226]' : 'bg-gray-300'}`} onClick={() => setCurrentSlide(index)}></button>)}
              </div>
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50" onClick={prevSlide}>
                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50" onClick={nextSlide}>
                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>}
          {activeTab === 'professional' && <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                  {professionalTestimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gray-50 rounded-xl p-8 md:p-12 relative">
                        <QuoteIcon className="h-12 w-12 text-gray-200 absolute top-6 right-6" />
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className="md:w-1/4 flex flex-col items-center text-center">
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                            <div className="font-semibold text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-[#ce1226] font-medium">
                              {testimonial.title}
                            </div>
                            <div className="text-gray-500 mt-1">
                              {testimonial.company}
                            </div>
                          </div>
                          <div className="md:w-3/4">
                            <p className="text-lg text-gray-700 italic">
                              "{testimonial.text}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              <div className="flex justify-center mt-8 gap-2">
                {professionalTestimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#ce1226]' : 'bg-gray-300'}`} onClick={() => setCurrentSlide(index)}></button>)}
              </div>
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50" onClick={prevSlide}>
                <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50" onClick={nextSlide}>
                <ChevronRightIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>}
          {activeTab === 'trustpilot' && <div>
              <div className="mb-8 flex items-center justify-center">
                <img src="https://www.warmup.co.uk/wp-content/uploads/2022/11/trustpilot-5-stars.svg" alt="Trustpilot 5 stars" className="h-10 mr-4" />
                <div>
                  <div className="font-bold text-xl">4.9 out of 5</div>
                  <div className="text-sm text-gray-500">
                    Based on 2,500+ reviews
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trustpilotReviews.map((review, index) => <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-xs text-gray-500">
                          {review.date}
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({
                    length: 5
                  }).map((_, i) => <StarIcon key={i} size={16} className={i < review.rating ? 'text-[#00b67a] fill-[#00b67a]' : 'text-gray-300'} />)}
                      </div>
                    </div>
                    <p className="text-gray-700">"{review.text}"</p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.8 28.7" className="h-4 mr-2">
                        <path d="M60.2 2.3H71v2.2l-6.3 9.3c1 .1 1.9.5 2.7 1 1 .7 1.7 1.5 2.2 2.5s.7 2 .7 3c0 1.3-.3 2.5-1 3.6-.6 1-1.5 1.8-2.6 2.4-1.1.6-2.3.9-3.7.9-2.1 0-3.8-.6-5.2-1.7-1.3-1.1-2-2.6-2.1-4.4h4.3c.1.8.4 1.3.9 1.8s1.2.6 2 .6c.8 0 1.5-.3 2-.8s.8-1.2.8-2c0-.9-.3-1.6-.9-2.1-.6-.5-1.4-.8-2.4-.8h-.4v-2.2L68.2 7h-8v-4.7zM72.6 0h50.1v28.7h-50.1zM0 0h50.1v28.7H0zm18.4 22c1.2 0 2.2-.2 3.1-.7.9-.5 1.5-1.1 2-2 .5-.8.7-1.8.7-2.8 0-1.1-.2-2-.7-2.9-.5-.8-1.2-1.5-2-1.9-.9-.5-1.9-.7-3.1-.7h-4.1V22h4.1zm-.1-14.6c1 0 1.9-.2 2.6-.6.7-.4 1.3-1 1.7-1.7.4-.7.6-1.5.6-2.4 0-.9-.2-1.7-.6-2.4-.4-.7-1-1.3-1.7-1.7-.7-.4-1.6-.6-2.6-.6h-4v9.4h4zm-8.2-11.2h8.8c1.9 0 3.5.4 4.9 1.2s2.5 1.9 3.3 3.2c.8 1.4 1.1 2.9 1.1 4.6 0 1.7-.4 3.2-1.1 4.5-.8 1.3-1.9 2.4-3.4 3.1 1.8.5 3.3 1.5 4.4 3 1.1 1.5 1.6 3.2 1.6 5.3 0 1.8-.4 3.4-1.3 4.9-.9 1.5-2.1 2.6-3.7 3.4s-3.4 1.2-5.4 1.2h-9.3V-3.8zm69.8 8.5c-1.1-1-2.4-1.5-3.9-1.5s-2.8.5-3.9 1.5-1.6 2.3-1.6 3.9.5 2.9 1.6 3.9 2.4 1.5 3.9 1.5 2.8-.5 3.9-1.5 1.6-2.3 1.6-3.9-.5-2.9-1.6-3.9zm-10.9-3c1.8-1.9 4.2-2.9 7-2.9s5.2 1 7 2.9c1.8 1.9 2.8 4.3 2.8 7.1 0 2.8-.9 5.1-2.8 7-1.8 1.9-4.2 2.8-7 2.8s-5.2-.9-7-2.8c-1.8-1.9-2.8-4.2-2.8-7 0-2.8.9-5.2 2.8-7.1zm-5.3-2.7v19.7h-4.1v-19.7h4.1zm-2-3.1c-.7 0-1.3-.2-1.8-.7s-.7-1.1-.7-1.8.2-1.3.7-1.8c.5-.5 1.1-.7 1.8-.7s1.3.2 1.8.7c.5.5.8 1.1.8 1.8s-.3 1.3-.8 1.8-1.1.7-1.8.7z" fill="#00b67a" />
                      </svg>
                      <span>Verified review</span>
                    </div>
                  </div>)}
              </div>
              <div className="mt-8 text-center">
                <a href="https://www.trustpilot.com/review/warmup.co.uk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#00b67a] font-medium hover:underline">
                  View all Trustpilot reviews
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>}
        </div>
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Satisfied Customers
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Experience the comfort, efficiency, and reliability that has made
            Warmup the world's best-selling floor heating brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#ce1226] hover:bg-[#b10e20] text-white px-6 py-3 rounded-md font-semibold transition-colors">
              Find Your Perfect System
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 px-6 py-3 rounded-md font-semibold transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>;
};