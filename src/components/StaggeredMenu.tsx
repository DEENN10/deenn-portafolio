import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCode, FaTools, FaEnvelope } from 'react-icons/fa';

const StaggeredMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', icon: <FaHome />, href: '#inicio' },
    { name: 'Tech Stack', icon: <FaTools />, href: '#techstack' },
    { name: 'Proyectos', icon: <FaCode />, href: '#proyectos' },
    { name: 'Contacto', icon: <FaEnvelope />, href: '#contacto' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
    setIsOpen(false); // Cierra el menú después de clic
  };

  const menuVariants = {
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

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Botón de Hamburguesa */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: '#555',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          ☰
        </motion.div>
      </motion.button>

      {/* Menú Staggered */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              position: 'absolute',
              top: '50px',
              right: '0',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              zIndex: 1000,
              minWidth: '200px',
            }}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href.slice(1)); // Remueve # del href
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  textDecoration: 'none',
                  color: '#333',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s',
                }}
                whileHover={{ backgroundColor: '#f0f0f0' }}
              >
                <span style={{ marginRight: '10px' }}>{item.icon}</span>
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaggeredMenu;