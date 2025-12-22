import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section className="py-12 sm:py-16 md:py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-widest font-light text-gray-900">
            MEMBER
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
            More than clothing, it's a statement. A declaration of individuality. 
            Join the community of those who refuse to blend in.
          </p>
          <div className="pt-2 sm:pt-4">
            <p className="text-xs tracking-[0.3em] text-gray-400">
              ESTABLISHED 2025 — FOR THE REBELS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}