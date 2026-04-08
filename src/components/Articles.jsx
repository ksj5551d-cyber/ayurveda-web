"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Articles() {
  const articles = [
    {
      title: "Understanding Root-Cause Analysis in Ayurveda",
      date: "Oct 12, 2024",
      image: "/images/help3.jpg",
      category: "Clinical Practice",
    },
    {
      title: "Why Panchakarma Must Be Medically Supervised",
      date: "Oct 05, 2024",
      image: "/images/articles.jpg",
      category: "Treatment",
    },
    {
      title: "Managing Autoimmune Flare-ups Through Diet",
      date: "Sep 28, 2024",
      image: "/images/nature.jpg",
      category: "Lifestyle",
    },
  ];

  return (
    <section className="md:min-h-screen py-16 md:py-32 bg-secondary flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Learn from Our Articles</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Insights directly from our clinical practice and ongoing patient cases.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 md:mt-0"
          >
            <button className="flex items-center space-x-2 text-primary font-semibold text-base md:text-lg hover:text-primary/80 transition-colors">
              <span>View All Articles</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto hide-scrollbar mobile-scroll-snap pb-8 md:pb-0 px-4 -mx-4 md:px-0 md:mx-0 snap-x touch-pan-y">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer min-w-[260px] md:min-w-0 flex-shrink-0 snap-center"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-3 space-x-2">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>
            </motion.div>
          ))}
          {/* Spacer for mobile scroll padding */}
          <div className="md:hidden flex-shrink-0 w-4" />
        </div>
      </div>
    </section>
  );
}
