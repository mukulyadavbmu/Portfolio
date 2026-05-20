"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [lines, setLines] = useState<number>(0);

  useEffect(() => {
    const handleSkip = () => setIsVisible(false);
    document.addEventListener("keydown", handleSkip, { once: true });
    
    const intervals = [500, 1000, 1500, 2000, 2500, 3000, 3500];
    intervals.forEach((time, index) => {
      setTimeout(() => setLines(index + 1), time);
    });

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      document.removeEventListener("keydown", handleSkip);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-[9999] bg-[#0a0e1a] flex items-center justify-center cursor-pointer overflow-hidden font-mono text-[var(--accent-green)]"
        >
          <div className="w-full max-w-3xl p-8">
            <div className="mb-8 overflow-hidden">
              <pre className="text-[0.7rem] leading-tight text-center animate-glitch text-[var(--accent-green)] drop-shadow-[0_0_10px_rgba(0,255,140,0.5)] hidden md:block">
{` ____  _____ _   _ _____ _     ___  ____  _____ ____  
|  _ \\| ____| | | | ____| |   / _ \\|  _ \\| ____|  _ \\ 
| | | |  _| | | | |  _| | |  | | | | |_) |  _| | |_) |
| |_| | |___| |_| | |___| |__| |_| |  __/| |___|  _ < 
|____/|_____|\\___/|_____|_____\\___/|_|   |_____|_| \\_\\`}
              </pre>
              <pre className="text-[0.6rem] leading-tight text-center animate-glitch text-[var(--accent-green)] drop-shadow-[0_0_10px_rgba(0,255,140,0.5)] md:hidden">
{` __  __ _   _ _  ___   _ _     
|  \\/  | | | | |/ / | | | |    
| |\\/| | | | | ' /| | | | |    
| |  | | |_| | . \\| |_| | |___ 
|_|  |_|\\___/|_|\\_\\\\___/|_____|`}
              </pre>
            </div>

            <div className="mb-8 space-y-3 text-sm md:text-base text-gray-400">
              {lines >= 1 && <p><span className="text-[var(--accent-cyan)] font-bold mr-2">[SYSTEM]</span> Initializing system...</p>}
              {lines >= 2 && <p><span className="text-[var(--accent-cyan)] font-bold mr-2">[BOOT]</span> Loading core modules <span className="after:content-[''] after:animate-[dots_1.5s_infinite]"></span></p>}
              {lines >= 3 && <p><span className="text-[var(--accent-cyan)] font-bold mr-2">[INIT]</span> Mounting file systems <span className="float-right text-[var(--accent-green)] font-bold">[OK]</span></p>}
              {lines >= 4 && <p><span className="text-[var(--accent-cyan)] font-bold mr-2">[LOAD]</span> Starting network services <span className="float-right text-[var(--accent-green)] font-bold">[OK]</span></p>}
              {lines >= 5 && <p><span className="text-[var(--accent-cyan)] font-bold mr-2">[EXEC]</span> Loading portfolio.sh <span className="after:content-[''] after:animate-[dots_1.5s_infinite]"></span></p>}
              {lines >= 6 && <p><span className="text-[var(--accent-cyan)] font-bold mr-2">[INIT]</span> Initializing user interface <span className="float-right text-[var(--accent-green)] font-bold">[OK]</span></p>}
              {lines >= 7 && <p><span className="text-[var(--accent-cyan)] font-bold mr-2">[DONE]</span> System ready <span className="float-right text-[var(--accent-yellow)] font-bold animate-pulse">[READY]</span></p>}
            </div>

            <div className="mb-8 h-1 bg-white/10 rounded-sm overflow-hidden opacity-0 animate-[fadeIn_0.3s_forwards_4s]">
              <div className="h-full bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-cyan)] w-0 animate-[progress_2s_ease-out_forwards_4s] shadow-[0_0_10px_rgba(0,255,140,0.5)]"></div>
            </div>

            <p className="text-center text-[var(--accent-green)] text-sm opacity-0 animate-[fadeIn_0.3s_forwards_4.5s]">
              <span className="animate-blink">Press any key to continue...</span> 
              <span className="ml-2 text-gray-500">— mukulyadav</span>
            </p>
          </div>

          <style jsx global>{`
            @keyframes dots {
              0%, 20% { content: '.'; }
              40% { content: '..'; }
              60%, 100% { content: '...'; }
            }
            @keyframes progress {
              to { width: 100%; }
            }
            @keyframes fadeIn {
              to { opacity: 1; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
