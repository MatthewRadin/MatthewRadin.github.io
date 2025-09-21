import React from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Play, Star, Users, Calendar, Tag, Award } from 'lucide-react';

interface ProjectDetailsProps {
  project: any;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}
      />
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Released':
        return 'from-green-400 to-emerald-500';
      case 'Beta':
        return 'from-blue-400 to-cyan-500';
      case 'In Development':
        return 'from-orange-400 to-yellow-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="game-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8 border-b border-gray-600">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex items-start space-x-6">
            <div className="text-6xl">{project.image}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-white">{project.title}</h1>
                <div className={`bg-gradient-to-r ${getStatusColor(project.status)} text-black px-3 py-1 rounded-full text-sm font-bold`}>
                  {project.status}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {getRatingStars(project.rating)}
                  <span className="text-yellow-400 ml-2">{project.rating}</span>
                </div>
                <div className="flex items-center text-cyan-300">
                  <Users size={16} className="mr-1" />
                  {project.playerCount} players
                </div>
                <div className="flex items-center text-purple-300">
                  <Tag size={16} className="mr-1" />
                  {project.category}
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Play size={18} className="mr-2" />
                  Play Game
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Game Features */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
              <Award className="mr-3" size={24} />
              Game Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.gameFeatures?.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-gray-800/50 p-4 rounded-lg"
                >
                  <Star size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((tech: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gradient-to-r from-gray-700 to-gray-800 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Development Journey */}
          <div>
            <h2 className="text-2xl font-bold text-green-300 mb-4">Development Journey</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                  <div className="text-gray-400">Months Development</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
                  <div className="text-gray-400">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                  <div className="text-gray-400">Hours Invested</div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Philosophy */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Design Philosophy</h2>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                This project embodies my core design principles: player-first experience, intuitive mechanics, and meaningful progression. 
                Every system was crafted to create emergent gameplay moments while maintaining accessibility for players of all skill levels. 
                The design process involved extensive playtesting, iteration, and community feedback to ensure the final product delivers 
                a memorable and engaging experience.
              </p>
            </div>
          </div>

          {/* Lessons Learned */}
          <div>
            <h2 className="text-2xl font-bold text-pink-300 mb-4">Lessons Learned</h2>
            <div className="space-y-3">
              {[
                'Importance of early prototyping and iteration',
                'Balancing complexity with accessibility',
                'The value of consistent playtesting throughout development',
                'Effective communication in cross-functional teams'
              ].map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-gray-800/50 p-4 rounded-lg"
                >
                  <Star size={16} className="text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{lesson}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-600 bg-gray-800/30">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              <Calendar size={16} className="inline mr-2" />
              Last updated: {new Date().toLocaleDateString()}
            </div>
            <div className="flex space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
// ## Technical Architecture
// - **Backend**: Spring Boot 3.2+ with Java 17, Spring Security, WebSocket with STOMP
// - **Database**: PostgreSQL 15+ with JPA/Hibernate, Redis 7+ for caching
// - **Frontend**: React 18+ with TypeScript, Monaco Editor, Redux Toolkit
// - **Real-time Communication**: WebSocket with STOMP protocol, Socket.io client
// - **Security**: JWT tokens, role-based access control
// - **Build & Deployment**: Maven, Docker, Docker Compose

// ## Development Highlights
// - **Real-Time Collaboration**: Implemented WebSocket-based real-time collaboration with presence indicators and cursor tracking
// - **Enterprise Security**: Built secure authentication system using JWT tokens and Spring Security
// - **Scalable Architecture**: Designed scalable database architecture with PostgreSQL and Redis
// - **Advanced Editor**: Integrated Monaco Editor with custom collaboration features
// - **Performance Optimization**: Implemented proper indexing and caching strategies

// ## Advanced Features
// - **Git Integration**: Complete version control system with branching, merging, and collaborative code review workflows
// - **Advanced Collaboration Tools**: Inline comments, code review system, and integrated team communication features
// - **Multi-language Support**: Intelligent language detection, syntax highlighting, and language-specific development tools for 20+ programming languages
// - **Enterprise Features**: Advanced caching strategies, load balancing, and microservices architecture supporting enterprise-level usage`,
//       technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'WebSocket', 'Monaco Editor', 'Spring Security', 'JWT'],
//       githubUrl: 'https://github.com/jwhite135/CodeCollab',
//       liveUrl: '#',
//       duration: '6 months',
//       teamSize: 'Solo',
//       achievements: ['Developed real-time collaborative coding platform with WebSocket technology', 'Implemented enterprise-grade security with JWT and Spring Security', 'Integrated Monaco Editor with custom collaboration features', 'Designed scalable architecture with PostgreSQL and Redis']
//     },
//     'keyquest': {
//       title: 'KeyQuest - Music Learning Application',
//       description: 'A JavaFX-based music learning application for sheet music playing and creating.',
//       longDescription: `KeyQuest is an innovative music learning platform that helps users develop their musical skills through interactive sheet music visualization and practice tools. Developed as part of a collaborative academic project using Agile methodologies.

// ## Project Overview
// This application transforms the traditional music learning experience by providing an interactive interface for practicing and creating sheet music. Users can upload, view, and practice with digital sheet music while receiving real-time feedback.

// ## Key Features
// - **Sheet Music Display**: High-quality rendering of musical notation
// - **Practice Mode**: Interactive practice sessions with tempo control
// - **Music Creation**: Tools for composing and editing sheet music
// - **Progress Tracking**: Monitor learning progress and achievements
// - **Multi-instrument Support**: Piano, guitar, and other instrument layouts

// ## Development Process
// - **Methodology**: Agile/Scrum with 2-week sprints
// - **Team Size**: 5-member development team
// - **Version Control**: GitHub with feature branch workflow
// - **Documentation**: Comprehensive UML diagrams and technical documentation
// - **Testing**: Extensive unit testing with JUnit framework

// ## Technical Implementation
// - **Frontend**: JavaFX for rich user interface
// - **Backend**: Java with custom music processing algorithms
// - **Testing**: JUnit for comprehensive unit testing
// - **Project Management**: GitHub Projects for task tracking
// - **Design**: UML diagrams for system architecture`,
//       technologies: ['Java', 'JavaFX', 'JUnit', 'GitHub Projects', 'UML'],
//       githubUrl: 'https://github.com/jwhite135/KeyQuest',
//       liveUrl: '#',
//       duration: '4 months',
//       teamSize: '5 members',
//                  achievements: ['Developed with 5-member Agile team using Scrum methodology', 'Implemented comprehensive unit testing with JUnit', 'Created intuitive JavaFX user interface for music learning']
//     },
//     'cockbots': {
//       title: 'CockBots - Social Media Application',
//       description: 'A social media application that uses AI to detect and categorize images.',
//       longDescription: `CockBots is an innovative social media platform that leverages artificial intelligence to create a unique posting experience. The application automatically detects and categorizes images, allowing posts with bots while filtering out those without, creating a distinctive social media environment.

// ## Project Overview
// Developed during CockyHacks 2024 hackathon, this application demonstrates the integration of AI technology with social media functionality. The AI system achieves over 90% accuracy in bot detection, making it a standout project in the hackathon.

// ## Key Features
// - **AI Image Detection**: Advanced machine learning algorithms for bot identification
// - **User Registration**: Secure account creation and management
// - **Social Media Functions**: Posting, commenting, and user interaction
// - **Real-time Processing**: Instant image analysis and categorization
// - **User Dashboard**: Personalized feed and interaction history

// ## Technical Architecture
// - **Frontend**: PHP for web interface and user experience
// - **Backend**: Python with TensorFlow for AI processing
// - **Database**: SQL for user data and post management
// - **AI Model**: Custom-trained neural network for image classification
// - **Deployment**: Local server setup with optimized performance

// ## Development Highlights
// - **Hackathon Achievement**: Won "Best in AI" and "Best in Implementation" awards
// - **Time Constraint**: Completed in 32 hours with full team collaboration
// - **AI Accuracy**: Achieved over 90% accuracy in bot detection
// - **Scalable Design**: Architecture supports future feature expansion`,
//       technologies: ['PHP', 'SQL', 'Python', 'TensorFlow', 'AI'],
//       githubUrl: 'https://github.com/ethanhammer/Hackathon-Cock-Bots',
//       liveUrl: '#',
//       duration: '32 hours',
//       teamSize: 'Hackathon Team',
//       achievements: ['Won "Best in AI" Award', 'Won "Best in Implementation" Award', '90%+ AI accuracy achieved']
//     },
//     'portfoliowebsite': {
//       title: 'Portfolio Website',
//       description: 'You\'re looking at it (⚆ᗝ⚆)',
//       longDescription: `A modern, interactive portfolio website designed to showcase my skills and projects in a unique and engaging way. This project demonstrates my ability to create innovative user experiences while maintaining professional standards.

// ## Design Philosophy
// The portfolio is inspired by VS Code's interface, creating a familiar and intuitive experience for developers and recruiters. The design emphasizes both functionality and visual appeal, with smooth animations and responsive layout.

// ## Key Features
// - **VS Code Theme**: Authentic VS Code-inspired interface design
// - **Interactive File Explorer**: Collapsible sidebar with project navigation
// - **Responsive Design**: Optimized for all device sizes
// - **Smooth Animations**: Framer Motion for engaging transitions
// - **Professional Layout**: Clean, modern design suitable for recruitment

// ## Technical Implementation
// - **Frontend Framework**: React with TypeScript for type safety
// - **Styling**: Tailwind CSS for rapid, responsive design
// - **Animations**: Framer Motion for smooth user interactions
// - **Icons**: Lucide React for consistent iconography
// - **Deployment**: Ready for GitHub Pages or similar hosting

// ## Development Process
// - **Design**: Custom VS Code theme implementation
// - **Component Architecture**: Modular React components
// - **State Management**: React hooks for UI state
// - **Performance**: Optimized rendering and animations
// - **Accessibility**: Keyboard navigation and screen reader support`,
//       technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'VS Code Theme'],
//       githubUrl: '#',
//       liveUrl: '#',
//       duration: '2 weeks',
//       teamSize: 'Solo',
//       achievements: ['Custom VS Code theme implementation', 'Responsive design across devices', 'Smooth animations and transitions']
//     },
//     'minesweeper': {
//       title: 'Minesweeper',
//       description: 'Recreated the classic Minesweeper game from scratch with a GUI.',
//       longDescription: `A complete recreation of the classic Minesweeper game, built from the ground up using modern C++ development practices. This project demonstrates strong object-oriented programming principles and game development skills.

// ## Game Features
// - **Classic Gameplay**: Authentic Minesweeper mechanics and rules
// - **Multiple Difficulties**: Beginner, intermediate, and expert levels
// - **GUI Interface**: Intuitive graphical user interface
// - **Score Tracking**: High score system and game statistics
// - **Customizable Settings**: Adjustable board sizes and mine counts

// ## Technical Implementation
// - **Language**: C++ for high-performance game logic
// - **GUI Framework**: Qt for cross-platform user interface
// - **Build System**: CMake for efficient compilation and deployment
// - **Architecture**: Object-oriented design with clear separation of concerns
// - **Testing**: Comprehensive unit tests for game logic

// ## Development Highlights
// - **Object-Oriented Design**: Clean separation between game logic and UI
// - **Performance Optimization**: Efficient algorithms for game state management
// - **Cross-Platform**: Qt framework ensures compatibility across operating systems
// - **Memory Management**: Proper C++ memory handling and resource management
// - **User Experience**: Intuitive controls and responsive interface

// ## Game Architecture
// - **Game Engine**: Custom game loop and state management
// - **Board Management**: Dynamic board generation and mine placement
// - **User Interface**: Event-driven GUI with real-time updates
// - **Input Handling**: Mouse and keyboard interaction processing`,
//       technologies: ['C++', 'Qt', 'CMake', 'Object-Oriented Design'],
//       githubUrl: 'https://github.com/jwhite135/Minesweeper',
//       liveUrl: '#',
//       duration: '3 weeks',
//       teamSize: 'Solo',
//       achievements: ['Complete game implementation', 'Efficient object-oriented architecture', 'Cross-platform compatibility']
//     },
//     'sudokusolver': {
//       title: 'Sudoku Solver',
//       description: 'A web application that generates sudoku boards and solves them efficiently.',
//       longDescription: `An intelligent Sudoku solver that demonstrates advanced algorithm implementation and web development skills. The application generates random Sudoku puzzles and employs sophisticated solving techniques to find solutions efficiently.

// ## Algorithm Overview
// The solver uses a backtracking algorithm with intelligent cell selection, starting with cells that have the fewest potential values. This optimization significantly reduces solving time and demonstrates understanding of algorithmic efficiency.

// ## Key Features
// - **Puzzle Generation**: Random Sudoku board creation with varying difficulties
// - **Smart Solving**: Backtracking algorithm with optimized cell selection
// - **Visual Feedback**: Real-time solving animation and progress indication
// - **Multiple Difficulties**: Easy, medium, and hard puzzle levels
// - **Solution Validation**: Automatic verification of solved puzzles

// ## Technical Implementation
// - **Frontend**: HTML5 and CSS3 for responsive design
// - **Backend Logic**: JavaScript for puzzle generation and solving
// - **Algorithm**: Custom backtracking implementation with optimizations
// - **User Interface**: Clean, intuitive web interface
// - **Performance**: Optimized for fast solving and smooth user experience

// ## Development Process
// - **Algorithm Design**: Custom backtracking with intelligent pruning
// - **User Experience**: Focus on intuitive interface and smooth interactions
// - **Performance Optimization**: Efficient data structures and algorithms
// - **Testing**: Comprehensive testing of puzzle generation and solving
// - **Documentation**: Clear code documentation and algorithm explanation

// ## Solving Strategy
// - **Cell Selection**: Prioritizes cells with fewest possible values
// - **Constraint Propagation**: Eliminates impossible values efficiently
// - **Backtracking**: Systematic search with intelligent backtracking
// - **Validation**: Ensures solution correctness and uniqueness`,
//       technologies: ['HTML', 'CSS', 'JavaScript', 'Backtracking Algorithm'],
//       githubUrl: 'https://github.com/jwhite135/SudokuSolver',
//       liveUrl: '#',
//       duration: '2 weeks',
//       teamSize: 'Solo',
//       achievements: ['Efficient backtracking algorithm', 'Optimized solving performance', 'Clean, responsive interface']
//     }
//   };

//   const project = projects[projectName as keyof typeof projects];

//   if (!project) {
//     return (
//       <div className="p-6 vscode-content">
//         <div className="vscode-terminal p-4">
//           <span className="vscode-keyword">Error:</span> Project not found
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 vscode-content">
//       {/* Header */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-[#cccccc] mb-2">{project.title}</h1>
//         <p className="text-[#cccccc] opacity-80">{project.description}</p>
//       </div>



//       {/* Technologies */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold text-[#cccccc] mb-3">Technologies Used</h2>
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.map((tech, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-[#2a2d2e] text-[#cccccc] rounded text-sm border border-[#3c3c3c]"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Detailed Description */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold text-[#cccccc] mb-3">Project Details</h2>
//         <div className="vscode-terminal p-4">
//           <div className="whitespace-pre-line text-[#cccccc] leading-relaxed">
//             {project.longDescription}
//           </div>
//         </div>
//       </div>

//       {/* Achievements */}
//       <div className="mb-6">
//         <h2 className="text-lg font-semibold text-[#cccccc] mb-3">Key Achievements</h2>
//         <div className="space-y-2">
//           {project.achievements.map((achievement, index) => (
//             <div key={index} className="vscode-terminal p-3">
//               <span className="text-[#cccccc]">• {achievement}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Links */}
//       <div className="flex gap-4">
//         {project.githubUrl !== '#' && (
//           <motion.a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 px-4 py-2 bg-[#3c3c3c] text-[#cccccc] rounded hover:bg-[#4c4c4c] transition-colors duration-300"
//           >
//             <Github className="w-4 h-4" />
//             View on GitHub
//           </motion.a>
//         )}
//         {project.liveUrl !== '#' && (
//           <motion.a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#1177bb] transition-colors duration-300"
//           >
//             <ExternalLink className="w-4 h-4" />
//             Live Demo
//           </motion.a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails; 