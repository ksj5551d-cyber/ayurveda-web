"use client";

import { motion } from "framer-motion";

export default function Environment() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Himalayan Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2">
        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Healing in the Himalayan Environment
            </h2>
            <p className="text-xl text-secondary">
              A quiet, natural setting that supports focused treatment and recovery.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-300 leading-relaxed max-w-xl"
          >
            AyurCare is located in Dharamshala, in the foothills of the Himalayas. The peaceful village environment, clean mountain air, and distance from city noise provide the ideal setting for rest, reflection, and clinical care. Many patients find that this environment enhances the depth of their treatment process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-white hover:bg-zinc-100 text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg transform hover:-translate-y-1">
              Plan Your Visit
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
