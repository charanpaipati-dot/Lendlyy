import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Splash: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center -mt-8 min-h-[calc(100vh-14rem)]">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-4">
        Rent Anything,
        <br />
        <span className="text-brand-500">Lend Everything</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
        Your marketplace for luxury lifestyle items. From designer bags to camera
        gear, rent what you need or earn from what you own.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/categories">
          <Button size="lg" className="flex items-center space-x-2">
            <span>Explore Rentals</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </Link>
        <Link to="/lend">
          <Button size="lg" variant="outline">
            Start Lending
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Splash;
