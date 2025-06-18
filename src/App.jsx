import React from "react";
import { Routes, Route } from "react-router-dom";
import CardsMain from "./components/CardsMain";
import MainPrototipado from "./pages/prototipado/MainPrototipado";
import MainiLabTDI from "./pages/iLabTDI/MainiLabTDI";
import IoTMain from "./pages/IoT/IoTMain";
import HomeIoT from "./pages/IoT/pages/HomeIoT";
import QuienesSomos from "./pages/IoT/pages/QuienesSomos";
import ProyectosIoT from "./pages/IoT/pages/proyectosIoT";
import Patentes from "./pages/IoT/pages/Patentes";
import Titulados from "./pages/IoT/pages/Titulados";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CardsMain />} />
      <Route path="/Prototipado" element={<MainPrototipado />} />
      <Route path="/iLabTDI" element={<MainiLabTDI />} />
      <Route path="/laboratorio-iot" element={<IoTMain />}>
        <Route index element={<HomeIoT />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="proyectos" element={<ProyectosIoT />} />
        <Route path="patentes" element={<Patentes />} />
        <Route path="titulados" element={<Titulados />} />
      </Route>
    </Routes>
  );
}
