import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, ShieldCheck, Zap, Crown, ArrowRight, Info, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    id: 'basic',
    name: "Basic Package",
    price: "1,800",
    desc: "Essential quality with solid concrete blocks and standard finishes.",
    color: "bg-slate-100",
    textColor: "text-slate-600",
    icon: ShieldCheck,
    features: [
      "Steel: Rathi / Kamadenu",
      "Cement: Ambuja / Dalmia (43/53)",
      "Flooring: Tiles (₹50/sqft)",
      "Paint: Tractor Emulsion",
      "Windows: Aluminium (Jindal)",
      "Sanitary: Hindware"
    ]
  },
  {
    id: 'classic',
    name: "Classic Package",
    price: "2,070",
    desc: "Upgrade to Red Bricks, Teak doors and premium finishes.",
    color: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-500",
    icon: Zap,
    features: [
      "Steel: Jindal / JSW",
      "Bricks: Standard Red Bricks",
      "Flooring: Granite/Tiles (₹100/sqft)",
      "Paint: Tractor Shyne",
      "Windows: UPVC (Nexia)",
      "Sanitary: Parryware"
    ]
  },
  {
    id: 'premium',
    name: "Premium Package",
    price: "2,330",
    desc: "Luxury specs with Italian Marble options and Jaquar fittings.",
    color: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-500",
    icon: Star,
    popular: true,
    features: [
      "Steel: Vizag / Sail / Jindal",
      "Cement: Ultratech / ACC",
      "Flooring: Marble/Granite (₹140/sqft)",
      "Paint: Apcolite Premium",
      "Windows: UPVC (Prominance)",
      "Sanitary: Jaquar"
    ]
  },
  {
    id: 'royale',
    name: "Royale Package",
    price: "2,620",
    desc: "The ultimate luxury with Burma Teak, Kohler and Glass railings.",
    color: "bg-slate-900",
    textColor: "text-white",
    icon: Crown,
    features: [
      "Steel: Vizag / Sail",
      "Cement: Ultratech / ACC",
      "Flooring: Marble/Granite (₹160/sqft)",
      "Paint: Royale Luxury",
      "Windows: UPVC (Fenesta)",
      "Sanitary: Kohler",
      "EV Charging Point"
    ]
  }
];

const categories = [
  {
    name: "Structure",
    specs: [
      { name: "Steel Brand", basic: "Rathi / Kamadenu", classic: "Jindal / JSW", premium: "Vizag / Sail / Jindal", royale: "Vizag / Sail" },
      { name: "Cement", basic: "Ambuja / Dalmia", classic: "Ambuja / Dalmia", premium: "Ultratech / ACC", royale: "Ultratech / ACC" },
      { name: "Masonry", basic: "Solid Concrete Blocks", classic: "Red Bricks", premium: "Red Bricks", royale: "Red Bricks" },
      { name: "Ceiling Height", basic: "10 Feet", classic: "10 Feet", premium: "10 Feet", royale: "10 Feet" },
    ]
  },
  {
    name: "Kitchen & Bath",
    specs: [
      { name: "Sanitary/CP", basic: "Hindware (₹30k)", classic: "Parryware (₹50k)", premium: "Jaquar (₹70k)", royale: "Kohler (₹80k)" },
      { name: "Kitchen Sink", basic: "SS (₹3,000)", classic: "SS (₹6,000)", premium: "SS/Granite (₹8,000)", royale: "SS/Granite (₹8,000)" },
      { name: "Wall Dado", basic: "₹40 / sqft", classic: "₹60 / sqft", premium: "₹80 / sqft", royale: "₹90 / sqft" },
      { name: "Pipes", basic: "Astral / Eq.", classic: "Ashirwad / Supreme", premium: "Ashirwad / Supreme", royale: "Ashirwad / Supreme" },
    ]
  },
  {
    name: "Doors & Windows",
    specs: [
      { name: "Windows", basic: "Aluminium (Jindal)", classic: "UPVC (Nexia)", premium: "UPVC (Prominance)", royale: "UPVC (Fenesta)" },
      { name: "Main Door", basic: "Flush + Veneer (₹20k)", classic: "Teak Wood (₹30k)", premium: "Teak Wood (₹40k)", royale: "Teak Wood (₹50k)" },
      { name: "Internal Doors", basic: "Membrane (₹9k)", classic: "Membrane (₹9k)", premium: "Membrane (₹10.5k)", royale: "Membrane (₹11.5k)" },
      { name: "Pooja Door", basic: "-", classic: "-", premium: "Burma Teak (₹20k)", royale: "Burma Teak (₹24k)" },
    ]
  },
  {
    name: "Painting & Flooring",
    specs: [
      { name: "Interior Paint", basic: "Tractor Emulsion", classic: "Tractor Shyne", premium: "Apcolite Premium", royale: "Royale Luxury" },
      { name: "Exterior Paint", basic: "Ace Exterior", classic: "Apex Exterior", premium: "Apex Exterior", royale: "Apex Ultima" },
      { name: "Living Flooring", basic: "Tiles (₹50)", classic: "Granite/Tiles (₹100)", premium: "Marble/Granite (₹140)", royale: "Marble/Granite (₹160)" },
      { name: "Staircase", basic: "Granite (₹70)", classic: "Granite (₹80)", premium: "Granite (₹110)", royale: "Granite (₹140)" },
    ]
  },
  {
    name: "Electrical & Misc",
    specs: [
      { name: "Switches", basic: "Anchor Ziva", classic: "Anchor Roma", premium: "Legrand Myrius", royale: "Legrand Lyncus" },
      { name: "Overhead Tank", basic: "1000 Ltrs", classic: "1500 Ltrs", premium: "2000 Ltrs", royale: "2000 Ltrs" },
      { name: "Railing", basic: "MS Railing", classic: "MS Railing", premium: "SS 304", royale: "SS 304 + Glass" },
      { name: "Special Features", basic: "-", classic: "AC Provisioning", premium: "Solar Provision", royale: "EV Charging" },
    ]
  }
];

export const Pricing = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("Structure");

  return (
    <div className="pt-28 md:pt-32">
      <div className="bg-slate-50 min-h-screen rounded-t-[2rem] shadow-2xl overflow-hidden relative z-10">
       <div className="max-w-[1400px] mx-auto px-6 mb-20 pt-20 text-center">
         <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">/// DELHI-NCR PACKAGES</span>
         <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">Built on Trust. Priced for You.</h1>
         <p className="text-xl text-slate-600 max-w-2xl mx-auto">
           Select a package that fits your vision. Every item is tracked in our CAAT engine to ensure zero cost overruns.
         </p>
       </div>

       {/* Cards Section */}
       <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24 relative z-10">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl p-8 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
                plan.id === 'royale' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 border border-slate-200'
              } ${plan.popular ? 'ring-2 ring-orange-500 shadow-xl shadow-orange-100' : ''}`}
            >
               {plan.popular && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                   Most Popular
                 </div>
               )}
               
               <div className="flex justify-between items-start mb-6">
                 <div className={`p-3 rounded-2xl ${plan.id === 'royale' ? 'bg-white/10' : plan.color}`}>
                   <plan.icon className={`w-8 h-8 ${plan.id === 'royale' ? 'text-orange-400' : plan.textColor}`} />
                 </div>
                 {plan.id === 'royale' && <Crown className="w-6 h-6 text-yellow-500 fill-current" />}
               </div>

               <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
               <p className={`text-sm mb-6 flex-grow ${plan.id === 'royale' ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>

               <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm font-bold opacity-60">₹</span>
                  <span className="text-5xl font-sans font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm font-medium opacity-60">/ sq.ft</span>
               </div>

               <button className={`w-full py-4 rounded-xl font-bold mb-8 flex items-center justify-center gap-2 transition-all ${
                 plan.id === 'royale' 
                   ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:opacity-90' 
                   : plan.popular 
                     ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30' 
                     : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
               }`}>
                 Choose Package <ArrowRight className="w-4 h-4" />
               </button>

               <div className="space-y-4 border-t border-slate-200/20 pt-6">
                 <p className="text-xs font-bold uppercase tracking-widest opacity-50">Key Specifications</p>
                 {plan.features.map((feat, i) => (
                   <div key={i} className="flex items-start gap-3 text-sm">
                     <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.id === 'royale' ? 'text-orange-400' : 'text-green-500'}`} />
                     <span className={plan.id === 'royale' ? 'text-slate-300' : 'text-slate-700'}>{feat}</span>
                   </div>
                 ))}
               </div>
            </div>
          ))}
       </div>

       {/* Comparison Table */}
       <div className="max-w-[1400px] mx-auto px-6 pb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-slate-900">Detailed Specification Comparison</h2>
            <p className="text-slate-500 mt-2">Drill down into the materials used in each package.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-sm">
             {/* Table Header - Hidden on Mobile */}
             <div className="hidden md:grid grid-cols-5 bg-slate-50 border-b border-slate-200 p-6">
                <div className="font-bold text-slate-900 uppercase text-xs tracking-widest self-center">Category</div>
                <div className="font-bold text-slate-700 text-center">Basic</div>
                <div className="font-bold text-blue-600 text-center">Classic</div>
                <div className="font-bold text-orange-600 text-center">Premium</div>
                <div className="font-bold text-slate-900 text-center">Royale</div>
             </div>

             {/* Accordion Items */}
             {categories.map((cat, i) => (
               <div key={i} className="border-b border-slate-100 last:border-0">
                  <button 
                    onClick={() => setOpenCategory(openCategory === cat.name ? null : cat.name)}
                    className="w-full flex justify-between items-center p-6 hover:bg-slate-50 transition-colors md:hidden"
                  >
                    <span className="font-bold text-slate-900">{cat.name}</span>
                    {openCategory === cat.name ? <ChevronUp className="w-5 h-5 text-slate-400"/> : <ChevronDown className="w-5 h-5 text-slate-400"/>}
                  </button>
                  
                  {/* Desktop Title Row (Acts as separator) */}
                  <div className="hidden md:block px-6 py-3 bg-slate-50/50 border-b border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {cat.name}
                  </div>

                  <AnimatePresence>
                    {(openCategory === cat.name || typeof window !== 'undefined' && window.innerWidth >= 768) && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                         <div className="divide-y divide-slate-100">
                           {cat.specs.map((spec, j) => (
                             <div key={j} className="grid grid-cols-1 md:grid-cols-5 p-6 gap-4 md:gap-0 hover:bg-slate-50/80 transition-colors">
                                <div className="font-bold text-slate-900 flex items-center gap-2">
                                  <Info className="w-3 h-3 text-slate-300" /> {spec.name}
                                </div>
                                <div className="text-slate-600 md:text-center pl-6 md:pl-0 border-l-2 md:border-l-0 border-slate-100">
                                  <span className="md:hidden text-xs font-bold text-slate-400 block mb-1">Basic:</span>
                                  {spec.basic}
                                </div>
                                <div className="text-slate-900 font-medium md:text-center pl-6 md:pl-0 border-l-2 md:border-l-0 border-blue-100 bg-blue-50/30 md:bg-transparent rounded md:rounded-none">
                                  <span className="md:hidden text-xs font-bold text-blue-400 block mb-1">Classic:</span>
                                  {spec.classic}
                                </div>
                                <div className="text-slate-900 font-medium md:text-center pl-6 md:pl-0 border-l-2 md:border-l-0 border-orange-100 bg-orange-50/30 md:bg-transparent rounded md:rounded-none">
                                  <span className="md:hidden text-xs font-bold text-orange-400 block mb-1">Premium:</span>
                                  {spec.premium}
                                </div>
                                <div className="text-slate-800 md:text-center pl-6 md:pl-0 border-l-2 md:border-l-0 border-slate-900/10 font-bold">
                                  <span className="md:hidden text-xs font-bold text-slate-900 block mb-1">Royale:</span>
                                  {spec.royale}
                                </div>
                             </div>
                           ))}
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
             ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
             <h3 className="text-xl font-bold text-blue-900 mb-2">Need a Custom Quote?</h3>
             <p className="text-blue-700 mb-6">We understand that every project is unique. Our CAAT engine can generate a bespoke BOQ based on your specific material choices.</p>
             <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
               Talk to an Expert
             </button>
          </div>
       </div>
       </div>
    </div>
  );
};