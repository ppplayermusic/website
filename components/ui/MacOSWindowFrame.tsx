import React, { ReactNode } from 'react';

interface MacOSWindowFrameProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function MacOSWindowFrame({ children, title, className = '' }: MacOSWindowFrameProps) {
  return (
    <div 
      className={`relative rounded-xl md:rounded-2xl overflow-hidden bg-[#1c1c1e] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col ${className}`}
    >
      {/* Title Bar */}
      <div className="h-8 md:h-10 w-full flex items-center justify-between px-3 md:px-4 shrink-0 bg-[#2d2d2f]/80 backdrop-blur-md border-b border-white/5 relative z-10">
        
        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5 md:gap-2 z-20">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] border border-black/10" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] border border-black/10" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] border border-black/10" />
        </div>

        {/* Title (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {title && (
            <span className="text-[10px] md:text-xs font-medium text-white/50 tracking-wide font-sans">
              {title}
            </span>
          )}
        </div>
        
        {/* Empty space for flex-between balance */}
        <div className="w-[42px] md:w-[52px]" />
      </div>

      {/* Content Area */}
      <div className="relative w-full h-auto bg-black flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
