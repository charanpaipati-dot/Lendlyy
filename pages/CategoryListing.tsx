import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { sampleItems } from '../lib/data';
import ItemCard from '../components/ui/ItemCard';
import Toast from '../components/ui/Toast';
import Button from '../components/ui/Button';

const CategoryListing: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categoryItems = sampleItems.filter(item => item.category === slug);
  
  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-6 capitalize">{slug}</h1>
      
      {categoryItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryItems.map(item => (
            <ItemCard key={item.id} item={item} showToast={showToast} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No Items Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">There are currently no items listed in the "{slug}" category.</p>
            <Link to="/categories">
                {/* FIX: The 'Button' component was used without being imported. */}
                <Button variant="outline">Browse Other Categories</Button>
            </Link>
          </CardContent>
        </Card>
      )}
      
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
};

export default CategoryListing;