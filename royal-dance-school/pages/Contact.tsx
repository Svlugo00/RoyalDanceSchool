import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-fuchsia-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Contacto</h1>
        <p className="text-fuchsia-200 max-w-2xl mx-auto px-4">
          Estamos en San Carlos de Bariloche. Ven a visitarnos o escríbenos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-slate-800 mb-8">Información</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-100 p-3 rounded-full text-fuchsia-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Ubicación</h3>
                  <p className="text-slate-600">San Carlos de Bariloche<br/>Río Negro, Patagonia Argentina.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-100 p-3 rounded-full text-fuchsia-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Teléfono</h3>
                  <p className="text-slate-600">+54 9 294 444-XXXX</p>
                  <p className="text-slate-500 text-sm">Lunes a Viernes de 14hs a 20hs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-100 p-3 rounded-full text-fuchsia-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                  <p className="text-slate-600">info@royaldance.com.ar</p>
                  <p className="text-slate-600">administracion@royaldance.com.ar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-fuchsia-100 p-3 rounded-full text-fuchsia-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Horarios de Atención</h3>
                  <p className="text-slate-600">Lunes a Viernes: 14:00 - 21:00</p>
                  <p className="text-slate-600">Sábados: 10:00 - 13:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-100"
          >
            <h2 className="text-3xl font-serif text-slate-800 mb-6">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Interés</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all bg-white">
                  <option>Ballet Clásico (RAD)</option>
                  <option>Jazz</option>
                  <option>Contemporáneo</option>
                  <option>PBT</option>
                  <option>Otros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button type="button" className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-fuchsia-800 transition-colors shadow-lg">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;