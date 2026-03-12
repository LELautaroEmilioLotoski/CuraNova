import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-xl">CuraNova</span>
            </Link>
            <p className="text-background/70 text-sm">
              Brindamos atención médica de calidad con un enfoque humano y profesional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#" className="hover:text-background transition-colors">Medicina General</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Cardiología</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Neurología</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Pediatría</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#nosotros" className="hover:text-background transition-colors">Nosotros</Link></li>
              <li><Link href="#equipo" className="hover:text-background transition-colors">Equipo Médico</Link></li>
              <li><Link href="#contacto" className="hover:text-background transition-colors">Contacto</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#" className="hover:text-background transition-colors">Aviso de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} CuraNova. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
