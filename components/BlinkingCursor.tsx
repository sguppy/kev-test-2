
import React from 'react';

export const BlinkingCursor: React.FC = () => {
  return <span className="inline-block w-2.5 h-5 bg-green-400 align-middle ml-1 animate-[blink_1s_step-end_infinite]" />;
};
