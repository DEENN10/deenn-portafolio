import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importa las imágenes (sin el video)
import imgWeb1 from '../assets/img-web/inicio-pagina.png';
import imgWeb2 from '../assets/img-web/blog-pagina.png';
import imgWeb3 from '../assets/img-web/contacto-pagina.png';
import imgWeb4 from '../assets/img-web/correo-paginaweb.jpeg';
import imgWeb5 from '../assets/img-web/estructura-pagina.png';

// Define la URL del video (sin import)
const demoVideo = '/videos/demo-bascazgui.mp4';

const ProjectWeb: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de elementos: incluye el video con URL pública
  const galleryItems = [
    { type: 'image', src: imgWeb1, text: 'Inicio de página: Página principal con navegación y hero section.' },
    { type: 'image', src: imgWeb2, text: 'Blog: Sección de artículos y noticias de la empresa.' },
    { type: 'image', src: imgWeb3, text: 'Contacto: Formulario para consultas y datos de contacto.' },
    { type: 'image', src: imgWeb4, text: 'Correo: Integración de envío de correos electrónicos.' },
    { type: 'image', src: imgWeb5, text: 'Estructura: Arquitectura general de la página web.' },
    { type: 'video', src: demoVideo, text: 'Demo final: Video completo de la página en funcionamiento (51 segundos).' },
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
        <h2 style={{ color: '#007aff', fontSize: '2.5rem', marginBottom: '20px' }}>Inspecciones-Basczagui S.A de C.V.</h2>
        <p style={{ color: '#333', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
          Página web responsiva para empresa de inspecciones industriales. Incluye formularios de contacto, integración con redes sociales y diseño moderno. Tecnologías: HTML, CSS, JavaScript, React.
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
            href="https://github.com/DEENN10/trabajo1.0"
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

export default ProjectWeb;