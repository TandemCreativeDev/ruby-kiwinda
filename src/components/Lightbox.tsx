'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
  setPhotoIndex: (index: number) => void;
}

const Lightbox = ({ 
  images, 
  currentIndex, 
  onClose, 
  onPrev, 
  onNext,
  title,
  setPhotoIndex
}: LightboxProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  
  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next
        onNext();
      } else {
        // Swipe right, go to prev
        onPrev();
      }
    }
  };
  
  // Close on escape key and handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);
  
  // Reset loading state when image changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300"
        aria-label="Close lightbox"
      >
        ×
      </button>
      
      {/* Navigation buttons */}
      <button 
        onClick={onPrev}
        className="absolute left-4 text-white text-4xl z-50 hover:text-gray-300 w-12 h-12 flex items-center justify-center"
        aria-label="Previous image"
      >
        ‹
      </button>
      
      <button 
        onClick={onNext}
        className="absolute right-4 text-white text-4xl z-50 hover:text-gray-300 w-12 h-12 flex items-center justify-center"
        aria-label="Next image"
      >
        ›
      </button>
      
      {/* Image counter */}
      <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
      
      {/* Image container */}
      <div className="relative w-[90vw] h-[70vh] md:w-[80vw] md:h-[70vh]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <Image
          src={images[currentIndex]}
          alt={title ? `${title} - Image ${currentIndex + 1}` : `Image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 80vw"
          priority
          quality={90}
          onLoad={handleImageLoad}
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex overflow-x-auto mt-4 space-x-2 px-4 max-w-full">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`relative w-16 h-16 flex-shrink-0 cursor-pointer transition-all duration-200 ${
              idx === currentIndex ? 'border-2 border-white scale-110' : 'opacity-60 hover:opacity-100'
            }`}
            onClick={() => setPhotoIndex(idx)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ))}
      </div>
      
      {/* Caption */}
      {title && (
        <div className="absolute bottom-20 md:bottom-24 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2">
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
