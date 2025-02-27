import React, { useState } from "react";
import { Button } from "@/components";

interface ContactProps {
  className?: string;
}

const Contact = ({ className = "" }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className={`py-24 bg-[#f8f5f0] ${className}`}>
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left side - Contact information */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-black">Get in touch</h2>
            <p className="text-xl font-serif leading-relaxed text-gray-800 mb-8">
              We'd love to hear from you. Whether you have a question about our services, 
              projects, or anything else, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-6 mt-12">
              <div>
                <h3 className="text-xl font-serif font-medium mb-2">Email</h3>
                <p className="text-gray-700">hello@example.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-medium mb-2">Phone</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-medium mb-2">Address</h3>
                <p className="text-gray-700">123 Design Street<br />Creative City, CA 90210</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-serif mb-2 text-gray-800">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border-b-2 border-gray-300 focus:border-black focus:outline-none font-serif text-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-serif mb-2 text-gray-800">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border-b-2 border-gray-300 focus:border-black focus:outline-none font-serif text-black"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg font-serif mb-2 text-gray-800">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full p-3 bg-white border-b-2 border-gray-300 focus:border-black focus:outline-none font-serif text-black resize-none"
                    required
                  ></textarea>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="mt-8 px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 font-serif text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
