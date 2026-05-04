import React from "react";
import { Dumbbell, Camera, Map, MessageCircle, PlayCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-[#040810] pt-24 pb-10 relative z-10 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Call to action Banner */}
        <div className="bg-gradient-to-r from-[var(--color-section-dark)] to-[#0B0F19] border border-[var(--color-primary)]/20 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-primary)]/5 blur-3xl rounded-full" />
          
          <div className="relative z-10 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white uppercase mb-2">
              Get Started <span className="text-[var(--color-primary)]">Today!</span>
            </h2>
            <p className="text-gray-400 font-sans">First session is completely free. No commitments.</p>
          </div>
          
          <Button variant="primary" size="lg" className="relative z-10">
            Claim Free Session
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-[var(--color-primary)] w-8 h-8" />
              <span className="text-2xl font-heading font-extrabold text-white tracking-wider">ZYM</span>
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
              Empowering you to achieve your fitness dreams through expert coaching, premium facilities, and a supportive community.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                <Map size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black transition-colors">
                <PlayCircle size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-bold font-sans uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">Our Services</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">Meet The Team</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">Pricing Plans</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold font-sans uppercase mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">Bodybuilding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">Crossfit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">Yoga Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors font-sans text-sm">Personal Training</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold font-sans uppercase mb-6">Newsletter</h4>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-4">
              Subscribe to get fitness tips, special offers, and gym news.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                />
              </div>
              <Button variant="primary" className="w-full h-11 text-sm">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-sans">
            &copy; {new Date().getFullYear()} Zym Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm font-sans transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm font-sans transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
