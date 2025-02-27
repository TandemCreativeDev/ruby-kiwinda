import Image from "next/image";
import { Navbar, Card, Button, ParallaxSection, Work, Hero } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="font-[family-name:var(--font-geist-sans)]">
        
        {/* Home Section with Hero */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section - Placeholder for future content */}
        <section id="about" className="py-8 bg-gray-50">
          {/* About content will be added later */}
        </section>
        
        {/* Work Section */}
        <section id="work" className="flex items-center justify-center p-0 bg-gray-50 text-gray-900">
          <div className="w-full">
            <Work />
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Contact Us</h2>
            <Card className="max-w-lg mx-auto">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <Button variant="primary" className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-4xl mx-auto text-center">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="flex gap-6 flex-wrap items-center justify-center mt-4">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                  className="invert"
                />
                Learn
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                  className="invert"
                />
                Examples
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                  className="invert"
                />
                Go to nextjs.org →
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
