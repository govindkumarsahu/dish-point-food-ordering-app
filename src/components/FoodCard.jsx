import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(food);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={food.image}
          alt={food.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
          ₹{food.price.toFixed(0)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{food.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{food.description}</p>
        <div className="flex justify-between items-center">
          <span className="inline-flex items-center bg-orange-50 text-orange-600 rounded-full px-3 py-1 text-xs font-semibold">
            {food.category.charAt(0).toUpperCase() + food.category.slice(1)}
          </span>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
