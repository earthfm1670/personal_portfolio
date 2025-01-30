import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const goToResume = () => {
    router.push("/resume");
  };

  const goToHome = () => {
    if (window.location.pathname === "/") {
      scroller.scrollTo("home", {
        smooth: true,
        duration: 500,
      });
    } else {
      router.push("/").then(() => {
        setTimeout(() => {
          scroller.scrollTo("home", {
            smooth: true,
            duration: 500,
          });
        }, 100);
      });
    }
  };

  const goToProjects = () => {
    if (window.location.pathname === "/") {
      scroller.scrollTo("projects", {
        smooth: true,
        duration: 500,
      });
    } else {
      router.push("/").then(() => {
        setTimeout(() => {
          scroller.scrollTo("projects", {
            smooth: true,
            duration: 500,
          });
        }, 100);
      });
    }
  };

  const goToContacts = () => {
    if (window.location.pathname === "/") {
      scroller.scrollTo("contacts", {
        smooth: true,
        duration: 500,
      });
    } else {
      router.push("/").then(() => {
        setTimeout(() => {
          scroller.scrollTo("contacts", {
            smooth: true,
            duration: 500,
          });
        }, 100);
      });
    }
  };

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
          <div
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
            onClick={goToHome}
          >
            Home
          </div>
          <div
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
            onClick={goToResume}
          >
            Resume
          </div>
          <div
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
            onClick={goToProjects}
          >
            Projects
          </div>
          <div
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
            onClick={goToContacts}
          >
            Contacts
          </div>
        </div>
      </div>
    </>
  );
}
