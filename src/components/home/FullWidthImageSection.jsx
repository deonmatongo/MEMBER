import React from 'react';
import { motion } from 'framer-motion';

export default function FullWidthImageSection() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="https://images.unsplash.com/photo-1506629905607-77d8e0d9e46c?w=1600&h=900&fit=crop"
          alt="MEMBER Lifestyle"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white px-4"
      >
        <h3 className="text-xl sm:text-2xl md:text-4xl tracking-widest font-light">
          DEFINE YOUR STYLE
        </h3>
      </motion.div>
    </section>
  );
}