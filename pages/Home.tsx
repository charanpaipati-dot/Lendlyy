
import React, { useState } from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import TrendingSection from '../components/home/TrendingSection';
import FeaturedItems from '../components/home/FeaturedItems';
import CategoriesShowcase from '../components/home/CategoriesShowcase';
import Toast from '../components/ui/Toast';

const Home: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="space-y-12 md:space-y-20">
      <HeroCarousel />
      <CategoriesShowcase />
      <TrendingSection showToast={showToast} />
      <FeaturedItems showToast={showToast} />
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
};

export default Home;