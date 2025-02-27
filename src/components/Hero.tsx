"use client";

import { Parallax } from "react-parallax";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className = "" }: HeroProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div id="home" className={`relative w-full h-screen ${className}`} style={{ scrollMarginTop: '80px' }}>
      {isMounted && (
        <Parallax
          bgImage="/hero.gif"
          strength={isMobile ? 100 : 300} // Reduce strength on mobile
          bgImageStyle={{
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            objectPosition: "center center"
          }}
          className="h-screen"
          renderLayer={(percentage) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: Math.min(1, percentage * 1.5),
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Add a semi-transparent overlay
              }}
            />
          )}
        >
          <div
            className="flex flex-col items-center justify-center h-screen px-4"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 animate-pulse-slow">
              <Image
                src="/logo-white.png"
                alt="Logo"
                priority
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
            
            {/* Bouncing down arrow */}
            <div className="absolute bottom-10 animate-bounce">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="drop-shadow-lg sm:w-10 sm:h-10"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>
        </Parallax>
      )}
    </div>
  );
};

export default Hero;
