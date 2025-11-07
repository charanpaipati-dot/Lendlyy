import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import Toast from './ui/Toast';

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);


const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && checked) {
            setToastMessage('Thanks for subscribing!');
            setEmail('');
            setChecked(false);
        } else {
            setToastMessage('Please enter a valid email and agree to the terms.');
        }
    };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                 <h2 className="text-2xl font-bold text-brand-500 mb-2">Lendlyy</h2>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Your stuff is our stuff.</p>
                 <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors" aria-label="Facebook"><FacebookIcon/></a>
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors" aria-label="Instagram"><InstagramIcon/></a>
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors" aria-label="Twitter"><TwitterIcon/></a>
                 </div>
            </div>
            <div className="md:col-span-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Stay updated</h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-sm focus:border-brand-500 focus:ring-brand-500"
                        required
                    />
                    <Button type="submit">Subscribe</Button>
                </form>
                <div className="mt-2 flex items-start">
                    <div className="flex items-center h-5">
                        <input id="consent" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="focus:ring-brand-500 h-4 w-4 text-brand-600 border-gray-300 rounded" required/>
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="consent" className="text-gray-500 dark:text-gray-400">By subscribing, you agree with our Privacy Policy.</label>
                    </div>
                </div>
            </div>
            <div className="md:col-span-1 md:text-right flex flex-col items-start md:items-end">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
                 <Link to="/help" className="w-full md:w-auto">
                    <Button variant="outline" className="w-full md:w-auto">Connect</Button>
                 </Link>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
             <p className="order-2 sm:order-1 mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Lendlyy. All rights reserved.</p>
             <div className="flex space-x-4 order-1 sm:order-2">
                <Link to="/help" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</Link>
                <Link to="/help" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</Link>
                <Link to="/help" className="hover:text-gray-900 dark:hover:text-white transition-colors">Payments</Link>
                <Link to="/help" className="hover:text-gray-900 dark:hover:text-white transition-colors">Refund Policy</Link>
                <Link to="/help" className="hover:text-gray-900 dark:hover:text-white transition-colors">Support</Link>
            </div>
        </div>
      </div>
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
    </footer>
  );
};

export default Footer;