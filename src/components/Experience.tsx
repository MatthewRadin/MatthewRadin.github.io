import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Calendar, MapPin, Award, Zap, Briefcase, Code, Target } from 'lucide-react';

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
      period: 'May 2021 - present (Summer Position)',
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
        return <Trophy className="w-5 h-5" />;
      case 'Mid-Level':
        return <Award className="w-5 h-5" />;
      case 'Junior':
        return <Star className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'High':
        return <Target className="w-4 h-4" />;
      case 'Medium':
        return <Zap className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="experience-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="experience-title">
          PROFESSIONAL EXPERIENCE
        </h1>
        <p className="experience-subtitle">
          My professional journey and career milestones in game development, research, and technology.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {positions.map((position, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="experience-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="experience-header">
              <div className="experience-title-section">
                <h3>{position.title}</h3>
                <div className="experience-company">{position.company}</div>
                <div className="experience-meta">
                  <div className="experience-meta-item">
                    <MapPin size={16} />
                    <span>{position.location}</span>
                  </div>
                  <div className="experience-meta-item">
                    <Calendar size={16} />
                    <span>{position.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-badges">
                <div className="experience-badge badge-seniority">
                  {getSeniorityIcon(position.seniority)}
                  <span style={{ marginLeft: '0.5rem' }}>{position.seniority}</span>
                </div>
                <div className="experience-badge badge-impact">
                  {getImpactIcon(position.impact)}
                  <span style={{ marginLeft: '0.5rem' }}>{position.impact} Impact</span>
                </div>
              </div>
            </div>

            <p className="experience-description">
              {position.description}
            </p>

            <div className="experience-section">
              <h4>
                <Code size={16} />
                Technologies & Skills
              </h4>
              <div className="tech-tags">
                {position.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="experience-section">
              <h4>
                <Trophy size={16} />
                Key Achievements
              </h4>
              <ul className="achievements-list">
                {position.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="achievement-item">
                    <Star size={16} className="achievement-icon" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
