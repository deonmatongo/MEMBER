import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const categories = ['all', 't-shirts', 'hoodies', 'bottoms', 'accessories'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const toggleSize = (size) => {
    const current = filters.sizes || [];
    if (current.includes(size)) {
      setFilters({ ...filters, sizes: current.filter(s => s !== size) });
    } else {
      setFilters({ ...filters, sizes: [...current, size] });
    }
  };

  const content = (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm tracking-widest mb-4 text-gray-900 font-medium">CATEGORY</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilters({ ...filters, category })}
              className={`block w-full text-left text-sm tracking-wide transition-colors ${
                filters.category === category
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {category.toUpperCase().replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-sm tracking-widest mb-4 text-gray-900 font-medium">SIZE</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-4 py-2 text-xs tracking-widest border transition-colors ${
                filters.sizes?.includes(size)
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <h3 className="text-sm tracking-widest mb-4 text-gray-900 font-medium">AVAILABILITY</h3>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly || false}
            onChange={(e) => setFilters({ ...filters, inStockOnly: e.target.checked })}
            className="w-4 h-4"
          />
          <span className="text-sm tracking-wide text-gray-600">In Stock Only</span>
        </label>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => setFilters({ category: 'all', sizes: [], inStockOnly: false })}
        className="text-sm tracking-wide text-gray-500 hover:text-gray-900 transition-colors underline"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-24 h-fit">
        {content}
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg tracking-widest mb-8">FILTERS</h2>
            {content}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}