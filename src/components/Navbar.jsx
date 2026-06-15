import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onBookSessionClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logoSize = isMobile 
    ? (isScrolled ? 72 : 90) 
    : (isScrolled ? 84 : 120);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-between items-center ${isScrolled
        ? 'py-4 px-6 md:px-12 bg-bg-light/80 border-b border-white/5 backdrop-blur-md shadow-lg'
        : 'py-6 px-6 md:px-12 bg-transparent border-b border-transparent'
        }`}
    >
      {/* Brand Logo */}
      <a href="#home" className="flex items-center">
        <Logo size={logoSize} showText={true} />
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative no-underline text-text-light font-medium text-[0.95rem] transition-colors duration-200 font-body py-1 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right hover:after:origin-left"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {/* Book Now Button */}
        <button
          onClick={onBookSessionClick}
          className="inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider px-6 py-2.5 rounded-sm bg-primary text-text-dark text-xs md:text-sm border-2 border-primary shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary-hover hover:border-primary-hover hover:text-text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/35 cursor-pointer"
        >
          Book Session
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden bg-transparent border-none text-text-white cursor-pointer p-1"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-light border-b border-border py-8 px-6 flex flex-col gap-5 shadow-2xl z-50 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="no-underline text-text-light font-semibold text-lg font-heading pb-2 border-b border-white/5 transition-colors duration-200 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onBookSessionClick();
            }}
            className="inline-flex items-center justify-center font-heading font-semibold uppercase tracking-wider py-3.5 rounded-sm bg-primary text-text-dark border-2 border-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-hover hover:border-primary-hover hover:text-text-white w-full cursor-pointer"
          >
            Book Session
          </button>
        </div>
      )}
    </nav>
  );
}
