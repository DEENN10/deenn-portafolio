"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
var fa_1 = require("react-icons/fa");
var StaggeredMenu_1 = require("./StaggeredMenu");
var Navbar = function () {
    var handleScroll = function (id) {
        var element = document.getElementById(id);
        if (element) {
            var offset = 80; // Ajusta si es necesario
            var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        }
        else {
            console.log('Elemento NO encontrado para ID:', id); // Agrega esto
        }
    };
    return ((0, jsx_runtime_1.jsx)("nav", { className: "navbar navbar-expand-lg navbar-light bg-light shadow-sm", style: { borderRadius: '10px', margin: '10px' }, children: (0, jsx_runtime_1.jsxs)("div", { className: "container-fluid", children: [(0, jsx_runtime_1.jsx)("a", { className: "navbar-brand", href: "#inicio", onClick: function (e) { e.preventDefault(); handleScroll('inicio'); }, style: { fontWeight: 'bold', color: '#555' }, children: "DEENN DEV." }), (0, jsx_runtime_1.jsx)("div", { className: "collapse navbar-collapse", id: "navbarNav", children: (0, jsx_runtime_1.jsxs)("ul", { className: "navbar-nav ms-auto", children: [(0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsxs)("a", { className: "nav-link", href: "#inicio", onClick: function (e) { e.preventDefault(); handleScroll('inicio'); }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, {}), " Inicio"] }) }), (0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsxs)("a", { className: "nav-link", href: "#techstack", onClick: function (e) { e.preventDefault(); handleScroll('techstack'); }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaTools, {}), " Tech Stack"] }) }), (0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsxs)("a", { className: "nav-link", href: "#proyecto", onClick: function (e) { e.preventDefault(); handleScroll('proyectos'); }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaCode, {}), " Proyectos"] }) }), (0, jsx_runtime_1.jsx)("li", { className: "nav-item", children: (0, jsx_runtime_1.jsxs)("a", { className: "nav-link", href: "#contacto", onClick: function (e) { e.preventDefault(); handleScroll('contacto'); }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaEnvelope, {}), " Contacto"] }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "d-lg-none", children: (0, jsx_runtime_1.jsx)(StaggeredMenu_1.default, {}) })] }) }));
};
exports.default = Navbar;
