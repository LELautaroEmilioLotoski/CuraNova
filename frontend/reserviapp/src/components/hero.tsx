
import { ArrowRight, Calendar, Shield, Clock } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Atención médica de excelencia
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Tu Salud es Nuestra{" "}
              <span className="text-primary">Prioridad</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Brindamos atención médica integral con un equipo de profesionales comprometidos con tu bienestar. Agenda tu cita de manera fácil y rápida.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Agendar Cita
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Conocer Servicios
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-2">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-foreground">+15</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-foreground">+10k</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Atención continua</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=1000&fit=crop"
                alt="Médico profesional sonriendo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Agenda fácil</p>
                  <p className="text-sm text-muted-foreground">Citas en minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
