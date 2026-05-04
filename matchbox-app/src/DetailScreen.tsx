import React from 'react';
import { Link } from 'react-router-dom';

// Unser bewährter TypeScript-Trick
const ModelViewer = 'model-viewer' as unknown as React.ElementType;

// Diese Seite funktioniert jetzt mit richtigen Routen-Links.
export function DetailScreen() {
    return (
        <div className="fixed inset-0 bg-blue-500 flex justify-center overflow-hidden">
      
      {/* FULL-WIDTH BLUE TOP BAR */}
      <div className="absolute top-0 left-0 right-0 h-[56px] bg-blue-500 z-50 flex items-center px-4 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.25)]">
        {/* Left: Back Button */}
                <Link 
                  to="/select-extinguisher" 
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}arrow.png`}
                    alt="Back"
                    className="w-4 h-9"
                    draggable={false}
                  />
                </Link>
                {/* Spacer */}
                <div className="flex-1"></div>
        
                {/* Right: AR-Icon */}
                <Link
                    to="/ARScreen" 
                    className="hover:opacity-80 transition-opacity"
                >
                <img
                    src={`${import.meta.env.BASE_URL}ar-icon.png`}
                    alt="Info / Search"
                    className="w-18 h-9"
                    draggable={false}
                />
                </Link>
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