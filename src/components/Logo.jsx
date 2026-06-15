import React from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ size = 36, className = '' }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Be Strong Fitness Club"
        style={{ 
          height: `${size}px`, 
          width: 'auto',
          filter: 'invert(1) hue-rotate(180deg)'
        }}
        className="object-contain transition-all duration-300"
      />
    </div>
  );
}
