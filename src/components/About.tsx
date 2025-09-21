import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, User, Heart, Palette, Eye, FileText } from 'lucide-react';

const About: React.FC = () => {
  const designerStats = [
    { label: 'Years in Game Design', value: '5+', annotation: 'Professional experience' },
    { label: 'Games Created', value: '12+', annotation: 'Shipped & prototyped' },
    { label: 'Player Impact', value: '10K+', annotation: 'Community reached' },
    { label: 'Design Philosophy', value: 'Player-First', annotation: 'Core principle' },
  ];

  const designSkills = [
    { skill: 'Game Design', level: 'Expert', category: 'creative' },
    { skill: 'Problem Solving', level: 'Advanced', category: 'analytical' },
    { skill: 'Team Collaboration', level: 'Advanced', category: 'social' },
    { skill: 'Technical Implementation', level: 'Proficient', category: 'technical' },
  ];

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="heading-sketch text-4xl md:text-6xl mb-6">
          Designer Profile
          <span className="annotation-line"></span>
        </h1>
        <p className="body-text text-xl max-w-3xl mx-auto">

        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Designer Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="design-panel"
        >
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-warm-orange rounded-full flex items-center justify-center sketch-border">
              <User size={64} className="text-warm-cream" />
            </div>
            <h2 className="heading-sketch text-3xl mb-2">Matthew Radin</h2>
            <p className="heading-tech text-xl text-warm-brown mb-4">Game Designer & Developer</p>
            <div className="flex justify-center items-center space-x-4 body-text">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Charlotte, NC | Columbia, SC</span>
              </div>
              <div className="flex items-center">
                <Heart size={16} className="mr-2 text-warm-coral" />
                <span>Passionate Creator</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="heading-tech text-xl font-bold flex items-center">
              <Palette className="mr-2" size={20} />
              Design Skills
              <span className="margin-note">Core competencies</span>
            </h3>
            {designSkills.map((skill, index) => (
              <div key={skill.skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="body-text">{skill.skill}</span>
                  <span className="annotation">{skill.level}</span>
                </div>
                <div className="w-full bg-warm-beige rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${
                      skill.category === 'creative' ? 'bg-warm-coral' : 
                      skill.category === 'analytical' ? 'bg-warm-blue' :
                      skill.category === 'social' ? 'bg-warm-green' :
                      'bg-tech-gray'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '75%' }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats & Biography */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Designer Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {designerStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="tech-panel text-center p-6"
              >
                <div className="heading-tech text-3xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="body-text text-sm mb-1">{stat.label}</div>
                <div className="annotation text-xs">{stat.annotation}</div>
              </motion.div>
            ))}
          </div>

          {/* Biography Panel */}
          <div className="design-panel">
            <h3 className="heading-sketch text-2xl mb-4">
              Designer's Statement
              <span className="margin-note">Personal philosophy</span>
            </h3>
            <div className="space-y-4 body-text">
              <p className="leading-relaxed">
                My name is Matthew Radin. I am an aspiring game designer and developer. I enjoy working with every part of game design, from mechanics to level design to narrative. I've loved video games since I was a kid, and I want to create games that are fun, engaging, and meaningful.
              </p>
              <p className="leading-relaxed">
                I am currently enrolled in the University of South Carolina's Computer Science program, with a minor in Media Arts. My expected graduation date is May 2027. I am eager to apply my skills in real-world projects that challenge and inspire me.
              </p>
              <p className="leading-relaxed">
                
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="design-panel sketch-animation">
            <h3 className="heading-sketch text-xl font-bold mb-4">Professional Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center body-text">
                <Calendar size={16} className="mr-3 text-warm-blue" />
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center body-text">
                <GraduationCap size={16} className="mr-3 text-warm-green" />
                <span>Continuous learning mindset</span>
              </div>
            </div>
          </div>

          {/* Resume View Section */}
          <div className="design-panel sketch-animation">
            <h3 className="heading-sketch text-xl font-bold mb-4 flex items-center">
              <FileText size={20} className="mr-2 text-warm-coral" />
              Professional Resume
              <span className="margin-note">Full details</span>
            </h3>
            <p className="body-text mb-4 text-sm leading-relaxed">
              View my complete resume with detailed information about my experience, education, and technical skills. Opens in a new tab for easy viewing and downloading.
            </p>
            <a
              href="/MatthewRadinResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-warm-coral hover:bg-warm-orange text-warm-cream px-6 py-3 rounded-lg transition-colors sketch-border font-medium"
            >
              <Eye size={18} />
              <span>View Resume PDF</span>
            </a>
            <p className="body-text text-xs mt-2 text-warm-brown/70">
              Opens in new tab • Download option available • Last updated: September 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 