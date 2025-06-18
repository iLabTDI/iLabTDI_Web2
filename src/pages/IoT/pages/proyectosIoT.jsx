import { Cpu, Wifi, BarChart3, Shield, Zap, Cloud } from "lucide-react"
import prototipo from "../assets/images/proyecto1.png"

function Proyectos() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Red de Sensores IoT",
      description: "Monitoreo en tiempo real de múltiples parámetros ambientales",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Análisis Predictivo",
      description: "Machine Learning para predecir cambios en la calidad del aire",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Alertas Inteligentes",
      description: "Sistema de notificaciones automáticas ante anomalías",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Dashboard en Tiempo Real",
      description: "Visualización interactiva de datos y métricas",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <Cpu className="w-4 h-4 mr-2" />
                Innovación en IoT
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Nuestros
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                  {" "}
                  Proyectos
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Desarrollamos soluciones innovadoras que integran dispositivos conectados para diversas aplicaciones.
                Trabajamos en proyectos que involucran el diseño de redes de sensores inteligentes, la automatización de
                procesos y el análisis en tiempo real de datos IoT.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-3xl transform -rotate-6"></div>
              <img
                src="/placeholder.svg?height=400&width=600&query=IoT sensors monitoring air quality in indoor environment"
                alt="Proyecto IoT"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proyecto Principal */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  Proyecto Destacado
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Sistema de Detección y Predicción de Anomalías en la Calidad del Aire
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La calidad del aire en espacios cerrados es fundamental para la salud y el bienestar. Una mala
                  ventilación puede causar problemas respiratorios y cardiovasculares, además de afectar el rendimiento
                  cognitivo y la toma de decisiones.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Para abordar este problema, el laboratorio está trabajando en la instalación de una red de sensores
                  IoT que monitorea en tiempo real diversos parámetros de calidad del aire. Estos datos se analizarán
                  utilizando técnicas de aprendizaje automático para identificar patrones de contaminación, predecir
                  cambios y ofrecer recomendaciones que mejoren el ambiente interior.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-600 rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-blue-50 to-emerald-50 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-emerald-200 rounded-2xl transform rotate-3"></div>
                  <img
                    src={prototipo}
                    alt="Dashboard del proyecto"
                    className="relative rounded-2xl shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Impacto del Proyecto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Salud Mejorada</h3>
              <p className="text-gray-600">Reducción de problemas respiratorios y cardiovasculares</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mayor Productividad</h3>
              <p className="text-gray-600">Mejora del rendimiento cognitivo y toma de decisiones</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Eficiencia Energética</h3>
              <p className="text-gray-600">Optimización del consumo energético en ventilación</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Proyectos
