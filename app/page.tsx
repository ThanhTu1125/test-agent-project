'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, Code2, Server, Smartphone, ExternalLink, GitBranch } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex justify-center p-4 sm:p-8 font-sans selection:bg-neutral-800 selection:text-white">
      <div className="w-full max-w-md space-y-4 my-auto">
        
        {/* Header / Avatar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl flex items-center gap-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-neutral-950 rounded-[14px] flex items-center justify-center font-bold text-xl text-white">
              TT
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Tú Nguyễn</h1>
            <p className="text-xs text-neutral-400 mt-0.5">Software Engineering & Fullstack</p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-400 font-medium">Available for projects</span>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Bento */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col items-center justify-center text-center gap-2">
            <Server className="w-5 h-5 text-indigo-400" />
            <span className="text-xs font-medium text-neutral-300">Spring Boot</span>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col items-center justify-center text-center gap-2">
            <Smartphone className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-medium text-neutral-300">React Native</span>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col items-center justify-center text-center gap-2">
            <Code2 className="w-5 h-5 text-fuchsia-400" />
            <span className="text-xs font-medium text-neutral-300">Next.js</span>
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-5 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl space-y-2 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Dự án nổi bật</span>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-base font-semibold text-white">Fullstack Mobile Application</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Hệ thống ứng dụng di động đa nền tảng tối ưu hóa hiệu năng, kết nối backend kiến trúc microservices/RESTful.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-center gap-2 text-xs font-medium hover:bg-neutral-800/60 transition-all text-neutral-300 hover:text-white"
          >
            <GitBranch className="w-4 h-4" /> GitHub
          </a>
          <a 
            href="mailto:your-email@gmail.com" 
            className="flex-1 p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-center gap-2 text-xs font-medium hover:bg-neutral-800/60 transition-all text-neutral-300 hover:text-white"
          >
            <Mail className="w-4 h-4" /> Liên hệ
          </a>
        </motion.div>

      </div>
    </main>
  );
}