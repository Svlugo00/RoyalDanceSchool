import React from 'react';
import { motion } from 'framer-motion';

const School: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.royalacademyofdance.org/wp-content/uploads/2019/07/RAD-Logo-White.png')] bg-center bg-no-repeat bg-contain"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mb-4"
          >
            Nuestra Escuela
          </motion.h1>
          <p className="text-xl text-gray-300 font-light">Tradición, Excelencia y Pasión desde 2007</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* RAD Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-slate-900 mb-6 border-l-4 border-fuchsia-600 pl-4">
              Royal Academy of Dance (RAD)
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              La Royal Academy of Dance es una de las organizaciones de educación y capacitación en danza más influyentes del mundo. 
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed font-semibold">
              Royal Dance School tiene el orgullo de ser la única escuela en Argentina que ofrece títulos internacionales avalados por esta prestigiosa institución.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Esto significa que nuestros alumnos reciben una formación estandarizada a nivel mundial, permitiéndoles rendir exámenes que son reconocidos en más de 80 países.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <div className="absolute -inset-4 bg-fuchsia-100 rounded-lg transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1544297136-17b5f25ba013?q=80&w=800&auto=format&fit=crop" 
              alt="Ballerina tying shoes" 
              className="relative rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* History Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-slate-900 mb-8">Nuestra Historia</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Comenzamos nuestras funciones en el año 2007 en la hermosa ciudad de San Carlos de Bariloche. Desde entonces, hemos crecido no solo en número de alumnos, sino en calidad educativa y reconocimiento.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              A lo largo de estos años, hemos formado bailarines que han destacado en escenarios nacionales e internacionales, manteniendo siempre un ambiente cálido y familiar, donde cada alumno es valorado y guiado en su proceso artístico.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default School;