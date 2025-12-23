import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const heroVideo = "https://tjlvivpxnltubacusphz.supabase.co/storage/v1/object/public/media%20for%20MEMBER/WhatsApp%20Video%202025-12-19%20at%2021.11.44.mp4";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
        
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </motion.div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-widest font-light text-white mb-4">
            MEMBER
          </h1>
          <p className="text-sm sm:text-base md:text-lg tracking-wide text-white/90 font-light">
            Define Your Style
          </p>
        </motion.div>
      </div>

      {/* Optional scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 sm:h-12 bg-white/50"
        />
      </motion.div>
    </section>
  );
}