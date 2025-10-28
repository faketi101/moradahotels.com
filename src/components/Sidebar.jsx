import React from "react";

import { navigation } from "./staticData";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="pt-32 px-8 h-full">
        <nav className="flex flex-col items-start justify-center h-full">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-lato text-black !text-lg hover:text-gray-900 transition-colors duration-200 mb-2"
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
