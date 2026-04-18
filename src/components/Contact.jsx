import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kontak Saya</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="mailto:gadingislami12@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-indigo-500/50 hover:bg-slate-800 transition-all group"
          >
            <Mail className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300" />
            <span className="text-slate-300 font-medium group-hover:text-white transition-colors">Gmail</span>
          </a>

          <a
            href="https://github.com/gadingislami12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-indigo-500/50 hover:bg-slate-800 transition-all group"
          >
            <FaGithub className="h-5 w-5 text-slate-300 group-hover:text-white" />
            <span className="text-slate-300 font-medium group-hover:text-white transition-colors">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
