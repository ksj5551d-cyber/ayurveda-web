"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      title: "Understanding Root-Cause Analysis in Ayurveda",
      date: "Oct 12, 2024",
      image: "/images/help3.jpg",
      category: "Clinical Practice",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "Why Panchakarma Must Be Medically Supervised",
      date: "Oct 05, 2024",
      image: "/images/articles.jpg",
      category: "Treatment",
      readTime: "6 min read",
    },
    {
      title: "Managing Autoimmune Flare-ups Through Diet",
      date: "Sep 28, 2024",
      image: "/images/nature.jpg",
      category: "Lifestyle",
      readTime: "5 min read",
    },
  ];

  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Deep Wisdom</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight">
              Learn from Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary/60 italic">Clinical Practice</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="group relative flex items-center justify-center p-1 overflow-hidden font-bold rounded-full group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-secondary via-secondary/40 to-white group-hover:opacity-100"></span>
              <span className="relative flex items-center gap-2 px-6 py-3 transition-all duration-300 bg-white rounded-full group-hover:bg-transparent">
                <span className="text-primary">View All Wisdom</span>
                <div className="bg-primary text-secondary rounded-full p-1 group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <ArrowRight size={18} />
                </div>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Desktop Asymmetrical Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-10">
          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-7"
          >
            <div className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden aspect-[16/10] shadow-2xl shadow-primary/10">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  {featuredArticle.category}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-white/70 text-sm font-medium mb-3">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {featuredArticle.date}</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} /> {featuredArticle.readTime}</div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight group-hover:text-secondary transition-colors">
                  {featuredArticle.title}
                </h3>
                <div className="flex items-center gap-2 text-secondary font-bold group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side List */}
          <div className="col-span-5 flex flex-col gap-8">
            {otherArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer flex gap-6 items-center bg-zinc-50 rounded-3xl p-4 border border-zinc-100 hover:border-secondary/40 transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-40 h-40 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col flex-1 py-2">
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-2 block">{article.category}</span>
                  <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-primary/70">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-medium">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet View (Horizontal Slider) */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10 -mx-6 px-6 mobile-scroll-snap">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 group"
              >
                <div className="bg-zinc-50 rounded-[2rem] overflow-hidden border border-zinc-100 p-3 h-full">
                  <div className="relative rounded-2xl overflow-hidden aspect-video mb-5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      {article.category}
                    </div>
                  </div>
                  <div className="px-3 pb-4">
                    <div className="flex items-center gap-4 text-gray-400 text-[10px] font-medium mb-3">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-5 leading-tight">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-secondary">Read Full Wisdom</span>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
