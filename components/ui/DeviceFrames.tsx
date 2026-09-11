import React from 'react';

interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

export function AndroidFrame({ children, className = '' }: FrameProps) {
  return (
    <div className={`relative w-full aspect-[9/19.5] group ${className}`}>
      {/* Chassis and Outer Rim */}
      <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-[#4a4a4c] via-[#2a2a2b] to-[#111111] p-[1.5px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)]">
        {/* Inner Glass Bezel */}
        <div className="w-full h-full bg-black rounded-[calc(2.25rem-1.5px)] p-[6px] md:p-[8px] relative overflow-hidden">
          
          {/* Subtle edge highlight inside the glass */}
          <div className="absolute inset-0 rounded-[calc(2.25rem-1.5px)] border border-white/5 pointer-events-none z-30" />
          
          {/* Screen Display Area */}
          <div className="relative w-full h-full bg-[#050505] rounded-[calc(2.25rem-7.5px)] md:rounded-[calc(2.25rem-9.5px)] overflow-hidden">
            
            {/* Hole Punch Camera */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-black rounded-full z-20 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.08),0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center">
              <div className="w-[4px] h-[4px] rounded-full bg-[#111424] opacity-80" />
            </div>

            {children}
          </div>
        </div>
      </div>

      {/* Buttons */}
      {/* Volume Rocker */}
      <div className="absolute -right-[2px] top-[25%] w-[2.5px] h-[12%] bg-gradient-to-b from-[#333] to-[#222] rounded-r-sm shadow-[-1px_0_1px_rgba(0,0,0,0.5)_inset]" />
      {/* Power Button */}
      <div className="absolute -right-[2px] top-[45%] w-[2.5px] h-[8%] bg-gradient-to-b from-[#333] to-[#222] rounded-r-sm shadow-[-1px_0_1px_rgba(0,0,0,0.5)_inset]" />
    </div>
  );
}

export function IPhoneFrame({ children, className = '' }: FrameProps) {
  return (
    <div className={`relative w-full aspect-[9/19.5] group ${className}`}>
      {/* Titanium Chassis and Outer Rim */}
      <div className="absolute inset-0 rounded-[2.75rem] md:rounded-[3rem] bg-gradient-to-br from-[#5a5a5e] via-[#2d2d30] to-[#1a1a1c] p-[1.5px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]">
        {/* Inner Glass Bezel */}
        <div className="w-full h-full bg-black rounded-[calc(2.75rem-1.5px)] md:rounded-[calc(3rem-1.5px)] p-[8px] md:p-[10px] relative overflow-hidden">
          
          {/* Subtle edge highlight inside the glass */}
          <div className="absolute inset-0 rounded-[calc(2.75rem-1.5px)] md:rounded-[calc(3rem-1.5px)] border border-white/5 pointer-events-none z-30" />
          
          {/* Screen Display Area */}
          <div className="relative w-full h-full bg-[#050505] rounded-[calc(2.75rem-9.5px)] md:rounded-[calc(3rem-11.5px)] overflow-hidden">
            
            {/* Dynamic Island */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[28%] h-[24px] bg-black rounded-full z-20 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.08),0_1px_4px_rgba(0,0,0,0.5)] flex items-center justify-end px-3">
               <div className="w-[6px] h-[6px] rounded-full bg-[#111424] opacity-70" />
            </div>

            {children}
          </div>
        </div>
      </div>

      {/* Buttons */}
      {/* Action Button */}
      <div className="absolute -left-[2px] top-[20%] w-[2.5px] h-[5%] bg-gradient-to-b from-[#4a4a4c] to-[#2d2d30] rounded-l-sm shadow-[1px_0_1px_rgba(0,0,0,0.5)_inset]" />
      {/* Volume Up */}
      <div className="absolute -left-[2px] top-[30%] w-[2.5px] h-[10%] bg-gradient-to-b from-[#4a4a4c] to-[#2d2d30] rounded-l-sm shadow-[1px_0_1px_rgba(0,0,0,0.5)_inset]" />
      {/* Volume Down */}
      <div className="absolute -left-[2px] top-[42%] w-[2.5px] h-[10%] bg-gradient-to-b from-[#4a4a4c] to-[#2d2d30] rounded-l-sm shadow-[1px_0_1px_rgba(0,0,0,0.5)_inset]" />
      
      {/* Power Button */}
      <div className="absolute -right-[2px] top-[32%] w-[2.5px] h-[14%] bg-gradient-to-b from-[#4a4a4c] to-[#2d2d30] rounded-r-sm shadow-[-1px_0_1px_rgba(0,0,0,0.5)_inset]" />
    </div>
  );
}
