import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


const CLOSED = 0;
const OPEN = 180;
const SNAP = 70;

const matches = [
  { id: 1, to: "/match/1" },
  { id: 2, to: "/match/2" },
  { id: 3, to: "/match/3" },
  { id: 4, to: "/match/4" },
  { id: 5, to: "/select-extinguisher" },   // ← our first implemented link
  { id: 6, to: "/match/6" },
  { id: 7, to: "/match/7" },
  { id: 8, to: "/match/8" },
  { id: 9, to: "/match/9" },
];

export const HomeScreen = () => {
  const [y, setY] = useState(CLOSED);
  const [dragging, setDragging] = useState(false);

  const startY = useRef(0);
  const startOffset = useRef(0);

  const onDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
    startY.current = e.clientY;
    startOffset.current = y;
  };

  useEffect(() => {
    if (!dragging) return;

    const move = (e: PointerEvent) => {
      e.preventDefault();
      const delta = e.clientY - startY.current;
      const next = Math.max(CLOSED, Math.min(OPEN, startOffset.current + delta));
      setY(next);
    };

    const up = () => {
      setDragging(false);
      setY((prev) => (prev > SNAP ? OPEN : CLOSED));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [dragging]);

  return (
    <div className="fixed inset-0 bg-[#ffcc00] overflow-hidden">
  
  <main
    className="relative w-full max-w-[402px] mx-auto overflow-y-auto z-10 min-h-[100dvh] pb-20"
  >

  {/* FIXER PFEIL */}
  <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
  style={{
    top: "650px"
  }}
>
    <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center">
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  </div>

      {/* COVER */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[370px]">
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}matchbox-012.png`} 
              className="w-full block" 
              draggable={false} 
        />

            {/* M Logo (größer) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}M.png`} className="w-32" draggable={false} />
            </div>
          </div>
        </div>
      </div>

      {/* DRAWER */}
<div
  onPointerDown={onDown}
  className="absolute left-0 -translate-x-1/2 w-[400px] touch-none z-10"
  style={{
    top: `calc(140px + 220px)`,
    transform: `translateY(${y}px)`,
    transition: dragging ? "none" : "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
  }}
>
  
  {/* Tray */}
  <div className="relative">
    <img src={`${import.meta.env.BASE_URL}matchbox-02.png`} className="w-full block" draggable={false} />

    {/* Matches */}
    <div className="absolute bottom-[50px] left-0 right-0 flex justify-center gap-1">
  {matches.map((match) => (
    <Link
      key={match.id}
      to={match.to}
      className="group relative -mx-[4px]"
    >
      <img
  src={`${import.meta.env.BASE_URL}match.png`}
  draggable={false}
  style={{
    filter: "drop-shadow(-4px 4px 10px rgba(0,0,0,0.5))"
  }}
  className="w-[40px] transition-transform duration-200 active:scale-110 group-hover:scale-110"
/>
    </Link>
  ))}
</div>
  </div>
</div>
    </main>
    </div>
  );
};