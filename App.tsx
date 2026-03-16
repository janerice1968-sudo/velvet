
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TRACKING_LINKS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center selection:bg-rose-100 font-sans antialiased">
      <main className="max-w-[700px] w-full flex flex-col items-center space-y-12 py-12">
        {/* Main Title */}
        <div className="space-y-6 w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 leading-[1.1] md:leading-[0.9]">
            Private Online <br /> Community
          </h1>
          
          {/* Red Emphasis Text */}
          <p className="text-rose-600 font-bold text-xl md:text-3xl tracking-tight">
            Over 12,000 active profiles available now.
          </p>
          
          {/* Auxiliary Text */}
          <p className="text-zinc-400 text-lg md:text-xl font-medium">
            Free registration • Instant access
          </p>
        </div>

        {/* CTA Button Area */}
        <div className="flex flex-col items-center space-y-6 w-full">
          <a href={TRACKING_LINKS.MAIN_CTA} className="w-full sm:w-auto">
            <motion.button
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  "0 20px 35px -5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1)",
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                y: -4,
                scale: 1.06,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.96 }}
              className="bg-zinc-950 text-white font-bold py-8 px-20 rounded-full text-3xl transition-colors hover:bg-zinc-900 w-full sm:w-auto relative overflow-hidden group"
            >
              View Profiles
              {/* Subtle Glow Layer */}
              <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.button>
          </a>
          
          {/* Small Text below button */}
          <p className="text-zinc-500 text-lg font-semibold tracking-wide">
            You must be 18+ to continue.
          </p>
        </div>

        {/* Description Text */}
        <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Simple and fast entry to explore profiles and start private conversations.
        </p>
      </main>

      {/* Faint Brand Name at Bottom - Absolute to keep main centered */}
      <footer className="absolute bottom-10 w-full text-center">
        <p className="text-zinc-200 text-xs font-black uppercase tracking-[0.5em] select-none">
          VELVETROOM.COM
        </p>
      </footer>
    </div>
  );
};

export default App;
