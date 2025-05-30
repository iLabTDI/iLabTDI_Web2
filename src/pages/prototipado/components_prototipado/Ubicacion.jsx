import React from "react";
import { MapPin } from "lucide-react";
import Particles from "./Particles";

export default function Ubicacion() {
  return (
    <section
      id="Ubicacion"
      className="relative w-full shadow-2xl p-0 bg-transparent overflow-hidden"
    >
      {/* Glow decor top right */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#a78bfa]/20 rounded-full blur-3xl pointer-events-none z-0"></div>
      {/* Glow decor bottom left */}
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#5ca9fb]/30 rounded-full blur-3xl pointer-events-none z-0"></div>
      {/* Glow ring center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-[#5ca9fb]/10 rounded-full blur-2xl pointer-events-none z-0"></div>
      <Particles className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
      <div className="relative z-10 w-[95%] sm:w-[80%] md:w-[60%] mx-auto">
        <div className="flex flex-col items-center gap-2 pb-3">
          <MapPin className="text-[#5ca9fb]" size={24} />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-center leading-tight">
            Ubicación del Laboratorio
          </h3>
        </div>
        <div className="pb-6">
          <div className="overflow-hidden border-2 border-[#394867] shadow-lg bg-[#181c2f]/80 backdrop-blur rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.98179114649093!2d-103.32598147307962!3d20.656646015319456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2253cd9b393%3A0x7d5092d7de6fedef!2sM%C3%B3dulo%20N%2C%20Blvd.%20Gral.%20Marcelino%20Garc%C3%ADa%20Barrag%C3%A1n%2C%20Ol%C3%ADmpica%2C%2044840%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1748551667482!5m2!1ses!2smx"
              width="100%"
              height="250"
              style={{ border: 0, background: "transparent" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px] sm:h-[350px]"
              title="Ubicación del Laboratorio"
            ></iframe>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-slate-200 text-base sm:text-lg flex items-center gap-2 bg-[#232946]/60 px-4 py-3 rounded-md shadow-inner">
              <MapPin size={18} className="text-[#5ca9fb]" />
              Blvd. Gral. Marcelino García Barragán, Olímpica, 44840
              Guadalajara, Jal.
            </span>
            <a
              href="https://maps.google.com/?q=Blvd. Gral. Marcelino García Barragán, Olímpica, 44840 Guadalajara, Jal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 sm:mt-0 px-4 py-2 rounded-full bg-[#5ca9fb]/10 text-[#5ca9fb] font-semibold hover:bg-[#5ca9fb]/20 transition text-center"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
