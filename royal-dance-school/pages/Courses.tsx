import React from 'react';
import { Course } from '../types';
import { motion } from 'framer-motion';

const courses: Course[] = [
  {
    id: '1',
    title: 'Ballet Clásico',
    description: 'La base técnica fundamental. Seguimos el syllabus de la Royal Academy of Dance, ofreciendo preparación para exámenes graduales y vocacionales.',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Jazz',
    description: 'Energía, ritmo y estilo. Clases dinámicas que trabajan la coordinación, flexibilidad y la interpretación musical.',
    image: 'https://images.unsplash.com/photo-1534567119532-6759b6cb46d9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Contemporáneo',
    description: 'Exploración del movimiento, uso del suelo y fluidez. Una danza que conecta con las emociones y busca nuevas formas de expresión.',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Barre á Terre',
    description: 'Técnica de suelo derivada del ballet. Excelente para mejorar la colocación, fuerza abdominal y flexibilidad sin impacto articular.',
    image: 'https://images.unsplash.com/photo-1517478335359-994bd5744eb9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Body Ballet',
    description: 'Entrenamiento físico inspirado en el ballet para adultos. Tonificación, postura y elegancia al alcance de todos.',
    image: 'https://images.unsplash.com/photo-1559599238-308793637427?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'PBT (Progressing Ballet Technique)',
    description: 'Innovador programa de acondicionamiento corporal para entender la activación muscular correcta que requiere la danza clásica.',
    image: 'https://images.unsplash.com/photo-1571216335478-43d9a184852e?q=80&w=800&auto=format&fit=crop'
  }
];

const Courses: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Nuestras Clases</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Ofrecemos una variedad de estilos para todas las edades y niveles, siempre con el sello de calidad de Royal Dance School.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-slate-900 mb-3">{course.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {course.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;