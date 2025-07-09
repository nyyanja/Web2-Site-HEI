import React from 'react';

export default function ProgrammePedagogique() {
  return (
    <div className="bg-white py-16 px-6 max-w-7xl mx-auto">
      
      {/* Image + Description côte à côte, alignement vertical */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        {/* Image Section */}
        <div className="flex-1">
          <img 
            src="/src/assets/images/programme-pedagogique.webp" 
            alt="Étudiants en informatique" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Le programme pédagogique
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Suivant le système LMD, jusqu'au Master, notre formation repose sur un 
              programme pédagogique conçu en adéquation avec les attentes du marché. La 
              formation est sanctionnée par un diplôme de Licence et de Master en 
              Informatique reconnu par le MESup­Res de Madagascar.
            </p>

            {/* Bouton aligné à gauche */}
            <div className="mt-10 text-left">
              <button className="bg-white border-2 border-blue-900 text-blue-900 px-9 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors duration-300">
                Notre Programme
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cartes alignées horizontalement sous toute la section */}
      <div className="flex flex-nowrap justify-between gap-4 overflow-x-auto">
        {/* Carte 1 */}
        <div className="bg-yellow-100 p-8 rounded-lg w-[23%] min-w-[260px] flex flex-col justify-center items-center text-center hover:bg-yellow-200 transition duration-300 cursor-pointer">
          <div className="text-5xl font-bold text-yellow-600 mb-3">25%</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Apprentissage</h3>
            <h3 className="text-xl font-semibold text-gray-900">théoriques</h3>
            <h3 className="text-xl font-semibold text-gray-900">en présentiel</h3>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="bg-yellow-100 p-8 rounded-lg w-[23%] min-w-[260px] flex flex-col justify-center items-center text-center hover:bg-yellow-200 transition duration-300 cursor-pointer">
          <div className="text-5xl font-bold text-yellow-600 mb-3">25%</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Apprentissage sur</h3>
            <h3 className="text-xl font-semibold text-gray-900">supports</h3>
            <h3 className="text-xl font-semibold text-gray-900">numériques</h3>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="bg-yellow-100 p-8 rounded-lg w-[23%] min-w-[260px] flex flex-col justify-center items-center text-center hover:bg-yellow-200 transition duration-300 cursor-pointer">
          <div className="text-5xl font-bold text-yellow-600 mb-3">25%</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Travaux</h3>
            <h3 className="text-xl font-semibold text-gray-900">individuels</h3>
            <h3 className="text-xl font-semibold text-gray-900">de l'étudiant</h3>
          </div>
        </div>

        {/* Carte 4 */}
        <div className="bg-yellow-100 p-8 rounded-lg w-[23%] min-w-[260px] flex flex-col justify-center items-center text-center hover:bg-yellow-200 transition duration-300 cursor-pointer">
          <div className="text-5xl font-bold text-yellow-600 mb-3">25%</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Apprentissage</h3>
            <h3 className="text-xl font-semibold text-gray-900">en entreprise</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
