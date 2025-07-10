import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import heiLogo from '../assets/images/logo-hei.png'; // adapte selon ton dossier

export default function Footer() {
  return (
    <footer className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Zone bleue pleine largeur */}
      <div className="w-full bg-[#00194A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1 - Logo + Texte */}
          <div className="text-center lg:text-left">
            <img src={heiLogo} alt="HEI Logo" className="h-24 mx-auto lg:mx-0 mb-6" />
            <p className="text-base mb-2">
              Formation habilitée par l'État suivant le système LMD
            </p>
            <p className="text-base">
              Habilitation MESupRes<br />n°31309/2023
            </p>
          </div>
          
          {/* Colonne 2 - Adresse */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Adresse</h2>
            <p className="text-base">II J 161 R Ambodivoanjo</p>
            <p className="text-base">Ivandry Antananarivo</p>
            <p className="text-base">101, Madagascar</p>
          </div>
          
          {/* Colonne 3 - Navigation */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-yellow-500 font-bold hover:text-yellow-400 transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-bold hover:text-yellow-400 transition-colors duration-200">
                  Actualités
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-bold hover:text-yellow-400 transition-colors duration-200">
                  Bourse d'études
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-bold hover:text-yellow-400 transition-colors duration-200">
                  Inscription
                </a>
              </li>
            </ul>
          </div>
          
          {/* Colonne 4 - Médias sociaux */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Médias sociaux</h2>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all duration-200">
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all duration-200">
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              <a href="#" className="bg-yellow-500 p-3 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all duration-200">
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bas de page */}
      <div className="bg-white text-center text-sm text-gray-600 py-4 w-full">
        © HEI Madagascar
      </div>
    </footer>
  );
}