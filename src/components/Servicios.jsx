import { Brush, Layers, PenTool, Scissors } from 'lucide-react'
import { servicios } from '../data/site.js'
import Numeral from './Numeral.jsx'
import './Servicios.css'

const ICONS = { Scissors, Layers, Brush, PenTool }

export default function Servicios() {
  return (
    <section className="section section--dark servicios" id="servicios" aria-labelledby="servicios-title">
      <div className="container">
        <header className="servicios__head">
          <Numeral value={servicios.numeral} className="reveal" />
          <div className="servicios__head-text reveal" data-delay="1">
            <p className="eyebrow">{servicios.kicker}</p>
            <h2 id="servicios-title">{servicios.titulo}</h2>
            <p className="lead">{servicios.intro}</p>
          </div>
        </header>

        <ul className="servicios__list">
          {servicios.lista.map((servicio, index) => {
            const Icon = ICONS[servicio.icono]
            return (
              <li className="servicio reveal" key={servicio.id} data-delay={String((index % 3) + 1)}>
                <span className="servicio__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {Icon && (
                  <span className="servicio__icon" data-accent={servicio.acento} aria-hidden="true">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                )}

                <div className="servicio__text">
                  <h3 className="servicio__name">{servicio.nombre}</h3>
                  <p className="servicio__desc">{servicio.descripcion}</p>
                </div>
              </li>
            )
          })}
        </ul>

        {/* PENDIENTE: reemplazar por la lista real de servicios y precios del dueño */}
        <p className="servicios__note reveal">
          Lista de servicios y precios a confirmar con el local.
        </p>
      </div>
    </section>
  )
}
