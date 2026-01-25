
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveGrid from './components/LiveGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import { TRACKING_LINKS, ASSETS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen selection:bg-rose-500/30 relative text-white bg-black font-sans antialiased overflow-x-hidden">
      {/* 沉浸式全局动态背景 */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: `url(${ASSETS.MAIN_BACKGROUND})`,
          filter: 'brightness(0.25) saturate(1.2)' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(225,29,72,0.15)_0%,transparent_50%)]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* 品牌信任背书条 */}
        <section className="bg-white/5 backdrop-blur-2xl py-10 border-y border-white/5 relative">
           <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 items-center text-zinc-500 font-bold tracking-[0.3em] text-xs md:text-sm">
              <span className="hover:text-rose-500 transition-colors cursor-default">PREMIUM ACCESS</span>
              <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
              <span className="hover:text-rose-500 transition-colors cursor-default">VELVET ELITE</span>
              <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
              <span className="hover:text-rose-500 transition-colors cursor-default">ULTRA HD 4K</span>
              <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
              <span className="hover:text-rose-500 transition-colors cursor-default">ANONYMOUS SECURE</span>
           </div>
        </section>

        <section id="explore">
          <LiveGrid />
        </section>
        
        {/* 极简特色互动区域 */}
        <section className="py-24 md:py-48 overflow-hidden relative">
           <div className="max-w-7xl mx-auto px-6">
              <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden border border-white/10 p-10 md:p-24 shadow-2xl bg-zinc-950/60 backdrop-blur-3xl group">
                 {/* 装饰性光晕 */}
                 <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                 
                 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                       <h2 className="text-5xl md:text-8xl font-serif font-bold italic text-white leading-[1.05] tracking-tighter">
                         Beyond Your <br /> 
                         <span className="gradient-text italic">Wildest Fantasies</span>
                       </h2>
                       <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-lg">
                         Velvet is more than a platform. It's an invitation to a secret society where every connection is crafted for pleasure.
                       </p>
                       
                       <div className="flex flex-col sm:flex-row gap-6 pt-4">
                          <a href={TRACKING_LINKS.MAIN_CTA} className="w-full sm:w-auto">
                            <button className="w-full px-12 py-6 bg-rose-600 text-white font-black rounded-2xl hover:bg-rose-500 transition-all text-xl shadow-[0_15px_40px_rgba(225,29,72,0.3)] active:scale-95">
                                Join The Club
                            </button>
                          </a>
                          <button className="px-10 py-6 glass rounded-2xl text-lg font-bold hover:bg-white/5 transition-all border border-white/10">
                             Learn More
                          </button>
                       </div>
                    </div>

                    <div className="relative">
                       <div className="relative aspect-square max-w-[500px] mx-auto">
                          <div className="absolute inset-0 bg-rose-600 rounded-[4rem] rotate-6 scale-95 opacity-20 group-hover:rotate-12 transition-transform duration-700"></div>
                          <img 
                            src={ASSETS.INTERACTION_PREVIEW} 
                            className="relative z-10 w-full h-full object-cover rounded-[4rem] border-8 border-zinc-900 shadow-2xl transition-transform duration-700 group-hover:-rotate-3" 
                            alt="Luxury Interaction" 
                          />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <Features />

        {/* 底部召集区域 (Final CTA) */}
        <section className="py-40 relative text-center overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-rose-950/5 to-transparent"></div>
           <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
              <h2 className="text-6xl md:text-[120px] font-serif font-bold italic tracking-tighter text-white drop-shadow-2xl opacity-90 leading-none">The Night Is Yours.</h2>
              <p className="text-2xl md:text-3xl text-zinc-300 font-light max-w-2xl mx-auto">Don't let another moment of desire slip away in silence.</p>
              
              <div className="pt-8">
                <a href={TRACKING_LINKS.MAIN_CTA} className="relative inline-block group">
                  <div className="absolute inset-0 bg-rose-600 blur-[50px] opacity-30 group-hover:opacity-60 transition-opacity"></div>
                  <button className="relative px-20 py-8 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-full text-3xl transition-all shadow-2xl hover:scale-105 active:scale-95 border-t border-rose-400/30">
                    Unlock Private Entrance
                  </button>
                </a>
              </div>
              <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase pt-10">No Credit Card Required For Basic Access</p>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
