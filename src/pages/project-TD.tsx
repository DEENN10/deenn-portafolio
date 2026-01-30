import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importa las imágenes
import imgTD1 from '../assets/img-TD/estruc-archivos-TD.png';
import imgTD2 from '../assets/img-TD/estructura-carpetas-TD.png';
import imgTD3 from '../assets/img-TD/login-TD.png';
import imgTD4 from '../assets/img-TD/resultado5-15.png';
import imgTD5 from '../assets/img-TD/resultado15-5.png';

const ProjectTD: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de elementos
  const galleryItems = [
    { type: 'image', src: imgTD3, text: 'Login del Sistema: Pantalla principal donde se muestra los campos principales del Sistema como la fecha, numero de items y un teclado numerico rapido.' },
    { type: 'image', src: imgTD4, text: 'Resultados 5-15: Procesamiento de datos mediante coordenadas en rango bajo del formato.' },
    { type: 'image', src: imgTD5, text: 'Resultados 15-5: Procesamiento de datos mediante coordenadas en rango alto del formato.' },
    { type: 'image', src: imgTD2, text: 'Estructura de Carpetas: Muestra la carpeta "output" creada por defecto dentro del proyecto para los resultados finales (PDF).' },
    { type: 'image', src: imgTD1, text: 'Estructura de Archivos: Organizacion y composicion de los componentes utilizados para la realizacion del sistema.' },
  ];

  const nextItem = () => setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  const prevItem = () => setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  const currentItem = galleryItems[currentIndex];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', padding: '20px' }}>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#007aff', fontSize: '1.5rem' }}>Roberto Gonzalez</h1>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#007aff',
            color: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056cc')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007aff')}
        >
          Volver al Inicio
        </button>
      </nav>

      {/* Contenido principal */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', textAlign: 'center' }}>
        <h2 style={{ color: '#007aff', fontSize: '2.5rem', marginBottom: '20px' }}>Sistema de Toma de Datos</h2>
        <p style={{ color: '#333', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
          Sistema de automatización para captura de datos en formatos PDF. Incluye scripts en Python y dashboard en React. Tecnologías: Python, React, Node.js.
        </p>

        {/* Carrusel */}
        <div style={{ height: '600px', position: 'relative', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            onClick={prevItem}
            style={{
              position: 'absolute',
              left: '10px',
              backgroundColor: '#007aff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            ‹
          </button>
          {currentItem.type === 'image' ? (
            <img
              src={currentItem.src}
              alt={currentItem.text}
              style={{ maxWidth: '80%', maxHeight: '500px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
            />
          ) : (
            <video
              src={currentItem.src}
              controls
              style={{ maxWidth: '80%', maxHeight: '500px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
            />
          )}
          <button
            onClick={nextItem}
            style={{
              position: 'absolute',
              right: '10px',
              backgroundColor: '#007aff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            ›
          </button>
          <p style={{ position: 'absolute', bottom: '10px', color: '#ffffff', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '10px', maxWidth: '600px' }}>
            {currentItem.text}
          </p>
        </div>

        {/* Enlaces */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a
            href="https://github.com/DEENN10/Sistema-Captura-de-Datos"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#333',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#555')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#333')}
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTD;