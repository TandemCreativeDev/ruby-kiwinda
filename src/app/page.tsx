import Image from "next/image";
import { Navbar, Card, Button } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-24 font-[family-name:var(--font-geist-sans)]"> {/* Added padding-top to account for fixed navbar */}
        
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Website</h1>
            <p className="text-xl mb-8">A modern Next.js application with smooth scrolling navigation</p>
            
            <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
              <Image
                className="dark:invert mb-8"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
              <Button 
                variant="primary" 
                size="large"
                className="flex items-center gap-2"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="large"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card title="Our Mission">
                <p className="text-gray-700">
                  We strive to create beautiful, functional websites that deliver exceptional user experiences.
                  Our team is dedicated to pushing the boundaries of web development.
                </p>
              </Card>
              <Card title="Our Vision">
                <p className="text-gray-700">
                  To become the leading web development agency known for innovative solutions
                  and cutting-edge technologies that help businesses succeed online.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Work Section */}
        <section id="work" className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Our Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 mb-4 rounded"></div>
                  <h3 className="font-bold text-xl mb-2">Project {item}</h3>
                  <p className="text-gray-700 mb-4">A brief description of this amazing project and the technologies used.</p>
                  <Button variant="secondary" size="small">View Details</Button>
                </Card>
              ))}
            </div>
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
