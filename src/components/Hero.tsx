"use client";

import { Parallax } from "react-parallax";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className = "" }: HeroProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`relative w-full h-screen ${className}`}>
      {isMounted && (
        <Parallax
          bgImage="/hero.gif"
          strength={300}
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
            className="flex flex-col items-center justify-center h-screen"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 animate-pulse-slow">
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
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="drop-shadow-lg"
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
