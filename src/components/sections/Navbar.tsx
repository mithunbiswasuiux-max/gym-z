"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Dumbbell, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? "glass py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Dumbbell className="text-[var(--color-primary)] w-8 h-8" />
          <span className="text-2xl font-heading font-extrabold text-white tracking-wider">ZYM</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-sans font-medium text-white/80 hover:text-[var(--color-primary)] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm">Join Now</Button>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-[var(--color-primary)] z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#020617] z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,163,0.05)_0%,transparent_50%)] pointer-events-none" />
              
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-3xl font-heading font-bold text-white hover:text-[var(--color-primary)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="primary" 
                size="lg" 
                className="mt-8 px-12"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
