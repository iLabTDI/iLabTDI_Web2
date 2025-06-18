import { Award, FileText, Play, Shield, Clock, Database } from "lucide-react"

function Patentes() {
  const patents = [
    {
      title: "Safe - Track Timer",
      registrationNumber: "03-2024-062809240800-01",
      description:
        "Sistema innovador de seguimiento y temporización para aplicaciones de seguridad industrial y personal.",
      features: ["Monitoreo en tiempo real", "Alertas automáticas", "Interfaz intuitiva", "Análisis de datos"],
      videoUrl: "https://www.youtube.com/embed/hUMNHK2uy6Y",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "BITLABTDI",
      registrationNumber: "03-2024-022811165900-01",
      description:
        "Plataforma integral para el desarrollo y gestión de laboratorios de tecnología digital e innovación.",
      features: ["Gestión de recursos", "Control de acceso", "Monitoreo de equipos", "Reportes automáticos"],
      videoUrl: null,
      icon: <Database className="w-8 h-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Propiedad Intelectual
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Patentes y
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}
                  Propiedades Intelectuales
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                En nuestro laboratorio, desarrollamos soluciones innovadoras que integran dispositivos conectados para
                diversas aplicaciones. Desde la creación de prototipos hasta la implementación de plataformas completas,
                nuestro enfoque está en la mejora de la eficiencia, la sostenibilidad y la conectividad.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl transform rotate-6"></div>
              <img
                src="/placeholder.svg?height=400&width=600&query=intellectual property patents and innovation certificates"
                alt="Patentes y Propiedades Intelectuales"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patentes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Patentes Registradas</h2>
            <p className="text-lg text-gray-600">
              Innovaciones protegidas que demuestran nuestro compromiso con la investigación
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      {patent.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{patent.title}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm opacity-90">No. de Registro: {patent.registrationNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-600" />
                      Descripción
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{patent.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Características Principales</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {patent.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Video/Demo */}
                  {patent.videoUrl ? (
                    <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                      <iframe
                        width="100%"
                        height="100%"
                        src={patent.videoUrl}
                        title={`Demostración de ${patent.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Demo próximamente disponible</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impacto de Nuestras Innovaciones</h2>
            <p className="text-lg text-gray-600">Números que reflejan nuestro compromiso con la innovación</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
              <p className="text-gray-600">Patentes Registradas</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <p className="text-gray-600">Proyectos en Desarrollo</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <p className="text-gray-600">Protección Legal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Patentes
