import React from 'react';
import { ArrowRight } from 'lucide-react';
// Import the component and the specific icon directly:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-black px-6 md:px-12 py-4 flex justify-between items-center">
      
      {/* Brand Logo - Kept mono for that command-line syntax look */}
      <div className="text-[#C1FF26] font-notosans font-bold text-xl tracking-tight select-none">
        &lt;Sreekari /&gt;
      </div>

      {/* Navigation Links using your BebasNeue config */}
      <nav className="hidden md:flex space-x-8 text-sm tracking-widest text-white font-notosans">
        <a href="#home" className="hover:text-[#C1FF26] transition-colors duration-200">HOME</a>
        <a href="#about" className="hover:text-[#C1FF26] transition-colors duration-200">ABOUT</a>
        <a href="#projects" className="hover:text-[#C1FF26] transition-colors duration-200">PROJECTS</a>
        <a href="#experience" className="hover:text-[#C1FF26] transition-colors duration-200">EXPERIENCE</a>
        <a href="#education" className="hover:text-[#C1FF26] transition-colors duration-200">EDUCATION</a>
        <a href="#contact" className="hover:text-[#C1FF26] transition-colors duration-200">CONTACT</a>
      </nav>

      {/* Right Side CTA: GitHub Button using BebasNeue */}
      <a 
        href="https://github.com/MSreekari" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="border border-white hover:border-[#C1FF26] text-white font-bebasneue text-sm tracking-wider px-5 py-1.5 rounded-full flex items-center gap-2 transition-all duration-300 group bg-[#121824]/30"
      >
        <FontAwesomeIcon 
          icon={faGithub} 
          className="w-4 h-4 transition-colors duration-200" 
        />
        GitHub 
        <span className="text-white font-mono group-hover:text-[#C1FF26] group-hover:translate-x-0.5 transition-transform duration-200 flex items-center">
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </a>

    </header>
  );
};

export default Navbar;