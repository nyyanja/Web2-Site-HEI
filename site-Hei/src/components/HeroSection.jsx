import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/src/assets/images/heibanner.webp",
      title: "Haute École d'Informatique",
      content: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.",
      habilitation: "Habilitation MESupRES, suivant l’arrêté n°31309/2023"
    },
    {
      image: "/src/assets/images/hei-banner-2.webp",
      title: "Haute École d'Informatique",
      content: "« L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela. « L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C’est notre mission.",
      habilitation: "Habilitation MESupRES, suivant l’arrêté n°31309/2023"
    },
    {
      image: "/src/assets/images/hei-banner-3.webp",
      title: "Haute École d'Informatique",
      content: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
      habilitation: "Habilitation MESupRES, suivant l’arrêté n°31309/2023"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-screen overflow-hidden pt-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 text-white text-center px-4 max-w-5xl mx-auto h-full flex flex-col justify-center pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight transition-all duration-500 ">
          {slides[currentSlide].title}
        </h1>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl leading-relaxed transition-all duration-500 mt-2 mb-20">
            {slides[currentSlide].content}
          </p>

          {/* ✅ BOUTONS placés ici, avant la mission */}
          <div className="flex flex-col md:flex-row justify-center gap-10 items-center mb-20">
            <button className="bg-white text-blue-900 font-bold px-8 py-4 rounded shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 min-w-[200px]">
              Inscrivez-vous ici
            </button>
            <button className="bg-yellow-500 text-white font-bold px-8 py-4 rounded shadow-lg hover:bg-yellow-600 transition-all transform hover:scale-105 min-w-[200px]">
              Emploi du temps
            </button>
            <button className="bg-blue-900 text-white font-bold px-8 py-4 rounded shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105 min-w-[200px]">
              Programme pédagogique
            </button>
          </div>

          {/* ✅ habilitaion déplacée en bas */}
          <p className="text-lg md:text-xl font-semibold transition-all duration-500">
            {slides[currentSlide].habilitation}
          </p>
        </div>
      </div>

      {/* Flèches de navigation */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white text-4xl cursor-pointer hover:text-yellow-400 transition-colors z-20 bg-black/20 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/40"
        aria-label="Slide précédent"
      >
        &#10094;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white text-4xl cursor-pointer hover:text-yellow-400 transition-colors z-20 bg-black/20 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/40"
        aria-label="Slide suivant"
      >
        &#10095;
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSection;
