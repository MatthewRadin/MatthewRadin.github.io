import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, FolderOpen, Mail, FileText, Home as HomeIcon } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

type Section = 'home' | 'about' | 'experience' | 'projects' | 'contact';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home' as Section, label: 'Home', icon: HomeIcon },
    { id: 'about' as Section, label: 'About', icon: User },
    { id: 'experience' as Section, label: 'Experience', icon: Briefcase },
    { id: 'projects' as Section, label: 'Projects', icon: FolderOpen },
    { id: 'contact' as Section, label: 'Contact', icon: Mail },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onSectionSelect={(section) => setCurrentSection(section as Section)} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onSectionSelect={(section) => setCurrentSection(section as Section)} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-green/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-primary-green border-4 border-orange rounded-2xl max-w-md w-full mx-4 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-cream">Portfolio Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cream hover:text-orange transition-colors"
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
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-all ${
                        currentSection === item.id
                          ? 'bg-orange text-dark-green border-2 border-orange'
                          : 'hover:bg-orange/20 text-cream border-2 border-cream'
                      }`}
                      onClick={() => {
                        setCurrentSection(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      <IconComponent size={24} />
                      <span className="text-lg font-semibold">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Header - Only show on non-home pages */}
      {currentSection !== 'home' && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="page-nav fixed top-0 left-0 right-0 z-40"
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button
              onClick={() => setCurrentSection('home')}
              className="transition-colors"
            >
              <h1 className="nav-title">MATTHEW RADIN</h1>
            </button>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-4">
                {menuItems.filter(item => item.id !== 'home').map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSection(item.id)}
                    className={`px-3 py-2 rounded transition-colors font-semibold ${
                      currentSection === item.id
                        ? 'text-orange'
                        : 'text-cream hover:text-orange'
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
                className="hidden md:flex items-center space-x-2 bg-orange hover:bg-dark-orange text-dark-green px-4 py-2 rounded-lg transition-colors font-semibold"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden bg-orange text-dark-green p-2 rounded"
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.header>
      )}

      {/* Main Content */}
      <main className={currentSection === 'home' ? '' : 'pt-20'}>
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
