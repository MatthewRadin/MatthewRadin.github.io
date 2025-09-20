import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Code, Mail } from 'lucide-react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

type Section = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home' as Section, label: 'Main Menu', icon: Home },
    { id: 'about' as Section, label: 'Character Profile', icon: User },
    { id: 'experience' as Section, label: 'Achievements', icon: Briefcase },
    { id: 'projects' as Section, label: 'Game Portfolio', icon: FolderOpen },
    { id: 'skills' as Section, label: 'Skill Tree', icon: Code },
    { id: 'contact' as Section, label: 'Guild Contact', icon: Mail },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <div className="game-home flex flex-col items-center justify-center min-h-screen p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="game-title text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                MATTHEW RADIN
              </h1>
              <h2 className="game-subtitle text-2xl md:text-4xl font-semibold mb-8 text-cyan-300">
                GAME DESIGNER
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="game-description text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
              >
                Welcome to my digital portfolio. Explore my game design journey, 
                projects, and skills in this interactive experience.
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="game-button-primary px-8 py-4 text-xl font-semibold"
                onClick={() => setCurrentSection('about')}
              >
                START GAME
              </motion.button>
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Game Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="game-menu-panel p-8 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-300">GAME MENU</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`game-menu-item flex items-center space-x-4 p-4 rounded-lg transition-all ${
                        currentSection === item.id
                          ? 'bg-purple-600/50 border-purple-400'
                          : 'hover:bg-purple-600/30'
                      }`}
                      onClick={() => {
                        setCurrentSection(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <IconComponent size={24} />
                      <span className="text-lg">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game UI Header */}
      {currentSection !== 'home' && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-sm border-b border-purple-500/30"
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button
              onClick={() => setCurrentSection('home')}
              className="game-button-secondary px-4 py-2"
            >
              ← Main Menu
            </button>
            <h1 className="text-xl font-bold text-cyan-300">
              {menuItems.find(item => item.id === currentSection)?.label}
            </h1>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="game-button-secondary p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.header>
      )}

      {/* Main Content */}
      <main className={currentSection !== 'home' ? 'pt-20' : ''}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
