import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, FileJson, Activity, CalendarClock, FileCheck, ScanLine, Binary, ChevronRight, AlertCircle, TrendingUp, Layers } from 'lucide-react';

const NeuralCore = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
        {/* Pulse Core */}
        <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-orange-500/20 rounded-full blur-[40px]" 
        />
        
        {/* Rotating Rings */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full border border-slate-800 rounded-full border-dashed"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[80%] h-[80%] border border-slate-700 rounded-full border-t-orange-500/50 border-r-transparent border-b-slate-700 border-l-transparent"
        />
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-[60%] h-[60%] border border-slate-600 rounded-full border-b-cyan-500/50 border-t-transparent opacity-50"
        />

        {/* Central Logo/Chip */}
        <div className="relative z-10 w-24 h-24 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/10 backdrop-blur-sm">
            <Cpu className="w-10 h-10 text-orange-500" />
            
            {/* Scanning Line inside chip */}
            <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
            />
        </div>

        {/* Floating Data Points */}
        <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-1/4 bg-slate-900/80 border border-slate-700 px-3 py-1 rounded text-[10px] font-mono text-cyan-400 backdrop-blur"
        >
            PROCESSING
        </motion.div>
        <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 bottom-1/4 bg-slate-900/80 border border-slate-700 px-3 py-1 rounded text-[10px] font-mono text-orange-400 backdrop-blur"
        >
            OPTIMIZING
        </motion.div>
    </div>
  );
};

const SystemModule = ({ title, subtitle, icon: Icon, logs, color, accentColor }: any) => {
    const [currentLog, setCurrentLog] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLog(prev => (prev + 1) % logs.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [logs.length]);

    return (
        <div className="group relative bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/5">
            {/* Top Bar */}
            <div className="flex justify-between items-center p-4 border-b border-slate-800 bg-slate-950/30">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${color} bg-opacity-10 border border-opacity-20 border-white`}>
                        <Icon className={`w-4 h-4 ${accentColor}`} />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-200">{title}</h4>
                        <p className="text-[10px] text-slate-500 font-mono tracking-wider">{subtitle}</p>
                    </div>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <div className={`w-1.5 h-1.5 rounded-full ${accentColor} animate-pulse`} />
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-xs h-32 flex flex-col justify-end relative">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                <div className="space-y-1 relative z-10">
                    {logs.map((log: string, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.3 }}
                            animate={{ 
                                opacity: i === currentLog ? 1 : 0.4,
                                x: i === currentLog ? 0 : 0
                            }}
                            className={`flex gap-2 ${i === currentLog ? 'text-white' : 'text-slate-600'}`}
                        >
                            <span className="text-slate-700">{`>`}</span>
                            <span>{log}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Status */}
            <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
                <span className={`text-[10px] ${accentColor} font-bold`}>ACTIVE</span>
                <span className="text-[10px] text-slate-600">LATENCY 12ms</span>
            </div>
        </div>
    );
};

export const CAATSection = () => {
  return (
    <section id="caat-engine" className="bg-slate-950 py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-mono font-bold tracking-widest mb-6"
            >
                <Binary className="w-3 h-3" /> SYSTEM CORE V2.0
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">CAAT</span> Intelligence
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Construction Aggregator AI Technology. A centralized neural engine that automates the chaotic variables of construction into a predictable science.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Modules */}
            <div className="lg:col-span-4 space-y-4">
                <SystemModule 
                    title="Intelligent BOQ" 
                    subtitle="DWG PARSER MODULE" 
                    icon={FileJson}
                    color="bg-blue-500"
                    accentColor="text-blue-400"
                    logs={[
                        "Scanning architectural_plan_v2.dwg...",
                        "Identifying structural members...",
                        "Calc: Steel (Fe550) = 4.2 Tons",
                        "Calc: Cement (PPC) = 320 Bags",
                        "BOQ Generation Complete."
                    ]}
                />
                <SystemModule 
                    title="Financial Health" 
                    subtitle="BUDGET WATCHDOG" 
                    icon={TrendingUp}
                    color="bg-green-500"
                    accentColor="text-green-400"
                    logs={[
                        "Tracking material consumption...",
                        "Alert: Steel price variance +2%",
                        "Re-calibrating projected cashflow...",
                        "Savings detected: ₹12,400 via JIT",
                        "Budget adherence: 99.4%"
                    ]}
                />
            </div>

            {/* Center Column: The Core */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <NeuralCore />
                <div className="mt-8 text-center">
                    <div className="text-xs font-mono text-slate-500 tracking-[0.3em] uppercase mb-2">System Status</div>
                    <div className="flex items-center justify-center gap-2 text-green-400 font-bold">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        ONLINE
                    </div>
                </div>
            </div>

            {/* Right Column: Modules */}
            <div className="lg:col-span-4 space-y-4">
                <SystemModule 
                    title="Predictive Scheduling" 
                    subtitle="TIMELINE ANALYZER" 
                    icon={CalendarClock}
                    color="bg-purple-500"
                    accentColor="text-purple-400"
                    logs={[
                        "Analyzing critical path...",
                        "Weather Forecast: Rain on Day 14",
                        "Action: Shift slab casting by +2 days",
                        "Updating Gantt Chart...",
                        "Notification sent to Site Engineer."
                    ]}
                />
                <SystemModule 
                    title="Automated DPR" 
                    subtitle="DAILY PROGRESS LOG" 
                    icon={FileCheck}
                    color="bg-orange-500"
                    accentColor="text-orange-400"
                    logs={[
                        "Ingesting site photos (14)...",
                        "Vision AI: Identifying slab curing...",
                        "Quality Check: 100% Pass",
                        "Manpower count: 12 Masons, 8 Helpers",
                        "Generating PDF Report #402..."
                    ]}
                />
            </div>

        </div>
      </div>
    </section>
  );
};
