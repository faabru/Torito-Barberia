import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import { contacto, maps, negocio } from '../data/site.js'
import Numeral from './Numeral.jsx'
import './Contacto.css'

const { direccion, telefono, horarios } = negocio
const direccionCompleta = `${direccion.calle}, ${direccion.codigoPostal} ${direccion.ciudad}, ${direccion.provincia}`

export default function Contacto() {
  return (
    <section className="section section--light contacto" id="contacto" aria-labelledby="contacto-title">
      <div className="container">
        <header className="contacto__head">
          <Numeral value={contacto.numeral} className="reveal" />
          <div className="contacto__head-text reveal" data-delay="1">
            <p className="eyebrow">{contacto.kicker}</p>
            <h2 id="contacto-title">{contacto.titulo}</h2>
            <p className="lead">{contacto.introCta}</p>
          </div>
        </header>

        <div className="contacto__grid">
          <div className="contacto__info reveal">
            {/* Dirección */}
            <div className="info-row">
              <span className="info-row__icon info-row__icon--azul" aria-hidden="true">
                <MapPin size={20} />
              </span>
              <div className="info-row__body">
                <h3 className="info-row__label">Dirección</h3>
                <p className="info-row__value">{direccionCompleta}</p>
                <p className="info-row__muted">Plus Code: {direccion.plusCode}</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="info-row">
              <span className="info-row__icon info-row__icon--rojo" aria-hidden="true">
                <Phone size={20} />
              </span>
              <div className="info-row__body">
                <h3 className="info-row__label">Teléfono</h3>
                <a className="info-row__value link-underline" href={telefono.href}>
                  {telefono.display}
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="info-row">
              <span className="info-row__icon info-row__icon--azul" aria-hidden="true">
                <Clock size={20} />
              </span>
              <div className="info-row__body">
                <h3 className="info-row__label">Horarios</h3>
                {horarios.dias.length > 0 ? (
                  <ul className="horarios">
                    {horarios.dias.map((dia) => (
                      <li key={dia.dia}>
                        <span>{dia.dia}</span>
                        <span>{dia.horario}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="info-row__value">
                    Abre a las {horarios.aperturaConocida} h
                    <br />
                    <span className="info-row__muted">Resto del horario a confirmar</span>
                  </p>
                )}
              </div>
            </div>

            <a className="btn btn--dark contacto__dir" href={maps.link} target="_blank" rel="noopener noreferrer">
              <Navigation size={18} aria-hidden="true" />
              <span>Cómo llegar</span>
            </a>
          </div>

          <div className="contacto__map reveal" data-delay="1">
            <iframe
              className="contacto__iframe"
              src={maps.embed}
              title="Mapa de ubicación de Barbería Torito en Alberdi 320, Concepción, Tucumán"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
