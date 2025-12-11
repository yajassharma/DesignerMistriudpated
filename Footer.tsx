
import React, { useState } from 'react';
import { Smartphone, Play, X, ScrollText, ShieldCheck, Scale, FileText, Instagram } from 'lucide-react';
import { MistriLogo } from './Logo';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DownloadModal } from './DownloadModal';

const TermsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Modal Header / Illustration */}
        <div className="relative h-48 bg-slate-900 flex-shrink-0 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20 backdrop-blur-md"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-4 rotate-3">
                    <Scale className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-serif text-white font-bold">Terms & Conditions</h2>
                <p className="text-slate-400 text-sm mt-2">Designer Mistri™ & CAAT OS</p>
            </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-slate-50">
           <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-600">
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
                 <h3 className="text-lg font-bold text-slate-900 mb-2">Introduction</h3>
                 <p>This document outlines the comprehensive, legally-structured, point-by-point Terms & Conditions (T&C) for Designer Mistri and CAAT (Construction AI Aggregator OS). It is designed for direct use across various platforms including websites, apps, brochures, legal pages, or agreements.</p>
              </div>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">1. Definitions</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                 <li><strong>1.1 “Platform”:</strong> Refers to the Designer Mistri mobile app/website and the CAAT OS ecosystem.</li>
                 <li><strong>1.2 “Client”:</strong> Refers to any individual/company using the platform to book construction or related services.</li>
                 <li><strong>1.3 “Service Provider / Contractor / Vendor”:</strong> Means any registered third-party executing work through the platform.</li>
                 <li><strong>1.4 “AI Tools / CAAT Modules”:</strong> Include estimation AI, planning AI, BOQ generator, rate analyzer, manpower allocation, and project tracking systems.</li>
                 <li><strong>1.5 “Project”:</strong> Includes civil construction, interior, electrical, plumbing, painting, cleaning, manpower supply, and material orders.</li>
                 <li><strong>1.6 “Agreement”:</strong> Means these Terms & Conditions.</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">2. Acceptance of Terms</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                 <li><strong>2.1:</strong> By accessing the platform, the user agrees to all terms stated here.</li>
                 <li><strong>2.2:</strong> If the user disagrees with any clause, they must stop using the platform immediately.</li>
                 <li><strong>2.3:</strong> Designer Mistri reserves full rights to update, modify, or revise these terms anytime.</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">3. Platform Role & Limitations</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                 <li><strong>3.1:</strong> Designer Mistri & CAAT act as: A construction management system, A bidding marketplace, A manpower & material aggregator, An AI-based planning & estimation tool.</li>
                 <li><strong>3.2:</strong> The platform does not guarantee: Contractor performance beyond agreed specifications, Marketplace product availability, Rates of materials (may fluctuate with the market).</li>
                 <li><strong>3.3:</strong> Designer Mistri is not responsible for disputes between Clients and Contractors unless they involve platform policy violations.</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">4. User Eligibility</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                 <li><strong>4.1:</strong> User must be 18+ years old.</li>
                 <li><strong>4.2:</strong> Contractors must provide valid GST, PAN, Address Proof, and License (if applicable).</li>
                 <li><strong>4.3:</strong> Clients must provide legal property documents if required.</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">5. Project Booking & Execution</h4>
              <div className="space-y-4 mb-6">
                  <p><strong>5.1 Project Scope:</strong> All work will be performed according to BOQ, drawings, and signed work orders. Any additional work requires revised approval through CAAT’s Variation Module.</p>
                  <p><strong>5.2 Site Access:</strong> Client must provide uninterrupted access, electricity, water supply, and storage.</p>
                  <p><strong>5.3 Material Responsibility:</strong> If Client provides material: Client is fully responsible for quality & timely supply. If Designer Mistri provides material: We ensure branded and certified materials as per package.</p>
                  <p><strong>5.4 Work Delays:</strong> Designer Mistri is not liable for delays caused by: Government restrictions, Weather, Labour strikes, Client-induced delays, Payment delays, Material shortages.</p>
              </div>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">6. Bidding System (CAAT)</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                 <li><strong>6.1:</strong> Contractors place bids transparently.</li>
                 <li><strong>6.2:</strong> Client selects a contractor based on: Price, Rating, Experience, Timeline, Quality score.</li>
                 <li><strong>6.3:</strong> Designer Mistri does not influence the bidding process.</li>
                 <li><strong>6.4:</strong> Bid once accepted becomes legally binding.</li>
                 <li><strong>6.5:</strong> Hidden charges outside the bid are strictly prohibited.</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">7. Payments & Billing</h4>
              <div className="space-y-4 mb-6">
                  <p><strong>7.1 Payment Structure:</strong> Payments may be milestone-based (per slab, per stage, or per BOQ unit). Advance percentage varies depending on project type.</p>
                  <p><strong>7.2 Payment Modes:</strong> UPI, Bank Transfer, Online Wallets, NEFT/RTGS.</p>
                  <p><strong>7.3 Penalties:</strong> Late payments may attract interest as per project contract. Work may pause until dues are cleared.</p>
                  <p><strong>7.4 Refund Policy:</strong> Refunds are allowed only when: Work has not started, Material has not been ordered, Contractor violates major compliance rules. Partial refunds will be processed after deducting administrative and mobilization costs.</p>
              </div>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">8. Warranty & Quality</h4>
              <div className="space-y-4 mb-6">
                  <p><strong>8.1:</strong> Designer Mistri provides standard warranties: Structure Warranty (5–10 Years), Waterproofing (1–3 Years), Electrical & Plumbing Fittings (As per manufacturer warranty).</p>
                  <p><strong>8.2:</strong> Warranty is void if: Client hires unapproved contractors for alterations, Unauthorized structural modifications are made, Maintenance guidelines are not followed.</p>
              </div>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">9. AI Tool (CAAT) Usage Terms</h4>
              <div className="space-y-4 mb-6">
                  <p><strong>9.1 Accuracy Disclaimer:</strong> CAAT estimations are based on latest market rates, best engineering practices, and local benchmarks. However, AI predictions may vary due to dynamic market conditions.</p>
                  <p><strong>9.2 Not Professional Advice:</strong> AI tools do not replace licensed structural or architectural professional advice.</p>
                  <p><strong>9.3 Data Input Responsibility:</strong> User must ensure accurate inputs for site location, dimensions, and preferences. Incorrect inputs = incorrect output.</p>
                  <p><strong>9.4 Limitation of AI Liability:</strong> Platform is not responsible for losses due to wrong estimation, market rate changes, AI misinterpretation, or user misunderstanding.</p>
              </div>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">10. Responsibilities & Compliance</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Client:</strong> Provide accurate details, ensure safety, release payments on time, avoid interference.</li>
                  <li><strong>Contractor:</strong> Use genuine materials, maintain safety/PPE, follow timeline, follow CAAT reporting protocol.</li>
                  <li><strong>Safety:</strong> Contractors must follow IS Codes, building bye-laws, and labour laws.</li>
                  <li><strong>Data Privacy:</strong> All user data is encrypted. Data is shared only for legal requirements or service verification.</li>
              </ul>

              <h4 className="font-bold text-slate-900 text-lg mt-8 mb-4">11. Liability & Disputes</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Limitation:</strong> Maximum liability = only the amount paid to Designer Mistri directly.</li>
                  <li><strong>Termination:</strong> Platform may terminate account for fraud, policy violations, or illegal activities.</li>
                  <li><strong>Disputes:</strong> Handled first through CAAT Support Mediation. If unresolved, escalated to Arbitration.</li>
                  <li><strong>Jurisdiction:</strong> Gurugram, Haryana, India.</li>
              </ul>

              <div className="mt-12 p-6 bg-slate-100 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">Contact Information</h4>
                  <p className="mb-1"><strong>Designer Mistri & CAAT Support Team</strong></p>
                  <p>Email: contact@designermistri.com</p>
                  <p>Phone: +91 76783 25442</p>
                  <p>Location: Noida, Uttar Pradesh, India.</p>
              </div>

           </div>
        </div>
        
        {/* Modal Footer */}
        <div className="p-6 bg-white border-t border-slate-200 flex justify-end">
             <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors"
             >
                I Understand
             </button>
        </div>
      </motion.div>
    </div>
  );
};

export const Footer = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <>
    <footer className="relative bg-slate-950 pt-32 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
          
          {/* Brand Section */}
          <div className="max-w-md mb-12 lg:mb-0">
            <Link to="/" className="inline-block group">
                <MistriLogo className="w-20 h-20 mb-8 transition-transform group-hover:rotate-90 duration-700" />
            </Link>
            <h2 className="text-5xl font-serif text-white mb-6 leading-tight">
              Constructing <br/> <span className="text-slate-500 italic">the future.</span>
            </h2>
            <div className="flex gap-4">
              <button 
                onClick={() => setDownloadModalOpen(true)}
                className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2 shadow-lg shadow-white/5"
              >
                <Smartphone className="w-4 h-4" /> App Store
              </button>
              <button 
                onClick={() => setDownloadModalOpen(true)}
                className="border border-white/10 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Play className="w-4 h-4 fill-current" /> Google Play
              </button>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
               <span className="text-slate-500 text-sm">Follow us:</span>
               <a 
                 href="https://www.instagram.com/designermistri?igsh=dXU3dDF2M3JzbHJn"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-pink-600 transition-all"
                 aria-label="Instagram"
               >
                 <Instagram className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-24 gap-y-12">
            <div>
              <h4 className="text-orange-500 font-mono text-xs font-bold tracking-widest uppercase mb-6">Platform</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li>
                  <Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Services Ecosystem</Link>
                </li>
                <li>
                  <Link to="/caat" className="hover:text-white hover:translate-x-1 transition-all inline-block">CAAT Engine</Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pricing Plans</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:text-white hover:translate-x-1 transition-all inline-block">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-500 font-mono text-xs font-bold tracking-widest uppercase mb-6">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li>
                  <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white hover:translate-x-1 transition-all inline-block">Insights Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© 2024 Designer Mistri. All rights reserved. Developed with ❤️ by WebChain IT</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <button 
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-orange-500 transition-colors flex items-center gap-2"
             >
                <ScrollText className="w-3 h-3" /> Terms & Conditions
             </button>
          </div>
        </div>
      </div>
    </footer>

    {/* Terms Modal Wrapper */}
    <AnimatePresence>
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        <DownloadModal isOpen={downloadModalOpen} onClose={() => setDownloadModalOpen(false)} />
    </AnimatePresence>
    </>
  );
};
