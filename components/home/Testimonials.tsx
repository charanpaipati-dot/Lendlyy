import React, { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../../lib/data';
import Card, { CardContent } from '../ui/Card';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className="bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Hear from real users who love the Lendlyy experience.
          </p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto h-64 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="absolute w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transitionDelay: index === currentIndex ? '500ms' : '0ms'
              }}
              aria-live="polite"
              aria-hidden={index !== currentIndex}
            >
              <Card className="h-full flex flex-col justify-center text-center">
                <CardContent>
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center mb-2">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
                 <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'} transition`}
                    aria-label={`Go to testimonial ${index + 1}`}
                ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
