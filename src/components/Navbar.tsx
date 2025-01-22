import React from "react";
import { Link } from "react-scroll";

export function Navbar() {
  return (
    <>
      <div className="fixed w-full bg-gray-900 flex justify-center gap-10 text-xl font-medium p-2 bg-opacity-90 z-10">
        <div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            Home
          </Link>
        </div>
        <div className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            Projects
          </Link>
        </div>
        <div className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            Contacts
          </Link>
        </div>
      </div>
    </>
  );
}
