import { Link } from "react-router-dom";

export const MatchDetail = () => {
  return (
    <div className="fixed inset-0 bg-[#ffcc00] flex justify-center overflow-hidden">
      
      {/* FULL-WIDTH BLUE TOP BAR */}
      <div className="absolute top-0 left-0 right-0 h-[56px] bg-blue-500 z-50 flex items-center px-4">
        <Link 
          to="/" 
          className="p-2 -ml-2 hover:bg-blue-600 rounded-xl transition-colors"
        >
          <img
            src={`${import.meta.env.BASE_URL}arrow.png`}
            alt="Back"
            className="w-4 h-9"
            draggable={false}
          />
        </Link>
      </div>

      {/* PHONE FRAME */}
      <div className="relative w-full max-w-[402px] h-[100dvh] overflow-hidden pt-[56px] z-10">

        {/* CENTERED BACKGROUND IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pt-[56px]">
          <img
            src={`${import.meta.env.BASE_URL}inside-box.png`}
            className="max-h-[calc(100dvh-56px-80px)] w-auto object-contain"
            draggable={false}
          />
        </div>

        {/* COMING SOON TEXT BOX */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pt-[56px]">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-[280px] text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Coming Soon
            </h2>
            <p className="text-gray-600">
              This category is under development.<br />
              More firemen stuff coming soon!
            </p>
          </div>
        </div>

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
    </div>
  );
};