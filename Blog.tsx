import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  subtitle: string;
  cat: string;
  date: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
}

const articles: Article[] = [
  {
    id: 1,
    title: "5 Mistakes to Avoid in Home Construction",
    subtitle: "Save millions by avoiding these common pitfalls during your house building journey.",
    cat: "Construction",
    date: "Dec 9, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>Building a home is often a once-in-a-lifetime investment. However, lack of experience can lead to costly blunders. Here are the top 5 mistakes we see homeowners make:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Skipping Soil Testing:</strong> Not knowing your soil bearing capacity can lead to foundation cracks later. Always get a geotechnical report.</li>
            <li><strong>Ignoring the BOQ (Bill of Quantities):</strong> Working without a detailed material list is like cooking without a recipe. It leads to material theft and budget overruns.</li>
            <li><strong>Selecting the Wrong Contractor:</strong> Don't just go by the lowest bid. Check past projects and financial stability.</li>
            <li><strong>Poor Electrical Planning:</strong> Forgetting to plan for AC points, inverters, and kitchen appliances early on results in ugly chipping work after painting.</li>
            <li><strong>Compromising on Curing:</strong> Water curing is the lifeline of concrete. Cutting this period short weakens your structure permanently.</li>
        </ul>
        <p>At Designer Mistri, our CAAT engine prevents these issues by automating BOQs and quality checks.</p>
      </div>
    )
  },
  {
    id: 2,
    title: "How AI is Reducing Construction Costs by 20%",
    subtitle: "The role of predictive algorithms in optimizing material procurement and labor management.",
    cat: "Technology",
    date: "Dec 9, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>Construction has traditionally been an industry plagued by cost overruns. AI is changing that.</p>
        <h4 className="font-bold text-slate-900 mt-4">1. Precise Material Estimation</h4>
        <p>AI algorithms analyze architectural drawings to calculate exact quantities of steel, cement, and sand, reducing wastage by up to 15%.</p>
        <h4 className="font-bold text-slate-900 mt-4">2. Predictive Scheduling</h4>
        <p>By analyzing weather patterns and labor availability trends, AI can predict delays and suggest schedule optimizations, saving idle labor costs.</p>
        <h4 className="font-bold text-slate-900 mt-4">3. Real-time Market Rates</h4>
        <p>Our CAAT engine connects to live market databases to procure materials at the best daily rates, bypassing middlemen margins.</p>
      </div>
    )
  },
  {
    id: 3,
    title: "Vastu Tips for South Facing Plots",
    subtitle: "South facing homes can be auspicious if planned correctly. Here is the expert guide.",
    cat: "Vastu",
    date: "Dec 9, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>There is a common myth that South-facing plots are bad. This is incorrect. According to Vastu Shastra, a South-facing home can bring immense prosperity if the entrance is correct.</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Main Entrance:</strong> Locate the main door in the 3rd or 4th pada of the South side (Positive zones). Avoid the South-West corner strictly.</li>
            <li><strong>Kitchen Position:</strong> The South-East corner (Agni Kon) is ideal for the kitchen.</li>
            <li><strong>Master Bedroom:</strong> Place the master bedroom in the South-West to ensure stability and leadership.</li>
            <li><strong>Open Space:</strong> Keep more open space towards the North and East compared to the South and West.</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    title: "Cement Grades Explained: OPC vs PPC",
    subtitle: "Which cement should you use for your slab, and which one for plastering?",
    cat: "Materials",
    date: "Dec 9, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2068&auto=format&fit=crop",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>Choosing the right cement is critical for structural longevity.</p>
        <h4 className="font-bold text-slate-900 mt-4">OPC (Ordinary Portland Cement)</h4>
        <p>OPC 53 Grade sets fast and attains high initial strength. It is ideal for structural members like Columns, Beams, and Slabs where formwork needs to be removed quickly.</p>
        <h4 className="font-bold text-slate-900 mt-4">PPC (Portland Pozzolana Cement)</h4>
        <p>PPC sets slower but offers better resistance to chemical attacks and cracks over time. It is highly recommended for foundation work, masonry, and plastering.</p>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mt-4">
            <strong>Pro Tip:</strong> For home construction, using PPC for the entire structure is often preferred due to its durability, provided you cure it for at least 10-14 days.
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "The Ultimate House Construction Checklist",
    subtitle: "A step-by-step guide from documentation to housewarming.",
    cat: "Guides",
    date: "Dec 9, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>Don't miss a step. Follow this chronological checklist:</p>
        <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Pre-Construction:</strong> Land survey, Soil test, Architecture drawings, Structural drawings, Municipal approvals.</li>
            <li><strong>Foundation:</strong> Excavation, PCC, Footing, Plinth Beam, Backfilling.</li>
            <li><strong>Structure:</strong> Column raising, Brickwork, Lintel beam, Slab shuttering, Casting, Curing.</li>
            <li><strong>Finishing (Grey):</strong> Electrical piping, Plumbing lines, Internal/External Plastering, Waterproofing.</li>
            <li><strong>Finishing (Final):</strong> Flooring, Painting, Electrical switches, CP fittings, Carpentry.</li>
        </ol>
      </div>
    )
  },
  {
    id: 6,
    title: "Labor Laws Every Homeowner Should Know",
    subtitle: "Ensure your site is compliant to avoid legal hassles.",
    cat: "Legal",
    date: "Dec 9, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>Even for private home construction, certain regulations apply.</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Minimum Wages Act:</strong> Ensure your contractor pays laborers according to state minimum wage standards.</li>
            <li><strong>Safety Gear:</strong> It is mandatory to provide helmets, jackets, and boots. Accidents on site can lead to FIRs against the property owner if negligence is found.</li>
            <li><strong>Child Labor:</strong> Strictly prohibit minors (under 18) from working on your site.</li>
            <li><strong>Sanitation:</strong> You must provide clean drinking water and a temporary toilet facility for workers.</li>
        </ul>
      </div>
    )
  },
];

export const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="pt-28 md:pt-32 relative">
       {/* Background handling - Absolute to container, transparent top to show LiquidEther */}
       <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top gradient: Transparent to White to hide LiquidEther gradually */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent via-[#f8fafc]/80 to-[#f8fafc]" />
          {/* Solid background for the rest of the content */}
          <div className="absolute top-[500px] left-0 right-0 bottom-0 bg-[#f8fafc]" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
       </div>

      <div className="relative z-10 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 mb-16 pt-12">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-3xl"
            >
                <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">/// Knowledge Hub</span>
                <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 leading-tight">
                    Construction <br/> <span className="italic text-slate-400">Chronicles</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-orange-500 pl-6">
                    Expert insights on technology, materials, and laws to help you build smarter.
                </p>
            </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            {articles.map((article, index) => (
                <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedArticle(article)}
                    className="group bg-white rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-slate-100 hover:border-orange-100 flex flex-col h-full"
                >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-lg flex items-center gap-2">
                             <Tag className="w-3 h-3 text-orange-500" />
                             {article.cat}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl font-serif text-slate-900 font-bold mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                            {article.title}
                        </h3>
                        
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                            {article.subtitle}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all">
                            Read Article <ArrowRight className="w-4 h-4 text-orange-500" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
            <>
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedArticle(null)}
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
                />
                
                {/* Modal Container */}
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                    <motion.div
                        layoutId={`article-${selectedArticle.id}`}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col relative"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedArticle(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Hero Image */}
                        <div className="relative h-64 md:h-80 flex-shrink-0">
                             <img 
                                src={selectedArticle.image} 
                                alt={selectedArticle.title} 
                                className="w-full h-full object-cover"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                             <div className="absolute bottom-0 left-0 right-0 p-8">
                                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-3 shadow-lg">
                                    {selectedArticle.cat}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight">
                                    {selectedArticle.title}
                                </h2>
                             </div>
                        </div>

                        {/* Modal Content */}
                        <div className="overflow-y-auto p-8 md:p-12">
                             <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-6">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {selectedArticle.date}</span>
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {selectedArticle.readTime}</span>
                                <span className="ml-auto italic">By Designer Mistri Editorial</span>
                             </div>

                             <h3 className="text-xl font-medium text-slate-800 mb-6 italic border-l-4 border-orange-500 pl-4">
                                {selectedArticle.subtitle}
                             </h3>

                             <div className="prose prose-slate prose-lg max-w-none">
                                {selectedArticle.content}
                             </div>

                             <div className="mt-12 pt-8 border-t border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4">Share this article</h4>
                                <div className="flex gap-4">
                                    <button className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">Twitter</button>
                                    <button className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">LinkedIn</button>
                                    <button className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors">Copy Link</button>
                                </div>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </>
        )}
      </AnimatePresence>
    </div>
  );
};