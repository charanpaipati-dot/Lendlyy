import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''} flex-1`}>
            {stepIdx < currentStep ? (
              // Completed Step
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-brand-600" />
                </div>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 hover:bg-brand-900">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                   <span className="absolute top-10 w-max text-center text-xs text-gray-700 dark:text-gray-300 font-medium">{step}</span>
                </span>
              </>
            ) : stepIdx === currentStep -1 ? (
              // Current Step
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-600 bg-white dark:bg-gray-800" aria-current="step">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-600" aria-hidden="true" />
                   <span className="absolute top-10 w-max text-center text-sm font-semibold text-brand-600">{step}</span>
                </span>
              </>
            ) : (
              // Upcoming Step
              <>
                 <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 group-hover:border-gray-400">
                    <span className="absolute top-10 w-max text-center text-xs text-gray-500 dark:text-gray-400 font-medium">{step}</span>
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Stepper;
