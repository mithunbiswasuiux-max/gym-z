"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 lg:pt-32 lg:pb-48 overflow-hidden" id="home">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#020617] to-[#111827] z-0" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 items-start">
          <span className="text-[var(--color-primary)] font-bold tracking-[0.2em] uppercase text-sm font-sans bg-[var(--color-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-primary)]/20">
            Level Up Your Body
          </span>
          <h1 className="text-3xl md:text-7xl font-extrabold font-heading text-white uppercase leading-[1.1]">
            Achieve Your <br />
            <span className="text-gradient">Fitness Dreams</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg font-sans max-w-lg mt-2">
            Push your limits, build your strength, and transform your life with the best coaching and equipment in town.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Button size="lg" variant="primary" asChild>
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="ghost" className="gap-2">
              <div className="bg-white/20 rounded-full p-1 flex items-center justify-center">
                <Play className="w-4 h-4 fill-white text-white" />
              </div>
              Watch Video
            </Button>
          </div>
          
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10 w-full max-w-md">
            <div className="flex -space-x-4">
              {avatars.map((url, i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0B0F19] overflow-hidden relative">
                  <Image 
                    src={url} 
                    alt={`User ${i}`} 
                    fill 
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="text-white font-bold text-base md:text-lg">500+</div> 
              <div className="text-gray-400">Happy Members</div>
            </div>
          </div>
        </div>
        
        {/* Abstract Image Container */}
        <div className="relative w-full h-[400px] lg:h-[600px] mt-8 lg:mt-0">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10 bottom-0 h-full" />
           <div className="w-full h-full rounded-3xl glass flex items-center justify-center border-white/5 relative overflow-hidden">
             <Image 
                src="/hero.png" 
                alt="Gym Hero Athlete" 
                fill 
                className="object-cover opacity-80"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] to-[#020617] mix-blend-overlay opacity-50" />
           </div>
        </div>
      </div>
      
      {/* Stat Ticker at bottom */}
      <div className="absolute bottom-0 w-full bg-[var(--color-primary)] py-4 md:py-8 z-20 overflow-hidden border-t border-black/10">
        <motion.div 
          className="flex whitespace-nowrap gap-8 md:gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12 text-black font-black font-sans text-lg md:text-xl uppercase tracking-tighter">
               <span>★ Expert Trainers</span>
               <span>★ 1500+ Members Transformed</span>
               <span>★ 10+ Years Experience</span>
               <span>★ Modern Equipment</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
