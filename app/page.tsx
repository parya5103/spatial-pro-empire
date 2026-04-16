
import React from 'react';
import { Rocket, Shield, Zap, Globe, Cpu, TrendingUp, ArrowRight, User, Mail, Box } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020205] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Box className="text-white" size={18} />
            </div>
            <span className="text-xl font-black text-white tracking-tighter italic">SPATIAL<span className="text-blue-500">PRO</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">Intelligence</a>
            <a href="#" className="hover:text-white transition-colors">Hardware</a>
            <a href="#" className="hover:text-white transition-colors">Workflow</a>
            <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">Connect</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4">
            <Sparkles size={12} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">V.4.0 Autonomous Deployment Active</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.85] mb-8 italic uppercase">
            Infinite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">Canvas</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            The definitive field guide for the spatial computing professional. Master your workflow across visionOS, Quest, and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl">
              Access intelligence
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md">
              Explore Hardware
            </button>
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-44">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "Hardware Alpha", desc: "Rigorous testing of 8K spatial displays and immersive haptics.", color: "text-blue-400" },
            { icon: Zap, title: "Flow State", desc: "Optimizing 12-hour coding sprints in the Apple Vision Pro environment.", color: "text-purple-400" },
            { icon: Shield, title: "Data Sovereign", desc: "Privacy-first spatial computing strategies for the modern enterprise.", color: "text-emerald-400" }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all hover:translate-y-[-8px]">
              <item.icon className={item.color + " mb-8 group-hover:scale-110 transition-transform"} size={32} />
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center text-[10px] font-black uppercase tracking-widest text-blue-500 group-hover:text-white transition-colors">
                Read Report <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-6 pb-44">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic">Join the Vanguard</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">Get autonomous trend reports delivered to your inbox every Sunday.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="agent@spatial.pro" className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none placeholder:text-blue-200 focus:bg-white/20 transition-all" />
              <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-30">
          <div className="flex items-center space-x-3 mb-8 md:mb-0">
            <Box size={20} />
            <span className="font-black text-sm tracking-tighter uppercase italic">Spatial Pro</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] flex space-x-12">
            <span>Terms</span>
            <span>Privacy</span>
            <span>parya5103.AI</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
