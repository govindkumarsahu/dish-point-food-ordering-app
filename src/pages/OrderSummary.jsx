import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderSummary = () => {
  const location = useLocation();
  const orderItems = location.state?.items || [];
  const total = location.state?.total ?? 0;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Order Summary</h1>
          <p className="mt-2 text-gray-500">Thanks for your order! Here are the details.</p>

          {orderItems.length === 0 ? (
            <div className="mt-8 text-center">
              <p className="text-gray-500">No recent orders found.</p>
              <Link
                to="/menu"
                className="mt-5 inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500"
              >
                Explore Menu
              </Link>
            </div>
          ) : (
            <div className="mt-8">
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-base font-semibold text-gray-900">
                      ₹{(item.price * item.quantity).toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-lg font-semibold text-gray-900">
                <span>Total Paid</span>
                <span>₹{(total + 100).toFixed(0)}</span>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800"
                >
                  Back to Home
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-semibold hover:border-orange-400 hover:text-orange-600"
                >
                  Order again
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSummary;
