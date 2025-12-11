import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Users, ShieldCheck, ChevronDown, Hammer, Ruler, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const richServiceData: any = {
  construction: {
    title: "Turnkey Construction",
    subtitle: "End-to-End Execution",
    description: "Experience the future of home building. We handle everything from the first shovel of soil to the final coat of paint. Our process is transparent, engineered, and backed by a 50-year structural warranty.",
    stats: [
        { label: "Completion Time", value: "8-12 Months" },
        { label: "Team Size", value: "25+ Experts" },
        { label: "Warranty", value: "10 Years" },
        { label: "Base Rate", value: "₹1750/sqft" }
    ],
    timeline: [
        { title: "Soil & Structural Analysis", desc: "Geotechnical testing and load-bearing calculations by certified engineers." },
        { title: "Foundation & Plinth", desc: "Excavation, anti-termite treatment, and RCC plinth beam casting." },
        { title: "Superstructure", desc: "Brickwork using Red Bricks/AAC blocks and M25 grade concrete columns." },
        { title: "Grey Finishing", desc: "Electrical piping, internal plumbing, and double-coat plastering." },
        { title: "Final Finishing", desc: "Flooring, painting, woodwork, and deep cleaning for handover." }
    ],
    specs: [
        { label: "Steel", value: "Tata Tiscon / JSW Fe550D" },
        { label: "Cement", value: "Ultratech / ACC (OPC 53 & PPC)" },
        { label: "Bricks", value: "First Class Red Bricks / AAC" },
        { label: "Sand", value: "River Sand (Washed)" },
        { label: "Aggregates", value: "20mm Granite" }
    ],
    faqs: [
        { q: "Do you handle municipal approvals?", a: "Yes, we have a liaison team that handles map approvals, electricity connections, and water supply sanctions so you don't have to deal with bureaucracy." },
        { q: "Is the pricing fixed?", a: "Yes, once the BOQ is signed, the rates are locked. We absorb any market price fluctuations for steel and cement during the project." },
        { q: "Can I bring my own materials?", a: "We offer 'Labor Contract with Material' or 'Labor Only'. In 'Labor Only', you provide materials, and we provide the expertise." },
        { q: "How are payments scheduled?", a: "Payments are milestone-based (e.g., Plinth Level, Slab 1, Brickwork). You only pay when a specific stage of work is completed and verified." },
        { q: "Will there be a dedicated site engineer?", a: "Absolutely. Every project is assigned a qualified Civil Engineer who is present on-site daily to supervise work and update the log." }
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
  },
  design: {
    title: "Interior Design",
    subtitle: "From Concept to Reality",
    description: "Don't just imagine your home—walk through it. Our VR-first design process lets you experience every texture, light, and corner before we even start work. We blend aesthetics with supreme functionality.",
    stats: [
        { label: "Design Phase", value: "2-4 Weeks" },
        { label: "Execution", value: "6-8 Weeks" },
        { label: "Revisions", value: "Unlimited" },
        { label: "Consultation", value: "Free" }
    ],
    timeline: [
        { title: "Discovery Session", desc: "We analyze your lifestyle, preferences, and functional needs." },
        { title: "Concept & Moodboard", desc: "Curating textures, colors, and themes that match your personality." },
        { title: "3D Visualization", desc: "High-fidelity renders and VR walkthroughs of your future space." },
        { title: "Material Selection", desc: "Physical sampling of laminates, fabrics, and fittings." },
        { title: "Execution", desc: "On-site carpentry, installation, and final styling." }
    ],
    specs: [
        { label: "Plywood", value: "Century / Greenply (BWP Grade)" },
        { label: "Laminates", value: "Merino / Royal Touch" },
        { label: "Hardware", value: "Hettich / Hafele (Soft Close)" },
        { label: "Lighting", value: "Philips / Wipro Smart" },
        { label: "Paint", value: "Asian Paints Royale" }
    ],
    faqs: [
        { q: "What is included in the design fee?", a: "The fee covers 2D layouts, 3D renders, VR walkthroughs, electrical drawings, false ceiling plans, and a dedicated site supervisor during execution." },
        { q: "Do you make custom furniture?", a: "Yes, we have our own modular factory for kitchens and wardrobes, and skilled carpenters for bespoke loose furniture." },
        { q: "How many revisions do I get?", a: "We offer unlimited revisions during the concept stage until you are 100% happy with the 3D design. Structural changes after execution starts may incur costs." },
        { q: "Can I experience the design in VR?", a: "Yes! We invite you to our experience center where you can wear a VR headset and walk through your future home." },
        { q: "Do you provide loose furniture and decor?", a: "We can source sofas, curtains, rugs, and artifacts for you, or guide you to our partner stores for exclusive discounts." }
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
  },
  material: {
    title: "Material Procurement",
    subtitle: "Factory Direct Supply",
    description: "Stop paying retail margins. We aggregate demand from 50+ sites to negotiate wholesale rates directly with manufacturers like Tata, Ultratech, and Kajaria. Get Grade-A quality with authentic test certificates.",
    stats: [
        { label: "Savings", value: "Up to 15%" },
        { label: "Delivery", value: "Same Day" },
        { label: "Brands", value: "50+ Partners" },
        { label: "Min Order", value: "₹50,000" }
    ],
    timeline: [
        { title: "Requirement Analysis", desc: "Input your BOQ or material list into our app." },
        { title: "Instant Quote", desc: "Get real-time wholesale rates including transport and unloading." },
        { title: "Order Confirmation", desc: "Pay securely via escrow. Funds are released only after delivery." },
        { title: "Dispatch & Tracking", desc: "Live GPS tracking of the delivery truck." },
        { title: "Quality Check", desc: "On-site material testing and weight verification." }
    ],
    specs: [
        { label: "Cement", value: "Fresh Stock (<1 week old)" },
        { label: "Steel", value: "Primary Producers Only" },
        { label: "Tiles", value: "Premium/First Quality" },
        { label: "Wires", value: "FRLS Certified" }
    ],
    faqs: [
        { q: "What if the quality is compromised?", a: "We have a zero-tolerance policy. If material doesn't match the test certificate or brand standards, we replace it instantly at our cost." },
        { q: "Do you deliver to remote sites?", a: "Yes, we have a fleet of varied vehicle sizes (from Tata Ace to heavy trucks) to reach sites even with narrow access lanes." },
        { q: "Is there a minimum order quantity?", a: "For wholesale rates, a minimum order value of ₹20,000 is typically required. Smaller orders may attract standard retail pricing." },
        { q: "What is your return policy?", a: "Unused, undamaged non-perishable materials (like tiles, electricals) can be returned within 7 days. Cement and loose sand/aggregate are non-returnable." },
        { q: "Do you offer credit?", a: "We offer credit facilities to registered contractors and verified repeat clients after a credit check." }
    ],
    image: "https://as1.ftcdn.net/jpg/04/97/72/22/1000_F_497722214_I482E0qYiqm9mNtrhQDfcpgz1tb59GI7.jpg"
  },
  manpower: {
    title: "Manpower Hub",
    subtitle: "Vetted Skilled Labor",
    description: "Construction is only as good as the hands that build it. Access our pool of 500+ verified masons, electricians, and carpenters. We handle background checks, skills assessment, and payroll.",
    stats: [
        { label: "Workforce", value: "500+ Active" },
        { label: "Verification", value: "Aadhar + Police" },
        { label: "Skill Level", value: "Grade A" },
        { label: "Deployment", value: "24 Hours" }
    ],
    timeline: [
        { title: "Requirement Posting", desc: "Specify number of workers and skill type needed." },
        { title: "Matching", desc: "AI matches available workers nearby with the right skill set." },
        { title: "Deployment", desc: "Team arrives on site with safety gear and tools." },
        { title: "Attendance & Pay", desc: "Digital attendance tracking and weekly automated payouts." }
    ],
    specs: [
        { label: "Masons", value: "Brickwork & Plastering Expert" },
        { label: "Helpers", value: "Physically Fit & Active" },
        { label: "Bar Benders", value: "Blueprint Reading Skill" },
        { label: "Safety", value: "PPE Kit Mandatory" }
    ],
    faqs: [
        { q: "Who handles their food and stay?", a: "We offer both options. Typically, the client provides basic shelter and water, while workers handle their own food. For large teams, we can arrange off-site housing." },
        { q: "What if a worker leaves midway?", a: "We guarantee immediate replacement within 24 hours to ensure your work doesn't stop." },
        { q: "Are background checks done?", a: "Yes, every worker's Aadhar is verified, and a police verification record is maintained in our database." },
        { q: "Do you charge for overtime?", a: "Standard shifts are 9 hours (including break). Overtime is charged on an hourly basis as per standard labor laws." }
    ],
    image: "https://images.unsplash.com/photo-1577199001468-44c049e7603f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3Vyc3xlbnwwfHwwfHx8MA%3D%3D$0"
  },
  plumbing: {
    title: "Advanced Plumbing",
    subtitle: "Leak-Proof Engineering",
    description: "Water damage is the #1 enemy of a home. Our certified plumbers use pressure-testing and laser-alignment to ensure your pipes are sealed for life. We specialize in concealed systems and automation.",
    stats: [
        { label: "Testing", value: "Hydro-Test" },
        { label: "Pipes", value: "CPVC/UPVC" },
        { label: "Warranty", value: "5 Years" },
        { label: "Team", value: "Certified" }
    ],
    timeline: [
        { title: "Layout Design", desc: "Designing pipe routes to maintain pressure and minimize bends." },
        { title: "Chipping & Fitting", desc: "Precision cutting and installation of concealed lines." },
        { title: "Pressure Testing", desc: "Holding water at high pressure for 24hrs to check leaks." },
        { title: "Fixture Installation", desc: "Installing taps, showers, and sanitary ware after tiling." }
    ],
    specs: [
        { label: "Pipes", value: "Astral / Ashirvad / Supreme" },
        { label: "Fittings", value: "Brass / Gunmetal" },
        { label: "Solvent", value: "Heavy Duty NSF Certified" },
        { label: "Insulation", value: "Hot Water Line Lagging" }
    ],
    faqs: [
        { q: "Do you do automated tank systems?", a: "Yes, we install water level controllers and pressure pumps for uniform flow to overhead tanks." },
        { q: "What brands do you recommend?", a: "We prefer Astral or Ashirvad for piping and Jaquar, Grohe, or Kohler for fixtures due to their reliability." },
        { q: "Do you give a warranty on leakage?", a: "Yes, we provide a 5-year warranty on all concealed piping work executed by us." },
        { q: "Can you help with rainwater harvesting?", a: "Absolutely. We design efficient harvesting pits and filtration systems to recharge groundwater." }
    ],
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop"
  },
  electrical: {
    title: "Electrical Automation",
    subtitle: "Safe & Smart",
    description: "Powering the modern home requires more than just wires. We design load-balanced circuits, install fire-retardant cabling, and integrate smart home automation for lighting and security.",
    stats: [
        { label: "Safety", value: "Zero-Trip" },
        { label: "Wiring", value: "FRLS Grade" },
        { label: "Automation", value: "IoT Ready" },
        { label: "Audit", value: "Included" }
    ],
    timeline: [
        { title: "Load Calculation", desc: "Estimating total power draw for ACs, Geysers, and EV charging." },
        { title: "Conduit Laying", desc: "Placing pipes in slab and walls before plastering." },
        { title: "Wiring", desc: "Pulling color-coded wires for phase, neutral, and earth." },
        { title: "Final Switchgear", desc: "Installing DBs, MCBs, and modular switches." }
    ],
    specs: [
        { label: "Wires", value: "Polycab / Havells / Finolex" },
        { label: "Switches", value: "Legrand / Schneider / GM" },
        { label: "MCB/DB", value: "Hager / Siemens" },
        { label: "Conduits", value: "Heavy Duty PVC" }
    ],
    faqs: [
        { q: "Do you provide earthing?", a: "Yes, proper chemical earthing is part of our standard package to protect your appliances from surges." },
        { q: "Can you make my home 'Smart'?", a: "Yes, we can install WiFi-enabled switches, motion sensors, and voice-controlled lighting compatible with Alexa/Google Home." },
        { q: "Do you plan for power backup?", a: "We design separate inverter wiring loops so essential appliances run seamlessly during power cuts." },
        { q: "Is your wiring safety certified?", a: "We strictly use FRLS (Flame Retardant Low Smoke) wires and conduct Insulation Resistance tests before handover." }
    ],
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1200&auto=format&fit=crop"
  },
  painting: {
    title: "Premium Finishes",
    subtitle: "Wall Aesthetics",
    description: "The final touch that defines your home. We use mechanized sanding and laser leveling to create mirror-finish walls. From texture art to waterproofing, our painters are artists.",
    stats: [
        { label: "Finish", value: "Ultra Smooth" },
        { label: "Process", value: "Mechanized" },
        { label: "Warranty", value: "3 Years" },
        { label: "Cleanliness", value: "Masking Tape" }
    ],
    timeline: [
        { title: "Surface Prep", desc: "Sanding and cleaning walls to remove loose particles." },
        { title: "Putty & Primer", desc: "Applying 2 coats of putty and 1 coat of primer for base." },
        { title: "Painting", desc: "2-3 coats of premium emulsion using rollers/spray." },
        { title: "Deep Cleaning", desc: "Removing paint drops from floor and windows." }
    ],
    specs: [
        { label: "Paints", value: "Asian Paints / Dulux / Berger" },
        { label: "Putty", value: "Birla White / JK Wall Putty" },
        { label: "Tools", value: "Vacuum Sander / Airless Sprayer" }
    ],
    faqs: [
        { q: "Do you cover furniture?", a: "Yes, we use masking sheets and tape to cover all furniture, floors, and switchboards before starting." },
        { q: "Do you use low-VOC paints?", a: "Yes, we prioritize health-friendly, low-VOC (Volatile Organic Compounds) paints that are odorless and safe for kids/pets." },
        { q: "What about exterior waterproofing?", a: "We check exterior walls for cracks and apply weather-proof coatings like Apex Ultima Protek for long-lasting protection." },
        { q: "Do you help with color selection?", a: "Yes, we provide digital color consultations and physical sampling patches on your walls." }
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop"
  },
  cleaning: {
    title: "Deep Cleaning",
    subtitle: "Move-In Ready",
    description: "Post-construction cleaning is not just sweeping. It involves removing cement stains, paint drops, acid washing tiles, and sanitizing every inch. Walk into a home that smells as new as it looks.",
    stats: [
        { label: "Team", value: "3-5 Staff" },
        { label: "Time", value: "6-8 Hours" },
        { label: "Chemicals", value: "Eco-Friendly" },
        { label: "Equipment", value: "Industrial" }
    ],
    timeline: [
        { title: "Debris Removal", desc: "Clearing out large waste and packaging materials." },
        { title: "Dusting & Vacuuming", desc: "High-power vacuuming of ceilings, fans, and corners." },
        { title: "Scrubbing", desc: "Machine scrubbing of floors to remove stubborn stains." },
        { title: "Sanitization", desc: "Disinfecting bathrooms and kitchen surfaces." }
    ],
    specs: [
        { label: "Machines", value: "Single Disc Scrubber / Wet Vacuum" },
        { label: "Chemicals", value: "Taski / Diversey (Standard)" }
    ],
    faqs: [
        { q: "Do I need to be present?", a: "Not necessarily. Our supervisor handles the entire process and sends photos upon completion." },
        { q: "Are the chemicals safe?", a: "We use professional-grade biodegradable chemicals that are effective on stains but safe for surfaces, children, and pets." },
        { q: "How long does it take?", a: "A typical 3BHK takes about 6-8 hours with a team of 4 professionals." },
        { q: "Does this include upholstery cleaning?", a: "Standard deep cleaning covers hard surfaces. Sofa and mattress shampooing are add-on services available on request." }
    ],
    image: "https://happyhousekeepers.com.ph/wp-content/uploads/2023/12/OUR-SERVICES-POST-CONSTRUCTION-CLEANING.jpg"
  }
};

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-left font-bold text-slate-800 hover:text-orange-600 transition-colors"
            >
                {q}
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-slate-600 text-sm leading-relaxed">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const ServiceDetail = () => {
  const { id } = useParams();
  const data = richServiceData[id || 'construction'] || richServiceData['construction'];
  // Using the hardcoded image from data instead of useAIImage to ensure consistency with Home page
  const imageUrl = data.image; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-28 md:pt-32">
      <div className="bg-slate-50 min-h-screen rounded-t-[2rem] shadow-2xl overflow-hidden relative z-10 border-t border-white/20">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
         {imageUrl && (
             <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={imageUrl} 
                className="w-full h-full object-cover" 
                alt={data.title} 
             />
         )}
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
         
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-[1400px] mx-auto">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                    {data.subtitle}
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                    {data.title}
                </h1>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8 mt-8 max-w-4xl">
                    {data.stats.map((stat: any, i: number) => (
                        <div key={i}>
                            <div className="text-white/60 text-xs font-mono uppercase tracking-wider mb-1">{stat.label}</div>
                            <div className="text-white text-xl md:text-2xl font-bold">{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-20">
               
               {/* Description */}
               <section>
                  <h2 className="text-3xl font-serif text-slate-900 mb-6">About the Service</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                     {data.description}
                  </p>
               </section>

               {/* Timeline / Process */}
               <section>
                  <h2 className="text-3xl font-serif text-slate-900 mb-10">Execution Roadmap</h2>
                  <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
                     {data.timeline.map((step: any, i: number) => (
                        <div key={i} className="relative pl-8">
                           <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-orange-500" />
                           <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                           <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                     ))}
                  </div>
               </section>

               {/* Specs Grid */}
               <section>
                  <h2 className="text-3xl font-serif text-slate-900 mb-8">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {data.specs.map((spec: any, i: number) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white rounded-xl border border-slate-200">
                           <span className="font-medium text-slate-500">{spec.label}</span>
                           <span className="font-bold text-slate-900">{spec.value}</span>
                        </div>
                     ))}
                  </div>
               </section>

               {/* FAQs */}
               <section>
                   <h2 className="text-3xl font-serif text-slate-900 mb-6">Frequently Asked Questions</h2>
                   <div className="bg-white rounded-2xl border border-slate-200 p-6">
                      {data.faqs.map((faq: any, i: number) => (
                          <FAQItem key={i} q={faq.q} a={faq.a} />
                      ))}
                   </div>
               </section>

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 relative">
               <div className="sticky top-32 space-y-6">
                  {/* Pricing / Booking Card */}
                  <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-orange-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/30 transition-colors" />
                     
                     <h3 className="text-2xl font-serif mb-2 relative z-10">Start Project</h3>
                     <p className="text-white/60 text-sm mb-8 relative z-10">Get a precise BOQ and timeline estimate instantly.</p>
                     
                     <div className="space-y-4 relative z-10">
                        <div className="flex items-center gap-3 text-sm">
                           <CheckCircle className="w-5 h-5 text-orange-500" /> <span>Verified Experts</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                           <ShieldCheck className="w-5 h-5 text-orange-500" /> <span>Money-Back Guarantee</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                           <Clock className="w-5 h-5 text-orange-500" /> <span>On-Time Delivery</span>
                        </div>
                     </div>

                     <Link 
                        to="/contact" 
                        className="mt-8 w-full bg-orange-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 relative z-10"
                     >
                        Get Custom Quote <ArrowRight className="w-5 h-5" />
                     </Link>
                  </div>

                  {/* Contact Support */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                     <p className="text-slate-500 text-sm mb-2">Have specific requirements?</p>
                     <div className="text-lg font-bold text-slate-900">+91 76783 25442</div>
                     <p className="text-xs text-slate-400 mt-1">Mon-Sat, 9am - 7pm</p>
                  </div>
               </div>
            </div>

         </div>
      </div>

      </div>
    </div>
  );
};