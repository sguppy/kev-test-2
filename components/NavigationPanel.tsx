
import React from 'react';
import type { Tab } from '../types';
import { Link } from './Link';

interface NavigationPanelProps {
  tabs: Tab[];
  activeTab: Tab;
  onTabClick: (tab: Tab) => void;
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div
      className="w-full border-2 border-green-400/30 bg-black/20 p-4 flex flex-col h-full"
      style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M 0 50 C 25 25, 25 75, 50 50 S 75 25, 100 50' stroke='rgba(16, 185, 129, 0.05)' stroke-width='1' fill='none'/%3e%3cpath d='M 50 0 C 25 25, 75 25, 50 50 S 25 75, 50 100' stroke='rgba(16, 185, 129, 0.05)' stroke-width='1' fill='none'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="border-b-2 border-green-400/30 mb-4 pb-1 text-center">
        <h2 className="text-2xl uppercase">
            =={' '}
            <Link href="https://en.wikipedia.org/wiki/Interactionism_(sociology)">
                INTRAACTIVE
            </Link>
            _NEUROTERMINAL ==
        </h2>
      </div>
      <nav aria-label="Main navigation" className="flex-grow pb-4">
        <ul>
          {tabs.map((tab) => (
            <li key={tab} className="mb-2">
              <button
                onClick={() => onTabClick(tab)}
                className={`w-full text-left px-2 py-1 transition-all duration-200 uppercase text-base md:text-lg ${
                  activeTab === tab
                    ? 'bg-yellow-400 text-black animate-[text-flicker_7s_infinite]'
                    : 'hover:bg-green-900/60 hover:text-green-300'
                }`}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {activeTab === tab ? '>>' : '>'} {tab}/
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t-2 border-green-400/30 mt-auto"></div>
    </div>
  );
};
