import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importa las imágenes
import imgChatbot1 from '../assets/img-chatbot/inicio-chat.png';
import imgChatbot2 from '../assets/img-chatbot/confirmacion-chat.png';
import imgChatbot3 from '../assets/img-chatbot/CitaAgendadaCalendar.jpeg';
import imgChatbot4 from '../assets/img-chatbot/flujoconver-chat.png';
import imgChatbot5 from '../assets/img-chatbot/tipofecha-chat.png';
import imgChatbot6 from '../assets/img-chatbot/flujofunc-chat.png';

const ProjectChatbot: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de elementos: type, src, text
  const galleryItems = [
    { type: 'image', src: imgChatbot1, text: 'Inicio del Chat: Interfaz principal donde el usuario inicia la conversación.' },
    { type: 'image', src: imgChatbot2, text: 'Confirmación: Pantalla que confirma la reserva exitosamente.' },
    { type: 'image', src: imgChatbot3, text: 'Cita en Calendar: Vista de la cita agendada en Google Calendar.' },
    { type: 'image', src: imgChatbot4, text: 'Flujo de Conversación: Diálogo natural con el bot para reservas.' },
    { type: 'image', src: imgChatbot5, text: 'Selección de Fecha: Opciones para elegir fecha y hora.' },
    { type: 'image', src: imgChatbot6, text: 'Funcionalidades del Chatbot: Resumen de comandos disponibles.' },
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
        <h2 style={{ color: '#007aff', fontSize: '2.5rem', marginBottom: '20px' }}>Asistente de Reservas (Chatbot)</h2>
        <p style={{ color: '#333', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
          Este proyecto automatiza reservas en barberías integrando un chatbot con WhatsApp y Google Calendar. Incluye manejo de conversaciones naturales, confirmaciones y cancelaciones. Tecnologías: React, Node.js, Dialogflow.
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
            href="https://github.com/DEENN10/chatbot-barberia"
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

export default ProjectChatbot;