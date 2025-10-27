import React from 'react';
import { CRTEmbed } from '../components/CRTEmbed';
import type { Project } from '../types';

// FIX: Replaced JSX with React.createElement to allow React components in a .ts file.
// The file extension .ts does not support JSX syntax, which was causing parsing errors.
// Using React.createElement is the equivalent and works in regular TypeScript files.
export const projects: Project[] = [
  {
    id: 'nebula',
    title: 'PROJECT: NEBULA // AI-DRIVEN DATA VISUALIZER',
    shortTitle: 'NEBULA',
    status: 'ONLINE',
    description: 'A tool for rendering complex data streams into navigable 3D wireframe models.',
    details: React.createElement(React.Fragment, null,
        React.createElement('p', { className: "mb-2" }, '> LOADING PROJECT FILE: NEBULA.DAT...'),
        React.createElement('p', { className: "font-bold mb-1 text-green-300" }, 'AUTHORIZATION: LEVEL 7 CLEARANCE'),
        React.createElement('p', { className: "mb-4" }, 'Nebula utilizes a proprietary quaternion-based algorithm to map multi-dimensional datasets onto a real-time, interactive holographic display. The system is capable of processing petabytes of telemetry data, identifying emergent patterns through a self-organizing neural network. Primary application is tracking dark matter fluctuations in the Outer Rim sectors.'),
        React.createElement('p', null, '> SYSTEM STATUS: STABLE. REAL-TIME LINK ACTIVE.')
      ),
  },
  {
    id: 'cypher',
    title: 'PROJECT: CYPHER // DECENTRALIZED COMS NETWORK',
    shortTitle: 'CYPHER',
    status: 'ACTIVE',
    description: 'Peer-to-peer encrypted communication protocol, resistant to surveillance.',
    details: React.createElement(React.Fragment, null,
        React.createElement('p', { className: "mb-2" }, '> DECRYPTING PROJECT FILE: CYPHER.KEY...'),
        React.createElement('p', { className: "font-bold mb-1 text-green-300" }, 'ENCRYPTION: AES-512 (QUANTUM-RESISTANT)'),
        React.createElement('p', { className: "mb-4" }, 'Cypher establishes a mesh network of untraceable nodes, routing all traffic through a minimum of seven randomized proxies. Each data packet is wrapped in multiple layers of encryption, with keys that decay and regenerate every 256 milliseconds. Designed for operatives in hostile digital environments. The network has maintained 99.999% uptime with zero known breaches.'),
        React.createElement('p', null, '> NETWORK STATUS: SECURE. ALL NODES RESPONDING.')
      ),
  },
  {
    id: 'ghost',
    title: 'PROJECT: GHOST // STEALTH OS KERNEL',
    shortTitle: 'GHOST',
    status: 'DEVELOPMENT',
    description: 'A lightweight operating system designed to leave no digital footprint.',
    details: React.createElement(React.Fragment, null,
        React.createElement('p', { className: "mb-2" }, '> COMPILING KERNEL: GHOST_v0.7a...'),
        React.createElement('p', { className: "font-bold mb-1 text-green-300" }, 'FOOTPRINT: < 2MB (VOLATILE MEMORY)'),
        React.createElement('p', { className: "mb-4" }, 'The Ghost kernel operates entirely in RAM and is designed to scrub itself from memory upon shutdown or if a tamper-event is detected. It uses polymorphic code to alter its own signature, evading heuristic-based detection systems. Current development focuses on integrating a cloaking module to mask its network traffic as ambient background noise.'),
        React.createElement('p', null, '> BUILD STATUS: SUCCESSFUL. AWAITING FIELD TEST.')
      ),
  },
  {
    id: 'gridview',
    title: 'PROJECT: GRIDVIEW // LIVE CITY FEED',
    shortTitle: 'GRIDVIEW',
    status: 'STREAMING',
    description: 'Real-time atmospheric feed from Neo-Sector 7.',
    details: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "mb-2" }, '> CONNECTING TO SECTOR 7 UPLINK...'),
            React.createElement('p', { className: "font-bold mb-1 text-green-300" }, 'SIGNAL: ENCRYPTED, LIVE'),
            React.createElement('p', { className: "mb-4" }, "Gridview taps into the city's central sensor network, providing a live, unfiltered atmospheric feed from the heart of Neo-Sector 7. The stream includes thermal, EM, and acoustic data overlays. Primarily used for monitoring civic unrest and atmospheric toxicity levels."),
            React.createElement(CRTEmbed, { videoId: "YGZI_1vEPfw", title: "Live City Feed from Neo-Sector 7" }),
            React.createElement('p', null, '> CONNECTION ESTABLISHED. STREAMING LIVE.')
        ),
  }
];
