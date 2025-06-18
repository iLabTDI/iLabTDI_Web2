import React from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Mail,
  Home,
  MapPin,
  Info,
  FileText,
  Settings2,
  Users,
  Download,
  Shield,
  ScrollText,
  Send,
} from "lucide-react";
import { Facebook } from "lucide-react"; // Agrega esta línea
import logo from "../../../../assets/Circulo.png";

export default function Footer() {
  return (
    <footer className="relative w-full bg-transparent overflow-hidden mt-16">
      {/* Fondo blur */}
      <div className="absolute inset-0 bg-[#181c2f]/60 backdrop-blur-md z-0 pointer-events-none" />
      {/* Glow decor bottom right */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#a78bfa]/20 rounded-full blur-3xl pointer-events-none z-0"></div>
      {/* Glow decor top left */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#5ca9fb]/30 rounded-full blur-3xl pointer-events-none z-0"></div>
      {/* Glow ring center */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-72 h-72 border-4 border-[#5ca9fb]/10 rounded-full blur-2xl pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block: Logo, copyright, social */}
          <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Logo Prototyping Lab"
                    className="w-10 h-10 rounded-lg shadow-lg"
                  />
                  <span className="text-base sm:text-xl font-bold text-white tracking-wide block">
                    Prototyping Lab
                  </span>
                </div>
                <div className="text-sm text-slate-300">
                  © {new Date().getFullYear()} Prototyping Lab{" "}
                  <span className="text-slate-500">-</span> Todos los derechos
                  reservados.
                </div>
              </div>
              {/* Social links */}
              <ul className="flex mt-4 lg:mt-0">
                <li>
                  <a
                    className="flex justify-center items-center text-[#5ca9fb] hover:text-[#a78bfa] transition duration-150 ease-in-out"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hector.galvez5325@academicos.udg.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Correo"
                  >
                    <Mail className="w-8 h-8" />
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    className="flex justify-center items-center text-[#5ca9fb] hover:text-[#a78bfa] transition duration-150 ease-in-out"
                    href="https://www.facebook.com/ILabTDI"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-8 h-8" />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>

          {/* 2nd block: Navegación */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">
              Navegación
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                >
                  <Home className="w-4 h-4 text-[#5ee6ff]" />
                  Inicio
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                  onClick={() =>
                    document
                      .getElementById("Servicios")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Settings2 className="w-4 h-4 text-[#5ee6ff]" />
                  Servicios
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                  onClick={() =>
                    document
                      .getElementById("Galeria")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Info className="w-4 h-4 text-[#5ee6ff]" />
                  Maquinaria
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                  onClick={() =>
                    document
                      .getElementById("Ubicacion")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <MapPin className="w-4 h-4 text-[#5ee6ff]" />
                  Ubicación
                </button>
              </li>
            </ul>
          </div>

          {/* 3rd block: Recursos */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Recursos</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                  href="https://t.me/+JhwB-s6Jzl05NDQ5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="w-4 h-4 text-[#229ED9]" />
                  Telegram
                </a>
              </li>

              <li>
                <a
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                  href="/documentsPrototipado/Formato_de_requerimiento_de_servicio_de_maquinado_de_prototipo.pdf"
                  download
                >
                  <Download className="w-4 h-4 text-[#a78bfa]" />
                  Descargar formato
                </a>
              </li>
              
            </ul>
          </div>

          {/* 4th block: Legales */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Legales</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                  href="#"
                >
                  <Shield className="w-4 h-4 text-[#5ca9fb]" />
                  Aviso de privacidad
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
                  href="#"
                >
                  <ScrollText className="w-4 h-4 text-[#a78bfa]" />
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
