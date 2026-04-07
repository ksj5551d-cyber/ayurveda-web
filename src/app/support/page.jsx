"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-hero.png" alt="Support The Ayurvedic Institute" fill className="object-cover" priority />
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
              <Heart size={16} />
              <span>Give Back</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Support <span className="text-emerald-300 italic font-serif">AI</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Your donations ensure that the light of Ayurveda continues to shine globally. Help us provide scholarships, expand our campus, and fund research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 w-fit">
                Donate Now
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-teal-50 rounded-3xl p-10 lg:p-16 border border-teal-100 text-center">
              <h2 className="text-3xl font-bold text-teal-950 mb-4">Make a Donation</h2>
              <p className="text-teal-800/80 leading-relaxed mb-8">
                As a nonprofit organization, we rely on the generosity of our community to continue our mission of education and healing.
              </p>
              <button className="bg-teal-900 text-white px-8 py-4 rounded-xl font-semibold shadow-md w-full hover:bg-teal-800 transition-colors">
                Contribute Today
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-emerald-50 rounded-3xl p-10 lg:p-16 border border-emerald-100 text-center">
              <h2 className="text-3xl font-bold text-emerald-950 mb-4">Official Merchandise</h2>
              <p className="text-emerald-800/80 leading-relaxed mb-8">
                Show your support and pride! Shop our official Ayurvedic Institute merchandise including apparel, mugs, and totes on our Bonfire store.
              </p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md w-full hover:bg-emerald-500 transition-colors">
                Shop Merchandise
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
