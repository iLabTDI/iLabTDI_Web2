"use client"

// Importar todas las imágenes como variables
const jsLogo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/js-i2OK64uudDg54e5JH8IMV8qfRDRNyZ.png"
const pythonLogo =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Python_logo_01-UbHaLWGQLIymOkBUjpIk4TLLoxMM4K.webp"
const githubLogo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/github-ssGvna3tdXwuNS0E2ZWhArPhpH3t6f.png"
const htmlLogo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/html-5-bOudbaig2I3aq51AWAeZpCwQiCL1ak.png"
const reactLogo = "https://blobs.vusercontent.net/blob/react-B2LUgu9aqjIj3I1OcL5cSbb7VITi2T.svg"
const cssLogo = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/css-3-UvdmhpWocDS7nCslcOBgqrhFZbocsA.png"

const technologies = [
  { src: jsLogo, alt: "JavaScript", name: "JavaScript" },
  { src: pythonLogo, alt: "Python", name: "Python" },
  { src: reactLogo, alt: "React", name: "React" },
  { src: htmlLogo, alt: "HTML5", name: "HTML5" },
  { src: cssLogo, alt: "CSS3", name: "CSS3" },
  { src: githubLogo, alt: "GitHub", name: "GitHub" },
  { src: jsLogo, alt: "JavaScript", name: "JavaScript" },
  { src: pythonLogo, alt: "Python", name: "Python" },
  { src: reactLogo, alt: "React", name: "React" },
]

export default function TechIcons() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Stack Tecnológico
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tecnologías que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {" "}
              Utilizamos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas modernas y potentes que nos permiten desarrollar soluciones innovadoras en IoT
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="py-8 md:py-12">
            <div className="overflow-hidden">
              <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                {/* Primera lista de logos */}
                <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8">
                  {technologies.map((tech, index) => (
                    <li key={index} className="group">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="relative">
                          {/* Glow effect on hover */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>

                          <img
                            src={tech.src || "/placeholder.svg"}
                            alt={tech.alt}
                            className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                            draggable={false}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Segunda lista de logos (duplicada para scroll infinito) */}
                <ul
                  className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8"
                  aria-hidden="true"
                >
                  {technologies.map((tech, index) => (
                    <li key={index} className="group">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="relative">
                          {/* Glow effect on hover */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>

                          <img
                            src={tech.src || "/placeholder.svg"}
                            alt={tech.alt}
                            className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                            draggable={false}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">6+</div>
              <div className="text-sm text-gray-600">Tecnologías</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Modernas</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Desarrollo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 1rem));
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
