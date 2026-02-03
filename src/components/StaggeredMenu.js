"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var fa_1 = require("react-icons/fa");
var StaggeredMenu = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var menuItems = [
        { name: 'Inicio', icon: (0, jsx_runtime_1.jsx)(fa_1.FaHome, {}), href: '#inicio' },
        { name: 'Tech Stack', icon: (0, jsx_runtime_1.jsx)(fa_1.FaTools, {}), href: '#techstack' },
        { name: 'Proyectos', icon: (0, jsx_runtime_1.jsx)(fa_1.FaCode, {}), href: '#proyectos' },
        { name: 'Contacto', icon: (0, jsx_runtime_1.jsx)(fa_1.FaEnvelope, {}), href: '#contacto' },
    ];
    var handleScroll = function (id) {
        var element = document.getElementById(id);
        if (element) {
            var offset = 80;
            var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        }
        setIsOpen(false); // Cierra el menú después de clic
    };
    var menuVariants = {
        closed: {
            opacity: 0,
            scale: 0.8,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };
    var itemVariants = {
        closed: { y: 20, opacity: 0 },
        open: { y: 0, opacity: 1 },
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { onClick: function () { return setIsOpen(!isOpen); }, style: {
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: '#555',
                }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { animate: isOpen ? { rotate: 45 } : { rotate: 0 }, transition: { duration: 0.3 }, children: "\u2630" }) }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: isOpen && ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: "closed", animate: "open", exit: "closed", variants: menuVariants, style: {
                        position: 'absolute',
                        top: '50px',
                        right: '0',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                        zIndex: 1000,
                        minWidth: '200px',
                    }, children: menuItems.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.a, { variants: itemVariants, href: item.href, onClick: function (e) {
                            e.preventDefault();
                            handleScroll(item.href.slice(1)); // Remueve # del href
                        }, style: {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            textDecoration: 'none',
                            color: '#333',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s',
                        }, whileHover: { backgroundColor: '#f0f0f0' }, children: [(0, jsx_runtime_1.jsx)("span", { style: { marginRight: '10px' }, children: item.icon }), item.name] }, index)); }) })) })] }));
};
exports.default = StaggeredMenu;
