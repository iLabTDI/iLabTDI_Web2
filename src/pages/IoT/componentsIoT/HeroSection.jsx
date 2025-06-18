import {
  ArrowRight,
  Zap,
  Wifi,
  BarChart3,
  Shield,
  Cpu,
  Database,
  Play,
} from "lucide-react";

function HeroSection() {
  const floatingCards = [
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Conectividad",
      subtitle: "24/7 Online",
      color: "from-blue-500 to-cyan-500",
      position: "top-8 left-8",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Análisis",
      subtitle: "Tiempo Real",
      color: "from-emerald-500 to-teal-500",
      position: "bottom-8 right-8",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Seguridad",
      subtitle: "Protegido",
      color: "from-purple-500 to-pink-500",
      position: "top-1/2 right-4",
    },
  ];

  const stats = [
    {
      number: "4+",
      label: "Titulados",
      icon: <Database className="w-5 h-5" />,
    },
    { number: "2", label: "Patentes", icon: <Shield className="w-5 h-5" /> },
    { number: "5+", label: "Proyectos", icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <section
      id="hero-iot"
      className="relative min-h-screen flex items-center py-20 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
              <Zap className="w-4 h-4" />
              <span>Innovación en IoT</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Conectando el
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
                  futuro
                </span>
                <span className="text-4xl lg:text-5xl text-gray-700">
                  un dispositivo a la vez
                </span>
              </h1>
            </div>

            <div className="space-y-4 text-xl text-gray-600 leading-relaxed max-w-2xl">
              <p>
                Nuevo laboratorio de Internet de las Cosas manejado por{" "}
                <span className="font-semibold text-blue-600">iLabTDI</span>.
              </p>
              <p>
                Descubre y conoce todos los servicios que manejamos para
                impulsar la innovación tecnológica.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
                <span>Explorar Servicios</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Ver Proyectos</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Card */}
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-6 shadow-2xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Laboratorio IoT
                    </h3>
                    <p className="text-gray-600">Tecnología del futuro</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <Database className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">
                        Sensores
                      </div>
                    </div>
                    <div className="p-4 bg-cyan-50 rounded-xl">
                      <Wifi className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-900">
                        Conectividad
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <div
                key={index}
                className={`absolute ${card.position} hidden lg:block animate-pulse`}
                style={{ animationDelay: `${index * 1000}ms` }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {card.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {card.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
