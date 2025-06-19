import React, { useState } from "react";

const imagenes = [
  {
    src: "./ImagesPrototipado/ProtoMat.webp",
    alt: "LPKF ProtoMat S103",
    titulo: "LPKF ProtoMat S103",
    descripcion:
      "Es un trazador de placas de circuito de alta precisión, ideal para prototipos PCB y pequeños lotes. Con una resolución de 0.5μm (0.02 mil), motor de 100,000 RPM y velocidad de desplazamiento de 150 mm/s, garantiza precisión en perforación y desbaste de estructuras finas, especialmente para aplicaciones de RF y microondas.",
  },
  {
    src: "./ImagesPrototipado/Fresadora.webp",
    alt: "Fresadora VF3KM400",
    titulo: "Fresadora VF3KM400",
    descripcion:
      "Es un verdadero Caballo de Batalla. Ideal para evolucionar tu taller de fresadoras convencionales a tecnología CNC. Con la VF3K M400 podrás maquinar piezas de hasta 760 mm de largo, 355 mm de ancho y 400 mm de alto, además de los 120 mm adicionales con los que cuenta el cañón del husillo.",
  },
];

export default function Maquinas() {
  const [modal, setModal] = useState({ open: false, img: null });

  return (
    <section
      id="Galeria"
      aria-labelledby="galeria-titulo"
      className="pt-0 mt-0 pb-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid xl:grid-cols-2 gap-6">
          {imagenes.map((img) => (
            <article
              key={img.titulo}
              className="flex flex-col sm:flex-row bg-white dark:bg-[#232946] shadow-xs rounded-xl overflow-hidden border border-[#394867] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              tabIndex={0}
              aria-label={`Imagen de ${img.titulo}`}
            >
              {/* Imagen */}
              <div className="relative block w-full sm:w-48 md:w-56 shrink-0 h-48 sm:h-auto">
                <img
                  className="absolute object-cover object-center w-full h-full"
                  src={img.src}
                  alt={img.alt ? img.alt : img.titulo}
                  loading="lazy"
                />
                {/* Badge opcional */}
                <span className="absolute top-3 left-3 bg-gradient-to-r from-[#5ca9fb] to-[#6372ff] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Equipo
                </span>
              </div>
              {/* Contenido */}
              <div className="grow p-5 flex flex-col">
                <div className="grow">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {img.titulo}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-[#c7c7c7] mb-4">
                    {img.descripcion.slice(0, 120)}...
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-[#5ca9fb] to-[#6372ff] text-white rounded-full text-sm font-semibold shadow hover:from-[#6372ff] hover:to-[#5ca9fb] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#5ca9fb]"
                    aria-label={`Ver más sobre ${img.titulo}`}
                    aria-controls="galeria-modal"
                    aria-expanded={false}
                    onClick={() => setModal({ open: true, img })}
                  >
                    Ver más &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div
          id="galeria-modal"
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
          aria-labelledby="modal-title"
          onClick={() => setModal({ open: false, img: null })}
        >
          <div
            className="bg-[#232946] border border-[#394867] rounded-2xl shadow-2xl w-full max-w-xs p-4 relative text-white flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-[#232946] text-2xl text-[#6372ff] hover:text-white hover:bg-[#6372ff] font-bold shadow-lg border-2 border-[#6372ff] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#6372ff]/50 z-50"
              aria-label="Cerrar"
              onClick={() => setModal({ open: false, img: null })}
              tabIndex={0}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <img
              src={modal.img.src}
              alt={modal.img.alt ? modal.img.alt : modal.img.titulo}
              className="w-full h-40 object-cover rounded mb-3 border border-[#394867]"
              width={320}
              height={160}
            />
            <h3
              className="text-lg font-bold mb-2 text-white text-center"
              id="modal-title"
            >
              {modal.img.titulo}
            </h3>
            <p className="text-[#c7c7c7] text-sm mb-3 text-center">
              {modal.img.descripcion}
            </p>
            <button
              className="mt-1 px-4 py-2 bg-gradient-to-r from-[#5ca9fb] to-[#6372ff] text-white rounded-full text-sm font-semibold shadow hover:from-[#6372ff] hover:to-[#5ca9fb] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#5ca9fb]"
              onClick={() => setModal({ open: false, img: null })}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
