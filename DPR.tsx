import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock, Camera, FileText, ChevronRight, Signal, Battery, Wifi, Bell, MoreVertical } from 'lucide-react';

const MobileScreen = () => (
  <div className="bg-slate-950 w-full h-full text-white relative overflow-hidden font-sans select-none flex flex-col">
     {/* Status Bar */}
     <div className="px-6 py-3 flex justify-between items-center text-[10px] font-medium text-slate-400 z-20">
        <span>9:41</span>
        <div className="flex gap-1.5">
           <Signal className="w-3 h-3" />
           <Wifi className="w-3 h-3" />
           <Battery className="w-3 h-3" />
        </div>
     </div>

     {/* App Header */}
     <div className="px-6 pb-4 pt-2 z-10">
        <div className="flex justify-between items-center mb-6">
           <div>
              <div className="text-[10px] text-orange-500 font-bold tracking-widest uppercase mb-1">Active Site</div>
              <h2 className="text-xl font-serif">Villa 402, Sector 15</h2>
           </div>
           <div className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              <Bell className="w-4 h-4" />
           </div>
        </div>

        {/* Daily Score Card */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 shadow-lg shadow-orange-900/40 relative overflow-hidden group cursor-pointer">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
           
           <div className="flex justify-between items-start relative z-10 mb-6">
              <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold inline-flex items-center gap-1 text-white">
                 <Clock className="w-3 h-3" /> Oct 24, Today
              </div>
              <MoreVertical className="w-4 h-4 text-white/70" />
           </div>
           
           <div className="flex justify-between items-end relative z-10">
              <div>
                 <p className="text-orange-100 text-xs font-medium mb-1">Daily Completion</p>
                 <div className="text-3xl font-bold">94%</div>
              </div>
              <div className="text-right">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border border-orange-500 bg-slate-800" />
                    ))}
                 </div>
                 <div className="text-[10px] text-orange-100 mt-1">Team on site</div>
              </div>
           </div>
        </div>
     </div>

     {/* Scrollable Content */}
     <div className="flex-1 overflow-y-auto px-6 space-y-5 pb-20 no-scrollbar relative z-10">
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/50 border border-slate-800 p-3 rounded-xl flex items-center gap-3 active:scale-95 transition-transform">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                    <Camera className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium">Add Photo</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-3 rounded-xl flex items-center gap-3 active:scale-95 transition-transform">
                <div className="bg-red-500/20 p-2 rounded-lg text-red-400">
                    <AlertCircle className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium">Flag Issue</div>
            </div>
        </div>

        {/* Timeline */}
        <div>
           <div className="flex justify-between items-center mb-3">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Live Feed</h3>
             <span className="text-[10px] text-orange-500">View All</span>
           </div>
           
           <div className="relative border-l border-slate-800 pl-4 space-y-6 ml-1">
              {/* Item 1 */}
              <div className="relative">
                 <div className="absolute -left-[21px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950" />
                 <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-slate-300">Slab Reinforcement</span>
                        <span className="text-[10px] text-slate-500">10:30 AM</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mb-2">Checking of 16mm bars completed. Spacing verified.</p>
                    <div className="flex gap-2 overflow-hidden">
                       <div className="h-12 w-16 rounded-lg bg-slate-800 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=200&auto=format&fit=crop')] bg-cover" />
                       <div className="h-12 w-16 rounded-lg bg-slate-800 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=200&auto=format&fit=crop')] bg-cover" />
                    </div>
                 </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                 <div className="absolute -left-[21px] top-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-slate-950" />
                 <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex justify-between items-center">
                    <div>
                        <div className="text-xs font-bold text-slate-300">Material Inward</div>
                        <p className="text-[10px] text-slate-400">100 Bags Ultratech Cement received.</p>
                    </div>
                    <div className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] font-bold">Verified</div>
                 </div>
              </div>

               {/* Item 3 */}
               <div className="relative">
                 <div className="absolute -left-[21px] top-0 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950" />
                 <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl opacity-60">
                    <div className="text-xs font-bold text-slate-300">Site Closed</div>
                    <p className="text-[10px] text-slate-400">Security check pending.</p>
                 </div>
              </div>
           </div>
        </div>
     </div>

     {/* Bottom Nav */}
     <div className="absolute bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-xl border-t border-white/5 px-6 pt-3 pb-6 flex justify-between items-center z-20">
         <div className="flex flex-col items-center gap-1 text-orange-500">
             <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                <div className="w-4 h-4 bg-current rounded-[2px]" />
             </div>
         </div>
         <div className="text-slate-600 hover:text-white transition-colors"><Clock className="w-5 h-5" /></div>
         <div className="text-slate-600 hover:text-white transition-colors"><FileText className="w-5 h-5" /></div>
         <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700" />
     </div>
     
     {/* Decorative Blur inside phone */}
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
  </div>
);

export const DPRSection = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
               <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">/// TRANSPARENCY AUTOMATED</span>
               <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
                 Your Site in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Your Pocket.</span>
               </h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                 Forget messy WhatsApp groups. The Designer Mistri App generates an automated Daily Progress Report (DPR) every night, compiling images, checklists, and material consumption into a single dashboard.
               </p>

               <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-orange-500">
                        <Clock className="w-6 h-6" />
                     </div>
                     <div className="text-left">
                        <h4 className="text-slate-900 font-bold mb-1">Real-Time Feed</h4>
                        <p className="text-sm text-slate-500">Site engineers upload milestone photos instantly. You see them as they happen.</p>
                     </div>
                  </div>
                  
                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-orange-500">
                        <FileText className="w-6 h-6" />
                     </div>
                     <div className="text-left">
                        <h4 className="text-slate-900 font-bold mb-1">Automated Reports</h4>
                        <p className="text-sm text-slate-500">AI summarizes the day's activity into a clean PDF delivered to your inbox at 8 PM.</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-orange-500">
                        <AlertCircle className="w-6 h-6" />
                     </div>
                     <div className="text-left">
                        <h4 className="text-slate-900 font-bold mb-1">Issue Tracking</h4>
                        <p className="text-sm text-slate-500">Quality deviations are flagged automatically. Track resolution status live.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Mobile Mockup Visual */}
            <div className="flex-1 relative flex justify-center lg:justify-end">
               {/* Phone Frame */}
               <motion.div 
                 initial={{ y: 60, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="relative w-[300px] md:w-[340px] aspect-[9/19] rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/20"
               >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-30" />
                  
                  {/* Screen Content */}
                  <MobileScreen />

                  {/* Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-40 rounded-[2.5rem]" />
               </motion.div>

               {/* Floating Elements for Depth */}
               <motion.div 
                 initial={{ x: 40, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 viewport={{ once: true }}
                 className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block max-w-[200px]"
               >
                  <div className="flex gap-3 items-center mb-2">
                     <div className="bg-green-100 p-2 rounded-full text-green-600"><CheckCircle2 className="w-4 h-4" /></div>
                     <span className="text-xs font-bold text-slate-900">QC Passed</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                     Slab casting for 1st Floor completed. Curing period initiated (7 days).
                  </p>
               </motion.div>

               <motion.div 
                 initial={{ x: -40, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.6 }}
                 viewport={{ once: true }}
                 className="absolute -left-12 bottom-1/4 bg-slate-900 p-4 rounded-xl shadow-2xl border border-slate-800 hidden md:block max-w-[180px]"
               >
                  <div className="flex gap-2 items-center mb-2">
                     <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                     <span className="text-xs font-bold text-white">Delay Alert</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                     Sand delivery delayed by 2 hours due to traffic. Rescheduling mixer.
                  </p>
               </motion.div>
            </div>

         </div>
      </div>
    </section>
  );
};