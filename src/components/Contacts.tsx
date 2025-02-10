import React from "react";
import { Mail, Phone, Github, User } from "lucide-react";

export function Contacts() {
  return (
    <>
      <div
        id="contacts"
        className="bg-gray-900 flex flex-col items-center py-20"
      >
        <div className="text-blue-400 text-4xl font-bold mb-12">
          Contact Information
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
          <div className="bg-gray-800 w-[300px] lg:w-[400px] h-[100px] flex items-center rounded-lg">
            <div className="mx-5">
              <User className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <div className="text-blue-300 text-xl font-semibold">Name</div>
              <div className="text-white">Pumthad Kaewmongkolsri</div>
            </div>
          </div>
          <div>
            <div className="bg-gray-800 w-[300px] lg:w-[400px] h-[100px] flex items-center rounded-lg">
              <div className="mx-5">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <div className="text-blue-300 text-xl font-semibold">Phone</div>
                <div className="text-white">084-874-2244</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
          <div className="bg-gray-800 w-[300px] lg:w-[400px] h-[100px] flex items-center rounded-lg">
            <div className="mx-5">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <div className="text-blue-300 text-xl font-semibold">Email</div>
              <div className="text-white">pumthad1670@gmail.com</div>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/earthfm1670"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <div className="bg-gray-800 w-[300px] lg:w-[400px] h-[100px] flex items-center rounded-lg">
                <div className="mx-5">
                  <Github className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <div className="text-blue-300 text-xl font-semibold">
                    GibHub
                  </div>
                  <div className="text-white hover:text-blue-400 transition-colors duration-300">
                    github.com/earthfm1670
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
