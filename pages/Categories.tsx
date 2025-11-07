import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import FilterSidebar from '../components/FilterSidebar';
import { sampleItems } from '../lib/data';
import ItemCard from '../components/ui/ItemCard';
import Toast from '../components/ui/Toast';

const Categories: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [filteredItems, setFilteredItems] = useState(sampleItems);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const showToast = (message: string) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const results = sampleItems.filter(item =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.brand.toLowerCase().includes(lowercasedQuery) ||
        item.category.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredItems(results);
    } else {
      setFilteredItems(sampleItems);
    }
  }, [query]);

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-8">
      <aside className="hidden lg:block lg:col-span-1">
        <FilterSidebar />
      </aside>

      <main className="lg:col-span-3">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-0">
             {query ? `Search results for "${query}"` : 'Browse All Items'}
          </h1>
          <div className="flex items-center gap-4 w-full sm:w-auto">
             <Button variant="outline" className="lg:hidden flex-1 sm:flex-initial">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
               </svg>
                Filter
            </Button>
            <div className="w-full sm:w-48">
              <Select aria-label="Sort items by">
                <option>Sort by: Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </Select>
            </div>
          </div>
        </div>
        
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} showToast={showToast} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">We couldn't find any items matching your search. Try a different keyword.</p>
              <Link to="/categories">
                  <Button variant="outline">Browse All Items</Button>
              </Link>
            </CardContent>
          </Card>
        )}
         {toastMessage && (
            <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
         )}
      </main>
    </div>
  );
};

export default Categories;