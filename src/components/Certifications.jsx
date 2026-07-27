import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificateImage = (fileName) => `${import.meta.env.BASE_URL}certifications/${fileName}`;

const certifications = [
  {
    title: "Pemrograman",
    link: new URL('../assets/Certifications/SKILL_PASSPORT_250620070019.pdf', import.meta.url).href,
    issuer: "Skill Passport BNSP",
    image: certificateImage("pemrograman.png")
  },
  {
    title: "Intro to Software Engineering",
    link: new URL('../assets/Certifications/CCSE_gadingislami12@gmail.com_CCSE 090326-01-1-00030.pdf', import.meta.url).href,
    issuer: "CCSE",
    image: certificateImage("software-engineering.png")
  },
  {
    title: "TOEFL",
    link: new URL('../assets/Certifications/SERTIFIKAT_TOEFL_241021080303_GADING ISLAMI.PDF', import.meta.url).href,
    issuer: "Lembaga Bahasa Universitas Pamulang",
    image: certificateImage("toefl.png")
  },
  {
    title: "Networking Basic",
    link: new URL('../assets/Certifications/NetworkingBasics-Gading.pdf', import.meta.url).href,
    issuer: "Networking Academy By Cisco",
    image: certificateImage("networking-basic.png")
  },
  {
    title: "Claude Code 101",
    link: new URL('../assets/Certifications/certificate-xe9kyi453a2o-1776282485.pdf', import.meta.url).href,
    issuer: "Anthropic",
    image: certificateImage("claude-code.png")
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <div className="flex-grow h-px bg-slate-800"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mx-6">Sertifikasi</h2>
          <div className="flex-grow h-px bg-slate-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30 transition-all duration-300 group flex flex-col h-full"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka sertifikat ${cert.title}`}
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-slate-950 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
              >
                <img
                  src={cert.image}
                  alt={`Sertifikat ${cert.title} dari ${cert.issuer}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index < 2 ? "high" : "auto"}
                  className="h-full w-full object-contain shadow-lg transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white">
                    Lihat sertifikat <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>

              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {cert.issuer}
                  </p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka PDF sertifikat ${cert.title}`}
                  className="shrink-0 text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
