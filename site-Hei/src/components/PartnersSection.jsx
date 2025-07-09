import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import heiLogo from '../assets/images/logo-hei.png'; // remplace le chemin selon ton projet

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Fond bleu sur toute la largeur */}
      <div className="w-full bg-[#00194A] text-white">
        {/* Contenu centré */}
        <div className="w-full max-w-[1600px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Colonne 1: Logo + Texte */}
          <div>
            <img src={heiLogo} alt="HEI Logo" className="h-20 mb-6" />
            <p className="mb-4 text-base leading-relaxed">
              Formation habilitée par l’État suivant le système LMD
            </p>
            <p className="text-base leading-relaxed">
              Habilitation MESupRes<br />n°31309/2023
            </p>
          </div>

          {/* Colonne 2: Adresse */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Adresse</h2>
            <p className="text-base">II J 161 R Ambodivoanjo</p>
            <p className="text-base">Ivandry Antananarivo</p>
            <p className="text-base">101, Madagascar</p>
          </div>

          {/* Colonne 3: Navigation */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-yellow-500 font-bold hover:text-yellow-500 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#" className="text-white font-bold hover:text-yellow-500 transition-colors">Actualités</a>
              </li>
              <li>
                <a href="#" className="text-white font-bold hover:text-yellow-500 transition-colors">Bourse d’études</a>
              </li>
              <li>
                <a href="#" className="text-white font-bold hover:text-yellow-500 transition-colors">Inscription</a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Médias sociaux */}
          <div>
            <div className="flex items-center justify-start mb-4">
              <h2 className="text-2xl font-bold">Médias sociaux</h2>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-yellow-500 p-3 rounded-full hover:scale-110 transition-transform">
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a href="#" className="bg-yellow-500 p-3 rounded-full hover:scale-110 transition-transform">
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              <a href="#" className="bg-yellow-500 p-3 rounded-full hover:scale-110 transition-transform">
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-white text-center text-sm text-gray-600 py-4">
        © HEI Madagascar
      </div>
    </footer>
  );
}
