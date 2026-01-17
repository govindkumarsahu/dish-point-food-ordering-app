import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/order-summary', {
      state: {
        items,
        total: cartTotal,
      },
    });
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Your Cart</h1>
            <p className="mt-2 text-gray-500">Review your items before checkout.</p>
          </div>
          <Link
            to="/menu"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500"
          >
            Continue shopping →
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Your cart is empty</h3>
            <p className="mt-2 text-gray-500">Add your favorite dishes from the menu.</p>
            <Link
              to="/menu"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-md p-5 flex flex-col sm:flex-row gap-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-28 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <span className="text-lg font-semibold text-gray-900 mt-2 sm:mt-0">
                        ₹{(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-orange-600"
                        >
                          −
                        </button>
                        <span className="min-w-[24px] text-center font-semibold text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-orange-600"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-semibold text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
              <h2 className="text-xl font-semibold text-gray-900">Order Total</h2>
              <div className="mt-4 space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span>₹60</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxes</span>
                  <span>₹40</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex items-center justify-between text-base font-semibold text-gray-900">
                  <span>Total</span>
                  <span>₹{(cartTotal + 100).toFixed(0)}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-6 w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-500 transition"
              >
                Proceed to Checkout
              </button>
              <p className="mt-4 text-xs text-gray-400">
                By placing the order, you agree to our terms and privacy policy.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
