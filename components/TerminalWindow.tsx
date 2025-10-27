
import React from 'react';

interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ title, children }) => {
  return (
    <div className="w-full h-full border-2 border-green-400/30 bg-black/20 p-4">
      <div className="border-b-2 border-green-400/30 mb-2 pb-1 text-lg">
        == {title} ==
      </div>
      <div>{children}</div>
    </div>
  );
};
