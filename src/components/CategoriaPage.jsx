import { Navigation, Phone } from 'lucide-react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { precios, promociones, categoria, negocio, maps } from '../data/site.js'
import useReveal from '../hooks/useReveal.js'
import GaleriaCortes from './GaleriaCortes.jsx'
import Anuncios from './Anuncios.jsx'
import './CategoriaPage.css'

export default function CategoriaPage({ grupoId }) {
  useReveal()

  const grupos = precios.grupos
  const grupo = grupos.find((item) => item.id === grupoId) ?? grupos[0]

  return (
    <div className="cat-page">
      <Header />

      <main id="contenido">
        {/* Hero: imagen de fondo de marca, de alto bajo */}
        <section
          className="cat-hero"
          style={{ backgroundImage: `url(${categoria.fondo})` }}
          aria-labelledby="cat-title"
        >
          <span className="cat-hero__scrim" aria-hidden="true" />
          <div className="container cat-hero__inner">
            <p className="eyebrow cat-hero__eyebrow">{grupo.nombre}</p>
            <h1 className="cat-hero__title" id="cat-title">
              Cortes para {grupo.nombre.toLowerCase()}
            </h1>
            <p className="cat-hero__text">{grupo.resumen}</p>
          </div>
        </section>

        <Anuncios />

        <div className="pole" aria-hidden="true" />

        {/* Tipos de corte */}
        <section
          className="section section--light cat-tipos"
          data-accent={grupo.acento}
          style={{ '--cat-bg-foto': `url(${categoria.fondoTipos})` }}
          aria-labelledby="cat-tipos-title"
        >
          <div className="container">
            <header className="cat-head">
              <div className="cat-head-text reveal">
                <p className="eyebrow">{categoria.cortesKicker}</p>
                <h2 id="cat-tipos-title">{categoria.cortesTitulo}</h2>
                <p className="lead">Precios de referencia. Consultá disponibilidad por teléfono.</p>
              </div>
            </header>

            <GaleriaCortes secciones={grupo.secciones} />

            {precios.nota && <p className="cat-note">{precios.nota}</p>}
          </div>
        </section>

        {/* Promociones */}
        <section
          className="section section--dark cat-promos"
          data-accent={grupo.acento}
          aria-labelledby="cat-promos-title"
        >
          <div className="container">
            <header className="cat-head">
              <div className="cat-head-text reveal" data-delay="1">
                <p className="eyebrow">{promociones.kicker}</p>
                <h2 id="cat-promos-title">{promociones.titulo}</h2>
                <p className="lead">{promociones.intro}</p>
              </div>
            </header>

            {grupo.promociones?.length > 0 ? (
              <ul className="cat-promos__grid">
                {grupo.promociones.map((promo) => (
                  <li className="cat-promo" key={promo.id}>
                    <span className="cat-promo__tag">Promo</span>
                    <h3 className="cat-promo__title">{promo.titulo}</h3>
                    <p className="cat-promo__text">{promo.detalle}</p>
                    {promo.vigencia && <p className="cat-promo__vigencia">{promo.vigencia}</p>}
                  </li>
                ))}
              </ul>
            ) : null}

            <p className="cat-note cat-note--dark">{promociones.nota}</p>
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="section section--light cat-cta">
          <div className="container cat-cta__inner">
            <div className="cat-cta__text">
              <h2>¿Consultás disponibilidad?</h2>
              <p>Llamanos para coordinar tu turno.</p>
            </div>
            <div className="cat-cta__actions">
              <a className="btn btn--primary" href={negocio.telefono.href}>
                <Phone size={18} aria-hidden="true" />
                <span>{negocio.telefono.display}</span>
              </a>
              <a
                className="btn btn--dark"
                href={maps.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={18} aria-hidden="true" />
                <span>Cómo llegar</span>
              </a>
            </div>
          </div>
        </section>

        <Anuncios variante="cierre" />
      </main>

      <Footer />
    </div>
  )
}
