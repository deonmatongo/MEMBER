import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  const collections = [
    {
      title: 'SIGNATURE SERIES',
      description: 'Distressed tees with iconic MEMBER graphics. Limited edition drops.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/9d646b227_WhatsAppImage2025-12-19at18465812.jpg',
      link: createPageUrl('Shop?category=t-shirts')
    },
    {
      title: 'BACK PRINT COLLECTION',
      description: 'Statement pieces designed to stand out. Each design tells a story.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/3cb042f96_WhatsAppImage2025-12-19at1846582.jpg',
      link: createPageUrl('Shop?category=t-shirts')
    },
    {
      title: 'OVERSIZED ESSENTIALS',
      description: 'Comfort meets style. Relaxed fits for everyday wear.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/f1abd18be_WhatsAppImage2025-12-19at18465811.jpg',
      link: createPageUrl('Shop?category=t-shirts')
    },
    {
      title: 'ROMANTIC REBELLION',
      description: 'Soft aesthetics with an edge. For those who wear their heart on their sleeve.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/d9c87be43_WhatsAppImage2025-12-19at1846587.jpg',
      link: createPageUrl('Shop?category=t-shirts')
    }
  ];

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
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/3cb042f96_WhatsAppImage2025-12-19at1846582.jpg"
            alt="Collections"
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
            COLLECTIONS
          </motion.h1>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="text-gray-600 tracking-wide font-light max-w-2xl mx-auto">
              Curated collections that define the MEMBER aesthetic. Each piece crafted with intention, 
              designed for those who refuse to blend in.
            </p>
          </motion.div>

          {/* Collections Grid */}
          <div className="space-y-24">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative aspect-[3/4] overflow-hidden group ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}>
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl tracking-widest font-light text-gray-900">
                    {collection.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed tracking-wide font-light">
                    {collection.description}
                  </p>
                  <Link to={collection.link}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm tracking-widest text-gray-900 hover:text-gray-600 transition-colors group"
                    >
                      EXPLORE COLLECTION
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <h3 className="text-2xl md:text-3xl tracking-widest font-light text-gray-900 mb-8">
              DISCOVER MORE
            </h3>
            <Link to={createPageUrl('Shop')}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-900 text-gray-900 tracking-widest text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                SHOP ALL PRODUCTS
              </motion.button>
            </Link>
          </motion.div>
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