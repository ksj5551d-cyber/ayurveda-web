"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Ananya Sharma",
      title: "BAMS, MD (Ayurveda)",
      desc: "12+ years clinical experience managing chronic digestive, autoimmune, respiratory, and metabolic conditions. Focused on personalized, root-cause–based treatment and long-term care.",
      img: "/images/doctor1.jpg",
    },
    {
      name: "Dr. Vikram Singh",
      title: "BAMS, MSc (Health)",
      desc: "Clinical expertise in complex and long-standing conditions with emphasis on individualized treatment planning and careful supervision.",
      img: "/images/doctor2.jpg",
    },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the Doctors</h2>
          <p className="text-xl text-zinc-400">
            Experienced Ayurvedic physicians personally guiding your treatment and learning journey.
          </p>
        </motion.div>

        <div className="flex md:grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto overflow-x-auto hide-scrollbar mobile-scroll-snap pb-8 md:pb-0 px-4 -mx-4 md:px-0 md:mx-0">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col bg-zinc-800/50 rounded-3xl overflow-hidden border border-zinc-700/50 backdrop-blur-sm group min-w-[300px] md:min-w-0"
            >
              <div className="h-72 overflow-hidden bg-zinc-800 relative">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
                <h4 className="text-primary font-medium mb-4">{doctor.title}</h4>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {doctor.desc}
                </p>
                <button className="flex items-center space-x-2 text-white font-medium hover:text-primary transition-colors group/btn">
                  <span>View Full Profile</span>
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-primary/20 border border-primary/30 px-6 py-3 rounded-full">
            <p className="text-zinc-200 font-medium">
              All treatments at AyurCare are personally evaluated and supervised by the doctors throughout the program.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
