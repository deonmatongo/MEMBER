import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/shop/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { getProducts } from '@/api/products';
import { useQuery } from '@tanstack/react-query';

export default function Shop() {
  const [filters, setFilters] = useState({
    category: 'all',
    sizes: [],
    inStockOnly: false
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
    initialData: []
  });

  const filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.inStockOnly && !product.in_stock) return false;
    if (filters.sizes.length > 0) {
      const hasMatchingSize = filters.sizes.some(size => 
        product.sizes?.includes(size)
      );
      if (!hasMatchingSize) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden mt-40 md:mt-44">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop"
            alt="Shop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-widest font-light text-white"
          >
            SHOP
          </motion.h1>
        </div>
      </section>

      <div className="pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 mb-8 sm:mb-12"
          >
            <p className="text-center text-sm sm:text-base text-gray-600 tracking-wide font-light">
              {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </motion.div>

          <div className="flex gap-6 lg:gap-8">
            {/* Filter Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                mobileOpen={mobileFilterOpen}
                setMobileOpen={setMobileFilterOpen}
              />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setMobileFilterOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 text-sm tracking-widest"
                >
                  <Filter className="w-4 h-4" />
                  FILTERS
                </button>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="aspect-[3/4] bg-gray-200 mb-4" />
                      <div className="h-4 bg-gray-200 w-3/4 mb-2" />
                      <div className="h-4 bg-gray-200 w-1/2" />
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 tracking-wide">No products found</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest text-gray-400">
            © 2025 MEMBER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}