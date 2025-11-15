



import React, { useState, useEffect } from 'react';
import { Link } from './Link';

const getMnemonicTraceClass = (trace: string) => {
    switch (trace) {
        case 'FADING':
        case 'INTENSE':
            return 'text-yellow-400 animate-[text-flicker_7s_infinite]';
        case 'CORRUPTED':
            return 'text-red-500 animate-[text-flicker_7s_infinite]';
        case 'STABLE':
        default:
            return 'text-white';
    }
};

const getLimbicResonanceClass = (resonance: string) => {
    switch (resonance) {
        case 'FLUX':
        case 'SPIKING':
            return 'text-yellow-400 animate-[text-flicker_7s_infinite]';
        case 'DECAY':
            return 'text-red-500 animate-[text-flicker_7s_infinite]';
        case 'STABLE':
        default:
            return 'text-white';
    }
};

const getEgoBoundaryClass = (boundary: string) => {
    switch(boundary) {
        case 'BREACHED':
            return 'text-yellow-400 animate-[text-flicker_7s_infinite]';
        case 'UNBOUND':
            return 'text-red-500 animate-[text-flicker_7s_infinite]';
        case 'PERMEABLE':
        default:
            return 'text-white';
    }
}

const getCognitiveDissonanceClass = (dissonance: string) => {
    switch (dissonance) {
        case 'ELEVATED':
            return 'text-yellow-400 animate-[text-flicker_7s_infinite]';
        case 'CRITICAL':
        case 'FRACTURED':
            return 'text-red-500 animate-[text-flicker_7s_infinite]';
        case 'NOMINAL':
        default:
            return 'text-white';
    }
};

interface StatusPanelProps {
  startAnimation: boolean;
}

const Readout: React.FC<{
  isVisible: boolean;
  title: React.ReactNode;
  value: React.ReactNode;
  valueClassName?: string;
}> = ({ isVisible, title, value, valueClassName = 'text-white' }) => {
  return (
    <div
      className={`border border-green-400/20 p-2 h-full flex flex-col justify-center items-center bg-green-400/10 ${
        isVisible ? 'animate-[flicker-in_0.8s_forwards]' : 'opacity-0'
      }`}
    >
      <span className="text-green-400/70 block text-sm leading-tight mb-0.5 font-bold">{title}</span>
      <span className={`${valueClassName} text-base`}>{value}</span>
    </div>
  );
};


export const StatusPanel: React.FC<StatusPanelProps> = ({ startAnimation }) => {
    const [cognitionLoad, setCognitionLoad] = useState(37);
    const [synapseLatency, setSynapseLatency] = useState(12);
    const [phantomLimbSync, setPhantomLimbSync] = useState(88);
    const [apopheniaIndex, setApopheniaIndex] = useState(78);
    const [mnemonicTrace, setMnemonicTrace] = useState('STABLE');
    const [limbicResonance, setLimbicResonance] = useState('STABLE');
    const [stimulusPropinquity, setStimulusPropinquity] = useState(65);
    const [oversightSaturation, setOversightSaturation] = useState(48);
    const [korsakoffDecay, setKorsakoffDecay] = useState(14);
    const [sensoryAperture, setSensoryAperture] = useState(92);
    const [axonicEfficiency, setAxonicEfficiency] = useState(95);
    const [egoBoundary, setEgoBoundary] = useState('PERMEABLE');
    const [scryingThreshold, setScryingThreshold] = useState(75);
    const [signalNoiseDelta, setSignalNoiseDelta] = useState(1.3);
    const [heuristicDrift, setHeuristicDrift] = useState(2.1);
    const [cognitiveDissonance, setCognitiveDissonance] = useState('NOMINAL');
    const [visibleReadouts, setVisibleReadouts] = useState(Array(16).fill(false));
    
    useEffect(() => {
        if (startAnimation) {
            const indices = Array.from(Array(16).keys());
            // Shuffle indices for random fade-in order
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }

            indices.forEach((index, i) => {
                const delay = i * 80 + Math.random() * 50; // Staggered and slightly random delay
                setTimeout(() => {
                    setVisibleReadouts(prev => {
                        const newVisible = [...prev];
                        newVisible[index] = true;
                        return newVisible;
                    });
                }, delay);
            });
        }
    }, [startAnimation]);
    
    useEffect(() => {
        const vitalInterval = setInterval(() => {
            setCognitionLoad(Math.floor(Math.random() * (95 - 45 + 1) + 45));
            setSynapseLatency(Math.floor(Math.random() * (40 - 8 + 1) + 8));
            setApopheniaIndex(Math.floor(Math.random() * (100 - 60 + 1) + 60));
            setPhantomLimbSync(Math.floor(Math.random() * (100 - 20 + 1) + 20));
            setStimulusPropinquity(Math.floor(Math.random() * (90 - 20 + 1) + 20));
            setOversightSaturation(Math.floor(Math.random() * (80 - 20 + 1) + 20));
            setKorsakoffDecay(Math.floor(Math.random() * (50 - 5 + 1) + 5));
            setSensoryAperture(Math.floor(Math.random() * (100 - 70 + 1) + 70));
            setAxonicEfficiency(Math.floor(Math.random() * (98 - 75 + 1) + 75));
            setScryingThreshold(Math.floor(Math.random() * (95 - 60 + 1) + 60));
            setSignalNoiseDelta(+(Math.random() * (3.5 - 0.5) + 0.5).toFixed(1));
            setHeuristicDrift(+(Math.random() * 5).toFixed(1));
            
            const traces = ['STABLE', 'FADING', 'INTENSE', 'CORRUPTED'];
            setMnemonicTrace(traces[Math.floor(Math.random() * traces.length)]);

            const resonances = ['STABLE', 'FLUX', 'SPIKING', 'DECAY'];
            setLimbicResonance(resonances[Math.floor(Math.random() * resonances.length)]);

            const boundaries = ['PERMEABLE', 'BREACHED', 'UNBOUND'];
            setEgoBoundary(boundaries[Math.floor(Math.random() * boundaries.length)]);

            const dissonances = ['NOMINAL', 'ELEVATED', 'CRITICAL', 'FRACTURED'];
            setCognitiveDissonance(dissonances[Math.floor(Math.random() * dissonances.length)]);

        }, 2500);

        return () => {
            clearInterval(vitalInterval);
        };
    }, []);

    const readouts = [
        { isVisible: visibleReadouts[0], title: <Link href="https://en.wikipedia.org/wiki/Scrying">SCRYING THRESHOLD</Link>, value: `${scryingThreshold}%`, valueClassName: scryingThreshold > 85 ? 'text-yellow-400 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[1], title: 'SYNAPSE LATENCY', value: `${synapseLatency}ms` },
        { isVisible: visibleReadouts[2], title: <Link href="https://en.wikipedia.org/wiki/Apophenia">APOPHENIA INDEX</Link>, value: `${apopheniaIndex}%` },
        { isVisible: visibleReadouts[3], title: <Link href="https://en.wikipedia.org/wiki/Oversight">OVERSIGHT SATURATION</Link>, value: `${oversightSaturation}%`, valueClassName: (oversightSaturation < 40 || oversightSaturation > 70) ? 'text-yellow-400 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[4], title: <Link href="https://en.wikipedia.org/wiki/Mnemonic">MNEMONIC TRACE</Link>, value: mnemonicTrace, valueClassName: getMnemonicTraceClass(mnemonicTrace) },
        { isVisible: visibleReadouts[5], title: <Link href="https://en.wikipedia.org/wiki/Phantom_limb">PHANTOM LIMB SYNC</Link>, value: `${phantomLimbSync}%`, valueClassName: phantomLimbSync < 30 ? 'text-red-500 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[6], title: <Link href="https://en.wikipedia.org/wiki/Sensory_gating">SENSORY APERTURE</Link>, value: `${sensoryAperture}%` },
        { isVisible: visibleReadouts[7], title: <Link href="https://en.wikipedia.org/wiki/Signal-to-noise_ratio">SIGNAL/NOISE DELTA</Link>, value: `+${signalNoiseDelta}dB`, valueClassName: signalNoiseDelta > 3.0 ? 'text-yellow-400 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[8], title: <Link href="https://en.wikipedia.org/wiki/Cognitive_load">COGNITION LOAD</Link>, value: `${cognitionLoad}%`, valueClassName: cognitionLoad > 85 ? 'text-yellow-400 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[9], title: <Link href="https://en.wikipedia.org/wiki/Propinquity">STIMULUS PROPINQUITY</Link>, value: `${stimulusPropinquity}%` },
        { isVisible: visibleReadouts[10], title: <Link href="https://en.wikipedia.org/wiki/Korsakoff_syndrome">KORSAKOFF DECAY</Link>, value: `${korsakoffDecay}%`, valueClassName: korsakoffDecay > 40 ? 'text-red-500 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[11], title: <Link href="https://en.wikipedia.org/wiki/Limbic_resonance">LIMBIC RESONANCE</Link>, value: limbicResonance, valueClassName: getLimbicResonanceClass(limbicResonance) },
        { isVisible: visibleReadouts[12], title: <Link href="https://en.wikipedia.org/wiki/Axon">AXONIC EFFICIENCY</Link>, value: `${axonicEfficiency}%`, valueClassName: axonicEfficiency < 80 ? 'text-red-500 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[13], title: <Link href="https://en.wikipedia.org/wiki/Ego_death#Ego_boundary">EGO BOUNDARY</Link>, value: egoBoundary, valueClassName: getEgoBoundaryClass(egoBoundary) },
        { isVisible: visibleReadouts[14], title: <Link href="https://en.wikipedia.org/wiki/Heuristic">HEURISTIC DRIFT</Link>, value: `${heuristicDrift}º`, valueClassName: heuristicDrift > 4.0 ? 'text-yellow-400 animate-[text-flicker_7s_infinite]' : 'text-white' },
        { isVisible: visibleReadouts[15], title: <Link href="https://en.wikipedia.org/wiki/Cognitive_dissonance">COGNITIVE DISSONANCE</Link>, value: cognitiveDissonance, valueClassName: getCognitiveDissonanceClass(cognitiveDissonance) },
    ];


  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-1 text-center text-xs uppercase w-full">
        {readouts.map((r, i) => (
            <Readout key={i} {...r} />
        ))}
    </div>
  );
};