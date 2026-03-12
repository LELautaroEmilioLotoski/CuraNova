import { About } from "../components/about";
import { Contact } from "../components/contact";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { Team } from "../components/team";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
