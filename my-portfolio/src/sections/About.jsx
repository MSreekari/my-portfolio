import React from "react";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faPython,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faTerminal,
  faShieldHalved,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F9FA] text-black py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Bio Section */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div className="flex items-center gap-3">
            <span className="bg-black text-white font-mono font-bold text-xs px-2.5 py-1 rounded">
              01
            </span>
          </div>

          <h2 className="text-5xl font-bebasneue tracking-tight uppercase leading-none">
            About <br />
            <span className="inline-flex items-baseline gap-1.5">
              Me
              <span className="w-2.5 h-2.5 bg-[#6366F1] block !rounded-none translate-y-[-2px] flex-shrink-0"></span>
            </span>
          </h2>

          <p className="text-gray-600 font-notosans text-sm md:text-base leading-relaxed">
            I’m particularly interested in learning how security-by-design
            principles are applied and how secure architectures are built in
            real-world systems.
          </p>

          <div className="pt-4">
            <a
              href="#projects" 
              className="border border-black hover:bg-black hover:text-white text-black font-bebasneue text-sm tracking-wider uppercase px-6 py-3 transition-all duration-300 inline-flex items-center gap-4 group cursor-pointer"
            >
              LEARN MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Icon-Grid Terminal Panel */}
        <div className="lg:col-span-8 bg-[#0B0F17] text-white p-6 md:p-8 rounded-xl shadow-2xl border border-gray-800">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center gap-2 border-b border-gray-800/60 pb-4 mb-8 select-none">
            <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
            <span className="text-1xl font-mono text-white pl-2">
              Technical Skills
            </span>
          </div>

          {/* Grid Blocks Container */}
          <div className="space-y-3">
            {/* Category: Languages */}
            <div className="space-y-5">
              <h4 className="font-mono text-sm text-[#C1FF26] uppercase tracking-widest">
                // Programming Languages
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faJava}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Java
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faPython}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Python
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faJs}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    JavaScript
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    SQL
                  </span>
                </div>
              </div>
            </div>

            {/* Category: Frameworks & Databases */}
            <div className="space-y-5">
              <h4 className="font-mono text-sm text-[#6366F1] uppercase tracking-widest">
                // Frameworks & Databases
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faReact}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    React.js
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <span className="font-bold text-2xl h-8 text-gray-400 group-hover:text-white transition-colors duration-200 flex items-center leading-none">
                    TW
                  </span>
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Tailwind
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <span className="font-bold text-2xl h-8 text-gray-400 group-hover:text-white transition-colors duration-200 flex items-center leading-none">
                    SB
                  </span>
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Spring Boot
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    MySQL
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Category: Developer Tools */}
            <div className="space-y-5">
              <h4 className="font-mono text-sm text-[#C1FF26] uppercase tracking-widest">
                // Developer Tools
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faGitAlt}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Git
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    GitHub
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faTerminal}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    VS Code
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faTerminal}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    IntelliJ
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <span className="font-bold text-2xl h-8 text-gray-400 group-hover:text-white transition-colors duration-200 flex items-center leading-none">
                    PM
                  </span>
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Postman
                  </span>
                </div>
              </div>
            </div>

            {/* Category: Cybersecurity */}
            <div className="space-y-5">
              <h4 className="font-mono text-sm text-red-400 uppercase tracking-widest">
                // Cybersecurity Tools
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faLinux}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Kali Linux
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faNetworkWired}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Wireshark
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Nmap
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 group h-20">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    size="2xl"
                    className="text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                  <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                    Burp Suite
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
