import React from "react";
import { ArrowRight, ShieldCheck, Globe, Lock, BookOpen } from "lucide-react";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      image: "src/assets/images/zta-for-ai.png",
      title: "Zero Trust Architecture for AI Agents",
      description:
        "A Zero Trust security middleware that prevents AI agents from accessing unauthorized organizational data. By implementing Continuous Authentication and Role-Based Access Control (RBAC), this gateway ensures that every request is verified, authorized, and sanitized before data is returned.",
      tags: ["Python", "Flask", "React.js", "Tailwind CSS", "PostgreSQL"],
      githubUrl:
        "https://github.com/MSreekari/secure-data-retrieval-ai-agent-zero-trust-architecture",
    },
    {
      id: 2,
      image: "src/assets/images/secure-notes-ai.png",
      title: "Secure Notes Application with Langchain",
      description:
        "A backend secure notes application with JWT-based authentication, AES encryption for data protection, and AI-powered sensitive data detection. It implements Zero Trust Resource Ownership, with Cryptographic At-Rest Encryption, Dynamic Data Masking Stream,Linguistic Search Optimization, and also generates a crisp AI Summary of the note.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Langchain"],
      githubUrl: "https://github.com/MSreekari/secure-notes-ai",
    },
    {
      id: 3,
      image: "src/assets/images/soc-project.png",
      title: "SOC Attack Simulation and Incident Response",
      description:
        "This project demonstrates the simulation and analysis of common cyber attack patterns in a controlled lab environment. The focus is on understanding attacker behavior and identifying detection patterns through system logs, similar to real-world Security Operations Center (SOC) workflows.",
      tags: ["Kali Linux", "Ubuntu", "SSH", "Nmap"],
      githubUrl:
        "https://github.com/MSreekari/soc-attack-simulation-and-log-based-incident-analysis",
    },
  ];

  // 3 Custom Articles Data Array
  const articlesData = [
    {
      id: 1,
      image: "src/assets/images/vercel-breach.png", // Replace with article cover or asset path
      title: "Vercel Breach Explained",
      excerpt:
        "Analyzed the Vercel breach, detailing how a compromised third-party AI tool enabled unauthorized internal access via OAuth identity abuse and supply-chain vulnerabilities.",
      date: "April 2026",
      readTime: "3 min read",
      articleUrl:
        "https://medium.com/@msreekari11/how-a-third-party-ai-tool-led-to-internal-access-lessons-from-vercels-breach-8d5777c6cd4e",
    },
    {
      id: 2,
      image: "src/assets/images/cloud-attack-surface.png",
      title: "The Hidden Attack Surface of Modern Cloud Apps in the Age of AI",
      excerpt:
        "Researched the expanding attack surface of cloud-native applications, focusing on identity-based threats, misconfiguration risks, and hidden vulnerabilities in distributed cloud environments.",
      date: "Apr 2025",
      readTime: "8 min read",
      articleUrl:
        "https://dev.to/sreekari_m_eb6e870dcb8699/the-hidden-attack-surface-of-modern-cloud-apps-in-the-age-of-ai-2dj5",
    },
    {
      id: 3,
      image: "src/assets/images/dns-query.png",
      title: "DNS Explained in Detail",
      excerpt:
        "Detailed the end-to-end process of URL loading in a browser, covering DNS resolution, TCP/IP communication, NAT/PAT routing, ARP resolution, and the HTTP request lifecycle, with emphasis on security implications.",
      date: "April 2026",
      readTime: "5 min read",
      articleUrl:
        "https://dev.to/sreekari_m_eb6e870dcb8699/what-happens-when-you-type-a-url-in-your-browser-3jp3",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6 md:px-12 space-y-32"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-800 pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="border border-gray-800 font-mono text-xs px-2 py-0.5 text-gray-500 rounded">
                02
              </span>
            </div>
            <h2 className="text-5xl font-bebasneue tracking-tight uppercase leading-none">
              Featured <br />
              <span className="inline-flex items-baseline gap-1.5">
                Projects
                <span className="w-2.5 h-2.5 bg-[#6366F1] block !rounded-none translate-y-[-2px]"></span>
              </span>
            </h2>
          </div>

          <a
            href="https://github.com/MSreekari"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bebasneue text-sm tracking-wider text-gray-400 hover:text-[#C1FF26] transition-colors duration-200 flex items-center gap-2 group uppercase cursor-pointer"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 font-serif">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative flex flex-col justify-between min-h-[350px] rounded-xl bg-[#0F141C]/30 backdrop-blur-md border border-gray-800/40 hover:border-[#C1FF26]/40 hover:bg-[#121824]/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 ease-out group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#C1FF26]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {project.image && (
                  <div className="w-full h-48 overflow-hidden rounded-t-xl mb-6 relative border-b border-gray-800/60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                )}

                <div className={project.image ? "px-6" : "p-0"}>
                  <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[#C1FF26] transition-colors duration-200 font-sans">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-notosans text-sm leading-relaxed pr-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div
                className={`pt-8 flex items-center justify-between pb-6 ${project.image ? "px-6" : "p-0"}`}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1A2333]/60 border border-gray-800 text-gray-400 font-mono text-[11px] px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#C1FF26] transition-colors duration-200 p-2 -mr-2 cursor-pointer relative z-10 flex items-center justify-center"
                  title="Open GitHub Repository"
                >
                  <ArrowRight className="w-5 h-5 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-800 pb-6">
          <div className="space-y-4">
            {/* Number Index Badge matching the global flow sequence */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#C1FF26] uppercase tracking-widest pl-2">
                // Technical Writings
              </span>
            </div>
            {/* Main Section Heading */}
            <h2 className="text-5xl font-bebasneue tracking-tight uppercase leading-none">
              Featured <br />
              <span className="inline-flex items-baseline gap-1.5">
                Insights
                <span className="w-2.5 h-2.5 bg-[#C1FF26] block !rounded-none translate-y-[-2px]"></span>
              </span>
            </h2>
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {articlesData.map((article) => (
            <div
              key={article.id}
              className="relative flex flex-col justify-between min-h-[400px] rounded-xl bg-[#0F141C]/30 backdrop-blur-md border border-gray-800/40 hover:border-[#C1FF26]/40 hover:bg-[#121824]/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 ease-out group overflow-hidden"
            >
              {/* Purple ambient back-glow framework to distinguish from projects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C1FF26]/5 via-transparent to-[#6366F1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Article Card Cover Thumbnail */}
                {article.image && (
                  <div className="w-full h-44 overflow-hidden rounded-t-xl mb-6 relative border-b border-gray-800/60">
                    {/* Removed grayscale filters so the image displays in full color immediately */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                    />
                  </div>
                )}

                {/* Text Layout */}
                <div className="px-6 space-y-3">
                  {/* Article Metadata Strip */}
                  <div className="flex items-center gap-4 font-mono text-[11px] text-gray-500">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span className="text-gray-400 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  {/* Locked to clean text-white with clear hover accent transition links */}
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#C1FF26] transition-colors duration-200 font-mono line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 font-notosans text-xs leading-relaxed pr-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Row Action Link */}
              <div className="pt-6 px-6 pb-6 flex items-center justify-end">
                <a
                  href={article.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-800 text-gray-500 group-hover:text-white group-hover:border-[#C1FF26] group-hover:bg-[#6366F1]/10 transition-all duration-300 relative z-10 flex items-center justify-center"
                  title="Read Article"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
