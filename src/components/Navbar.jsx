import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "HOME", route: "/" },
    { name: "DESTINATION", route: "/destination/moon" },
    { name: "CREW", route: "/crew/hurley" },
    {
      name: "TECHNOLOGY",
      route: "/technology/launch-vehicle",
    },
  ];

  const toggleMenu = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <header className="w-screen min-w-mob flex justify-between items-center px-8 fixed top-0">
      <a href="/">
        <img
          src="https://res.cloudinary.com/jurbina/image/upload/v1694194536/space-tourism/shared/logo_hnc8bj.svg"
          alt="Logo Space Tourism"
          className="w-8 h-8"
        />
      </a>
      <nav className="h-12 md:w-1/2 flex items-center">
        <Bars3Icon
          className={`"h-8 w-8 text-secondary flex justify-center items-center md:hidden ${
            isOpen && "hidden"
          }`}
          onClick={toggleMenu}
        />
        <div
          className={`h-screen w-60 absolute top-0 right-0 bg-gray-300/20 backdrop-blur ease-in-out duration-200 md:h-full md:w-full md:static md:bg-transparent md:flex md:items-center md:justify-end md:duration-0 md:tw-bg-transparent ${
            !isOpen
              ? "translate-x-full md:translate-x-0 "
              : "md:static"
          }`}
        >
          <XMarkIcon
            className="absolute right-4 top-4 h-8 w-8 text-secondary flex justify-center items-center md:hidden"
            onClick={toggleMenu}
          />
          <ul className="flex flex-col gap-4 pl-6 mt-20 md:flex-row md:mt-0 md:pl-0 md:items-center">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.route} className="nav-text">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
