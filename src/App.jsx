import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Carrusel_Logos from "./components/Carrusel_Logos";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Carrusel_Logos />
      <Services />
    </div>
  );
}
