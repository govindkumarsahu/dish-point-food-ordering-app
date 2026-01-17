import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              isActive
                ? 'bg-orange-600 text-white border-orange-600 shadow-lg shadow-orange-200'
                : 'bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:text-orange-600'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
