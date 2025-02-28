import { Navbar, Work, Hero, About, Footer, Contact } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="font-[family-name:var(--font-geist-sans)] pt-24">
        {/* Home Section with Hero */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Work Section */}
        <Work />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
