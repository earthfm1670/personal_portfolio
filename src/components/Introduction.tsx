import React from "react";
import { Link } from "react-scroll";

export function Introduction() {
  return (
    <>
      <div
        id="home"
        className="min-h-screen bg-gray-900 flex flex-col items-center justify-center"
      >
        <h1 className="text-blue-400 lg:text-7xl font-bold">
          Pumthad Kaewmongkolsri
        </h1>
        <h2 className="text-gray-300 lg:text-3xl mb-2">Full Stack Developer</h2>
        <p className="text-blue-400 lg:text-lg mb-2">
          "Driven aspiring fullstack developer ready to turn ideas into
          impactful digital solutions and kickstart a meaningful career."
        </p>
        <Link to="projects" smooth={true} duration={500}>
          <div className="my-2 px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            View My Projects
          </div>
        </Link>
      </div>
    </>
  );
}
