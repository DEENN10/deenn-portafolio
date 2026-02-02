import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaServer, FaNetworkWired, FaJava, FaAndroid, FaGithub, FaCode, FaUsers, FaTimes } from 'react-icons/fa';

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      title: 'Frontend',
      technologies: [
        { name: 'React', icon: <FaReact />, color: '#61dafb' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
        { name: 'TypeScript', icon: <FaCode />, color: '#3178c6' },
      ],
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
        { name: 'Express', icon: <FaServer />, color: '#000000' },
        { name: 'MongoDB', icon: <FaDatabase />, color: '#47a248' },
        
      ],
    },
    {
      title: 'Lenguajes',
      technologies: [
        { name: 'Java', icon: <FaJava />, color: '#ed8b00' },
        { name: 'C++', icon: <FaCode />, color: '#00599c' },
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
      ],
    },
    {
      title: 'Herramientas',
      technologies: [
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'Android Studio', icon: <FaAndroid />, color: '#3ddc84' },
        { name: 'Cisco Network', icon: <FaNetworkWired />, color: '#1ba0d7' },
      ],
    },
    {
      title: 'Metodologías',
      technologies: [
        { name: 'Agile', icon: <FaUsers />, color: '#009688' },
        { name: 'Scrum', icon: <FaUsers />, color: '#ff5722' },
      ],
    },
  ];

  const openModal = (title: string) => setActiveCategory(title);
  const closeModal = () => setActiveCategory(null);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1 } },
  };

  return (
    <section id="techstack" style={{ padding: '60px 20px', backgroundColor: '#f0f0f0', margin: '30px 0', borderRadius: '15px' }}> {/* Padding aumentado para más amplitud */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', color: '#007aff', marginBottom: '40px', fontSize: '2.2rem' }} // Título más grande
      >
        Tecnologías y Herramientas
      </motion.h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '700px', margin: '0 auto' }}> {/* Gap aumentado */}
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => openModal(category.title)}
            style={{
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
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 8px 16px rgba(0, 122, 255, 0.5)', // Glow effect
              background: 'linear-gradient(135deg, #0056b3 0%, #003d82 100%)', // Gradiente más oscuro
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category.title}
          </motion.button>
        ))}
      </div>

      {/* Modal Emergente */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
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
            }}
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                padding: '30px', // Padding aumentado
                maxWidth: '600px', // Más ancho
                width: '90%',
                maxHeight: '80vh', // Más alto
                overflowY: 'auto',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#333',
                }}
              >
                <FaTimes />
              </button>
              <h3 style={{ textAlign: 'center', color: '#007aff', marginBottom: '25px', fontSize: '1.8rem' }}>{activeCategory}</h3> {/* Título más grande */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px' }} // Grid más espaciado
              >
                {categories.find(cat => cat.title === activeCategory)?.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '20px', // Padding aumentado
                      backgroundColor: '#f9f9f9',
                      borderRadius: '10px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div style={{ fontSize: '3rem', color: tech.color, marginBottom: '10px' }}> {/* Icono más grande */}
                      {tech.icon}
                    </div>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechStack;