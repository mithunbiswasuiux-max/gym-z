"use client";
import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Dumbbell, HeartPulse, Activity, ChevronLeft, ChevronRight, Weight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Personal Training",
    description: "Physical fitness is not only one of the most important keys to a healthy body.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Weight Loss",
    description: "Exercise intensity refers to how much energy is expended when exercising.",
    icon: Weight,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Group Fitness",
    description: "We have various membership types to suit your requirement.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Crossfit",
    description: "High-intensity interval training to push your limits and maximize burn.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "05",
    title: "Yoga & Flexibility",
    description: "Focus on mindfulness and flexibility to balance your strength training.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  }
];

export const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsVisible(1);
      else if (window.innerWidth < 1024) setItemsVisible(2);
      else setItemsVisible(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = services.length - itemsVisible;

  const next = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--color-background)] relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading 
            subtitle="Our Services"
            title={
              <>
                Programs To <span className="text-[var(--color-primary)]">Transform</span><br/> Your Body
              </>
            }
          />
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition-all duration-300 group"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition-all duration-300 group"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ 
                x: `-${currentIndex * (100 / itemsVisible)}%` 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
                  >
                    <div className="bg-[#0B0F19] border border-white/5 p-8 flex flex-col h-full min-h-[520px] relative group hover:border-[var(--color-primary)]/30 transition-all duration-500">
                      <div className="flex justify-between items-start mb-10">
                        <div className="w-14 h-14 bg-[var(--color-primary)] flex items-center justify-center text-black">
                          <Icon size={28} />
                        </div>
                        <div className="text-4xl font-heading font-black text-white/10 tracking-tighter group-hover:text-[var(--color-primary)]/20 transition-colors">
                          {service.id}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-wider group-hover:text-[var(--color-primary)] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 font-sans text-sm leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <a href="#" className="text-[#FFD700] font-heading font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                          Read More <span>→</span>
                        </a>
                      </div>

                      <div className="relative h-48 w-full overflow-hidden mt-10 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                        <Image 
                          src={service.image} 
                          alt={service.title} 
                          fill 
                          className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="mt-12 w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[var(--color-primary)]"
            animate={{ width: `${((currentIndex + 1) / (services.length - itemsVisible + 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </section>
  );
};
