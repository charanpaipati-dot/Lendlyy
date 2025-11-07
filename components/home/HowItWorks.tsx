import React from 'react';
import Button from '../ui/Button';
import { howItWorksSteps } from '../../lib/data';
import { Link } from 'react-router-dom';

const StepIcon = ({ step }: { step: number }) => {
    // FIX: Changed JSX.Element to React.ReactElement to resolve namespace issue.
    const icons: { [key: number]: React.ReactElement } = {
        1: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
        2: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
        3: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    };
    return icons[step] || <div className="h-10 w-10"></div>;
};

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How Lendlyy Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Renting luxury and lifestyle items has never been easier.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 mb-6">
                <StepIcon step={index + 1} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/categories">
            <Button size="lg">Start Browsing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
