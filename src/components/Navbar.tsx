import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaCode, FaTools, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Ajusta si es necesario
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      } else {
    console.log('Elemento NO encontrado para ID:', id); // Agrega esto
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm" style={{ borderRadius: '10px', margin: '10px' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }} style={{ fontWeight: 'bold', color: '#555' }}>DEENN DEV.</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }}><FaHome /> Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#techstack" onClick={(e) => { e.preventDefault(); handleScroll('techstack'); }}><FaTools /> Tech Stack</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyecto" onClick={(e) => { e.preventDefault(); handleScroll('proyectos'); }}><FaCode /> Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto" onClick={(e) => { e.preventDefault(); handleScroll('contacto'); }}><FaEnvelope /> Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;