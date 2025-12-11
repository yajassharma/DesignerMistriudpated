
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Database, 
  Truck, 
  ScanEye, 
  ShieldCheck, 
  Cpu, 
  Search, 
  Binary,
  CheckCircle2,
  Lock
} from 'lucide-react';

// --- Simulation Components for the Right Panel ---

const SimRequest = () => (
  <div className="flex flex-col h-full justify-center p-6 font-mono text-sm">
    <div className="flex gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
        <span className="text-xs text-white">USR</span>
      </div>
      <div className="bg-slate-800/50 p-3 rounded-tr-xl rounded-b-xl border border-slate-700 text-slate-300 max-w-[80%]">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Need a 2000 sqft residential structure in Sector 42. Grade A specs.
        </motion.p>
      </div>
    </div>
    <div className="flex gap-3 flex-row-reverse">
      <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center">
        <Cpu className="w-4 h-4 text-orange-500" />
      </div>
      <div className="bg-orange-500/10 p-3 rounded-tl-xl rounded-b-xl border border-orange-500/30 text-orange-200 max-w-[80%]">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
        >
           <p className="text-xs text-orange-500 mb-1">ANALYZING INTENT...</p>
           <div className="space-y-1 text-xs opacity-70">
             <p>{">"} Type: Residential</p>
             <p>{">"} Area: 2000 sqft</p>
             <p>{">"} Location: Sector 42</p>
           </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const SimBidding = () => {
  const [prices, setPrices] = useState([380, 385, 375, 390]);
  useEffect(() => {
    const i = setInterval(() => {
      setPrices(p => p.map(v => v + Math.floor(Math.random() * 5) - 2));
    }, 100);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center p-6">
       <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-mono text-blue-400 animate-pulse">LIVE MARKET QUERY</span>
          <Database className="w-4 h-4 text-slate-500" />
       </div>
       <div className="space-y-3">
         {['Ultratech Cement', 'Tata Steel (Fe550)', 'River Sand', 'Red Bricks'].map((item, i) => (
           <div key={i} className="flex justify-between items-center p-3 bg-slate-800/50 rounded border border-slate-700">
              <span className="text-sm text-slate-300">{item}</span>
              <div className="flex items-center gap-2">
                 <span className="text-xs text-slate-500 line-through">₹{prices[i] + 20}</span>
                 <span className="text-sm font-mono font-bold text-green-400">₹{prices[i]}</span>
              </div>
           </div>
         ))}
       </div>
    </div>
  );
};

const SimExecution = () => (
  <div className="h-full flex flex-col justify-center p-6 relative overflow-hidden">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
     
     {/* Radar UI */}
     <div className="relative w-48 h-48 mx-auto border border-slate-700 rounded-full flex items-center justify-center">
        <div className="absolute w-full h-full border border-slate-800 rounded-full animate-ping opacity-20" />
        <div className="w-2 h-2 bg-blue-500 rounded-full z-10" />
        <div className="absolute top-1/2 left-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent to-blue-500 origin-left animate-[spin_3s_linear_infinite]" />
        
        {/* Moving Dots */}
        <motion.div 
           animate={{ x: [0, 40], y: [0, -40], opacity: [1, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"
        />
        <motion.div 
           animate={{ x: [0, -30], y: [0, 20], opacity: [1, 0] }}
           transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
           className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-green-500 rounded-full"
        />
     </div>
     <div className="text-center mt-6">
        <p className="text-xs font-mono text-slate-400">OPTIMIZING LOGISTICS ROUTE...</p>
        <p className="text-lg font-serif text-white mt-1">JIT Delivery Active</p>
     </div>
  </div>
);

const SimQC = () => (
  <div className="h-full flex flex-col justify-center p-6">
    <div className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-700 group">
       <img 
         src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop" 
         className="w-full h-full object-cover opacity-50 grayscale"
         alt="Site"
       />
       {/* Scanning Line */}
       <motion.div 
         animate={{ top: ['0%', '100%', '0%'] }}
         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
         className="absolute left-0 right-0 h-1 bg-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10"
       />
       
       {/* Bounding Boxes */}
       <motion.div 
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
         className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-green-500/80 rounded"
       />
       <div className="absolute bottom-2 right-2 bg-black/80 text-green-400 text-[10px] font-mono px-2 py-1 rounded border border-green-500/30">
          MATCH: 99.8%
       </div>
    </div>
    <div className="mt-4 flex gap-2">
       <div className="flex-1 bg-green-500/10 border border-green-500/20 p-2 rounded text-center">
          <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto mb-1" />
          <span className="text-[10px] text-green-300">Reinforcement</span>
       </div>
       <div className="flex-1 bg-green-500/10 border border-green-500/20 p-2 rounded text-center">
          <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto mb-1" />
          <span className="text-[10px] text-green-300">Curing</span>
       </div>
    </div>
  </div>
);

const SimPayment = () => (
  <div className="h-full flex flex-col justify-center items-center p-6">
      <div className="relative w-32 h-32 mb-6">
         <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.circle 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="#F97316" 
              strokeWidth="2" 
            />
         </svg>
         <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
         </div>
      </div>
      <h3 className="text-xl font-serif text-white mb-2">Escrow Release</h3>
      <p className="text-sm text-slate-400 text-center">Funds released only after QC verification is complete.</p>
      
      <div className="mt-6 w-full bg-slate-800 rounded-full h-1 overflow-hidden">
         <motion.div 
           initial={{ width: 0 }}
           animate={{ width: "100%" }}
           transition={{ duration: 1 }}
           className="h-full bg-green-500"
         />
      </div>
  </div>
);


export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    { 
      id: 0, 
      title: "Natural Language Request", 
      desc: "Describe your project in plain English. CAAT extracts intent, location, and specifications instantly.",
      icon: MessageSquare,
      component: SimRequest
    },
    { 
      id: 1, 
      title: "Real-Time Bidding", 
      desc: "The engine queries 500+ local vendors to find the best rates for Grade-A materials.",
      icon: Database,
      component: SimBidding
    },
    { 
      id: 2, 
      title: "Automated Logistics", 
      desc: "Materials are scheduled for Just-In-Time delivery to minimize storage waste.",
      icon: Truck,
      component: SimExecution
    },
    { 
      id: 3, 
      title: "Vision AI Quality Control", 
      desc: "Site images are analyzed against BIM models. Deviations trigger instant alerts.",
      icon: ScanEye,
      component: SimQC
    },
    { 
      id: 4, 
      title: "Smart Contract Payment", 
      desc: "Funds are held in escrow and only released when AI verifies the milestone.",
      icon: ShieldCheck,
      component: SimPayment
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // 4 seconds per step
    return () => clearInterval(timer);
  }, [isPaused]);

  const ActiveComponent = steps[activeStep].component;

  return (
    <div className="pt-28 md:pt-32">
      <div className="bg-slate-50 min-h-screen rounded-t-[2rem] shadow-2xl overflow-hidden relative z-10 border-t border-slate-200">
        
        {/* Header */}
        <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm mb-6">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">System Operational</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">Autonomous Construction</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               Watch how CAAT orchestrates the entire lifecycle from a single prompt.
            </p>
          </motion.div>
        </div>

        {/* Split Screen Interaction */}
        <div className="max-w-[1400px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
             
             {/* Left: Interactive List */}
             <div 
               className="flex flex-col gap-4 relative"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
             >
                {/* Connecting Line (Desktop) */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 hidden md:block" />

                {steps.map((step, index) => {
                  const isActive = activeStep === index;
                  return (
                    <motion.div 
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`relative pl-0 md:pl-20 p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                        isActive 
                        ? 'bg-white shadow-xl shadow-orange-500/10 border-orange-500/20 scale-102' 
                        : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200'
                      }`}
                    >
                       {/* Timeline Dot */}
                       <div className={`hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 transition-colors ${
                          isActive ? 'bg-orange-500 border-orange-200' : 'bg-white border-slate-300'
                       }`} />

                       <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl transition-colors ${isActive ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                             <step.icon className="w-6 h-6" />
                          </div>
                          <div>
                             <h3 className={`text-lg font-bold mb-1 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{step.title}</h3>
                             <p className={`text-sm leading-relaxed ${isActive ? 'text-slate-600' : 'text-slate-400'}`}>{step.desc}</p>
                          </div>
                       </div>
                       
                       {/* Progress Bar for Active Item */}
                       {isActive && !isPaused && (
                         <motion.div 
                           // Removed layoutId to prevent floating transition between items
                           key={`progress-${step.id}`}
                           className="absolute bottom-0 left-0 h-1 bg-orange-500/50 rounded-b-2xl"
                           initial={{ width: 0 }}
                           animate={{ width: "100%" }}
                           transition={{ duration: 4, ease: "linear" }}
                         />
                       )}
                    </motion.div>
                  );
                })}
             </div>

             {/* Right: AI Visualization Core */}
             <div className="sticky top-32 lg:h-[600px]">
                <div className="relative w-full h-full bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
                   
                   {/* Tech Background/Grid */}
                   <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                   <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px]" />
                   <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]" />

                   {/* Window Header */}
                   <div className="relative z-20 flex justify-between items-center p-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/50" />
                         <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                         <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <div className="flex items-center gap-2">
                         <Binary className="w-3 h-3 text-slate-500" />
                         <span className="text-[10px] font-mono text-slate-400 tracking-widest">CAAT_NEURAL_CORE_V2.1</span>
                      </div>
                   </div>

                   {/* Dynamic Content Area */}
                   <div className="relative z-10 h-[calc(100%-60px)]">
                      <AnimatePresence mode="wait">
                         <motion.div 
                           key={activeStep}
                           initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                           exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                           transition={{ duration: 0.4 }}
                           className="w-full h-full"
                         >
                            <ActiveComponent />
                         </motion.div>
                      </AnimatePresence>
                   </div>
                   
                   {/* Footer Status */}
                   <div className="absolute bottom-0 w-full p-3 bg-slate-900/80 backdrop-blur border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span>PROCESS_ID: {8000 + activeStep}</span>
                      <span className="text-orange-500">PROCESSING</span>
                   </div>
                </div>
                
                {/* Floating Glow Behind */}
                <div className="absolute -inset-4 bg-orange-500/10 rounded-[3rem] blur-xl -z-10" />
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};
