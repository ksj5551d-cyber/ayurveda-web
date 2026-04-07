"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function AyurYogaPage() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/studies-hero.png" alt="AyurYoga" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-100 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Yoga Interwoven with Ayurveda</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Ayur<span className="text-emerald-300 italic font-serif">Yoga</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Integrate the power of Ayurveda into your yoga teacher training. Awaken your subtle energy through sequences designed for specific doshas and seasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 w-fit">
                Discover Teacher Training
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">The Sister Sciences</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                Ayurveda and Yoga are ancient sister sciences meant to be practiced and understood together. When united, they provide a complete approach to spiritual and physical well-being.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                Our AyurYoga curriculum was intimately developed by Vasant Lad to harmonize the chakras, balance the doshas, and expand human consciousness.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 relative z-10 flex items-center gap-3">
                <Heart className="text-emerald-400" /> AyurYoga Curriculum
              </h2>
              <ul className="space-y-6 relative z-10">
                {["Pranayama (Breathwork) techniques for every season.", "Dosha-specific Asana sequences to pacify imbalances.", "Chanting, mantras, and advanced meditation practices.", "Integration into a 200HR/300HR Yoga Alliance certification."].map((benefit, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 font-light leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
