import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingCart, Menu, X } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/components/CartContext';

export default function Navbar() {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68a2f89bf8ba911443836d76/816c97853_WhatsAppImage2025-12-19at1852472.jpeg";

  const navLinks = [
    { name: 'SHOP', href: createPageUrl('Shop') },
    { name: 'COLLECTIONS', href: createPageUrl('Collections') },
  ];

  const rightLinks = [
    { name: 'ABOUT', href: createPageUrl('About') },
    { name: 'CONTACT', href: createPageUrl('Contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-40 md:h-44">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm tracking-widest text-gray-800 hover:text-[#1e3a5f] transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>

          {/* Center Logo */}
          <Link to={createPageUrl('Home')} className="absolute left-1/2 transform -translate-x-1/2">
            <motion.img
              src={logoUrl}
              alt="MEMBER"
              className="h-36 md:h-40 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm tracking-widest text-gray-800 hover:text-[#1e3a5f] transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <button className="p-2 hover:text-[#1e3a5f] transition-colors">
                <User className="w-5 h-5" />
              </button>
              <Link to={createPageUrl('Cart')} className="p-2 hover:text-[#1e3a5f] transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#1e3a5f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center space-x-2">
            <button className="p-2">
              <User className="w-5 h-5" />
            </button>
            <Link to={createPageUrl('Cart')} className="p-2 relative">
              <ShoppingCart className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1e3a5f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {[...navLinks, ...rightLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm tracking-widest text-gray-800 hover:text-[#1e3a5f] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}