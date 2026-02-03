import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Heart, Star, CalendarDays } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1920&auto=format&fit=crop"
            alt="Ballerina performing"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-fuchsia-400 text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-4"
          >
            Est. 2007 • Bariloche
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-6 leading-tight"
          >
            Royal Dance <br /> School
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-200 text-lg md:text-xl font-light italic mb-10"
          >
            "La danza es el lenguaje oculto del alma."
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.8 }}
          >
            <Link 
              to="/cursos" 
              className="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
            >
              Descubre nuestras clases
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-serif text-slate-800 mb-6">Nuestra Esencia</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Somos la única escuela en Argentina parte de la <span className="font-semibold text-fuchsia-700">Royal Academy of Dance</span> que ofrece títulos internacionales, formando bailarines con excelencia académica y pasión artística en el corazón de la Patagonia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center p-8 bg-slate-50 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-fuchsia-100 text-fuchsia-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-4">Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Brindar una educación de danza de clase mundial, fomentando la técnica precisa y la expresión artística individual de cada alumno.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center p-8 bg-slate-50 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-fuchsia-100 text-fuchsia-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-4">Visión</h3>
              <p className="text-slate-600 leading-relaxed">
                Ser el referente de excelencia en la danza clásica y contemporánea en Argentina, abriendo puertas internacionales para nuestros estudiantes.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center p-8 bg-slate-50 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-fuchsia-100 text-fuchsia-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-4">Valores</h3>
              <p className="text-slate-600 leading-relaxed">
                Disciplina, respeto, pasión y perseverancia. Creemos en el poder transformador de la danza para moldear el carácter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES PARALLAX */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img 
            src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920&auto=format&fit=crop" 
            alt="Background texture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif mb-2">Nuestros Programas</h2>
              <div className="h-1 w-20 bg-fuchsia-500"></div>
            </div>
            <Link to="/cursos" className="hidden md:flex items-center text-fuchsia-400 hover:text-white transition-colors mt-4 md:mt-0">
              Ver todos los cursos <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative h-96 overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1596288894986-c41934c9c10d?q=80&w=600&auto=format&fit=crop" 
                alt="Ballet Classico"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">Ballet Clásico</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">La base de toda danza. Técnica RAD con opción a exámenes internacionales.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative h-96 overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=600&auto=format&fit=crop" 
                alt="Contemporary Dance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">Contemporáneo</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">Expresión libre y técnica moderna para bailarines versátiles.</p>
                </div>
              </div>
            </div>

             {/* Card 3 */}
             <div className="group relative h-96 overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=600&auto=format&fit=crop" 
                alt="PBT"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">PBT Technique</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">Progressing Ballet Technique para fortalecimiento y memoria muscular.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/cursos" className="inline-flex items-center text-fuchsia-400 font-bold uppercase tracking-wider">
              Ver catálogo completo <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* TEACHERS TEASER */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1582650080644-8df6343513b6?q=80&w=800&auto=format&fit=crop" 
                  alt="Teacher guiding student" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-4xl font-serif text-slate-800 mb-6">Excelencia Docente</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Contamos con un destacado grupo de profesores certificados, dedicados a nutrir el talento de cada estudiante. Nuestra metodología ha permitido a nuestras alumnas competir y ganar en prestigiosos concursos internacionales.
                </p>
                <Link 
                  to="/profesoras" 
                  className="inline-block px-6 py-3 bg-slate-900 text-white rounded hover:bg-fuchsia-700 transition-colors uppercase tracking-wider text-sm font-bold"
                >
                  Conoce al Equipo
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* ANNOUNCEMENT 2026 */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.royalacademyofdance.org/wp-content/themes/rad/assets/img/pattern-1.svg')] opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-fuchsia-600 rounded-full mb-6">
            <CalendarDays size={24} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Ciclo Lectivo 2026 <br/>
            <span className="text-fuchsia-400">Inscripciones Abiertas</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Prepárate para un nuevo año de desafíos y crecimiento artístico. 
            Las inscripciones comienzan en <strong>Febrero 2026</strong>. 
            Consulta los valores actualizados y requisitos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/inscripciones" 
              className="inline-block px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-fuchsia-50 transition-colors shadow-lg uppercase tracking-wide"
            >
              Ver Aranceles 2026
            </Link>
            <Link 
              to="/contacto" 
              className="inline-block px-8 py-4 border border-fuchsia-400 text-fuchsia-400 font-bold rounded-lg hover:bg-fuchsia-400/10 transition-colors uppercase tracking-wide"
            >
              Reservar Entrevista
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;