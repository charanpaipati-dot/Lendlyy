import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { heroSlides } from '../../lib/data';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden" aria-roledescription="carousel">
        <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {heroSlides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-full relative" aria-label={slide.headline}>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{backgroundImage: `url(${slide.image})`}}
                ></div>
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>{slide.headline}</h2>
                    <p className="max-w-2xl text-lg md:text-xl mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>{slide.sub}</p>
                    <Link to={slide.cta.href}>
                        <Button size="lg">{slide.cta.label}</Button>
                    </Link>
                </div>
            </div>
            ))}
      </div>

       {/* Navigation Buttons */}
       <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition" aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition" aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {heroSlides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'} transition`}
                    aria-label={`Go to slide ${index + 1}`}
                ></button>
            ))}
        </div>
    </section>
  );
};

export default HeroCarousel;
