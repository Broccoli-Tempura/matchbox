import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

const ModelViewer = 'model-viewer' as unknown as React.ElementType;

export function ARBraun() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'environment', // back camera on phones
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          await videoRef.current.play();
          setStream(mediaStream);
        }
      } catch (err) {
        console.error("Camera access denied or not available", err);
      }
    }

    startCamera();

    // Cleanup
    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
      <div className="fixed inset-0 flex justify-center overflow-hidden bg-black">
      {/* 1. Live Camera Background */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'scaleX(-1)' }} // optional: mirror front camera if needed
      />

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
              to="/DetailBraun"
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
            src={`${import.meta.env.BASE_URL}models/braun.glb`}
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