"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-zinc-50">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <img
          src="/images/hero.jpg"
          alt="Himalayan Environment"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Doctor-led <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">personalized</span> Ayurvedic care in the Himalayas
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            For chronic and difficult-to-treat conditions, with medically supervised Panchakarma and structured Ayurvedic learning programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm font-medium text-gray-500 flex items-center space-x-2"
          >
            <span>Personalized</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Doctor-supervised</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>15+ years clinical experience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Start with a Consultation
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1">
              Explore Treatment
            </button>
          </motion.div>
        </div>

        {/* Hero image placeholder matching descriptions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md ml-auto translate-x-4">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
            <img
              src="/images/doctor1.jpg"
              alt="Two doctors environmental portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
