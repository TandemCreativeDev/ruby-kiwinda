import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
  folderName: string;
  title: string;
}

const Gallery = ({ folderName, title }: GalleryProps) => {
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    // In a real implementation, you would fetch the image list from an API
    // For now, we'll simulate with placeholder images
    const simulatedImages = Array.from({ length: 8 }, (_, i) => 
      `/work/${folderName}/image-${i + 1}.jpg`
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
              <Image
                src={src}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 320px"
                onError={(e) => {
                  // Fallback for images that might not exist
                  const target = e.target as HTMLImageElement;
                  target.src = '/work/placeholder.jpg';
                }}
              />
            </div>
          ))}
        </div>
      </div>
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
