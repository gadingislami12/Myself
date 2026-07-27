import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectImage = (fileName) => `${import.meta.env.BASE_URL}projects/${fileName}?v=3`;

const projects = [
  {
    title: "Proyek Tugas Akhir",
    description: "Sistem Pendukung Keputusan Berbasis Web menggunakan algoritma VIKOR untuk menentukan kelayakan bantuan warga desa secara objektif.",
    tech: ["PHP", "MySQL", "VIKOR Algorithm", "Bootstrap"],
    github: "https://github.com/gadingislami12/Proyek-Skripsi-Website-SPK",
    external: "http://gading-spk.free.nf/pendataan_desa/login.php",
    image: projectImage("spk-desa.png")
  },
  {
    title: "Situs Portofolio",
    description: "Situs web portofolio pribadi yang responsif dan modern yang awalnya dibangun dengan HTML, CSS, dan JS (kini bermigrasi ke React dan Tailwind CSS).",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/gadingislami12/Profile-Portofolio",
    external: "https://gadingislami12.github.io/Profile-Portofolio/",
    image: projectImage("portfolio.png")
  },
  {
  title: "AuraCart - AI Ecommerce Chatbot",
  description: "Aplikasi full-stack e-commerce dengan asisten belanja AI (Gemini 2.5 Flash) yang mampu merekomendasikan produk interaktif secara real-time berdasarkan data katalog Supabase, dilengkapi admin dashboard untuk manajemen produk dan audit riwayat percakapan.",
  tech: ["Next.js", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS"],
  github: "https://github.com/gadingislami12/ai-ecommerce-chatbot",
  external: "https://ai-ecommerce-chabot.vercel.app/",
  image: projectImage("auracart.png")
},
  {
  title: "Mini TikTok Shop",
  description:
    "Platform social commerce full-stack terinspirasi TikTok dengan fitur feed video vertikal yang responsif, integrasi produk, unggah media, dan Autentikasi Supabase. Dilengkapi dashboard admin yang lengkap serta dirancang menggunakan arsitektur modern untuk mensimulasikan ekosistem belanja daring yang interaktif.",
  tech: ["Next.js","TypeScript","Supabase","Tailwind CSS","shadcn/ui","Vercel"],
  github: "https://github.com/gadingislami12/dummy_tiktok",
  external: "https://dummytiktok.vercel.app/",
  image: projectImage("mini-tiktok.png")
},
  {
  title: "Website Rumah Makan Lesehan Nambah Donk",
  description: "Website kuliner interaktif untuk Rumah Makan Lesehan Nambah Donk yang dilengkapi katalog menu dinamis, pencarian real-time, penyaringan kategori responsif, serta simulasi keranjang belanja dan integrasi pemesanan WhatsApp.",
  tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
  github: "https://github.com/gadingislami12/Website-Nambah-Dong",
  external: "https://gadingislami12.github.io/Website-Nambah-Dong/",
  image: projectImage("nambah-donk.png")
},
  {
  title: "Website Kopi Jabat",
  description: "Website landing page interaktif untuk produk Kopi Jabat yang dilengkapi katalog menu dinamis, sistem filter ukuran kemasan, keranjang belanja lokal, dan formulir pemesanan terintegrasi WhatsApp.",
  tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
  github: "https://github.com/gadingislami12/website-kopi-jabat",
  external: "https://gadingislami12.github.io/website-kopi-jabat/",
  image: projectImage("kopi-jabat.png")
},
  {
  title: "Website KB An Nuriyah",
  description: "Website profil sekolah interaktif untuk KB/PAUD An Nuriyah yang dilengkapi tab informasi sejarah, kurikulum resmi, data pendidik, galeri kegiatan, serta form pendaftaran online via WhatsApp.",
  tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
  github: "https://github.com/gadingislami12/paud-An-Nuriyah",
  external: "https://gadingislami12.github.io/paud-An-Nuriyah/",
  image: projectImage("an-nuriyah.png")
},
  {
  title: "Flowerin - E-Commerce Bouquet & Florist",
  description: "Website e-commerce katalog penjualan buket dan bunga premium (fresh flower, artificial, satin, uang, dll) berbasis web statis. Dilengkapi sistem keranjang belanja dengan penyimpanan LocalStorage dan checkout instan terintegrasi otomatis ke WhatsApp. Proyek ini dibangun secara kolaboratif bersama Ulfa.",
  tech: ["React", "Vite", "React Router", "Vanilla CSS", "LocalStorage", "WhatsApp API"],
  github: "https://github.com/gadingislami12/flowerin",
  external: "https://gadingislami12.github.io/flowerin/",
  image: projectImage("flowerin.png")
},
{
  title: "PT Sri Nusantara Semesta",
  description: "Platform web modern untuk pelacakan dan manajemen pengiriman barang. Aplikasi ini menyediakan sistem tracking real-time, halaman informasi perusahaan, dan layanan pelanggan terintegrasi.",
  tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "API Integration"],
  github: "https://github.com/gadingislami12/PT-Sri-Nusantara-Semesta",
  external: "https://pt-sri-nusantara-semesta.netlify.app/",
  image: projectImage("sri-nusantara.png")
},
  {
    title: "Lumina Fine Dining",
    description: "Situs web portofolio restoran 'Lumina Fine Dining' yang elegan. Menampilkan tata letak modern dan responsif, antarmuka menu yang eksklusif, serta bagian pemesanan meja.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/gadingislami12/Restaurant-Website",
    external: "https://gadingislami12.github.io/Restaurant-Website/",
    image: projectImage("lumina.png")
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
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30 transition-all duration-300 group flex flex-col h-full"
            >
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                aria-label={`Lihat demo ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`Preview ${project.title}`}
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchPriority={index < 3 ? "high" : "auto"}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/90 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-semibold text-white">
                    Lihat proyek <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 gap-3 pt-1">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Repositori GitHub ${project.title}`} className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
                      <FaGithub className="h-5 w-5" />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" aria-label={`Buka demo ${project.title}`} className="text-slate-400 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-slate-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
