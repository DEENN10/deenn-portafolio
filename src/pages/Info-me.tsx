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
        fontFamily: 'Arial, sans-serif', // Fuente moderna y consistente (cambié de iOS-like a Arial para uniformidad)
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
          textAlign: 'center', // Asegura centrado
          fontFamily: 'Arial, sans-serif', // Fuente consistente
          transition: 'color 0.3s ease', // Animación suave
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#0056cc')} // Cambio sutil al hover
        onMouseLeave={(e) => (e.currentTarget.style.color = '#007aff')}
      >
        Un poco más Sobre Mí
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

      {/* Espacio para texto más largo - con estilo mejorado */}
      <p
        style={{
          fontSize: '1.2rem',
          color: '#333', // Gris oscuro para legibilidad
          lineHeight: '1.7',
          maxWidth: '800px', // Limita ancho para legibilidad
          margin: '0 auto', // Centra el párrafo
          padding: '20px',
          textAlign: 'justify', // Centra el texto dentro del párrafo
          fontFamily: 'Arial, sans-serif', // Fuente consistente
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          transition: 'box-shadow 0.3s ease', // Animación sutil
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)')}
      >
         Soy desarrollador Fullstack con enfoque backend y formación en Ingeniería en Sistemas Computacionales. Me gusta usar el código para resolver problemas reales, especialmente aquellos relacionados con procesos manuales, tareas repetitivas y sistemas que pueden hacerse más simples y eficientes.

        Disfruto crear soluciones pensadas para personas no técnicas, donde la tecnología realmente ahorre tiempo y reduzca errores. Por eso, gran parte de mis proyectos están orientados a la automatización, como chatbots de reservas y sistemas de generación automática de documentos.

        Me interesa construir sistemas bien estructurados, claros y fáciles de mantener, priorizando soluciones prácticas sobre la complejidad innecesaria.

        Soy una persona autodidacta, analítica y comunicativa, con facilidad para entender problemas, proponer soluciones y tomar iniciativa cuando el proyecto lo requiere. Actualmente busco oportunidades donde pueda seguir creciendo profesionalmente y aportar valor real desde el inicio.
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