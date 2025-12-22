import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Landing() {
  const logoUrl = "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Static Logo */}
        <motion.div 
          className="mb-8"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src={logoUrl} 
            alt="MEMBER" 
            className="w-[450px] md:w-[650px] h-auto object-contain"
          />
        </motion.div>

        {/* Enter Button */}
        <Link to={createPageUrl('Home')}>
          <motion.button
            className="text-lg tracking-[0.3em] text-gray-900 font-light hover:text-[#1e3a5f] transition-colors duration-500 relative group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ENTER
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-px bg-[#1e3a5f] origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </Link>

        {/* Instagram Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex flex-col items-center"
        >
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 hover:text-[#1e3a5f] transition-colors duration-300"
          >
            <Instagram className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
          </a>
          
          {/* Est. 2025 */}
          <p className="mt-2 text-xs tracking-widest text-gray-500 font-light">
            Est. 2025
          </p>
        </motion.div>
      </motion.div>

      {/* Subtle floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-200 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}