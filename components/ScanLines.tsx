import React from 'react';

interface ScanLinesProps {
  mode?: 'screen' | 'container';
}

export const ScanLines: React.FC<ScanLinesProps> = ({ mode = 'screen' }) => {
  const positionClass = mode === 'screen' ? 'fixed' : 'absolute';
  return (
    <div className={`${positionClass} inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)_1px,transparent_1px,transparent_3px)] pointer-events-none z-10`} />
  );
};
