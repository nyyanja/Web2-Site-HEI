import React, { useState, useEffect } from "react";

// Import des images
import MiradoImg from "../assets/images/Mirado-600x600.webp";
import JulienImg from "../assets/images/Julien-600x600.webp";
import RyanImg from "../assets/images/ryan-min-600x600.webp";
import JeanAimeImg from "../assets/images/Jean-Aime-Maxa-modified-600x600.jpg";
import ParisonImg from "../assets/images/Parison-e1716502987165.png";
import YannickImg from "../assets/images/yannick.jpg";
import TahinaImg from "../assets/images/Tahina-OK-e1716502943928.png";
import DrLouImg from "../assets/images/dr-Lou.jpg";

function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const teamMembers = [
    {
      name: "Mirado RAFENOMAHENINTSOA",
      role: "Data and Business Intelligence Specialist 5+",
      image: MiradoImg,
    },
    {
      name: "Julien RAJERISON",
      role: "Lead Développeur | Fondateur de l'association Techzara Madagascar",
      image: JulienImg,
    },
    {
      name: "Ryan ANDRIAMAHERY",
      role: "Développeur back end | Cofondateur et Directeur des opérations de HEI",
      image: RyanImg,
    },
    {
      name: "Jean Aimé Maxa",
      role: "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)",
      image: JeanAimeImg,
    },
    {
      name: "Parison Ravalomanda",
      role: "Ingénieur en informatique | Ingénieur logiciel chez Google (Londres – UK)",
      image: ParisonImg,
    },
    {
      name: "Yannick Raharijaona",
      role: "Responsable technique ML chez Rocket Science (Ottawa – Canada)",
      image: YannickImg,
    },
    {
      name: "Dre Tahina Ralitera",
      role: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)",
      image: TahinaImg,
    },
    {
      name: "Dr Lou Maurica",
      role: "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI",
      image: DrLouImg,
    },
  ];

  // Créer un tableau avec des copies pour la boucle infinie
  // On ajoute les 3 derniers au début et les 3 premiers à la fin
  const extendedMembers = [
    ...teamMembers.slice(-3), // Les 3 derniers membres au début
    ...teamMembers,
    ...teamMembers.slice(0, 3), // Les 3 premiers membres à la fin
  ];

  const totalSlides = teamMembers.length;

  // Gérer la transition infinie
  useEffect(() => {
    if (currentSlide < 0) {
      // Si on va en arrière au-delà du premier, aller à la fin sans animation
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(totalSlides - 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentSlide >= totalSlides) {
      // Si on va en avant au-delà du dernier, aller au début sans animation
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(0);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Calculer l'index réel pour l'affichage
  const getDisplayIndex = () => {
    if (currentSlide < 0) return totalSlides + currentSlide;
    if (currentSlide >= totalSlides) return currentSlide - totalSlides;
    return currentSlide;
  };

  // Calculer la position de translation
  const getTranslateX = () => {
    // Position de base + 3 cartes décalées pour compenser les copies du début
    return -((currentSlide + 3) * (100 / 3));
  };

  //ajout personnel
  const getRealIndex = () => getDisplayIndex();

  return (
    <section className="bg-blue-500 text-white py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          L'équipe pédagogique
        </h2>
        <p className="text-white/95 max-w-4xl mx-auto text-lg leading-relaxed">
          Notre équipe pédagogique se compose d'experts nationaux et
          internationaux de l'informatique, de la cybersécurité, de
          l'intelligence artificielle, dont un ingénieur chez Google. Ils sont
          passionnés par l'informatique et sont engagés vers l'excellence. Nous
          sommes conscients que cette équipe est la pierre angulaire de
          l'employabilité de nos étudiants, elle a été soigneusement
          sélectionnée.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 shadow-lg transition-all duration-200"
          aria-label="Précédent"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 shadow-lg transition-all duration-200"
          aria-label="Suivant"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className={`flex ${
              isTransitioning
                ? ""
                : "transition-transform duration-500 ease-in-out"
            }`}
            style={{ transform: `translateX(${getTranslateX()}%)` }}
          >
            {extendedMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: "33.333%" }}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 text-center h-full flex flex-col justify-between min-h-[450px]">
                  {/* Profile Image */}
                  <div className="mb-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg bg-blue-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Si l'image ne se charge pas, afficher un avatar avec les initiales
                          const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="w-full h-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg md:text-xl rounded-full" 
                        style={{ display: 'none' }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-900 font-semibold mb-2 text-sm md:text-base leading-tight">
                      {member.role}
                    </p>

                    {/* Optional Description */}
                    <p className="text-gray-600 text-sm leading-relaxed overflow-hidden text-ellipsis">
                      {member.description || ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
{teamMembers.map((_, index) => (
  <button
    key={index}
    onClick={() => goToSlide(index)}
    className={`w-3 h-3 rounded-full transition-all duration-300 ${
      index === getDisplayIndex()
        ? "bg-white scale-125"
        : "bg-white/50 hover:bg-white/70"
    }`}
    aria-label={`Aller à la diapositive ${index + 1}`}
  />
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-4 text-white/70 text-sm">
        {getRealIndex() + 1} / {totalSlides}
      </div>
    </section>
  );
}

export default TeamSection;