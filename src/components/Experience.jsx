import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "IT Support",
    company: "Universitas Pamulang",
    period: "Jul 2024 - Dec 2024",
    description: [
      "Melakukan instalasi dan konfigurasi 20+ unit komputer kampus.",
      "Troubleshooting perangkat keras & lunak.",
      "Setup jaringan LAN untuk ruangan baru.",
      "Memberikan dukungan teknis kepada mahasiswa pengguna lab.",
      "Maintenance rutin perangkat komputer.",
      "Instalasi ulang OS dan software pembelajaran.",
      "Backup & restore data user."
    ],
    skills: ["Hardware", "Networking", "Troubleshooting", "Technical Support", "OS Installation"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "MTs Al-Hamidiyah",
    period: "Sep 2023 - Feb 2024",
    description: [
      "Mengembangkan aplikasi profile sekolah berbasis web menggunakan HTML dan PHP.",
      "Mendesain UI/UX untuk website sekolah menggunakan prinsip tampilan yang responsif dan user friendly.",
      "Melakukan pengujian sistem dan pemeliharaan jaringan, memastikan seluruh website berjalan stabil dan aman.",
      "Mengintegrasikan REST API dan mengelola database MySQL.",
      "Berkolaborasi dengan klien untuk memahami kebutuhan dan memberikan solusi teknis."
    ],
    skills: ["PHP", "MySQL", "Web Development", "UI/UX", "REST API"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mr-6">Pengalaman Kerja</h2>
          <div className="flex-grow h-px bg-slate-800"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline Icon */}
                <div className="absolute left-[-16px] md:left-[16px] top-1 h-8 w-8 rounded-full bg-slate-900 border border-blue-500 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-blue-400" />
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                    </div>
                    <span className="text-slate-400 text-sm mt-2 md:mt-0 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="text-slate-300 leading-relaxed mb-4 list-disc pl-5 space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-sm md:text-base">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
