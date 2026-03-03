import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Simple monochrome SVG representations of leading African brands
const logos = [
  {
    name: "DANGOTE",
    svg: (
      <svg viewBox="0 0 120 40" className="w-24 h-8 fill-current">
        <text x="0" y="30" fontWeight="900" fontSize="24" fontFamily="serif">DANGOTE</text>
      </svg>
    )
  },
  {
    name: "MTN",
    svg: (
      <svg viewBox="0 0 120 40" className="w-24 h-8 fill-current">
        <rect x="0" y="5" width="60" height="30" rx="15" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="15" y="27" fontWeight="900" fontSize="18" fontFamily="sans-serif">MTN</text>
      </svg>
    )
  },
  {
    name: "ZENITH",
    svg: (
      <svg viewBox="0 0 120 40" className="w-24 h-8 fill-current">
        <text x="0" y="30" fontWeight="900" fontSize="22" fontFamily="serif">ZENITH</text>
      </svg>
    )
  },
  {
    name: "UBA",
    svg: (
      <svg viewBox="0 0 120 40" className="w-24 h-8 fill-current">
        <text x="0" y="30" fontWeight="900" fontSize="24" fontFamily="serif">UBA</text>
      </svg>
    )
  },
  {
    name: "ACCESS",
    svg: (
      <svg viewBox="0 0 120 40" className="w-24 h-8 fill-current">
        <text x="0" y="30" fontWeight="900" fontSize="20" fontFamily="sans-serif" letterSpacing="2">ACCESS</text>
      </svg>
    )
  },
  {
    name: "AIRTEL",
    svg: (
      <svg viewBox="0 0 120 40" className="w-24 h-8 fill-current">
        <text x="0" y="30" fontWeight="900" fontSize="22" fontFamily="sans-serif">airtel</text>
      </svg>
    )
  },
  {
    name: "FIRST BANK",
    svg: (
      <svg viewBox="0 0 120 40" className="w-24 h-8 fill-current">
        <text x="0" y="30" fontWeight="900" fontSize="18" fontFamily="serif">FIRST BANK</text>
      </svg>
    )
  }
];

const fullList = [...logos, ...logos, ...logos];

const EnterpriseTicker: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6] border-y border-[#0F1E2E]/5 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20"
      >
        <span className="text-[#C6A75E] font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">
          Trusted By
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#0F1E2E] serif leading-tight">
          Trusted by Leading Enterprises <br className="hidden md:block" /> Across Africa
        </h2>
        <div className="w-12 h-px bg-[#C6A75E]/40 mx-auto mt-12"></div>
      </motion.div>

      <div className="relative flex overflow-hidden py-4 border-y border-[#0F1E2E]/5 bg-white/30 backdrop-blur-sm">
        <div className="ticker-content flex items-center whitespace-nowrap">
          {fullList.map((logo, i) => (
            <div
              key={i}
              className="px-16 md:px-24 py-8 text-[#0F1E2E]/30 hover:text-[#0F1E2E] transition-all duration-700 cursor-default flex items-center justify-center grayscale"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(EnterpriseTicker);
