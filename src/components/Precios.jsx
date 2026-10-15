import { Banknote } from 'lucide-react'
import { precios } from '../data/site.js'
import Numeral from './Numeral.jsx'
import './Precios.css'

const money = (n) => `$${n.toLocaleString('es-AR')}`

/* Precio "desde" de una sección del catálogo (mínimo de sus ítems). */
const desde = (items) => {
  const valores = items.map((item) => item.precio).filter((p) => typeof p === 'number')
  if (valores.length === 0) return precios.precioFallback
  return `desde ${money(Math.min(...valores))}`
}

export default function Precios() {
  // El catálogo de cortes se define en site.js (`seccionesCortes`).
  const secciones = precios.grupos[0]?.secciones ?? []

  return (
    <section className="section section--light precios" id="precios" aria-labelledby="precios-title">
      <div className="container">
        <header className="precios__head">
          <Numeral value={precios.numeral} className="reveal" />
          <div className="precios__head-text reveal" data-delay="1">
            <p className="eyebrow">{precios.kicker}</p>
            <h2 id="precios-title">{precios.titulo}</h2>
            <p className="lead">{precios.intro}</p>
          </div>
        </header>

        <ul className="precios__list">
          {secciones.map((seccion, index) => (
            <li className="precio reveal" key={seccion.id} data-delay={String((index % 3) + 1)}>
              <span className="precio__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="precio__name">{seccion.nombre}</span>
              <span className="precio__value" aria-label={`Precio: ${desde(seccion.items)}`}>
                {desde(seccion.items)}
              </span>
            </li>
          ))}
        </ul>

        <p className="precios__pagos reveal">
          <Banknote size={18} aria-hidden="true" />
          <span>{precios.pagos}</span>
        </p>
      </div>
    </section>
  )
}
