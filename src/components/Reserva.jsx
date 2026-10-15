import { MessageCircle } from 'lucide-react'
import { reserva, negocio } from '../data/site.js'
import VideoAmbient from './VideoAmbient.jsx'
import Numeral from './Numeral.jsx'
import './Reserva.css'

/* El botón abre WhatsApp (confirmado); si no hubiera, cae al teléfono fijo. */
const reservaEsWhatsapp = Boolean(negocio.whatsapp)

const reservaHref = negocio.whatsapp?.href ?? negocio.telefono.href

export default function Reserva() {
  return (
    <section className="section reserva" id="reserva" aria-labelledby="reserva-title">
      {/* Video de fondo, cubriendo toda la sección */}
      <div className="reserva__media" aria-hidden="true">
        <VideoAmbient
          className="reserva__video"
          src={reserva.video.src}
          poster={reserva.video.poster}
          posterAlt={reserva.video.alt}
        />
        {/* Velo blanco suave a la derecha: refuerza la zona clara para el texto */}
        <span className="reserva__scrim" />
      </div>

      <div className="container reserva__inner">
        <div className="reserva__content reveal">
          <Numeral value={reserva.numeral} className="reserva__numeral" />
          <p className="eyebrow">{reserva.kicker}</p>
          <h2 id="reserva-title">{reserva.titulo}</h2>
          <p className="lead">{reserva.texto}</p>

          <a
            className="btn btn--primary reserva__cta"
            href={reservaHref}
            {...(reservaEsWhatsapp ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>{reserva.boton.label}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
