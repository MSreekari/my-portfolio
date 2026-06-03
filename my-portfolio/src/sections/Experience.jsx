import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#F8F9FA] text-black py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Centered structural maximum width container block */}
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Block with Index Number and Square Period */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white font-mono font-bold text-xs px-2.5 py-1 rounded">
              03
            </span>
          </div>
          <h2 className="text-5xl font-bebasneue tracking-tight uppercase leading-none">
            <span className="inline-flex items-baseline gap-1.5">
              Experience
              <span className="w-2.5 h-2.5 bg-[#6366F1] block !rounded-none translate-y-[-2px]"></span>
            </span>
          </h2>
        </div>

        {/* Timeline Wrapper Container */}
        <div className="relative pl-8 border-l border-gray-300 ml-3">
          
          {/* Timeline Node Point element */}
          <div className="relative">
            {/* Pulsing Core Center Point */}
            <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[#6366F1] border-4 border-[#F8F9FA] ring-2 ring-[#6366F1]/30 z-10"></span>

            {/* Content Grid Row splitting position descriptions from text bodies */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Column A: Metadata Roles (Spans 5 columns) */}
              <div className="md:col-span-5 space-y-1">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 leading-tight">
                  Frontend Developer Intern
                </h3>
                <div className="text-[#6366F1] font-medium text-sm">
                  Miss Electronics
                </div>
                <div className="text-gray-400 font-mono text-xs uppercase tracking-wider">
                  Feb 2025 – Jul 2025
                </div>
              </div>

              {/* Column B: Description Breakdown (Spans 7 columns) */}
              <div className="md:col-span-7 text-gray-600 font-notosans text-sm md:text-base leading-relaxed">
                Architected and engineered the primary corporate web presence utilizing{" "}
                <span className="font-semibold text-gray-900">React.js</span>. Translated 
                wireframes directly from{" "}
                <span className="font-semibold text-gray-900">Figma</span> layouts and 
                integrated{" "}
                <span className="font-semibold text-gray-900">Agile development</span>{" "}
                methodologies to streamline project lifecycles.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}