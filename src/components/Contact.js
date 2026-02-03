"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var browser_1 = require("@emailjs/browser");
require("./Contact.css"); // Asegúrate de que sea Contact.css con mayúscula
var Contact = function () {
    var _a = (0, react_1.useState)(0), currentStep = _a[0], setCurrentStep = _a[1];
    var _b = (0, react_1.useState)({
        name: '',
        email: '',
        phone: '', // Agregado
        message: '',
    }), formData = _b[0], setFormData = _b[1];
    var _c = (0, react_1.useState)({}), errors = _c[0], setErrors = _c[1];
    var _d = (0, react_1.useState)(null), showAlert = _d[0], setShowAlert = _d[1];
    var _e = (0, react_1.useState)(false), isLoading = _e[0], setIsLoading = _e[1];
    // Inicializa EmailJS con tu Public Key (reemplaza con la tuya)
    browser_1.default.init('3TS0sH7xzSZJQphbR'); // Cambia esto por tu public key real
    var validateStep = function (step) {
        var newErrors = {};
        if (step === 0) {
            if (!formData.name.trim())
                newErrors.name = 'Nombre es requerido.';
            if (!formData.email.trim()) {
                newErrors.email = 'Email es requerido.';
            }
            else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Email inválido.';
            }
            if (formData.phone && formData.phone.length < 8) {
                newErrors.phone = 'Teléfono debe tener al menos 8 dígitos.';
            }
        }
        else if (step === 1) {
            if (!formData.message.trim()) {
                newErrors.message = 'Mensaje es requerido.';
            }
            else if (formData.message.length < 10) {
                newErrors.message = 'Mensaje debe tener al menos 10 caracteres.';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var nextStep = function () {
        if (validateStep(currentStep) && currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };
    var prevStep = function () {
        if (currentStep > 0)
            setCurrentStep(currentStep - 1);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!validateStep(2)) {
                        setShowAlert({ type: 'error', message: 'Corrige los errores antes de enviar.' });
                        return [2 /*return*/];
                    }
                    setIsLoading(true);
                    setShowAlert(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, browser_1.default.send('service_k3chjqg', // Reemplaza con tu Service ID real
                        'template_78516xj', // Reemplaza con tu Template ID real (agrega {{telefono}} en tu template de EmailJS)
                        {
                            nombre: formData.name,
                            email: formData.email,
                            telefono: formData.phone || 'No proporcionado', // Agregado
                            mensaje: formData.message,
                            fecha: new Date().toLocaleString('es-MX'),
                        })];
                case 2:
                    result = _a.sent();
                    console.log('Email enviado:', result.text);
                    setShowAlert({ type: 'success', message: '¡Mensaje enviado exitosamente! Te responderé pronto.' });
                    setFormData({ name: '', email: '', phone: '', message: '' }); // Agregado phone
                    setCurrentStep(0);
                    setTimeout(function () { return setShowAlert(null); }, 5000);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    setShowAlert({ type: 'error', message: 'Error al enviar. Inténtalo de nuevo.' });
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var steps = [
        {
            id: 1,
            title: 'Información Básica',
            content: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Nombre(s):" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: formData.name, onChange: function (e) {
                            setFormData(__assign(__assign({}, formData), { name: e.target.value }));
                            if (errors.name)
                                setErrors(__assign(__assign({}, errors), { name: '' }));
                        }, required: true, className: errors.name ? 'error' : '' }), errors.name && (0, jsx_runtime_1.jsx)("span", { className: "error-text", children: errors.name }), (0, jsx_runtime_1.jsx)("label", { children: "Email:" }), (0, jsx_runtime_1.jsx)("input", { type: "email", value: formData.email, onChange: function (e) {
                            setFormData(__assign(__assign({}, formData), { email: e.target.value }));
                            if (errors.email)
                                setErrors(__assign(__assign({}, errors), { email: '' }));
                        }, required: true, className: errors.email ? 'error' : '' }), errors.email && (0, jsx_runtime_1.jsx)("span", { className: "error-text", children: errors.email }), (0, jsx_runtime_1.jsx)("label", { children: "Tel\u00E9fono (Opcional):" }), " ", (0, jsx_runtime_1.jsx)("input", { type: "tel", value: formData.phone, onChange: function (e) {
                            setFormData(__assign(__assign({}, formData), { phone: e.target.value }));
                            if (errors.phone)
                                setErrors(__assign(__assign({}, errors), { phone: '' }));
                        }, className: errors.phone ? 'error' : '' }), errors.phone && (0, jsx_runtime_1.jsx)("span", { className: "error-text", children: errors.phone })] })),
        },
        {
            id: 2,
            title: 'Mensaje',
            content: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Mensaje:" }), (0, jsx_runtime_1.jsx)("textarea", { value: formData.message, onChange: function (e) {
                            setFormData(__assign(__assign({}, formData), { message: e.target.value }));
                            if (errors.message)
                                setErrors(__assign(__assign({}, errors), { message: '' }));
                        }, required: true, className: errors.message ? 'error' : '' }), errors.message && (0, jsx_runtime_1.jsx)("span", { className: "error-text", children: errors.message })] })),
        },
        {
            id: 3,
            title: 'Confirmación',
            content: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "Revisa tus datos:" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Nombre:" }), " ", formData.name] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Email:" }), " ", formData.email] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Tel\u00E9fono:" }), " ", formData.phone || 'No proporcionado'] }), " ", (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Mensaje:" }), " ", formData.message] }), showAlert && ((0, jsx_runtime_1.jsxs)("div", { className: "alert ".concat(showAlert.type), children: [showAlert.message, (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setShowAlert(null); }, children: "Cerrar" })] })), (0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit, disabled: isLoading, children: isLoading ? 'Enviando...' : 'Enviar Mensaje' })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("section", { id: "contacto", style: { padding: '40px 20px', backgroundColor: '#f0f0f0', margin: '20px 0', borderRadius: '10px' }, children: [(0, jsx_runtime_1.jsx)("h2", { style: { textAlign: 'center', color: '#007aff' }, children: "Cont\u00E1ctame" }), (0, jsx_runtime_1.jsxs)("div", { className: "stepper", children: [(0, jsx_runtime_1.jsx)("div", { className: "step-indicators", children: steps.map(function (step, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "step ".concat(index === currentStep ? 'active' : index < currentStep ? 'completed' : ''), children: [(0, jsx_runtime_1.jsx)("span", { children: step.id }), (0, jsx_runtime_1.jsx)("p", { children: step.title })] }, step.id)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "step-content", children: steps[currentStep].content }), (0, jsx_runtime_1.jsxs)("div", { className: "step-buttons", children: [currentStep > 0 && (0, jsx_runtime_1.jsx)("button", { onClick: prevStep, children: "Anterior" }), currentStep < steps.length - 1 && (0, jsx_runtime_1.jsx)("button", { onClick: nextStep, children: "Siguiente" })] })] })] }));
};
exports.default = Contact;
