import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, FolderOpen, Code, Mail, FileText } from 'lucide-react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

type Section = 'about' | 'experience' | 'projects' | 'skills' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about' as Section, label: 'About', icon: User },
    { id: 'experience' as Section, label: 'Experience', icon: Briefcase },
    { id: 'projects' as Section, label: 'Projects', icon: FolderOpen },
    { id: 'skills' as Section, label: 'Skills', icon: Code },
    { id: 'contact' as Section, label: 'Contact', icon: Mail },
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
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-warm-brown">
      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-warm-brown/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="design-panel rounded-2xl max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="heading-sketch text-3xl">Portfolio Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-warm-brown hover:text-warm-coral transition-colors"
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
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all sketch-border ${
                        currentSection === item.id
                          ? 'bg-warm-coral text-warm-cream border-warm-coral'
                          : 'hover:bg-warm-beige text-warm-brown'
                      }`}
                      onClick={() => {
                        setCurrentSection(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <IconComponent size={24} />
                      <span className="body-text text-lg">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-warm-cream/90 backdrop-blur-sm border-b border-warm-brown/30 sketch-border-bottom"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="heading-sketch text-2xl text-warm-brown">Matthew Radin</h1>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`body-text px-3 py-2 rounded transition-colors ${
                    currentSection === item.id
                      ? 'text-warm-coral font-semibold'
                      : 'text-warm-brown hover:text-warm-coral'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            {/* Resume View Button */}
            <a
              href="/MatthewRadinResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-warm-coral hover:bg-warm-orange text-warm-cream px-4 py-2 rounded-lg transition-colors sketch-border"
            >
              <FileText size={16} />
              <span className="body-text font-medium">Resume</span>
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden bg-warm-coral text-warm-cream p-2 rounded sketch-border"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24">
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
