import React from 'react';
import { ScanLines } from './ScanLines';
import { NoiseOverlay } from './NoiseOverlay';

interface CRTImageProps {
  src: string;
  alt: string;
}

export const CRTImage: React.FC<CRTImageProps> = ({ src, alt }) => {
  return (
    <div className="relative aspect-video w-full my-4 border-2 border-green-400/30 bg-black overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <ScanLines mode="container" />
      <NoiseOverlay mode="container" />
      <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_20px_10px_rgba(0,0,0,0.8)]" />
    </div>
  );
};
