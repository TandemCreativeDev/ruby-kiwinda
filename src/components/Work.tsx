"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryProps {
  title: string;
  description: string;
  images: string[];
  longDescription?: string;
}

const Gallery = ({ title, description, images, longDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet." }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // For drag scrolling functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set loading to false immediately to show images
    setIsLoading(false);
    
    return () => {};
  }, []);
  
  // Set initial scroll position to ensure first image is visible
  useEffect(() => {
    if (galleryRef.current && !isLoading) {
      // Set a specific initial scroll position to ensure the first image is visible
      galleryRef.current.scrollLeft = 0;
      
      // Prevent the gallery from scrolling back to its default position
      const preventSnapBack = () => {
        if (galleryRef.current) {
          galleryRef.current.scrollLeft = 0;
        }
      };
      
      // Apply the scroll position after a short delay to ensure it sticks
      const timer = setTimeout(preventSnapBack, 100);
      return () => clearTimeout(timer);
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
      <div className="w-full pr-8 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-right pr-[5%]">
          <span className="relative inline-block">
            <span className="relative z-10">{title}</span>
            <span className="absolute bottom-0 left-0 w-full h-[8px] bg-yellow-200 opacity-50 -z-10 transform -rotate-1"></span>
          </span>
        </h2>
        <p className="text-right text-lg mb-12 max-w-3xl ml-auto pr-[5%]">
          {description}
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Left side - Long description */}
        <div className="md:w-1/3 px-8 mb-8 md:mb-0">
          <div className="border-l-4 border-gray-200 pl-6 transition-all duration-300 hover:border-yellow-300">
            <p className="text-gray-700 prose">{longDescription}</p>
          </div>
        </div>
        
        {/* Right side - Gallery */}
        <div className="md:w-2/3 relative w-full overflow-visible">
        {/* Gallery container */}
        <div 
          ref={galleryRef}
          className={`
            w-full overflow-x-auto pb-8 
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
            scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400
          `}
          style={{
            scrollbarWidth: "thin",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex space-x-8 pl-8 pr-8">
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
                  className="flex-shrink-0 w-[40vw] max-w-[450px] min-w-[280px] h-[30vw] max-h-[350px] min-h-[200px] relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group"
                  style={{ scrollSnapAlign: "none" }}
                >
                  <div 
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                    className="cursor-pointer w-full h-full overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`${title} image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={true}
                      onError={(e) => {
                        console.error(`Failed to load image: ${src}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        {/* Right fade effect */}
        <div className="absolute right-0 top-0 bg-gradient-to-l from-white to-transparent w-[15%] h-full pointer-events-none"></div>
        </div>
      </div>
      
      <div className="text-right mt-8 pr-[5%]">
        <p className="text-sm text-gray-500 inline-flex items-center justify-end gap-2 transition-all duration-300 hover:text-gray-800">
          <span className="inline-block transform transition-transform duration-300 hover:translate-x-[-5px]">←</span>
          Drag to explore more images • Click on any image to view in full screen
          <span className="inline-block transform transition-transform duration-300 hover:translate-x-[5px]">→</span>
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
      longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
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
      longDescription: "Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.",
      images: [
        "/playing-cards/Playing Cards Illustration.JPG",
        "/playing-cards/Playing Card 02.PNG",
        "/playing-cards/Playing Card 03.JPG",
        "/playing-cards/Playing Card Illustration.JPG"
      ]
    }
  ];

  return (
    <section className={`py-8 ${className} text-gray-900`}>
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
