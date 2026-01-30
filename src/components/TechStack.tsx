import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaServer, FaNetworkWired} from 'react-icons/fa'; // Iconos de react-icons

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
    { name: 'MongoDB', icon: <FaDatabase />, color: '#47a248' },
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
    { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
    { name: 'Python', icon: <FaPython />, color: '#3776ab' },
    { name: 'Express', icon: <FaServer />, color: '#000000' },
    { name: 'Cisco Networking', icon: <FaNetworkWired />, color: '#1ba0d7' },// Agregué Python y Express basándome en tus proyectos
  ];

  return (
    <section id="techstack" style={{ padding: '40px 20px', backgroundColor: '#f0f0f0', margin: '20px 0', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#007aff', marginBottom: '30px' }}> Tecnologías y herramientas </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{ fontSize: '3rem', color: tech.color, marginBottom: '10px' }}>
              {tech.icon}
            </div>
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;