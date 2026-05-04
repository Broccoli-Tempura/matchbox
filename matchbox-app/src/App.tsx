import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { SelectExtinguisher } from "./SelectExtinguisher";
import { MatchDetail } from "./MatchDetail";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/select-extinguisher" element={<SelectExtinguisher />} />
        <Route path="/match/:id" element={<MatchDetail />} />
      </Routes>
    </BrowserRouter>
  );
}