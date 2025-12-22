import React from 'react';
import { motion } from 'framer-motion';

export default function DualImageSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=1000&fit=crop"
              alt="MEMBER Collection"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 px-2 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-widest font-light text-gray-900">
              CRAFTED FOR <br />THE STREETS
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light tracking-wide">
              Each piece is carefully designed to blend comfort with style, 
              creating a unique aesthetic that speaks to the modern urban culture. 
              Our distressed finishes and oversized fits represent a new wave of streetwear.
            </p>
            <div className="pt-2 sm:pt-4">
              <div className="flex items-center space-x-8 sm:space-x-12">
                <div>
                  <p className="text-xl sm:text-2xl font-light text-gray-900">100%</p>
                  <p className="text-xs tracking-widest text-gray-500 mt-1">PREMIUM COTTON</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-light text-gray-900">LIMITED</p>
                  <p className="text-xs tracking-widest text-gray-500 mt-1">EDITION DROPS</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}