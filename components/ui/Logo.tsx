import React, { memo } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", light = false }) => {
  const color = light ? "#F7F5F0" : "#C6A75E";
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sophisticated H Monogram */}
      <path d="M35 25V75" stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      <path d="M65 25V75" stroke={color} strokeWidth="2.5" strokeLinecap="square" />
      <path d="M35 50L65 50" stroke={color} strokeWidth="1.5" />
      
      {/* Elegant Serif Details */}
      <path d="M30 25H40" stroke={color} strokeWidth="1.5" />
      <path d="M30 75H40" stroke={color} strokeWidth="1.5" />
      <path d="M60 25H70" stroke={color} strokeWidth="1.5" />
      <path d="M60 75H70" stroke={color} strokeWidth="1.5" />
      
      {/* Strategic Framing (Subtle) */}
      <path d="M20 15V25M20 15H30" stroke={color} strokeWidth="0.75" opacity="0.4" />
      <path d="M80 85V75M80 85H70" stroke={color} strokeWidth="0.75" opacity="0.4" />
      
      {/* Center point of balance */}
      <circle cx="50" cy="50" r="1" fill={color} opacity="0.5" />
    </svg>
  );
};

export default memo(Logo);
