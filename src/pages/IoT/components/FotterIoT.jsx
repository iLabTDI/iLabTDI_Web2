import { Wifi, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export const Footer = () =>{
  const socialLinks = [
    { name: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:hector.galvez5325@academicos.udg.mx" },
    { name: "Teléfono", icon: <Phone className="w-5 h-5" />, href: "tel:+523313286565" },
    { name: "Ubicación", icon: <MapPin className="w-5 h-5" />, href: "#" },
  ]

  const quickLinks = [
    { name: "¿Quiénes somos?", href: "/quienes-somos" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Patentes", href: "/patentes" },
    { name: "Titulados", href: "/titulados" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Laboratorio IoT</h3>
                <p className="text-blue-200">iLabTDI - CUCEI</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Centro Universitario de Ciencias Exactas e Ingenierías. Innovando en el Internet de las Cosas para crear
              soluciones tecnológicas que transforman el futuro.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">
                  Blvd. Gral. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">hector.galvez5325@academicos.udg.mx</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+52 33 1328 6565</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                    {link.icon}
                  </div>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Laboratorio IoT - iLabTDI. Todos los derechos reservados.
            </div>

            {/* Institution Logos */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=40&width=120&query=CUCEI university logo"
                  alt="CUCEI"
                  className="h-10 opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/placeholder.svg?height=40&width=120&query=DIVTIC division logo"
                  alt="DIVTIC"
                  className="h-10 opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
