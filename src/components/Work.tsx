"use client";

interface WorkProps {
  className?: string;
}

const Work = ({ className = "" }: WorkProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Work
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          This section will be rebuilt with a new design.
        </p>
      </div>
    </section>
  );
};

export default Work;
