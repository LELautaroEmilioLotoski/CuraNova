import { CheckCircle2 } from "lucide-react"

const features = [
  "Instalaciones modernas y equipadas",
  "Profesionales certificados",
  "Atención personalizada",
  "Tecnología de vanguardia",
  "Precios accesibles",
  "Horarios flexibles"
]

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=533&fit=crop"
                  alt="Consultorio médico moderno"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=533&fit=crop"
                  alt="Equipo médico trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold">+15</p>
                <p className="text-sm opacity-90">Años cuidando de ti</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium mb-4">Sobre Nosotros</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Dedicados a tu salud desde hace más de una década
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              En CuraNova nos comprometemos a brindarte la mejor atención médica con un enfoque humano y profesional. Nuestro equipo de especialistas trabaja día a día para garantizar tu bienestar.
            </p>
            <p className="mt-4 text-muted-foreground">
              Creemos que la salud es el pilar fundamental de una vida plena, por eso nos esforzamos en ofrecer servicios de calidad con calidez y empatía.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
