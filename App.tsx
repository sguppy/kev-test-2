
import React, { useState, useEffect, useRef } from 'react';
import { ScanLines } from './components/ScanLines';
import { NoiseOverlay } from './components/NoiseOverlay';
import { TerminalWindow } from './components/TerminalWindow';
import { TypingText } from './components/TypingText';
import { BlinkingCursor } from './components/BlinkingCursor';
import { projects } from './data/projects';
import type { Tab, Project } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('SYSTEM');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const mainRef = useRef<HTMLElement>(null);

  const tabs: Tab[] = ['SYSTEM', 'PROJECTS', 'CONTACT'];

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const handleScroll = () => {
      setIsScrolled(mainEl.scrollTop > 10);
    };

    mainEl.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      mainEl.removeEventListener('scroll', handleScroll);
    };
  }, [initializing, selectedProject]); // Re-run effect when main element content changes

  const handleTabClick = (tab: Tab) => {
    // If we're on the projects tab and click it again, go back to project list
    if (activeTab === tab && tab === 'PROJECTS') {
      setSelectedProject(null);
    } else {
      // Otherwise, switch tab and clear project selection
      setActiveTab(tab);
      setSelectedProject(null);
    }
    // Scroll to top when changing views
    if(mainRef.current) mainRef.current.scrollTop = 0;
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    // Scroll to top when changing views
    if(mainRef.current) mainRef.current.scrollTop = 0;
  };

  const renderContent = () => {
    if (activeTab === 'PROJECTS' && selectedProject) {
      return selectedProject.details;
    }

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
              {projects.map((project) => (
                <div key={project.id} className="mb-4">
                  <button 
                    onClick={() => handleProjectClick(project)} 
                    className="font-bold text-left hover:text-white transition-colors duration-200 block w-full"
                    aria-label={`View details for ${project.shortTitle}`}
                  >
                    <span className="text-green-400/60 mr-2">&gt;</span>{project.title}
                  </button>
                  <p className="ml-6 text-green-400/80">STATUS: {project.status} - {project.description}</p>
                </div>
              ))}
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
    <nav aria-label="Main navigation">
      <ul className="flex space-x-2 items-center">
        {tabs.map((tab) => (
          <React.Fragment key={tab}>
            <li>
              <button
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-1 border-2 transition-all duration-200 text-sm ${
                  activeTab === tab
                    ? 'bg-green-400 text-black'
                    : 'border-green-400/50 hover:bg-green-400/20'
                }`}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {tab}
              </button>
            </li>
            {tab === 'PROJECTS' && selectedProject && (
              <>
                <li className="text-green-400/70 select-none text-lg" aria-hidden="true">&gt;</li>
                <li>
                  <button
                    className="px-4 py-1 border-2 bg-green-400 text-black transition-all duration-200 text-sm"
                    aria-current="page"
                  >
                    {selectedProject.shortTitle}
                  </button>
                </li>
              </>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="bg-black min-h-screen text-green-400 flex flex-col items-center justify-center p-4 selection:bg-green-400 selection:text-black">
      <ScanLines />
      <NoiseOverlay />
      <div className="relative w-full max-w-5xl h-[90vh] border-4 border-green-400/50 rounded-l-lg p-4 pr-6 bg-black/50 [box-shadow:0_0_20px_rgba(16,185,129,0.5),inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col animate-[crt-flicker_3s_infinite]">
        <div className="absolute -top-[2px] -right-[2px]" aria-hidden="true">
            <div className="flex items-center">
                <div className="w-16 h-[4px] bg-green-400/50"></div>
                <div className="bg-black pl-2 pr-1 text-base md:text-lg text-green-400 whitespace-nowrap animate-[text-flicker_2s_infinite]">
                    0x7A2F_v1.3.37
                </div>
                <div className="w-[4px] h-14 bg-green-400/50 -ml-[2px]"></div>
            </div>
        </div>
        <header className="flex items-start border-b-2 border-green-400/30 pb-2 mb-4 animate-[text-flicker_2s_infinite]">
          <div className="flex items-center gap-x-4 gap-y-2 md:gap-x-8 flex-wrap">
            <h1 className="text-xl md:text-2xl">
              <span className="lg:hidden">CYBERPUNK TERMINAL</span>
              <span className="hidden lg:inline">CYBERPUNK TERMINAL INTERFACE</span>
            </h1>
            <div className={`transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              {NavigationButtons}
            </div>
          </div>
        </header>
        
        <main ref={mainRef} className="flex-grow overflow-y-auto pr-2 min-h-0">
          {initializing ? (
            <TypingText text="> INITIALIZING CRT DISPLAY... BOOT SEQUENCE INITIATED... WELCOME TO THE GRID..." onComplete={() => setInitializing(false)} />
          ) : (
            <>
              <div className={`mb-4 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {NavigationButtons}
              </div>
              <TerminalWindow title={selectedProject ? `PROJECTS > ${selectedProject.shortTitle}` : activeTab}>
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
