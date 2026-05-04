import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@google/model-viewer';

const ModelViewer = 'model-viewer' as unknown as React.ElementType;

export function DetailBraun() {
  // Dieser State speichert, welcher Info-Punkt gerade geöffnet ist (null = keiner)
  const [activeInfo, setActiveInfo] = useState<number | null>(null);

  // Hier speichern wir die Daten für alle 4 Info-Fenster aus deinem Bild
    const hotspots = [
        {
            id: 1,
            // Deine exakten Koordinaten für Punkt 1:
            position: "-0.04 0.24 0.07",
            content: (
                <p>
                    <strong>Info:</strong><br />
                    Baujahr des Feuerlöschers:<br />
                    1929
                </p>
            )
        },
        {
            id: 2,
            // Deine exakten Koordinaten für Punkt 2:
            position: "0.10 0.41 0.06",
            content: (
                <div className="space-y-2">
                    <p><strong>Einfache Handhabung:</strong><br />
                        Henkel um den Feuerlöscher zu tragen</p>
                </div>
            )
        }
    ];

  return (
      <div className="fixed inset-0 bg-blue-500 flex flex-col overflow-hidden">

        {/* FULL-WIDTH BLUE TOP BAR */}
        <div className="absolute top-0 left-0 right-0 h-[56px] bg-blue-500 z-50 flex items-center px-4 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.25)]">
          <Link to="/select-extinguisher" className="hover:opacity-80 transition-opacity">
            <img src={`${import.meta.env.BASE_URL}arrow.png`} alt="Back" className="w-4 h-9" draggable={false} />
          </Link>
          <div className="flex-1"></div>
          <Link to="/ARBraun" className="hover:opacity-80 transition-opacity">
            <img src={`${import.meta.env.BASE_URL}ar-icon.png`} alt="AR Mode" className="w-18 h-9" draggable={false} />
          </Link>
        </div>

        {/* --- 3D Modell Viewer --- */}
        <div
            className="flex-1 w-full relative pt-[56px]"
            // Wenn man irgendwo auf den Hintergrund klickt, schließt sich das Popup
            onClick={() => setActiveInfo(null)}
        >
          <ModelViewer
              src={`${import.meta.env.BASE_URL}models/braun.glb`}
              camera-controls="true"
              auto-rotate="true"
              style={{ width: '100%', height: '100%', backgroundColor: '#6395FA' }}
          >
            {/* Generierung der pulsierenden gelben Kreise */}
            {hotspots.map((spot) => (
                <button
                    key={spot.id}
                    slot={`hotspot-${spot.id}`}
                    data-position={spot.position}
                    data-normal="0 0 1"
                    onClick={(e) => {
                      e.stopPropagation(); // Verhindert, dass der Klick ans Fenster weitergeht und es direkt wieder schließt
                      setActiveInfo(spot.id);
                    }}
                    // Hier ist der Tailwind-Code für die gelben, schwach blinkenden (animate-pulse) Ringe
                    className="w-14 h-14 rounded-full border-[3px] border-[#FFCC00] bg-[#FFCC00]/20 animate-pulse cursor-pointer shadow-[0_0_15px_rgba(255,204,0,0.6)]"
                />
            ))}
          </ModelViewer>
        </div>

        {/* --- Info Popup Fenster --- */}
        {activeInfo !== null && (
            <div
                className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none px-6"
                style={{ top: '56px' }} // Startet unterhalb der Navigationsleiste
            >
              {/* Das eigentliche weiße Fenster */}
              <div
                  className="bg-white rounded-xl p-6 text-black text-sm shadow-2xl w-full max-w-sm pointer-events-auto border border-gray-100"
                  onClick={(e) => e.stopPropagation()} // Verhindert das Schließen, wenn man INS Fenster klickt
              >
                {hotspots.find(h => h.id === activeInfo)?.content}
              </div>
            </div>
        )}

      </div>
  );
}