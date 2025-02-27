'use client'

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';

interface NavItemProps {
  to: string;
  label: string;
  active?: boolean;
  setActive: (item: string) => void;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, active = false, setActive, onClick }) => {
  return (
    <ScrollLink 
      to={to}
      spy={true}
      smooth={true}
      offset={-100} // Increased negative offset to ensure sections appear below navbar
      duration={500}
      onSetActive={() => setActive(to)}
      onClick={onClick}
      className={`
        font-serif text-lg relative px-4 py-2 transition-all duration-300 cursor-pointer
        ${active ? 'text-black' : 'text-gray-700'}
        hover:text-black
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] 
        after:w-0 after:bg-black after:transition-all after:duration-300
        hover:after:w-full
        ${active ? 'after:w-full' : ''}
      `}
    >
      {label}
    </ScrollLink>
  );
};

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Register events to update active state when scrolling
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    
    const handleScroll = () => {
      // Get the height of the viewport
      const viewportHeight = window.innerHeight;
      
      // If we've scrolled past the hero section (viewport height), show the navbar
      if (window.scrollY > viewportHeight * 0.5) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      // Clean up events
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <nav className={`w-full bg-[#f8f5f0] py-4 px-4 md:px-8 shadow-sm fixed top-0 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`} style={{ height: '80px' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-black">
          Brand
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2">
          <NavItem 
            to="home" 
            label="Home" 
            active={activeItem === 'home'} 
            setActive={setActiveItem}
          />
          <NavItem 
            to="about" 
            label="About" 
            active={activeItem === 'about'} 
            setActive={setActiveItem}
          />
          <NavItem 
            to="work" 
            label="Work" 
            active={activeItem === 'work'} 
            setActive={setActiveItem}
          />
          <NavItem 
            to="contact" 
            label="Get in Touch" 
            active={activeItem === 'contact'} 
            setActive={setActiveItem}
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-8">
          <NavItem 
            to="home" 
            label="Home" 
            active={activeItem === 'home'} 
            setActive={setActiveItem}
            onClick={closeMobileMenu}
          />
          <NavItem 
            to="about" 
            label="About" 
            active={activeItem === 'about'} 
            setActive={setActiveItem}
            onClick={closeMobileMenu}
          />
          <NavItem 
            to="work" 
            label="Work" 
            active={activeItem === 'work'} 
            setActive={setActiveItem}
            onClick={closeMobileMenu}
          />
          <NavItem 
            to="contact" 
            label="Get in Touch" 
            active={activeItem === 'contact'} 
            setActive={setActiveItem}
            onClick={closeMobileMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
