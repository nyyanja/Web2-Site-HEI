import React from 'react';

const PartnersSection = () => {
  const partners = [
    [
      { name: 'Nexta', logo: 'src/assets/images/LOGO-NEXTA-1536x862.webp' },
      { name: 'Passerelles Numériques', logo: 'src/assets/images/PN_Logo_baseline_color_ENG.png' },
      { name: 'Yooz', logo: 'src/assets/images/Yooz-2023-Logo-2.webp' },
      { name: 'Etech', logo: 'src/assets/images/logo-etech.png' },
      { name: 'EMIT', logo: 'src/assets/images/logo_emit.png' }
    ],
    [
      { name: 'Numer', logo: 'src/assets/images/Logo-Numer-vf.png' },
      { name: 'Partners', logo: 'src/assets/images/bp-logo-full-1536x497.webp' },
      { name: 'YIF', logo: 'src/assets/images/YIF_LOGO_512x512_BL_on_WH-1.webp' },
      { name: 'Kante', logo: 'src/assets/images/logo-kante-company-1.png' }
    ]
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-4 font-garamond">
          Nos partenaires
        </h1>
        
        {/* Sous-titre */}
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          L'employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique et de la composition de notre corps 
          enseignant mais aussi du soutien et la collaboration des entreprises partenaires
        </p>

        {/* Logos des partenaires */}
        <div className="space-y-12">
          {/* Première rangée */}
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            {partners[0].map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-24 w-40">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Deuxième rangée */}
          <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
            {partners[1].map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-24 w-40">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
