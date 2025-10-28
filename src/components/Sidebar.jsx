import React from "react";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
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

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-black z-40 transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="pt-32 px-8">
        <nav className="flex flex-col space-y-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-2xl font-lato hover:text-gray-300 transition-colors duration-200 border-b border-gray-700 pb-4"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
