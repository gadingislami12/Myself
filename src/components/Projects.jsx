import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Proyek Tugas Akhir",
    description: "Sistem Pendukung Keputusan Berbasis Web menggunakan algoritma VIKOR untuk menentukan kelayakan bantuan warga desa secara objektif.",
    tech: ["PHP", "MySQL", "VIKOR Algorithm", "Bootstrap"],
    github: "https://github.com/gadingislami12/Proyek-Skripsi-Website-SPK",
    external: "http://gading-spk.free.nf/pendataan_desa/login.php"
  },
  {
    title: "Situs Portofolio",
    description: "Situs web portofolio pribadi yang responsif dan modern yang awalnya dibangun dengan HTML, CSS, dan JS (kini bermigrasi ke React dan Tailwind CSS).",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://gadingislami12.github.io/Profile-Portofolio/",
    external: "https://gadingislami12.github.io/Profile-Portofolio/"
  },
  {
    title: "Lumina Fine Dining",
    description: "Situs web portofolio restoran 'Lumina Fine Dining' yang elegan. Menampilkan tata letak modern dan responsif, antarmuka menu yang eksklusif, serta bagian pemesanan meja.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/gadingislami12/Restaurant-Website",
    external: "https://gadingislami12.github.io/Restaurant-Website/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mr-6">Proyek Yang Pernah Saya Buat</h2>
          <div className="flex-grow h-px bg-slate-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="h-10 w-10 text-blue-500" />
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                      <FaGithub className="h-5 w-5" />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-slate-500">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
