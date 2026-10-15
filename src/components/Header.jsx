import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react'
import Logo from './Logo.jsx'
import { nav, negocio } from '../data/site.js'
import './Header.css'

/* CTA del header: WhatsApp si estuviera confirmado; si no, llamada telefónica. */
const cta = negocio.whatsapp
  ? { href: negocio.whatsapp.href, label: 'WhatsApp', icon: MessageCircle, external: true }
  : { href: negocio.telefono.href, label: 'Llamar', icon: Phone, external: false }

/* Ubicación para el pie del panel móvil (sin teléfono ni WhatsApp). */
const ubicacion = `${negocio.direccion.calle}, ${negocio.direccion.ciudad}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  /* Sombra/sólido al hacer scroll (movimiento sutil) */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Menú móvil: Escape cierra, foco atrapado, scroll bloqueado */
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const focusables = () =>
      panel
        ? Array.from(
            panel.querySelectorAll(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
        : []

    focusables()[0]?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="header" data-scrolled={scrolled ? 'true' : 'false'}>
      <div className="header__inner container">
        <a className="header__brand" href="/#inicio" aria-label="Barbería Torito — ir al inicio">
          <Logo size={40} blanco alt="" />
          <span className="header__brand-text">
            <span className="header__brand-strong">Torito</span>
            <span className="header__brand-name">Barbería</span>
          </span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="header__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a
            className="btn btn--primary header__cta"
            href={cta.href}
            {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <cta.icon size={18} aria-hidden="true" />
            <span>{cta.label}</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Panel de navegación móvil */}
      <div
        className="header__mobile"
        id="menu-movil"
        data-open={open ? 'true' : 'false'}
        aria-hidden={open ? 'false' : 'true'}
      >
        <div className="menu" ref={panelRef}>
          <div className="menu__top">
            <span className="menu__eyebrow">Menú</span>
            <button
              type="button"
              className="menu__back"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              aria-label="Volver al sitio"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Volver</span>
            </button>
          </div>

          <nav className="menu__nav" aria-label="Navegación móvil">
            <ul className="menu__list">
              {nav.map((item, index) => (
                <li key={item.href} style={{ '--i': index }}>
                  <a href={item.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
                    <span className="menu__num">{`0${index + 1}`}</span>
                    <span className="menu__label">{item.label}</span>
                    <ArrowUpRight className="menu__arrow" size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu__foot">
            <p className="menu__foot-item">
              <MapPin size={15} aria-hidden="true" />
              <span>{ubicacion}</span>
            </p>
            <p className="menu__foot-item">
              <Clock size={15} aria-hidden="true" />
              <span>{negocio.horarios.texto}</span>
            </p>
          </div>
        </div>
      </div>

      {open && (
        <button className="header__scrim" aria-hidden="true" tabIndex={-1} onClick={closeMenu} />
      )}
    </header>
  )
}
