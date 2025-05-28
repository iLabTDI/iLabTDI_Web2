import React from "react";
import Particles from "./Particles";
import { CircuitBoard } from "lucide-react";

export default function Services() {
  return (
    <section>
      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
        style={{
          fontFamily: `'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'`,
        }}
      >
        {/* Fondo visual/ilustración */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-full max-w-[1200px] h-[220px] sm:h-[350px] md:h-[600px] pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/40 via-blue-600/30 to-indigo-900/60 blur-[60px] sm:blur-[100px] md:blur-[120px] opacity-80"></div>
        </div>

        <div className="pt-10 pb-8 sm:pt-16 sm:pb-12 md:pt-40 md:pb-20">
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 md:space-y-0">
            {/* Content */}
            <div className="w-full md:w-7/12 lg:w-1/2 order-1 md:order-none text-center md:text-left">
              <h2 className="h2 text-2xl sm:text-3xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
                Servicios de diseño de placas fenolicas (PCB)
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mb-8">
                Ofrecemos servicios de diseño de placas fenolicas (PCB) de alta
                calidad
              </p>
            </div>
            {/* Visual/Ilustración/Animación */}
            <div className="w-full md:w-5/12 lg:w-1/2 flex items-center justify-center">
              <div className="relative py-10 sm:py-20 md:py-24 -mt-2 sm:-mt-12 w-full flex justify-center items-center">
                {/* Partículas decorativas */}
                <Particles
                  className="absolute inset-0 -z-10"
                  quantity={8}
                  staticity={30}
                />
                {/* Icono de Circuit Board */}
                <div className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-34 md:h-34 rounded-2xl bg-slate-900/80 border border-purple-700 shadow-2xl relative">
                  {/* Aura blanca más grande y responsiva */}
                  <div className="absolute inset-0 -inset-2 sm:-inset-4 md:-inset-6 rounded-2xl bg-white opacity-40 blur-[32px] sm:blur-[48px] md:blur-[64px] pointer-events-none"></div>
                  <CircuitBoard className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-slate-200 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
