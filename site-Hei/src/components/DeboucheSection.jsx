import React from 'react';
import DebouchesImage from '../assets/images/deboucher.webp'; // Ajustez le nom du fichier

const DebouchesSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-8 items-center">
        {/* Image à droite - flex-row-reverse inverse l'ordre */}
        <div className="md:w-1/2">
          <img 
            src={DebouchesImage} 
            alt="Débouchés en numérique"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Texte à gauche */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">Quelques débouchés</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-10">
            Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
        </p>
        </div>
      </div>
    </section>
  );
};

export default DebouchesSection;