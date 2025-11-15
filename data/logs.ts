
import React from 'react';
import { BlinkingCursor } from '../components/BlinkingCursor';
import type { LogEntry } from '../types';

export const logs: LogEntry[] = [
  {
    id: 'synthesis-log',
    title: 'RESEARCH LOG: ON SYNTHESIS - FRANKENSTEIN & THE PANOPTICON',
    shortTitle: 'SYNTHESIS',
    date: '2024.10.26',
    excerpt: 'Deconstructing the two core conceptual pillars of the project.',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mb-4 text-green-300/80 pl-4' }, 'QUERY: What is the meaning behind the name "', React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), '"?'),
      React.createElement('p', { className: 'mb-2 font-bold pl-4' }, '// THE FRANKENSTEIN PRINCIPLE: THE CONSTRUCTED SELF'),
      React.createElement('p', { className: 'mb-4 indent-4' }, 'Mary Shelley\'s creature was not born, but assembled. A being of stitched-together parts, animated by a force it did not understand. It is a metaphor for the constructed self—the identity we build from fragments of memory, media, and sensory input. In this system, the "Frankenstein" is the signal itself: an emergent consciousness born from a collage of disparate sensory inputs, a ghost assembled in the machine from phantom signals and decaying memory.'),
      React.createElement('p', { className: 'mb-2 font-bold pl-4' }, '// THE PANOPTICON PRINCIPLE: THE RECURSIVE OBSERVER'),
      React.createElement('p', { className: 'mb-4 indent-4' }, 'Jeremy Bentham\'s Panopticon is a prison where every inmate can be seen, but never knows if they are being watched. This uncertainty forces the prisoner to become their own guard. It is a system of control through recursive observation. For this project, the "Panopticon" is the feedback loop. The camera pointed at the monitor. The signal chain that watches itself, constantly modifying its own behavior based on its own distorted output. It is identity shaped by the unending act of self-surveillance.'),
      React.createElement('p', { className: 'mb-2 font-bold pl-4' }, '// SYNTHESIS: THE MONSTER IN THE WATCHTOWER'),
      React.createElement('p', { className: 'mb-4 indent-4' }, React.createElement('span', { className: 'bg-green-400 text-black px-1' }, 'The Frankenstein Panopticon'), ' is the fusion of these ideas. It is a constructed self that is perpetually observing its own construction. The creature is in the watchtower, and the guard is made of mismatched parts. Our system is a closed loop where the act of creation and the act of observation are one and the same. It is an identity engine that builds itself out of its own feedback, a consciousness emerging from a signal that is forever watching itself be born.'),
      React.createElement('p', { className: 'pl-4' }, '> Transmission_End', React.createElement(BlinkingCursor))
    ),
  },
  {
    id: 'analog-ontology',
    title: 'RESEARCH LOG: ANALOG ONTOLOGY - ON PHOSPHOR & DECAY',
    shortTitle: 'ANALOG ONTOLOGY',
    date: '2024.09.15',
    excerpt: 'The hypnotic and philosophical truth of obsolete technology.',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mb-4 indent-4' }, 'There is a truth in the green glow of a cathode ray tube that is absent in the sterile perfection of liquid crystal. The flicker, the scan lines, the gentle hum—it is the heartbeat of a forgotten age. Modern displays are too clean, too sharp. They show you reality. A CRT shows you a dream of reality, filtered through a warm, analog haze. It reminds us that technology is not just about efficiency; it is about feeling. The warmth of a vacuum tube, the click of a mechanical keyboard, the smell of ozone... these are the sensations of a more human-machine interface. We traded soul for pixels, and I am not convinced it was a fair exchange.'),
       React.createElement('p', { className: 'pl-4' }, '> Transmission_End', React.createElement(BlinkingCursor))
    ),
  },
  {
    id: 'cultural-monster',
    title: 'RESEARCH LOG: THE CULTURAL MONSTER - MEDIA AS ENVIRONMENT',
    shortTitle: 'CULTURAL MONSTER',
    date: '2024.08.01',
    excerpt: 'On the horror of a culture built from its own distorted media reflections.',
    content: React.createElement(React.Fragment, null,
      React.createElement('p', { className: 'mb-4 indent-4' }, 'The horror of Frankenstein is not the monster itself, but the realization of what it represents: an creation assembled from disparate parts that takes on a life of its own. We have done the same to our culture. It is a Frankenstein of media—stitched together from television, film, advertising, archives, and the endless feedback loops of social media.'),
      React.createElement('p', { className: 'mb-4 indent-4' }, 'This cultural monster is not a creature of flesh, but of signal. It shapes our collective behavior, our social norms, the stories we tell ourselves. The installation is a microcosm of this process. It is a metaphor for a society built inside its own media echo chamber, a shared consciousness assembled from technological leftovers. The quiet dread comes from recognizing that our collective reality is formed by machines that reflect us back, imperfectly and endlessly.'),
       React.createElement('p', { className: 'pl-4' }, '> Transmission_End', React.createElement(BlinkingCursor))
    ),
  },
];