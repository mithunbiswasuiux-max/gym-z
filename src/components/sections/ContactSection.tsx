"use client";
import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            subject: formData.subject, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", content: "+1 (555) 000-0000", sub: "Available 6am - 10pm" },
    { icon: Mail, title: "Email Us", content: "hello@zymfitness.com", sub: "Response within 24h" },
    { icon: MapPin, title: "Location", content: "123 Fitness Ave, MC 90210", sub: "Muscle City, USA" }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[var(--color-background)] relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Top Section: 2-Column Grid for Text and Form */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-32 items-center mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading 
              subtitle="Get In Touch"
              title={
                <>
                  Ready To Start Your <br/> <span className="text-[var(--color-primary)]">Transformation?</span>
                </>
              }
            />
            <p className="text-gray-400 font-sans text-lg mt-6 leading-relaxed max-w-xl">
              Have questions about our programs or memberships? Reach out and our team will get back to you within 24 hours. We are dedicated to providing you with the best fitness experience possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="bg-[#0B0F19]/90 border-white/5 p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-[var(--color-primary)] w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 font-sans">We&apos;ll be in touch with you shortly.</p>
                  <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Name</label>
                      <input 
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                    <select 
                      className="w-full bg-[#020617] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none cursor-pointer"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>General Inquiry</option>
                      <option>Membership Plans</option>
                      <option>Personal Training</option>
                      <option>Group Classes</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button variant="primary" className="w-full py-6 text-lg group" disabled={loading}>
                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>

        {/* Bottom Section: 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="bg-white/[0.02] border-white/5 p-8 md:p-10 flex items-center gap-8 group hover:bg-white/[0.05] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-black transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <div className="pt-1">
                  <h4 className="text-white font-bold font-heading text-base mb-2">{item.title}</h4>
                  <p className="text-white/90 font-medium font-sans text-sm mb-1">{item.content}</p>
                  <p className="text-gray-500 font-sans text-xs uppercase tracking-widest">{item.sub}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
