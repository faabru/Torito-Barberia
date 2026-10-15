import { ArrowRight, Clock } from 'lucide-react'
import { hero, negocio } from '../data/site.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          className="hero__img"
          src={hero.imagen}
          alt={hero.imagenAlt}
          width="1200"
          height="1600"
          fetchPriority="high"
          decoding="async"
        />
        <span className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <p className="hero__kicker reveal">{hero.kicker}</p>

        <h1 className="hero__title reveal" id="hero-title" data-delay="1">
          <span>Tu estilo.</span>
          <span>Tu identidad.</span>
        </h1>

        <p className="hero__sub lead reveal" data-delay="2">
          {hero.subtitulo}
        </p>

        <div className="hero__actions reveal" data-delay="3">
          <a className="btn btn--primary" href={hero.ctaPrincipal.href}>
            <span>{hero.ctaPrincipal.label}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href={hero.ctaSecundario.href}>
            {hero.ctaSecundario.label}
          </a>
        </div>

        <p className="hero__hint reveal" data-delay="3">
          <Clock size={15} aria-hidden="true" />
          <span>
            {negocio.horarios.texto}
            {/* PENDIENTE: horario completo a confirmar con el dueño */}
          </span>
        </p>
      </div>

      <div className="hero__edge" aria-hidden="true">
        <span className="pole hero__strip" />
      </div>
    </section>
  )
}
