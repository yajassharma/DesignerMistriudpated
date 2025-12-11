
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Construction, Award, ArrowLeft, Building2, Home, ArrowRight, FolderOpen, Layers } from 'lucide-react';
import MagicBento, { BentoCardProps } from './MagicBento';
import { MistriLogo } from './Logo';

// --- Data: Residential Collection (10 Items) ---
const residentialItems: BentoCardProps[] = [
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.56.55%E2%80%AFPM.png",
    colSpan: 2,
    rowSpan: 2
  },
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.56.41%E2%80%AFPM.png",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.58.27%E2%80%AFPM.png",
    colSpan: 1,
    rowSpan: 2
  },
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.57.08%E2%80%AFPM.png",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.57.38%E2%80%AFPM.png",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.57.21%E2%80%AFPM.png",
    colSpan: 2,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.58.08%E2%80%AFPM.png",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-09%20at%2021.04.32.jpeg?updatedAt=1765410854317",
    colSpan: 1,
    rowSpan: 2
  },
  {
    image: "https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.57.55%E2%80%AFPM.png",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-09%20at%2021.04.32.jpeg?updatedAt=1765410854317",
    colSpan: 2,
    rowSpan: 1
  }
];

// --- Data: Commercial Collection (10 Items) ---
const commercialItems: BentoCardProps[] = [
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2001.16.39.jpeg?updatedAt=1765410854216",
    colSpan: 2,
    rowSpan: 2
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2000.58.03%20(1).jpeg?updatedAt=1765410854309",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-09%20at%2021.04.30.jpeg?updatedAt=1765410854369",
    colSpan: 1,
    rowSpan: 2
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2000.27.32.jpeg?updatedAt=1765410854413",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-09%20at%2021.04.35.jpeg?updatedAt=1765410854420",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-09%20at%2021.04.35%20(1).jpeg?updatedAt=1765410854405",
    colSpan: 2,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2000.58.03.jpeg?updatedAt=1765410854431",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2000.58.03%20(1).jpeg?updatedAt=1765410854309",
    colSpan: 1,
    rowSpan: 2
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-09%20at%2021.04.34.jpeg?updatedAt=1765410854374",
    colSpan: 1,
    rowSpan: 1
  },
  {
    image: "https://ik.imagekit.io/yajas/WhatsApp%20Image%202025-12-10%20at%2000.58.04.jpeg?updatedAt=1765410854438",
    colSpan: 2,
    rowSpan: 1
  }
];

const FolderCard = ({ title, count, image, icon: Icon, colorClass, onClick }: any) => {
  return (
    <motion.div 
      onClick={onClick}
      className="relative w-full h-[450px] cursor-pointer group perspective-1000 mt-10"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
        {/* The Tab (Back Layer) */}
        <div className={`absolute -top-12 left-0 w-[55%] h-16 ${colorClass} rounded-t-2xl z-0 transform -skew-x-6 origin-bottom-left transition-colors duration-300 brightness-90 group-hover:brightness-110 flex items-start pt-3 pl-6 shadow-md border-t border-white/20`}>
            <span className="text-white/80 font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <FolderOpen className="w-3 h-3" /> {count} Projects
            </span>
        </div>

        {/* The Main Folder Body (Front Layer) */}
        <div className="absolute inset-0 bg-slate-900 rounded-b-3xl rounded-tr-3xl rounded-tl-none shadow-2xl overflow-hidden z-10 border-t-4 border-l border-r border-b border-white/10 ring-1 ring-black/50">
            
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img 
                 src={image} 
                 className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80" 
                 alt="folder-cover" 
               />
               <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${colorClass}`} />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0" />

            {/* Content */}
            <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                
                {/* Top Section */}
                <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg group-hover:bg-white/20 transition-all">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end opacity-70 group-hover:opacity-100 transition-opacity">
                        <MistriLogo className="w-12 h-12" />
                        <span className="text-[10px] text-white/50 font-mono tracking-[0.2em] mt-1 uppercase">Designer Mistri</span>
                    </div>
                </div>

                {/* Bottom Section */}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`h-[2px] w-12 ${colorClass} group-hover:w-24 transition-all duration-500`} />
                        <span className="text-slate-400 text-xs uppercase tracking-widest font-bold">Portfolio Collection</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 drop-shadow-lg leading-tight">
                        {title}
                    </h2>

                    <div className="flex items-center gap-4 group/btn">
                        <div className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm flex items-center gap-2 group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-colors shadow-lg">
                            View Gallery <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="p-3 rounded-full border border-white/10 text-white/50 group-hover:text-white group-hover:border-white/30 transition-all">
                            <Layers className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<'residential' | 'commercial' | null>(null);

  const handleCategorySelect = (category: 'residential' | 'commercial' | null) => {
    setActiveCategory(category);
    if (category) {
        setTimeout(() => {
            const el = document.getElementById('portfolio-grid');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 md:pt-32 relative min-h-screen bg-slate-50">
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
              <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover"
                  alt="Portfolio Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50" />
          </motion.div>
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                  <span className="text-orange-400 font-bold tracking-[0.3em] uppercase mb-6 inline-block bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">Our Masterpieces</span>
                  <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                      Crafting <span className="italic text-orange-200">Landmarks</span>
                  </h1>
                  <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                      A showcase of precision engineering and aesthetic excellence across residential and commercial domains.
                  </p>
              </motion.div>
          </div>
      </div>

      <div className="relative z-10 -mt-20">
        
        {/* --- Founder Section --- */}
        <div className="max-w-[1400px] mx-auto px-6 mb-24">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-200 relative overflow-hidden group hover:border-orange-200 transition-colors"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Quote className="w-32 h-32 text-slate-900" />
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                                <Construction className="w-5 h-5" />
                            </div>
                            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Leadership</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight mb-6">
                            Engineering intelligence <br/> into every square foot.
                        </h2>
                        
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                           Founded by <strong className="text-slate-900">Himanshu</strong>, a Civil Engineer with deep roots in high-rise construction. 
                           Drawing from over 3 years of field experience on landmark projects like <span className="text-slate-900 border-b border-orange-300">DLF The Arbour</span> and <span className="text-slate-900 border-b border-orange-300">Anant Raj Estate Residences</span>, 
                           we bring corporate-grade precision to your home.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-900">
                            <span className="flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full shadow-sm">
                                <Award className="w-4 h-4 text-orange-500" /> 42-Storey Tower Execution
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full shadow-sm">
                                <Award className="w-4 h-4 text-orange-500" /> 3+ Years Field Expertise
                            </span>
                        </div>
                    </div>
                    
                    {/* Decorative Stat */}
                    <div className="hidden md:block w-px h-64 bg-slate-100" />
                    
                    <div className="text-center md:text-left">
                        <div className="text-6xl font-serif text-orange-500 font-bold mb-2">20+</div>
                        <div className="text-slate-500 uppercase tracking-widest text-sm font-bold">Projects Delivered</div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* --- Folder Selection / Gallery Interface --- */}
        <div className="max-w-[1400px] mx-auto px-6 pb-32" id="portfolio-grid">
            
            <AnimatePresence mode="wait">
                {!activeCategory ? (
                    <motion.div 
                        key="folders"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-end justify-between mb-16 border-b border-slate-200 pb-8">
                            <div>
                                <h2 className="text-3xl font-serif text-slate-900">Project Portfolios</h2>
                                <p className="text-slate-500 mt-2">Select a category to view our curated work.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pb-20">
                            <FolderCard 
                               title="Residential"
                               count="10+"
                               image="https://ik.imagekit.io/yajas/Screenshot%202025-12-11%20at%208.56.41%E2%80%AFPM.png"
                               icon={Home}
                               colorClass="bg-orange-600"
                               onClick={() => handleCategorySelect('residential')}
                            />
                            
                            <FolderCard 
                               title="Commercial"
                               count="10+"
                               image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
                               icon={Building2}
                               colorClass="bg-blue-600"
                               onClick={() => handleCategorySelect('commercial')}
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="gallery"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                            <button 
                                onClick={() => handleCategorySelect(null)}
                                className="group flex items-center gap-4 text-slate-500 hover:text-slate-900 transition-colors self-start"
                            >
                                <div className="p-3 bg-white border border-slate-200 rounded-full group-hover:bg-slate-100 transition-colors shadow-sm">
                                    <ArrowLeft className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Back to Folders</span>
                                    <span className="font-serif text-2xl font-bold text-slate-900">
                                        {activeCategory === 'residential' ? 'Residential Collection' : 'Commercial Collection'}
                                    </span>
                                </div>
                            </button>
                            
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-mono bg-white border border-slate-200 px-4 py-2 rounded-full text-slate-600 shadow-sm">
                                    {activeCategory === 'residential' ? residentialItems.length : commercialItems.length} Images
                                </span>
                            </div>
                        </div>

                        <MagicBento 
                            items={activeCategory === 'residential' ? residentialItems : commercialItems}
                            enableStars={true}
                            enableSpotlight={true}
                            spotlightRadius={300}
                            enableBorderGlow={true}
                            glowColor={activeCategory === 'residential' ? "249, 115, 22" : "59, 130, 246"} // Orange for Res, Blue for Comm
                            cardBackgroundColor="#ffffff"
                            borderColor="rgba(0,0,0,0.05)"
                            particleColor={activeCategory === 'residential' ? "249, 115, 22" : "59, 130, 246"}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

      </div>
    </div>
  );
};
