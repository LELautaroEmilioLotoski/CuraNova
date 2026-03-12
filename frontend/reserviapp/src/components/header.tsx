"use client"

import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import ThemeSelector from "./ThemeSelector"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-xl text-foreground">CuraNova</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
              Nosotros
            </Link>
            <Link href="#equipo" className="text-muted-foreground hover:text-foreground transition-colors">
              Equipo
            </Link>
            <Link href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </Link>

            <ThemeSelector />
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+525512345678" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>+54 123456789</span>
            </a>
            <Button>Agendar Cita</Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Servicios
            </Link>
            <Link href="#nosotros" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Nosotros
            </Link>
            <Link href="#equipo" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Equipo
            </Link>
            <Link href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Contacto
            </Link>
            <div className="pt-4 border-t border-border">
              <Button className="w-full">Agendar Cita</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
