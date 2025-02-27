import { Parallax } from 'react-parallax';
import Image from 'next/image';

interface HeroProps {
  className?: string;
}

export const Hero = ({ className = '' }: HeroProps) => {
  return (
    <div className={`relative w-full h-screen ${className}`}>
      <Parallax
        bgImage="/hero.gif"
        strength={500}
        bgImageStyle={{ objectFit: 'cover' }}
        className="h-screen"
      >
        <div className="flex items-center justify-center h-screen">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/logo-white.png"
              alt="Logo"
              priority
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
