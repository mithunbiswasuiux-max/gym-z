"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString() + suffix;
  });
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration: 3.5, 
        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for extra smooth finish
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const AboutSection = () => {
  const stats = [
    { label: "Active Members", value: 1500, suffix: "+" },
    { label: "Expert Trainers", value: 50, suffix: "+" },
    { label: "Years Experience", value: 12, suffix: "+" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--color-section-dark)] relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary)]/10 to-transparent opacity-20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary)]/10 to-transparent opacity-20" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--color-primary)] font-bold tracking-[0.2em] uppercase text-xs font-sans bg-[var(--color-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-primary)]/20">
                About Our Gym
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white uppercase leading-[1] tracking-tighter"
            >
              Transform <span className="text-[var(--color-primary)]">Your Body</span> & Your Life
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 font-sans text-lg leading-relaxed"
            >
              We don&apos;t just build muscles; we build confidence. Join a community where elite coaching meets cutting-edge equipment to unlock your true potential.
            </motion.p>
          </div>

          {/* Center: Athlete Image */}
          <div className="lg:col-span-4 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer"
            >
              <Image 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&h=1200&auto=format&fit=crop" 
                alt="Female Athlete" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              
              {/* Image Overlay Glow */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            
            {/* Abstract Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[var(--color-primary)]/5 rounded-full blur-[120px] -z-10" />
          </div>

          {/* Right: Stats Cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <GlassCard className="bg-[#0B0F19]/80 border-white/5 p-8 flex flex-col gap-1 relative overflow-hidden group hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/[0.03] transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      {[1, 2, 3].map(j => (
                        <motion.div 
                          key={j} 
                          className="w-1.5 h-4 bg-[var(--color-primary)] -skew-x-12"
                          whileHover={{ scaleY: 1.5 }}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest font-sans group-hover:text-white transition-colors">{stat.label}</span>
                  </div>
                  <div className="text-6xl font-black font-heading text-white tracking-tighter group-hover:text-[var(--color-primary)] transition-colors">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  {/* Subtle Accent line */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Glow */}
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
