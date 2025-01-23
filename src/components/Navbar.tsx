import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed py-4 w-full bg-gray-900 lg:flex justify-center gap-10 text-xl font-medium p-2 bg-opacity-90 z-10 block">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="text-blue-400 text-xl font-bold cursor-pointer lg:hidden">
            Pumthad Kaewmongkolsri
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-400 lg:hidden"
          >
            {isMenuOpen ? <X /> : <Menu className="text-blue-400 w-10 h-8" />}
          </button>
        </div>

        <div
          className={`lg:flex lg:gap-10 ${
            isMenuOpen ? "h-[80px]" : "h-0"
          } overflow-hidden transition-all duration-300 lg:h-auto lg:overflow-visible lg:mt-0`}
        >
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
      </div>
    </>
  );
}
