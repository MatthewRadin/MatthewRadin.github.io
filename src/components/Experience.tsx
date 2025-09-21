import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Calendar, MapPin, Award, Zap, Briefcase, FileText } from 'lucide-react';

const Experience: React.FC = () => {
  const positions = [
    {
      title: 'Undergraduate Artificial Intelligence Research Assistant',
      company: 'University of South Carolina',
      location: 'Columbia, SC',
      period: 'Aug. 2024 - Sep. 2025',
      description: 'Working with a mentor from the South Carolina Honors College, I am exploring the intersection of game design and artificial intelligence.',
      technologies: ['Unity', 'C#', 'Game Design', 'Reinforcement Learning'],
      achievements: [
        'Awarded a competitive undergraduate research grant to design and implement a reinforcement-learning AI system',
        'Developed a full Unity C# recreation of Super Mario Bros., integrating AI character control',
      ],
      seniority: 'Senior',
      impact: 'High',
      category: 'design'
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'University of South Carolina',
      location: 'Columbia, SC',
      period: 'Sep. 2025 - present',
      description: 'Worked with a mentor from the South Carolina Honors College to make a platform for teaching computer architecture concepts to students through interactive simulations and visualizations.',
      technologies: ['Godot', 'C++', 'MIPS-assembly', 'UI/UX'],
      achievements: [
        'Engineered a full MIPS32 Interpreter in C++ with Godot, simulating 100+ instructions, memory, and register operations',
        'Enhanced a virtual machine build for real-time flow simulation, improving student learning outcomes',
        'Conducted prototype testing with classroom students, collecting survey-based usability data'
      ],
      seniority: 'Mid-Level',
      impact: 'Medium',
      category: 'development'
    },
    {
      title: 'Food and Beverage Preparation',
      company: 'Levi Restaurants',
      location: 'On-site',
      period: 'May 2021 - present (Summer Postion)',
      description: 'Worked concerts and sporting events, providing excellent customer service and ensuring smooth operations.',
      technologies: ['Customer Service', 'Teamwork', 'Problem Solving'],
      achievements: [
        'Delivered customer service to thousands of patrons per event in a high-volume stadium environment',
        'Trained and mentored new staff on service standards, workplace safety, and efficiency',
        'Resolved customer issues promptly, maintaining a positive experience'
      ],
      seniority: 'Junior',
      impact: 'Medium',
      category: 'analysis'
    }
  ];

  const getSeniorityIcon = (seniority: string) => {
    switch (seniority) {
      case 'Senior':
        return <Trophy className="w-6 h-6" />;
      case 'Mid-Level':
        return <Award className="w-6 h-6" />;
      case 'Junior':
        return <Star className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
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
          Professional Experience
          <span className="annotation-line"></span>
        </h1>
        <p className="body-text text-xl max-w-3xl mx-auto">
          My professional journey and milestones I've taken in my career
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {positions.map((position, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="design-panel sketch-animation relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
          >
            {/* Seniority Badge */}
            <div className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2 bg-warm-coral text-warm-cream">
              {getSeniorityIcon(position.seniority)}
              <span>{position.seniority}</span>
            </div>

            {/* Impact Indicator */}
            <div className="absolute top-4 left-4 bg-warm-blue text-warm-cream px-3 py-1 rounded-full text-sm font-semibold">
              {position.impact} Impact
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-2 heading-sketch">
                {position.title}
                <span className="margin-note">{position.period}</span>
              </h3>
              <div className="flex flex-wrap items-center gap-4 body-text mb-4">
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-2 text-warm-brown" />
                  <span className="font-semibold">{position.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-warm-green" />
                  <span>{position.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-warm-blue" />
                  <span>{position.period}</span>
                </div>
              </div>

              <p className="body-text mb-6 leading-relaxed">
                {position.description}
              </p>

              {/* Technology Tags */}
              <div className="mb-6">
                <h4 className="heading-tech text-lg font-semibold mb-3 flex items-center">
                  <FileText size={18} className="mr-2" />
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {position.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm bg-warm-beige text-warm-brown border border-warm-brown/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievement List */}
              <div>
                <h4 className="heading-tech text-lg font-semibold mb-3 flex items-center">
                  <Trophy size={18} className="mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {position.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                      className="flex items-start body-text"
                    >
                      <Star size={16} className="text-warm-coral mr-3 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Career Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="design-panel sketch-animation max-w-2xl mx-auto">
          <h3 className="heading-sketch text-2xl font-bold mb-6">Career Overview</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="heading-sketch text-3xl font-bold mb-2">Research</div>
              <div className="annotation">Academic Focus</div>
            </div>
            <div className="text-center">
              <div className="heading-sketch text-3xl font-bold mb-2">Innovation</div>
              <div className="annotation">AI Integration</div>
            </div>
            <div className="text-center">
              <div className="heading-sketch text-3xl font-bold mb-2">Education</div>
              <div className="annotation">Teaching Tools</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
