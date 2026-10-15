import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Anuncios from '../components/Anuncios.jsx'
import Presentacion from '../components/Presentacion.jsx'
import Servicios from '../components/Servicios.jsx'
import Local from '../components/Local.jsx'
import Cortes from '../components/Cortes.jsx'
import Precios from '../components/Precios.jsx'
import Nosotros from '../components/Nosotros.jsx'
import Reserva from '../components/Reserva.jsx'
import Contacto from '../components/Contacto.jsx'
import Footer from '../components/Footer.jsx'
import MobileCallBar from '../components/MobileCallBar.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Home() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Anuncios />
        <Presentacion />
        <Servicios />
        <Local />
        <Cortes />
        <Precios />
        <Nosotros />
        <Reserva />
        <Contacto />
        <Anuncios variante="cierre" />
      </main>

      <Footer />
      <MobileCallBar />
    </>
  )
}