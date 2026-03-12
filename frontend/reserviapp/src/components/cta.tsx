
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl px-6 py-16 md:px-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              ¿Listo para cuidar de tu salud?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-xl mx-auto">
              Agenda tu cita hoy mismo y da el primer paso hacia una vida más saludable. Nuestro equipo está listo para atenderte.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2"
              >
                Agendar Cita Ahora
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Llamar al Consultorio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
