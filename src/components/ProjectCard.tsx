import React from 'react';
import { useNavigate } from 'react-router-dom';  // Agrega este import

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  detailedDescription: string;
  galleryItems: { image: string; text: string }[];
  githubLink: string;
  projectPath: string;  // Nueva prop para la ruta de la página del proyecto
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, detailedDescription, galleryItems, githubLink, projectPath }) => {
  const navigate = useNavigate();  // Hook para navegación

  return (
    <div
      style={{
        width: '300px',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        margin: '20px auto',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      }}
    >
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h5 style={{ color: '#007aff', fontWeight: '600', marginBottom: '10px' }}>{title}</h5>
        <p style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '15px' }}>{description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button
            onClick={() => navigate(projectPath)}  // Navega a la página del proyecto
            style={{
              backgroundColor: '#007aff',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056cc')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007aff')}
          >
            Ver más
          </button>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#333',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#555')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#333')}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;