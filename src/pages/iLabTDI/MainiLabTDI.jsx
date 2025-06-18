import React from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/iLabTDI.PNG";
import Particles from "../prototipado/components_prototipado/Particles";

export default function MainiLabTDI() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#18122B] via-[#232946] to-[#5ca9fb] relative overflow-hidden">
      {/* Partículas animadas de fondo */}
      <Particles className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* Glow decorativo superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-[#a78bfa]/30 blur-2xl rounded-full z-0" />
      {/* Glow decorativo inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-[#5ca9fb]/20 blur-2xl rounded-full z-0" />

      <div className="relative z-10 text-center px-6 py-10 bg-[#181c2f]/70 rounded-2xl shadow-2xl max-w-[90vw] w-full sm:w-[600px] backdrop-blur-md overflow-hidden border border-[#a78bfa]/30">
        <img
          src={LOGO}
          alt="iLabTDI Logo"
          className="w-32 sm:w-40 mx-auto mb-8 drop-shadow-[0_0_10px_rgba(167,139,250,0.7)] animate-pulse"
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 uppercase tracking-wider drop-shadow">
          Sitio WEB en construcción
        </h1>
        <p className="text-base sm:text-lg text-slate-200 mb-8 font-light leading-relaxed">
          Estamos trabajando para traerte una nueva experiencia en iLabTDI.
          <br />
          Próximamente disponible.
        </p>
        {/* Barra de progreso animada */}
        <div className="w-full h-2 bg-white/20 rounded mb-6 overflow-hidden">
          <div className="h-full rounded bg-gradient-to-r from-[#a78bfa] via-[#5ca9fb] to-[#232946] animate-progress"></div>
        </div>
        {/* Iconos animados */}
        <div className="flex justify-center gap-6 mt-6">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 animate-float1 text-2xl">
            <span className="animate-spin-slow">⚙️</span>
          </span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 animate-float2 text-2xl">
            🔨
          </span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 animate-float3 text-2xl">
            🔧
          </span>
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 animate-float4 text-2xl">
            🚧
          </span>
        </div>
        {/* Botón para regresar */}
        <button
          className="mt-10 px-6 py-2 rounded-full bg-gradient-to-r from-[#5ca9fb] to-[#a78bfa] text-white font-bold shadow-lg hover:from-[#a78bfa] hover:to-[#5ca9fb] transition"
          onClick={() => navigate("/")}
        >
          Regresar al Inicio
        </button>
      </div>
    </div>
  );
}
