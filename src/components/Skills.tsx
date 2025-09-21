import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Palette, Code, Zap, Target, Users, Brain, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Game Design',
      icon: <Gamepad2 className="w-6 h-6" />,
      category: 'creative',
      skills: [
        { name: 'Game Mechanics Design', level: 'Expert' },
        { name: 'Level Design', level: 'Advanced' },
        { name: 'Narrative Design', level: 'Advanced' },
        { name: 'Systems Design', level: 'Expert' },
        { name: 'Player Psychology', level: 'Proficient' },
      ]
    },
    {
      title: 'Technical Skills',
      icon: <Code className="w-6 h-6" />,
      category: 'technical',
      skills: [
        { name: 'Unity', level: 'Advanced' },
        { name: 'Unreal Engine', level: 'Proficient' },
        { name: 'C#', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'Godot', level: 'Intermediate' },
      ]
    },
    {
      title: 'Creative Arts',
      icon: <Palette className="w-6 h-6" />,
      category: 'creative',
      skills: [
        { name: 'Concept Art', level: 'Intermediate' },
        { name: 'UI/UX Design', level: 'Proficient' },
        { name: 'Prototyping', level: 'Expert' },
        { name: 'Visual Design', level: 'Intermediate' },
        { name: 'Animation', level: 'Developing' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      category: 'balanced',
      skills: [
        { name: 'Team Leadership', level: 'Advanced' },
        { name: 'Project Management', level: 'Proficient' },
        { name: 'Communication', level: 'Advanced' },
        { name: 'Problem Solving', level: 'Expert' },
        { name: 'Mentoring', level: 'Proficient' },
      ]
    }
  ];
  const specialAbilities = [
    {
      name: 'Rapid Prototyping',
      description: 'Quickly transform ideas into playable prototypes',
      icon: <Zap className="w-8 h-8" />,
      category: 'creative'
    },
    {
      name: 'Player-Centric Design',
      description: 'Focus on player experience and engagement',
      icon: <Target className="w-8 h-8" />,
      category: 'creative'
    },
    {
      name: 'Systems Thinking',
      description: 'Design interconnected game systems that create emergent gameplay',
      icon: <Brain className="w-8 h-8" />,
      category: 'technical'
    },
    {
      name: 'Innovation Drive',
      description: 'Constantly pushing boundaries and exploring new game mechanics',
      icon: <Lightbulb className="w-8 h-8" />,
      category: 'balanced'
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
        <h1 className="heading-sketch text-4xl md:text-6xl mb-6">
          Design Toolkit
          <span className="annotation-line"></span>
        </h1>
        <p className="body-text text-xl max-w-3xl mx-auto">
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
            className={`design-panel sketch-animation`}
          >
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-lg mr-4 ${
                category.category === 'creative' ? 'bg-warm-coral' : 
                category.category === 'technical' ? 'bg-tech-gray' : 
                'bg-warm-blue'
              }`}>
                <span className="text-warm-cream">{category.icon}</span>
              </div>
              <h3 className={`text-2xl font-bold ${
                category.category === 'creative' ? 'heading-sketch' : 'heading-tech'
              }`}>
                {category.title}
                <span className="margin-note">Core competencies</span>
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="body-text font-medium">{skill.name}</span>
                    <span className="annotation text-sm font-bold">{skill.level}</span>
                  </div>
                  <div className="w-full bg-warm-beige rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${
                        category.category === 'creative' ? 'bg-warm-coral' : 
                        category.category === 'technical' ? 'bg-tech-gray' : 
                        'bg-warm-blue'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : skill.level === 'Proficient' ? '75%' : skill.level === 'Intermediate' ? '65%' : '50%' }}
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
        <h2 className="heading-tech text-3xl font-bold text-center mb-8">
          Design Specializations
          <span className="margin-note">Unique strengths</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialAbilities.map((ability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
              className={`text-center hover:scale-105 transition-transform design-panel sketch-animation`}
            >
              <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center ${
                ability.category === 'creative' ? 'bg-warm-coral' : 
                ability.category === 'technical' ? 'bg-tech-gray' : 
                'bg-warm-blue'
              }`}>
                <span className="text-warm-cream">{ability.icon}</span>
              </div>
              <h4 className={`text-lg font-bold mb-2 ${
                ability.category === 'creative' ? 'heading-sketch' : 'heading-tech'
              }`}>
                {ability.name}
              </h4>
              <p className="body-text text-sm">{ability.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skill Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="design-panel sketch-animation text-center"
      >
        <h3 className="heading-sketch text-2xl font-bold mb-6">Skills Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="heading-sketch text-3xl font-bold mb-2">Game Design</div>
            <div className="annotation">Core Expertise</div>
          </div>
          <div className="text-center">
            <div className="heading-sketch text-3xl font-bold mb-2">Technical</div>
            <div className="annotation">Implementation</div>
          </div>
          <div className="text-center">
            <div className="heading-sketch text-3xl font-bold mb-2">Creative Arts</div>
            <div className="annotation">Visual Design</div>
          </div>
          <div className="text-center">
            <div className="heading-sketch text-3xl font-bold mb-2">Soft Skills</div>
            <div className="annotation">Leadership</div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-warm-beige">
          <div className="heading-sketch text-2xl font-bold">Professional Game Designer</div>
          <div className="annotation mt-2">Multi-disciplinary expertise</div>
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