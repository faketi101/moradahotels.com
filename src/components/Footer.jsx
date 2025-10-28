import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-gray-800">
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Morada Logo"
              className="w-auto h-22"
            />
            {/* <div>
              <h2 className="text-2xl font-light">Morada</h2>
              <p className="text-sm text-gray-400">Hotels & Spa</p>
            </div> */}
          </div>
        </div>

        {/* Middle: Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-light mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-col items-start justify-start md:justify-start space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-b border-gray-500 focus:outline-none text-sm px-2 py-2 w-60 text-white text-lg"
            />
            <button
              type="submit"
              className="border border-gray-500 px-12 py-2 hover:bg-white hover:text-black transition-all text-sm"
            >
              Sign up
            </button>
          </form>
        </div>

        {/* Right: Address */}
        <div className="text-center md:text-right text-gray-300 text-2xl">
          <p>Morada Hotels & Spa</p>
          <p>16 Babatunde Dabiri Street, Lekki Phase 1</p>
          <p>+234 706 663 4422, +234 906 111 1000</p>
          <p>reservations@westinehotels.ng</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 font-lato">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-white">
           <Facebook />
          </a>
          <a href="#" className="text-white">
           <Twitter />
          </a>
          <a href="#" className="text-white">
           <Instagram />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-4 uppercase tracking-wide">
          <a href="#" className="text-white">
            Privacy
          </a>
          <a href="#" className="text-white">
            Cookie Policy
          </a>
          <a href="#" className="text-white">
            Press & Media
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
          <a href="#" className="text-white">
            Designed by Hyfig
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
