"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Calle falsa 123"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+54 123456789"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contacto@curanova.com"
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 8:00 - 20:00"
  }
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            ¿Listo para comenzar tu experiencia?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661580055327!2d-99.16869722394699!3d19.427023381866857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1709754123456!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio"
              />
            </div>
          </div>

          <div>
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Envíanos un mensaje</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        Nombre
                      </label>
                      <Input id="firstName" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Apellido
                      </label>
                      <Input id="lastName" placeholder="Tu apellido" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Teléfono
                    </label>
                    <Input id="phone" type="tel" placeholder="+54 123456789" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensaje
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="¿En qué podemos ayudarte?" 
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
