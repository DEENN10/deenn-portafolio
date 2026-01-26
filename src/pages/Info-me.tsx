import React from 'react';
import perfilCv from '../assets/perfil-cv.jpg';  // Ruta a tu imagen de perfil
import { Link } from 'react-router-dom';

const InfoMe: React.FC = () => {
  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)', // Fondo sutilmente degradado para profundidad
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', // Tipografía iOS-like
        borderRadius: '20px', // Bordes redondeados en el contenedor principal
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)', // Sombra suave
        margin: '0 auto',
        maxWidth: '1000px', // Limita el ancho para centrar mejor
      }}
    >
      <h1
        style={{
          color: '#007aff', // Azul iOS
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '300', // Ligero, como en iOS
          transition: 'color 0.3s ease', // Animación suave
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#0056cc')} // Cambio sutil al hover
        onMouseLeave={(e) => (e.currentTarget.style.color = '#007aff')}
      >
        Más Información Sobre Mí
      </h1>

      {/* Espacio para la imagen - estilo card iOS */}
      <div
        style={{
          display: 'inline-block',
          padding: '10px',
          backgroundColor: '#ffffff',
          borderRadius: '20px', // Más redondeado
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Animación al hover
          marginBottom: '30px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
      >
        <img
          src={perfilCv} // Puedes cambiar esto por una imagen específica si tienes una
          alt="Imagen representativa"
          style={{
            width: '300px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '15px', // Bordes redondeados internos
            display: 'block',
          }}
        />
      </div>

      {/* Espacio para texto más largo - con estilo iOS */}
      <p
        style={{
          fontSize: '1.2rem',
          color: '#333', // Gris oscuro para legibilidad
          lineHeight: '1.7',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          transition: 'box-shadow 0.3s ease', // Animación sutil
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)')}
      >
         Soy desarrollador Fullstack con formación en Ingeniería en Sistemas Computacionales y experiencia desarrollando aplicaciones web completas, desde interfaces de usuario claras y responsivas hasta la implementación de lógica backend, integración de APIs y gestión de bases de datos.

         He participado en proyectos comerciales y académicos enfocados en resolver problemas reales, principalmente mediante la automatización de procesos, la reducción de errores y la optimización del tiempo de trabajo. Entre mis proyectos se encuentran un chatbot de reservas para barberías, un sistema de generación automática de PDFs y aplicaciones web fullstack con arquitectura cliente-servidor.

         Trabajo con tecnologías como React, Node.js, Express, MongoDB y MySQL, además de la integración de servicios externos como Google Calendar API y WhatsApp Web API. Me enfoco en escribir código limpio, organizado y mantenible, aplicando buenas prácticas y control de versiones.

         Me caracterizo por mi capacidad de adaptación y aprendizaje continuo; puedo integrarme a nuevos entornos tecnológicos con rapidez y aprender nuevas herramientas según las necesidades del proyecto. Actualmente busco oportunidades como Frontend, Backend o Fullstack Developer, donde pueda seguir creciendo profesionalmente y aportar soluciones prácticas desde el primer día.
      </p>

      <Link to="/">
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
          Salir
        </button>
      </Link>  


      {/* Media query básica para móviles (simulando iPhone) */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            img { width: 250px; height: 150px; }
            p { font-size: 1rem; padding: 15px; }
          }
        `}
      </style>
    </div>
  );
};

export default InfoMe;