"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function ChoosePath() {
  const paths = [
    {
      title: "Panchakarma Treatment",
      desc: "Doctor-led personalized care for chronic and difficult conditions, including medically supervised Panchakarma.",
      points: ["Doctor-supervised therapies", "Customized dietary plans", "Daily clinical assessment"],
      image: "/images/help2.jpg",
      link: "/treatment"
    },
    {
      title: "Learn Ayurveda",
      desc: "Authentic clinical learning through online courses and immersive programs for serious students and health professionals.",
      points: ["Structured curriculum", "One-on-one mentorship", "Practical clinical exposure"],
      image: "/images/help4.jpg",
      link: "/learn"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-secondary/10 to-secondary/40 border-y border-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">Choose Your Path at AyurCare</h2>
          <p className="text-xl text-gray-600">
            Whether you are seeking treatment or deeper learning, we offer personalized clinical guidance at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 flex flex-col group relative"
            >
              <div className="h-64 relative overflow-hidden w-full m-0 p-0">
                <img src={path.image} alt={path.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                <h3 className="absolute bottom-6 left-8 text-3xl font-bold text-white z-10 drop-shadow-md">{path.title}</h3>
              </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-white">
                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    {path.desc}
                  </p>
                  <div className="space-y-3 mb-8 flex-grow">
                    {path.points.map((point, i) => (
                      <div key={i} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary flex-shrink-0" />
                        <span className="font-medium text-gray-800 text-sm md:text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={path.link} className="w-full">
                      <button className="flex items-center justify-between w-full p-4 rounded-2xl bg-zinc-50 group-hover:bg-primary group-hover:text-white transition-all text-primary font-semibold shadow-sm text-base md:text-lg">
                        <span>Explore</span>
                        <ArrowRight size={18} />
                      </button>
                  </Link>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
