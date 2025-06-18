import { Cpu, Shield, BarChart3, Cog, ArrowRight } from "lucide-react"

function ServicesSection() {
  const services = [
    {
      title: "Desarrollo IoT",
      description:
        "Diseño y desarrollo de dispositivos conectados inteligentes para diversas aplicaciones industriales y domésticas.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Prototipado rápido", "Conectividad avanzada", "Escalabilidad"],
    },
    {
      title: "Seguridad IoT",
      description:
        "Implementación de protocolos de seguridad robustos para proteger dispositivos y datos en redes IoT.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: ["Encriptación", "Autenticación", "Monitoreo"],
    },
    {
      title: "Análisis de Datos",
      description: "Procesamiento y análisis inteligente de datos recolectados por sensores IoT en tiempo real.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Machine Learning", "Visualización", "Predicciones"],
    },
    {
      title: "Consultoría Técnica",
      description: "Asesoramiento especializado en estrategias de implementación y optimización de proyectos IoT.",
      icon: <Cog className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Estrategia", "Optimización", "Soporte técnico"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Cog className="w-4 h-4 mr-2" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluciones Integrales en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> IoT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios especializados para impulsar tu proyecto IoT desde la conceptualización hasta la
            implementación completa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"></div>
              <div className="relative p-8 lg:p-10 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} text-white rounded-2xl mb-6`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group/btn">
                  Saber más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
