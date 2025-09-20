import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Calendar, MapPin, Award, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const achievements = [
    {
      title: 'Senior Game Designer',
      company: 'Indie Game Studio',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading the design of innovative game mechanics and player experiences. Spearheading projects from concept to release, focusing on narrative-driven gameplay and player engagement.',
      technologies: ['Unity', 'C#', 'Game Design', 'Narrative Design', 'Player Analytics'],
      achievements: [
        'Designed and launched 3 successful indie games with 50K+ downloads',
        'Increased player retention by 35% through innovative progression systems',
        'Led a team of 8 developers and artists in cross-functional collaboration'
      ],
      level: 'LEGENDARY',
      xp: 2500,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Game Designer & Developer',
      company: 'Creative Collective',
      location: 'Hybrid',
      period: '2021 - 2023',
      description: 'Developed game prototypes and implemented core gameplay systems. Specialized in puzzle mechanics, level design, and player onboarding experiences.',
      technologies: ['Unreal Engine', 'Blueprint', 'Level Design', 'Playtesting', 'UI/UX'],
      achievements: [
        'Prototyped 15+ game concepts with focus on accessibility and inclusion',
        'Reduced tutorial completion time by 40% through improved UX design',
        'Collaborated with artists and programmers to create cohesive game experiences'
      ],
      level: 'EXPERT',
      xp: 1800,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Junior Game Designer',
      company: 'Mobile Games Inc.',
      location: 'On-site',
      period: '2020 - 2021',
      description: 'Started my professional journey in game design, focusing on mobile game mechanics and free-to-play monetization strategies.',
      technologies: ['Mobile Games', 'Monetization', 'A/B Testing', 'Data Analysis'],
      achievements: [
        'Designed daily challenges that increased DAU by 25%',
        'Implemented progression systems for casual mobile games',
        'Analyzed player data to optimize game balance and difficulty curves'
      ],
      level: 'SKILLED',
      xp: 1200,
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'LEGENDARY':
        return <Trophy className="w-6 h-6" />;
      case 'EXPERT':
        return <Award className="w-6 h-6" />;
      case 'SKILLED':
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          ACHIEVEMENTS UNLOCKED
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Track my professional journey through the game design industry. Each role represents a new level of expertise and impact.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {achievements.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="game-panel p-8 relative overflow-hidden"
          >
            {/* Level Badge */}
            <div className={`absolute top-4 right-4 bg-gradient-to-r ${exp.color} text-black px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2`}>
              {getLevelIcon(exp.level)}
              <span>{exp.level}</span>
            </div>

            {/* XP Points */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              +{exp.xp} XP
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-2 text-purple-400" />
                  <span className="font-semibold">{exp.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-green-400" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-yellow-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Technology Tags */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-pink-300 mb-3">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-gray-700 to-gray-800 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievement List */}
              <div>
                <h4 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center">
                  <Trophy size={18} className="mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                      className="flex items-start text-gray-300"
                    >
                      <Star size={16} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
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
        <div className="game-panel p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-cyan-300 mb-6">CAREER PROGRESSION</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100K+</div>
              <div className="text-gray-400">Players Reached</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

//       <div className="space-y-6">
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={exp.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="vscode-terminal p-4"
//           >
//             <div className="flex items-start justify-between mb-4">
//               <div>
//                 <h3 className="text-xl font-semibold text-[#cccccc] mb-1">{exp.title}</h3>
//                 <div className="flex items-center gap-4 text-[#6a6a6a] text-sm">
//                   <div className="flex items-center gap-1">
//                     <Briefcase className="w-4 h-4" />
//                     <span>{exp.company}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     <span>{exp.location}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     <span>{exp.period}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
//               {exp.description}
//             </p>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {exp.technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-2 py-1 bg-[#2a2d2e] text-[#cccccc] text-xs rounded border border-[#3c3c3c]"
//                 >
//                   <span className="vscode-string">"{tech}"</span>
//                 </span>
//               ))}
//             </div>

//             <div className="space-y-2">
//               <h4 className="text-sm font-semibold text-[#cccccc]">Key Achievements:</h4>
//               <ul className="space-y-1">
//                 {exp.achievements.map((achievement, idx) => (
//                   <li key={idx} className="text-[#cccccc] text-sm flex items-start gap-2">
//                     <span className="vscode-icon mt-1">•</span>
//                     <span>{achievement}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="mt-8"
//       >
//         <h3 className="text-2xl font-bold mb-6 vscode-syntax-highlight">
//           <span className="vscode-keyword">public class</span> <span className="vscode-class">Education</span> &#123;
//         </h3>
        
//         <div className="vscode-terminal p-4">
//           <div className="font-mono text-sm space-y-2">
//             <div>
//               <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">String</span> <span className="vscode-function">degree</span> = <span className="vscode-string">"Bachelor of Science in Computer Science"</span>;
//             </div>
//             <div>
//               <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">String</span> <span className="vscode-function">institution</span> = <span className="vscode-string">"University of South Carolina"</span>;
//             </div>
//             <div>
//               <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">int</span> <span className="vscode-function">graduating</span> = <span className="vscode-number">2027</span>;
//             </div>
//             <div>
//               <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">double</span> <span className="vscode-function">gpa</span> = <span className="vscode-number">4.0</span>;
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Experience; 