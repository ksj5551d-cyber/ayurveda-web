"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Sparkles, Utensils } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/resources-hero.png" alt="Recipes and Nutrition" fill className="object-cover" priority />
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
              <span>Ayurvedic Nutrition</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Recipes & <span className="text-amber-400 italic font-serif">Nutrition</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Food is medicine. Discover healthy Ayurvedic recipes tailored for every dosha, season, and stage of life. Bring harmony to your digestion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 w-fit">
                Explore Recipes
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Nourish Your Body and Soul</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ayurveda teaches that proper nutrition is the fundamental pillar of health. Browse our curated collection of delicious, tridoshic recipes.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Kitchari Recipe", desc: "The staple cleansing food of Ayurveda, easy to digest and deeply nourishing.", icon: <Utensils /> },
              { title: "Golden Milk", desc: "A soothing bedtime elixir with turmeric to reduce inflammation and promote sleep.", icon: <Sparkles /> },
              { title: "Cooling Pitta Juice", desc: "Aloe, cucumber, and mint blend to cool excess heat during the summer months.", icon: <Utensils /> }
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-amber-600 mb-6 h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="text-amber-700 font-semibold text-sm hover:text-amber-800 transition-colors flex items-center gap-1">Get Recipe <ChevronRight size={14} /></button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
