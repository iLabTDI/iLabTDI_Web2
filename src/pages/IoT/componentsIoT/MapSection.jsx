import { MapPin, Phone, Mail, Clock } from "lucide-react"

function MapSection() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Ubicación",
      content: "Blvd. Gral. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Teléfono",
      content: "+52 33 1328 6565",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "hector.galvez5325@academicos.udg.mx",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horarios",
      content: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Nuestra Ubicación
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Visítanos en el
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> CUCEI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos ubicados en el Centro Universitario de Ciencias Exactas e Ingenierías de la Universidad de
            Guadalajara.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-xl flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-6">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Mail className="w-5 h-5 mr-2" />
                Contactar Ahora
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3733.310956415755!2d-103.32612619999999!3d20.6569244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDM5JzI0LjkiTiAxMDPCsDE5JzM0LjEiVw!5e0!3m2!1ses!2smx!4v1726597840834!5m2!1ses!2smx"
                // width="400px"
                // height="400px"
                style={{ border: 0, width: "800px", height: "600px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
