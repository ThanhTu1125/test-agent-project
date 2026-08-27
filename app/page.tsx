'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, 
  Mail, 
  Server, 
  Smartphone, 
  Code2, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  ArrowUpRight,
  FolderGit2,
  Terminal,
  Send,
  Copy,
  Check,
  Bot,
  Flame
} from 'lucide-react';

const techStack = [
  { name: 'Spring Boot', category: 'Backend Engine', icon: Server, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { name: 'React Native', category: 'Mobile App', icon: Smartphone, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { name: 'Next.js 15', category: 'Fullstack Web', icon: Code2, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/20' },
  { name: 'Git Agent / CI', category: 'Automation', icon: Bot, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
];

const projects = [
  {
    id: 1,
    title: 'Mobile Architecture Core',
    tag: 'Mobile & Backend',
    desc: 'Hệ sinh thái mobile đa nền tảng tối ưu RAM, tích hợp RESTful Spring Boot và bảo mật đa tầng.',
    tech: ['React Native', 'Spring Boot', 'PostgreSQL'],
    link: 'https://github.com/ThanhTu1125',
    featured: true
  },
  {
    id: 2,
    title: 'Autonomous Git Agent',
    tag: 'DevOps & AI',
    desc: 'Hệ thống tự động hóa commit, review diff và điều phối pipeline GitHub hoàn toàn tự động.',
    tech: ['TypeScript', 'GitHub Actions', 'AI Orchestration'],
    link: 'https://github.com/ThanhTu1125',
    featured: true
  },
  {
    id: 3,
    title: 'Cloudflare Edge Gateway',
    tag: 'Cloud & Edge',
    desc: 'Triển khai ứng dụng phân tán toàn cầu tại edge server với tốc độ phản hồi sub-millisecond.',
    tech: ['Cloudflare Pages', 'Static Engine', 'Tailwind CSS'],
    link: 'https://github.com/ThanhTu1125',
    featured: false
  }
];

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const fullText = 'const developer = { focus: "Backend & Mobile", vibe: "Cyber-minimal" };';

  const categories = ['All', 'Mobile & Backend', 'DevOps & AI', 'Cloud & Edge'];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('thanhtu.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tag === filter);

  return (
    <main className="min-h-screen bg-[#050608] text-neutral-100 flex justify-center px-4 py-8 sm:py-12 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Animated Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="w-full max-w-md space-y-4 relative z-10">
        
        {/* Profile Card Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-[28px] bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-2xl relative overflow-hidden group shadow-2xl shadow-black/80"
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-4 items-center">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-[2px] shadow-lg shadow-indigo-500/20 cursor-pointer"
              >
                <div className="w-full h-full bg-[#090b10] rounded-[14px] flex items-center justify-center font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                  TT
                </div>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  Tú Nguyễn
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </h1>
                <p className="text-xs text-neutral-400 mt-0.5">Software Engineering & Architecture</p>
              </div>
            </div>
            
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Active
            </span>
          </div>

          {/* Terminal Typing Line */}
          <div className="mt-4 p-3 rounded-xl bg-black/50 border border-neutral-800/60 flex items-center gap-2 text-[11px] font-mono text-cyan-300/90">
            <Terminal className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
            <span className="truncate">{terminalText}</span>
            <span className="w-1.5 h-3.5 bg-cyan-400 animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Tech Stack Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-2.5"
        >
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-3.5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-xl flex items-center gap-3 cursor-default"
              >
                <div className={`p-2 rounded-xl ${tech.bg} ${tech.border} border`}>
                  <Icon className={`w-4 h-4 ${tech.color}`} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-neutral-200">{tech.name}</h4>
                  <span className="text-[10px] text-neutral-500">{tech.category}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                filter === cat 
                  ? 'text-white bg-neutral-800 border border-neutral-700 shadow-md' 
                  : 'text-neutral-400 hover:text-neutral-200 bg-neutral-900/30 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Section */}
        <motion.div layout className="space-y-2.5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-xl hover:border-neutral-700/80 transition-all group relative overflow-hidden shadow-lg shadow-black/30"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400/90">{project.tag}</span>
                    <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mt-0.5 flex items-center gap-1.5">
                      {project.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400" />
                    </h3>
                  </div>
                  <div className="p-1.5 rounded-lg bg-neutral-800/60 text-neutral-400 group-hover:text-white transition-colors">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-800/70 text-neutral-300 border border-neutral-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-2.5 pt-1"
        >
          <motion.a 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/ThanhTu1125" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-center gap-2 text-xs font-semibold hover:bg-neutral-800/80 transition-all text-neutral-200 shadow-md"
          >
            <GitBranch className="w-4 h-4 text-neutral-400" /> GitHub Profile
          </motion.a>
          
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={copyEmail}
            className="p-3 rounded-2xl bg-gradient-to-r from-indigo-600/80 to-cyan-600/80 border border-cyan-500/30 flex items-center justify-center gap-2 text-xs font-semibold hover:opacity-90 transition-all text-white shadow-lg shadow-indigo-500/20"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép email' : 'Sao chép Email'}</span>
          </motion.button>
        </motion.div>

      </div>
    </main>
  );
}