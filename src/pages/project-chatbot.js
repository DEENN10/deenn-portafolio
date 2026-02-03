"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
// Importa las imágenes
var inicio_chat_png_1 = require("../assets/img-chatbot/inicio-chat.png");
var confirmacion_chat_png_1 = require("../assets/img-chatbot/confirmacion-chat.png");
var CitaAgendadaCalendar_jpeg_1 = require("../assets/img-chatbot/CitaAgendadaCalendar.jpeg");
var flujoconver_chat_png_1 = require("../assets/img-chatbot/flujoconver-chat.png");
var tipofecha_chat_png_1 = require("../assets/img-chatbot/tipofecha-chat.png");
var flujofunc_chat_png_1 = require("../assets/img-chatbot/flujofunc-chat.png");
var ProjectChatbot = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    // Array de elementos: type, src, text
    var galleryItems = [
        { type: 'image', src: inicio_chat_png_1.default, text: 'Inicio del Chat: Interfaz principal donde el usuario inicia la conversación y el asistente responde con un saludo y las opciones disponibles para el cliente.' },
        { type: 'image', src: tipofecha_chat_png_1.default, text: 'Selección de Fecha: Una vez seleccionado el servicio requerido el cliente puede elegir el dia y fecha deseados.' },
        { type: 'image', src: confirmacion_chat_png_1.default, text: 'Confirmación: Una vez elegido el tipo de servicio y el horario deseado por el cliente, podemos ver una Pantalla que confirma la reserva exitosamente.' },
        { type: 'image', src: CitaAgendadaCalendar_jpeg_1.default, text: 'Cita en Calendario: Vista de la cita agendada en Google Calendar del barbero donde se indica el nombre del cliente y el tipo de servicio a realizar en el dia solicitado.' },
        { type: 'image', src: flujoconver_chat_png_1.default, text: 'Flujo de Conversación: Diálogo natural con el bot para saludos, reservas o cancelaciones de servicios.' },
        { type: 'image', src: flujofunc_chat_png_1.default, text: 'Flujo Funcional: Flujo del comportamiento del asistentente a cada opcion solicitada.' },
    ];
    var nextItem = function () { return setCurrentIndex(function (prev) { return (prev + 1) % galleryItems.length; }); };
    var prevItem = function () { return setCurrentIndex(function (prev) { return (prev - 1 + galleryItems.length) % galleryItems.length; }); };
    var currentItem = galleryItems[currentIndex];
    return ((0, jsx_runtime_1.jsxs)("div", { style: { minHeight: '100vh', backgroundColor: '#f9f9f9', padding: '20px' }, children: [(0, jsx_runtime_1.jsxs)("nav", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }, children: [(0, jsx_runtime_1.jsx)("h1", { style: { color: '#007aff', fontSize: '1.5rem' }, children: "Roberto Gonzalez" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return navigate('/'); }, style: {
                            backgroundColor: '#007aff',
                            color: '#ffffff',
                            border: 'none',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                        }, onMouseOver: function (e) { return (e.currentTarget.style.backgroundColor = '#0056cc'); }, onMouseOut: function (e) { return (e.currentTarget.style.backgroundColor = '#007aff'); }, children: "Volver al Inicio" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { maxWidth: '1200px', margin: '40px auto', textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)("h2", { style: { color: '#007aff', fontSize: '2.5rem', marginBottom: '20px' }, children: "Asistente de Reservas (Chatbot)" }), (0, jsx_runtime_1.jsx)("p", { style: { color: '#333', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }, children: "Este Proyecto Comercial automatiza reservaciones en barber\u00EDas integrando un chatbot con WhatsApp y Google Calendar. Incluye manejo de conversaciones naturales, confirmaciones y cancelaciones. Tecnolog\u00EDas Utilizadas: React, Node.js, Dialogflow." }), (0, jsx_runtime_1.jsxs)("div", { style: { height: '600px', position: 'relative', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: prevItem, style: {
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
                                }, children: "\u2039" }), currentItem.type === 'image' ? ((0, jsx_runtime_1.jsx)("img", { src: currentItem.src, alt: currentItem.text, style: { maxWidth: '80%', maxHeight: '500px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' } })) : ((0, jsx_runtime_1.jsx)("video", { src: currentItem.src, controls: true, style: { maxWidth: '80%', maxHeight: '500px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' } })), (0, jsx_runtime_1.jsx)("button", { onClick: nextItem, style: {
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
                                }, children: "\u203A" }), (0, jsx_runtime_1.jsx)("p", { style: { position: 'absolute', bottom: '10px', color: '#ffffff', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '10px', maxWidth: '600px' }, children: currentItem.text })] }), (0, jsx_runtime_1.jsx)("div", { style: { display: 'flex', justifyContent: 'center', gap: '20px' }, children: (0, jsx_runtime_1.jsx)("a", { href: "https://github.com/DEENN10/chatbot-barberia", target: "_blank", rel: "noopener noreferrer", style: {
                                backgroundColor: '#333',
                                color: '#ffffff',
                                padding: '12px 24px',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                transition: 'background-color 0.3s ease',
                            }, onMouseOver: function (e) { return (e.currentTarget.style.backgroundColor = '#555'); }, onMouseOut: function (e) { return (e.currentTarget.style.backgroundColor = '#333'); }, children: "Ver en GitHub" }) })] })] }));
};
exports.default = ProjectChatbot;
