
import React, { useState } from 'react';

const playlists = [
  { name: 'Δ_DELTA/SUBCONSCIOUS_DRIFT/', id: '7vtFJTMmHK8XNm246xNtxE' },
  { name: 'Θ_THETA/TWILIGHT_PERCEPTION/', id: '5STfLTQTZFnbOQw0Gsiwsx' },
  { name: 'Α_ALPHA/WAKING_TRANCE/', id: '3xLd48uWeKept74WLpiHfo' },
  { name: 'Β_BETA/FOCUSED_ENGAGEMENT/', id: '2pK9nwQCJ1Ciz6Yshz7yBS' },
  { name: 'Γ_GAMMA/PEAK_COGNITION/', id: '1hGsjTdHE7TMrnBB6QAdu8' },
];

const SneakyLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-green-400/50 hover:text-yellow-400 hover:decoration-yellow-400 transition-colors duration-200">
        {children}
    </a>
);

const PlaylistName: React.FC<{name: string}> = ({name}) => {
    const parts = name.split('/');
    if (parts.length < 2) return <>{name}</>;

    const [firstPart, secondPart] = parts;
    const keywordMatch = firstPart.match(/^(Δ|Θ|Α|Β|Γ)_(DELTA|THETA|ALPHA|BETA|GAMMA)$/);
    
    if(keywordMatch) {
        const [, symbol, keyword] = keywordMatch;
        return (
            <>
                {symbol}_<strong className="font-bold">{keyword}</strong>/{secondPart}/
            </>
        )
    }
    return <>{name}</>;
}


export const RightSidebar: React.FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(playlists[0].id);

  const handlePlaylistClick = (id: string) => {
    setSelectedPlaylist(currentId => (currentId === id ? null : id));
  };

  return (
    <div
      className="w-full border-2 border-green-400/30 bg-black/20 p-4 flex flex-col h-full"
      style={{
        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9Jzd0b25lLXRleHR1cmUnIHg9JzAnIHk9JzAnPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjAyIDAuMScgbnVtT2N0YXZlcz0nMycgc3RpdGNoVGlsZXM9J3N0aXRjaCcgLz48ZmVDb2xvck1hdHJpeCB0eXBlPSdtYXRyaXgnIHZhbHVlcz0nMCAwIDAgMCAwLjEgMCAwIDAgMCAwLjcyIDAgMCAwIDAgMC41IDAgMCAwIDAuMiAwJyAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCNzdG9uZS1leHR1cmUpJyAvPjwvc3ZnPg==")`,
      }}
    >
      <div className="flex-grow min-h-0 overflow-y-auto">
        <div className="border-b-2 border-green-400/30 pb-2 mb-2">
            <h3 className="text-2xl text-center font-bold uppercase text-green-400">
                == <a href="https://en.wikipedia.org/wiki/Felicific_calculus" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-200 underline decoration-green-400/50 hover:decoration-yellow-300">
                    FELICIFIC_CALCULATOR
                </a> ==
            </h3>
        </div>

        <div className="pb-3 mb-3">
          <p className="text-lg uppercase text-green-400/70 mb-1">
            <span className="hidden md:inline">
                &gt; SONIC{' '}
                <SneakyLink href="https://en.wikipedia.org/wiki/Subcarrier">SUBCARRIER</SneakyLink>{' '}
                <SneakyLink href="https://en.wikipedia.org/wiki/Sa%E1%B9%83s%C4%81ra">SAMSARIC</SneakyLink>{' '}
                <SneakyLink href="https://en.wikipedia.org/wiki/Schema_(psychology)">SCHEMA</SneakyLink>{' '}
                <SneakyLink href="https://en.wikipedia.org/wiki/Schematic">SCHEMATICS</SneakyLink>
            </span>
            <span className="md:hidden">
                &gt; SONIC_SUBCARRIER_SAMSARIC_SCHEMA_SCHEMATICS/
            </span>
          </p>
          <div className="text-base text-green-400/80 flex justify-center">
            <div className="w-full max-w-sm">
                {playlists.map((playlist) => (
                  <div key={playlist.id} className="mb-1">
                    <button
                      onClick={() => handlePlaylistClick(playlist.id)}
                      className={`block w-full text-left hover:text-yellow-400 transition-colors duration-200 ${selectedPlaylist === playlist.id ? 'text-yellow-400' : ''}`}
                    >
                      {selectedPlaylist === playlist.id ? '▼ ' : '>> '}<PlaylistName name={playlist.name} />{selectedPlaylist === playlist.id ? ' ▼' : ''}
                    </button>
                    {selectedPlaylist === playlist.id && (
                      <div className="mt-2 mb-2 border-2 border-yellow-400 p-1 bg-black/50">
                        <iframe
                          title="Spotify Playlist Player"
                          src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          style={{ borderRadius: '0px' }}
                        ></iframe>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
       <div className="border-t-2 border-green-400/30 mt-auto"></div>
    </div>
  );
};
