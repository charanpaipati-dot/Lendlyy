import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import { useCart } from '../context/CartContext';
import { sampleItems } from '../lib/data';

const NavLinks = ({ className, onLinkClick }: { className?: string; onLinkClick?: () => void; }) => (
  <div className={className}>
    <NavLink to="/categories" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300'} hover:text-brand-600 dark:hover:text-brand-400 transition-colors`} onClick={onLinkClick}>Categories</NavLink>
    <NavLink to="/luxury" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'} hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center space-x-1`} onClick={onLinkClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span>Luxury</span>
    </NavLink>
    <NavLink to="/lend" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300'} hover:text-brand-600 dark:hover:text-brand-400 transition-colors`} onClick={onLinkClick}>Lend an Item</NavLink>
    <NavLink to="/help" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300'} hover:text-brand-600 dark:hover:text-brand-400 transition-colors`} onClick={onLinkClick}>Help</NavLink>
  </div>
);

const CartIcon = () => {
    const { cartItems } = useCart();
    const itemCount = cartItems.length;

    return (
        <Link to="/checkout" className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-white text-xs font-bold">
                    {itemCount}
                </span>
            )}
        </Link>
    );
}

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<typeof sampleItems>([]);
    const navigate = useNavigate();
    const searchRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSuggestions([]);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    useEffect(() => {
        if (query.length < 2) {
            setSuggestions([]);
            return;
        }
        const debounceTimer = setTimeout(() => {
            const filtered = sampleItems.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.brand.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 5);
            setSuggestions(filtered);
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [query]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/categories?q=${encodeURIComponent(query)}`);
            setSuggestions([]);
            setQuery('');
        }
    };

    return (
        <div ref={searchRef} className="relative w-full max-w-xs">
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search items..."
                    className="w-full h-10 pl-4 pr-10 text-sm bg-gray-100 dark:bg-gray-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button type="submit" className="absolute top-0 right-0 h-10 px-3 text-gray-500 dark:text-gray-400 hover:text-brand-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </form>
            {suggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-96 overflow-y-auto">
                    <ul>
                        {suggestions.map(item => (
                            <li key={item.id}>
                                <Link to={`/product/${item.id}`} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => { setSuggestions([]); setQuery('')}}>
                                    <img src={item.images[0]} alt={item.title} className="w-10 h-10 rounded-md object-cover mr-3" />
                                    <div className="flex-1 min-w-0">
                                      <span className="text-sm font-medium block truncate">{item.title}</span>
                                      <span className="text-xs text-gray-500">{item.brand}</span>
                                    </div>
                                    {item.isLuxury && (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}


const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisibleMobile, setIsSearchVisibleMobile] = useState(false);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side */}
          <div className="flex items-center space-x-8">
            <Link to="/splash" className="flex-shrink-0 flex items-center space-x-2">
                <div className="bg-brand-500 rounded-lg p-1.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4V20H19V16H13V4Z" fill="white"/>
                    </svg>
                </div>
                <div>
                     <span className="text-2xl font-bold text-brand-500">Lendlyy</span>
                </div>
            </Link>
            <div className="hidden lg:flex">
                <NavLinks />
            </div>
          </div>

          {/* Right Side (Desktop) */}
           <div className="hidden lg:flex items-center space-x-4">
                <SearchBar />
                <CartIcon />
                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>
                <Link to="/login"><Button variant="ghost">Login</Button></Link>
                <Link to="/signup"><Button>Sign Up</Button></Link>
            </div>

          {/* Mobile Menu Toggles */}
          <div className="flex items-center lg:hidden">
            <button onClick={() => setIsSearchVisibleMobile(true)} className="p-2 text-gray-600 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <CartIcon />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="ml-2 bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {isSearchVisibleMobile && (
            <div className="absolute top-0 left-0 w-full h-16 bg-white dark:bg-gray-900 z-20 flex items-center px-4 border-b border-gray-200 dark:border-gray-700 lg:hidden">
                <SearchBar />
                 <button onClick={() => setIsSearchVisibleMobile(false)} className="p-2 ml-2 text-gray-600 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        )}

      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
            <NavLinks className="flex flex-col space-y-2" onLinkClick={() => setIsMobileMenuOpen(false)} />
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
               <Link to="/login" className="flex-1">
                    <Button variant="outline" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Login</Button>
                </Link>
                <Link to="/signup" className="flex-1">
                    <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
