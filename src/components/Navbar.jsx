"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navData = [
    {
      name: "Ayurvedic Studies",
      href: "#",
      dropdown: [
        {
          title: "New to Ayurveda",
          desc: "Foundations of Ayurveda course offering a comprehensive overview.",
          href: "/foundations",
        },
        {
          title: "Professional Track",
          desc: "Become an Ayurvedic Health Counselor or Practitioner.",
          href: "/professional-track",
        },
        {
          title: "Continuing Education",
          desc: "Webinars and Advanced Workshops to expand your knowledge.",
          href: "/continuing-education",
        },
        {
          title: "AyurYoga",
          desc: "Integrate Ayurveda into your yoga teacher training.",
          href: "/ayuryoga",
        },
      ],
    },
    {
      name: "Treatments & Consults",
      href: "#",
      dropdown: [
        {
          title: "Student Clinic Consultations",
          desc: "Consult with our students via Zoom or in-person.",
          href: "/consultations",
        },
        {
          title: "Panchakarma Detox",
          desc: "Ayurvedic detox for cleansing, healing and rejuvenation.",
          href: "/panchakarma",
        },
      ],
    },
    {
      name: "Resource Library",
      href: "#",
      dropdown: [
        { title: "The Blog", href: "/blog", desc: "Read our latest articles, insights, and wisdom." },
        { title: "Recipes & Nutrition", href: "/recipes", desc: "Healthy Ayurvedic recipes for every dosha." },
        { title: "Video Library", href: "/videos", desc: "Watch educational videos and masterclasses." },
      ],
    },
    {
      name: "About Us",
      href: "#",
      dropdown: [
        { title: "The Ayurvedic Institute", href: "/about-institute", desc: "Learn about our rich history and global mission." },
        { title: "Our Faculty", href: "/faculty", desc: "Meet Vasant Lad and our experienced teachers." },
        { title: "Support AI", href: "/support", desc: "Donate or shop our official merchandise today." },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || activeDropdown !== null
          ? "bg-white/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-bold tracking-tight text-primary cursor-pointer flex items-center"
          >
            AyurCare
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex items-center space-x-4 lg:space-x-8"
        >
          {navData.map((item, index) => (
            <div
              key={item.name}
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(index)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1.5 text-sm font-bold transition-all px-3 py-2 rounded-lg ${
                  isScrolled || activeDropdown !== null 
                    ? "text-primary hover:bg-secondary/40" 
                    : "text-primary hover:bg-secondary/20"
                } ${activeDropdown === index ? "bg-secondary/40 text-primary" : ""}`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Mega Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] cursor-default"
                    >
                      <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden p-6 grid grid-cols-2 gap-x-8 gap-y-6 relative border border-emerald-100/50">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.title}
                            href={dropItem.href}
                            className="block group rounded-xl p-3 hover:bg-emerald-50/60 transition-colors"
                          >
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary mb-1.5">
                              {dropItem.title}
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600">
                              {dropItem.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </motion.div>

        {/* Action Button - Desktop Only */}
        <div className="hidden md:flex items-center">
           <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm">
            Start Consultation
          </button>
        </div>

        {/* Action Button - Mobile Only (Simplified) */}
        <div className="md:hidden flex items-center">
           <button className="text-primary font-bold text-sm px-4 py-2 bg-primary/5 rounded-full">
            Consult
          </button>
        </div>
      </div>

      {/* Note: Mobile Menu moved to BottomNav for better mobile-native feel */}
    </nav>
  );
}
