import React from 'react';
import { motion } from 'framer-motion';

export default function ProductShowcase() {
  const showcaseImages = [
    {
      url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=1000&fit=crop",
      title: "BACK PRINT COLLECTION"
    },
    {
      url: "https://images.unsplash.com/photo-1539533113202-2b2d5c2c98d7?w=800&h=1000&fit=crop",
      title: "EXCLUSIVE GRAPHICS"
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {showcaseImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="mt-4 text-center"
              >
                <h4 className="text-lg tracking-widest font-light text-gray-900">
                  {item.title}
                </h4>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}