import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Operating Systems",
    "Vulnerability Assessment and Penetration Testing",
    "Applied Cryptography & Information Security",
    "Database Management Systems"
  ];

  return (
    <section id="education" className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER BLOCK: Section Title & Index */}
        <div className="space-y-4 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-2">
            <span className="border border-gray-800 font-mono text-xs px-2 py-0.5 text-gray-500 rounded">
              04
            </span>
          </div>
          <h2 className="text-5xl font-bebasneue tracking-tight uppercase leading-none">
            <span className="inline-flex items-baseline gap-1.5">
              Education
              <span className="w-2.5 h-2.5 bg-[#6366F1] block !rounded-none translate-y-[-2px]"></span>
            </span>
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          
          {/* LEFT SIDE: Institution Info Card (Spans 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Minimalist Solid Icon Badge */}
            <div className="w-20 h-20 bg-[#6366F1] text-white flex items-center justify-center rounded-xl shadow-lg shadow-[#6366F1]/10 flex-shrink-0">
              <GraduationCap className="w-10 h-20" />
            </div>

            {/* Degree Metadata */}
            <div className="space-y-2">
              <div className="space-y-0.5">
                <h3 className="text-2xl font-bold font-mono tracking-tight text-white leading-tight">
                  B.Tech in Computer Science
                </h3>
                <p className="text-white font-medium text-base">
                  Cybersecurity Specialization
                </p>
                <p className="text-[#8a8cee] font-medium text-base">
                  Malla Reddy University
                </p>
                <div className="text-white font-mono text-xs uppercase tracking-wider">
                  2023 - 2027
                </div>
              </div>
              
              {/* Micro Divider and CGPA Layout */}
              <div className="pt-1.5">
                <p className="font-mono text-s text-white">
                  CGPA: <span className="text-white font-bold">9.38</span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Relevant Courses Matrix (Spans 7 Columns) */}
          <div className="lg:col-span-7 space-y-4 lg:pl-6">
            <h4 className="font-mono text-s text-[#C1FF26] uppercase tracking-widest">
              Relevant Courses
            </h4>
            
            {/* Clean Multi-Column List Layout */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 font-notosans text-sm md:text-base text-white">
              {coursework.map((course, idx) => (
                <li key={idx} className="flex items-center gap-2.5 group">
                  {/* Custom Minimal Dot Bullet */}
                  <span className="w-1.5 h-1.5 bg-white group-hover:bg-[#C1FF26] transition-colors duration-200 flex-shrink-0 rounded-none"></span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}