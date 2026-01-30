import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import LockScreen from './components/LockScreen';
import InfoMe from './pages/Info-me';
import ProjectChatbot from './pages/project-chatbot';  // Importa las nuevas páginas
import ProjectWeb from './pages/project-web';
import ProjectTD from './pages/project-TD';
import Contact from './components/Contact'; 
import TechStack from './components/TechStack';


// Imágenes de portada (usando imports normales)
import imgChatbot from './assets/img-chatbot/inicio-chat.png';
import imgWeb from './assets/img-web/inicio-pagina.png';
import imgTD from './assets/img-TD/login-TD.png';


// Imágenes para galerías (usando imports normales, con placeholder para faltante)
import imgChatbot1 from './assets/img-chatbot/inicio-chat.png';
import imgChatbot2 from './assets/img-chatbot/confirmacion-chat.png';
import imgChatbot3 from './assets/img-chatbot/CitaAgendadaCalendar.jpeg';
import imgChatbot4 from './assets/img-chatbot/flujoconver-chat.png';
import imgChatbot5 from './assets/img-chatbot/tipofecha-chat.png';
import imgChatbot6 from './assets/img-chatbot/flujofunc-chat.png';


import imgWeb1 from './assets/img-web/inicio-pagina.png';
import imgWeb2 from './assets/img-web/contacto-pagina.png';
import imgWeb3 from './assets/img-web/correo-paginaweb.jpeg';
import imgWeb4 from './assets/img-web/blog-pagina.png';
import imgWeb5 from './assets/img-web/estructura-pagina.png';


import imgTD1 from './assets/img-TD/estruc-archivos-TD.png';
import imgTD2 from './assets/img-TD/estructura-carpetas-TD.png';
import imgTD3 from './assets/img-TD/login-TD.png';


import imgTD4 from './assets/img-TD/resultado5-15.png';
import imgTD5 from './assets/img-TD/resultado15-5.png';


function App() {
const [isUnlocked, setIsUnlocked] = React.useState(false);


if (!isUnlocked) {
return <LockScreen onUnlock={() => setIsUnlocked(true)} />;
}


return (
<div className="App">
<Routes>
<Route path="/" element={
<>
<Navbar />
<AboutMe />
<TechStack />


        {/* Sección de Proyectos */}
        <section id="proyecto" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', margin: '20px 0', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}>
          <h2 style={{ textAlign: 'center', color: '#007aff' }}>Mis Proyectos</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <ProjectCard
              image={imgChatbot}
              title="Asistente de Reservas (Chatbot)"
              description="Chatbot para reservar, consultar o cancelar citas usando API de Google Calendar."
              detailedDescription="Descripción detallada: Este proyecto automatiza reservas en barberías integrando un chatbot con WhatsApp y Google Calendar. Incluye manejo de conversaciones naturales, confirmaciones y cancelaciones. Tecnologías: React, Node.js, Dialogflow."
              galleryItems={[
                { image: imgChatbot1, text: 'Inicio del Chat' },
                { image: imgChatbot2, text: 'Confirmación' },
                { image: imgChatbot3, text: 'Cita en Calendar' },
                { image: imgChatbot4, text: 'Flujo de Conversación' },
                { image: imgChatbot5, text: 'Selección de Fecha' },
                { image: imgChatbot6, text: 'Funcionalidades del Chatbot' },
              ]}
              githubLink="https://github.com/DEENN10/chatbot-barberia"
              projectPath="/project-chatbot"  // Nueva prop para navegación
            />

            <ProjectCard
              image={imgWeb}
              title="Inspecciones-Basczagui S.A de C.V."
              description="Página web responsiva para empresa de inspecciones industriales."
              detailedDescription="Descripción detallada: Página web moderna con formularios de contacto, integración con redes sociales y diseño responsivo. Tecnologías: HTML, CSS, JavaScript, React."
              galleryItems={[
                { image: imgWeb1, text: 'Inicio de página' },
                { image: imgWeb2, text: 'Contacto' },
                { image: imgWeb3, text: 'Correo' },
                { image: imgWeb4, text: 'Blog' },
                { image: imgWeb5, text: 'Estructura' },
              ]}
              githubLink="https://github.com/DEENN10/trabajo1.0"
              projectPath="/project-web"  // Nueva prop
            />

            <ProjectCard
              image={imgTD}
              title="Sistema de Toma de Datos"
              description="Automatización para captura de datos en formatos PDF."
              detailedDescription="Descripción detallada: Sistema que automatiza la captura y procesamiento de datos, con scripts en Python y dashboard en React. Tecnologías: Python, React, Node.js."
              galleryItems={[
                { image: imgTD1, text: 'Estructura de Archivos' },
                { image: imgTD2, text: 'Estructura de Carpetas' },
                { image: imgTD3, text: 'Login del Sistema' },
                { image: imgTD4, text: 'Resultados 5-15' },
                { image: imgTD5, text: 'Resultados 15-5' },
              ]}
              githubLink="https://github.com/DEENN10/Sistema-Captura-de-Datos"
              projectPath="/project-TD"  // Nueva prop
            />
          </div>
        </section>

        <Contact />
      </>
    } />
    <Route path="/info-me" element={<InfoMe />} />
    <Route path="/project-chatbot" element={<ProjectChatbot />} />  // Nueva ruta
    <Route path="/project-web" element={<ProjectWeb />} />  // Nueva ruta
    <Route path="/project-TD" element={<ProjectTD />} />  // Nueva ruta
  </Routes>
</div>

  );
}


export default App;