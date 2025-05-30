import React from "react";
import NavBar from "./components_prototipado/ui/NavBar";
import Hero from "./components_prototipado/Hero";
import Carrusel_Logos from "./components_prototipado/Carrusel_Logos";
import Services from "./components_prototipado/Services";
import Maquinas from "./components_prototipado/Maquinas";
import Solicitar from "./components_prototipado/Solicitar";
import Ubicacion from "./components_prototipado/Ubicacion";
import Footer from "./components_prototipado/ui/Footer";

function MainPrototipado() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Carrusel_Logos />
      <Services />
      <Maquinas />
      <Solicitar />
      <Ubicacion />
      <Footer />
    </div>
  );
}

export default MainPrototipado;
