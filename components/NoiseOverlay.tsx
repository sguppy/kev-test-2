import React from 'react';

interface NoiseOverlayProps {
  mode?: 'screen' | 'container';
}

export const NoiseOverlay: React.FC<NoiseOverlayProps> = ({ mode = 'screen' }) => {
  const positionClass = mode === 'screen' ? 'fixed' : 'absolute';
  return (
    <div className={`${positionClass} inset-0 opacity-[0.07] pointer-events-none z-20`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
  );
};
