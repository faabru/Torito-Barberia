import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cortes, precios } from '../data/site.js'
import Numeral from './Numeral.jsx'
import './Cortes.css'

export default function Cortes() {
  return (
    <section className="section section--dark cortes" id="cortes" aria-labelledby="cortes-title">
      <div className="container">
        <header className="cortes__head">
          <Numeral value={cortes.numeral} className="reveal" />
          <div className="cortes__head-text reveal" data-delay="1">
            <p className="eyebrow">{cortes.kicker}</p>
            <h2 id="cortes-title">{cortes.titulo}</h2>
            <p className="lead">{cortes.intro}</p>
          </div>
        </header>

        <ul className="cortes__grid">
          {precios.grupos.map((grupo, index) => (
            <li className="cortes__cell" key={grupo.id}>
              <Link
                className="cortes__card reveal"
                to={`/${grupo.id}`}
                data-accent={grupo.acento}
                data-delay={String(index + 1)}
                aria-label={`${grupo.nombre}: ${precios.verLabel}`}
              >
                <img
                  className="cortes__img"
                  src={grupo.imagen}
                  alt={grupo.imagenAlt}
                  width={grupo.w}
                  height={grupo.h}
                  loading="lazy"
                  decoding="async"
                />
                <span className="cortes__veil" aria-hidden="true" />
                <span className="cortes__body">
                  <span className="cortes__name">{grupo.nombre}</span>
                  <span className="cortes__text">{grupo.resumen}</span>
                  <span className="cortes__cta" aria-hidden="true">
                    {precios.verLabel}
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
