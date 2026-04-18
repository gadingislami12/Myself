import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const techStack = [
    'Java', 'C++', 'HTML', 'PHP', 'MySQL', 'Python', 'JS', 'React', 'Node', 'Bootstrap', 'Golang', 'Laravel'
  ];

  const resumeLink = "https://drive.google.com/drive/folders/12DNuR1ZPNV3XbPAgd0H7NXqYbA7dz0v3?usp=drive_link";

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-start max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-400 font-semibold tracking-wide text-sm mb-3">Hi, Saya</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
          >
            Gading Islami.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-slate-400 mb-6"
          >
            Informatics Engineering / Full Stack Developer & IT Support.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed"
          >
            Lulusan Teknik Informatika dengan minat dan fokus pada bidang Full Stack Development dan IT Support. Memiliki pemahaman dalam pengembangan aplikasi web menggunakan HTML, CSS, JavaScript, serta framework modern seperti React dan Node.js, serta pengalaman dalam membangun sistem berbasis web yang responsif dan fungsional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 group"
            >
              <FileDown className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              Unduh CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors group"
            >
              Lihat Portofolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full"
          >
            <p className="text-sm font-medium text-slate-500 mb-4">TECH STACK</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
