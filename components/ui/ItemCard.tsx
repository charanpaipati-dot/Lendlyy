import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardContent } from './Card';
import Button from './Button';
import { ItemCard as ItemCardType } from '../../lib/data';
import { useCart } from '../../context/CartContext';

interface ItemCardProps {
  item: ItemCardType;
  showToast: (message: string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, showToast }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
    showToast(`${item.title} added to cart!`);
  };

  return (
    <Link to={`/product/${item.id}`} className="group block focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-lg">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="relative">
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700">
             <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover"/>
          </div>
          {item.badge && (
            <div className="absolute top-2 right-2 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {item.badge}
            </div>
          )}
        </div>
        <CardContent className="flex flex-col flex-grow">
          <div className="flex-grow">
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.brand} - {item.city}</p>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mt-1 truncate">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <span className="font-bold text-brand-600 dark:text-brand-400">${item.pricePerDay}</span> / day
            </p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button onClick={handleAddToCart} size="sm" className="w-full">Add to Cart</Button>
            <Button variant="secondary" size="sm" className="w-full">View</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ItemCard;