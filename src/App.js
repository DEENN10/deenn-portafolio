"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Navbar_1 = require("./components/Navbar");
var AboutMe_1 = require("./components/AboutMe");
var ProjectCard_1 = require("./components/ProjectCard");
var LockScreen_1 = require("./components/LockScreen");
var Info_me_1 = require("./pages/Info-me");
var project_chatbot_1 = require("./pages/project-chatbot"); // Importa las nuevas páginas
var project_web_1 = require("./pages/project-web");
var project_TD_1 = require("./pages/project-TD");
var Contact_1 = require("./components/Contact");
var TechStack_1 = require("./components/TechStack");
// Imágenes de portada (usando imports normales)
var inicio_chat_png_1 = require("./assets/img-chatbot/inicio-chat.png");
var inicio_pagina_png_1 = require("./assets/img-web/inicio-pagina.png");
var login_TD_png_1 = require("./assets/img-TD/login-TD.png");
// Imágenes para galerías (usando imports normales, con placeholder para faltante)
var inicio_chat_png_2 = require("./assets/img-chatbot/inicio-chat.png");
var confirmacion_chat_png_1 = require("./assets/img-chatbot/confirmacion-chat.png");
var CitaAgendadaCalendar_jpeg_1 = require("./assets/img-chatbot/CitaAgendadaCalendar.jpeg");
var flujoconver_chat_png_1 = require("./assets/img-chatbot/flujoconver-chat.png");
var tipofecha_chat_png_1 = require("./assets/img-chatbot/tipofecha-chat.png");
var flujofunc_chat_png_1 = require("./assets/img-chatbot/flujofunc-chat.png");
var inicio_pagina_png_2 = require("./assets/img-web/inicio-pagina.png");
var contacto_pagina_png_1 = require("./assets/img-web/contacto-pagina.png");
var correo_paginaweb_jpeg_1 = require("./assets/img-web/correo-paginaweb.jpeg");
var blog_pagina_png_1 = require("./assets/img-web/blog-pagina.png");
var estructura_pagina_png_1 = require("./assets/img-web/estructura-pagina.png");
var estruc_archivos_TD_png_1 = require("./assets/img-TD/estruc-archivos-TD.png");
var estructura_carpetas_TD_png_1 = require("./assets/img-TD/estructura-carpetas-TD.png");
var login_TD_png_2 = require("./assets/img-TD/login-TD.png");
var resultado5_15_png_1 = require("./assets/img-TD/resultado5-15.png");
var resultado15_5_png_1 = require("./assets/img-TD/resultado15-5.png");
function App() {
    var _a = react_1.default.useState(false), isUnlocked = _a[0], setIsUnlocked = _a[1];
    if (!isUnlocked) {
        return (0, jsx_runtime_1.jsx)(LockScreen_1.default, { onUnlock: function () { return setIsUnlocked(true); } });
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(AboutMe_1.default, {}), (0, jsx_runtime_1.jsx)(TechStack_1.default, {}), (0, jsx_runtime_1.jsxs)("section", { id: "proyecto", style: { padding: '40px 20px', backgroundColor: '#f9f9f9', margin: '20px 0', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }, children: [(0, jsx_runtime_1.jsx)("h2", { style: { textAlign: 'center', color: '#007aff' }, children: "Proyectos Comerciales" }), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }, children: [(0, jsx_runtime_1.jsx)(ProjectCard_1.default, { image: inicio_chat_png_1.default, title: "Asistente de Reservas (Chatbot)", description: "Chatbot para reservar, consultar o cancelar citas usando API de Google Calendar.", detailedDescription: "Descripci\u00F3n detallada: Este proyecto automatiza reservas en barber\u00EDas integrando un chatbot con WhatsApp y Google Calendar. Incluye manejo de conversaciones naturales, confirmaciones y cancelaciones. Tecnolog\u00EDas: React, Node.js, Dialogflow.", galleryItems: [
                                                    { image: inicio_chat_png_2.default, text: 'Inicio del Chat' },
                                                    { image: confirmacion_chat_png_1.default, text: 'Confirmación' },
                                                    { image: CitaAgendadaCalendar_jpeg_1.default, text: 'Cita en Calendar' },
                                                    { image: flujoconver_chat_png_1.default, text: 'Flujo de Conversación' },
                                                    { image: tipofecha_chat_png_1.default, text: 'Selección de Fecha' },
                                                    { image: flujofunc_chat_png_1.default, text: 'Funcionalidades del Chatbot' },
                                                ], githubLink: "https://github.com/DEENN10/chatbot-barberia", projectPath: "/project-chatbot" // Nueva prop para navegación
                                             }), (0, jsx_runtime_1.jsx)(ProjectCard_1.default, { image: inicio_pagina_png_1.default, title: "Inspecciones-Basczagui S.A de C.V.", description: "P\u00E1gina web responsiva para empresa de inspecciones industriales.", detailedDescription: "Descripci\u00F3n detallada: P\u00E1gina web moderna con formularios de contacto, integraci\u00F3n con redes sociales y dise\u00F1o responsivo. Tecnolog\u00EDas: HTML, CSS, JavaScript, React.", galleryItems: [
                                                    { image: inicio_pagina_png_2.default, text: 'Inicio de página' },
                                                    { image: contacto_pagina_png_1.default, text: 'Contacto' },
                                                    { image: correo_paginaweb_jpeg_1.default, text: 'Correo' },
                                                    { image: blog_pagina_png_1.default, text: 'Blog' },
                                                    { image: estructura_pagina_png_1.default, text: 'Estructura' },
                                                ], githubLink: "https://github.com/DEENN10/trabajo1.0", projectPath: "/project-web" // Nueva prop
                                             }), (0, jsx_runtime_1.jsx)(ProjectCard_1.default, { image: login_TD_png_1.default, title: "Sistema de Toma de Datos", description: "Automatizaci\u00F3n para captura de datos en formatos PDF.", detailedDescription: "Descripci\u00F3n detallada: Sistema que automatiza la captura y procesamiento de datos, con scripts en Python y dashboard en React. Tecnolog\u00EDas: Python, React, Node.js.", galleryItems: [
                                                    { image: estruc_archivos_TD_png_1.default, text: 'Estructura de Archivos' },
                                                    { image: estructura_carpetas_TD_png_1.default, text: 'Estructura de Carpetas' },
                                                    { image: login_TD_png_2.default, text: 'Login del Sistema' },
                                                    { image: resultado5_15_png_1.default, text: 'Resultados 5-15' },
                                                    { image: resultado15_5_png_1.default, text: 'Resultados 15-5' },
                                                ], githubLink: "https://github.com/DEENN10/Sistema-Captura-de-Datos", projectPath: "/project-TD" // Nueva prop
                                             })] })] }), (0, jsx_runtime_1.jsx)(Contact_1.default, {})] }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/info-me", element: (0, jsx_runtime_1.jsx)(Info_me_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/project-chatbot", element: (0, jsx_runtime_1.jsx)(project_chatbot_1.default, {}) }) // Nueva ruta
                , "  // Nueva ruta", (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/project-web", element: (0, jsx_runtime_1.jsx)(project_web_1.default, {}) }) // Nueva ruta
                , "  // Nueva ruta", (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/project-TD", element: (0, jsx_runtime_1.jsx)(project_TD_1.default, {}) }) // Nueva ruta
                , "  // Nueva ruta"] }) }));
}
exports.default = App;
