import { Navbar, Card, Button, ParallaxSection, Work, Hero, About, Footer } from "@/components";

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
        <Footer />
      </div>
    </div>
  );
}
