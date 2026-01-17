import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { itemCount } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 font-display">DishPoint</span>
              <span className="hidden sm:inline-flex text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                Delivery
              </span>
            </Link>
            <div className="hidden md:flex md:space-x-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-orange-600 px-2 py-2 text-sm font-semibold"
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-gray-700 hover:text-orange-600 px-2 py-2 text-sm font-semibold"
              >
                Menu
              </Link>
              <Link
                to="/order-summary"
                className="text-gray-700 hover:text-orange-600 px-2 py-2 text-sm font-semibold"
              >
                Orders
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/login')}
              className="hidden md:flex items-center text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold"
            >
              <UserCircleIcon className="h-6 w-6 mr-1" />
              <span>Sign In</span>
            </button>
            <div className="ml-3 relative">
              <button 
                onClick={() => navigate('/cart')}
                className="p-2 text-gray-700 hover:text-orange-600 rounded-full hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
