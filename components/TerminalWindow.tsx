


import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  contentRef?: React.RefObject<HTMLDivElement>;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children, contentRef }) => {
  const eyeOfHorusSvg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3e%3cpath fill='rgba(16, 185, 129, 0.05)' d='M320 256c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM624 320c-35.3-76.3-107.5-128-192-128s-156.7 51.7-192 128H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h20.7c3.3-13.4 8.2-26.1 14.5-37.8 22-41.1 58.1-70.2 100.8-82.5V336c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-21.2c42.7 12.3 78.8 41.4 100.8 82.5 6.3 11.7 11.2 24.4 14.5 37.8H592c26.5 0 48-21.5 48-48s-21.5-48-48-48h-16.7c-3.3 13.4-8.2 26.1-14.5 37.8-22 41.1-58.1 70.2-100.8 82.5V384c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v21.2C189.6 390.9 153.4 361.8 131.5 320.7c-6.3-11.7-11.2-24.4-14.5-37.8H136c35.3 76.3 107.5 128 192 128s156.7-51.7 192-128h16.7z'/%3e%3c/svg%3e")`;

  return (
    <div 
      className="w-full border-2 border-green-400/30 bg-black/20 p-4 flex flex-col h-full"
      style={{
        backgroundImage: `${eyeOfHorusSvg}, radial-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
        backgroundSize: '300px, 10px 10px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat, repeat',
      }}
    >
      <div className="border-b-2 border-green-400/30 mb-2 pb-1 text-2xl flex-shrink-0 text-center">
        <span className="bg-yellow-400 text-black px-2">== {title} ==</span>
      </div>
      <div ref={contentRef} className="overflow-y-auto pr-2 flex-grow min-h-0">
        {children}
      </div>
      <div className="border-t-2 border-green-400/30 mt-2"></div>
    </div>
  );
};