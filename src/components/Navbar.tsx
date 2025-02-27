'use client'

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';

interface NavItemProps {
  to: string;
  label: string;
  active?: boolean;
  setActive: (item: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, active = false, setActive }) => {
  return (
    <ScrollLink 
      to={to}
      spy={true}
      smooth={true}
      offset={-70} // Adjust based on navbar height
      duration={500}
      onSetActive={() => setActive(to)}
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
  
  useEffect(() => {
    // Register events to update active state when scrolling
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    
    const handleScroll = () => {
      // Get the height of the viewport
      const viewportHeight = window.innerHeight;
      
      // If we've scrolled past the hero section (viewport height), show the navbar
      if (window.scrollY > viewportHeight * 0.8) {
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
  
  return (
    <nav className={`w-full bg-[#f8f5f0] py-6 px-8 shadow-sm fixed top-0 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`} style={{ position: 'fixed', transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-black">
          Brand
        </div>
        
        <div className="flex space-x-2">
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
      </div>
    </nav>
  );
};

export default Navbar;
