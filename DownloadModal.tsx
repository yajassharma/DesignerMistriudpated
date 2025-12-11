import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Construction } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl p-8 text-center border border-white/20"
          >
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 border border-orange-100 shadow-sm">
                <Construction className="w-10 h-10 text-orange-500" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Work in Progress</h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
                The Designer Mistri app is currently under active development. Our engineering team is laying the bricks code by code. Stay tuned for the launch!
            </p>

            <button
                onClick={onClose}
                className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
                Okay, I'll wait
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
