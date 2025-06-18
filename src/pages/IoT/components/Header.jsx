"use client"

import { useState } from "react"
import { Menu, X, Wifi, Mail, Home, Users, Briefcase, Award, GraduationCap } from "lucide-react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "¿Quiénes somos?", href: "/quienes-somos", icon: <Users className="w-4 h-4" /> },
    { name: "Proyectos", href: "/proyectos", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Patentes", href: "/patentes", icon: <Award className="w-4 h-4" /> },
    { name: "Titulados", href: "/titulados", icon: <GraduationCap className="w-4 h-4" /> },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 leading-tight">Laboratorio IoT</h1>
              <p className="text-sm text-blue-600 font-medium">iLabTDI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 rounded-lg hover:bg-blue-50 group"
              >
                <span className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </a>
            ))}
            <div className="ml-4">
              <a
                href="/contacto"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Contacto</span>
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-gray-400">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="/contacto"
                  className="flex items-center justify-center space-x-2 mx-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-4 h-4" />
                  <span>Contacto</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
