import React, { useRef } from 'react';
import ItemCard from '../ui/ItemCard';
import { sampleItems } from '../../lib/data';
import Button from '../ui/Button';

const TrendingSection: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
  const trendingItems = sampleItems.filter(item => item.badge === 'Hot');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Trending Now
        </h2>
        <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll('left')} aria-label="Scroll left">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll('right')} aria-label="Scroll right">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Button>
        </div>
      </div>
      <div ref={scrollContainerRef} className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {trendingItems.map(item => (
          <div key={item.id} className="flex-shrink-0 w-80">
            <ItemCard item={item} showToast={showToast} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;