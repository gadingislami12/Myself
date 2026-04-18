import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
        </div>
        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Gading Islami. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
