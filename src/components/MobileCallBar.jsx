import { MessageCircle, Navigation, Phone } from 'lucide-react'
import { maps, negocio } from '../data/site.js'
import './MobileCallBar.css'

/**
 * Barra de acción fija (solo móvil): llamar siempre disponible.
 * Si hubiera WhatsApp confirmado, reemplaza el acceso secundario.
 */
export default function MobileCallBar() {
  const tieneWhatsApp = Boolean(negocio.whatsapp)

  return (
    <div className="mobile-bar" role="region" aria-label="Acciones rápidas">
      <a className="btn btn--primary mobile-bar__main" href={negocio.telefono.href}>
        <Phone size={18} aria-hidden="true" />
        <span>Llamar {negocio.telefono.display}</span>
      </a>

      {tieneWhatsApp ? (
        <a
          className="btn btn--ghost mobile-bar__alt"
          href={negocio.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span className="visually-hidden">Escribir por WhatsApp</span>
        </a>
      ) : (
        <a
          className="btn btn--ghost mobile-bar__alt"
          href={maps.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation size={18} aria-hidden="true" />
          <span className="visually-hidden">Cómo llegar</span>
        </a>
      )}
    </div>
  )
}
