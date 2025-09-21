import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, Users } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Mystic Realms RPG',
      description: 'Epic fantasy RPG with branching narratives and complex character progression across multiple mystical realms.',
      icon: '🏰',
      technologies: ['Unity', 'C#', 'Narrative Design', 'World Building'],
      githubUrl: 'https://github.com/matthewradin/mystic-realms',
      liveUrl: 'https://play-mystic-realms.com',
      projectName: 'mystic-realms',
      difficulty: 'Expert',
      status: 'Completed',
      players: '25K+',
      rating: 4.8,
      category: 'RPG',
      gameFeatures: [
        'Branching narrative with 12 different endings',
        'Complex character progression system',
        'Dynamic weather and day/night cycles',
        'Multiplayer guild system'
      ]
    },
    {
      id: 2,
      title: 'Neon Runner Chase',
      description: 'Fast-paced endless runner set in cyberpunk dystopia with procedural generation and rhythm gameplay.',
      icon: '🌃',
      technologies: ['Unreal Engine', 'Blueprint', 'Procedural Gen', 'Audio'],
      githubUrl: 'https://github.com/matthewradin/neon-runner',
      liveUrl: 'https://play-neon-runner.com',
      projectName: 'neon-runner',
      difficulty: 'Advanced',
      status: 'Completed',
      players: '50K+',
      rating: 4.6,
      category: 'Action',
      gameFeatures: [
        'Procedurally generated levels',
        'Rhythm-synchronized gameplay',
        'Customizable character augmentations',
        'Global leaderboards'
      ]
    },
    {
      id: 3,
      title: 'Puzzle Dimensions',
      description: 'Mind-bending puzzle game with multi-dimensional mechanics that rotate and transform the world.',
      icon: '🧩',
      technologies: ['Unity', 'C#', 'Puzzle Design', 'Shaders'],
      githubUrl: 'https://github.com/matthewradin/puzzle-dimensions',
      liveUrl: 'https://play-puzzle-dimensions.com',
      projectName: 'puzzle-dimensions',
      difficulty: 'Intermediate',
      status: 'Completed',
      players: '15K+',
      rating: 4.9,
      category: 'Puzzle',
      gameFeatures: [
        '150 hand-crafted levels',
        'Innovative dimension-shifting mechanics',
        'Progressive difficulty curve',
        'Achievement system'
      ]
    },
    {
      id: 4,
      title: 'Galactic Traders',
      description: 'Space trading simulation with dynamic economy, fleet management, and diplomatic systems.',
      icon: '🚀',
      technologies: ['React', 'Node.js', 'WebGL', 'Economic Sim'],
      githubUrl: 'https://github.com/matthewradin/galactic-traders',
      liveUrl: 'https://play-galactic-traders.com',
      projectName: 'galactic-traders',
      difficulty: 'Advanced',
      status: 'Beta',
      players: '8K+',
      rating: 4.4,
      category: 'Simulation',
      gameFeatures: [
        'Dynamic galactic economy',
        'Fleet customization system',
        'Diplomatic negotiations',
        'Multiplayer trading'
      ]
    },
    {
      id: 5,
      title: 'Spirit Garden',
      description: 'Relaxing garden management game with magical plants and mystical creatures in tranquil realm.',
      icon: '🌺',
      technologies: ['Unity', 'C#', 'Mobile', 'Ambient Design'],
      githubUrl: 'https://github.com/matthewradin/spirit-garden',
      liveUrl: 'https://play-spirit-garden.com',
      projectName: 'spirit-garden',
      difficulty: 'Beginner',
      status: 'Completed',
      players: '30K+',
      rating: 4.7,
      category: 'Casual',
      gameFeatures: [
        'Relaxing garden mechanics',
        'Creature collection system',
        'Seasonal events',
        'Meditation mini-games'
      ]
    },
    {
      id: 6,
      title: 'Quantum Battles',
      description: 'Strategic combat game using quantum mechanics principles for unique tactical gameplay.',
      icon: '⚛️',
      technologies: ['C++', 'Physics Engine', 'AI', 'Strategy'],
      githubUrl: 'https://github.com/matthewradin/quantum-battles',
      liveUrl: 'https://play-quantum-battles.com',
      projectName: 'quantum-battles',
      difficulty: 'Expert',
      status: 'In Development',
      players: '2K+',
      rating: 4.3,
      category: 'Strategy',
      gameFeatures: [
        'Quantum superposition mechanics',
        'AI-driven tactical combat',
        'Physics-based strategies',
        'Multiplayer tournaments'
      ]
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'var(--color-accent)',
      'Intermediate': 'var(--color-secondary)',
      'Advanced': '#ff6b35',
      'Expert': '#e63946'
    };
    return colors[difficulty as keyof typeof colors] || 'var(--color-tertiary)';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return '✅';
      case 'Beta': return '🔄';
      case 'In Development': return '🔨';
      default: return '📋';
    }
  };

  return (
    <div className="level-selector-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="level-selector-title">
          SELECT LEVEL
        </h1>
        <p className="level-selector-subtitle">
          Choose a project to explore. Each level represents a unique game development challenge with different mechanics and technologies.
        </p>
      </motion.div>

      <div className="level-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="level-card"
            onClick={() => handleProjectClick(project)}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="level-number">{project.id}</div>
            
            <div className="level-icon">
              {project.icon}
            </div>

            <h3 className="level-title">{project.title}</h3>
            <p className="level-description">{project.description}</p>

            <div className="level-stats">
              <div className="level-stat">
                <span className="level-stat-value" style={{ color: getDifficultyColor(project.difficulty) }}>
                  {project.difficulty}
                </span>
                <span className="level-stat-label">Difficulty</span>
              </div>
              <div className="level-stat">
                <span className="level-stat-value">{getStatusIcon(project.status)}</span>
                <span className="level-stat-label">{project.status}</span>
              </div>
              <div className="level-stat">
                <span className="level-stat-value">
                  <Users size={16} style={{ display: 'inline' }} /> {project.players}
                </span>
                <span className="level-stat-label">Players</span>
              </div>
            </div>

            <div className="level-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="level-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="level-actions">
              <button 
                className="level-action-btn level-action-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
              >
                <Play size={16} />
                PLAY
              </button>
              <button 
                className="level-action-btn level-action-secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Code size={16} />
                CODE
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
