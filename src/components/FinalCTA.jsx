"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure Where to Begin?</h2>
          <p className="text-xl text-primary-50 text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            We recommend starting with a consultation to understand your condition and the most appropriate treatment or learning option.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start with a Consultation
            </button>
            <button className="w-full sm:w-auto bg-primary border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-sm">
              Send an Inquiry
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
