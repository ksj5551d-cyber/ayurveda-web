"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function AboutInstitutePage() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-hero.png" alt="The Ayurvedic Institute" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-emerald-950/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-100 text-sm font-medium mb-6">
              <Star size={16} />
              <span>About Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              The <span className="text-emerald-300 italic font-serif">Ayurvedic Institute</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Four decades of global excellence in authentic Ayurvedic education, deeply devoted to sharing the ancient science of life with the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 w-fit">
                Explore our Village
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
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Four Decades of History</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                The Ayurvedic Institute was initially established by Vasant Lad in 1984 as a nonprofit in Santa Fe, New Mexico. It thrives as a leading authority in spreading authentic Ayurvedic philosophy, diet, therapies, and clinical lifestyle protocols.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                Today, our global community and state of the art campus in the beautiful Blue Ridge mountains of North Carolina continues to inspire practitioners from across the globe.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-teal-950 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 relative z-10 flex items-center gap-3">
                <Sparkles className="text-teal-400" /> A Vibrant Community
              </h2>
              <p className="text-teal-100 font-light leading-relaxed mb-6 text-lg">
                Our students study and live closely with one another, enabling them to truly embody the principles of Ayurveda while also building connections that guide and support well beyond the duration of the educational program.
              </p>
              <button className="bg-white text-teal-950 px-6 py-3 rounded-xl font-semibold shadow-md shadow-black/20 hover:scale-105 transition-transform">
                Read our Mission
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
