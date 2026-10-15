import Logo from './Logo.jsx'
import { Scissors, Share2 } from 'lucide-react'
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from './SocialIcons.jsx'
import { footer, marca, negocio } from '../data/site.js'
import './Footer.css'

const { telefono, redes } = negocio

/* Redes: los 4 logos se muestran siempre (en blanco, sobre fondo negro).
   Orden del diseño en diagonal (abajo-izq → arriba-der): TikTok, IG, WA, FB.
   // PENDIENTE: cargar las URLs en site.js (`negocio.redes`). Mientras un valor
   sea null, su logo se muestra sin enlace (nunca "#" ni enlaces rotos). */
const socials = [
  { id: 'tiktok', nombre: 'TikTok', url: redes.tiktok, Icon: TiktokIcon },
  { id: 'instagram', nombre: 'Instagram', url: redes.instagram, Icon: InstagramIcon },
  { id: 'whatsapp', nombre: 'WhatsApp', url: redes.whatsapp, Icon: WhatsappIcon },
  { id: 'facebook', nombre: 'Facebook', url: redes.facebook, Icon: FacebookIcon },
]

/* "Turnos": WhatsApp si está confirmado; si no, el teléfono fijo de site.js. */
const turnosEsWhatsapp = Boolean(redes.whatsapp)
const turnosHref = redes.whatsapp ?? telefono.href

/* Navaja de afeitar (no existe en lucide-react). Trazo simple, negro. */
function RazorIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 21l3-3" />
      <path d="M20 4l-3 3-7 7-2-2 7-7 3-3 2 2z" />
      <path d="M14 6l4 4" />
    </svg>
  )
}

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Separador de marca (tira diagonal), uso único antes del footer */}
      <div className="pole footer__divider" aria-hidden="true" />

      <div className="container footer__inner">
        <div className="footer__grid">
          {/* Marca: logo REAL del proyecto + nombre + lema */}
          <div className="footer__brand">
            <Logo size={96} blanco alt={marca.nombre} />
            <p className="footer__brand-name">{marca.nombre}</p>
            <p className="footer__tagline">Estilo — Confianza — Actitud</p>
          </div>

          {/* Peluquería */}
          <nav className="footer__col" aria-label="Peluquería">
            <h2 className="footer__col-title">
              <Scissors size={20} strokeWidth={2.2} />
              <span>Peluquería</span>
            </h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href="/#nosotros">Nosotros</a>
              </li>
              {footer.historiaConfirmada && (
                <li>
                  <a className="footer__link" href="/#historia">Historia</a>
                </li>
              )}
              <li>
                <a className="footer__link" href="/#contacto">Ubicación</a>
              </li>
            </ul>
          </nav>

          {/* Servicios */}
          <nav className="footer__col" aria-label="Servicios">
            <h2 className="footer__col-title">
              <RazorIcon size={20} />
              <span>Servicios</span>
            </h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href="/#servicios">Cortes</a>
              </li>
              <li>
                <a className="footer__link" href="/#servicios">Barba</a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href={turnosHref}
                  {...(turnosEsWhatsapp
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : null)}
                >
                  Turnos
                </a>
              </li>
            </ul>
          </nav>

          {/* Redes */}
          <div className="footer__col footer__col--redes">
            <h2 className="footer__col-title">
              <Share2 size={20} strokeWidth={2.2} />
              <span>Redes</span>
            </h2>
            <ul className="footer__social">
              {socials.map(({ id, nombre, url, Icon }) => (
                <li key={id}>
                  {url ? (
                    <a
                      className="footer__social-link"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${nombre} de ${marca.nombre}`}
                    >
                      <Icon size={24} />
                    </a>
                  ) : (
                    <span
                      className="footer__social-link footer__social-link--pending"
                      role="img"
                      aria-label={`${nombre} de ${marca.nombre} (enlace pendiente)`}
                      title="Enlace pendiente"
                    >
                      <Icon size={24} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__copyright">
          <span className="footer__copyright-line" aria-hidden="true" />
          <span>© {anio} {marca.nombre}. Todos los derechos reservados.</span>
          <span className="footer__copyright-line" aria-hidden="true" />
        </div>
      </div>
    </footer>
  )
}
