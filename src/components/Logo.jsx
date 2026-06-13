import React from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ size = 36, className = '' }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Be Strong Fitness Club"
        style={{ height: `${size}px`, width: 'auto' }}
        className="object-contain"
      />
    </div>
  );
}
