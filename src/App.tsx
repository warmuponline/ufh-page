import React from 'react';
import { BrandHeader } from './components/BrandHeader';
import { ProductShowcase } from './components/ProductShowcase';
import { WhyWarmup } from './components/WhyWarmup';
import { CaseStudies } from './components/CaseStudies';
import { CompanyHistory } from './components/CompanyHistory';
import { EnhancedTestimonials } from './components/EnhancedTestimonials';
import { ProductSelector } from './components/ProductSelector';
import { ExtendedFAQ } from './components/ExtendedFAQ';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-[Open_Sans] text-gray-800 w-full">
      <BrandHeader />
      <WhyWarmup />
      <ProductShowcase />
      <ProductSelector />
      <CaseStudies />
      <CompanyHistory />
      <EnhancedTestimonials />
      <ExtendedFAQ />
      <QuoteForm />
      <Footer />
    </div>;
}