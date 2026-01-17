import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-white">DishPoint</h3>
            <p className="mt-3 text-sm text-gray-400">
              Premium online food ordering for modern restaurants and hungry customers.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>skgovind0904@gmail.com</li>
              <li>+91 9128007434</li>
              <li>Purnea Bihar</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between">
          <span>© 2026 DishPoint. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Crafted for restaurants & startups.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
