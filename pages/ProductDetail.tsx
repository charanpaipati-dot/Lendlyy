
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { sampleItems } from '../lib/data';
import ItemCard from '../components/ui/ItemCard';
import Toast from '../components/ui/Toast';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { addToCart } = useCart();

  const product = sampleItems.find(item => item.id === id);

  const [mainImage, setMainImage] = useState(product ? product.images[0] : '');

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Product Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">We couldn't find the item you're looking for.</p>
        <Link to="/categories">
          <Button>Back to Browsing</Button>
        </Link>
      </div>
    );
  }

  const relatedItems = sampleItems.filter(item => item.category === product.category && item.id !== product.id).slice(0, 4);
  
  const showToast = (message: string) => {
    setToastMessage(message);
  };
  
  const handleAddToCart = () => {
      addToCart(product);
      showToast(`${product.title} added to cart!`);
  }

  return (
    <div className="space-y-12 md:space-y-20">
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img src={mainImage} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((img, idx) => (
                    <button key={idx} onClick={() => setMainImage(img)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${mainImage === img ? 'border-brand-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-brand-500`}>
                      <img src={img} alt={`${product.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Product Info */}
            <div>
              <p className="text-sm font-medium text-brand-600 dark:text-brand-400 uppercase tracking-wider">{product.brand}</p>
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight my-2">{product.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                  <p className="text-2xl font-bold">${product.pricePerDay}<span className="text-base font-normal text-gray-500 dark:text-gray-400">/day</span></p>
                  <p className="text-sm text-gray-500">Deposit: ${product.deposit}</p>
              </div>

              {(product.condition || product.purchaseDate) && (
                <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {product.condition && (
                        <div className="flex items-center space-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span>Condition: <strong>{product.condition}</strong></span>
                        </div>
                    )}
                     {product.purchaseDate && (
                        <div className="flex items-center space-x-1.5">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span>Purchased: <strong>{product.purchaseDate}</strong></span>
                        </div>
                    )}
                </div>
              )}

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>
              
              <div className="mt-8">
                <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {relatedItems.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedItems.map(item => (
              <ItemCard key={item.id} item={item} showToast={showToast} />
            ))}
          </div>
        </section>
      )}
      
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
};

export default ProductDetail;