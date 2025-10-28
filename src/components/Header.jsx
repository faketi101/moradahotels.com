import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const navigation = [
  {
    name: "Our Rooms",
    href: "/our-rooms",
  },
  {
    name: "Restraunt",
    href: "/restaraunt",
  },
  {
    name: "Meetings & Events",
    href: "/meetings-events",
  },
  {
    name: "Book Now",
    href: "/book-now",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = ({ isHero }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`${
        isHero && !scrolled ? "bg-transparent" : "bg-black"
      } py-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}
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
            <Menu size={28} color="white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
