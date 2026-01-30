import React from 'react';
import { Link } from 'react-router-dom';
import perfilCv from '../assets/perfil-cv.jpg';  // Ruta a tu imagen de perfil

const AboutMe: React.FC = () => {
  return (
    <section id="inicio" style={{ padding: '20px', textAlign: 'center' }}>
      <img
        src={perfilCv}
        alt="Foto de perfil"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',  // Hace la imagen circular
          objectFit: 'cover',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Sombra suave
          transition: 'transform 0.3s ease',  // Transición para hover
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}  // Efecto de zoom al hover
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
      <h2 style={{
         color: '#007aff',
         fontWeight: 'bold',
         textAlign: 'center',
         fontFamily: 'Arial, sans-serif',
         fontSize: '2rem',
         marginBottom: '20px'
        }}>
          Sobre mí
        </h2>
      <p style={{
        fontSize: '1.1rem',
        color: '#333',
        lineHeight: '1.6',
        textAlign: 'center',
        fontFamily: 'Arial-sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px'
        }}> 
        Soy desarrollador Fullstack con experiencia creando aplicaciones web completas y proyectos enfocados en la automatización de procesos y la optimización del tiempo operativo. He trabajado con tecnologías como React, Node.js, Express, MongoDB y MySQL, CISCO, integrando APIs externas y desarrollando soluciones funcionales y mantenibles.

        Me adapto con facilidad a nuevos entornos y tecnologías, disfruto aprender constantemente y enfrentar retos técnicos que aporten valor real a proyectos y a las personas que los utilizan.
      </p>
      <Link to="/info-me">
        <button
          style={{
            backgroundColor: '#007aff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            marginTop: '20px',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007aff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Más información
        </button>
      </Link>
    </section>
  );
};

export default AboutMe;
