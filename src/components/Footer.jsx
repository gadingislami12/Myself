import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          {/* Anda bisa meletakkan ikon FaGithub, FaLinkedin, dll di sini jika diperlukan nanti */}
        </div>
        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()}{' '}
          <a 
            href="https://www.instagram.com/gading19_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-pink-500 transition-colors duration-200 underline underline-offset-4 decoration-slate-700 hover:decoration-pink-500"
          >
            Gading Islami
          </a>
          . Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
