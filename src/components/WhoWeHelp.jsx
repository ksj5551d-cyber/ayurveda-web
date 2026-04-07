"use client";

import { motion } from "framer-motion";
import { Activity, Shield, Users, BookOpen, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: Activity,
    title: "Chronic & Long-Standing Health Conditions",
    desc: "For people dealing with ongoing health problems such as digestive disorders, autoimmune or inflammatory conditions, chronic skin or pain disorders, hormonal or metabolic imbalances — and other difficult-to-treat conditions.",
    image: "/images/help1.jpg"
  },
  {
    icon: Shield,
    title: "Those Who Haven't Found Lasting Relief",
    desc: "Individuals who have tried multiple approaches but are still seeking a deeper, root-cause–based and medically supervised treatment plan.",
    image: "/images/help2.jpg"
  },
  {
    icon: Users,
    title: "Serious Wellness & Lifestyle Seekers",
    desc: "Those looking for medically supervised Panchakarma, structured lifestyle correction, and long-term health stability — not short-term detox programs.",
    image: "/images/help3.jpg"
  },
  {
    icon: BookOpen,
    title: "Serious Learners of Ayurveda & Professionals",
    desc: "Yoga teachers, therapists, and healthcare practitioners seeking authentic clinical understanding through structured courses and immersion programs.",
    image: "/images/help4.jpg"
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 bg-secondary/80 text-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">Who We Help</h2>
          <p className="text-xl font-medium text-gray-800">
            People seeking serious, personalized Ayurvedic care or structured Ayurvedic learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col justify-end"
              >
                {/* Background Image */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply transition-opacity group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90" />

                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:rotate-12">
                   <ArrowUpRight size={24} />
                </div>

                <div className="relative z-10 p-8 md:p-10 flex flex-col">
                  <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:-translate-y-2 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">{card.title}</h3>
                  <p className="text-white/80 leading-relaxed font-medium">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
