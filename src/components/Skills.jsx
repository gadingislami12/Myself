import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      skills: ["Golang", "Python", "C++", "Java", "PHP", "JavaScript", "HTML", "MySQL"]
    },
    {
      title: "Web & Frameworks",
      icon: <Layout className="h-6 w-6 text-indigo-500" />,
      skills: ["React", "Laravel", "Node.js", "Bootstrap", "Tailwind CSS", "Vite", "WordPress", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <div className="flex-grow h-px bg-slate-800"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mx-6">Keahlian Teknis</h2>
          <div className="flex-grow h-px bg-slate-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-950 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 shadow-sm hover:border-blue-500/30 hover:text-blue-400 transition-colors"
                  >
                    <span className="font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
