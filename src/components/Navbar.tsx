 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa Bootstrap para sus estilos
import { FaHome, FaCode, FaServer, FaEnvelope } from 'react-icons/fa';  // Íconos suaves para las secciones


const Navbar: React.FC = () => {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm" style={{ borderRadius: '10px', margin: '10px' }}>
<div className="container-fluid">
<a className="navbar-brand" href="#inicio" style={{ fontWeight: 'bold', color: '#555' }}>DEENN DEV.</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<a className="nav-link" href="#inicio"><FaHome /> Inicio</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#frontend"><FaCode /> Proyectos</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#contacto"><FaEnvelope /> Contacto</a>
</li>
</ul>
</div>
</div>
</nav>
);
};


export default Navbar;