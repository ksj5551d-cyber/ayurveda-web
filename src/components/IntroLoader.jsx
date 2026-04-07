"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return <>{children}</>;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="relative flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          AyurCare
        </motion.div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="h-0.5 bg-secondary w-full origin-left"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-secondary/80 mt-6 tracking-widest uppercase text-sm"
        >
          Himalayan Healing Center
        </motion.div>
      </div>
    </motion.div>
  );
}
