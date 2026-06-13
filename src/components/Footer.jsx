import React from 'react';
import Logo from './Logo';

const FacebookIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);



const YoutubeIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-border py-20 px-6 md:px-12 text-text-muted text-left">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center mb-6">
              <Logo size={42} showText={true} />
            </a>
            <p className="line-height-[1.7] text-sm mb-8">
              We are dedicated to building a healthier, stronger, and more resilient community. Be Strong Fitness Club provides elite fitness training, certified coaching, and custom diet blueprints to elevate your physical potential.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FacebookIcon size={18} />, href: '#' },
                { icon: <InstagramIcon size={18} />, href: 'https://www.instagram.com/be_strong_gym_32?igsh=cHNjZ3hnMzBoNnVr' },
                { icon: <YoutubeIcon size={18} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded bg-white/3 border border-border flex items-center justify-center text-text-light hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-text-white text-base font-bold uppercase tracking-wider font-heading mb-6">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services & Programs', href: '#services' },
                { name: 'Membership Plans', href: '#membership' },
                { name: 'Contact Support', href: '#contact' },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Join the Gym */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 className="text-text-white text-base font-bold uppercase tracking-wider font-heading mb-6">
              Join the Gym
            </h4>
            <p className="text-sm font-black text-primary uppercase tracking-wider mb-2">
              JOIN OUR FITNESS FAMILY
            </p>
            <p className="text-sm leading-relaxed mb-6 text-text-muted">
              Take the first step towards a healthier and stronger lifestyle.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-8 py-3 rounded-sm bg-primary text-text-dark border-2 border-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-hover hover:border-primary-hover hover:text-text-white hover:-translate-y-0.5 hover:shadow-primary/35 cursor-pointer"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <span>&copy; {new Date().getFullYear()} Be Strong Fitness Club. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
