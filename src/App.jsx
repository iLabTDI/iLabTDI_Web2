import React from "react";
import { Routes, Route } from "react-router-dom";
import CardsMain from "./components/CardsMain";
import MainPrototipado from "./pages/prototipado/MainPrototipado";
import MainiLabTDI from "./pages/iLabTDI/MainiLabTDI";
import IoTMain from "./pages/IoT/IoTMain";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CardsMain />} />
      <Route path="/Prototipado" element={<MainPrototipado />} />
      <Route path="/iLabTDI" element={<MainiLabTDI />} />
      <Route path="/IoT" element={<IoTMain />} />
      {/* Otras rutas */}
    </Routes>
  );
}
