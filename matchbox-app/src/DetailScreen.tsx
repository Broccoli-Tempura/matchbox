import React from 'react';
import { Link } from 'react-router-dom';

// Unser bewährter TypeScript-Trick
const ModelViewer = 'model-viewer' as unknown as React.ElementType;

// Diese Seite bekommt zwei Funktionen mit:
// 1. onBack (um zum Startbildschirm zurückzukehren)
// 2. onOpenAR (um die echte AR-Kamera-Ansicht zu starten)
export function DetailScreen({ onBack, onOpenAR }: { onBack: () => void, onOpenAR: () => void }) {
    return (
        <div className="fixed inset-0 bg-blue-500 flex justify-center overflow-hidden">
      
      {/* FULL-WIDTH BLUE TOP BAR */}
      <div className="absolute top-0 left-0 right-0 h-[56px] bg-blue-500 z-50 flex items-center px-4 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.25)]">
        <Link 
          to="/select-extinguisher" 
          className="hover:opacity-80 transition-opacity"
            onClick={onBack}
        >
          <img
            src={`${import.meta.env.BASE_URL}arrow.png`}
            alt="Back"
            className="w-4 h-9"
            draggable={false}
          />
        </Link>
        {/* AR-Button (Das Auge / AR Icon aus deinem Screenshot) */}
                <button onClick={onOpenAR} className="p-2 hover:bg-white/20 rounded-full transition flex items-center font-bold text-xl">
                    AR
                    <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
      </div>

            {/* --- 3D Modell Viewer (Reine 3D-Ansicht, kein AR) --- */}
            <div className="flex-1 w-full relative">
                <ModelViewer
                    src="/models/feuerloescher.glb"
                    camera-controls="true"
                    auto-rotate="true"
                    // WICHTIG: Hier fehlt absichtlich das 'ar' Attribut!
                    // So bleibt es eine reine 3D-Ansicht auf blauem Hintergrund.
                    style={{ width: '100%', height: '100%', backgroundColor: '#6395FA' }}
                >
                    {/* Hier kommen später die <button slot="hotspot-..."> für die gelben Kreise rein! */}
                </ModelViewer>
            </div>

        </div>
    );
}