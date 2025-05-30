import React from "react";
import { useNavigate } from "react-router-dom";
import Particles from "./Particles";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="inicio" // <-- Agrega este id
      className="relative flex flex-col items-center justify-center min-h-[60vh] text-center overflow-hidden -mb-20 pt-0 lg:pt-32"
    >
      {/* Particles background */}
      <Particles className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* Powered by iLabTDI badge */}
      <div className="mb-6">
        <div className="inline-flex relative before:absolute before:inset-0 before:bg-[#a78bfa]/40 before:blur-md">
          <button
            className="btn-sm px-6 py-2 text-slate-300 hover:text-white bg-[#232946]/60 border-2 border-[#a78bfa] rounded-full relative shadow-md group transition duration-150 ease-in-out ring-2 ring-[#a78bfa]/30"
            onClick={() => navigate("/")}
          >
            <span className="relative inline-flex items-center font-bold tracking-widest uppercase">
              Powered by iLabTDI
              <span className="tracking-normal text-[#a78bfa] group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                &rarr;
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-200 mb-6">
          Laboratorio de prototipado
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Donde la innovación cobra vida a través de prototipos funcionales y
          soluciones creativas. Explora nuestros servicios y solicita tu
          prototipo personalizado.
        </p>
        {/* Botones */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <button
            className="btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group font-bold rounded-full shadow-lg text-base px-6 py-2 flex items-center"
            onClick={() => navigate("/servicios")}
          >
            Explorar Servicios
            <span className="text-[#a78bfa] group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
              &rarr;
            </span>
          </button>
          <button
            className="btn-sm text-slate-200 hover:text-white bg-slate-900/25 hover:bg-slate-900/30 transition duration-150 ease-in-out font-bold rounded-full border-2 border-[#5ca9fb] text-[#5ca9fb] hover:bg-[#5ca9fb] hover:text-white shadow-lg text-base px-6 py-2 flex items-center"
            onClick={() => navigate("/solicitar")}
          >
            <svg
              className="shrink-0 fill-slate-300 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
            </svg>
            <span>Solicitar Prototipo</span>
          </button>
        </div>
      </div>
    </section>
  );
}
