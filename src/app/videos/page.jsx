"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, PlayCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function VideoLibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/resources-hero.png" alt="Video Library" fill className="object-cover" priority />
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
              <PlayCircle size={16} />
              <span>Watch & Learn</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Video <span className="text-amber-400 italic font-serif">Library</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Watch educational videos, masterclasses, and seminars by Vasant Lad and other Ayurvedic experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 w-fit">
                Start Watching
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: item * 0.1 }} className="group cursor-pointer rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-64 bg-gray-900 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/resources-hero.png')] opacity-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                  <PlayCircle size={64} className="text-white/80 group-hover:text-amber-400 group-hover:scale-110 transition-all z-10" />
                </div>
                <div className="bg-gray-50 p-6 border border-t-0 border-gray-100">
                  <span className="text-amber-600 font-bold text-xs tracking-wider uppercase mb-2 block">Masterclass</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Introduction to Pulse Reading</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Learn the basics of Nadi Vigyan directly from master practitioner Vasant Lad.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
