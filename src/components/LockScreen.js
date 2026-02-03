"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var LockScreen = function (_a) {
    var onUnlock = _a.onUnlock;
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            backgroundColor: '#000000', // Fondo negro
        }, onClick: onUnlock, children: (0, jsx_runtime_1.jsx)("div", { style: {
                position: 'relative',
                width: '600px',
                height: '600px',
                borderRadius: '50%', // Hace que sea un círculo
                overflow: 'hidden', // Para que el efecto no se salga
                background: 'radial-gradient(circle, rgba(12,55,250,0.5) 0%, rgba(0,0,0,1) 70%)', // Gradiente azul-negro simple
            }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    zIndex: 1,
                }, children: [(0, jsx_runtime_1.jsx)("h1", { style: { color: '#ffffff', fontSize: '1.7rem', margin: '0 0 10px 0' }, children: "Roberto Gonzalez" }), (0, jsx_runtime_1.jsx)("h1", { style: { color: '#0c37faff', fontSize: '2.0rem', margin: '0 0 10px 0' }, children: "Ing en Sistemas Computacionales." }), (0, jsx_runtime_1.jsx)("p", { style: { color: '#ffffff', fontSize: '1.0rem', margin: '0' }, children: "Toca para desbloquear" })] }) }) }));
};
exports.default = LockScreen;
