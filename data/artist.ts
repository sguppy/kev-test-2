
import React from 'react';
import { CRTEmbed } from '../components/CRTEmbed';
import { CRTImage } from '../components/CRTImage';
import { BlinkingCursor } from '../components/BlinkingCursor';

const CVSection: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) =>
  React.createElement(
    'div',
    { className: 'mb-4 pl-4' },
    React.createElement(
      'h3',
      { className: 'text-green-300 border-b border-green-400/20 mb-1' },
      `// ${title}`
    ),
    React.createElement('ul', { className: 'list-disc list-inside ml-2 text-green-400/90' }, children)
  );

const CVEntry: React.FC<{ year?: string; label?: string | React.ReactNode; text: React.ReactNode }> = ({
  year,
  label,
  text,
}) =>
  React.createElement(
    'li',
    null,
    year &&
      React.createElement(
        'span',
        { className: 'text-green-400/70 mr-2' },
        `[${year}]`
      ),
    label &&
      React.createElement(
        'span',
        { className: 'text-green-300 mr-1' },
        label,
        ':'
      ),
    text
  );

export const artistContent = React.createElement(
  React.Fragment,
  null,
  // HEADER
  React.createElement(
    'p',
    { className: 'mb-4 pl-4' },
    '> ACCESSING PERSONNEL FILE: OPERATOR_PRIME // KIRKPATRICK, KEVIN...'
  ),

  React.createElement(
    'h2',
    { className: 'text-lg text-white mb-2 pl-4' },
    '== ARCHITECT PROFILE =='
  ),
  React.createElement(
    'p',
    { className: 'mb-4 text-green-200 indent-4' },
    'Kevin Kirkpatrick is a media artist, video producer, and Electrical Apprentice based in Swift Current, Saskatchewan. His work orbits around analog video signals, feedback systems, and the ways media environments shape how we understand ourselves. ',
    React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'),
    ' is the central node in an ongoing practice that treats CRTs, VCRs, cameras, and oscilloscopes as both instruments and mirrors.'
  ),
  
  React.createElement(
    'h2',
    { className: 'text-lg text-white mb-2 mt-4 pl-4' },
    '== CONCEPTUAL BASIS =='
  ),
   React.createElement(
    CVSection,
    { title: 'FORMATIVE EXPERIENCE: THE ANALOG/DIGITAL CORPUS CALLOSUM' },
     React.createElement(CVEntry, {
      year: '2006',
      text:
        React.createElement(React.Fragment, null, 'Graduated with a diploma in Film and Video Production during a pivotal moment: the global teeter-totter from analog film to digital video. This experience of being taught techniques while simultaneously being told they would soon be obsolete is a foundational concept for ', React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), '.')
    }),
     React.createElement(CVEntry, {
      text:
        'The project explores this technological friction, using "dead" media to investigate how our perception is shaped by the tools we use to see. It is a reflection of a world—and a self—caught between decaying formats and emergent systems.',
    }),
     React.createElement(CVEntry, {
      text:
        'This act of depicting the world through obsolete, self-monitoring technology becomes its own kind of feedback loop, intended to ripple outward and provoke a new awareness of our constructed media environment.',
    })
  ),

  // PRACTICE & TRAINING
  React.createElement(
    'h2',
    { className: 'text-lg text-white mb-2 mt-4 pl-4' },
    '== PRACTICE & TECHNICAL TRAINING =='
  ),
  React.createElement(
    CVSection,
    { title: 'SIGNAL PRACTICE' },
    React.createElement(CVEntry, {
      text:
        'Self-directed media art practice focusing on analog video, feedback loops, glitch processes, and live A/V performance.',
    }),
    React.createElement(CVEntry, {
      text:
        'Ongoing research into brainwave states, rhythm, and perception, explored through multi-act performances aligned with Delta, Theta, Alpha, Beta, and Gamma frequency bands.',
    }),
    React.createElement(CVEntry, {
      text:
        'Hands-on experimentation with obsolete broadcast and consumer gear: CRT monitors, composite video mixers, waveform generators, VHS decks, and circuit-bent video effects.',
    })
  ),
  React.createElement(
    CVSection,
    { title: 'TECHNICAL BACKGROUND' },
    React.createElement(CVEntry, {
      text:
        'Professional experience in video production and post-production, including camera work, editing, motion graphics, and delivery for clients and community organizations.',
    }),
    React.createElement(CVEntry, {
      text:
        'Industrial and trades experience as an Electrical Apprentice, informing a material understanding of infrastructure, tolerance, and systems design.',
    }),
    React.createElement(CVEntry, {
      text:
        'Process and quality-focused work in a manufacturing and construction environments, contributing to a methodical, iterative approach to building complex installations.',
    })
  ),

  // SELECTED PROJECTS & INITIATIVES
  React.createElement(
    'h2',
    { className: 'text-lg text-white mb-2 mt-4 pl-4' },
    '== SELECTED PROJECTS & INITIATIVES =='
  ),
  React.createElement(
    CVSection,
    { title: 'ART & INSTALLATION' },
    React.createElement(CVEntry, {
      label: React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'),
      text:
        'Multi-act analog video installation and live A/V performance that treats media signals as stitched-together consciousness. Uses feedback loops, CRT arrays, and layered media to explore surveillance, self-construction, and the boundary between signal and noise.',
    }),
    React.createElement(CVEntry, {
      label: 'Analog Video Lab',
      text:
        'Ongoing studio-based research into passive and active video distortion, dirty mixers, sync disruption, and camera/projector feedback as a visual language.',
    })
  ),
  React.createElement(
    CVSection,
    { title: 'COMMUNITY & PROGRAMMING' },
    React.createElement(CVEntry, {
      label: 'Cereal Box Theatre',
      text:
        'A community-focused screening format inspired by Saturday morning cartoons, pairing animation blocks with a cereal bar. Designed as an accessible entry point into film culture and collective viewing.',
    }),
    React.createElement(CVEntry, {
      text:
        'Emerging involvement in local theatre and arts organizations, contributing skills in video, operations, and community engagement to help rebuild trust and capacities in small-city cultural infrastructure.',
    })
  ),
  React.createElement(
    CVSection,
    { title: 'PROFESSIONAL WORK' },
    React.createElement(CVEntry, {
      text:
        'Creative and technical work in digital marketing and content production, including client storytelling, documentation, and branded video for small businesses and non-profits.',
    })
  ),

  // VISUAL ARCHIVE
  React.createElement(
    'div',
    { className: 'border-t-2 border-green-400/30 my-6' }
  ),
  React.createElement(
    'h2',
    { className: 'text-lg text-white mb-2 pl-4' },
    '== VISUAL ARCHIVE (STILLS) =='
  ),
  React.createElement(
    'p',
    { className: 'mb-2 text-green-400/80 pl-4' },
    '> LOADING CAPTURED FRAMES FROM ANALOG_FEEDBACK_ARCHIVE...'
  ),
  React.createElement(CRTImage, {
    src:
      'https://images.unsplash.com/photo-1554042315-50f753ed8434?q=80&w=1740&auto=format&fit=crop&ixlib-rb-4.0.3',
    alt: 'Glitching CRT screen with distorted colors and scan lines',
  }),
  React.createElement(
    'p',
    { className: 'text-center text-sm text-green-400/70 mb-4 indent-4' },
    'Test pattern from early ', React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), ' feedback experiments.'
  ),
  React.createElement(CRTImage, {
    src:
      'https://images.unsplash.com/photo-1599591436283-15a03e135b0b?q=80&w=1740&auto=format&fit=crop&ixlib-rb-4.0.3',
    alt: 'Array of CRT monitors displaying static and noise',
  }),
  React.createElement(
    'p',
    { className: 'text-center text-sm text-green-400/70 mb-4 indent-4' },
    'Multi-monitor array used as reference for future installation layouts.'
  ),

  // VIDEO
  React.createElement(
    'div',
    { className: 'border-t-2 border-green-400/30 my-6' }
  ),
  React.createElement(
    'h2',
    { className: 'text-lg text-white mb-2 pl-4' },
    '== VISUAL ARCHIVE (VIDEO) =='
  ),
  React.createElement(
    'p',
    { className: 'mb-2 text-green-400/80 pl-4' },
    '> SPOOLING DOCUMENTATION: FEEDBACK_STUDY_01.MP4...'
  ),
  React.createElement(CRTEmbed, {
    videoId: 'PXnPw943y1Y', // keep or replace with your own documentation later
    title: 'Analog Feedback Study Documentation',
  }),
  React.createElement(
    'p',
    { className: 'text-center text-sm text-green-400/70 mb-4 indent-4' },
    'Work-in-progress documentation of live feedback experiments and analog signal mixing.'
  ),

  React.createElement(
    'p',
    { className: 'mt-6 pl-4' },
    '> END OF FILE.',
    React.createElement(BlinkingCursor)
  )
);