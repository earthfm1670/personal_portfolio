import React from "react";

export function Projects() {
  return (
    <>
      <div
        id="projects"
        className="bg-gray-800 py-20 flex flex-col items-center"
      >
        <h1 className="text-blue-400 text-4xl font-bold mb-10">My Projects</h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:mx-20">
          <a
            href="https://home-service-finalproject.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden w-[300px] h-[450px] shadow-lg hover:shadow-blue-400/50 transition-shadow duration-300 cursor-pointer">
              <img
                src="/image/homeserviceproject6.png"
                className="w-[300px] h-[300px]"
              ></img>
              <div className="bg-gray-900 py-2">
                <h2 className="font-semibold text-blue-300 text-xl m-4 mx-4">
                  Home Service
                </h2>
                <p className="text-gray-400 m-2 mx-4">
                  A web platform connecting users with skilled handymen nearby,
                  making it easy to find help for any task.
                </p>
              </div>
            </div>
          </a>
          {/* hide placeholder project 2 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden w-[300px] h-[450px] hidden">
            <img
              src="/image/landscape-placeholder.svg"
              className="w-[300px] h-[300px]"
            ></img>
            <div className="bg-gray-900 py-2">
              <h2 className="font-semibold text-blue-300 text-xl m-4 mx-4">
                Project 2
              </h2>
              <p className="text-gray-400 m-2 mx-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente
              </p>
            </div>
          </div>
          {/* hide placeholder project 3 */}
          <div className="bg-gray-900 rounded-lg overflow-hidden w-[300px] h-[450px] hidden">
            <img
              src="/image/landscape-placeholder.svg"
              className="w-[300px] h-[300px]"
            ></img>
            <div className="bg-gray-900 py-2">
              <h2 className="font-semibold text-blue-300 text-xl m-4 mx-4">
                Project 3
              </h2>
              <p className="text-gray-400 m-2 mx-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
