import React from 'react';

export default function AdmissionSection() {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center p-8"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <div className="w-full">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-8">Admission</h1>
          <p className="text-lg text-white leading-relaxed max-w-4xl mx-auto text-center">
            Ouverte aux bacheliers de toutes les séries, l'admission chez HEI se fait par test de niveau :
            une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D.
          </p>
        </div>

        {/* Processus d'admission */}
        <div className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-500 rounded-lg p-8 mb-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Étape 01 */}
            <div className="flex-1">
              <div className="text-6xl font-bold text-white mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dépôt de dossiers</h3>
              <p className="text-gray-700 leading-relaxed">
                pour les bacheliers de toutes séries sans limite d'âge
              </p>
            </div>

            {/* Flèche 1 */}
            <div className="mx-8">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Étape 02 */}
            <div className="flex-1">
              <div className="text-6xl font-bold text-white mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Test de niveau</h3>
              <p className="text-gray-700 leading-relaxed">
                composé d'une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D
              </p>
            </div>

            {/* Flèche 2 */}
            <div className="mx-8">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Étape 03 */}
            <div className="flex-1">
              <div className="text-6xl font-bold text-white mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inscription définitive</h3>
              <p className="text-gray-700 leading-relaxed">(si test réussi)</p>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 hover:border-blue-900 transition-all duration-300 transform hover:scale-105">
            Inscrivez-vous Ici
          </button>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
            Résultat concours
          </button>
        </div>
      </div>
    </div>
  );
}