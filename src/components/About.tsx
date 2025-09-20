import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, User, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const characterStats = [
    { label: 'Years in Game Design', value: '5+', color: 'from-blue-400 to-cyan-400' },
    { label: 'Games Created', value: '12+', color: 'from-purple-400 to-pink-400' },
    { label: 'Player Impact', value: '10K+', color: 'from-green-400 to-emerald-400' },
    { label: 'Design Level', value: 'Expert', color: 'from-yellow-400 to-orange-400' },
  ];

  const characterTraits = [
    { trait: 'Creativity', level: 95 },
    { trait: 'Problem Solving', level: 90 },
    { trait: 'Team Collaboration', level: 88 },
    { trait: 'Technical Skills', level: 85 },
  ];

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          CHARACTER PROFILE
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Meet the game designer behind the experiences. Explore my journey, skills, and passion for creating engaging interactive worlds.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Character Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="game-panel p-8"
        >
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-cyan-300 mb-2">MATTHEW RADIN</h2>
            <p className="text-xl text-purple-300 mb-4">Game Designer & Developer</p>
            <div className="flex justify-center items-center space-x-4 text-gray-300">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Your Location</span>
              </div>
              <div className="flex items-center">
                <Heart size={16} className="mr-2 text-red-400" />
                <span>Passionate Creator</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-300 flex items-center">
              <Star className="mr-2" size={20} />
              Character Traits
            </h3>
            {characterTraits.map((trait, index) => (
              <div key={trait.trait} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">{trait.trait}</span>
                  <span className="text-cyan-300">{trait.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${trait.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats & Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {characterStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="game-stat-card text-center p-6"
              >
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Biography Panel */}
          <div className="game-panel p-6">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">GAME DESIGNER'S LOG</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Welcome to my digital realm! I'm Matthew Radin, a passionate game designer who believes in the power of interactive experiences to tell stories, solve problems, and bring joy to players worldwide.
              </p>
              <p className="leading-relaxed">
                My journey began with a simple question: "What if games could do more than just entertain?" This curiosity led me to explore game mechanics, narrative design, and player psychology, crafting experiences that resonate on deeper levels.
              </p>
              <p className="leading-relaxed">
                From indie passion projects to collaborative team endeavors, I've honed my skills in game design, level architecture, systems design, and player engagement. Every project is an opportunity to push boundaries and create something memorable.
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="game-panel p-6">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">QUICK STATS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-gray-300">
                <Calendar size={16} className="mr-3 text-purple-400" />
                <span>Available for new quests</span>
              </div>
              <div className="flex items-center text-gray-300">
                <GraduationCap size={16} className="mr-3 text-cyan-400" />
                <span>Continuous Learning Mode</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 