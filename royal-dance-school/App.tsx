import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import School from './pages/School';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Inscriptions from './pages/Inscriptions';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans antialiased text-slate-900 bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/escuela" element={<School />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/profesoras" element={<Teachers />} />
            <Route path="/inscripciones" element={<Inscriptions />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;