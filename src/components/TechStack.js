"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var TechStack = function () {
    var _a;
    var _b = (0, react_1.useState)(null), activeCategory = _b[0], setActiveCategory = _b[1];
    var categories = [
        {
            title: 'Frontend',
            technologies: [
                { name: 'React', icon: (0, jsx_runtime_1.jsx)(fa_1.FaReact, {}), color: '#61dafb' },
                { name: 'JavaScript', icon: (0, jsx_runtime_1.jsx)(fa_1.FaJs, {}), color: '#f7df1e' },
                { name: 'HTML5', icon: (0, jsx_runtime_1.jsx)(fa_1.FaHtml5, {}), color: '#e34f26' },
                { name: 'CSS3', icon: (0, jsx_runtime_1.jsx)(fa_1.FaCss3Alt, {}), color: '#1572b6' },
                { name: 'TypeScript', icon: (0, jsx_runtime_1.jsx)(fa_1.FaCode, {}), color: '#3178c6' },
            ],
        },
        {
            title: 'Backend',
            technologies: [
                { name: 'Node.js', icon: (0, jsx_runtime_1.jsx)(fa_1.FaNodeJs, {}), color: '#68a063' },
                { name: 'Express', icon: (0, jsx_runtime_1.jsx)(fa_1.FaServer, {}), color: '#000000' },
                { name: 'MongoDB', icon: (0, jsx_runtime_1.jsx)(fa_1.FaDatabase, {}), color: '#47a248' },
            ],
        },
        {
            title: 'Lenguajes',
            technologies: [
                { name: 'Java', icon: (0, jsx_runtime_1.jsx)(fa_1.FaJava, {}), color: '#ed8b00' },
                { name: 'C++', icon: (0, jsx_runtime_1.jsx)(fa_1.FaCode, {}), color: '#00599c' },
                { name: 'Python', icon: (0, jsx_runtime_1.jsx)(fa_1.FaPython, {}), color: '#3776ab' },
            ],
        },
        {
            title: 'Herramientas',
            technologies: [
                { name: 'Git', icon: (0, jsx_runtime_1.jsx)(fa_1.FaGitAlt, {}), color: '#f05032' },
                { name: 'GitHub', icon: (0, jsx_runtime_1.jsx)(fa_1.FaGithub, {}), color: '#181717' },
                { name: 'Android Studio', icon: (0, jsx_runtime_1.jsx)(fa_1.FaAndroid, {}), color: '#3ddc84' },
                { name: 'Cisco Network', icon: (0, jsx_runtime_1.jsx)(fa_1.FaNetworkWired, {}), color: '#1ba0d7' },
            ],
        },
        {
            title: 'Metodologías',
            technologies: [
                { name: 'Agile', icon: (0, jsx_runtime_1.jsx)(fa_1.FaUsers, {}), color: '#009688' },
                { name: 'Scrum', icon: (0, jsx_runtime_1.jsx)(fa_1.FaUsers, {}), color: '#ff5722' },
            ],
        },
    ];
    var openModal = function (title) { return setActiveCategory(title); };
    var closeModal = function () { return setActiveCategory(null); };
    var modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    };
    var itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1 } },
    };
    return ((0, jsx_runtime_1.jsxs)("section", { id: "techstack", style: { padding: '60px 20px', backgroundColor: '#f0f0f0', margin: '30px 0', borderRadius: '15px' }, children: [" ", (0, jsx_runtime_1.jsx)(framer_motion_1.motion.h2, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, style: { textAlign: 'center', color: '#007aff', marginBottom: '40px', fontSize: '2.2rem' }, children: "Tecnolog\u00EDas y Herramientas" }), (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '700px', margin: '0 auto' }, children: [" ", categories.map(function (category, index) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { onClick: function () { return openModal(category.title); }, style: {
                            padding: '15px 30px', // Padding aumentado
                            background: 'linear-gradient(135deg, #007aff 0%, #0056b3 100%)', // Gradiente azul
                            color: '#fff',
                            border: 'none',
                            borderRadius: '25px', // Bordes más redondeados
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 8px rgba(0, 122, 255, 0.3)', // Sombra azul
                            transition: 'all 0.3s ease',
                        }, whileHover: {
                            scale: 1.1,
                            boxShadow: '0 8px 16px rgba(0, 122, 255, 0.5)', // Glow effect
                            background: 'linear-gradient(135deg, #0056b3 0%, #003d82 100%)', // Gradiente más oscuro
                        }, whileTap: { scale: 0.95 }, children: category.title }, index)); })] }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: activeCategory && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, style: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }, onClick: closeModal, children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { variants: modalVariants, initial: "hidden", animate: "visible", exit: "exit", style: {
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                            padding: '30px', // Padding aumentado
                            maxWidth: '600px', // Más ancho
                            width: '90%',
                            maxHeight: '80vh', // Más alto
                            overflowY: 'auto',
                            position: 'relative',
                        }, onClick: function (e) { return e.stopPropagation(); }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: closeModal, style: {
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    color: '#333',
                                }, children: (0, jsx_runtime_1.jsx)(fa_1.FaTimes, {}) }), (0, jsx_runtime_1.jsx)("h3", { style: { textAlign: 'center', color: '#007aff', marginBottom: '25px', fontSize: '1.8rem' }, children: activeCategory }), " ", (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { variants: itemVariants, initial: "hidden", animate: "visible", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px' }, children: (_a = categories.find(function (cat) { return cat.title === activeCategory; })) === null || _a === void 0 ? void 0 : _a.technologies.map(function (tech, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { variants: itemVariants, style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '20px', // Padding aumentado
                                        backgroundColor: '#f9f9f9',
                                        borderRadius: '10px',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { fontSize: '3rem', color: tech.color, marginBottom: '10px' }, children: [" ", tech.icon] }), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: '1rem', fontWeight: 'bold', color: '#333' }, children: tech.name })] }, index)); }) })] }) })) })] }));
};
exports.default = TechStack;
