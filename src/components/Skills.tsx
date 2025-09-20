import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Palette, Code, Zap, Target, Users, Brain, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Game Design',
      icon: <Gamepad2 className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Game Mechanics Design', level: 95 },
        { name: 'Level Design', level: 90 },
        { name: 'Narrative Design', level: 88 },
        { name: 'Systems Design', level: 92 },
        { name: 'Player Psychology', level: 85 },
      ]
    },
    {
      title: 'Technical Skills',
      icon: <Code className="w-6 h-6" />,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'Unity', level: 90 },
        { name: 'Unreal Engine', level: 85 },
        { name: 'C#', level: 88 },
        { name: 'JavaScript', level: 80 },
        { name: 'Godot', level: 75 },
      ]
    },
    {
      title: 'Creative Arts',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-400 to-red-500',
      skills: [
        { name: 'Concept Art', level: 80 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Prototyping', level: 92 },
        { name: 'Visual Design', level: 78 },
        { name: 'Animation', level: 70 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Team Leadership', level: 88 },
        { name: 'Project Management', level: 85 },
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Mentoring', level: 82 },
      ]
    }
  ];

  const specialAbilities = [
    {
      name: 'Rapid Prototyping',
      description: 'Quickly transform ideas into playable prototypes',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Player-Centric Design',
      description: 'Focus on player experience and engagement',
      icon: <Target className="w-8 h-8" />,
      color: 'from-red-400 to-pink-500'
    },
    {
      name: 'Systems Thinking',
      description: 'Design interconnected game systems that create emergent gameplay',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      name: 'Innovation Drive',
      description: 'Constantly pushing boundaries and exploring new game mechanics',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          SKILL TREE
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the skills and abilities I've developed throughout my game design journey. Each skill has been honed through real projects and continuous learning.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="game-panel p-6"
          >
            <div className="flex items-center mb-6">
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-300 text-sm font-bold">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Special Abilities */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">SPECIAL ABILITIES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialAbilities.map((ability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
              className="game-panel p-6 text-center hover:scale-105 transition-transform"
            >
              <div className={`bg-gradient-to-r ${ability.color} p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center`}>
                {ability.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{ability.name}</h4>
              <p className="text-gray-300 text-sm">{ability.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skill Points Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="game-panel p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">SKILL POINTS ALLOCATION</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">450</div>
            <div className="text-gray-400">Game Design</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">418</div>
            <div className="text-gray-400">Technical</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">405</div>
            <div className="text-gray-400">Creative Arts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">445</div>
            <div className="text-gray-400">Soft Skills</div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-600">
          <div className="text-2xl font-bold text-yellow-300">Total Skill Points: 1,718</div>
          <div className="text-gray-400 mt-2">Level: Expert Game Designer</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
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
//           <span className="vscode-keyword">public class</span> <span className="vscode-class">Skills</span> &#123;
//         </h2>
//         <p className="text-[#cccccc] text-lg max-w-2xl">
//           <span className="vscode-comment">// A comprehensive overview of my technical expertise and capabilities</span>
//         </p>
//       </motion.div>

//       <div className="grid md:grid-cols-2 gap-6">
//         {skillCategories.map((category, categoryIndex) => (
//           <motion.div
//             key={category.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
//             viewport={{ once: true }}
//             className="vscode-terminal p-4"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="vscode-icon">
//                 {category.icon}
//               </div>
//               <h3 className="text-xl font-semibold vscode-class">{category.title}</h3>
//             </div>

//             <div className="space-y-4">
//               {category.skills.map((skill, skillIndex) => (
//                 <motion.div
//                   key={skill.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-[#cccccc] font-medium vscode-string">"{skill.name}"</span>
//                     <span className="vscode-number text-sm">{skill.level}%</span>
//                   </div>
//                   <div className="vscode-progress">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1, delay: skillIndex * 0.1 }}
//                       viewport={{ once: true }}
//                       className="vscode-progress-bar"
//                     />
//                   </div>
//                 </motion.div>
//               ))}
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
//         <h3 className="text-2xl font-semibold mb-6 vscode-syntax-highlight">
//           <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">String</span>[] <span className="vscode-function">otherTechnologies</span> = &#123;
//         </h3>
//         <div className="flex flex-wrap gap-3">
//           {[
//             'HTML/CSS', 'UML', 'Backtracking Algorithms', 'REST APIs',
//             'MIPS Assembly', 'Godot Engine', 'TypeScript', 'Tailwind CSS'
//           ].map((tech, index) => (
//             <motion.span
//               key={tech}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3, delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="px-4 py-2 bg-[#2a2d2e] text-[#cccccc] rounded text-sm border border-[#3c3c3c] hover:bg-[#37373d] transition-colors duration-300"
//             >
//               <span className="vscode-string">"{tech}"</span>
//             </motion.span>
//           ))}
//         </div>
//         <div className="mt-4 text-[#cccccc]">&#125;;</div>
//       </motion.div>
//     </div>
//   );
// };

// export default Skills; 