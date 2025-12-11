import React from 'react';

export const MistriLogo = ({ className = "w-10 h-10", strokeColor = "white" }: { className?: string, strokeColor?: string }) => (
  <div className={`${className} relative overflow-hidden flex items-center justify-center`}>
    <img 
      src="https://ik.imagekit.io/yajas/Designer%20Mistry%20logo%20Final-04.png" 
      alt="Designer Mistri Logo" 
      className="w-full h-full object-contain scale-[1.6]" 
    />
  </div>
);