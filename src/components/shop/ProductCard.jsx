import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ProductCard({ product }) {
  return (
    <Link to={createPageUrl(`ProductDetail?id=${product.id}`)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group cursor-pointer"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {!product.in_stock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white tracking-widest text-sm">SOLD OUT</span>
            </div>
          )}
          {product.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-white text-gray-900 px-3 py-1 text-xs tracking-widest">
                FEATURED
              </span>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm tracking-widest text-gray-900 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm font-light text-gray-600">
            {product.price.toFixed(2)} PLN
          </p>
        </div>
      </motion.div>
    </Link>
  );
}