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