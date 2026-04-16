import React from 'react';
import { Rocket, Shield, Zap, Globe, Cpu, TrendingUp, ArrowRight, Box, Sparkles, FileText } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020205] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Box className="text-white" size={18} />
            </div>
            <span className="text-xl font-black text-white tracking-tighter italic uppercase">SPATIAL<span className="text-blue-500">PRO</span></span>
          </div>
      </nav>
      <header className="relative pt-44 pb-32 px-6 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8">
            <Sparkles size={12} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Autonomous Node Active</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-8 italic uppercase text-glow">Infinite Canvas</h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">The professional field guide to spatial computing. 24/7 autonomous intelligence updates.</p>
        </div>
      </header>
    </main>
  );
}