import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Splash from './pages/Splash';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryListing from './pages/CategoryListing';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import LendItem from './pages/LendItem';
import Account from './pages/Account';
import Wallet from './pages/Wallet';
import Help from './pages/Help';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Nav />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 page-fade-in" key={location.pathname}>
          <Routes>
            <Route path="/splash" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/lend" element={<LendItem />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;