import React from 'react';

interface LockScreenProps {
  onUnlock: () => void;  // Función para desbloquear
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  return (
    <div 
      style={{
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
        backgroundColor: '#000000',  // Fondo negro
      }}
      onClick={onUnlock}  // Clic para pasar a la siguiente página
    >
      {/* Contenedor circular centrado */}
      <div style={{
        position: 'relative',
        width: '600px',
        height: '600px',
        borderRadius: '50%',  // Hace que sea un círculo
        overflow: 'hidden',  // Para que el efecto no se salga
        background: 'radial-gradient(circle, rgba(12,55,250,0.5) 0%, rgba(0,0,0,1) 70%)',  // Gradiente azul-negro simple
      }}>
        {/* Texto dentro del círculo, centrado */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <h1 style={{ color: '#ffffff', fontSize: '1.7rem', margin: '0 0 10px 0' }}>Roberto Gonzalez</h1>
          <h1 style={{ color: '#0c37faff', fontSize: '2.0rem', margin: '0 0 10px 0' }}>Ing en Sistemas Computacionales.</h1>
          <p style={{ color: '#ffffff', fontSize: '1.0rem', margin: '0' }}>Toca para desbloquear</p>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;