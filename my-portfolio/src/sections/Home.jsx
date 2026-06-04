import React from "react";
import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Container to handle side-by-side text layout and image alignment */}
      <div
        id="home"
        className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* LEFT COLUMN: Text Content */}
        <div className="flex-1 space-y-6">
          <h3 className="font-mono text-sm text-[#C1FF26]">$ whoami</h3>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bebasneue uppercase tracking-tight leading-[0.95] text-white">
            Writing code. <br />
            <span className="text-[#C1FF26]">Building secure systems.</span>
          </h1>

          <h2 className="text-gray-400 max-w-lg text-base md:text-lg leading-relaxed font-notosans">
            I am a Computer Science student passionate about software
            engineering and cybersecurity, focused on learning to code and build
            secure systems that make an impact.
          </h2>

          <div className="pt-4">
            <a
              href="#projects"
              className="bg-[#c9fe42] text-black font-bebasneue text-sm tracking-wider uppercase px-6 py-3.5 rounded-none hover:bg-white transition-colors duration-300 inline-flex items-center gap-2 group cursor-pointer"
            >
              VIEW PROJECTS
              <span className="group-hover:translate-x-1 transition-transform duration-200 flex items-center">
                <ArrowRight className="w-4 h-4 fill-current" />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Seamless Faded Graphic */}
        <div className="flex-1 w-full max-w-[500px] lg:max-w-[460px] relative flex justify-center lg:justify-end">
          {/* The wrapper uses a mask to fade the edges seamlessly into pure black */}
          <div
            className="w-full relative overflow-visible select-none group transition-all duration-500"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 60%, transparent 95%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 60%, transparent 95%)",
            }}
          >
            <img
              src="/images/hero-section-image.PNG"
              alt="Cyber security wireframe graphic"
              className="w-full h-auto object-contain block mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
