import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 -mr-20 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 w-96 h-96 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Elevate Your Business with <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Innovative</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            We help forward-thinking organizations transform their businesses through technology and strategic innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              Explore Services
            </a>
          </div>
          
          <div className="mt-10">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Trusted by leading companies</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {/* Company logos would go here - using placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded opacity-60 dark:opacity-40"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Hero image placeholder */}
            <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-105">
              <div className="aspect-w-4 aspect-h-3 w-full bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration" 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <div className="h-6 w-6 rounded-full bg-blue-600"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Transformative Solutions</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For the modern enterprise</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-teal-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;