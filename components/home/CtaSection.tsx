import React from 'react';
// FIX: Corrected import from 'react-outer-dom' to 'react-router-dom'.
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Ready to join the Lendlyy community?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Start renting the items you desire or earn by lending the ones you own.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/signup">
            <Button size="lg">Sign Up Now</Button>
          </Link>
          <Link to="/lend">
            <Button size="lg" variant="secondary">List an Item</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
