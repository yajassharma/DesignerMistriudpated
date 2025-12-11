import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAIImage } from './useAIImage';
import BlurText from './BlurText';
import GradientText from './GradientText';
import GlareHover from './GlareHover';

export const Hero = () => {
  const { imageUrl } = useAIImage(
    "Low angle wide shot of a magnificent modern glass and concrete structure at twilight, warm interior lights glowing, architectural photography, hyperrealistic, 8k, minimalistic sky", 
    true
  );

  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-white flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <AnimatePresence>
           {imageUrl ? (
             <motion.img 
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.5 }}
               src={imageUrl} 
               className="w-full h-full object-cover"
               alt="Hero Architecture"
             />
           ) : (
             <div className="w-full h-full bg-slate-200 animate-pulse" />
           )}
        </AnimatePresence>
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 w-full pb-20 md:pb-32 lg:pb-0 lg:-translate-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-orange-500 uppercase tracking-[0.2em] text-sm font-medium mb-4 md:mb-6 bg-white/10 backdrop-blur-md inline-block px-3 py-1 rounded border border-white/5">India's First Unified AI Platform</p>
          
          <div className="mb-6 md:mb-8">
            {/* Constructing: Simple Sans-Serif Font */}
            <div className="text-white text-[10vw] md:text-[8vw] leading-[0.9] font-sans font-bold drop-shadow-sm whitespace-nowrap tracking-tight">
              <BlurText 
                text="Constructing" 
                delay={150} 
                animateBy="letters" 
                direction="top"
                className="block"
              />
            </div>
            
            {/* Intelligence: Gradient Text */}
            <div className="ml-[5vw] md:ml-[10vw] text-[10vw] md:text-[8vw] leading-[1.2] font-serif italic whitespace-nowrap">
              <GradientText
                colors={["#fdba74", "#fff7ed", "#fdba74", "#ffffff", "#fdba74"]} 
                animationSpeed={5}
                showBorder={false}
                className="mx-0 pb-2 md:pb-6 pr-4" 
                children="Intelligence"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-4 flex flex-col gap-6 items-end max-w-2xl ml-auto mr-0 md:mr-8 lg:mr-4">
             <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed drop-shadow-md text-right max-w-lg">
               Designer Mistri standardizes the unorganized construction market. 
               We bring price transparency, automation, and trust to every brick laid.
             </p>
             <Link to="/caat" className="self-end mr-2 md:mr-0 mt-2">
               <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
               >
                  {/* Pulsing glow background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  
                  <GlareHover
                      width="auto"
                      height="auto"
                      background="rgba(255, 255, 255, 0.95)"
                      borderRadius="9999px"
                      borderColor="transparent"
                      glareColor="#F97316"
                      glareOpacity={0.5}
                      glareSize={250}
                      className="relative px-8 md:px-12 py-4 md:py-5 shadow-2xl transition-all duration-300 border-2 border-white/50"
                  >
                      <div className="flex items-center gap-4 text-slate-900 font-bold text-base md:text-lg tracking-wide">
                        <span className="uppercase">Try CAAT Demo</span>
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform stroke-[3px]" />
                      </div>
                  </GlareHover>
               </motion.div>
             </Link>
          </div>
        </motion.div>
      </div>

      {/* Wave Separator - Enhanced Wavier Design */}
      <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-[1px] pointer-events-none">
        <svg 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
            className="w-full h-[18vh] min-h-[120px] max-h-[220px]"
        >
            {/* Layer 1: Subtle translucent wave for depth - slightly darker than main wave */}
            <path 
                fill="rgba(248, 250, 252, 0.5)" 
                d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,192C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            
            {/* Layer 2: Main wave matching the next section's bg-slate-50 (#f8fafc) */}
            <path 
                fill="#f8fafc" 
                d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,186.7C672,203,768,245,864,250.7C960,256,1056,224,1152,192C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
      </div>
    </section>
  );
};