import React from "react";
import { Card, Button } from "@/components";

interface ContactProps {
  className?: string;
}

const Contact = ({ className = "" }: ContactProps) => {
  return (
    <div className={`min-h-screen flex items-center justify-center p-8 bg-gray-50 ${className}`}>
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
    </div>
  );
};

export default Contact;
