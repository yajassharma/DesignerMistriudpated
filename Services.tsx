import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, Armchair, ShoppingCart, Users, Droplets, Zap, Paintbrush, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  icon: React.ElementType;
  image: string;
}

const servicesData: ServiceItem[] = [
  { 
    id: 'construction', 
    title: "Construction Cell", 
    subtitle: "Execution",
    desc: "We manage the entire lifecycle of your build, from excavation to the final slab. Our automated BOQ engine ensures every bag of cement is tracked.", 
    features: ["Automated BOQ", "Daily Drone Feeds", "Timeline Adherence"],
    icon: Hammer, 
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop" 
  },
  { 
    id: 'design', 
    title: "Interior Design", 
    subtitle: "Visualization",
    desc: "Walk through your home before it's built. Our VR-ready 3D models allow you to visualize textures, lighting, and furniture placement.", 
    features: ["VR Walkthroughs", "Material Moodboards", "Lighting Layouts"],
    icon: Armchair, 
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 'material', 
    title: "Material Store", 
    subtitle: "Procurement",
    desc: "Cut out the middlemen. We source steel, cement, and finishing materials directly from manufacturers to guarantee Grade-A quality.", 
    features: ["Wholesale Rates", "Quality Certs", "JIT Delivery"],
    icon: ShoppingCart, 
    // Updated to show warehouse/materials
    image: "https://as1.ftcdn.net/jpg/04/97/72/22/1000_F_497722214_I482E0qYiqm9mNtrhQDfcpgz1tb59GI7.jpg" 
  },
  { 
    id: 'manpower', 
    title: "Manpower Cell", 
    subtitle: "Workforce",
    desc: "Access a vetted pool of 500+ skilled masons, carpenters, and electricians. We handle payroll, attendance, and safety compliance.", 
    features: ["Background Checks", "Skill Assessment", "Safety Gear"],
    icon: Users, 
    // Updated to show construction team
    image: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3Vyc3xlbnwwfHwwfHx8MA%3D%3D$0" 
  },
  { 
    id: 'plumbing', 
    title: "Plumbing", 
    subtitle: "Engineering",
    desc: "Advanced piping layouts designed for pressure optimization. We use hydro-testing to ensure zero leaks before walls are sealed.", 
    features: ["Hydro-Testing", "Pressure Pumps", "Premium Fixtures"],
    icon: Droplets, 
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 'electrical', 
    title: "Electrical", 
    subtitle: "Automation",
    desc: "Future-proof wiring designed for modern automation. We calculate load distribution to prevent tripping and ensure fire safety.", 
    features: ["Load Balancing", "Fire-Retardant", "Smart Automation"],
    icon: Zap, 
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 'painting', 
    title: "Painting", 
    subtitle: "Finishing",
    desc: "Laser-leveled wall preparation and premium emulsion application. Our mechanized painting ensures uniform texture and zero wastage.", 
    features: ["Mechanized Sanding", "Laser Leveling", "Texture Design"],
    icon: Paintbrush, 
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    id: 'cleaning', 
    title: "Deep Cleaning", 
    subtitle: "Handover",
    desc: "Post-construction industrial cleaning. We remove every speck of cement dust, paint drops, and debris so you walk into a pristine home.", 
    features: ["Industrial Vacuum", "Chemical Treatment", "Sanitization"],
    icon: Sparkles, 
    // Updated to valid image for cleaning
    image: "https://happyhousekeepers.com.ph/wp-content/uploads/2023/12/OUR-SERVICES-POST-CONSTRUCTION-CLEANING.jpg" 
  }
];

// --- Mobile Components ---

const MobileServiceCardStack: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  return (
    <div className="relative mb-8 px-1">
       <div className="relative mx-auto w-full">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 h-[450px] flex flex-col border border-slate-200">
              
              <div className="h-[45%] relative overflow-hidden group">
                 <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                 <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-slate-200 px-2 py-1 rounded text-[10px] font-mono text-orange-600 font-bold tracking-widest shadow-sm">
                    0{index + 1}
                 </div>
              </div>

              <div className="h-[55%] bg-white p-6 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                        <div className="p-2 rounded-lg bg-orange-50 border border-orange-100 text-orange-600">
                            <service.icon className="w-4 h-4" />
                        </div>
                        <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">{service.subtitle}</span>
                    </div>
                    <h3 className="text-xl font-serif text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-light mb-3">
                        {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-[10px] bg-slate-50 border border-slate-100 px-2 py-1 rounded text-slate-500 font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                     to={`/services/${service.id}`}
                     className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg mt-4"
                  >
                     Explore Details
                     <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
          </div>
       </div>
    </div>
  );
};

// --- Desktop Components: The Light Theme Pillars ---

const Pillar: React.FC<{ service: ServiceItem, index: number, isActive: boolean, onHover: (id: string) => void }> = ({ service, index, isActive, onHover }) => {
    return (
      <motion.div
        onMouseEnter={() => onHover(service.id)}
        className={`relative h-full border-r border-slate-200 last:border-r-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer group ${isActive ? 'flex-[4]' : 'flex-[0.5] hover:flex-[0.7]'}`}
      >
         {/* Background Image (Visible on Active) */}
         <div className={`absolute inset-0 transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
            <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
            {/* Improved readability gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
         </div>
  
         {/* Inactive State Visual (Light Theme) */}
         <div className={`absolute inset-0 bg-white transition-all duration-700 ${isActive ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`}>
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Vertical Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-between py-12">
               <span className="text-slate-400 font-mono text-sm font-bold">0{index + 1}</span>
               
               <div className="flex-1 flex items-center justify-center">
                   <div className="-rotate-90 whitespace-nowrap">
                       <h3 className="text-xl font-bold text-slate-400 tracking-widest uppercase group-hover:text-orange-600 transition-colors flex items-center gap-4">
                           {service.title} 
                           {isActive ? null : <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                       </h3>
                   </div>
               </div>
  
               <div className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-400 group-hover:text-orange-600 group-hover:border-orange-200 group-hover:bg-orange-50 transition-all">
                  <service.icon className="w-5 h-5" />
               </div>
            </div>
         </div>
  
         {/* Active Content Overlay */}
         <div className={`relative h-full flex flex-col justify-end p-12 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-xl">
               <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl font-sans font-bold text-white/20">0{index + 1}</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/80 to-transparent" />
                  <div className="p-3 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/30">
                     <service.icon className="w-6 h-6" />
                  </div>
               </div>
  
               <h2 className="text-5xl font-serif text-white mb-2 leading-tight drop-shadow-lg">
                  {service.title}
               </h2>
               <div className="text-orange-300 font-mono text-sm tracking-widest uppercase mb-6 font-bold">{service.subtitle}</div>
  
               <p className="text-white/90 text-lg leading-relaxed mb-8 border-l-2 border-orange-500 pl-6 drop-shadow-md">
                  {service.desc}
               </p>
  
               <div className="grid grid-cols-2 gap-4 mb-10">
                   {service.features.map((feature, i) => (
                       <div key={i} className="flex items-center gap-3 text-sm text-white/90 font-medium">
                           <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                           {feature}
                       </div>
                   ))}
               </div>
  
               <Link to={`/services/${service.id}`} className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all group/btn shadow-xl">
                  Explore Module <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
               </Link>
            </div>
         </div>
      </motion.div>
    )
  }

export const ServicesSection = () => {
  const [activeId, setActiveId] = useState(servicesData[0].id);

  return (
    // Reduced pb-32 to pb-10 to remove large off-white space gap before the next transparent section
    <section id="ecosystem" className="relative bg-slate-50 pt-16 md:pt-24 pb-12 md:pb-10">
       
      {/* Intro Content (Added for smoother transition) */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16 md:mb-20 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
         >
            <span className="text-orange-500 font-mono text-xs md:text-sm tracking-[0.3em] uppercase block mb-4">The Integrated Ecosystem</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight">
               Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">8 Strategic Pillars</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
               Construction is complex, but managing it shouldn't be. We've consolidated the fragmented industry into 8 specialized cells, all powered by our central CAAT engine.
            </p>
         </motion.div>
      </div>

      {/* --- Mobile Layout (Window Scroll Stack) --- */}
      <div className="block lg:hidden w-full relative px-4 pb-12 z-10">
            {/* Cards Stack */}
            <div className="relative">
                {servicesData.map((service, index) => (
                    <MobileServiceCardStack key={service.id} service={service} index={index} />
                ))}
            </div>
            
             {/* --- Redirect Link --- */}
             <div className="relative mt-12 z-50 px-1">
                <Link to="/services" className="block relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl h-[120px] group border border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:10px_10px]" />
                    <div className="absolute inset-0 flex items-center justify-between px-8">
                        <div className="text-white relative z-10">
                            <h3 className="text-xl font-serif font-bold">View Full Catalog</h3>
                            <p className="text-slate-400 text-xs mt-1">Explore all services & pricing</p>
                        </div>
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform relative z-10">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </Link>
            </div>
      </div>

      {/* --- Desktop Layout: The Light Pillars --- */}
      <div className="hidden lg:flex max-w-[1500px] mx-auto px-6">
        <div className="w-full h-[700px] bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-200 relative overflow-hidden flex">
            {servicesData.map((service, index) => (
            <Pillar 
                key={service.id} 
                service={service} 
                index={index} 
                isActive={activeId === service.id} 
                onHover={setActiveId} 
            />
            ))}
        </div>
      </div>
    </section>
  );
};