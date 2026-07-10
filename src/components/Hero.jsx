import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  const techStack = [
  'React', 'Next.js', 'Node.js', 'Golang', 'Laravel', 'Supabase', 'Tailwind CSS', 'MySQL', 'PostreSQL'
];


  const resumeLink = "https://drive.google.com/drive/folders/12DNuR1ZPNV3XbPAgd0H7NXqYbA7dz0v3?usp=drive_link";

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex flex-col items-start flex-1 w-full">
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
              translate="no"
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
              Lulusan Teknik Informatika dengan fokus karier sebagai Full Stack Developer. Berpengalaman dalam siklus pengembangan aplikasi web e-commerce, mencakup integrasi kecerdasan buatan pada Chatbot AI E-commerce dan replikasi fitur belanja dinamis pada proyek Dummy TikTok Shop. Mengombinasikan logika programming yang kuat dan desain antarmuka yang responsif untuk membangun platform digital yang siap pakai.
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

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0 w-64 md:w-80 lg:w-96 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src={heroImage}
                alt="Gading Islami"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
