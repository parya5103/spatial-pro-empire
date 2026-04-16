
import React from 'react';
import { Rocket, Shield, Zap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20 backdrop-blur-md sticky top-0">
        <div className="flex items-center space-x-2">
          <Zap className="text-blue-500" size={24} />
          <span className="text-xl font-black tracking-tighter text-white">SPATIAL PRO</span>
        </div>
        <div className="flex space-x-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <span className="text-white">Home</span>
          <span>Reviews</span>
          <span>Guides</span>
        </div>
      </nav>
      
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
          THE FUTURE IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">SPATIAL</span>
        </h1>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Optimizing human productivity in the era of AR/VR, Vision Pro, and immersive computing workflows.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group">
            <Rocket className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Workflow Optimization</h3>
            <p className="text-sm text-slate-500">Deep dives into Meta Quest 3 and Apple Vision Pro productivity setups.</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group">
            <Shield className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Spatial OS Reviews</h3>
            <p className="text-sm text-slate-500">Comparing visionOS vs Meta Horizon OS for professional developers.</p>
          </div>
        </div>
      </div>
    </main>
  );
}