import React, { useState } from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, active = false }) => {
  return (
    <Link 
      href={href}
      className={`
        font-serif text-lg relative px-4 py-2 transition-all duration-300
        ${active ? 'text-black' : 'text-gray-700'}
        hover:text-black
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] 
        after:w-0 after:bg-black after:transition-all after:duration-300
        hover:after:w-full
      `}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');
  
  return (
    <nav className="w-full bg-[#f8f5f0] py-6 px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-black">
          Brand
        </div>
        
        <div className="flex space-x-2">
          <NavItem 
            href="/" 
            label="Home" 
            active={activeItem === 'home'} 
          />
          <NavItem 
            href="/about" 
            label="About" 
            active={activeItem === 'about'} 
          />
          <NavItem 
            href="/work" 
            label="Work" 
            active={activeItem === 'work'} 
          />
          <NavItem 
            href="/contact" 
            label="Contact" 
            active={activeItem === 'contact'} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
