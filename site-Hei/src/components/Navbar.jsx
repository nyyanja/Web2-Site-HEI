import React, { useState } from "react";
import logo from "../assets/images/logo-hei.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="bg-[#00194A] shadow-md w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo HEI" className="h-20 w-auto" />
          </div>

          {/* Menu centré - Desktop */}
          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg">
              <li className="hover:text-yellow-600 cursor-pointer">ACCUEIL</li>
              <li className="hover:text-yellow-600 cursor-pointer">ACTUALITÉS</li>
              <li className="hover:text-yellow-600 cursor-pointer">BOURSES D'ÉTUDES</li>
              <li className="hover:text-yellow-600 cursor-pointer">INSCRIPTION</li>
            </ul>
          </div>

          {/* Bouton INTRANET - Desktop */}
          <div className="hidden md:flex flex-shrink-0">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold hover:text-gray-700 transition">
              INTRANET
            </button>
          </div>

          {/* Menu Hamburger - Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900 border-t border-blue-800">
            <div className="px-4 py-2 space-y-2">
              <ul className="text-white font-semibold text-lg space-y-3">
                <li className="hover:text-yellow-600 cursor-pointer py-2 px-2 rounded hover:bg-blue-800 transition">
                  ACCUEIL
                </li>
                <li className="hover:text-yellow-600 cursor-pointer py-2 px-2 rounded hover:bg-blue-800 transition">
                  ACTUALITÉS
                </li>
                <li className="hover:text-yellow-600 cursor-pointer py-2 px-2 rounded hover:bg-blue-800 transition">
                  BOURSES D'ÉTUDES
                </li>
                <li className="hover:text-yellow-600 cursor-pointer py-2 px-2 rounded hover:bg-blue-800 transition">
                  INSCRIPTION
                </li>
              </ul>
              
              {/* Bouton INTRANET - Mobile */}
              <div className="pt-4 pb-2">
                <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md font-bold hover:text-gray-700 transition">
                  INTRANET
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;