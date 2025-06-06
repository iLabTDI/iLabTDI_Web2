import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout/MainLayout"
import HomeIoT from "./pages/HomeIoT"
import QuienesSomos from "./pages/QuienesSomos"
import ProyectosIoT from "./pages/proyectosIoT"
import Patentes from "./pages/Patentes"
import Titulados from "./pages/Titulados"

export default function IoTMain() {
  return (
   
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Layout>
          <Routes>
            <Route path="/" element={<HomeIoT />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/proyectos" element={<ProyectosIoT />} />
            <Route path="/patentes" element={<Patentes />} />
            <Route path="/titulados" element={<Titulados />} />
          </Routes>
        </Layout>
      </div>
    
  )
}
