"use client";
import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for beginners getting started with their fitness journey.",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Free initial assessment",
      "1 Group class per week"
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "59",
    description: "Everything you need for serious muscle building and fitness.",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "2 Personal training sessions/mo",
      "Access to sauna & spa",
      "Personalized workout plan"
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "99",
    description: "For the ultimate fitness experience with maximum support.",
    features: [
      "All Pro features",
      "Unlimited personal training",
      "Custom nutrition planning",
      "Recovery massage sessions",
      "Priority VIP support"
    ],
    highlight: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 bg-[var(--color-background)] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading 
          subtitle="Pricing Plans"
          title={
            <>
              Choose The <span className="text-[var(--color-primary)]">Best</span><br/> Pricing For You
            </>
          }
          alignment="center"
        />
        
        <div className="grid lg:grid-cols-3 gap-8 mt-16 items-center">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-[1px] overflow-hidden transition-all duration-300 ${
                plan.highlight 
                  ? "bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary)] to-[#00FFA3]/20 scale-100 lg:scale-105 shadow-[0_0_40px_rgba(0,255,163,0.2)] relative z-20" 
                  : "bg-white/10 relative z-10"
              }`}
            >
              <div className={`h-full rounded-[23px] p-10 md:p-12 flex flex-col ${
                plan.highlight ? "bg-[#0B0F19]" : "bg-[#020617]"
              }`}>
                {plan.highlight && (
                  <div className="text-black bg-[var(--color-primary)] text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full self-start mb-6">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{plan.name} Plan</h3>
                <p className="text-gray-400 font-sans text-sm mb-6 h-10">{plan.description}</p>
                
                <div className="mb-8 border-b border-white/10 pb-8">
                  <span className="text-5xl font-mono font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 font-sans">/month</span>
                </div>
                
                <ul className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-0.5 ${plan.highlight ? "bg-[var(--color-primary)] text-black" : "bg-white/10 text-white"}`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 font-sans text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.highlight ? "primary" : "outline"} 
                  className="w-full mt-auto"
                >
                  Choose Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
