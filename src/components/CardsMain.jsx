import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useMousePosition from "./useMousePosition";
import videoFondo from "../assets/Fondo_video.mp4";

const cards = [
  {
    img: "/ImagesHome/Logo_blanco_con_letras.PNG",
    to: "/home=iLabTDI",
    alt: "Logo iLabTDI",
    title: "iLabTDI",
    description: "",
  },
  {
    img: "/ImagesHome/Prototyping_lab_Letras.PNG",
    to: "/prototipado",
    alt: "Prototyping Lab",
    title: "Prototyping Lab",
    description: "",
  },
  {
    img: "/ImagesHome/IoT_Blanco_con_letras.PNG",
    to: "/laboratorio-iot",
    alt: "DataHub IoT",
    title: "DataHub IoT",
    description: "",
  },
];

export default function CardsMain() {
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const mouse = useMousePosition();

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        id="video-fondo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoFondo} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa extra oscura con baja opacidad */}
      <div className="absolute inset-0 bg-[#181c2f]/60 z-0 pointer-events-none" />

      {/* Cards */}
      <div className="container-cards relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl py-10 px-4">
        {cards.map((card, idx) => {
          // Calcula la posición relativa del mouse respecto a cada card
          let mouseX = 0,
            mouseY = 0;
          const ref = cardRefs[idx];
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            mouseX = mouse.x - rect.left;
            mouseY = mouse.y - rect.top;
          }
          return (
            <Link
              to={card.to}
              key={idx}
              ref={ref}
              className="logo group relative flex flex-col items-center justify-center bg-[#232946]/80 border border-[#a78bfa]/30 rounded-2xl shadow-xl p-6 sm:p-8 transition-transform duration-300 overflow-hidden"
              tabIndex={0}
              style={{
                "--mouse-x": `${mouseX}px`,
                "--mouse-y": `${mouseY}px`,
              }}
            >
              {/* Efecto spotlight */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mouse-x, 50px) var(--mouse-y, 50px), rgba(167,139,250,0.15), transparent 60%)",
                  zIndex: 1,
                }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={card.img}
                  className="logo-madre w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain mb-3 sm:mb-4"
                  alt={card.alt}
                  draggable={false}
                />
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {card.title}
                </h1>
                <p className="text-slate-300 text-center text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
