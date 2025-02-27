import React from "react";

interface AboutProps {
  className?: string;
}

const About = ({ className = "" }: AboutProps) => {
  return (
    <div id="about" className={`py-16 bg-gray-50 ${className}`} style={{ scrollMarginTop: '80px', paddingTop: '6rem' }}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Lorem text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
          </div>

          {/* Right side - Blue square */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full bg-blue-500 shadow-lg h-64 sm:h-80 md:h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
