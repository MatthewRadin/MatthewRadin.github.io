import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectDetailsProps {
  projectName: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectName }) => {
  const projects = {
    'codecollab': {
      title: 'CodeCollab - Real-Time Collaborative Coding Platform',
      description: 'A comprehensive real-time collaborative coding platform built with Spring Boot and React, featuring WebSocket-based collaboration and Monaco Editor integration.',
      longDescription: `CodeCollab is an innovative real-time collaborative coding platform that enables multiple developers to simultaneously edit code files with live synchronization. Built with enterprise-grade architecture, this project aims to be the "Google Docs for developers" - a comprehensive platform where teams can write, review, and collaborate on code in real-time.

## Project Overview
This fully realized platform transforms the way developers collaborate by providing real-time code editing capabilities with advanced features like presence indicators, cursor tracking, and operational transformation algorithms. The system ensures seamless multi-user editing experience while maintaining code integrity and performance. The platform includes comprehensive version control, advanced collaboration tools, and enterprise-grade features that make it a complete solution for team development.

## Key Features
- **Real-Time Collaboration**: WebSocket-based live synchronization with multiple users
- **Monaco Editor Integration**: VS Code's editor engine with custom collaboration features
- **Presence Indicators**: Visual feedback showing who's currently editing
- **Cursor Tracking**: Real-time display of other users' cursor positions
- **Conflict Resolution**: Operational transformation algorithms for seamless collaboration
- **Secure Authentication**: JWT-based authentication with Spring Security
- **Workspace Management**: Organized project structure with team permissions
- **Git Integration**: Complete version control with branching, merging, and collaborative code review
- **Advanced Collaboration Tools**: Inline comments, code review system, and team communication
- **Multi-language Support**: Intelligent language detection and syntax highlighting for 20+ programming languages

## Technical Architecture
- **Backend**: Spring Boot 3.2+ with Java 17, Spring Security, WebSocket with STOMP
- **Database**: PostgreSQL 15+ with JPA/Hibernate, Redis 7+ for caching
- **Frontend**: React 18+ with TypeScript, Monaco Editor, Redux Toolkit
- **Real-time Communication**: WebSocket with STOMP protocol, Socket.io client
- **Security**: JWT tokens, role-based access control
- **Build & Deployment**: Maven, Docker, Docker Compose

## Development Highlights
- **Real-Time Collaboration**: Implemented WebSocket-based real-time collaboration with presence indicators and cursor tracking
- **Enterprise Security**: Built secure authentication system using JWT tokens and Spring Security
- **Scalable Architecture**: Designed scalable database architecture with PostgreSQL and Redis
- **Advanced Editor**: Integrated Monaco Editor with custom collaboration features
- **Performance Optimization**: Implemented proper indexing and caching strategies

## Advanced Features
- **Git Integration**: Complete version control system with branching, merging, and collaborative code review workflows
- **Advanced Collaboration Tools**: Inline comments, code review system, and integrated team communication features
- **Multi-language Support**: Intelligent language detection, syntax highlighting, and language-specific development tools for 20+ programming languages
- **Enterprise Features**: Advanced caching strategies, load balancing, and microservices architecture supporting enterprise-level usage`,
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'WebSocket', 'Monaco Editor', 'Spring Security', 'JWT'],
      githubUrl: 'https://github.com/jwhite135/CodeCollab',
      liveUrl: '#',
      duration: '6 months',
      teamSize: 'Solo',
      achievements: ['Developed real-time collaborative coding platform with WebSocket technology', 'Implemented enterprise-grade security with JWT and Spring Security', 'Integrated Monaco Editor with custom collaboration features', 'Designed scalable architecture with PostgreSQL and Redis']
    },
    'keyquest': {
      title: 'KeyQuest - Music Learning Application',
      description: 'A JavaFX-based music learning application for sheet music playing and creating.',
      longDescription: `KeyQuest is an innovative music learning platform that helps users develop their musical skills through interactive sheet music visualization and practice tools. Developed as part of a collaborative academic project using Agile methodologies.

## Project Overview
This application transforms the traditional music learning experience by providing an interactive interface for practicing and creating sheet music. Users can upload, view, and practice with digital sheet music while receiving real-time feedback.

## Key Features
- **Sheet Music Display**: High-quality rendering of musical notation
- **Practice Mode**: Interactive practice sessions with tempo control
- **Music Creation**: Tools for composing and editing sheet music
- **Progress Tracking**: Monitor learning progress and achievements
- **Multi-instrument Support**: Piano, guitar, and other instrument layouts

## Development Process
- **Methodology**: Agile/Scrum with 2-week sprints
- **Team Size**: 5-member development team
- **Version Control**: GitHub with feature branch workflow
- **Documentation**: Comprehensive UML diagrams and technical documentation
- **Testing**: Extensive unit testing with JUnit framework

## Technical Implementation
- **Frontend**: JavaFX for rich user interface
- **Backend**: Java with custom music processing algorithms
- **Testing**: JUnit for comprehensive unit testing
- **Project Management**: GitHub Projects for task tracking
- **Design**: UML diagrams for system architecture`,
      technologies: ['Java', 'JavaFX', 'JUnit', 'GitHub Projects', 'UML'],
      githubUrl: 'https://github.com/jwhite135/KeyQuest',
      liveUrl: '#',
      duration: '4 months',
      teamSize: '5 members',
                 achievements: ['Developed with 5-member Agile team using Scrum methodology', 'Implemented comprehensive unit testing with JUnit', 'Created intuitive JavaFX user interface for music learning']
    },
    'cockbots': {
      title: 'CockBots - Social Media Application',
      description: 'A social media application that uses AI to detect and categorize images.',
      longDescription: `CockBots is an innovative social media platform that leverages artificial intelligence to create a unique posting experience. The application automatically detects and categorizes images, allowing posts with bots while filtering out those without, creating a distinctive social media environment.

## Project Overview
Developed during CockyHacks 2024 hackathon, this application demonstrates the integration of AI technology with social media functionality. The AI system achieves over 90% accuracy in bot detection, making it a standout project in the hackathon.

## Key Features
- **AI Image Detection**: Advanced machine learning algorithms for bot identification
- **User Registration**: Secure account creation and management
- **Social Media Functions**: Posting, commenting, and user interaction
- **Real-time Processing**: Instant image analysis and categorization
- **User Dashboard**: Personalized feed and interaction history

## Technical Architecture
- **Frontend**: PHP for web interface and user experience
- **Backend**: Python with TensorFlow for AI processing
- **Database**: SQL for user data and post management
- **AI Model**: Custom-trained neural network for image classification
- **Deployment**: Local server setup with optimized performance

## Development Highlights
- **Hackathon Achievement**: Won "Best in AI" and "Best in Implementation" awards
- **Time Constraint**: Completed in 32 hours with full team collaboration
- **AI Accuracy**: Achieved over 90% accuracy in bot detection
- **Scalable Design**: Architecture supports future feature expansion`,
      technologies: ['PHP', 'SQL', 'Python', 'TensorFlow', 'AI'],
      githubUrl: 'https://github.com/ethanhammer/Hackathon-Cock-Bots',
      liveUrl: '#',
      duration: '32 hours',
      teamSize: 'Hackathon Team',
      achievements: ['Won "Best in AI" Award', 'Won "Best in Implementation" Award', '90%+ AI accuracy achieved']
    },
    'portfoliowebsite': {
      title: 'Portfolio Website',
      description: 'You\'re looking at it (⚆ᗝ⚆)',
      longDescription: `A modern, interactive portfolio website designed to showcase my skills and projects in a unique and engaging way. This project demonstrates my ability to create innovative user experiences while maintaining professional standards.

## Design Philosophy
The portfolio is inspired by VS Code's interface, creating a familiar and intuitive experience for developers and recruiters. The design emphasizes both functionality and visual appeal, with smooth animations and responsive layout.

## Key Features
- **VS Code Theme**: Authentic VS Code-inspired interface design
- **Interactive File Explorer**: Collapsible sidebar with project navigation
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion for engaging transitions
- **Professional Layout**: Clean, modern design suitable for recruitment

## Technical Implementation
- **Frontend Framework**: React with TypeScript for type safety
- **Styling**: Tailwind CSS for rapid, responsive design
- **Animations**: Framer Motion for smooth user interactions
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Ready for GitHub Pages or similar hosting

## Development Process
- **Design**: Custom VS Code theme implementation
- **Component Architecture**: Modular React components
- **State Management**: React hooks for UI state
- **Performance**: Optimized rendering and animations
- **Accessibility**: Keyboard navigation and screen reader support`,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'VS Code Theme'],
      githubUrl: '#',
      liveUrl: '#',
      duration: '2 weeks',
      teamSize: 'Solo',
      achievements: ['Custom VS Code theme implementation', 'Responsive design across devices', 'Smooth animations and transitions']
    },
    'minesweeper': {
      title: 'Minesweeper',
      description: 'Recreated the classic Minesweeper game from scratch with a GUI.',
      longDescription: `A complete recreation of the classic Minesweeper game, built from the ground up using modern C++ development practices. This project demonstrates strong object-oriented programming principles and game development skills.

## Game Features
- **Classic Gameplay**: Authentic Minesweeper mechanics and rules
- **Multiple Difficulties**: Beginner, intermediate, and expert levels
- **GUI Interface**: Intuitive graphical user interface
- **Score Tracking**: High score system and game statistics
- **Customizable Settings**: Adjustable board sizes and mine counts

## Technical Implementation
- **Language**: C++ for high-performance game logic
- **GUI Framework**: Qt for cross-platform user interface
- **Build System**: CMake for efficient compilation and deployment
- **Architecture**: Object-oriented design with clear separation of concerns
- **Testing**: Comprehensive unit tests for game logic

## Development Highlights
- **Object-Oriented Design**: Clean separation between game logic and UI
- **Performance Optimization**: Efficient algorithms for game state management
- **Cross-Platform**: Qt framework ensures compatibility across operating systems
- **Memory Management**: Proper C++ memory handling and resource management
- **User Experience**: Intuitive controls and responsive interface

## Game Architecture
- **Game Engine**: Custom game loop and state management
- **Board Management**: Dynamic board generation and mine placement
- **User Interface**: Event-driven GUI with real-time updates
- **Input Handling**: Mouse and keyboard interaction processing`,
      technologies: ['C++', 'Qt', 'CMake', 'Object-Oriented Design'],
      githubUrl: 'https://github.com/jwhite135/Minesweeper',
      liveUrl: '#',
      duration: '3 weeks',
      teamSize: 'Solo',
      achievements: ['Complete game implementation', 'Efficient object-oriented architecture', 'Cross-platform compatibility']
    },
    'sudokusolver': {
      title: 'Sudoku Solver',
      description: 'A web application that generates sudoku boards and solves them efficiently.',
      longDescription: `An intelligent Sudoku solver that demonstrates advanced algorithm implementation and web development skills. The application generates random Sudoku puzzles and employs sophisticated solving techniques to find solutions efficiently.

## Algorithm Overview
The solver uses a backtracking algorithm with intelligent cell selection, starting with cells that have the fewest potential values. This optimization significantly reduces solving time and demonstrates understanding of algorithmic efficiency.

## Key Features
- **Puzzle Generation**: Random Sudoku board creation with varying difficulties
- **Smart Solving**: Backtracking algorithm with optimized cell selection
- **Visual Feedback**: Real-time solving animation and progress indication
- **Multiple Difficulties**: Easy, medium, and hard puzzle levels
- **Solution Validation**: Automatic verification of solved puzzles

## Technical Implementation
- **Frontend**: HTML5 and CSS3 for responsive design
- **Backend Logic**: JavaScript for puzzle generation and solving
- **Algorithm**: Custom backtracking implementation with optimizations
- **User Interface**: Clean, intuitive web interface
- **Performance**: Optimized for fast solving and smooth user experience

## Development Process
- **Algorithm Design**: Custom backtracking with intelligent pruning
- **User Experience**: Focus on intuitive interface and smooth interactions
- **Performance Optimization**: Efficient data structures and algorithms
- **Testing**: Comprehensive testing of puzzle generation and solving
- **Documentation**: Clear code documentation and algorithm explanation

## Solving Strategy
- **Cell Selection**: Prioritizes cells with fewest possible values
- **Constraint Propagation**: Eliminates impossible values efficiently
- **Backtracking**: Systematic search with intelligent backtracking
- **Validation**: Ensures solution correctness and uniqueness`,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Backtracking Algorithm'],
      githubUrl: 'https://github.com/jwhite135/SudokuSolver',
      liveUrl: '#',
      duration: '2 weeks',
      teamSize: 'Solo',
      achievements: ['Efficient backtracking algorithm', 'Optimized solving performance', 'Clean, responsive interface']
    }
  };

  const project = projects[projectName as keyof typeof projects];

  if (!project) {
    return (
      <div className="p-6 vscode-content">
        <div className="vscode-terminal p-4">
          <span className="vscode-keyword">Error:</span> Project not found
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 vscode-content">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#cccccc] mb-2">{project.title}</h1>
        <p className="text-[#cccccc] opacity-80">{project.description}</p>
      </div>



      {/* Technologies */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#cccccc] mb-3">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#2a2d2e] text-[#cccccc] rounded text-sm border border-[#3c3c3c]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Detailed Description */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#cccccc] mb-3">Project Details</h2>
        <div className="vscode-terminal p-4">
          <div className="whitespace-pre-line text-[#cccccc] leading-relaxed">
            {project.longDescription}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#cccccc] mb-3">Key Achievements</h2>
        <div className="space-y-2">
          {project.achievements.map((achievement, index) => (
            <div key={index} className="vscode-terminal p-3">
              <span className="text-[#cccccc]">• {achievement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.githubUrl !== '#' && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#3c3c3c] text-[#cccccc] rounded hover:bg-[#4c4c4c] transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </motion.a>
        )}
        {project.liveUrl !== '#' && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#1177bb] transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails; 