import React, { useState, useEffect, useRef } from 'react';
import { ScanLines } from './components/ScanLines';
import { NoiseOverlay } from './components/NoiseOverlay';
import { TerminalWindow } from './components/TerminalWindow';
import { TypingText } from './components/TypingText';
import { BlinkingCursor } from './components/BlinkingCursor';
import { CRTEmbed } from './components/CRTEmbed';
import type { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('SYSTEM');
  const [initializing, setInitializing] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainRef = useRef<HTMLElement>(null);

  const tabs: Tab[] = ['SYSTEM', 'PROJECTS', 'CONTACT'];

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const handleScroll = () => {
      // Set isScrolled to true if scrolled more than a few pixels
      setIsScrolled(mainEl.scrollTop > 10);
    };

    mainEl.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check in case it's already scrolled on load
    handleScroll();

    return () => {
      mainEl.removeEventListener('scroll', handleScroll);
    };
  }, [initializing]); // Re-run effect when the main element is rendered

  const renderContent = () => {
    switch (activeTab) {
      case 'SYSTEM':
        return (
          <>
            <p className="mb-2">&gt; RUNNING SYSTEM DIAGNOSTICS...</p>
            <p className="text-green-400 mb-2">
              [OK] MEMORY INTEGRITY CHECK
              <br />
              [OK] CPU CORES ONLINE
              <br />
              [OK] NEURAL INTERFACE SYNCED
            </p>
            <p className="mb-4">&gt; Welcome, operator. This is a retro-futuristic, cyberpunk-themed web interface inspired by old CRT monitors and green-screen computer terminals. All systems are nominal. Select a tab to proceed.</p>
            <p>&gt; AESTHETIC: MONOCHROME PHOSPHOR. FONT: VT323. VIBE: 80S HACKER.</p>
          </>
        );
      case 'PROJECTS':
        return (
          <>
            <p className="mb-2">&gt; ACCESSING PROJECT ARCHIVES...</p>
            <div className="border-t-2 border-green-400/30 pt-2">
              <p className="font-bold mb-1">PROJECT: NEBULA // AI-DRIVEN DATA VISUALIZER</p>
              <p className="ml-4 mb-2">STATUS: ONLINE - A tool for rendering complex data streams into navigable 3D wireframe models.</p>

              <p className="font-bold mb-1">PROJECT: CYPHER // DECENTRALIZED COMS NETWORK</p>
              <p className="ml-4 mb-2">STATUS: ACTIVE - Peer-to-peer encrypted communication protocol, resistant to surveillance.</p>

              <p className="font-bold mb-1">PROJECT: GHOST // STEALTH OS KERNEL</p>
              <p className="ml-4 mb-2">STATUS: DEVELOPMENT - A lightweight operating system designed to leave no digital footprint.</p>

              <p className="font-bold mb-1 mt-4">PROJECT: GRIDVIEW // LIVE CITY FEED</p>
              <p className="ml-4 mb-2">STATUS: STREAMING - Real-time atmospheric feed from Neo-Sector 7.</p>
              <div className="ml-4">
                  <CRTEmbed videoId="YGZI_1vEPfw" title="Live City Feed from Neo-Sector 7" />
              </div>
            </div>
          </>
        );
      case 'CONTACT':
        return (
          <>
            <p className="mb-2">&gt; OPENING SECURE COMMS CHANNEL...</p>
            <p>You can establish contact through the following encrypted nodes:</p>
            <ul className="list-inside list-disc ml-4 mt-2">
                <li>EMAIL: operator@cyberspace.net</li>
                <li>MATRIX: @user:matrix.dystopian.net</li>
                <li>SIGNAL: +00 1 555 0199</li>
            </ul>
            <p className="mt-4">&gt; Channel secured. Awaiting transmission...</p>
          </>
        );
      default:
        return null;
    }
  };

  const NavigationButtons = (
    <nav>
      <ul className="flex space-x-4">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 border-2 transition-all duration-200 text-sm ${
                activeTab === tab
                  ? 'bg-green-400 text-black'
                  : 'border-green-400/50 hover:bg-green-400/20'
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="bg-black min-h-screen text-green-400 flex flex-col items-center justify-center p-4 selection:bg-green-400 selection:text-black">
      <ScanLines />
      <NoiseOverlay />
      <div className="w-full max-w-5xl h-[90vh] border-4 border-green-400/50 rounded-lg p-4 bg-black/50 [box-shadow:0_0_20px_rgba(16,185,129,0.5),inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col animate-[crt-flicker_3s_infinite]">
        <header className="flex justify-between items-center border-b-2 border-green-400/30 pb-2 mb-4 animate-[text-flicker_2s_infinite]">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl">CYBERPUNK TERMINAL INTERFACE</h1>
            <div className={`transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              {NavigationButtons}
            </div>
          </div>
          <div className="text-lg">0x7A2F_v1.3.37</div>
        </header>
        
        <main ref={mainRef} className="flex-grow overflow-y-auto pr-2">
          {initializing ? (
            <TypingText text="> INITIALIZING CRT DISPLAY... BOOT SEQUENCE INITIATED... WELCOME TO THE GRID..." onComplete={() => setInitializing(false)} />
          ) : (
            <>
              <div className={`mb-4 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {NavigationButtons}
              </div>
              <TerminalWindow title={activeTab}>
                {renderContent()}
              </TerminalWindow>
            </>
          )}
        </main>

        <footer className="border-t-2 border-green-400/30 pt-2 mt-4 text-green-400/60 flex justify-between">
          <span>STATUS: CONNECTED</span>
          <span>
            <BlinkingCursor />
          </span>
          <span>SECURE_CONNECTION_ESTABLISHED</span>
        </footer>
      </div>
    </div>
  );
};

export default App;
