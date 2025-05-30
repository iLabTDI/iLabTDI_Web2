import React from "react";
import { CheckCircle, Send, Download } from "lucide-react";

const pasos = [
  {
    titulo: "Reúne la información necesaria",
    descripcion:
      "Asegúrate de tener tu archivo técnico de diseño listo en formato Gerber, Drill, Simulación, etc.",
  },
  {
    titulo: "Prepara tus archivos",
    descripcion:
      "Reúne todos los archivos técnicos necesarios en una carpeta y comprímelos en un archivo .ZIP o .RAR y asegúrate de nombrarlo con el formato indicado en el siguiente punto.",
  },
  {
    titulo: "Formato obligatorio",
    descripcion:
      "[NOMBRE DEL SOLICITANTE] - [NOMBRE DEL PROYECTO] - [FECHA DE SOLICITUD].\nEjemplo: 'Juan Perez - Prototipo Solar - 30 Abril 2025'.",
  },
  {
    titulo: "Envia tus archivos y proporciona el material",
    descripcion:
      "Envía el archivo comprimido con tus diseños a través de Telegram y proporciona en el laboratorio las 2 placas fenólicas.",
  },
  {
    titulo: "Entrega tu solicitud",
    descripcion:
      "Completa el formulario de solicitud descargando el PDF y acude al laboratorio para entregarlo.",
  },
  {
    titulo: "Revisión y confirmación",
    descripcion:
      "El equipo del laboratorio revisará tu solicitud y te contactará para confirmar detalles y tiempos de entrega.",
  },
  {
    titulo: "Fabricación del prototipo",
    descripcion:
      "Una vez confirmada la solicitud, el laboratorio procederá a fabricar tu prototipo PCB.",
  },
  {
    titulo: "Entrega",
    descripcion:
      "Recibe tu prototipo en el laboratorio. Horario de Atención: 7am - 7pm\nLunes a Viernes",
  },
];

const requisitosTecnicos = [
  {
    descripcion: "Archivos Gerber/Excellon.",
  },
  {
    descripcion:
      "Archivos Drill y Bottom Layer en caso de ser un diseño de una capa..",
  },
  {
    descripcion:
      "Archivos Drill, Bottom y Top Layer en caso de ser un diseño de dos capas.",
  },
  {
    descripcion:
      "Trazos arriba de 0.7 mm (al menos que se requiera que sean menores).",
  },
  {
    descripcion: "No giros de 90°.",
  },
  {
    descripcion:
      "Archivo de Simulación o forma de comprobar que el circuito funciona.",
  },
  {
    descripcion:
      "2 Placas Fenólicas por circuito proporcionadas por ti, de un tamaño mayor a las dimensiones del diseño.",
  },
  {
    descripcion: "Formato de requerimiento impreso y llenado.",
  },
];

export default function Solicitar() {
  return (
    <section
      id="Solicitar"
      className="relative w-full shadow-2xl overflow-hidden py-8 bg-transparent"
    >
      {/* Adornos de fondo */}
      <div className="pointer-events-none z-0">
        {/* Glow top left */}
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-[#5ca9fb]/30 rounded-full blur-3xl"></div>
        {/* Glow bottom right */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#a78bfa]/20 rounded-full blur-3xl"></div>
        {/* Glow ring center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-[#5ca9fb]/10 rounded-full blur-2xl"></div>
        {/* Extra decor: small dots */}
        <div className="absolute top-10 right-1/3 w-3 h-3 bg-[#a78bfa]/40 rounded-full blur"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#5ca9fb]/40 rounded-full blur"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl m-auto xl:-translate-x-16 pt-6 px-4 sm:px-6">
        {/* Título principal */}
        <h1 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-10 text-center">
          Solicitud y Requisitos Técnicos para Prototipado PCB
        </h1>
        {/* Guía de solicitud */}
        <div className="xl:flex mb-10">
          <div className="w-32 shrink-0 flex items-start pt-1">
            <h2 className="text-xl leading-snug font-bold text-gray-800 dark:text-gray-100 xl:leading-7 xl:mb-0 mb-4">
              Guía de solicitud
            </h2>
          </div>
          <div className="grow pb-6 border-b border-gray-200 dark:border-gray-700/60">
            <header>
              <div className="flex flex-nowrap items-center space-x-2 mb-6">
                <div className="text-gray-400 dark:text-gray-600">·</div>
                <div>
                  <div className="text-xs inline-flex font-medium bg-green-500/20 text-green-200 rounded-full text-center px-2.5 py-1">
                    Proceso para solicitar tu PCB
                  </div>
                </div>
              </div>
            </header>
            <ul className="-my-2">
              {pasos.map((paso, idx) => (
                <li className="relative py-2" key={idx}>
                  <div className="flex items-center mb-1">
                    {/* Línea vertical */}
                    {idx !== pasos.length - 1 && (
                      <div
                        className="absolute left-3 h-full w-0.5 bg-gray-200 dark:bg-gray-700 self-start translate-y-3"
                        aria-hidden="true"
                      ></div>
                    )}
                    {/* Icono de paso */}
                    <div
                      className="absolute left-0 flex items-center justify-center"
                      aria-hidden="true"
                      style={{ width: 28, height: 28 }}
                    >
                      <span
                        className="rounded-full bg-violet-700 flex items-center justify-center"
                        style={{ width: 28, height: 28 }}
                      >
                        <CheckCircle
                          size={20}
                          color="#6D28D9"
                          strokeWidth={2.5}
                          className="bg-white rounded-full"
                          style={{ background: "#fff" }}
                        />
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 pl-9">
                      {paso.titulo}
                    </h3>
                  </div>
                  <div className="pl-9 text-gray-600 dark:text-gray-300">
                    {paso.descripcion.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Guía de requisitos técnicos */}
        <div className="xl:flex">
          <div className="w-32 shrink-0">
            <h2 className="text-xl leading-snug font-bold text-gray-800 dark:text-gray-100 xl:leading-7 mb-4 xl:mb-0">
              Requisitos técnicos
            </h2>
          </div>
          <div className="grow pb-6 border-b border-gray-200 dark:border-gray-700/60">
            <header>
              <div className="flex flex-nowrap items-center space-x-2 mb-6">
                <div className="text-gray-400 dark:text-gray-600">·</div>
                <div>
                  <div className="text-xs inline-flex font-medium bg-sky-300/30 text-sky-100 rounded-full text-center px-2.5 py-1">
                    Requerimientos para Fabricar tu Diseño
                  </div>
                </div>
              </div>
            </header>
            <ul className="-my-2">
              {requisitosTecnicos.map((req, idx) => (
                <li className="relative py-2" key={idx}>
                  <div className="flex items-center mb-1">
                    {/* Línea vertical */}
                    {idx !== requisitosTecnicos.length - 1 && (
                      <div
                        className="absolute left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 self-start ml-2.5 -translate-x-1/2 translate-y-3"
                        aria-hidden="true"
                      ></div>
                    )}
                    {/* Icono de paso para requisitos técnicos */}
                    <div
                      className="absolute left-0 flex items-center justify-center"
                      aria-hidden="true"
                      style={{ width: 28, height: 28 }}
                    >
                      <span
                        className="rounded-full bg-sky-700 flex items-center justify-center"
                        style={{ width: 28, height: 28 }}
                      >
                        <CheckCircle
                          size={20}
                          color="#0369A1"
                          strokeWidth={2.5}
                          className="bg-white rounded-full"
                          style={{ background: "#fff" }}
                        />
                      </span>
                    </div>
                    {/* Solo descripción */}
                    <div className="pl-9 text-gray-600 dark:text-gray-300">
                      {req.descripcion.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-8">
          <a
            href="https://t.me/tu_usuario_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm font-bold rounded-full shadow-lg text-base px-6 py-2 flex items-center transition duration-150 ease-in-out
            bg-[#229ED9] hover:bg-[#1b8ec1] text-white"
          >
            <Send className="shrink-0 text-white mr-2" size={18} />
            Contactar por Telegram
          </a>
          <a
            href="/documentsPrototipado/Formato_de_requerimiento_de_servicio_de_maquinado_de_prototipo.pdf"
            download
            className="btn-sm font-bold rounded-full shadow-lg text-base px-6 py-2 flex items-center transition duration-150 ease-in-out
            bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white hover:from-red-600 hover:to-red-800"
          >
            <Download className="shrink-0 text-white mr-2" size={18} />
            Descargar formato de requerimiento
          </a>
        </div>
      </div>
    </section>
  );
}
