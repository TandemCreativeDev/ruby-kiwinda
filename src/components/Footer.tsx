import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-gray-900 text-white pt-32 pb-24 mt-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="Logo"
                width={120}
                height={40}
                className="mb-6"
              />
            </Link>
            <p className="font-serif text-lg text-gray-300 leading-relaxed">
              Creating meaningful design experiences through thoughtful
              craftsmanship and artistic vision.
            </p>
            <p className="font-serif text-gray-400">
              © {new Date().getFullYear()} Your Studio. All rights reserved.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl mb-6 border-b border-gray-700 pb-4">
              Navigation
            </h3>
            <div className="space-y-6">
              <Link
                href="/"
                className="block font-serif text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="#work"
                className="block font-serif text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                Work
              </Link>
              <Link
                href="#about"
                className="block font-serif text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block font-serif text-lg text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect Column */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl mb-6 border-b border-gray-700 pb-4">
              Connect
            </h3>
            <div className="space-y-6">
              <a
                className="flex items-center gap-3 font-serif text-lg text-gray-300 hover:text-white transition-colors duration-300 group"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                Instagram
              </a>

              <a
                className="flex items-center gap-3 font-serif text-lg text-gray-300 hover:text-white transition-colors duration-300 group"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
                Twitter
              </a>

              <a
                className="flex items-center gap-3 font-serif text-lg text-gray-300 hover:text-white transition-colors duration-300 group"
                href="mailto:hello@example.com"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                hello@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="font-serif text-gray-500">
            Designed with passion and built with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
