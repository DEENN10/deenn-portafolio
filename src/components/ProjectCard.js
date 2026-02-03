"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom"); // Agrega este import
var ProjectCard = function (_a) {
    var image = _a.image, title = _a.title, description = _a.description, detailedDescription = _a.detailedDescription, galleryItems = _a.galleryItems, githubLink = _a.githubLink, projectPath = _a.projectPath;
    var navigate = (0, react_router_dom_1.useNavigate)(); // Hook para navegación
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            width: '300px',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            margin: '20px auto',
            cursor: 'pointer',
        }, onMouseOver: function (e) {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        }, onMouseOut: function (e) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }, children: [(0, jsx_runtime_1.jsx)("img", { src: image, alt: title, style: { width: '100%', height: '200px', objectFit: 'cover' } }), (0, jsx_runtime_1.jsxs)("div", { style: { padding: '20px', textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)("h5", { style: { color: '#007aff', fontWeight: '600', marginBottom: '10px' }, children: title }), (0, jsx_runtime_1.jsx)("p", { style: { color: '#333', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '15px' }, children: description }), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', justifyContent: 'space-around' }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return navigate(projectPath); }, style: {
                                    backgroundColor: '#007aff',
                                    color: '#ffffff',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    border: 'none',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s ease',
                                }, onMouseOver: function (e) { return (e.currentTarget.style.backgroundColor = '#0056cc'); }, onMouseOut: function (e) { return (e.currentTarget.style.backgroundColor = '#007aff'); }, children: "Ver m\u00E1s" }), (0, jsx_runtime_1.jsx)("a", { href: githubLink, target: "_blank", rel: "noopener noreferrer", style: {
                                    backgroundColor: '#333',
                                    color: '#ffffff',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    transition: 'background-color 0.3s ease',
                                }, onMouseOver: function (e) { return (e.currentTarget.style.backgroundColor = '#555'); }, onMouseOut: function (e) { return (e.currentTarget.style.backgroundColor = '#333'); }, children: "GitHub" })] })] })] }));
};
exports.default = ProjectCard;
