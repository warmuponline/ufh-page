import React from 'react';
import { StarIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    location: 'London',
    text: "We installed Warmup in our bathroom renovation and couldn't be happier. The floor is perfectly warm every morning, and the smart controls make it incredibly efficient.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Mark Thompson',
    location: 'Manchester',
    text: "As a builder, I've installed many heating systems, but Warmup is by far the most reliable. My clients love the comfort and the energy savings they're seeing.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Emma Wilson',
    location: 'Edinburgh',
    text: 'The installation was straightforward and the support team was incredibly helpful. Our home feels so much more comfortable now, especially during those cold Scottish winters!',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }];
  return <section className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers enjoying the comfort and
            efficiency of Warmup underfloor heating.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({
              length: 5
            }).map((_, i) => <StarIcon key={i} size={18} className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />)}
              </div>
              <p className="text-gray-700 flex-grow">"{testimonial.text}"</p>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="text-sm text-gray-500">Verified Customer</div>
                <div className="text-sm text-[#ce1226] font-medium">
                  Read Full Review
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <div className="flex mr-3">
              {Array.from({
              length: 5
            }).map((_, i) => <StarIcon key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="font-semibold">4.9 out of 5</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">Based on 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>;
};