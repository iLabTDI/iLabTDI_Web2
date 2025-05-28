import React from "react";
import Logo1 from "../assets/Circulo.png";

const logos = [
  { src: Logo1, alt: "Logo 1" },
  { src: Logo1, alt: "Logo 2" },
  { src: Logo1, alt: "Logo 3" },
  { src: Logo1, alt: "Logo 4" },
  { src: Logo1, alt: "Logo 5" },
  { src: Logo1, alt: "Logo 6" },
  { src: Logo1, alt: "Logo 7" },
  { src: Logo1, alt: "Logo 8" },
  { src: Logo1, alt: "Logo 9" },
];

export default function Carrusel_Logos() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-2 sm:px-6">
        <div className="py-8 sm:py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              {/* Carrusel responsivo: logos más pequeños y menos espacio en móvil */}
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4 sm:[&_li]:mx-8">
                {[...logos, ...logos].map((logo, index) => (
                  <li key={index}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      width={40}
                      height={40}
                      className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
                      draggable={false}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
