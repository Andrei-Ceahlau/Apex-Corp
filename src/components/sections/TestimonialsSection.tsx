import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "ApexCorp transformed our legacy systems into a modern digital platform that's scalable, secure, and user-friendly. The ROI has been exceptional.",
    author: "Jennifer Maxwell",
    company: "Innovate Financial",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "Working with ApexCorp's team was seamless. Their cloud migration expertise saved us significant operational costs while improving performance.",
    author: "David Chen",
    company: "TechVision Inc.",
    imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "The data analytics solution ApexCorp implemented has given us critical insights that directly impacted our strategic decision-making process.",
    author: "Maria Rodriguez",
    company: "Global Retail Solutions",
    imageUrl: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Auto-advance slides
    const interval = setInterval(goToNextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset animation flag after transition
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Hear from organizations we've helped transform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/50">
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="mb-6 text-blue-600 dark:text-blue-400">
                          <Quote size={32} />
                        </div>
                        <blockquote className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
            <button 
              onClick={goToPrevSlide}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition transform hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Previous</span>
            </button>
            <button 
              onClick={goToNextSlide}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition transform hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Next</span>
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === currentIndex 
                    ? 'bg-blue-600 dark:bg-blue-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;