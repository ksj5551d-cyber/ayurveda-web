"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/about-hero.png" alt="Our Faculty" fill className="object-cover" priority />
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
              <Users size={16} />
              <span>World-Class Educators</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Our <span className="text-emerald-300 italic font-serif">Faculty</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Meet our esteemed team of Ayurvedic physicians, scholars, and wellness practitioners dedicated to transmitting this profound ancient science.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: item * 0.1 }} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full bg-teal-100 mb-6 overflow-hidden relative shadow-lg">
                  <div className="absolute inset-0 bg-[url('/about-hero.png')] bg-cover opacity-50" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Vasant Lad, BAM&S, MASc</h3>
                <p className="text-emerald-600 font-medium text-sm mb-4">Founder & Director</p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  A globally recognized Ayurvedic authority, bridging ancient wisdom with robust clinical application for over 40 years.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
