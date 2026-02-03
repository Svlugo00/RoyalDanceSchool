import React from 'react';
import { Teacher } from '../types';
import { motion } from 'framer-motion';

const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Marta Rodriguez',
    role: 'Directora & Ballet Clásico RAD',
    bio: 'Fundadora de Royal Dance School. Registered Teacher de la RAD con más de 20 años de experiencia formando bailarines profesionales.',
    image: 'https://images.unsplash.com/photo-1582234033100-84c1f930263f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Lic. Sofia Martinez',
    role: 'Danza Jazz',
    bio: 'Coreógrafa premiada en certámenes nacionales. Sus clases de Jazz fusionan la técnica clásica con la energía del teatro musical.',
    image: 'https://images.unsplash.com/photo-1534009502677-4e5080ef80a3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Prof. Clara Mendez',
    role: 'Danza Contemporánea',
    bio: 'Bailarina de la compañía de danza local. Especialista en técnicas Release y Flying Low, fomentando la creatividad del alumno.',
    image: 'https://images.unsplash.com/photo-1502519144081-acca141118b4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Prof. Elena Ruiz',
    role: 'Barre á Terre',
    bio: 'Ex solista del Teatro Colón. Su clase de Barre á Terre es fundamental para trabajar la colocación y la prevención de lesiones.',
    image: 'https://images.unsplash.com/photo-1550026593-f38a6efbc832?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Prof. Valentina Soto',
    role: 'Body Ballet',
    bio: 'Certificada en fitness y ballet. Sus clases de Body Ballet son ideales para adultos que buscan tonificar con elegancia.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Prof. Ana García',
    role: 'Progressing Ballet Technique (PBT)',
    bio: 'Especialista certificada en PBT. Enfocada en la memoria muscular y el fortalecimiento específico para la danza clásica.',
    image: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf3d?q=80&w=600&auto=format&fit=crop'
  }
];

const Teachers: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Nuestro Equipo</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          Un grupo destacado de profesionales apasionados por la enseñanza y el arte.
          Cada disciplina es dictada por una especialista en la materia.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-fuchsia-200 shadow-xl relative">
                 {/* Overlay effect on hover */}
                 <div className="absolute inset-0 bg-fuchsia-900/0 group-hover:bg-fuchsia-900/20 transition-colors duration-300 z-10"></div>
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-1">{teacher.name}</h3>
              <p className="text-fuchsia-600 font-bold text-sm uppercase tracking-wide mb-4 h-5">{teacher.role}</p>
              <p className="text-slate-600 leading-relaxed text-sm max-w-xs">
                {teacher.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;