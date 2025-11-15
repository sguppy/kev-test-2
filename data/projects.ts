
import React from 'react';
import { CRTEmbed } from '../components/CRTEmbed';
import { CRTImage } from '../components/CRTImage';
import { BlinkingCursor } from '../components/BlinkingCursor';
import type { Project } from '../types';

// Using React.createElement so this can remain a .ts file without JSX.
export const projects: Project[] = [
  {
    id: 'frankenstein-panopticon',
    title: 'PROJECT: THE FRANKENSTEIN PANOPTICON // A/V INSTALLATION & PERFORMANCE',
    shortTitle: 'FRANKENSTEIN PANOPTICON',
    status: 'IN DEVELOPMENT',
    description:
      'A multi-act analog video organism built from feedback loops, CRTs, and stitched-together media signals.',
    details: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        { className: 'mb-2 pl-4' },
        '> LOADING CORE DIRECTIVE: PROJECT_FRANKENSTEIN_PANOPTICON...'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'SYSTEM ARCHITECTURE: ANALOG DEFAULT MODE NETWORK'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), ' is a large-scale analog video installation and live A/V performance. It treats CRT monitors, VHS decks, cameras, and oscilloscopes as organs in a stitched-together media body. Signals are split, delayed, fed back, and recombined until they form a closed cognitive loop, resembling a constructed consciousness—a self emerging from apophenia, surveillance, and repetition.'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'BRAINWAVE STRUCTURE: DELTA → THETA → ALPHA → BETA (+ GAMMA)'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'The performance is divided into movements aligned with brainwave states. Each act has its own playlist, visual system, and signal behavior, escalating from slow, submerged Delta patterns to hyperactive Beta states, with a potential Gamma “afterglow” as a final release. The audience watches the creature learn to see itself as its own image is captured, distorted, and reprojected.'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'PANOPTIC LOGIC: WATCHING THE WATCHER'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'The Panopticon is expressed as a temporal and visual feedback system: cameras pointed at projection surfaces, monitors feeding back into mixers, recordings folded into later acts. The installation explores how we modify our behavior when we know we can be replayed. The stitched-together monster is also the one in the watchtower, constantly re-seeing itself through delayed echoes and recorded fragments.'
      ),
      React.createElement(CRTImage, {
        src:
          'https://images.unsplash.com/photo-1598277414788-85c2d3e1f8fc?q=80&w=1740&auto=format&fit=crop&ixlib-rb-4.0.3',
        alt: 'Abstract CRT feedback pattern with layered distortions',
      }),
      React.createElement(
        'p',
        { className: 'text-center text-sm text-green-400/70 mb-4 indent-4' },
        'Conceptual visualization of multi-layer feedback used as a reference for ', React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), '.'
      ),
      React.createElement(
        'p',
        { className: 'mt-4 pl-4' },
        '> STATUS: PROTOTYPING SIGNAL CHAINS, DEVELOPING COMMUNITY-FACING WORKSHOPS.',
        React.createElement(BlinkingCursor)
      )
    ),
  },
  {
    id: 'analog-video-lab',
    title: 'PROJECT: ANALOG VIDEO LAB // DIRTY MIXERS & FEEDBACK RESEARCH',
    shortTitle: 'ANALOG LAB',
    status: 'ONGOING',
    description:
      'A studio-based R&D environment for experimenting with passive video circuits, dirty mixers, and feedback distortion.',
    details: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        { className: 'mb-2 pl-4' },
        '> ACCESSING PROJECT FILE: ANALOG_VIDEO_LAB...'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'FOCUS: HAND-BUILT VIDEO TOOLS'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'Analog Video Lab is the umbrella for hands-on research into composite video, passive circuitry, and signal degradation. It includes building and testing dirty mixers, exploring sync separation, pushing feedback loops to the edge of failure, and documenting how small changes in resistance, capacitance, and routing can radically alter an image.'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'METHOD: ELECTRICIAN-MEETS-ARTIST'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'The project combines trade-style thinking—wiring, troubleshooting, reading schematics—with an artist’s curiosity about perception. The goal is not pristine video, but meaningful breakage: tools that reveal the seams in the signal and make visible the usually invisible plumbing of television and surveillance systems.'
      ),
      React.createElement(
        'p',
        { className: 'mt-4 pl-4' },
        '> OUTPUT: CUSTOM TOOLS FEED DIRECTLY INTO ', React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), ' AND FUTURE INSTALLATIONS.',
        React.createElement(BlinkingCursor)
      )
    ),
  },
  {
    id: 'cereal-box-theatre',
    title: 'PROJECT: CEREAL BOX THEATRE // COMMUNITY CINEMA FORMAT',
    shortTitle: 'CEREAL BOX THEATRE',
    status: 'COMMUNITY',
    description:
      'A Saturday-morning-cartoon-inspired screening series with a cereal bar, designed as an accessible entry point into film culture.',
    details: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        { className: 'mb-2 pl-4' },
        '> LOADING COMMUNITY PROGRAM: CEREAL_BOX_THEATRE...'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'FORMAT: CARTOONS, CEREAL, COMMUNITY'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'Cereal Box Theatre is a screening concept that revives the feeling of Saturday morning cartoons, but in a small-city theatre context. Audiences come in for a curated block of animation—public domain classics and contemporary indie work—paired with a cereal bar and a relaxed atmosphere. Donations are optional, and the emphasis is on shared experience rather than prestige.'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'LINK TO FRANKENSTEIN PANOPTICON'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'Where ', React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), ' dissects how media environments shape us, Cereal Box Theatre invites people into that media space in a gentle, nostalgic way. Together, they form a continuum: from casual Saturday-morning viewing to a deeper, more critical exploration of signals, spectacle, and collective memory.'
      ),
      React.createElement(
        'p',
        { className: 'mt-4 pl-4' },
        '> STATUS: FORMAT REFINEMENT, VENUE PARTNERSHIPS, AND CURATION IN PROGRESS.',
        React.createElement(BlinkingCursor)
      )
    ),
  },
  {
    id: 'studio-work',
    title: 'PROJECT: STUDIO & CLIENT WORK // VIDEO, PHOTO, & DIGITAL MEDIA',
    shortTitle: 'STUDIO WORK',
    status: 'ACTIVE',
    description:
      'Ongoing professional work in video, photography, and digital marketing that funds and informs the experimental practice.',
    details: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'p',
        { className: 'mb-2 pl-4' },
        '> ACCESSING COMMERCIAL MODULE: STUDIO_CLIENT_WORK...'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'SCOPE: PRODUCTION, POST, AND STRATEGY'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'Alongside installation and performance work, Kevin produces video and photo content for small businesses, arts organizations, and community groups. This includes shooting, editing, motion graphics, and helping clients think through how their media will actually be seen and used online.'
      ),
      React.createElement(
        'p',
        { className: 'font-bold mb-1 text-green-300 pl-4' },
        'FEEDBACK LOOP: PRACTICE ↔ CLIENT WORK'
      ),
      React.createElement(
        'p',
        { className: 'mb-4 indent-4' },
        'The same attention to signal flow, framing, and viewer experience that drives ', React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), ' also informs client projects. In return, the constraints and realities of client work—budgets, timelines, expectations—feed back into the experimental practice, grounding it in lived logistical experience.'
      ),
      React.createElement(
        'p',
        { className: 'mt-4 pl-4' },
        '> STATUS: ONGOING. SUPPORTING AND INTERTWINED WITH ALL OTHER PROJECTS.',
        React.createElement(BlinkingCursor)
      )
    ),
  },
];