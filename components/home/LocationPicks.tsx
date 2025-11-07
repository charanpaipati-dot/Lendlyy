import React, { useState } from 'react';
import ItemCard from '../ui/ItemCard';
import { sampleItems } from '../../lib/data';
import { ItemCard as ItemCardType } from '../../lib/data';

type City = "Bangalore" | "Hyderabad" | "Mumbai";

const LocationPicks: React.FC<{ showToast: (message: string) => void }> = ({ showToast }) => {
  const [selectedCity, setSelectedCity] = useState<City>('Bangalore');

  const locations: City[] = ["Bangalore", "Hyderabad", "Mumbai"];

  const getPicksForCity = (city: City) => {
    const allItemsInCity = sampleItems.filter(item => item.city === city);
    return {
      gadgets: allItemsInCity.filter(item => item.category === 'gadgets').slice(0, 4),
      fashion: allItemsInCity.filter(item => item.category === 'fashion').slice(0, 4),
    };
  };

  const sections = getPicksForCity(selectedCity);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Top Picks Near You
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Discover items available for rent in your city.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <label htmlFor="city-select" className="sr-only">Select your city</label>
          <select
            id="city-select"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value as City)}
            className="w-full md:w-48 h-10 appearance-none rounded-md border border-gray-300 bg-transparent pl-3 pr-8 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-brand-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800"
          >
            {locations.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
      
      {Object.entries(sections).map(([category, items]) => (
        items.length > 0 && (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 mb-6 capitalize">{category} in {selectedCity}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(items as ItemCardType[]).map(item => (
                <ItemCard key={item.id} item={item} showToast={showToast} />
              ))}
            </div>
          </div>
        )
      ))}
    </section>
  );
};

export default LocationPicks;
