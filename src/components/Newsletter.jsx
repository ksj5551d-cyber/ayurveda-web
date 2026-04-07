"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-secondary border-t border-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Receive occasional insights from AyurCare
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Thoughtful reflections on Ayurveda, clinical practice, and new articles from our work with patients.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 bg-white border border-gray-300 rounded-full px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm text-lg"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-6 font-medium">
            We share occasional updates and articles. No promotional emails.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
