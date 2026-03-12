import { Heart, Stethoscope, Brain, Baby, Bone, Eye } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Medicina General",
    description: "Consultas médicas integrales para el diagnóstico y tratamiento de enfermedades comunes."
  },
  {
    icon: Heart,
    title: "Cardiología",
    description: "Especialistas en el cuidado de tu corazón con tecnología de última generación."
  },
  {
    icon: Brain,
    title: "Neurología",
    description: "Atención especializada en trastornos del sistema nervioso central y periférico."
  },
  {
    icon: Baby,
    title: "Pediatría",
    description: "Cuidado integral para los más pequeños del hogar con atención personalizada."
  },
  {
    icon: Bone,
    title: "Traumatología",
    description: "Tratamiento de lesiones y enfermedades del sistema músculo-esquelético."
  },
  {
    icon: Eye,
    title: "Oftalmología",
    description: "Cuidado completo de la salud visual con equipos de diagnóstico avanzados."
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Nuestros Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Especialidades médicas para tu bienestar integral
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Contamos con un amplio catálogo de servicios médicos para atender todas tus necesidades de salud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
