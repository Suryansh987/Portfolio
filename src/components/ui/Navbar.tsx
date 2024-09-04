import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-gray-800 text-white">
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
          src='/logo.png' 
          alt="logo"
          width={50}
          height={50}
          />
          <span className="text-sm sm:text-2xl font-semibold ml-3">
            Suryansh Sharma
          </span>
        </div>
        <div className="flex  space-x-4 text-lg sm:text-2xl items-center">
          <div className="hidden text-xl sm:block">
          </div>
          <a
            href="https://www.linkedin.com/in/suryansh987/"
            aria-label="LinkedIn"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Suryansh987"
            aria-label="GitHub"
            target="_blank"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/suryansh_._.sharma?igsh=YjFmYnE4NzlzamFp"
            aria-label="Instagram"
            target="_blank"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
