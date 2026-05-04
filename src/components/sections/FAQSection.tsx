"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We are open 24/7 for all our members with valid passes. Our staff is available from 6 AM to 10 PM daily."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes! We have a team of certified professional trainers. You can book individual sessions or choose a membership plan that includes them."
  },
  {
    question: "Can I cancel my membership at any time?",
    answer: "Most of our monthly plans can be cancelled with 30 days notice. Our annual plans offer lower rates but require a commitment."
  },
  {
    question: "What equipment do you have?",
    answer: "We have state-of-the-art cardio machines, a wide range of free weights, specialized strength machines, and a dedicated crossfit area."
  }
];

export const FAQSection = () => {
  // A simple state to track which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[var(--color-section-light)] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-[var(--color-primary)] rounded-3xl p-10 md:p-14 relative overflow-hidden text-black">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase leading-tight mb-6 relative z-10">
              We Have<br/> Collected The<br/> Most Asked<br/> Questions
            </h2>
            <p className="font-sans font-medium mb-10 relative z-10 max-w-sm">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our customer support team.
            </p>
            <Button variant="outline" className="border-black text-black hover:bg-black/10 relative z-10">
              Contact Us
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border border-white/10 rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-white/5' : 'bg-transparent'}`}
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-white font-bold font-sans pr-4">{faq.question}</span>
                    <ChevronDown className={`text-[var(--color-primary)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 px-6 ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-400 font-sans text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
