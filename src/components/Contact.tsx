import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Asegúrate de que sea Contact.css con mayúscula

// Interface para el formulario
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Inicializa EmailJS con tu Public Key (reemplaza con la tuya)
  emailjs.init('3TS0sH7xzSZJQphbR'); // Cambia esto por tu public key real

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = 'Nombre es requerido.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email es requerido.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email inválido.';
      }
    } else if (step === 1) {
      if (!formData.message.trim()) {
        newErrors.message = 'Mensaje es requerido.';
      } else if (formData.message.length < 10) {
        newErrors.message = 'Mensaje debe tener al menos 10 caracteres.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(2)) {
      setShowAlert({ type: 'error', message: 'Corrige los errores antes de enviar.' });
      return;
    }

    setIsLoading(true);
    setShowAlert(null);

    try {
      const result = await emailjs.send(
        'service_k3chjqg', // Reemplaza con tu Service ID real
        'template_78516xj', // Reemplaza con tu Template ID real
        {
          nombre: formData.name,
          email: formData.email,
          mensaje: formData.message,
          fecha: new Date().toLocaleString('es-MX'),
        }
      );

      console.log('Email enviado:', result.text);
      setShowAlert({ type: 'success', message: '¡Mensaje enviado exitosamente! Te responderé pronto.' });
      setFormData({ name: '', email: '', message: '' });
      setCurrentStep(0);
      setTimeout(() => setShowAlert(null), 5000);
    } catch (error) {
      console.error('Error:', error);
      setShowAlert({ type: 'error', message: 'Error al enviar. Inténtalo de nuevo.' });
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    {
      id: 1,
      title: 'Información Básica',
      content: (
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            required
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            required
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
      ),
    },
    {
      id: 2,
      title: 'Mensaje',
      content: (
        <div>
          <label>Mensaje:</label>
          <textarea
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: '' });
            }}
            required
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
      ),
    },
    {
      id: 3,
      title: 'Confirmación',
      content: (
        <div>
          <p>Revisa tus datos:</p>
          <p><strong>Nombre:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Mensaje:</strong> {formData.message}</p>
          {showAlert && (
            <div className={`alert ${showAlert.type}`}>
              {showAlert.message}
              <button onClick={() => setShowAlert(null)}>Cerrar</button>
            </div>
          )}
          <button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </div>
      ),
    },
  ];

  return (
    <section id="contacto" style={{ padding: '40px 20px', backgroundColor: '#f0f0f0', margin: '20px 0', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#007aff' }}>Contáctame</h2>
      <div className="stepper">
        <div className="step-indicators">
          {steps.map((step, index) => (
            <div key={step.id} className={`step ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`}>
              <span>{step.id}</span>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
        <div className="step-content">
          {steps[currentStep].content}
        </div>
        <div className="step-buttons">
          {currentStep > 0 && <button onClick={prevStep}>Anterior</button>}
          {currentStep < steps.length - 1 && <button onClick={nextStep}>Siguiente</button>}
        </div>
      </div>
    </section>
  );
};

export default Contact;