import React, { ReactNode } from 'react';
import { Parallax } from 'react-parallax';

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
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bgImage}
      bgImageAlt="Parallax Background"
      strength={strength}
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      <div 
        id={id}
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 py-16">
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
