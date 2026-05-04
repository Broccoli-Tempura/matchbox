import { useState } from "react";
import { Link } from "react-router-dom";

export const SelectExtinguisher = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      to: "/ARDreieck",
      src: `${import.meta.env.BASE_URL}loescher01.png`,
      top: "40%",
      left: "25%",
      width: 120,
      rotate: "-15deg",
    },
    {
      id: 2,
      to: "/ARScreen",
      src: `${import.meta.env.BASE_URL}loescher02.png`,
      top: "70%",
      left: "65%",
      width: 140,
      rotate: "10deg",
    },
    {
      id: 3,
      to: "/ARBraun",
      src: `${import.meta.env.BASE_URL}loescher03.png`,
      top: "35%",
      left: "60%",
      width: 90,
      rotate: "8deg",
    },
    {
      id: 4,
      to: "/ARRot",
      src: `${import.meta.env.BASE_URL}loescher04.png`,
      top: "75%",
      left: "25%",
      width: 80,
      rotate: "-5deg",
    },
  ];

  return (
    <div className="fixed inset-0 bg-[#ffcc00] flex justify-center overflow-hidden">
      
      {/* FULL-WIDTH BLUE TOP BAR */}
      <div className="absolute top-0 left-0 right-0 h-[56px] bg-blue-500 z-50 flex items-center px-4">
        <Link 
          to="/" 
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src={`${import.meta.env.BASE_URL}arrow.png`}
            alt="Back"
            className="w-4 h-9"
            draggable={false}
          />
        </Link>
      </div>

      {/* SCATTERED BACKGROUND MATCHES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Left side matches */}
        <img src={`${import.meta.env.BASE_URL}match 2.png`} className="absolute left-[22%] top-[20%] w-[50px] rotate-[-35deg] opacity-100" draggable={false} />
        <img src={`${import.meta.env.BASE_URL}match 2.png`} className="absolute left-[8%] top-[0%] w-[50px] rotate-[-12deg] opacity-100" draggable={false} />
        
        {/* Right side matches */}
        <img src={`${import.meta.env.BASE_URL}match 2.png`} className="absolute right-[6%] top-[35%] w-[50px] rotate-[45deg] opacity-100" draggable={false} />
        <img src={`${import.meta.env.BASE_URL}match 2.png`} className="absolute right-[26%] top-[60%] w-[50px] rotate-[25deg] opacity-100" draggable={false} />
        
        {/* Optional top/bottom scattered ones */}
        <img src={`${import.meta.env.BASE_URL}match 2.png`} className="absolute left-[15%] top-[68%] w-[50px] rotate-[70deg] opacity-100" draggable={false} />
        <img src={`${import.meta.env.BASE_URL}match 2.png`} className="absolute right-[20%] top-[12%] w-[50px] rotate-[-55deg] opacity-100" draggable={false} />
      </div>

      {/* PHONE FRAME */}
      <div className="relative w-full max-w-[402px] h-[100dvh] overflow-hidden pt-[56px] z-10">

        {/* CENTERED BACKGROUND IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pt-[56px]">
          <img
            src={`${import.meta.env.BASE_URL}inside-box.png`}
            className="max-h-[calc(100dvh-56px-40px)] w-auto object-contain"
            draggable={false}
          />
        </div>

        {/* INTERACTIVE EXTINGUISHERS */}
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            onPointerDown={() => setActiveId(item.id)}
            onPointerUp={() => setActiveId(null)}
            onPointerLeave={() => setActiveId(null)}
            className="absolute z-10"
            style={{
              top: item.top,
              left: item.left,
              transform: `translate(-50%, -50%) rotate(${item.rotate})`,
            }}
          >
            <img
              src={item.src}
              draggable={false}
              className={`
                transition-transform duration-200
                hover:scale-110
                active:scale-95
                ${activeId === item.id ? "scale-110 brightness-110" : ""}
              `}
              style={{
                width: item.width,
                filter: "drop-shadow(-4px 4px 10px rgba(0,0,0,0.4))",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};