import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  onSectionSelect: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSectionSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const menuOptions = [
    { id: 'about', label: 'ABOUT', description: 'Designer Profile & Credentials' },
    { id: 'experience', label: 'EXPERIENCE', description: 'Professional Work History' },
    { id: 'projects', label: 'PROJECTS', description: 'Game Development Portfolio' },
    { id: 'contact', label: 'CONTACT', description: 'Get In Touch & Collaborate' }
  ];

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
    // Add CRT zoom effect, then navigate
    setTimeout(() => {
      onSectionSelect(optionId);
    }, 1000);
  };

  return (
    <div className="arcade-machine-fullscreen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`arcade-cabinet-full ${selectedOption ? 'crt-zoom-transition' : ''}`}
      >
        {/* CRT Screen - Main Display */}
        <div className="crt-screen-full">
          <div className="arcade-menu-full">
            {/* Game Title */}
            <motion.h1 
              className="arcade-title"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              MATTHEW RADIN
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="arcade-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Game Designer & AI Research Assistant
            </motion.p>

            {/* Menu Options */}
            <motion.div 
              className="arcade-menu-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {menuOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2 + index * 0.3 }}
                  className="arcade-menu-option"
                  onClick={() => handleOptionClick(option.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{option.label}</span>
                    <span style={{ 
                      fontSize: '0.7rem', 
                      opacity: 0.7, 
                      textTransform: 'none', 
                      letterSpacing: '1px',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {option.description}
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Instructions */}
            <motion.div 
              className="arcade-instructions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 4 }}
            >
              PRESS BUTTON TO SELECT<br />
              CLICK TO ENTER
            </motion.div>
          </div>
        </div>

        {/* Control Panel */}
        <motion.div 
          className="arcade-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {menuOptions.map((option, index) => (
            <motion.button
              key={`control-${option.id}`}
              className="arcade-button-physical"
              onClick={() => handleOptionClick(option.id)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={option.label}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;