import Image from "next/image";
import { Card } from "./Card";

interface AboutProps {
  className?: string;
}

const About = ({ className = "" }: AboutProps) => {
  return (
    <section className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4">
            <Card className="p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Our Story
              </h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh
                porttitor. Ut in nulla enim.
              </p>
              <p className="text-gray-700">
                Phasellus molestie magna non est bibendum non venenatis nisl
                tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
                iaculis porttitor posuere. Praesent id metus massa, ut blandit
                odio.
              </p>
            </Card>

            <Card className="p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor. Cras
                mattis consectetur purus sit amet fermentum. Aenean lacinia
                bibendum nulla sed consectetur. Curabitur blandit tempus
                porttitor.
              </p>
            </Card>
          </div>

          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/about-image.jpg"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
