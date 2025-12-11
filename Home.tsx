import React, { useState } from 'react';
import { Hero } from './Hero';
import { ServicesSection } from './Services';
import { CAATSection } from './CAAT';
import { DPRSection } from './DPR';
import { ContactSection } from './Contact';
import { Wallet, Cpu, ShieldCheck, Clock, HardHat, Users, Zap, Ruler, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';

const WhyChooseUs = () => {
  const features = [
    {
        id: "01",
        title: "Radical Transparency",
        headline: "Zero hidden costs. Period.",
        desc: "We source materials directly from manufacturers and pay labor digitally. Our 'Open Book' policy means you see the exact rates we pay—no markups, no commissions. You track every rupee in real-time.",
        tags: ["Factory Direct Rates", "Digital Payment Logs", "Zero Wastage Policy"],
        icon: Wallet,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
        accent: "bg-orange-500"
    },
    {
        id: "02",
        title: "Engineering Precision",
        headline: "AI-Grade Accuracy.",
        desc: "Our CAAT Engine parses analyzes BOQs with unmatched accuracy. On-site, civil engineer oversees, ensures and logs that every beam is straight and every tile is level. We don't guess; we engineer.",
        tags: ["AI BOQ Analysis", "DPR Reports", "CAAT suggestions"],
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop",
        accent: "bg-blue-500"
    },
    {
        id: "03",
        title: "Assured Delivery",
        headline: "On time, guaranteed.",
        desc: "We don't just promise dates; we contractually guarantee them. Our automated Gantt charts adjust in real-time to keep your project on track. ",
        tags: ["AI-Backed Timeline", "Verified Workforce", "NBC Safety Norms"],
        icon: ShieldCheck,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
        accent: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-24 relative z-10">
       {/* Background is transparent to show the global LiquidEther animation */}
      
      <div className="max-w-[1400px] mx-auto px-6 mb-16 relative">
        <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="px-3 py-1 rounded-full border border-slate-900/10 bg-white/30 backdrop-blur-md text-slate-800 font-mono text-xs tracking-widest uppercase mb-4 inline-block font-bold"
            >
              The Mistri Standard
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 drop-shadow-sm"
            >
                Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Absolute Certainty</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-700 max-w-2xl mx-auto font-medium"
            >
                We've distilled the chaos of traditional construction into three non-negotiable pillars.
            </motion.p>
        </div>

        {/* The 3 Power Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="h-full"
              >
                <div className="h-full min-h-[500px] w-full group cursor-pointer relative rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-transform duration-500">
                    <GlassSurface
                        width="100%"
                        height="100%"
                        borderRadius={32}
                        backgroundOpacity={0.7}
                        blur={20}
                        borderWidth={1}
                        className="shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-shadow duration-500"
                        contentClassName="flex-col items-start justify-start p-0"
                    >
                        {/* Image Header */}
                        <div className="relative h-[220px] w-full overflow-hidden">
                             <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
                             
                             {/* Floating Icon */}
                             <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-center">
                                 <item.icon className="w-7 h-7 text-slate-900" />
                             </div>

                             {/* ID Badge */}
                             <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-black/80 backdrop-blur text-white font-mono text-xs font-bold border border-white/20">
                                 {item.id}
                             </div>
                        </div>
                        
                        {/* Content Body */}
                        <div className="p-8 flex flex-col flex-grow w-full relative">
                             {/* Decorative Line */}
                             <div className={`w-12 h-1 ${item.accent} rounded-full mb-6`} />

                             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                                 {item.title}
                             </h3>
                             <h4 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                                 {item.headline}
                             </h4>
                             <p className="text-slate-600 text-sm leading-relaxed font-medium mb-8">
                                 {item.desc}
                             </p>

                             {/* Tags/Features */}
                             <div className="mt-auto space-y-3">
                                 {item.tags.map((tag, tIndex) => (
                                     <div key={tIndex} className="flex items-center gap-3 group/tag">
                                         <div className={`w-5 h-5 rounded-full ${item.accent} bg-opacity-10 flex items-center justify-center`}>
                                            <CheckCircle2 className={`w-3.5 h-3.5 ${item.accent.replace('bg-', 'text-')}`} />
                                         </div>
                                         <span className="text-sm font-bold text-slate-700 group-hover/tag:text-slate-900 transition-colors">
                                             {tag}
                                         </span>
                                     </div>
                                 ))}
                             </div>
                        </div>

                        {/* Hover Overlay Border */}
                        <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-orange-500/20 pointer-events-none transition-colors duration-500" />
                    </GlassSurface>
                </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <DPRSection />
      <CAATSection />
      <ContactSection />
    </>
  );
};