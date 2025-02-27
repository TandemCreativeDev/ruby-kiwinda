import { Navbar, ParallaxSection, Work, Hero, About, Footer, Contact } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="font-[family-name:var(--font-geist-sans)]">
        
        {/* Home Section with Hero */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Work Section */}
        <section id="work" className="flex items-center justify-center p-0 bg-gray-50 text-gray-900">
          <div className="w-full">
            <Work />
          </div>
        </section>
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
