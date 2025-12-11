import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Smartphone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MistriLogo } from './Logo';
import GlassSurface from './GlassSurface';
import { DownloadModal } from './DownloadModal';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'CAAT AI', path: '/caat' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-2 md:top-4 left-1/2 w-[98%] md:w-[95%] max-w-[1300px] z-50 translate-x-[-50%] transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-[-120%]' : 'translate-y-0'} xl:translate-y-0`}
      >
        {/* Clean Static Border Wrapper - Removed Animations */}
        <div className="relative p-[1px] rounded-[46px] overflow-hidden group bg-slate-200/50">
            <div className="relative bg-white/10 rounded-[44px] backdrop-blur-sm">
                <GlassSurface
                  width="100%"
                  height="auto"
                  borderRadius={44}
                  backgroundOpacity={0.6}
                  blur={15}
                  borderWidth={0} // Handled by wrapper
                  className="px-3 py-1 md:px-6 md:py-2"
                  contentClassName="justify-between"
                  brightness={110}
                >
                  {/* Logo Section */}
                  <div className="flex items-center gap-2 md:gap-3 pl-1 md:pl-2">
                    <Link to="/" className="flex items-center gap-2 md:gap-3 group">
                      <MistriLogo className="w-10 h-10 md:w-12 md:h-12 group-hover:rotate-90 transition-transform duration-500" strokeColor="black" />
                      <div className="justify-center">
                        <span className="text-sm md:text-2xl font-extrabold leading-none tracking-tight font-sans text-slate-700 group-hover:text-black transition-colors">Designer </span>
                        <span className="text-[10px] md:text-base font-bold leading-none font-sans text-orange-600 mt-0.5 md:mt-0.5">मिस्त्री</span>
                      </div>
                    </Link>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden xl:flex items-center gap-1">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link 
                          key={link.name}
                          to={link.path} 
                          className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 z-10 ${
                            isActive 
                              ? 'text-orange-700' 
                              : 'text-slate-600 hover:text-orange-600'
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="nav-pill"
                              className="absolute inset-0 bg-white/80 rounded-full -z-10 shadow-sm border border-orange-100/50"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2 md:gap-3 pr-1 md:pr-2">
                    <div className="hidden md:flex items-center">
                      <button 
                        onClick={() => setDownloadModalOpen(true)}
                        className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg hover:bg-black transition-all transform hover:scale-105 border border-white/10 flex items-center gap-2"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        Download App
                      </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                      className="xl:hidden z-50 text-slate-900 p-2 bg-white/50 hover:bg-orange-100 rounded-full transition-colors backdrop-blur-sm"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <Menu className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                </GlassSurface>
            </div>
        </div>
      </motion.nav>

       {/* Mobile Menu Overlay */}
       <div className={`fixed inset-0 bg-[#fffcf8] z-[60] xl:hidden flex flex-col transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <MistriLogo className="w-10 h-10" strokeColor="black" />
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-slate-900 leading-none">DESIGNER</span>
                <span className="text-[10px] font-bold text-orange-600 leading-none">मिस्त्री</span>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-slate-100 rounded-full text-slate-900 hover:bg-orange-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
        </div>

        <div className="flex flex-col space-y-6 text-center max-h-[85vh] overflow-y-auto px-6 py-10 w-full flex-1 justify-center">
           {navLinks.map((link, i) => (
             <Link 
               key={link.name} 
               to={link.path} 
               onClick={() => setMobileMenuOpen(false)}
               className="text-3xl font-serif text-slate-800 hover:text-orange-500 transition-colors"
               style={{ transitionDelay: `${i * 50}ms` }}
             >
               {link.name}
             </Link>
           ))}
           <button 
             onClick={() => {
                setMobileMenuOpen(false);
                setDownloadModalOpen(true);
             }}
             className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold mt-8 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 mx-auto w-full max-w-xs text-lg"
            >
             <Smartphone className="w-6 h-6" />
             Download App
           </button>
        </div>
      </div>

      {/* Download App Modal */}
      <DownloadModal isOpen={downloadModalOpen} onClose={() => setDownloadModalOpen(false)} />
    </>
  );
};
