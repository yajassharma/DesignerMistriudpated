import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Hammer, Users, ShoppingCart, Droplets, Zap, Sparkles, Paintbrush, Armchair } from 'lucide-react';
import gsap from 'gsap';

const services = [
  { 
    id: 'construction', 
    name: "Turnkey Construction", 
    category: "Execution",
    icon: Hammer, 
    desc: "End-to-end execution of civil structures. From excavation to handover with precision BOQ tracking.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    quote: "We don't just pour concrete; we engineer certainty."
  },
  { 
    id: 'design', 
    name: "Interior Design", 
    category: "Visuals",
    icon: Armchair, 
    desc: "Immersive 3D visualization. Walk through your home in VR before a single brick is laid.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    quote: "Design is not just what it looks like. Design is how it works."
  },
  { 
    id: 'material', 
    name: "Material Store", 
    category: "Procurement",
    icon: ShoppingCart, 
    desc: "Direct-from-factory pricing. Steel, cement, and aggregates sourced at wholesale rates.",
    image: "https://as1.ftcdn.net/jpg/04/97/72/22/1000_F_497722214_I482E0qYiqm9mNtrhQDfcpgz1tb59GI7.jpg",
    quote: "Quality is the best business plan."
  },
  { 
    id: 'manpower', 
    name: "Manpower Hub", 
    category: "Workforce",
    icon: Users, 
    desc: "Verified skilled labor. Masons, carpenters, and electricians vetted for skill and safety.",
    image: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3Vyc3xlbnwwfHwwfHx8MA%3D%3D$0",
    quote: "Great things in business are never done by one person."
  },
  { 
    id: 'plumbing', 
    name: "Advanced Plumbing", 
    category: "MEP",
    icon: Droplets, 
    desc: "Hydro-tested piping solutions. Leak-proof systems with pressure-optimized layouts.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop",
    quote: "Water is the driving force of all nature."
  },
  { 
    id: 'electrical', 
    name: "Electrical Automation", 
    category: "MEP",
    icon: Zap, 
    desc: "Future-proof wiring and smart home integration with zero-trip safety standards.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1200&auto=format&fit=crop",
    quote: "Lighting is the jewelry of the home."
  },
  { 
    id: 'painting', 
    name: "Premium Finishes", 
    category: "Finishing",
    icon: Paintbrush, 
    desc: "Mechanized painting and texture work. Laser-leveled surface preparation.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
    quote: "Color is a power which directly influences the soul."
  },
  { 
    id: 'cleaning', 
    name: "Deep Cleaning", 
    category: "Handover",
    icon: Sparkles, 
    desc: "Industrial post-construction cleaning. Move into a pristine, ready-to-live home.",
    image: "https://happyhousekeepers.com.ph/wp-content/uploads/2023/12/OUR-SERVICES-POST-CONSTRUCTION-CLEANING.jpg",
    quote: "Simplicity is the ultimate sophistication."
  }
];

export const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Custom Cursor Logic
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Only move custom cursor if hovering over list items
      if (activeService !== null && cursorRef.current) {
         gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: "power3.out"
         });
         gsap.to(cursorLabelRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.45,
            ease: "power3.out"
         });
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [activeService]);

  return (
    <div ref={containerRef} className="pt-32 min-h-screen relative cursor-default">
      
      {/* Background with Fade-in Grid & Transparent Top */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top Gradient: Transparent (shows LiquidEther) -> Solid Slate-50 */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50" />
          
          {/* Solid Background for the rest */}
          <div className="absolute top-[500px] left-0 right-0 bottom-0 bg-slate-50" />

          {/* Fading Grid Pattern */}
          <div 
             className="absolute inset-0 opacity-[0.4]" 
             style={{ 
                 backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
                 backgroundSize: '40px 40px',
                 maskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)'
             }} 
          />
      </div>

      {/* Floating Image Cursor (Visible only when hovering) */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-[450px] h-[320px] rounded-2xl overflow-hidden pointer-events-none z-50 hidden md:block opacity-0 shadow-2xl shadow-black/30"
        style={{ transform: 'translate(-50%, -50%) scale(0)' }}
      >
        <AnimatePresence mode="wait">
            {activeService !== null && (
                <motion.div 
                    key={activeService}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                >
                    <img 
                        src={services[activeService].image}
                        className="w-full h-full object-cover"
                        alt="Service Preview"
                    />
                    {/* Dark Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Quote Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="w-8 h-1 bg-orange-500 mb-3" />
                        <p className="text-white font-serif text-xl italic leading-relaxed">
                            "{services[activeService].quote}"
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

       {/* Floating Label Cursor */}
       <div 
          ref={cursorLabelRef}
          className="fixed top-0 left-0 pointer-events-none z-[51] hidden md:flex items-center justify-center mix-blend-difference opacity-0"
          style={{ transform: 'translate(-50%, -50%)' }}
       >
           <div className="w-4 h-4 bg-white rounded-full" />
       </div>

      <div className="max-w-[1600px] mx-auto px-6 mb-20 relative z-10">
         <div className="mb-12 pt-10">
             <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-serif text-slate-900 tracking-tighter mb-8">
                Our <span className="text-orange-600 italic">8 Pillars</span>
             </h1>
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-900 pb-8">
                <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed">
                    A suite of precision-engineered services designed to bring predictability to the chaotic world of construction.
                </p>
             </div>
         </div>

         {/* The Interactive List */}
         <div className="flex flex-col">
            {services.map((service, index) => (
                <Link 
                    to={`/services/${service.id}`} 
                    key={service.id}
                    className="group relative border-b border-slate-200 py-12 hover:bg-white/80 transition-colors duration-500"
                    onMouseEnter={() => {
                        setActiveService(index);
                        if (cursorRef.current && cursorLabelRef.current) {
                            gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.3 });
                            gsap.to(cursorLabelRef.current, { opacity: 1, duration: 0.3 });
                        }
                    }}
                    onMouseLeave={() => {
                        setActiveService(null);
                        if (cursorRef.current && cursorLabelRef.current) {
                            gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.3 });
                            gsap.to(cursorLabelRef.current, { opacity: 0, duration: 0.3 });
                        }
                    }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10 px-4 md:px-8">
                        {/* Index & Category */}
                        <div className="mb-4 md:mb-0 md:w-1/4">
                            <span className="text-xs font-mono text-slate-400 mr-4">0{index + 1}</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 px-2 py-1 bg-orange-50 rounded-full border border-orange-100">
                                {service.category}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="md:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 group-hover:translate-x-4 transition-transform duration-500 flex items-center gap-4">
                                {service.name}
                                {/* Mobile Image Reveal */}
                                <div className="md:hidden w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                                    <img src={service.image} className="w-full h-full object-cover" alt="" />
                                </div>
                            </h2>
                        </div>

                        {/* Arrow & Desc */}
                        <div className="mt-4 md:mt-0 md:w-1/4 flex items-center justify-between md:justify-end gap-8">
                             <p className="text-sm text-slate-500 max-w-[200px] hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                {service.desc}
                             </p>
                             <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500 group-hover:rotate-45">
                                 <ArrowUpRight className="w-5 h-5" />
                             </div>
                        </div>
                    </div>
                </Link>
            ))}
         </div>
      </div>
    </div>
  );
};
