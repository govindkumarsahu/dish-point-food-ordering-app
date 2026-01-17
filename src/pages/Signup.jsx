import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Create account</h1>
        <p className="mt-2 text-gray-500">Join DishPoint and order faster.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Full name</label>
            <input type="text" className="input-field mt-2" placeholder="Alex Johnson" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email address</label>
            <input type="email" className="input-field mt-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="input-field mt-2" placeholder="Create a password" />
          </div>
          <button type="button" className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-500">
            Create account
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-600 font-semibold hover:text-orange-500">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
