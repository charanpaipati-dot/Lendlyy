import React from 'react';
import Card, { CardContent, CardHeader } from './ui/Card';
import Button from './ui/Button';

const FilterSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
        <Card>
        <CardHeader>
            <h3 className="font-semibold text-lg">Filters</h3>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
            <h4 className="font-medium mb-2 text-sm text-gray-900 dark:text-white">Category</h4>
            <div className="space-y-2">
                <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Gadgets</span>
                </label>
                <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Fashion</span>
                </label>
                <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Watches</span>
                </label>
                 <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Sneakers</span>
                </label>
                 <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Bags</span>
                </label>
            </div>
            </div>
            <div>
            <h4 className="font-medium mb-2 text-sm text-gray-900 dark:text-white">Price Range</h4>
            <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>$0</span>
                <span>$150+</span>
            </div>
            </div>
             <div>
            <h4 className="font-medium mb-2 text-sm text-gray-900 dark:text-white">Location</h4>
            <div className="space-y-2">
                <label className="flex items-center">
                <input type="radio" name="location" className="h-4 w-4 border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Bangalore</span>
                </label>
                <label className="flex items-center">
                <input type="radio" name="location" className="h-4 w-4 border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Hyderabad</span>
                </label>
                <label className="flex items-center">
                <input type="radio" name="location" className="h-4 w-4 border-gray-300 text-brand-600 focus:ring-brand-500" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Mumbai</span>
                </label>
            </div>
            </div>
        </CardContent>
        </Card>
        <Button className="w-full">Apply Filters</Button>
    </div>
  );
};

export default FilterSidebar;
