import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function FeaturedCollection() {
  const items = [
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/9d646b227_WhatsAppImage2025-12-19at18465812.jpg",
      price: "299.00"
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/571c11c1b_WhatsAppImage2025-12-19at1846589.jpg",
      price: "349.00"
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/e4f093b04_WhatsAppImage2025-12-19at1846588.jpg",
      price: "279.00"
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl tracking-widest font-light text-gray-900 mb-3 sm:mb-4">
            SIGNATURE COLLECTION
          </h2>
          <p className="text-sm sm:text-base text-gray-500 tracking-wide font-light max-w-xl mx-auto px-4">
            Limited edition pieces for those who dare to be different
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[3/4] bg-gray-100"
            >
              <img
                src={item.image}
                alt={`Collection ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2">
                <span className="text-gray-900 tracking-wider font-light text-sm">
                  {item.price} PLN
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl('Shop')}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-900 text-gray-900 tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              SHOP NOW
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}