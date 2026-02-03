"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var perfil_cv_jpg_1 = require("../assets/perfil-cv.jpg"); // Ruta a tu imagen de perfil
var AboutMe = function () {
    return ((0, jsx_runtime_1.jsxs)("section", { id: "inicio", style: { padding: '20px', textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)("img", { src: perfil_cv_jpg_1.default, alt: "Foto de perfil", style: {
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%', // Hace la imagen circular
                    objectFit: 'cover',
                    marginBottom: '20px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra suave
                    transition: 'transform 0.3s ease', // Transición para hover
                }, onMouseOver: function (e) { return (e.currentTarget.style.transform = 'scale(1.05)'); }, onMouseOut: function (e) { return (e.currentTarget.style.transform = 'scale(1)'); } }), (0, jsx_runtime_1.jsx)("h2", { style: {
                    color: '#007aff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '2rem',
                    marginBottom: '20px'
                }, children: "Sobre m\u00ED..." }), (0, jsx_runtime_1.jsx)("p", { style: {
                    fontSize: '1.1rem',
                    color: '#333',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    fontFamily: 'Arial-sans-serif',
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '0 20px'
                }, children: "Soy desarrollador Fullstack con experiencia creando aplicaciones web completas y proyectos enfocados en la automatizaci\u00F3n de procesos y la optimizaci\u00F3n del tiempo operativo. He trabajado con tecnolog\u00EDas como React, Node.js, Express, MongoDB y MySQL, CISCO, integrando APIs externas y desarrollando soluciones funcionales y mantenibles. Me adapto con facilidad a nuevos entornos y tecnolog\u00EDas, disfruto aprender constantemente y enfrentar retos t\u00E9cnicos que aporten valor real a proyectos y a las personas que los utilizan." }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/info-me", children: (0, jsx_runtime_1.jsx)("button", { style: {
                        backgroundColor: '#007aff',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                        marginTop: '20px',
                    }, onMouseOver: function (e) {
                        e.currentTarget.style.backgroundColor = '#0056b3';
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }, onMouseOut: function (e) {
                        e.currentTarget.style.backgroundColor = '#007aff';
                        e.currentTarget.style.transform = 'scale(1)';
                    }, children: "M\u00E1s informaci\u00F3n" }) })] }));
};
exports.default = AboutMe;
