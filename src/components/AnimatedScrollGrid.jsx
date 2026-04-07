"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function AnimatedScrollGrid({ children }) {
  const containerRef = useRef(null);
  const numSections = 8;
  const totalStages = numSections + 1;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full" style={{ position: "relative", height: `${totalStages * 100}vh` }}>
      <ScrollGridRenderer 
        scrollYProgress={scrollYProgress} 
        totalStages={totalStages} 
        childrenArray={children} 
      />
    </div>
  );
}

import React, { useState } from "react";
import { useMotionValueEvent } from "framer-motion";

function ScrollGridRenderer({ scrollYProgress, totalStages, childrenArray }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const elements = React.Children.toArray(childrenArray);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = Math.floor(latest * totalStages);
    if (index >= totalStages) index = totalStages - 1;
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const boxData = [
    { title: "Who We Help", bg: "/images/help1.jpg", w: "260px", h: "200px", t: "10%", l: "5%", z: 10 },
    { title: "Choose Your Path", bg: "/images/help4.jpg", w: "320px", h: "350px", t: "20%", l: "65%", z: 12 },
    { title: "Why Choose Us", bg: "/images/help3.jpg", w: "240px", h: "280px", t: "45%", l: "12%", z: 15 },
    { title: "Meet The Doctors", bg: "/images/doctor2.jpg", w: "300px", h: "220px", t: "65%", l: "55%", z: 11 },
    { title: "Our Clinical Approach", bg: "/images/clinic.jpg", w: "260px", h: "300px", t: "15%", l: "35%", z: 14 },
    { title: "Patient Experiences", bg: "/images/help2.jpg", w: "220px", h: "200px", t: "75%", l: "25%", z: 16 },
    { title: "Healing Environment", bg: "/images/hero.jpg", w: "250px", h: "250px", t: "55%", l: "75%", z: 13 },
    { title: "Learn from Articles", bg: "/images/articles.jpg", w: "200px", h: "200px", t: "35%", l: "82%", z: 17 }
  ];

  return (
    <>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-zinc-50 border-t border-gray-200">
        <AnimatePresence mode="wait">
          {activeIndex === 0 ? (
            <motion.div
              key="grid-view"
              className="relative w-full h-full max-w-7xl mx-auto py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-50">
                <h2 className="text-5xl md:text-7xl text-primary font-bold tracking-tight bg-white/90 px-10 py-6 rounded-full backdrop-blur-md shadow-2xl">Scroll to Explore</h2>
              </div>
              
              {/* Desktop layout */}
              <div className="hidden md:block w-full h-full relative">
                {boxData.map((box, i) => (
                  <motion.div
                    key={`box-${i}`}
                    layoutId={`box-${i}`}
                    className="absolute rounded-3xl shadow-xl overflow-hidden group border-4 border-white bg-white"
                    style={{ width: box.w, height: box.h, top: box.t, left: box.l, zIndex: box.z }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${box.bg})` }} />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center p-6 text-center backdrop-blur-[2px]">
                      <h3 className="font-bold text-white text-xl md:text-2xl drop-shadow-md">{box.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Fallback layout without duplicate layoutId */}
              <div className="md:hidden flex flex-col gap-6 px-6 overflow-y-auto h-full pb-32">
                {boxData.map((box, i) => (
                  <motion.div
                    key={`box-mobile-${i}`}
                    className="relative rounded-3xl overflow-hidden aspect-video border-4 border-white shadow-xl w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${box.bg})` }} />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center p-6 text-center">
                      <h3 className="font-bold text-white text-2xl drop-shadow-md">{box.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`section-${activeIndex}`}
              layoutId={typeof window !== "undefined" && window.innerWidth >= 768 ? `box-${activeIndex - 1}` : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, borderRadius: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full overflow-y-auto custom-scrollbar flex flex-col items-center justify-center py-20 bg-white relative z-40"
            >
              <div className="w-full h-full flex flex-col">
                {elements[activeIndex - 1]}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </>
  );
}
