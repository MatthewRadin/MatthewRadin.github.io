import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Play, Trophy, Star, Eye } from 'lucide-react';
import ProjectDetails from './ProjectDetails';

interface ProjectsProps {
  onProjectClick?: (projectName: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Mystic Realms: The Ancient Prophecy',
      description: 'An epic fantasy RPG featuring branching narratives, complex character progression, and immersive world-building. Players embark on a journey to fulfill an ancient prophecy across multiple mystical realms.',
      image: '🏰',
      technologies: ['Unity', 'C#', 'Narrative Design', 'World Building', 'Character Systems'],
      githubUrl: 'https://github.com/matthewradin/mystic-realms',
      liveUrl: 'https://play-mystic-realms.com',
      featured: true,
      projectName: 'mystic-realms',
      category: 'RPG',
      status: 'Released',
      playerCount: '25K+',
      rating: 4.8,
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      gameFeatures: [
        'Branching narrative with 12 different endings',
        'Complex character progression system',
        'Dynamic weather and day/night cycles',
        'Multiplayer guild system'
      ]
    },
    {
      title: 'Neon Runner: Cyberpunk Chase',
      description: 'A fast-paced endless runner set in a cyberpunk dystopia. Features procedural level generation, rhythm-based gameplay, and stunning neon aesthetics.',
      image: '🌃',
      technologies: ['Unreal Engine', 'Blueprint', 'Procedural Generation', 'Audio Design'],
      githubUrl: 'https://github.com/matthewradin/neon-runner',
      liveUrl: 'https://play-neon-runner.com',
      featured: true,
      projectName: 'neon-runner',
      category: 'Action',
      status: 'Released',
      playerCount: '50K+',
      rating: 4.6,
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      gameFeatures: [
        'Procedurally generated levels',
        'Rhythm-synchronized gameplay',
        'Customizable character augmentations',
        'Global leaderboards'
      ]
    },
    {
      title: 'Puzzle Dimensions',
      description: 'A mind-bending puzzle game that challenges players to think in multiple dimensions. Features innovative mechanics that rotate and transform the game world.',
      image: '🧩',
      technologies: ['Unity', 'C#', 'Puzzle Design', 'Shader Programming', 'Level Design'],
      githubUrl: 'https://github.com/matthewradin/puzzle-dimensions',
      liveUrl: 'https://play-puzzle-dimensions.com',
      featured: true,
      projectName: 'puzzle-dimensions',
      category: 'Puzzle',
      status: 'Released',
      playerCount: '15K+',
      rating: 4.9,
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      gameFeatures: [
        '150 hand-crafted levels',
        'Innovative dimension-shifting mechanics',
        'Progressive difficulty curve',
        'Achievement system'
      ]
    },
    {
      title: 'Galactic Traders',
      description: 'A space trading simulation where players build trading empires across the galaxy. Features dynamic economy, fleet management, and diplomatic systems.',
      image: '🚀',
      technologies: ['JavaScript', 'React', 'Node.js', 'WebGL', 'Economic Simulation'],
      githubUrl: 'https://github.com/matthewradin/galactic-traders',
      liveUrl: 'https://play-galactic-traders.com',
      featured: false,
      projectName: 'galactic-traders',
      category: 'Simulation',
      status: 'Beta',
      playerCount: '8K+',
      rating: 4.4,
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      gameFeatures: [
        'Dynamic galactic economy',
        'Fleet customization system',
        'Diplomatic negotiations',
        'Multiplayer trading'
      ]
    },
    {
      title: 'Spirit Garden',
      description: 'A relaxing garden management game where players cultivate magical plants and care for mystical creatures in a tranquil spirit realm.',
      image: '🌺',
      technologies: ['Unity', 'C#', 'Procedural Animation', 'Ambient Design', 'Mobile Optimization'],
      githubUrl: 'https://github.com/matthewradin/spirit-garden',
      liveUrl: 'https://play-spirit-garden.com',
      featured: false,
      projectName: 'spirit-garden',
      category: 'Casual',
      status: 'Released',
      playerCount: '30K+',
      rating: 4.7,
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      gameFeatures: [
        'Relaxing garden mechanics',
        'Creature collection system',
        'Seasonal events',
        'Meditation mini-games'
      ]
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    if (onProjectClick) {
      onProjectClick(project.projectName);
    }
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}
      />
    ));
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      'Released': { color: 'bg-warm-green', text: 'text-warm-cream' },
      'Beta': { color: 'bg-warm-blue', text: 'text-warm-cream' },
      'In Development': { color: 'bg-warm-coral', text: 'text-warm-cream' }
    };
    return badges[status as keyof typeof badges] || { color: 'bg-tech-gray', text: 'text-tech-white' };
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="heading-sketch text-4xl md:text-6xl mb-6">
          Project Gallery
          <span className="annotation-line"></span>
        </h1>
        <p className="body-text text-xl max-w-3xl mx-auto">
          Explore my collection of game projects spanning multiple genres and platforms. Each game represents a unique design challenge and creative solution.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="mb-12">
        <h2 className="heading-tech text-2xl font-bold mb-6 flex items-center">
          <Trophy className="mr-3" size={24} />
          Featured Projects
          <span className="margin-note">Portfolio highlights</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="design-panel sketch-animation cursor-pointer hover:shadow-lg transition-all"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative mb-6">
                <div className="text-6xl text-center py-8 bg-warm-beige rounded-xl sketch-border">
                  {project.image}
                </div>
                <div className={`absolute top-2 right-2 ${getStatusBadge(project.status).color} ${getStatusBadge(project.status).text} px-3 py-1 rounded-full text-xs font-bold`}>
                  {project.status}
                </div>
              </div>

              <h3 className="heading-sketch text-xl font-bold mb-2">{project.title}</h3>
              <p className="body-text text-sm mb-4 line-clamp-3">{project.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {getRatingStars(project.rating)}
                  <span className="annotation ml-2 text-sm">{project.rating}</span>
                </div>
                <div className="flex items-center annotation text-sm">
                  <Eye size={14} className="mr-1" />
                  {project.playerCount}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-warm-beige text-warm-brown px-2 py-1 rounded text-xs border border-warm-brown/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="annotation text-xs">+{project.technologies.length - 3} more</span>
                )}
              </div>

              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-tech-gray hover:bg-tech-dark text-tech-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-warm-coral hover:bg-warm-orange text-warm-cream py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Play size={16} className="mr-2" />
                  Play
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h2 className="heading-tech text-2xl font-bold mb-6">
          Additional Projects
          <span className="margin-note">Extended portfolio</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="design-panel sketch-animation cursor-pointer hover:shadow-md transition-all"
              onClick={() => handleProjectClick(project)}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{project.image}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="heading-sketch text-lg font-bold">{project.title}</h3>
                    <div className={`${getStatusBadge(project.status).color} ${getStatusBadge(project.status).text} px-2 py-1 rounded text-xs font-bold`}>
                      {project.status}
                    </div>
                  </div>
                  <p className="body-text text-sm mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {getRatingStars(project.rating)}
                      <span className="annotation ml-2 text-sm">{project.rating}</span>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tech-gray hover:text-tech-dark transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-coral hover:text-warm-orange transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
//       technologies: ['C++', 'Qt', 'CMake', 'Object-Oriented Design'],
//       githubUrl: 'https://github.com/jwhite135/Minesweeper',
//       featured: false,
//       projectName: 'minesweeper'
//     },
//     {
//       title: 'Sudoku Solver',
//       description: 'A web application that generates sudoku boards using randomly generated numbers and implements a backtracking algorithm to solve them efficiently.',
//       image: '🧩',
//       technologies: ['HTML', 'CSS', 'JavaScript', 'Backtracking Algorithm'],
//       githubUrl: 'https://github.com/jwhite135/SudokuSolver',
//       featured: false,
//       projectName: 'sudokusolver'
//     }
//   ];

//   return (
//     <div className="p-6 vscode-content">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mb-8"
//       >
//         <h2 className="text-3xl font-bold mb-4 vscode-syntax-highlight">
//           <span className="vscode-keyword">public class</span> <span className="vscode-class">Projects</span> &#123;
//         </h2>
//         <p className="text-[#cccccc] text-lg max-w-2xl">
//           <span className="vscode-comment">// A showcase of my recent work and technical achievements</span>
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className={`vscode-terminal overflow-hidden flex flex-col ${
//               project.featured ? 'ring-2 ring-[#007acc]' : ''
//             }`}
//           >
//             <div className="vscode-title-bar flex items-center justify-between p-3">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm font-medium">{project.title}</span>
//               </div>
//               {project.featured && (
//                 <span className="vscode-badge">Featured</span>
//               )}
//             </div>

//             <div className="p-4 flex flex-col flex-1">
//               <div className="h-32 bg-[#2a2d2e] flex items-center justify-center mb-4 rounded">
//                 <span className="text-4xl">{project.image}</span>
//               </div>

//               <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-2 py-1 bg-[#2a2d2e] text-[#cccccc] text-xs rounded border border-[#3c3c3c]"
//                   >
//                     <span className="vscode-string">"{tech}"</span>
//                   </span>
//                 ))}
//               </div>

//               <div className="flex-grow"></div>

//               <div className="flex gap-2">
//                 {onProjectClick && (
//                   <motion.button
//                     onClick={() => onProjectClick(project.projectName)}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center gap-2 px-3 py-2 bg-[#007acc] text-white rounded text-sm hover:bg-[#1177bb] transition-colors duration-300"
//                   >
//                     <BookOpen className="w-4 h-4" />
//                     Read More
//                   </motion.button>
//                 )}
//                 <motion.a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="flex items-center gap-2 px-3 py-2 bg-[#3c3c3c] text-[#cccccc] rounded text-sm hover:bg-[#4c4c4c] transition-colors duration-300"
//                 >
//                   <Github className="w-4 h-4" />
//                   Github Repo
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects; 