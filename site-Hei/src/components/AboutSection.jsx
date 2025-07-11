import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faGraduationCap, faMedal } from '@fortawesome/free-solid-svg-icons';

function AboutSection() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center pl-7">
        {/* Image */}
        <div>
          <img
            src="src/assets/images/about.webp"
            alt="Étudiants en salle"
            className="rounded-xl shadow-lg object-cover w-full max-w-lg mx-auto h-96 sm:h-[600px]"
          />
        </div>

        {/* Texte */}
        <div className="space-y-8 pr-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">À propos de nous</h2>

          <div className="space-y-5 mb-12">
            <p className="text-2xl font-semibold text-blue-900 flex items-center gap-3">
              <FontAwesomeIcon icon={faGraduationCap} className="text-yellow-500 text-4xl" />
              +3 ans
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et de passionnés de l’informatique de Madagascar et du monde entier.
            </p>
          </div>

          <div className="space-y-5 mb-12">
            <p className="text-2xl font-semibold text-blue-900 flex items-center gap-3">
              <FontAwesomeIcon icon={faUserGroup} className="text-yellow-500 text-4xl" />
              +250 étudiants
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
            </p>
          </div>

          <div className="space-y-5 mb-12">
            <p className="text-2xl font-semibold text-blue-900 flex items-center gap-3">
              <FontAwesomeIcon icon={faMedal} className="text-yellow-500 text-4xl" />
              Notre mission
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
