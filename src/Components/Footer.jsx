import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left section: Credits */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="mt-1 text-gray-400">
            Made by <span className="text-white font-semibold">BATMAN</span>
          </p>
        </div>

        {/* Middle section: Quick Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <a href="#terms" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact Us
          </a>
        </div>

        {/* Right section: Social Media (placeholders) */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              🌐
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              🐦
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              📸
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
