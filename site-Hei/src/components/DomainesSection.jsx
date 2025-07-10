import React from 'react';

import cloudImg from "../assets/images/Cloud-et-cybersecurite_Plan-de-travail-1-600x600.png";
import aiImg from "../assets/images/Intelligence-artificielle_Plan-de-travail-1-600x600.png";
import devImg from "../assets/images/Ingenierie-logicielle_Plan-de-travail-1-1-600x600.png";

const DomainesSection = () => {
  return (
    <section
      className="bg-gray-200 py-16"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Domaines</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :
          </p>
        </div>

        {/* Grille des domaines */}
        <div className="grid grid-cols-3 gap-8">

          {/* Cloud et cybersécurité */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group text-center">
            <img 
              src={cloudImg} 
              alt="Cloud et cybersécurité" 
              className="w-28 h-28 object-contain mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold text-[#DFA408] mb-4">Cloud et cybersécurité</h3>
            <p className="text-gray-600 leading-relaxed">
              Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.
            </p>
          </div>

          {/* Intelligence artificielle */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group text-center">
            <img 
              src={aiImg} 
              alt="Intelligence artificielle" 
              className="w-28 h-28 object-contain mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold text-[#DFA408] mb-4">Intelligence artificielle</h3>
            <p className="text-gray-600 leading-relaxed">
              Le monde de la reconnaissance faciale ou la détection d'obstacles par les voitures semi-autonomes vous fascinent ? Ce n'est pas sorcier, cela s'apprend. Apprenez les bases de l'intelligence artificielle lors de vos cours chez HEI.
            </p>
          </div>

          {/* Ingénierie logicielle */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group text-center">
            <img 
              src={devImg} 
              alt="Ingénierie logicielle" 
              className="w-28 h-28 object-contain mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl font-bold text-[#DFA408] mb-4">Ingénierie logicielle</h3>
            <p className="text-gray-600 leading-relaxed">
              Apprenez les principes de la conception ou le développement de programmes et d'applications web et mobile et explorez le monde fascinant des "codes". À la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DomainesSection;
