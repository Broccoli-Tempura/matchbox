import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { SelectExtinguisher } from "./SelectExtinguisher";
import { MatchDetail } from "./MatchDetail";   // optional for the others

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/select-extinguisher" element={<SelectExtinguisher />} />
      
      {/* Fallback for other matches */}
      <Route path="/match/:id" element={<MatchDetail />} />
    </Routes>
  );
}