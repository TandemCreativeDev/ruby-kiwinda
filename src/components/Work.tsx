"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryProps {
  title: string;
  description: string;
  images: string[];
}

const Gallery = ({ title, description, images }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // For drag scrolling functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Set initial scroll position to ensure first image is visible
  useEffect(() => {
    if (galleryRef.current && !isLoading) {
      // Reset scroll position to ensure the first image is properly positioned
      galleryRef.current.scrollLeft = 0;
    }
  }, [isLoading]);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
    document.body.style.cursor = "grabbing";
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2.5; // Increased scroll speed multiplier
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "default";
    }
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !galleryRef.current) return;
    const x = e.touches[0].pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="mb-24">
      <div className="w-full pr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-right pr-[5%]">
          {title}
        </h2>
        <p className="text-right text-lg mb-12 max-w-3xl ml-auto pr-[5%]">
          {description}
        </p>
      </div>
      
      <div className="relative w-full overflow-visible">
        {/* Left whitespace overlay */}
        <div className="absolute left-0 top-0 bg-white w-[40%] h-full z-10"></div>
        
        {/* Gallery container */}
        <div 
          ref={galleryRef}
          className={`
            w-full overflow-x-auto pb-8 
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory"
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex space-x-8 pl-[40%] pr-[30%]">
            {isLoading ? (
              // Loading skeletons
              Array.from({ length: 4 }).map((_, index) => (
                <div 
                  key={`skeleton-${index}`} 
                  className="flex-shrink-0 w-[40vw] max-w-[450px] min-w-[280px] h-[30vw] max-h-[350px] min-h-[200px] relative rounded-lg overflow-hidden shadow-lg bg-gray-200 animate-pulse"
                />
              ))
            ) : (
              images.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[40vw] max-w-[450px] min-w-[280px] h-[30vw] max-h-[350px] min-h-[200px] relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div 
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                    className="cursor-pointer w-full h-full"
                  >
                    <Image
                      src={src}
                      alt={`${title} image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                      onError={(e) => {
                        console.error(`Failed to load image: ${src}`);
                      }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Right fade effect */}
        <div className="absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-[15%] h-full pointer-events-none"></div>
      </div>
      
      <div className="text-right mt-8 pr-[5%]">
        <p className="text-sm text-gray-500">
          Drag to explore more images • Click on any image to view in full screen
        </p>
      </div>
      
      {isOpen && (
        <Lightbox
          images={images}
          currentIndex={photoIndex}
          onClose={() => setIsOpen(false)}
          onPrev={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onNext={() => setPhotoIndex((photoIndex + 1) % images.length)}
          title={title}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </div>
  );
};

interface WorkProps {
  className?: string;
}

const Work = ({ className = "" }: WorkProps) => {
  const galleries = [
    {
      title: "Black Panthers",
      description: "A collection of iconic Black Panthers imagery showcasing the movement's powerful visual legacy.",
      images: [
        "/black-panthers/Black Panthers 1920.jpeg",
        "/black-panthers/Black Panthers 1920 (1).jpeg",
        "/black-panthers/Black Panthers 1920 (2).jpeg",
        "/black-panthers/Black Panthers 1920 (3).jpeg"
      ]
    },
    {
      title: "Playing Cards",
      description: "Custom designed playing cards featuring unique illustrations and artistic elements.",
      images: [
        "/playing-cards/Playing Cards Illustration.JPG",
        "/playing-cards/Playing Card 02.PNG",
        "/playing-cards/Playing Card 03.JPG",
        "/playing-cards/Playing Card Illustration.JPG"
      ]
    }
  ];

  return (
    <section className={`py-16 ${className} text-gray-900`}>
      <div className="w-full overflow-hidden">
        {galleries.map((gallery, index) => (
          <Gallery 
            key={index}
            title={gallery.title}
            description={gallery.description}
            images={gallery.images}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
