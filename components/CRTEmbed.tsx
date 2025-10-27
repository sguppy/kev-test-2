import React from 'react';
import { ScanLines } from './ScanLines';
import { NoiseOverlay } from './NoiseOverlay';

interface CRTEmbedProps {
  videoId: string;
  title: string;
}

export const CRTEmbed: React.FC<CRTEmbedProps> = ({ videoId, title }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

  return (
    <div className="relative aspect-video w-full my-4 border-2 border-green-400/30 bg-black overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
      <ScanLines mode="container" />
      <NoiseOverlay mode="container" />
      <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_20px_10px_rgba(0,0,0,0.8)]" />
    </div>
  );
};
