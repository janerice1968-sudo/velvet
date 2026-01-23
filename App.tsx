
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ModelCard from './components/ModelCard';
import ChatPreview from './components/ChatPreview';
import Features from './components/Features';
import Footer from './components/Footer';
import { MOCK_MODELS, GLOBAL_CONFIG } from './constants';

const App: React.FC = () => {
  const handleAction = () => {
    window.open(GLOBAL_CONFIG.TRACKING_LINK, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <section id="discover" className="py-40 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <h2 className="text-5xl font-serif font-light mb-6 text-white italic tracking-tighter">Tonight's <span className="not-italic text-rose-900 font-bold">Obsessions</span></h2>
              <p className="text-white/10 text-[10px] tracking-[0.5em] uppercase font-bold">Who is waiting for your inspection in the shadows?</p>
            </div>
            <button 
              onClick={handleAction}
              className="text-[10px] font-bold text-white/20 hover:text-rose-800 flex items-center gap-4 group tracking-[0.4em] uppercase transition-colors"
            >
              Dive Deeper 
              <span className="w-12 h-px bg-white/[0.05] group-hover:bg-rose-900 group-hover:w-20 transition-all duration-700"></span>
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {MOCK_MODELS.map(model => (
              <div key={model.id} onClick={handleAction}>
                <ModelCard model={model} />
              </div>
            ))}
          </div>
        </section>

        <Features />

        <ChatPreview />

        <section id="premium" className="py-56 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(76,5,25,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-9xl font-serif font-light mb-16 leading-none tracking-tighter">Unmask <br /><span className="text-rose-950 italic opacity-80">Everything.</span></h2>
            <p className="text-white/20 max-w-xl mx-auto mb-24 font-light text-base leading-relaxed tracking-wider">
              The free world is only a surface. Join the VELVET Club to unlock forbidden footage, private 1-on-1 commands, and the raw wildness that only blooms in the dark.
            </p>
            
            <div className="flex flex-col items-center gap-14">
              <button 
                onClick={handleAction}
                className="btn-velvet px-20 py-8 rounded-full font-bold text-[11px] letter-spacing-xl uppercase text-white/90"
              >
                Get VIP Private Access
              </button>
              
              <div className="flex items-center gap-12 text-[9px] text-white/10 font-bold tracking-[0.4em] uppercase">
                <span>Discrete Billing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/5"></span>
                <span>Encrypted Tunnels</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/5"></span>
                <span>Elite Access</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
