import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  MapPin,
  Info,
  FileText,
  Settings2,
  X,
  Menu,
  Send,
  ChevronDown,
} from "lucide-react";
import logo from "../../../../assets/Circulo.png";

// Documentos para el dropdown
const documentos = [
  {
    nombre: "Formato de requerimiento de servicio",
    url: "/documentsPrototipado/Formato_de_requerimiento_de_servicio_de_maquinado_de_prototipo.pdf",
  },
  {
    nombre: "Reglamento del laboratorio",
    url: "/documentsPrototipado/reglamento_del_laboratorio_de_prototipado.pdf",
  },
  {
    nombre: "Procedimiento de fabricación",
    url: "/documentsPrototipado/procedimiento_de_fabricacion_lab_de_prototipado.pdf",
  },
  {
    nombre: "Manual Gerber Proteus",
    url: "/documentsPrototipado/manual_gerber_proteus.pdf",
  },
  {
    nombre: "Generar archivos Gerber con Eagle",
    url: "/documentsPrototipado/generar_archivos_gerber_con_eagle.pdf",
  },
  {
    nombre: "Kicad Gerber",
    url: "/documentsPrototipado/kicad_gerber.pdf",
  },
  {
    nombre: "Orcad Gerber",
    url: "/documentsPrototipado/orcad_gerber.pdf",
  },
  {
    nombre: "Altium Gerber",
    url: "/documentsPrototipado/altium_gerber.pdf",
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname === "/prototipado") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/prototipado");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-[#18122B]/80 shadow-lg backdrop-blur-md">
      {/* Glows decorativos */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[320px] h-[120px] bg-[#a78bfa]/30 blur-2xl rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[180px] h-[80px] bg-[#5ca9fb]/20 blur-2xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[120px] h-[60px] bg-[#6366f1]/20 blur-2xl rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-[100px] h-[40px] bg-[#a78bfa]/15 blur-2xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 h-20">
        {/* Logo a la izquierda */}
        <Link
          to="#"
          className="flex items-center gap-3 cursor-pointer"
          aria-label="Ir al inicio"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("inicio");
          }}
        >
          <img
            src={logo}
            alt="Logo Prototyping Lab"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-lg"
          />
          <span className="text-base sm:text-xl font-bold text-white tracking-wide block">
            Prototyping Lab
          </span>
        </Link>

        {/* Contenedor de menú y botón a la derecha */}
        <div className="flex items-center gap-4">
          {/* Menú principal */}
          <nav className="hidden md:flex gap-10 items-center">
            <button
              type="button"
              className="flex items-center gap-2 text-white hover:text-[#a78bfa] transition-colors text-lg font-medium"
              onClick={() => handleScrollToSection("inicio")}
            >
              <Home className="w-6 h-6 text-[#5ee6ff]" />
              Inicio
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-white hover:text-[#a78bfa] transition-colors text-lg font-medium"
              onClick={() => handleScrollToSection("Servicios")}
            >
              <Settings2 className="w-6 h-6 text-[#5ee6ff]" />
              Servicios
            </button>

            <button
              type="button"
              className="flex items-center gap-2 text-white hover:text-[#a78bfa] transition-colors text-lg font-medium"
              onClick={() => handleScrollToSection("Solicitar")}
            >
              <Send className="w-6 h-6 text-[#5ee6ff]" />
              Solicitar
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-white hover:text-[#a78bfa] transition-colors text-lg font-medium"
              onClick={() => handleScrollToSection("Ubicacion")}
            >
              <MapPin className="w-6 h-6 text-[#5ee6ff]" />
              Ubicación
            </button>
            {/* Dropdown de Documentos */}
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center bg-gradient-to-r from-[#a78bfa] to-[#ff5ca9] hover:from-[#5ca9fb] hover:to-[#a78bfa] text-white font-bold px-7 py-2 rounded-full shadow-lg transition-all duration-200"
                onClick={() => setDropdownOpen((open) => !open)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <FileText className="mr-2 w-6 h-6 text-white" />
                Documentos
                <ChevronDown className="ml-2 w-5 h-5" />
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-56 bg-[#23213a] rounded-lg shadow-xl py-2 z-50 border border-[#a78bfa]/30">
                  {documentos.map((doc) => (
                    <li key={doc.nombre}>
                      <a
                        href={doc.url}
                        download
                        className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#a78bfa]/20 transition rounded"
                      >
                        <FileText className="w-4 h-4 text-[#a78bfa]" />
                        {doc.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          {/* Botón para abrir/cerrar menú móvil */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center z-[1100] p-2 rounded-full bg-[#23213a] hover:bg-[#a78bfa]/30 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-[#5ee6ff]" />
            ) : (
              <Menu className="w-7 h-7 text-[#5ee6ff]" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#18122B]/90 shadow-lg transition-all duration-300 overflow-y-auto z-[1100] ${
          isMenuOpen ? "py-4" : "h-0 py-0 pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo Prototyping Lab"
              className="w-10 h-10 rounded-lg shadow-lg"
            />
            <span className="text-base sm:text-xl font-bold text-white tracking-wide block">
              Prototyping Lab
            </span>
          </div>
          <button
            type="button"
            className="flex items-center justify-center p-2 rounded-full bg-[#23213a] hover:bg-[#a78bfa]/30 transition"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <X className="w-7 h-7 text-[#5ee6ff]" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6">
          <button
            type="button"
            className="flex items-center gap-3 bg-[#23213a] rounded-xl px-4 py-3 mt-2 text-white text-lg font-medium hover:bg-[#a78bfa]/20 transition"
            onClick={() => {
              handleScrollToSection("inicio");
              setIsMenuOpen(false);
            }}
          >
            <Home className="w-6 h-6 text-[#5ee6ff]" />
            Inicio
          </button>
          <button
            type="button"
            className="flex items-center gap-3 bg-[#23213a] rounded-xl px-4 py-3 text-white text-lg font-medium hover:bg-[#a78bfa]/20 transition"
            onClick={() => {
              handleScrollToSection("Servicios");
              setIsMenuOpen(false);
            }}
          >
            <Settings2 className="w-6 h-6 text-[#5ee6ff]" />
            Servicios
          </button>
          <button
            type="button"
            className="flex items-center gap-3 bg-[#23213a] rounded-xl px-4 py-3 text-white text-lg font-medium hover:bg-[#a78bfa]/20 transition"
            onClick={() => {
              handleScrollToSection("Galeria");
              setIsMenuOpen(false);
            }}
          >
            <Info className="w-6 h-6 text-[#5ee6ff]" />
            Maquinaria
          </button>
          <button
            type="button"
            className="flex items-center gap-3 bg-[#23213a] rounded-xl px-4 py-3 text-white text-lg font-medium hover:bg-[#a78bfa]/20 transition"
            onClick={() => {
              handleScrollToSection("Solicitar");
              setIsMenuOpen(false);
            }}
          >
            <Send className="w-6 h-6 text-[#5ee6ff]" />
            Solicitar
          </button>
          <button
            type="button"
            className="flex items-center gap-3 bg-[#23213a] rounded-xl px-4 py-3 text-white text-lg font-medium hover:bg-[#a78bfa]/20 transition"
            onClick={() => {
              handleScrollToSection("Ubicacion");
              setIsMenuOpen(false);
            }}
          >
            <MapPin className="w-6 h-6 text-[#5ee6ff]" />
            Ubicación
          </button>
          {/* Documentos como lista simple */}
          <div className="mt-2">
            <span className="block text-white font-bold mb-1">Documentos</span>
            <ul className="flex flex-col gap-1">
              {documentos.map((doc) => (
                <li key={doc.nombre}>
                  <a
                    href={doc.url}
                    download
                    className="flex items-center gap-2 bg-[#23213a] rounded-xl px-4 py-3 text-white text-lg font-medium hover:bg-[#a78bfa]/20 transition"
                  >
                    <FileText className="w-5 h-5 text-[#a78bfa]" />
                    {doc.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
