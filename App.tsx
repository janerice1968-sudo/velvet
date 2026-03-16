
import React from 'react';

const App: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/406447/8873/37511?source=facebook_ads&aff_sub5=SF_006OG000004lmDN";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-[600px] space-y-10">
        {/* 1. Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Private Online Community
        </h1>

        <div className="space-y-6">
          {/* 2. Number Hint */}
          <div className="space-y-2">
            <p className="text-base font-bold text-red-600 tracking-wide">
              Over 12,000 active profiles available now.
            </p>
            <p className="text-sm font-medium text-gray-600">
              Free registration • Instant access
            </p>
          </div>
          
          {/* 3. View Profiles Button (Increased Padding) */}
          <div className="space-y-3">
            <div className="flex justify-center">
              <a 
                href={EXTERNAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-[340px] py-6 bg-black text-white text-xl font-bold rounded-full hover:bg-gray-800 transition-all shadow-xl active:scale-[0.98]"
              >
                View Profiles
              </a>
            </div>

            <p className="text-xs text-gray-400 font-medium">
              You must be 18+ to continue.
            </p>
          </div>
        </div>

        {/* 4. Description Text (Moved below button) */}
        <p className="text-lg text-gray-500 leading-relaxed text-balance max-w-md mx-auto">
          Simple and fast entry to explore profiles and start private conversations.
        </p>

        {/* Footer info */}
        <div className="pt-20 text-[10px] text-gray-300 tracking-[0.4em] uppercase">
          softdesireroom.com
        </div>
      </div>
    </div>
  );
};

export default App;
