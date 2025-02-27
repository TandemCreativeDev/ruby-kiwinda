import React from "react";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  return (
    <footer className={`bg-gray-800 text-white py-8 ${className}`}>
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
  );
};

export default Footer;
