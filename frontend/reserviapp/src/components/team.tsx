import { Card, CardContent } from "./ui/card"

const team = [
  {
    name: "Dra. María González",
    specialty: "Medicina General",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
  },
  {
    name: "Dr. Carlos Rodríguez",
    specialty: "Cardiología",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  },
  {
    name: "Dra. Ana Martínez",
    specialty: "Pediatría",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
  },
  {
    name: "Dr. Roberto Sánchez",
    specialty: "Neurología",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop"
  }
]

export function Team() {
  return (
    <section id="equipo" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Nuestro Equipo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Profesionales comprometidos con tu bienestar
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Conoce a los especialistas que conforman nuestro equipo médico de excelencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="group overflow-hidden border-border hover:border-primary/20 transition-colors">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
