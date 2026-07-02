import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

// 1. Import semua file PDF dari folder assets sesuai nama file di image_a2c8c7.png
import pdfBNSP from '../assets/Certifications/SKILL_PASSPORT_250620070019.pdf';
import pdfCCSE from '../assets/Certifications/CCSE_gadingislami12@gmail.com_CCSE 090326-01-1-00030.pdf'; 
import pdfTOEFL from '../assets/Certifications/SERTIFIKAT_TOEFL_241021080303_GADING ISLAMI.PDF';
import pdfCisco from '../assets/Certifications/NetworkingBasics-Gading.pdf';
import pdfClaude from 'src/assets/Certifications/certificate-xe9kyi453a2o-1776282485.pdf'

const certifications = [
  {
    title: "Pemrograman",
    link: pdfBNSP, // Langsung mengarah ke file lokal setelah di-import
    issuer: "Skill Passport BNSP"
  },
  {
    title: "Intro to Software Engineering",
    link: pdfCCSE,
    issuer: "CCSE"
  },
  {
    title: "TOEFL",
    link: pdfTOEFL,
    issuer: "Lembaga Bahasa Universitas Pamulang"
  },
  {
    title: "Networking Basic",
    link: pdfCisco,
    issuer: "Networking Academy By Cisco"
  },
  {
    title: "Claude Code 101",
      link: pdfClaude,
      issuer: "Anthropic"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <Award className="h-10 w-10 text-blue-500" />
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-slate-400 text-sm mt-auto">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
