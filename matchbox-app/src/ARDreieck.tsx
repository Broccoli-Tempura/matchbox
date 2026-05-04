import React from 'react';
import { Link } from 'react-router-dom';
import '@google/model-viewer'; // HIER WIEDER HINZUGEFÜGT!

const ModelViewer = 'model-viewer' as unknown as React.ElementType;

// Diese Seite funktioniert jetzt mit richtigen Routen-Links.
export function ARDreieck() {
  return (
      <div className="fixed inset-0 bg-[#ffcc00] flex justify-center overflow-hidden">

        {/* FULL-WIDTH BLUE TOP BAR */}
        <div className="absolute top-0 left-0 right-0 h-[56px] bg-blue-500 z-50 flex items-center px-4">
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

          {/* Right: Looking Glass Icon */}
          <Link
              to="/DetailDreieck"
              className="hover:opacity-80 transition-opacity"
          >
            <img
                src={`${import.meta.env.BASE_URL}lookingGlass.png`}
                alt="Info / Search"
                className="w-18 h-9"
                draggable={false}
            />
          </Link>
        </div>

        {/* --- 3D Modell & AR Viewer --- */}
        <ModelViewer
            // HIER IST WIEDER DER RICHTIGE PFAD:
            src={`${import.meta.env.BASE_URL}models/dreieck.glb`}
            ar="true"
            ar-modes="webxr scene-viewer"
            camera-controls="true"
            auto-rotate="true"
            style={{ width: '100%', height: '100%' }}
        >
          {/* Dieser Button triggert den AR-Modus auf dem Smartphone */}
          <button
              slot="ar-button"
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg"
          >
            In AR ansehen
          </button>
        </ModelViewer>

      </div>
  );
}