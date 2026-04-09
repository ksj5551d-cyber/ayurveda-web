"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenIntro");
    if (hasSeen) {
      setLoading(false);
    } else {
      // Set the flag immediately to ensure it only plays once even if interrupted
      sessionStorage.setItem("hasSeenIntro", "true");
      setIsFirstVisit(true);
    }
  }, []);

  if (!loading) return <>{children}</>;
  
  // Show a solid color background while checking to avoid white flash
  if (!isFirstVisit && loading) return <div className="fixed inset-0 bg-primary z-[100]" />;

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
