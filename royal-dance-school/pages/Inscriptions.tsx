import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, CreditCard, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Inscriptions: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595180665971-48e24483a918?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Inscripciones Ciclo 2026
          </motion.h1>
          <p className="text-xl text-fuchsia-200 font-light">
            Información de aranceles y proceso de matriculación
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Info Banner */}
        <div className="bg-fuchsia-50 border-l-4 border-fuchsia-600 p-6 mb-12 rounded-r-lg shadow-sm flex items-start space-x-4">
          <AlertCircle className="text-fuchsia-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-fuchsia-900 font-bold text-lg mb-1">Apertura de Inscripciones</h3>
            <p className="text-fuchsia-800">
              Las inscripciones para el ciclo lectivo 2026 darán comienzo presencialmente el <strong>1 de Febrero de 2026</strong>. 
              Se recomienda reservar entrevista con antelación debido a los cupos limitados por nivel.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Pricing Section */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Matricula */}
            <section>
              <h2 className="text-3xl font-serif text-slate-800 mb-6 flex items-center">
                <Calendar className="mr-3 text-fuchsia-600" /> Matrícula Anual
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                  <span className="text-lg font-medium text-slate-700">Inscripción General</span>
                  <span className="text-2xl font-bold text-slate-900">$45.000</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                  <span className="text-lg font-medium text-slate-700">Alumnas Regulares (hasta Dic 2025)</span>
                  <span className="text-2xl font-bold text-fuchsia-600">$35.000</span>
                </div>
                <p className="text-sm text-slate-500 italic mt-2">
                  * La matrícula se abona por única vez al año para reservar la vacante. Valor sujeto a actualización.
                </p>
              </div>
            </section>

            {/* Monthly Fees */}
            <section>
              <h2 className="text-3xl font-serif text-slate-800 mb-6 flex items-center">
                <CreditCard className="mr-3 text-fuchsia-600" /> Aranceles Mensuales (Estimado 2026)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Basic Plan */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:border-fuchsia-300 transition-colors">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Plan Inicial</h3>
                  <p className="text-slate-500 text-sm mb-6">Ideal para Pre-Primary y Primary</p>
                  <div className="text-4xl font-serif font-bold text-slate-900 mb-6">
                    $38.000<span className="text-base font-sans font-normal text-slate-500">/mes</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-600">
                      <Check size={18} className="text-green-500 mr-2" /> 2 Clases semanales
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check size={18} className="text-green-500 mr-2" /> Ballet Clásico
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check size={18} className="text-green-500 mr-2" /> Seguro incluido
                    </li>
                  </ul>
                </div>

                {/* Formative Plan */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-fuchsia-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                    Más Popular
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Plan Formativo</h3>
                  <p className="text-slate-500 text-sm mb-6">Grados 1 a 5 RAD</p>
                  <div className="text-4xl font-serif font-bold text-slate-900 mb-6">
                    $55.000<span className="text-base font-sans font-normal text-slate-500">/mes</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-600">
                      <Check size={18} className="text-green-500 mr-2" /> 3 a 4 Clases semanales
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check size={18} className="text-green-500 mr-2" /> Ballet + PBT
                    </li>
                    <li className="flex items-center text-slate-600">
                      <Check size={18} className="text-green-500 mr-2" /> Preparación Exámenes
                    </li>
                  </ul>
                </div>

                {/* Intensive Plan */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:border-fuchsia-300 transition-colors md:col-span-2">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Plan Vocacional / Intensivo</h3>
                      <p className="text-slate-500 text-sm">Intermediate Foundation en adelante</p>
                    </div>
                    <div className="text-4xl font-serif font-bold text-slate-900 mt-4 md:mt-0">
                      $75.000<span className="text-base font-sans font-normal text-slate-500">/mes</span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-center text-slate-600">
                        <Check size={18} className="text-green-500 mr-2" /> Clases ilimitadas
                      </li>
                      <li className="flex items-center text-slate-600">
                        <Check size={18} className="text-green-500 mr-2" /> Todas las disciplinas
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center text-slate-600">
                        <Check size={18} className="text-green-500 mr-2" /> Coaching para concursos
                      </li>
                      <li className="flex items-center text-slate-600">
                        <Check size={18} className="text-green-500 mr-2" /> Acceso prioritario a Masterclasses
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-serif font-bold mb-6">Información Importante</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="border-b border-slate-700 pb-3">
                  <strong className="block text-white mb-1">Descuento Familiar</strong>
                  10% de descuento para hermanas/os sobre la cuota de menor valor.
                </li>
                <li className="border-b border-slate-700 pb-3">
                  <strong className="block text-white mb-1">Exámenes Internacionales</strong>
                  Las tasas de examen de la Royal Academy of Dance se abonan en Libras Esterlinas o su equivalente en dólares al momento de la inscripción al examen.
                </li>
                <li className="pb-3">
                  <strong className="block text-white mb-1">Uniformes</strong>
                  El uniforme reglamentario es obligatorio para todas las clases y exámenes. Se adquiere en proveedores autorizados.
                </li>
              </ul>
            </div>

            <div className="bg-fuchsia-100 p-8 rounded-xl text-center">
              <h3 className="text-xl font-serif font-bold text-fuchsia-900 mb-4">¿Tienes dudas?</h3>
              <p className="text-fuchsia-800 mb-6 text-sm">
                Escríbenos para consultar sobre el nivel adecuado para tu edad y experiencia previa.
              </p>
              <Link 
                to="/contacto" 
                className="inline-block w-full py-3 bg-fuchsia-600 text-white rounded-lg font-bold hover:bg-fuchsia-700 transition-colors shadow-md"
              >
                Contactar Ahora
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Inscriptions;