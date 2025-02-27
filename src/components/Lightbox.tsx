import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
}

const Lightbox = ({ 
  images, 
  currentIndex, 
  onClose, 
  onPrev, 
  onNext,
  title
}: LightboxProps) => {
  // Close on escape key
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

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
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
        className="absolute left-4 text-white text-4xl z-50 hover:text-gray-300"
        aria-label="Previous image"
      >
        ‹
      </button>
      
      <button 
        onClick={onNext}
        className="absolute right-4 text-white text-4xl z-50 hover:text-gray-300"
        aria-label="Next image"
      >
        ›
      </button>
      
      {/* Image container */}
      <div className="relative w-[90vw] h-[80vh]">
        <Image
          src={images[currentIndex]}
          alt={title ? `${title} - Image ${currentIndex + 1}` : `Image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
      
      {/* Caption */}
      {title && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <p>{title} - Image {currentIndex + 1} of {images.length}</p>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
