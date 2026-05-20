"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLORS = [
  "border-[var(--accent-green)] text-[var(--accent-green)] shadow-[0_0_15px_rgba(0,255,140,0.3)]",
  "border-[var(--accent-cyan)] text-[var(--accent-cyan)] shadow-[0_0_15px_rgba(0,217,255,0.3)]",
  "border-[var(--accent-red)] text-[var(--accent-red)] shadow-[0_0_15px_rgba(255,62,62,0.3)]",
  "border-[var(--accent-yellow)] text-[var(--accent-yellow)] shadow-[0_0_15px_rgba(255,215,0,0.3)]",
];

export function SkillBubbles({ skills, categoryIndex }: { skills: string[], categoryIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    // Generate random initial positions for the bubbles within the container
    const newBubbles = skills.map((skill, i) => {
      const size = Math.max(80, Math.min(120, skill.length * 8)); // Dynamic size based on text length
      const colorClass = COLORS[(categoryIndex + i) % COLORS.length];
      return {
        id: skill,
        text: skill,
        size,
        colorClass,
        // Random starting positions
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      };
    });
    setBubbles(newBubbles);
  }, [skills, categoryIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[300px] bg-black/20 rounded-xl overflow-hidden border border-[var(--border-subtle)] flex items-center justify-center p-4">
      {bubbles.map((bubble, i) => (
        <motion.div
          key={bubble.id}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          whileHover={{ 
            scale: 1.1, 
            x: bubble.x + (Math.random() > 0.5 ? 50 : -50),
            y: bubble.y + (Math.random() > 0.5 ? 50 : -50),
            transition: { type: "spring", stiffness: 300, damping: 10 }
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: bubble.x,
            y: bubble.y,
            transition: { 
              type: "spring", 
              stiffness: 50, 
              damping: 10,
              delay: i * 0.1 
            }
          }}
          className={`absolute flex items-center justify-center text-center p-3 rounded-full border-2 bg-[#121212]/80 backdrop-blur cursor-grab active:cursor-grabbing font-mono text-xs font-bold z-10 hover:z-20 ${bubble.colorClass}`}
          style={{ width: bubble.size, height: bubble.size }}
        >
          {bubble.text}
        </motion.div>
      ))}
      <div className="absolute bottom-2 right-4 text-[10px] text-gray-500 font-mono tracking-widest uppercase opacity-50">
        [ Interactive Zone ]
      </div>
    </div>
  );
}
