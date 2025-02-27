import React, { ReactNode, useEffect, useState, useRef } from 'react';

interface ParallaxSectionProps {
  id: string;
  bgImage: string;
  strength?: number;
  children: ReactNode;
  overlayColor?: string;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  bgImage,
  strength = 500,
  children,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  className = '',
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only update when section is in view
      if (top < windowHeight && top > -sectionRef.current.offsetHeight) {
        // Calculate parallax offset based on scroll position
        const newOffset = (scrollPosition - (scrollPosition + top - windowHeight)) / (strength * 0.1);
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [strength]);

  return (
    <div 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div 
        id={id}
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 py-16">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
