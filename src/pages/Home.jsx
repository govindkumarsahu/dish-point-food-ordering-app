import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FoodCard from '../components/FoodCard';
import { categories, featuredFoods } from '../data/foodData';

const Home = () => {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#f97316,_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Modern food ordering for bold restaurants.
              </motion.h1>
              <motion.p
                className="mt-5 text-lg text-gray-200 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Curated menus, lightning-fast delivery, and delightful ordering experiences for your customers.
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/menu"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-400"
                  >
                    Browse Menu
                  </Link>
                </motion.div>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:border-orange-300 hover:text-orange-200"
                >
                  Partner Login
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 text-center text-white">
                <div>
                  <p className="text-2xl font-bold">120+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Restaurants</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">18 min</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-300">Avg Delivery</p>
                </div>
              </div>
            </div>
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80"
                alt="Restaurant spread"
                className="rounded-2xl h-72 w-full object-cover"
              />
              <div className="mt-4 bg-white/90 rounded-2xl p-4">
                <p className="text-sm font-semibold text-gray-900">Today’s spotlight</p>
                <p className="mt-1 text-xs text-gray-500">Chef-curated seasonal bowls</p>
                <p className="mt-3 text-lg font-bold text-orange-600">₹499</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Explore categories</h2>
              <p className="mt-2 text-gray-500">Find meals that match your cravings.</p>
            </div>
            <Link
              to="/menu"
              className="text-sm font-semibold text-orange-600 hover:text-orange-500"
            >
              View full menu →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.filter((category) => category !== 'all').map((category) => (
              <div key={category} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                <p className="text-xs uppercase tracking-[0.2em] text-orange-500">{category}</p>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {category.charAt(0).toUpperCase() + category.slice(1)} Specials
                </h3>
                <p className="mt-2 text-sm text-gray-500">Handpicked favorites to try today.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured dishes</h2>
            <p className="mt-3 text-gray-500">Chef-curated highlights your customers love.</p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredFoods.map((food) => (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FoodCard food={food} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
