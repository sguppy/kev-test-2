
import React from 'react';

export const Link: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-green-400/50 hover:text-yellow-400 hover:decoration-yellow-400 transition-colors duration-200">
        {children}
    </a>
);
