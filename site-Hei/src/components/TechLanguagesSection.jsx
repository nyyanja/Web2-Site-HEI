import React from 'react';

import javaLogo from '../assets/images/java.png';
import pythonLogo from '../assets/images/python.png';
import javascriptLogo from '../assets/images/JS.png';
import cLogo from '../assets/images/C.png';
import typescriptLogo from '../assets/images/TS.png';
import dockerLogo from '../assets/images/docker.png';
import nextjsLogo from '../assets/images/next.png';
import awsLogo from '../assets/images/aws.png';
import reactLogo from '../assets/images/react.png';
import serverlessLogo from '../assets/images/serverless.png';
import openapiLogo from '../assets/images/openapi.png';

const TechLanguagesSection = () => {
  return (
    <section className="w-screen bg-gray-100 py-16 px-4 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8 font-garamond">
          Les technos et langages utilisées
        </h1>

        <p className="text-gray-700 text-lg text-center max-w-5xl mx-auto mb-12 leading-relaxed">
          Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de programmation Java et JavaScript. 
          Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, 
          offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
          {[javaLogo, pythonLogo, javascriptLogo, cLogo, typescriptLogo, dockerLogo, nextjsLogo, awsLogo, serverlessLogo, reactLogo, openapiLogo].map((logo, index) => (
            <div key={index} className="flex justify-center items-center h-24 w-24">
              <img 
                src={logo} 
                alt={`Tech ${index}`} 
                className="h-40 w-40 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechLanguagesSection;
