"use client";
import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  { name: "Marcus Ruhl", role: "Head Coach", specialty: "Bodybuilding", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
  { name: "Sarah Connor", role: "Crossfit Expert", specialty: "HIIT", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop" },
  { name: "David Goggins", role: "Endurance Coach", specialty: "Cardio", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" },
  { name: "Emma Stone", role: "Yoga Instructor", specialty: "Flexibility", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop" },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-[var(--color-background)] relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading 
          subtitle="Expert Trainers"
          title={
            <>
              Train With The <span className="text-[var(--color-primary)]">Best</span><br/> In The Industry
            </>
          }
          alignment="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 mt-16">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative glass border-white/5 p-3">
                <div className="w-full h-full relative rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[var(--color-primary)] font-sans text-xs font-bold uppercase tracking-widest mb-1">{member.specialty}</div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">{member.name}</h3>
                    
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors cursor-pointer">
                         <span className="text-xs font-black">IN</span>
                      </div>
                      <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors cursor-pointer">
                         <span className="text-xs font-black">FB</span>
                      </div>
                      <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors cursor-pointer">
                         <span className="text-xs font-black">TW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
