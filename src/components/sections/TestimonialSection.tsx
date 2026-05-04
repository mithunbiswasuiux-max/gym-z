"use client";
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "Joining ZYM was the best decision I've made. The trainers are incredibly supportive and the atmosphere is exactly what I needed to stay motivated.",
    author: "Alex Johnson",
    role: "Client",
    image: "/testimonial_1.png"
  },
  {
    quote: "The equipment is top-notch and the 24/7 access means I can always fit a workout into my busy schedule. Highly recommended for anyone serious about fitness.",
    author: "Samantha Lee",
    role: "Client",
    image: "/testimonial_1.png"
  },
  {
    quote: "I've tried many gyms, but ZYM is different. The community is so welcoming and the programs are actually designed for results.",
    author: "Michael Chen",
    role: "Client",
    image: "/testimonial_1.png"
  }
];

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-[#020617] relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle="Testimonials"
          title={
            <>
              Hear From <span className="text-[var(--color-primary)]">Happy</span> Clients
            </>
          }
          alignment="center"
        />
        
        <div className="relative mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left Side: Quote Content */}
              <div className="flex flex-col gap-8">
                <Quote className="w-20 h-20 text-white/10" strokeWidth={3} />
                
                <p className="text-white text-xl md:text-2xl font-sans leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="mt-4">
                  <h4 className="text-white font-black font-heading text-3xl uppercase">{testimonials[currentIndex].author}</h4>
                  <p className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm">{testimonials[currentIndex].role}</p>
                </div>

                {/* Local Navigation inside grid */}
                <div className="flex gap-4 mt-8">
                  <button 
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              {/* Right Side: Image with Neon Border */}
              <div className="relative">
                <div className="relative z-10 aspect-square rounded-lg overflow-hidden border-[10px] border-[var(--color-primary)] shadow-[0_0_40px_rgba(0,255,163,0.2)]">
                  <Image 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                {/* Decorative background box */}
                <div className="absolute -top-6 -right-6 w-full h-full border-[10px] border-white/5 rounded-lg -z-0" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
