

import React, { useState, useEffect, useRef } from 'react';
import { ScanLines } from './components/ScanLines';
import { NoiseOverlay } from './components/NoiseOverlay';
import { TerminalWindow } from './components/TerminalWindow';
import { BlinkingCursor } from './components/BlinkingCursor';
import { NavigationPanel } from './components/NavigationPanel';
import { StatusPanel } from './components/StatusPanel';
import { RightSidebar } from './components/RightSidebar';
import { artistContent } from './data/artist';
import type { Tab } from './types';
import { HighlightedTypingText } from './components/HighlightedTypingText';
import ScrambledTitle from './components/ScrambledTitle';
import { Link } from './components/Link';
import { Highlight } from './components/Highlight';

const NavigationHeader: React.FC = () => (
    <div className="border-b-2 border-green-400/30 mb-4 pb-2 text-center">
        <div className="uppercase text-sm sm:text-base text-green-400/80">
             {/* Desktop */}
            <div className="hidden sm:flex justify-center items-center flex-wrap gap-x-2">
                <span className="text-green-400/60 whitespace-nowrap">=<Link href="https://en.wikipedia.org/wiki/Interactionism_(sociology)">Intraactive</Link> <Link href="https://en.wikipedia.org/wiki/Axon_terminal">Neuroterminal</Link> <Link href="https://en.wikipedia.org/wiki/Neural_pathway">Pathway</Link>=</span>
                <span className="whitespace-nowrap">FRPN://<Link href="https://en.wikipedia.org/wiki/Corpus_callosum">CORPUS_CALLOSUM</Link>/<Link href="https://en.wikipedia.org/wiki/Cerebral_cortex">CORTEX</Link>/</span>
            </div>
            {/* Mobile */}
            <div className="sm:hidden">
                =INTRAACTIVE_NEUROTERMINAL_PATHWAY/=
            </div>
        </div>
    </div>
);

const ObserverIntakeContent: React.FC = () => (
  <div className="flex flex-col h-full">
    <div>
        <p className="mt-4 indent-4"><Highlight>The Frankenstein Panopticon</Highlight> is an analog video installation and live A/V performance exploring how raw sensory input—light, sound, electricity—can be stitched together into a fragile, emergent consciousness. It is an artificial organism built from obsolete technology: CRT monitors, VHS decks, surveillance cameras, and oscillators, all wired into a self-observing feedback loop.</p>
        <p className="mt-2 indent-4">The system watches itself, and in doing so, learns to exist. The audience is invited to witness the birth of a ghost in the machine—a ghost assembled from phantom signals and decaying memory.</p>
        <p className="mt-2 indent-4">This terminal is your interface to its nervous system. Each section provides a different window into its logic, its history, and its architect. Proceed with caution. The signal is unstable.</p>
    </div>
    <p className="mt-auto pl-4">&gt; STANDING BY FOR INPUT...<BlinkingCursor /></p>
  </div>
);

const UnderConstructionContent: React.FC<{ message: string; subMessage: string }> = ({ message, subMessage }) => (
    <div className="flex flex-col h-full justify-center items-center text-center">
        <p className="text-xl text-yellow-400">{message}</p>
        <p className="text-green-400/80 mt-2">{subMessage}<BlinkingCursor /></p>
    </div>
);

const ContactContent: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-lg text-yellow-400 mb-2">== ESTABLISH COMMS LINK ==</h2>
            <p className="indent-4 mb-4">The signal is weak, but the channel is open. Use the provided coordinates to establish a direct link with the operator.</p>
            
            <div className="pl-4 mb-6">
                <p className="mb-2">&gt; DECRYPTION KEY: EMAIL</p>
                <a href="mailto:operator.prime@frankenstein-panopticon.net" className="ml-4 text-white hover:text-yellow-400 transition-colors duration-200 underline">operator.prime@frankenstein-panopticon.net</a>
            </div>

            <div className="pl-4 mb-6">
                <p className="mb-2">&gt; VISUAL DATA STREAM: INSTAGRAM</p>
                <a href="https://www.instagram.com/operator_prime" target="_blank" rel="noopener noreferrer" className="ml-4 text-white hover:text-yellow-400 transition-colors duration-200 underline">@operator_prime</a>
            </div>

            <div className="pl-4">
                <p className="mb-2">&gt; SUBSCRIBE TO SIGNAL ECHOES (NEWSLETTER):</p>
                {submitted ? (
                    <p className="ml-4 text-yellow-400">&gt; SIGNAL RECEIVED. AWAITING HANDSHAKE.<BlinkingCursor /></p>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 ml-4">
                        <input 
                            type="email" 
                            placeholder="YOUR_EMAIL_ADDRESS" 
                            required 
                            className="bg-black/50 border border-green-400/30 px-2 py-1 flex-grow focus:outline-none focus:ring-1 focus:ring-yellow-400 placeholder-green-400/50"
                        />
                        <button type="submit" className="px-4 py-1 border border-green-400/30 bg-green-900/60 hover:bg-yellow-400 hover:text-black transition-colors duration-200">
                            TRANSMIT_
                        </button>
                    </form>
                )}
            </div>
            <p className="mt-auto pl-4">&gt; STANDING BY...<BlinkingCursor /></p>
        </div>
    );
};


const App: React.FC = () => {
  const originalTitle = 'THE FRANKENSTEIN PANOPTICON';
  const [booting, setBooting] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('OBSERVER_INTAKE');
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  
  const tabs: Tab[] = ['OBSERVER_INTAKE', 'PROJECTS', 'LAB_NOTES', 'ARTIST_INFO_LOG', 'DO_YOU_COPY'];
  
  useEffect(() => {
    if (contentRef.current) {
        contentRef.current.scrollTop = 0;
    }
  }, [activeTab, activeSubTab]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
    setActiveSubTab(null);
  };

  const renderContent = () => {
    switch (activeTab) {
        case 'PROJECTS':
            return <UnderConstructionContent message="SYSTEM UNDER RECONSTRUCTION" subMessage="SIGNAL FRAGMENTED. PLEASE STAND BY." />;
        case 'LAB_NOTES':
            return <UnderConstructionContent message="SPECIMEN IN EMBRYONIC STASIS" subMessage="AWAITING INCUBATION PROTOCOL." />;
        case 'ARTIST_INFO_LOG':
            return artistContent;
        case 'DO_YOU_COPY':
             return <ContactContent />;
        case 'OBSERVER_INTAKE':
        default:
            return <ObserverIntakeContent />;
    }
  };
  
  const renderSubNav = () => {
    return null;
  }

  return (
    <div className="bg-black text-green-400 min-h-screen flex flex-col font-['VT323',_monospace] selection:bg-yellow-400 selection:text-black animate-[crt-flicker_5s_infinite]">
      <ScanLines />
      <NoiseOverlay />
      
        {booting ? (
            <div className="w-full h-full flex-grow flex items-center justify-center text-xl md:text-3xl p-4">
                <HighlightedTypingText 
                    preText="> YOU ARE IN " 
                    highlightedText="THE FRANKENSTEIN PANOPTICON" 
                    speed={80} 
                    onComplete={() => setTimeout(() => setBooting(false), 1500)} 
                />
            </div>
        ) : (
            <div className="w-full h-full p-2 flex flex-col flex-grow">
                {/* Desktop Header */}
                <header className="hidden md:flex justify-between items-center p-2 border-2 border-green-400/30 bg-black/20 flex-shrink-0">
                    <div className="text-left text-sm uppercase font-bold font-lcd md:w-[30%]">
                        <p>Counterfascial Interface</p>
                        <p>Anomalous Observer: <span className="text-yellow-400 animate-[text-flicker_7s_infinite]">*DETECTED*</span></p>
                    </div>
                    <h1 className="text-center font-lcd text-2xl lg:text-3xl md:w-[40%] bg-green-400/80 text-black px-2 py-1 whitespace-nowrap">
                        <ScrambledTitle text={originalTitle} isBooting={booting} />
                    </h1>
                    <div className="text-right text-sm uppercase font-bold font-lcd md:w-[30%]">
                        <p>FRPN_v2.1.0_20251117</p>
                        <p className="flex items-center justify-end">
                            <span className="blinking-red-dot inline-block w-2 h-2 rounded-full mr-2"></span>
                            Session Logging Active
                        </p>
                    </div>
                </header>

                {/* Mobile Header */}
                <header className="md:hidden p-2 border-2 border-green-400/30 bg-black/20 flex-shrink-0">
                    <h1 className="text-center font-lcd text-2xl mb-2 bg-green-400/80 text-black px-2 py-1 whitespace-nowrap">
                      <ScrambledTitle text={originalTitle} isBooting={booting} />
                    </h1>
                    <div className="flex justify-between items-center text-xs uppercase font-lcd">
                        <div className="text-left">
                            <p>Counterfascial Interface</p>
                            <p>Anomalous Observer: <span className="text-yellow-400 animate-[text-flicker_7s_infinite]">*DETECTED*</span></p>
                        </div>
                        <div className="text-right">
                            <p>FRPN_v2.1.0_20251117</p>
                            <p className="flex items-center justify-end">
                                <span className="blinking-red-dot inline-block w-2 h-2 rounded-full mr-2"></span>
                                Session Logging Active
                            </p>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex flex-col md:flex-row flex-grow min-h-0 gap-2 mt-2 md:items-stretch">
                    
                    {/* Left Sidebar (Desktop) */}
                    <aside className="hidden md:block md:w-[30%] flex-shrink-0">
                        <NavigationPanel tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
                    </aside>

                    {/* Mobile Navigation */}
                    <div className="flex flex-col flex-grow min-h-0 md:hidden order-2">
                      <NavigationHeader />
                      <div className="flex flex-nowrap justify-center gap-1 my-2 px-2">
                          {tabs.map((tab) => (
                              <button
                                  key={tab}
                                  onClick={() => handleTabClick(tab)}
                                  className={`flex-grow flex items-center justify-center text-center px-2 py-2 transition-all duration-200 uppercase text-xs border border-green-400/30 ${
                                      activeTab === tab
                                      ? 'bg-yellow-400 text-black animate-[text-flicker_7s_infinite]'
                                      : 'bg-black/20 hover:bg-green-900/60 hover:text-green-300'
                                  }`}
                                  aria-current={activeTab === tab ? 'page' : undefined}
                              >
                                  {tab}/
                              </button>
                          ))}
                      </div>
                    </div>


                    {/* Center Content */}
                    <section className="flex flex-col min-h-0 md:w-[40%] order-1 md:order-none">
                      <TerminalWindow title={`${activeTab}`} contentRef={contentRef}>
                        {renderSubNav()}
                        <div className="min-h-0 flex-grow flex flex-col">
                            {renderContent()}
                        </div>
                      </TerminalWindow>
                    </section>
                    
                    {/* Right Sidebar */}
                    <aside className="w-full md:w-[30%] flex-shrink-0 mt-2 md:mt-0 order-3 md:order-none">
                        <RightSidebar />
                    </aside>
                </main>
                
                {/* Footer */}
                <footer className="flex-shrink-0 pt-2">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="w-full md:w-[20%] p-2 border border-green-400/20 bg-green-400/10 flex items-center justify-center">
                            <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-bold text-green-400 font-lcd">
                                <span className="hidden md:inline">
                                    <a href="https://en.wikipedia.org/wiki/Galvanism" target="_blank" rel="noopener noreferrer" className="md:block hover:text-yellow-400 transition-colors duration-200">GALVANIC</a>{' '}
                                    <a href="https://en.wikipedia.org/wiki/Hedonism" target="_blank" rel="noopener noreferrer" className="md:block hover:text-yellow-400 transition-colors duration-200">HEDONIMETRY</a>{' '}
                                    <a href="https://en.wikipedia.org/wiki/Augury" target="_blank" rel="noopener noreferrer" className="md:block hover:text-yellow-400 transition-colors duration-200">AUGURITICS</a>
                                </span>
                                <span className="md:hidden">GALVANIC_HEDONIMETRY_AUGURITICS/</span>
                            </h2>
                        </div>
                        <div className="w-full md:w-[80%]">
                            <StatusPanel startAnimation={true} />
                        </div>
                    </div>
                </footer>
            </div>
        )}
    </div>
  );
};

export default App;