"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/resources-hero.png" alt="Ayurvedic Resource Library" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-950/95 via-amber-900/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-100 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Resource Library</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              The <span className="text-amber-400 italic font-serif">Ayurvedic</span> Blog
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Read our latest articles, insights, and wisdom from master clinicians and practitioners around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 w-fit">
                Subscribe for Updates
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: item * 0.1 }} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-stone-300 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">Wellness & Health</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">The Tridoshic Theory: Understanding Vata, Pitta & Kapha</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Discover how to balance the three fundamental energies that govern your physiology and mental state...</p>
                  <span className="text-amber-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ChevronRight size={14} /></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
