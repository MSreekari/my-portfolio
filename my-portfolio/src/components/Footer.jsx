import React from "react";
import { ArrowUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
  };

  return (
    <footer className="bg-[#0B0F17] text-white border-t border-gray-900 py-24 px-6 md:px-12 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT COLUMN: Identity Logo Block */}
        <div className="flex items-center gap-3 select-none">
          <span className="text-[#C1FF26] font-bold text-base tracking-tight">
            &lt;Sreekari /&gt;
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            
            <a
              href="https://github.com/MSreekari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#C1FF26] border border-transparent hover:border-gray-800 p-2 rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center group"
              title="GitHub Profile"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                className="transition-colors duration-200"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/46ab7231a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#C1FF26] border border-transparent hover:border-gray-800/80 p-2 rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Micro Separation Line */}
          <span className="w-px h-4 bg-gray-800 hidden sm:block"></span>

          <button
            onClick={scrollToTop}
            className="text-gray-500 hover:text-[#C1FF26] font-bebasneue text-xs tracking-wider uppercase flex items-center gap-1.5 group cursor-pointer transition-colors duration-200"
            title="Scroll To Top"
          >
            TOP
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
}