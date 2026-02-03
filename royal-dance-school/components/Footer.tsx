import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & RAD */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white mb-4">Royal Dance School</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              La única escuela certificada por la Royal Academy of Dance en Argentina que ofrece títulos internacionales desde 2007.
            </p>
            <div className="pt-4">
              <span className="inline-block px-3 py-1 border border-fuchsia-900 bg-fuchsia-900/20 text-fuchsia-300 text-xs rounded-full uppercase tracking-wider">
                RAD Certified
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-fuchsia-500 mt-1 flex-shrink-0" />
              <span>San Carlos de Bariloche,<br />Río Negro, Patagonia Argentina</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-fuchsia-500 flex-shrink-0" />
              <span>+54 9 294 444-XXXX</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-fuchsia-500 flex-shrink-0" />
              <span>info@royaldance.com.ar</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Enlaces</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/cursos" className="hover:text-fuchsia-400 transition-colors">Nuestros Cursos</Link>
              <Link to="/profesoras" className="hover:text-fuchsia-400 transition-colors">Equipo Docente</Link>
              <Link to="/escuela" className="hover:text-fuchsia-400 transition-colors">Sobre la RAD</Link>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Royal Dance School. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;