// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-8 md:px-12 border-t border-white/20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/60 uppercase tracking-wider">
          © 2025 Webbrazee
        </p>
        
        <div className="flex gap-8">
          <motion.a
            href="https://instagram.com/webbrazee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors uppercase tracking-wider"
            whileHover={{ y: -2 }}
          >
            Instagram
          </motion.a>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;