import React, { useState } from 'react';
import Card, { CardContent, CardHeader } from './ui/Card';
import Button from './ui/Button';

interface FilterSidebarProps {
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  location: string;
  condition: string[];
  luxuryOnly: boolean;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 300],
    location: '',
    condition: [],
    luxuryOnly: false,
  });

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];

    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleConditionChange = (condition: string) => {
    const newConditions = filters.condition.includes(condition)
      ? filters.condition.filter(c => c !== condition)
      : [...filters.condition, condition];

    const newFilters = { ...filters, condition: newConditions };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleLocationChange = (location: string) => {
    const newFilters = { ...filters, location };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleLuxuryToggle = () => {
    const newFilters = { ...filters, luxuryOnly: !filters.luxuryOnly };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxPrice = parseInt(e.target.value);
    const newFilters = { ...filters, priceRange: [0, maxPrice] as [number, number] };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearFilters = () => {
    const newFilters: FilterState = {
      categories: [],
      priceRange: [0, 300],
      location: '',
      condition: [],
      luxuryOnly: false,
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Filters</h3>
            <button
              onClick={clearFilters}
              className="text-sm text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              Clear All
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Luxury Items Toggle */}
          <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
            <label className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <span className="font-semibold text-sm text-gray-900 dark:text-white">Luxury Items Only</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Premium designer items</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={filters.luxuryOnly}
                onChange={handleLuxuryToggle}
                className="h-5 w-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
            </label>
          </div>

          {/* Category Filter */}
          <div>
            <h4 className="font-medium mb-3 text-sm text-gray-900 dark:text-white">Category</h4>
            <div className="space-y-2">
              {['Gadgets', 'Fashion', 'Watches', 'Sneakers', 'Bags'].map((category) => (
                <label key={category} className="flex items-center group cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.toLowerCase())}
                    onChange={() => handleCategoryChange(category.toLowerCase())}
                    className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Condition Filter */}
          <div>
            <h4 className="font-medium mb-3 text-sm text-gray-900 dark:text-white flex items-center">
              Condition
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </h4>
            <div className="space-y-2">
              {[
                { value: 'Brand New', emoji: '✨', desc: 'Never used' },
                { value: 'Excellent', emoji: '💎', desc: 'Like new' },
                { value: 'Good', emoji: '👍', desc: 'Minor wear' },
                { value: 'Fair', emoji: '👌', desc: 'Visible wear' },
              ].map((condition) => (
                <label key={condition.value} className="flex items-center justify-between group cursor-pointer p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.condition.includes(condition.value)}
                      onChange={() => handleConditionChange(condition.value)}
                      className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="mr-1">{condition.emoji}</span>
                      {condition.value}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{condition.desc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <h4 className="font-medium mb-3 text-sm text-gray-900 dark:text-white">
              Price Range (per day)
            </h4>
            <input
              type="range"
              min="0"
              max="300"
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-brand-500"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>$0</span>
              <span className="font-semibold text-brand-600 dark:text-brand-400">
                ${filters.priceRange[1]}+
              </span>
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <h4 className="font-medium mb-3 text-sm text-gray-900 dark:text-white">Location</h4>
            <div className="space-y-2">
              {['', 'Bangalore', 'Hyderabad', 'Mumbai'].map((location) => (
                <label key={location || 'all'} className="flex items-center group cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    checked={filters.location === location}
                    onChange={() => handleLocationChange(location)}
                    className="h-4 w-4 border-gray-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    {location || 'All Locations'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={() => onFilterChange?.(filters)}>
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
