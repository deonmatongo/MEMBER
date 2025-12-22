import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import DualImageSection from '@/components/home/DualImageSection';
import BrandStory from '@/components/home/BrandStory';
import FullWidthImageSection from '@/components/home/FullWidthImageSection';
import ProductShowcase from '@/components/home/ProductShowcase';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Full viewport */}
      <HeroSection />
      
      {/* Featured Collection */}
      <FeaturedCollection />
      
      {/* Dual Image Section */}
      <DualImageSection />
      
      {/* Full Width Image */}
      <FullWidthImageSection />
      
      {/* Product Showcase */}
      <ProductShowcase />
      
      {/* Brand Story */}
      <BrandStory />
      
      {/* Newsletter/Instagram Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl tracking-widest font-light text-gray-900 mb-4 sm:mb-6 px-4">
            JOIN THE COMMUNITY
          </h3>
          <p className="text-sm sm:text-base text-gray-600 tracking-wide font-light mb-6 sm:mb-8 px-4">
            Follow us on Instagram for exclusive drops, behind-the-scenes content, and style inspiration
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-900 text-gray-900 tracking-widest text-xs sm:text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>FOLLOW @MEMBER</span>
          </a>
        </motion.div>
      </section>

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