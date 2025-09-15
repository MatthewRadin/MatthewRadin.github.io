import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Undergraduate Research Assistant - Honors College Research Grant',
      company: 'University of South Carolina',
      location: 'Columbia, SC',
      period: 'Aug 2025 - Present',
      description: 'Received competitive research grant to develop a MIPS assembly interpreter within the Godot engine using C++. Designed a virtual machine to parse and execute MIPS instructions, modeling registers, memory, and instruction flow within a game engine environment.',
      technologies: ['C++', 'MIPS Assembly', 'Godot Engine', 'Virtual Machine', 'Systems Programming'],
      achievements: [
        'Received competitive research grant to develop a MIPS assembly interpreter within the Godot engine using C++',
        'Designed a virtual machine to parse and execute MIPS instructions, modeling registers, memory, and instruction flow within a game engine environment',
        'Explored integration of low-level systems concepts with game development, laying groundwork for a MIPS-based game engine'
      ]
    },
    {
      title: 'Undergraduate Teaching Assistant',
      company: 'University of South Carolina',
      location: 'Columbia, SC',
      period: 'Aug 2025 - Present',
      description: 'Supporting computer science education by leading laboratory sessions and mentoring students in fundamental programming concepts. Collaborating with faculty to develop and enhance course materials while providing personalized guidance to help students master Java programming, object-oriented design, and problem-solving methodologies.',
      technologies: ['Java', 'Leadership', 'Teaching'],
      achievements: [
        'Supervised labs and mentor 50+ students in Java fundamentals, problem-solving, and algorithmic thinking',
        'Guided students through debugging and core OOP concepts; enhance exercises with faculty collaboration',
        'Graded assignments and provide feedback to improve programming and design skills'
      ]
    }
  ];

  return (
    <div className="p-6 vscode-content">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-4 vscode-syntax-highlight">
          <span className="vscode-keyword">public class</span> <span className="vscode-class">Experience</span> &#123;
        </h2>
        <p className="text-[#cccccc] text-lg max-w-2xl">
          <span className="vscode-comment">// My professional journey and career milestones</span>
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="vscode-terminal p-4"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#cccccc] mb-1">{exp.title}</h3>
                <div className="flex items-center gap-4 text-[#6a6a6a] text-sm">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#2a2d2e] text-[#cccccc] text-xs rounded border border-[#3c3c3c]"
                >
                  <span className="vscode-string">"{tech}"</span>
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#cccccc]">Key Achievements:</h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-[#cccccc] text-sm flex items-start gap-2">
                    <span className="vscode-icon mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <h3 className="text-2xl font-bold mb-6 vscode-syntax-highlight">
          <span className="vscode-keyword">public class</span> <span className="vscode-class">Education</span> &#123;
        </h3>
        
        <div className="vscode-terminal p-4">
          <div className="font-mono text-sm space-y-2">
            <div>
              <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">String</span> <span className="vscode-function">degree</span> = <span className="vscode-string">"Bachelor of Science in Computer Science"</span>;
            </div>
            <div>
              <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">String</span> <span className="vscode-function">institution</span> = <span className="vscode-string">"University of South Carolina"</span>;
            </div>
            <div>
              <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">int</span> <span className="vscode-function">graduating</span> = <span className="vscode-number">2027</span>;
            </div>
            <div>
              <span className="vscode-keyword">private</span> <span className="vscode-keyword">static</span> <span className="vscode-keyword">final</span> <span className="vscode-keyword">double</span> <span className="vscode-function">gpa</span> = <span className="vscode-number">4.0</span>;
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience; 