import React from "react";
import { Link } from "react-scroll";

export function Introduction() {
  return (
    <>
      <div
        id="home"
        className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-10"
      >
        <h1 className="text-blue-400 text-2xl lg:text-7xl font-bold mb-4">
          Pumthad Kaewmongkolsri
        </h1>
        <h2 className="text-gray-300 text-xl lg:text-3xl mb-2">
          Full Stack Developer
        </h2>
        <p className="text-blue-400 text-lg lg:text-lg lg:mb-2 mb-4 hidden lg:block">
          &quot;Driven aspiring fullstack developer ready to turn ideas into
          impactful digital solutions and kickstart a meaningful career.&quot;
        </p>
        <p className="text-blue-400 text-lg lg:text-lg lg:mb-2 mb-4 block lg:hidden">
          &quot;Aspiring fullstack developer ready to build impactful digital
          solutions.&quot;
        </p>
        <Link to="projects" smooth={true} duration={500}>
          <button className="my-2 px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            View My Resume
          </button>
        </Link>
      </div>
    </>
  );
}
