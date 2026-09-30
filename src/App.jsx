import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Code2, Database, Network, Check, Mail, ChevronDown, FileText, Download } from 'lucide-react';

// Import local SVGs from src/assets/
import jsIcon from './assets/javascript.svg';
import pythonIcon from './assets/python.svg';
import htmlIcon from './assets/html.svg';
import cssIcon from './assets/css.svg';
import reactIcon from './assets/react.svg';
import tailwindIcon from './assets/tailwindcss.svg';
import fastapiIcon from './assets/FastAPI.svg';
import mysqlIcon from './assets/sql.svg';
import springbootIcon from './assets/springboot.svg';
import gitIcon from './assets/git.svg';
import githubIcon from './assets/github.svg';
import postgresql from './assets/postgresql.svg';
import postmanIcon from './assets/postman.svg';
//import linuxIcon from './assets/linux.svg';
import geminiIcon from './assets/gemini.svg';
import openaiIcon from './assets/openai.svg';
import profilePic from './assets/profilePic.jpg';
import avatar from './assets/ayush-avatar.png';
import portfolioSS from './assets/portfolioSS.png';
import AI_Interview from './assets/AI_Interview.png';
import groq from './assets/groq.svg'

// Import project screenshots here (e.g. import portfolioScreenshot from './assets/portfolio-ss.png';)

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ayush-sachdeva-995a98340",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.98H3.56v11.47Z"/>
      </svg>
    )
  },
  {
    name: "X",
    url: "https://x.com/AyushSachdeva09",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.85L18.9 2Zm-1.1 17.9h1.73L8.28 3.98H6.42L17.8 19.9Z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ayushsig_/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    )
  }
];

const SocialLinks = ({ compact = false }) => (
  <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        aria-label={social.name}
        title={social.name}
        className={`${compact ? "p-2" : "p-2.5"} rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-200`}
      >
        {social.icon}
      </a>
    ))}
  </div>
);

export default function App() {
  const [showResumeMenu, setShowResumeMenu] = useState(false);

  const techCategories = [
    {
      category: "LANGUAGES",
      skills: [
        { name: "Java", iconUrl: springbootIcon },
        { name: "Python", iconUrl: pythonIcon },
        { name: "JavaScript", iconUrl: jsIcon },
      ]
    },
    {
      category: "FRONTEND",
      skills: [
        { name: "React", iconUrl: reactIcon },
        { name: "HTML5", iconUrl: htmlIcon },
        { name: "CSS3", iconUrl: cssIcon },
        { name: "Tailwind CSS", iconUrl: tailwindIcon },
      ]
    },
    {
      category: "BACKEND",
      skills: [
        { name: "Spring Boot", iconUrl: springbootIcon },
        { name: "FastAPI", iconUrl: fastapiIcon },
        { name: "REST APIs", iconUrl: springbootIcon },
      ]
    },
     {
      category: "DATABASES",
      skills: [
        { name: "SQL", iconUrl: mysqlIcon },
        { name: "PostgreSQL", iconUrl: postgresql },
      ]
    },
    {
      category: "TOOLS",
      skills: [
        { name: "Git", iconUrl: gitIcon },
        { name: "GitHub", iconUrl: githubIcon },
        { name: "Postman", iconUrl: postmanIcon },
        //{ name: "Linux", iconUrl: linuxIcon },
      ]
    },
    {
      category: "AI / DATA",
      skills: [
        { name: "RAG", iconUrl: geminiIcon },
        //{ name: "LLMs", iconUrl: openaiIcon },
        //{ name: "Vector Search", iconUrl: openaiIcon },
        { name: "OpenAI API", iconUrl: openaiIcon },
        { name: "groq", iconUrl: groq },
      ]
    }
  ];

  const services = [
    {
      num: "1",
      icon: Cpu,
      title: "Backend Development",
      desc: "Building structured backend systems and REST APIs with Java, Spring Boot, FastAPI, authentication, validation, and clean architecture."
    },
    {
      num: "2",
      icon: Code2,
      title: "Full Stack Development",
      desc: "Creating practical full-stack applications with React, modern frontend tooling, backend APIs, and database integration."
    },
    {
      num: "3",
      icon: Network,
      title: "AI / RAG Applications",
      desc: "Exploring LLM-powered applications, retrieval-augmented generation, semantic search, vector search, and document intelligence."
    },
    {
      num: "4",
      icon: Database,
      title: "Database & Systems",
      desc: "Working with SQL databases, PostgreSQL, API-driven systems, data retrieval, and scalable application foundations."
    }
  ];

  const projects = [
    // {
    //   badge: "FEATURED PROJECT",
    //   title: "NearNest",
    //   subtitle: "Location-Based Community Alert Platform",
    //   desc: "A full-stack MVP for sharing and discovering nearby community alerts. Built as a solo project with Spring Boot, React, PostgreSQL, authentication, location-based feeds, and real-time-oriented architecture.",
    //   features: [
    //     "Spring Boot REST APIs with authentication & authorization",
    //     "Location-based nearby alert feed with radius filtering",
    //     "React frontend connected to the backend",
    //     "PostgreSQL data persistence with tested API workflows"
    //   ],
    //   tags: [
    //     { name: "Spring Boot", icon: springbootIcon },
    //     { name: "React", icon: reactIcon },
    //     { name: "PostgreSQL", icon: mysqlIcon },
    //   ],
    //   image: null, // Pass imported screenshot variable here
    //   demoUrl: "#",
    //   githubUrl: "#"
    // },
    {
      badge: "PORTFOLIO",
      title: "Ayush Portfolio",
      subtitle: "Interactive Developer Portfolio",
      desc: "My personal portfolio built to showcase my software development journey, projects, technical skills, leadership, and ongoing work across software engineering and AI.",
      features: [
        "React + Vite frontend",
        "Tailwind CSS based responsive interface",
        "Three.js powered interactive visual experience",
        "Deployed on Vercel"
      ],
      tags: [
        { name: "React", icon: reactIcon },
        { name: "JavaScript", icon: jsIcon },
      ],
      image: portfolioSS, // Pass imported screenshot variable here (e.g. portfolioScreenshot)
      demoUrl: "https://ayush-portfolio-orpin.vercel.app",
      githubUrl: "#"
    },
    {
      badge: "BACKEND PROJECT",
      title: "AI Interview Platform",
      subtitle: "AI-Assisted Interview Practice Platform",
      desc: "A backend-focused interview platform built with FastAPI and React, integrating the GroqAI API to power AI-assisted interview interactions.",
      features: [
        "FastAPI backend architecture",
        "React-based frontend",
        "GroqAI API integration",
        "API-driven interview workflow"
      ],
      tags: [
        { name: "React", icon: reactIcon },
        { name: "FastAPI", icon: fastapiIcon },
        { name: "groq", icon: groq },
      ],
      image: AI_Interview,
      demoUrl: "https://ai-mockinterview-platform.onrender.com/",
      githubUrl: "https://github.com/developer-ayushsachdeva/AI_Interview_Platform"
    }
  ];

  const comparisons = [
    {
      goodTitle: "Strong Engineering Fundamentals",
      goodDesc: "Building depth in Java, DSA, OOP, databases, APIs, and core software engineering concepts.",
      badTitle: "Only Surface-Level Development",
      badDesc: "Relying on frameworks without understanding the underlying programming and system fundamentals."
    },
    {
      goodTitle: "Build → Test → Improve",
      goodDesc: "Turning ideas into working projects and iterating through implementation, debugging, and testing.",
      badTitle: "Code Without Iteration",
      badDesc: "Stopping at a prototype instead of validating the system and improving it through real usage."
    },
    {
      goodTitle: "Practical AI Exploration",
      goodDesc: "Applying RAG, vector search, LLMs, and document intelligence to useful software products.",
      badTitle: "AI as a Buzzword",
      badDesc: "Adding AI labels without building meaningful retrieval, data, or application workflows."
    },
    {
      goodTitle: "Continuous Building & Learning",
      goodDesc: "Combining DSA practice, Java development, full-stack work, and AI learning while building real projects.",
      badTitle: "Building & Learning Without Building",
      badDesc: "Collecting tutorials and technologies without turning the learning into working software."
    }
  ];

  return (
    <div className="bg-[#030605] min-h-screen text-gray-200 font-sans selection:bg-white selection:text-black relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* 1. Floating Capsule Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
        <div className="bg-[#0b120e]/80 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2.5 flex items-center justify-between shadow-2xl">
          <div className="font-bold text-white tracking-wide text-sm font-mono">
            Ayush<span className="text-emerald-400">.dev</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-gray-400 font-medium">
            <a href="#tech" className="hover:text-emerald-400 transition-colors duration-200">Tech Stack</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors duration-200">Services</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors duration-200">Projects</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors duration-200">About</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors duration-200">Contact</a>
            
            {/* Resume Dropdown Button */}
            <div className="relative">
              <button 
                onClick={() => setShowResumeMenu(!showResumeMenu)} 
                className="hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1 focus:outline-none"
              >
                Resume <ChevronDown size={12} className={`transition-transform duration-200 ${showResumeMenu ? 'rotate-180' : ''}`} />
              </button>

              {showResumeMenu && (
                <div className="absolute top-8 right-0 bg-[#080d0a] border border-white/10 rounded-xl p-2 shadow-2xl min-w-[160px] flex flex-col gap-1 z-50">
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-950/40 hover:text-emerald-400 text-xs text-gray-200 transition-all duration-200"
                  >
                    <FileText size={14} className="text-emerald-400" /> View Resume
                  </a>
                  <a 
                    href="/resume.pdf" 
                    download="Ayush_Resume.pdf"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-emerald-950/40 hover:text-emerald-400 text-xs text-gray-200 transition-all duration-200"
                  >
                    <Download size={14} className="text-emerald-400" /> Download Resume
                  </a>
                </div>
              )}
            </div>
          </nav>

          <a href="#contact" className="bg-white/10 hover:bg-emerald-500 hover:text-black border border-white/15 text-white text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-md transition-all duration-200">
            Book a Call
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
        {/* Subtle hero glows — kept behind the avatar so its emerald ring blends into the site */}
        <div className="absolute -top-20 right-[-8%] w-[520px] h-[520px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-[18%] w-[220px] h-[220px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-4">
          {/* Hero copy */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400 font-mono text-xs font-medium mb-6 hover:border-emerald-500/40 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Software Developer
            </div>

            <p className="text-gray-400 text-lg mb-1 font-medium">Hi, I'm</p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-3 flex items-center gap-3 group">
              Ayush
              <span className="inline-block text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <ArrowUpRight size={40} />
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold mb-6">
              Software Developer | <span className="text-gray-400 font-normal">AI Builder</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              I build scalable web applications, robust backend systems, and AI-powered solutions that solve real-world business problems.
              Using Java, Spring Boot, FastAPI, React, Python, and RAG/LLMs, I turn ideas into reliable, user-focused digital products.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 lg:mb-12">
              <a href="#contact" className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-emerald-400 transition-all duration-200 shadow-lg hover:shadow-emerald-500/20 text-sm">
                Contact Now
              </a>
              <a href="#projects" className="bg-[#121a15] border border-white/10 text-white font-medium px-6 py-2.5 rounded-full hover:border-emerald-500/50 hover:bg-[#18241d] transition-all duration-200 text-sm">
                View Projects
              </a>
            </div>

            <div className="flex gap-12 border-t border-white/10 pt-7 w-full max-w-md">
              <div className="group cursor-default">
                <div className="text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-200">3+</div>
                <div className="text-xs text-gray-500 font-mono mt-1">Highlighted Projects</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-200">2028</div>
                <div className="text-xs text-gray-500 font-mono mt-1">B.Tech Graduation</div>
              </div>
            </div>
          </div>

          {/* Stylized avatar */}
          <div className="relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="absolute w-[320px] sm:w-[400px] lg:w-[480px] aspect-square rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <img
              src={avatar}
              alt="Stylized avatar of Ayush"
              className="relative z-10 w-[300px] sm:w-[390px] lg:w-[470px] h-auto object-contain drop-shadow-[0_0_45px_rgba(16,185,129,0.18)] transition-transform duration-500 hover:scale-[1.025]"
            />
          </div>
        </div>
      </section>

      {/* 3. Tech Arsenal Section */}
      <section id="tech" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-mono mb-3">
            ⊙ Tech Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Tools & Technologies</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            The technologies I’m currently using to build software, strengthen my engineering fundamentals, and explore AI-powered applications.
          </p>
        </div>

        <div className="space-y-8">
          {techCategories.map((group, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-widest text-purple-400/90 uppercase pl-1">
                | {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-4 py-3 rounded-xl border border-white/10 bg-[#080d0a]/80 backdrop-blur-md flex items-center gap-3 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-[#0d1611] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 cursor-pointer group shadow-md"
                  >
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name} 
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200" 
                    />
                    <span className="font-mono text-xs font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Areas of Expertise / Services Section */}
      <section id="services" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-mono mb-3">
            ⊙ Professional Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Areas of Expertise</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Focused on Java backend development, full-stack applications, DSA, and practical AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-white/10 bg-[#080d0a]/60 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-[#0c140f] hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition-all duration-300 relative group cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-gray-600 font-semibold group-hover:text-emerald-400/80 transition-colors">{item.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-200">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Selected Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-mono mb-3">
            ⊙ Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Selected <span className="font-serif italic font-normal text-gray-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            A selection of projects that represent my current software engineering and AI learning journey.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl border border-white/10 bg-[#080d0a]/80 text-center mb-12 max-w-2xl mx-auto">
          <div className="group cursor-default">
            <div className="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">4+</div>
            <div className="text-[11px] font-mono text-gray-500">Highlighted Projects</div>
          </div>
          <div className="border-x border-white/10 group cursor-default">
            <div className="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">10+</div>
            <div className="text-[11px] font-mono text-gray-500">Core Technologies</div>
          </div>
          <div className="group cursor-default">
            <div className="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">2026</div>
            <div className="text-[11px] font-mono text-gray-500">Building & Learning</div>
          </div>
        </div>

        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="rounded-3xl border border-white/10 bg-[#080d0a]/80 p-6 md:p-8 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.12)] transition-all duration-300 space-y-6 group"
            >
              {/* Clickable Browser Frame */}
              <a 
                href={proj.demoUrl !== "#" ? proj.demoUrl : proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/10 bg-[#030605] overflow-hidden group-hover:border-emerald-500/40 transition-all duration-300 relative group/card cursor-pointer"
              >
                <div className="bg-[#0b120e] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-gray-500 relative z-10">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-gray-400 truncate max-w-[200px] group-hover/card:text-emerald-400 transition-colors">{proj.demoUrl}</span>
                  <div className="w-8" />
                </div>

                {/* Inner Content Area (Supports Background Screenshot or Default Gradient Glow) */}
                <div 
                  className="p-8 min-h-[220px] flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover/card:scale-[1.02]"
                  style={proj.image ? { backgroundImage: `url(${proj.image})` } : {}}
                >
                  {/* Dark Overlay for Readability when Image is Present */}
                  <div className={`absolute inset-0 ${proj.image ? 'bg-black/70 backdrop-blur-[2px]' : 'bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent'} group-hover/card:bg-black/60 transition-colors duration-300`} />

                  <div className="relative z-10 text-center">
                    <h4 className="text-2xl font-extrabold text-white mb-2 group-hover/card:text-emerald-300 transition-colors flex items-center justify-center gap-2">
                      {proj.title}
                      <ArrowUpRight size={20} className="text-gray-500 group-hover/card:text-emerald-400 transition-colors" />
                    </h4>
                    <p className="text-xs font-mono text-emerald-400">{proj.subtitle}</p>
                  </div>
                </div>
              </a>

              <div>
                <span className="inline-block text-[10px] font-mono font-bold tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-md mb-3">
                  {proj.badge}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">{proj.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {proj.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-400">
                      <Check size={14} className="text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5 hover:border-emerald-500/40 hover:text-white transition-all">
                        <img src={tag.icon} alt={tag.name} className="w-3.5 h-3.5 object-contain" />
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={proj.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-emerald-400 hover:shadow-lg transition-all duration-200 relative z-10 cursor-pointer"
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                    <a 
                      href={proj.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-200 relative z-10 cursor-pointer"
                    >
                      Code <svg size={14} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. About Me / Profile Card Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="rounded-3xl border border-white/10 bg-[#080d0a]/80 p-8 md:p-12 space-y-8 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 group">
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 rounded-2xl bg-gradient-to-tr from-emerald-500 to-emerald-900 border border-white/20 p-1 shrink-0 shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b120e] rounded-xl flex items-center justify-center font-extrabold text-3xl text-emerald-400 font-mono">
                <img 
                  src={profilePic} 
                  alt="Ayush" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400 font-mono text-xs mb-2">
                ● Available for opportunities
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">Hello, I’m Ayush</h2>
              <p className="text-gray-400 text-sm mb-4"> Software Developer & AI Builder</p>
              
              <div className="flex items-center gap-2 text-gray-400">
                <SocialLinks compact />
                <a href="mailto:ayush.sachdeva.dev@gmail.com" aria-label="Email" title="Email" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-200">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              I am a Aspiring Software Developer passionate about building scalable web applications and AI-powered systems.
            </p>
            <p>
              I’m building depth in Java, Spring Boot, Python, React, REST APIs, PostgreSQL, DSA, and AI technologies such as RAG, vector search, and LLM applications.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-950/20 transition-all duration-200 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-white text-sm">B.Tech Information Technology</h4>
                <p className="text-xs text-gray-500">Building & Learning</p>
              </div>
              <span className="text-xs font-mono text-emerald-400">2024 - 2028</span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-950/20 transition-all duration-200 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-white text-sm">Software + AI Engineering</h4>
                <p className="text-xs text-gray-500">Personal</p>
              </div>
              <span className="text-xs font-mono text-emerald-400">Current Focus</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. How I Work Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 font-mono mb-3">
            ⊙ How I Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            From <span className="font-serif italic font-normal text-gray-400">Learning</span> to Building
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            A practical approach to strengthening fundamentals, building real software, and continuously improving through implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              num: "01",
              title: "Learn Deeply",
              desc: "Strengthening programming fundamentals, DSA, backend concepts, databases, and software engineering principles."
            },
            {
              num: "02",
              title: "Build Real Systems",
              desc: "Turning concepts into working applications with Java, Spring Boot, React, Python, APIs, and AI technologies."
            },
            {
              num: "03",
              title: "Test & Iterate",
              desc: "Debugging, testing, validating workflows, and improving projects instead of stopping at the first working prototype."
            },
            {
              num: "04",
              title: "Keep Exploring",
              desc: "Experimenting with RAG, semantic search, LLM applications, and new engineering tools through practical projects."
            }
          ].map((item) => (
            <div
              key={item.num}
              className="p-6 rounded-2xl border border-white/10 bg-[#080d0a]/60 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-[#0c140f] hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-emerald-400/80 group-hover:text-emerald-400 transition-colors">
                  {item.num}
                </span>
                <span className="w-8 h-px bg-white/10 group-hover:w-12 group-hover:bg-emerald-500/40 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Contact Card & Footer */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b120e] to-[#040805] p-8 md:p-12 text-center space-y-6 relative overflow-hidden hover:border-emerald-500/30 transition-all duration-300">
          <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-emerald-400 font-mono text-xs">
            ⊙ Let's Connect
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <br />
            <span className="text-gray-400 font-serif italic font-normal">Something Together</span>
          </h2>

          <div className="max-w-md mx-auto space-y-3 text-xs text-gray-400 font-mono text-left pt-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Java / Spring Boot / API Development</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Full Stack + AI / RAG Projects</span>
            </div>
          </div>

          <div className="max-w-md mx-auto p-3 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-500/30 text-xs font-mono text-gray-300 flex items-center justify-between transition-all">
            <span className="truncate">ayushsachdeva36@gmail.com</span>
            <button 
              onClick={() => navigator.clipboard.writeText("ayush.sachdeva.dev@gmail.com")}
              className="text-emerald-400 hover:text-emerald-300 transition shrink-0 ml-2 font-semibold"
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col items-center gap-5 pt-4">
            <div className="flex justify-center gap-4">
              <a href="https://github.com/developer-ayushsachdeva" target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 text-white font-medium px-6 py-2.5 rounded-full hover:bg-white/10 hover:border-white/30 transition-all text-sm">
                View GitHub
              </a>
              <a href="mailto:ayushsachdeva36@gmail.com" className="bg-white text-black font-semibold px-6 py-2.5 rounded-full hover:bg-emerald-400 hover:shadow-lg transition-all text-sm">
                Get In Touch
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Find me</span>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-[#020403] text-xs font-mono text-gray-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white font-bold">Ayush.dev</span>
            <p className="mt-1">© 2026 Ayush Sachdeva. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React, Vite & Tailwind CSS</span>
            <SocialLinks compact />
          </div>
        </div>
      </footer>

    </div>
  );
}
