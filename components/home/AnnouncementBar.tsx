import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface AnnouncementBarProps {
  message: string;
  ctaLabel: string;
  ctaHref: string;
  dismissKey: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ message, ctaLabel, ctaHref, dismissKey }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissedUntil = localStorage.getItem(dismissKey);
    if (!dismissedUntil || new Date().getTime() > parseInt(dismissedUntil, 10)) {
      setIsVisible(true);
    }
  }, [dismissKey]);

  const handleDismiss = () => {
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    const expiry = new Date().getTime() + sevenDays;
    localStorage.setItem(dismissKey, expiry.toString());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-brand-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center p-2 text-sm font-medium">
          <p>
            {message}
            <Link to={ctaHref} className="ml-2 font-semibold underline">
              {ctaLabel} <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Dismiss"
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
