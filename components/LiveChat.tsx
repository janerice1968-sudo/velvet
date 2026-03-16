import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHAT_MESSAGES } from '../constants';
import { ChatMessage } from '../types';
import { MessageSquare, Users } from 'lucide-react';

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(CHAT_MESSAGES);
  const [isVisible, setIsVisible] = useState(true);

  // Simulate new messages arriving
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg = CHAT_MESSAGES[Math.floor(Math.random() * CHAT_MESSAGES.length)];
      const newMsg = {
        ...randomMsg,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: 'Just now'
      };
      setMessages(prev => [newMsg, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:block">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-80 glass rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="p-4 bg-white/5 border-bottom border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Live Activity</span>
              </div>
              <div className="flex items-center gap-2 text-rose-400">
                <Users size={12} />
                <span className="text-[10px] font-black">12.4k Online</span>
              </div>
            </div>

            <div className="p-4 space-y-4 max-h-64 overflow-y-auto no-scrollbar">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                  >
                    <img 
                      src={msg.avatar} 
                      alt={msg.user} 
                      className="w-8 h-8 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="text-[10px] font-bold text-rose-400 truncate">{msg.user}</span>
                        <span className="text-[8px] text-zinc-500 whitespace-nowrap">{msg.timestamp}</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-snug mt-0.5">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="w-full py-3 text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors bg-white/5"
            >
              Minimize Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isVisible && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsVisible(true)}
          className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-xl hover:bg-rose-500 transition-colors"
        >
          <MessageSquare size={20} />
        </motion.button>
      )}
    </div>
  );
};

export default LiveChat;
