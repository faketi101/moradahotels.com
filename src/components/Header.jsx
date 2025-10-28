import React from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "./staticData";

const Header = ({ isHero, isMenuOpen, setIsMenuOpen, isFixed = true }) => {
  return (
    <header
      className={`${isHero && !isFixed ? "bg-transparent" : "bg-black"} py-4 ${
        isFixed ? "fixed" : "absolute"
      } top-0 left-0 right-0 z-50 transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <img
              className="w-[180px] h-auto"
              src="/images/logo.png"
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm ${
                  isHero ? "text-white" : "text-white"
                } font-lato`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={28} color="white" />
              ) : (
                <Menu
                  onClick={() => window && window.scrollTo(0, 0)}
                  size={28}
                  color="white"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
