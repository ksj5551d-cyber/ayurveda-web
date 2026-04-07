"use client";

import { motion } from "framer-motion";
import { Star, Play } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "United Kingdom",
      condition: "Chronic Rheumatoid Arthritis",
      outcome: "Significant reduction in joint swelling and pain after a 21-day individualized Panchakarma program.",
    },
    {
      name: "David K.",
      location: "Germany",
      condition: "Severe IBS & Digestive Distress",
      outcome: "Found lasting relief and learned how to manage dietary triggers through sustained Ayurvedic guidance.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/40 border-y border-secondary/60">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Patient Experiences</h2>
          <p className="text-xl text-gray-600">
            Stories from international patients who came to AyurCare for treatment and recovery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between items-start"
          >
            <div>
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#619BB6" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonials[0].outcome}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{testimonials[0].name}</h4>
              <p className="text-gray-500">{testimonials[0].location}</p>
              <div className="mt-2 text-sm font-medium text-secondary bg-secondary/10 inline-block px-3 py-1 rounded-full">
                {testimonials[0].condition}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 relative bg-zinc-900 rounded-3xl overflow-hidden group min-h-[300px]"
          >
            <img
              src="/images/help2.jpg"
              alt="Video testimonial thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-medium">Watch Laura's Journey</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between items-start"
          >
            <div>
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#619BB6" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonials[1].outcome}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{testimonials[1].name}</h4>
              <p className="text-gray-500">{testimonials[1].location}</p>
              <div className="mt-2 text-sm font-medium text-secondary bg-secondary/10 inline-block px-3 py-1 rounded-full">
                {testimonials[1].condition}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center space-x-2 text-gray-600 font-medium mb-6">
            <span className="text-xl">Rated ★★★★★ on Google and TripAdvisor</span>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Start with a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
