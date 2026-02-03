import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'La Escuela', path: '/escuela' },
  { label: 'Cursos', path: '/cursos' },
  { label: 'Profesoras', path: '/profesoras' },
  { label: 'Inscripciones', path: '/inscripciones' },
  { label: 'Contacto', path: '/contacto' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white tracking-widest uppercase border-b-2 border-fuchsia-500 pb-1">
              Royal Dance
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs lg:text-sm uppercase tracking-wider transition-colors duration-300 hover:text-fuchsia-400 ${
                  location.pathname === item.path ? 'text-fuchsia-400 font-bold' : 'text-gray-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-fuchsia-400 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl uppercase tracking-widest ${
                location.pathname === item.path ? 'text-fuchsia-400' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;