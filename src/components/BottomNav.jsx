"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, ClipboardList, BookOpen, Menu, X, Phone, User, HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BottomNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: HeartPulse, label: "Treatments", href: "/panchakarma" },
    { icon: BookOpen, label: "Courses", href: "/professional-track" },
    { icon: Menu, label: "Menu", action: () => setIsMenuOpen(true) },
  ];

  const menuData = [
    {
      title: "Navigation",
      links: [
        { label: "Our Doctors", href: "#" },
        { label: "Who We Help", href: "#" },
        { label: "Blog & Wisdom", href: "/blog" },
        { label: "About Institute", href: "/about-institute" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Panchakarma Detox", href: "/panchakarma" },
        { label: "Consultations", href: "/consultations" },
        { label: "Support AI", href: "/support" },
      ]
    }
  ];

  return (
    <>
      <div className="md:!hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md">
        <motion.nav 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full px-6 py-3 flex items-center justify-between"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.label;
            
            return (
              <button
                key={item.label}
                onClick={() => {
                  if (item.action) item.action();
                  else setActiveTab(item.label);
                }}
                className="flex flex-col items-center gap-1 group relative"
              >
                {item.href ? (
                  <Link href={item.href} className="flex flex-col items-center gap-1">
                    <Icon 
                      size={20} 
                      className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-gray-400"}`} 
                    />
                    <span className={`text-[10px] font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-gray-400"}`}>
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <>
                    <Icon 
                      size={20} 
                      className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-gray-400"}`} 
                    />
                    <span className={`text-[10px] font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-gray-400"}`}>
                      {item.label}
                    </span>
                  </>
                )}
                {isActive && !item.action && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </button>
            );
          })}
        </motion.nav>
      </div>

      {/* Full Screen Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 w-full bg-white rounded-t-[32px] p-8 pb-12 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">AyurCare</h2>
                  <p className="text-sm text-gray-500">Ancient Wisdom, Modern Care</p>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 active:scale-90 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-10">
                {menuData.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-4">
                      {section.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-lg font-semibold text-gray-800 hover:text-primary active:translate-x-2 transition-all block"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-all">
                  Start Consultation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
