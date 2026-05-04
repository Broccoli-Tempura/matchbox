import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { SelectExtinguisher } from "./SelectExtinguisher";
import { MatchDetail } from "./MatchDetail";
import { ARScreen } from "./ARScreen";
import { ARBraun } from "./ARBraun";
import { ARRot } from "./ARRot";
import { ARDreieck } from "./ARDreieck";
import { DetailScreen } from "./DetailScreen";
import { DetailDreieck } from "./DetailDreieck";
import { DetailRot } from "./DetailRot";
import { DetailBraun } from "./DetailBraun";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/select-extinguisher" element={<SelectExtinguisher />} />
        <Route path="/match/:id" element={<MatchDetail />} />
        <Route path="/ARScreen" element={<ARScreen />} />
        <Route path="/ARBraun" element={<ARBraun />} />
        <Route path="/ARRot" element={<ARRot />} />
        <Route path="/ARDreieck" element={<ARDreieck />} />
        <Route path="/DetailScreen" element={<DetailScreen />} />
          <Route path="/DetailBraun" element={<DetailBraun />} />
          <Route path="/DetailRot" element={<DetailRot />} />
          <Route path="/DetailDreieck" element={<DetailDreieck />} />
      </Routes>
    </BrowserRouter>
  );
}