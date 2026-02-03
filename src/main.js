"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap-icons/font/bootstrap-icons.css");
require("./index.css");
var App_1 = require("./App");
// ...existing code...
var container = document.getElementById('root');
if (!container) {
    console.error('No se encontró el elemento #root. Asegúrate de tener <div id="root"></div> en tu index.html');
    throw new Error('Root element not found');
}
(0, client_1.createRoot)(container).render((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }));
