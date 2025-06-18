import { GraduationCap, Award, BookOpen, Users, Star, Medal } from "lucide-react"

// Importar todas las imágenes como variables
const titulado1 =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto-titulado-1-f3zqEQqUtoj02sIGArJSrK0zQ64uGU.png"
const titulado2 =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto-titulado-2-Uw5iTWrpjT7AZbhAWS50A5ZaSfkg9F.png"
const titulado3 =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto-titulado-3-pWrI0YbaS67ZKe1mYA20GWA6ZNn76I.png"
const titulado7 =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto-titulado-7-E7WvMvMLyQfSQfr9hKW32MNT0bHDLV.png"
const elipse1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elipse-1-QdS8t3iopHsW9yGMNUZosUeGIjOhJN.png"
const elipse2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elipse-2-fDjRlmUNISR2QPSSLNcN7cbkGvQq6z.png"

function Titulados() {
  const graduates = [
    {
      name: "Marco Antonio Hernandez Preciado",
      career: "Ingeniería en comunicaciones y electrónica",
      mode: "Producción de Materiales Educativos",
      image: titulado1,
      achievements: ["Desarrollo de materiales didácticos", "Investigación en IoT", "Publicaciones académicas"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "José Luis Tláloc Sauceda Álvarez",
      career: "Ingeniería en comunicaciones y electrónica",
      mode: "Producción de Materiales Educativos",
      image: titulado2,
      achievements: ["Innovación en educación", "Desarrollo de prototipos", "Liderazgo estudiantil"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Paola Alejandra Duque Salgado",
      career: "Ingeniería en comunicaciones y electrónica",
      mode: "Producción de Materiales Educativos",
      image: titulado3,
      achievements: ["Excelencia académica", "Proyectos de impacto social", "Mentorías estudiantiles"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Cristopher Jesús Gonzalez Estrada",
      career: "Ingeniería en comunicaciones y electrónica",
      mode: "Investigación y estudio de posgrados",
      image: titulado7,
      achievements: ["Investigación avanzada", "Publicaciones científicas", "Continuidad académica"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { number: "4", label: "Titulados", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "2", label: "Modalidades", icon: <BookOpen className="w-6 h-6" /> },
    { number: "100%", label: "Éxito", icon: <Award className="w-6 h-6" /> },
    { number: "5+", label: "Proyectos", icon: <Users className="w-6 h-6" /> },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4 mr-2" />
                Nuestros egresados
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Nuestros
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  {" "}
                  Titulados
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                En nuestro laboratorio, nos sentimos orgullosos de cada uno de los estudiantes que ha culminado su
                formación académica con nosotros. Cada titulado representa un esfuerzo conjunto de innovación,
                investigación y compromiso, aplicando los conocimientos adquiridos en proyectos reales de impacto.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl transform -rotate-6"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Ceremonia de titulación"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduates Section - Using Original Circle Design */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conoce a Nuestros Egresados</h2>
            <p className="text-lg text-gray-600">Profesionales formados con excelencia y compromiso</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {graduates.map((graduate, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Profile Image with Original Circle Design */}
                  <div className="relative mx-auto w-64 h-64 mb-8">
                    {/* Elipse 1 - Base circle */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={elipse1 || "/placeholder.svg"}
                        alt="circle-base"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Graduate Photo - Positioned and sized to fit perfectly */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white">
                          <img
                            src={graduate.image || "/placeholder.svg"}
                            alt={graduate.name}
                            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Elipse 2 - Top overlay circle */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={elipse2 || "/placeholder.svg"}
                        alt="circle-overlay"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Floating Badge */}
                    <div
                      className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r ${graduate.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Graduate Info */}
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {graduate.name}
                    </h3>

                    {/* Career Info */}
                    <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${graduate.color} rounded-lg flex items-center justify-center`}
                      >
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-500">Carrera</p>
                        <p className="font-semibold text-gray-900">{graduate.career}</p>
                      </div>
                    </div>

                    {/* Graduation Mode */}
                    <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${graduate.color} rounded-lg flex items-center justify-center`}
                      >
                        <Medal className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-gray-500">Modo de titulación</p>
                        <p className="font-semibold text-gray-900">{graduate.mode}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="text-left">
                      <div className="flex items-center justify-center mb-4">
                        <Star className="w-5 h-5 text-yellow-500 mr-2" />
                        <h4 className="font-semibold text-gray-900">Logros Destacados</h4>
                      </div>
                      <div className="space-y-3">
                        {graduate.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-3">
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${graduate.color} rounded-full flex-shrink-0`}
                            ></div>
                            <span className="text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
            <Award className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Reconocimiento y Admiración</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Valoramos el esfuerzo y la dedicación que cada persona ha invertido para alcanzar su meta. Sus logros
              reflejan el nivel de excelencia que promovemos en el laboratorio, y sus contribuciones al desarrollo de
              soluciones tecnológicas dejan huella en nuestra comunidad académica.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Titulados
