import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ children, className, ...props }) => {
  return (
    <select
      className={`block w-full h-10 appearance-none rounded-md border border-gray-300 bg-transparent py-2 pl-3 pr-8 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-brand-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 ${className || ''}`}
      {...props}
    >
      {children}
    </select>
  );
};
