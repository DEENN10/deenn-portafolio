"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CircularGallery;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./CircularGallery.css"); // Sin asignar a variable
// Aquí va todo el código JS de ReactBits que me diste (desde "function debounce" hasta "export default function CircularGallery")
// ... (Pega el código completo aquí, incluyendo las clases App, Media, Title, etc.)
function CircularGallery(_a) {
    var items = _a.items, _b = _a.bend, bend = _b === void 0 ? 3 : _b, _c = _a.textColor, textColor = _c === void 0 ? '#ffffff' : _c, _d = _a.borderRadius, borderRadius = _d === void 0 ? 0.05 : _d, _e = _a.font, font = _e === void 0 ? 'bold 30px Figtree' : _e, _f = _a.scrollSpeed, scrollSpeed = _f === void 0 ? 2 : _f, _g = _a.scrollEase, scrollEase = _g === void 0 ? 0.05 : _g;
    var containerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var app = new App(containerRef.current, { items: items, bend: bend, textColor: textColor, borderRadius: borderRadius, font: font, scrollSpeed: scrollSpeed, scrollEase: scrollEase });
        return function () {
            app.destroy();
        };
    }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase]);
    return (0, jsx_runtime_1.jsx)("div", { className: "circular-gallery", ref: containerRef });
}
