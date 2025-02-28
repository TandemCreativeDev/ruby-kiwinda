"use client";
import React, { useState } from "react";
import { Button } from "@/components";

interface ContactProps {
  className?: string;
}

const Contact = ({ className = "" }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div
      id="contact"
      className={`pb-16 sm:pb-24 bg-[#f8f5f0] ${className}`}
      style={{ scrollMarginTop: "100px", paddingTop: "8rem" }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left side - Contact information */}
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 sm:mb-8 text-black text-center md:text-left">
              Get in touch
            </h2>
            <p className="text-lg sm:text-xl font-serif leading-relaxed text-gray-800 mb-8 text-center md:text-left">
              We would love to hear from you. Whether you have a question about
              our services, projects, or anything else, our team is ready to
              answer all your questions.
            </p>

            <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
              <div className="group transition-all duration-300 p-4 -mx-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 group-hover:text-black">
                  Email
                </h3>
                <p className="text-gray-700 group-hover:text-black">
                  hello@example.com
                </p>
              </div>

              <div className="group transition-all duration-300 p-4 -mx-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 group-hover:text-black">
                  Phone
                </h3>
                <p className="text-gray-700 group-hover:text-black">
                  +1 (555) 123-4567
                </p>
              </div>

              <div className="group transition-all duration-300 p-4 -mx-4 rounded-lg hover:bg-white hover:shadow-md">
                <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 group-hover:text-black">
                  Address
                </h3>
                <p className="text-gray-700 group-hover:text-black">
                  123 Design Street
                  <br />
                  Creative City, CA 90210
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base sm:text-lg font-serif mb-2 text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border-b-2 border-gray-300 focus:border-black focus:outline-none font-serif text-black transition-all duration-300 hover:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base sm:text-lg font-serif mb-2 text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-white border-b-2 border-gray-300 focus:border-black focus:outline-none font-serif text-black transition-all duration-300 hover:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base sm:text-lg font-serif mb-2 text-gray-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 bg-white border-b-2 border-gray-300 focus:border-black focus:outline-none font-serif text-black resize-none transition-all duration-300 hover:border-gray-500"
                    required
                  ></textarea>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-serif text-base sm:text-lg relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Send Message
                </span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
