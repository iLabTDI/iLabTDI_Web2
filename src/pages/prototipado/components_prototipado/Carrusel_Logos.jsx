import React from "react";
import Logo1 from "../../../assets/Circulo.png";
import Logo2 from "../../../assets/iLab_Carrusel.png"; // Suponiendo que este es el ancho
import Logo3 from "../../../assets/CUCEI.png";
import Logo4 from "../../../assets/Division_Blanco.png";
import Logo5 from "../../../assets/CUCEI_Blanco2.png";

const logos = [
  { src: Logo1, alt: "Logo 1" },
  { src: Logo2, alt: "Logo 2" }, // Logo ancho
  { src: Logo4, alt: "Logo 4" },
  { src: Logo5, alt: "Logo 5", wide: true },
  { src: Logo1, alt: "Logo 6" },
  { src: Logo2, alt: "Logo 7" },
  { src: Logo4, alt: "Logo 9" },
  { src: Logo5, alt: "Logo 10", wide: true },
];

export default function Carrusel_Logos() {
  return (
    <section className="pt-10 lg:pt-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              {/* Primera lista de logos */}
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8">
                {logos.map((logo, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <div className="h-20 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.wide ? 240 : 80}
                        height={80}
                        className={`object-contain h-20 ${
                          logo.wide ? "max-w-[240px]" : "max-w-[80px]"
                        } mx-auto`}
                        draggable={false}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              {/* Segunda lista de logos (duplicada para scroll infinito) */}
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8"
                aria-hidden="true"
              >
                {logos.map((logo, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <div className="h-20 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.wide ? 240 : 80}
                        height={80}
                        className={`object-contain h-20 ${
                          logo.wide ? "max-w-[240px]" : "max-w-[80px]"
                        } mx-auto`}
                        draggable={false}
                      />
                    </div>
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
