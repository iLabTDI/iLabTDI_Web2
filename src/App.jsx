import React from "react";
import { Routes, Route } from "react-router-dom";
import CardsMain from "./components/CardsMain";
import MainPrototipado from "./pages/prototipado/MainPrototipado";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CardsMain />} />
      <Route path="/prototipado" element={<MainPrototipado />} />
      {/* Otras rutas */}
    </Routes>
  );
}
