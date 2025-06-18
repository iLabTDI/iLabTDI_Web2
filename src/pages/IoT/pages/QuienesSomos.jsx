import { Target, Users, Shield, Lightbulb, Database, Cog } from "lucide-react"

function QuienesSomos() {
  const objectives = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Implementación de infraestructura IoT",
      description:
        "Desarrollo y despliegue de redes de sensores inteligentes para recolección de datos en tiempo real.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Desarrollo de capacidades analíticas",
      description: "Formación en técnicas avanzadas de análisis de datos y machine learning aplicado a IoT.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad y Privacidad de Datos",
      description: "Implementación de protocolos de seguridad robustos para proteger la información sensible.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Desarrollo de Aplicaciones Innovadoras",
      description: "Creación de soluciones tecnológicas que resuelvan problemas reales de la industria.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Formación de Talento Especializado",
      description: "Capacitación de profesionales en tecnologías emergentes del Internet de las Cosas.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Investigación y Desarrollo",
      description: "Promoción de la investigación aplicada en IoT para generar conocimiento de vanguardia.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                Conoce nuestro equipo
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                ¿Quiénes
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {" "}
                  somos?
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nos enfocamos en fomentar la innovación en el Internet de las Cosas (IoT) mediante un equipo
                interdisciplinario. Ofrecemos talleres y consultorías en desarrollo de dispositivos conectados,
                prototipado, seguridad IoT y estrategias de negocio para proyectos IoT.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-6"></div>
              <img
                src="/placeholder.svg?height=400&width=600&query=modern IoT laboratory with connected devices and sensors"
                alt="Laboratorio IoT"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo General */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Target className="w-4 h-4 mr-2" />
            Nuestro propósito
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Objetivo General</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            El objetivo general del laboratorio de ciencia de datos enfocado en la recolección de datos mediante el
            Internet de las Cosas (IoT) es desarrollar y fortalecer capacidades para comprender, analizar, gestionar,
            utilizar y salvaguardar datos generados por dispositivos IoT, con el fin de impulsar la innovación y la
            excelencia en el campo de la ciencia de datos, contribuyendo así al avance de la sociedad y la resolución de
            problemas complejos en diferentes áreas.
          </p>
        </div>
      </section>

      {/* Objetivos Específicos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Objetivos Específicos</h2>
            <p className="text-lg text-gray-600">Nuestras metas estratégicas para el desarrollo del laboratorio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-xl mb-6">
                    {objective.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuienesSomos
