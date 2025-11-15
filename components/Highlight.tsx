
import React from 'react';

export const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-green-400 text-black px-1">{children}</span>
);
