import { useState, useRef, useEffect } from "react";


const CLOSED = 0;
const OPEN = 180;
const SNAP = 70;

const matches = [
  { id: 1, href: "/link-1" },
  { id: 2, href: "/link-2" },
  { id: 3, href: "/link-3" },
  { id: 4, href: "/link-4" },
  { id: 5, href: "/link-5" },
  { id: 6, href: "/link-6" },
  { id: 7, href: "/link-7" },
  { id: 8, href: "/link-8" },
  { id: 9, href: "/link-9" },
  { id: 10, href: "/link-10" },
];

export const HomeScreen = () => {
  const [y, setY] = useState(CLOSED);
  const [dragging, setDragging] = useState(false);

  const startY = useRef(0);
  const startOffset = useRef(0);

  const onDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    setDragging(true);
    startY.current = e.clientY;
    startOffset.current = y;
  };

  useEffect(() => {
    if (!dragging) return;

    const move = (e: PointerEvent) => {
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
    <main className="relative w-full max-w-[402px] h-screen mx-auto bg-[#ffcc00] overflow-hidden">

      {/* 🔻 COVER */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="relative">
          <img src="/matchbox-012.png" className="w-full" draggable={false} />

          {/* M Logo (größer) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/M.png" className="w-32" draggable={false} />
          </div>
        </div>
      </div>

      {/* 🔻 DRAWER */}
<div
  onPointerDown={onDown}
  className="absolute left-0 right-0"
  style={{
    top: `calc(100% - 585px)`,
    transform: `translateY(${y}px)`,
    transition: dragging ? "none" : "transform 0.35s cubic-bezier(.34,1.56,.64,1)",
  }}
>
  {/* Pfeil */}
  <div className="flex justify-center mb-2 relative z-30">
    <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
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
  

  {/* Tray */}
  <div className="relative">
    <img src="/matchbox-02.png" className="w-full" draggable={false} />

    {/* Matches */}
    <div className="absolute bottom-[50px] left-0 right-0 flex justify-center">
  {matches.map((match) => (
    <a
      key={match.id}
      href={match.href}
      className="group relative -mx-[4px]"
    >
      <img
  src="/match.png"
  draggable={false}
  style={{
    filter: "drop-shadow(-4px 4px 10px rgba(0,0,0,0.5))"
  }}
  className="w-[40px] transition-transform duration-200 group-hover:scale-110"
/>
    </a>
  ))}
</div>
  </div>
</div>
    </main>
  );
};