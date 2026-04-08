"use client";

import { motion } from "framer-motion";
import { UserCheck, Sliders, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: UserCheck,
      title: "Doctor-Led & Personally Supervised Care",
      desc: "Every patient is personally evaluated and supervised by the doctor throughout treatment. We accept a limited number of patients to ensure deep clinical oversight.",
      image: "/images/help1.jpg"
    },
    {
      icon: Sliders,
      title: "Dynamic, Response-Based Treatment",
      desc: "Treatment plans are not fixed as packages in advance. Decisions are made with close observation and may be adjusted daily based on your condition.",
      image: "/images/doctor2.jpg"
    },
    {
      icon: Clock,
      title: "15+ Years Managing Complex Cases",
      desc: "With over 15 years of clinical experience, we have successfully worked with individuals facing long-standing and exceptionally difficult health challenges.",
      image: "/images/help4.jpg"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/40 via-secondary/20 to-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">Why Patients Choose AyurCare</h2>
          <p className="text-xl text-gray-700 font-medium">
            Focused, doctor-led care for those seeking serious and personalized Ayurvedic treatment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 flex flex-col group border border-white relative z-10"
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                  <img 
                    src={reason.image} 
                    alt={reason.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Icon overlapping image and text */}
                  <div className="absolute -bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3 group-hover:rotate-6 transition-transform z-20">
                    <Icon size={24} />
                  </div>
                </div>
                
                <div className="p-6 md:p-8 pt-8 md:pt-10 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight">{reason.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-grow">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
