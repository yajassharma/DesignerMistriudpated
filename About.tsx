
import React, { useState, useEffect, useRef } from 'react';
import { useAIImage } from './useAIImage';
import { motion } from 'framer-motion';
import { FileText, Calculator, Clock, ClipboardCheck, MessageSquareText, Linkedin, ExternalLink, Activity, Search, TrendingUp, CheckCircle, Instagram, ArrowRight } from 'lucide-react';
import GradientText from './GradientText';

const FeatureCard = ({ title, desc, icon: Icon, visual, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 transition-all hover:bg-slate-800/80 overflow-hidden backdrop-blur-sm"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10 flex flex-col h-full">
       <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-700 group-hover:border-orange-500/30 text-orange-500 shadow-lg shadow-black/20">
             <Icon className="w-6 h-6" />
          </div>
          {visual}
       </div>
       
       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
       <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{desc}</p>
       
       <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: "circOut" }}
            className="h-full bg-orange-500 rounded-full" 
          />
       </div>
    </div>
  </motion.div>
);

const TeamMemberImage = ({ imageSrc, name, role }: { imageSrc: string, name: string, role: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener('resize', check);
      return () => {
        window.removeEventListener('resize', check);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, []);
  
    const handleMouseMove = (e: React.MouseEvent) => {
      if (isMobile || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty('--mouse-x', `${x}px`);
            containerRef.current.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    return (
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
             // Optional: Reset or hide effect on leave if desired, currently sticking to last position or hiding via mask
          }}
          className="relative h-full w-full rounded-[30px] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl group cursor-default"
          style={{ '--mouse-x': '-9999px', '--mouse-y': '-9999px' } as React.CSSProperties}
        >
            {/* Base Grayscale Layer */}
            <motion.img 
                src={imageSrc} 
                alt={`${name} Grayscale`} 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
            />

            {/* Color Layer with Flashlight Mask (Desktop) or Scroll Reveal (Mobile) */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={isMobile ? { opacity: 0 } : { opacity: 1 }}
                whileInView={isMobile ? { opacity: 1 } : undefined}
                viewport={{ amount: 0.6, once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                    maskImage: isMobile ? 'none' : 'radial-gradient(circle 280px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)',
                    WebkitMaskImage: isMobile ? 'none' : 'radial-gradient(circle 280px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%)',
                }}
            >
                <img 
                    src={imageSrc} 
                    alt={`${name} Color`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </motion.div>
            
            {/* Mobile instructions hint */}
            <div className="md:hidden absolute top-4 right-4 bg-black/40 backdrop-blur px-2 py-1 rounded text-[10px] text-white/70">
                Scroll to reveal
            </div>
            
            {/* Desktop instructions hint */}
            <div className="hidden md:block absolute top-4 right-4 bg-black/40 backdrop-blur px-2 py-1 rounded text-[10px] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Hover to reveal
            </div>

            {/* Content Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none z-20">
                <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full" />
                <h3 className="text-3xl font-serif text-white mb-1">{name}</h3>
                <p className="text-orange-300 font-medium tracking-wide uppercase text-xs mb-6">{role}</p>
                
                <div className="flex gap-4 pt-4 border-t border-white/10 pointer-events-auto">
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export const About = () => {
  const { imageUrl } = useAIImage("Futuristic architectural blueprint transforming into digital data stream, orange and blue glowing particles, dark background, cinematic, 8k", true);

  return (
    <div className="pt-28 md:pt-32">
      <div className="bg-slate-950 min-h-screen rounded-t-[2rem] shadow-2xl overflow-hidden relative z-10 border-t border-white/10">
      
      {/* Immersive Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0 z-0">
           {imageUrl && (
             <motion.img 
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 15, repeat: Infinity, repeatType: 'mirror' }}
                src={imageUrl} 
                className="w-full h-full object-cover opacity-80" 
                alt="AI Architecture"
             />
           )}
           {/* Enhanced Gradient Transition */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/20 to-slate-950" />
           <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <GradientText colors={["#F97316", "#FFD700", "#F97316"]} animationSpeed={3} children={
                   <span className="text-sm font-bold tracking-[0.3em] uppercase">The Origin Story</span>
                } />
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
                Architecting <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-200">Intelligence</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                We are not just building structures; we are compiling the source code for the future of construction.
              </p>
            </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-20 bg-slate-950 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-32">
          
          {/* Mr. Himanshu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             
             {/* Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-2 mb-6">
                   <div className="h-[1px] w-12 bg-orange-500" />
                   <span className="text-orange-500 uppercase tracking-widest text-sm font-bold">The Visionary</span>
                </div>
                
                <h2 className="text-5xl font-serif text-white mb-8">
                  From High-Rises <br/>to <span className="text-orange-500 italic">High-Tech.</span>
                </h2>
                
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                   <p>
                     <strong className="text-white">Mr. Himanshu</strong> brings 3 years of core construction experience working as a Site Engineer on some of India’s most premium real-estate projects. He started his journey with <span className="text-white">DLF – The Arbour</span> (42-storey luxury tower) and <span className="text-white">Anant Raj – The Estate Residences</span>, handling day-to-day site execution, quality control, reinforcement checks, and structural coordination.
                   </p>
                   <p>
                     Later, working as an Assistant Engineer at <span className="text-white">PSP Projects Ltd.</span> on the Adani 32-storey high-rise residential tower, he gained deep exposure to high-rise methodologies, MIVAN/Alu-form practices, and large-scale project management.
                   </p>
                   <p>
                     "Alongside my site journey, I always dreamed bigger," he says. "I wanted to create a tech-driven ecosystem for construction. That's why I founded <span className="text-orange-500 font-bold">CAAT → Designer Mistri</span>, with a vision to bring AI-powered planning and transparent execution to every client."
                   </p>
                </div>

                <div className="mt-12 flex gap-8">
                   <div>
                      <div className="text-4xl font-serif text-white mb-1">3+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Years Experience</div>
                   </div>
                   <div>
                      <div className="text-4xl font-serif text-white mb-1">3</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest">Landmark Towers</div>
                   </div>
                </div>
             </motion.div>

             {/* Image */}
             <div className="flex justify-center lg:justify-end relative h-[600px] flex items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-[400px] aspect-[3/4]"
                >
                    {/* Decorative Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500 via-purple-500 to-blue-500 rounded-[32px] opacity-70 blur-2xl group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <TeamMemberImage 
                        imageSrc="https://ik.imagekit.io/yajas/IMG_20251125_204400.jpg?tr=fl-h"
                        name="Mr. Himanshu"
                        role="Founder & Civil Engineer"
                    />
                </motion.div>
             </div>
          </div>

          {/* Mr. Jatan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             
             {/* Image (Left on Desktop) */}
             <div className="flex justify-center lg:justify-start relative h-[600px] flex items-center order-last lg:order-first">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                  className="relative w-full max-w-[400px] aspect-[3/4]"
                >
                    {/* Decorative Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 via-cyan-500 to-emerald-500 rounded-[32px] opacity-70 blur-2xl group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <TeamMemberImage 
                        imageSrc="https://ik.imagekit.io/yajas/IMG_20251210_184457.jpg"
                        name="Mr. Jatan"
                        role="Project Delivery Manager"
                    />
                </motion.div>
             </div>

             {/* Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-2 mb-6">
                   <div className="h-[1px] w-12 bg-blue-500" />
                   <span className="text-blue-500 uppercase tracking-widest text-sm font-bold">The Execution Lead</span>
                </div>
                
                <h2 className="text-5xl font-serif text-white mb-8">
                  Delivering <br/> <span className="text-blue-500 italic">Excellence.</span>
                </h2>
                
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                   <p>
                     As a <strong className="text-white">Project Delivery Manager</strong> at Designer Mistri, I specialize in ensuring that every construction project moves smoothly from planning to handover. With years of hands-on experience in delivering residential projects, I manage site execution, contractor coordination, material scheduling, BOQ planning, and client communication with complete professionalism.
                   </p>
                   
                   <h4 className="text-white font-bold text-lg mt-6 mb-4">Core Focus Areas:</h4>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[
                           "On-time project delivery",
                           "Quality assurance at every stage",
                           "Coordination with site engineers",
                           "Transparent daily reporting",
                           "Structural safety compliance",
                           "Managing client expectations"
                       ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                               <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                               {item}
                           </li>
                       ))}
                   </ul>
                </div>
             </motion.div>
          </div>

        </div>

        {/* Separated Instagram Banner */}
        <div className="max-w-4xl mx-auto mt-32 px-6">
            <motion.a 
                href="https://www.instagram.com/designermistri?igsh=dXU3dDF2M3JzbHJn" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="block group relative overflow-hidden rounded-3xl"
            >
                {/* Gradient Border/Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] bg-slate-950 rounded-[22px] z-10" />
                
                <div className="relative z-20 px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 group-hover:bg-slate-900/50 transition-colors rounded-[22px]">
                    
                    {/* Content */}
                    <div className="flex items-center gap-6 text-center md:text-left">
                        <div className="p-4 bg-gradient-to-tr from-purple-600 to-orange-500 rounded-2xl shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                            <Instagram className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Join the Community</h3>
                            <p className="text-slate-400 text-sm md:text-base font-medium">Follow <span className="text-pink-500">@designermistri</span> for daily site updates & insights.</p>
                        </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex items-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-bold shadow-xl group-hover:shadow-2xl hover:bg-slate-100 transition-all transform group-hover:translate-x-1">
                        Follow Now <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </motion.a>
        </div>

      </section>

      {/* Tech Stack Visuals - REIMAGINED */}
      <section className="py-24 relative bg-slate-950 border-t border-white/5 overflow-hidden">
        
        {/* New Tech Grid Background */}
        <div className="absolute inset-0 z-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Top Fade */}
            <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
           <div className="text-center mb-16">
              <span className="text-orange-500 font-mono text-xs uppercase tracking-widest block mb-4">/// SYSTEM CAPABILITIES</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">The Neural Core</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                 CAAT isn't just a chatbot; it's a comprehensive construction engine that processes complex engineering data.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                 title="Smart BOQ Analyzer" 
                 desc="Upload architectural PDFs. CAAT extracts 150+ line items—Cement, Steel, Paint—with 99% accuracy in seconds." 
                 icon={FileText}
                 delay={0.1}
                 visual={
                    <div className="bg-slate-950 px-2 py-1 rounded text-[10px] font-mono text-blue-400 border border-blue-500/30">
                       Scanning...
                    </div>
                 }
              />
              <FeatureCard 
                 title="Live Cost Estimation" 
                 desc="Connected to 500+ local vendors. We provide real-time rates for materials in your specific pincode." 
                 icon={Calculator}
                 delay={0.2}
                 visual={
                    <div className="bg-slate-950 px-2 py-1 rounded text-[10px] font-mono text-green-400 border border-green-500/30 animate-pulse">
                       ₹ Live
                    </div>
                 }
              />
              <FeatureCard 
                 title="Predictive Scheduling" 
                 desc="Generates Gantt charts that adapt to weather forecasts and labor availability patterns." 
                 icon={Clock}
                 delay={0.3}
                 visual={
                     <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-orange-500 rounded-full" />
                        <div className="w-1 h-2 bg-slate-600 rounded-full" />
                        <div className="w-1 h-4 bg-slate-600 rounded-full" />
                     </div>
                 }
              />
              <FeatureCard 
                 title="Automated DPR" 
                 desc="Site engineers upload photos; AI automatically generates the Daily Progress Report and flags quality issues." 
                 icon={ClipboardCheck}
                 delay={0.4}
                 visual={
                    <div className="bg-slate-950 px-2 py-1 rounded text-[10px] font-mono text-purple-400 border border-purple-500/30">
                       Report Ready
                    </div>
                 }
              />
              <FeatureCard 
                 title="Site Copilot" 
                 desc="Resolve doubts like 'Lap length for 16mm bar' or 'Curing time for M25' instantly via chat." 
                 icon={MessageSquareText}
                 delay={0.5}
                 visual={
                    <div className="bg-slate-950 px-2 py-1 rounded text-[10px] font-mono text-orange-400 border border-orange-500/30 flex gap-1 items-center">
                         <span>AI</span>
                         <span className="flex gap-0.5">
                           <span className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                           <span className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                           <span className="w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                         </span>
                    </div>
                 }
              />
              <FeatureCard 
                 title="Project Health" 
                 desc="Analyze financial and physical progress variance to prevent cost overruns before they happen." 
                 icon={Activity}
                 delay={0.6}
                 visual={
                    <div className="bg-slate-950 px-2 py-1 rounded text-[10px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>98%</span>
                    </div>
                 }
              />
           </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-slate-900 flex items-center justify-center text-center px-6 relative overflow-hidden border-t border-white/5">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight italic">
              "We are building the operating system for the physical world. Where every brick has a data point, and every beam has a digital twin."
            </h2>
            <div className="mt-8">
               <div className="text-orange-500 font-bold tracking-widest uppercase text-sm">Mr. Himanshu</div>
               <div className="text-slate-500 text-xs mt-1">Founder, Designer Mistri</div>
            </div>
         </div>
      </section>
      </div>
    </div>
  );
};
