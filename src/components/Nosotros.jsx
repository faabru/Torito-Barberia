import { Eye, Heart, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { marca, nosotros } from '../data/site.js'
import Numeral from './Numeral.jsx'
import './Nosotros.css'

const ICONS = { Target, Sparkles, Eye, Heart }

export default function Nosotros() {
  return (
    <section className="section section--dark nosotros" id="nosotros" aria-labelledby="nosotros-title">
      {/* Marca de agua muy sutil del isotipo en blanco (ya viene en blanco) */}
      <span className="nosotros__watermark" aria-hidden="true">
        <img src={marca.logoBlanco} alt="" width="500" height="500" loading="lazy" decoding="async" />
      </span>

      <div className="container nosotros__grid">
        <figure className="nosotros__media reveal">
          <Link
            className="nosotros__media-link"
            to={nosotros.paginaHref}
            aria-label={nosotros.paginaLabel}
          >
            <img
              className="nosotros__img"
              src={nosotros.imagen}
              alt=""
              width="987"
              height="987"
              loading="lazy"
              decoding="async"
            />
            <span className="nosotros__media-badge" aria-hidden="true">
              Cortes y videos
            </span>
          </Link>
        </figure>

        <div className="nosotros__content">
          <Numeral value={nosotros.numeral} className="reveal" />
          <div className="reveal" data-delay="1">
            <p className="eyebrow">{nosotros.kicker}</p>
            <h2 id="nosotros-title">{nosotros.titulo}</h2>
          </div>

          <ul className="nosotros__list">
            {nosotros.principios.map((principio, index) => {
              const Icon = ICONS[principio.icono]
              return (
                <li className="principio reveal" key={principio.id} data-delay={String((index % 3) + 1)}>
                  {Icon && (
                    <span className="principio__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                  )}
                  <div>
                    <h3 className="principio__title">{principio.titulo}</h3>
                    <p className="principio__text">{principio.texto}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
