import React from 'react';

const ModelViewer = 'model-viewer' as unknown as React.ElementType;

export function ARScreen({ onBack }: { onBack: () => void }) {
    return (
        <div className="relative w-full h-screen bg-gray-200">

            {/* --- Zurück-Button --- */}
            <button
                onClick={onBack}
                className="absolute top-4 left-4 z-50 bg-white text-black px-4 py-2 rounded-lg shadow-md font-bold"
            >
                ← Zurück
            </button>

            {/* --- 3D Modell & AR Viewer --- */}
            <ModelViewer
                src="/models/feuerloescher.glb"
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