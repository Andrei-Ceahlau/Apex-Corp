import React from 'react';
import { Code, BarChart3, Cloud, Shield, Globe, Lightbulb } from 'lucide-react';
import type { Service } from '../../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Digital Transformation',
    description: 'Transform your business with comprehensive digital strategies tailored to your unique challenges and goals.',
    icon: 'Globe',
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'Custom software solutions built with the latest technologies to streamline operations and enhance user experience.',
    icon: 'Code',
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Harness the power of your data with advanced analytics to uncover insights and drive strategic decision-making.',
    icon: 'BarChart3',
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud infrastructure designed to optimize performance and reduce operational costs.',
    icon: 'Cloud',
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions that safeguard against evolving threats.',
    icon: 'Shield',
  },
  {
    id: 6,
    title: 'Innovation Consulting',
    description: 'Strategic guidance to foster innovation within your organization and stay ahead of industry trends.',
    icon: 'Lightbulb',
  },
];

const getIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Globe':
      return <Globe className={className} />;
    case 'Code':
      return <Code className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'Cloud':
      return <Cloud className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Lightbulb':
      return <Lightbulb className={className} />;
    default:
      return <Globe className={className} />;
  }
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-br from-blue-600 to-teal-600 mask-border"></div>
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 transition-colors duration-300">
          {getIcon(service.icon, 'w-6 h-6')}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
        
        <a href="#" className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our expertise spans across key areas to deliver exceptional results tailored to your unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;