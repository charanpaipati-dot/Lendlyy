import React, { useState, useEffect } from 'react';
import ItemCard from '../ui/ItemCard';
import { sampleItems } from '../../lib/data';
import Card, { CardContent } from '../ui/Card';

const SkeletonCard: React.FC = () => (
    <Card>
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg animate-pulse"></div>
        <CardContent>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
        </CardContent>
    </Card>
);

const FeaturedItems: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
    const [loading, setLoading] = useState(true);
    const featuredItems = sampleItems.filter(item => ["watches", "bags"].includes(item.category)).slice(0, 4);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);


  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Top Luxury Rentals
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Curated luxury items from top brands, available for you to experience.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : featuredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map(item => (
            <ItemCard key={item.id} item={item} showToast={showToast} />
          ))}
        </div>
      ) : (
         <div className="text-center py-12">
            <p className="text-gray-500">No featured items available at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default FeaturedItems;
