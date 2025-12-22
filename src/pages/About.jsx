import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function About() {
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
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694979a4ca7042c6222da9d6/c32d07486_WhatsAppImage2025-12-19at18465810.jpg"
            alt="About"
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
            ABOUT
          </motion.h1>
        </div>
      </section>

      <div className="py-16 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-lg sm:text-xl text-gray-600 tracking-wide font-light">
              More than clothing. A movement.
            </p>
          </motion.div>

          {/* Story Sections */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl tracking-widest font-light text-gray-900">
                OUR STORY
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed tracking-wide font-light">
                <p>
                  MEMBER was born from a simple idea: clothing should be more than fabric and thread. 
                  It should be a statement, a declaration of individuality, a badge of belonging to something greater.
                </p>
                <p>
                  Established in 2025, we set out to create pieces that blur the line between streetwear 
                  and high fashion, between comfort and statement. Each design is crafted with intention, 
                  every detail considered, every piece limited.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h3 className="text-xl tracking-widest font-light text-gray-900 mb-4">
                  PHILOSOPHY
                </h3>
                <p className="text-gray-600 leading-relaxed tracking-wide font-light">
                  We believe in quality over quantity, in timeless design over fleeting trends. 
                  Our pieces are designed to be worn, lived in, and loved. Each collection is limited, 
                  each drop intentional.
                </p>
              </div>
              <div>
                <h3 className="text-xl tracking-widest font-light text-gray-900 mb-4">
                  CRAFTSMANSHIP
                </h3>
                <p className="text-gray-600 leading-relaxed tracking-wide font-light">
                  Premium materials, meticulous attention to detail, and a commitment to sustainable practices. 
                  Every MEMBER piece is crafted to last, designed to become a staple in your wardrobe.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl tracking-widest font-light text-gray-900 mb-8 text-center">
                OUR VALUES
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-light text-gray-900 mb-2">01</div>
                  <h4 className="text-sm tracking-widest text-gray-900 mb-3">AUTHENTICITY</h4>
                  <p className="text-sm text-gray-600 font-light">
                    Stay true to yourself. No compromises.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-gray-900 mb-2">02</div>
                  <h4 className="text-sm tracking-widest text-gray-900 mb-3">QUALITY</h4>
                  <p className="text-sm text-gray-600 font-light">
                    Premium materials, exceptional craftsmanship.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-gray-900 mb-2">03</div>
                  <h4 className="text-sm tracking-widest text-gray-900 mb-3">COMMUNITY</h4>
                  <p className="text-sm text-gray-600 font-light">
                    Building a movement, one member at a time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 py-12"
            >
              <h2 className="text-3xl md:text-4xl tracking-widest font-light text-gray-900">
                JOIN THE MOVEMENT
              </h2>
              <p className="text-gray-600 tracking-wide font-light max-w-2xl mx-auto">
                MEMBER is more than a brand. It's a community of individuals who refuse to blend in, 
                who embrace their uniqueness, who wear their identity with pride.
              </p>
              <p className="text-sm tracking-widest text-gray-400">
                ARE YOU A MEMBER?
              </p>
            </motion.div>
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