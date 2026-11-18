import Header from './components/Header'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import MisionVision from './components/MisionVision'
import Servicios from './components/Servicios'
import Clientes from './components/Clientes'
import Galeria from './components/Galeria'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Redes from './components/Redes'
import Legal from './components/Legal'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a href="#main" className="skip">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Nosotros />
        <MisionVision />
        <Servicios />
        <Clientes />
        <Galeria />
        <Testimonios />
        <Contacto />
        <Redes />
        <Legal />
      </main>
      <Footer />
    </>
  )
}
