import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface GalleryProps {
  folderName: string;
  title: string;
}

const Gallery = ({ folderName, title }: GalleryProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  
  useEffect(() => {
    // In a real implementation, you would fetch the image list from an API
    // For now, we'll simulate with placeholder images
    // Using the work-bg.jpg as a placeholder since that's what we have in public
    const simulatedImages = Array.from({ length: 8 }, (_, i) => 
      `/images/work-bg.jpg`
    );
    setImages(simulatedImages);
  }, [folderName]);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-20 px-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 h-60 relative rounded-lg overflow-hidden shadow-lg"
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
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 320px"
                  onError={(e) => {
                    // Fallback for images that might not exist
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/work-bg.jpg'; // Using available image as fallback
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={`${title} - Image ${photoIndex + 1} of ${images.length}`}
          imageCaption={`${title} gallery`}
        />
      )}
    </div>
  );
};

interface WorkProps {
  className?: string;
}

const Work = ({ className = '' }: WorkProps) => {
  const galleries = [
    { folderName: 'black-panthers', title: 'Black Panthers' },
    { folderName: 'playing-cards', title: 'Playing Cards' },
    { folderName: 'karibu', title: 'Karibu' },
    { folderName: 'vumilia', title: 'Vumilia' }
  ];

  return (
    <section className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Work</h2>
        
        {galleries.map((gallery) => (
          <Gallery 
            key={gallery.folderName} 
            folderName={gallery.folderName} 
            title={gallery.title} 
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
