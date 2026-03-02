import React, { memo } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", light = false }) => {
  const color = light ? "#F7F5F0" : "#C6A75E";
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base Pedestal */}
      <path d="M10 95V105H90V95H10Z" fill={color} />
      {/* Top Cap */}
      <path d="M20 15V25H80V15H20Z" fill={color} />
      {/* Pillars with better spacing */}
      <rect x="28" y="30" width="10" height="60" fill={color} opacity="0.9" />
      <rect x="45" y="30" width="10" height="60" fill={color} opacity="0.9" />
      <rect x="62" y="30" width="10" height="60" fill={color} opacity="0.9" />
      {/* Connecting Arches */}
      <path d="M15 25C15 25 20 38 50 38C80 38 85 25 85 25" stroke={color} strokeWidth="3" />
      <path d="M15 95C15 95 20 82 50 82C80 82 85 95 85 95" stroke={color} strokeWidth="3" />
    </svg>
  );
};

export default memo(Logo);
