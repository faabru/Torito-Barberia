import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { nav, negocio } from '../data/site.js'
import './Header.css'

/* CTA: WhatsApp si estuviera confirmado; si no, llamada telefónica. */
const cta = negocio.whatsapp
  ? { href: negocio.whatsapp.href, label: 'WhatsApp', icon: Phone, external: true }
  : { href: negocio.telefono.href, label: 'Llamar', icon: Phone, external: false }

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
        <a className="header__brand" href="/#inicio">
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
                <a className="header__link link-underline" href={item.href}>
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
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
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
        <nav aria-label="Navegación móvil" ref={panelRef} className="header__mobile-inner container">
          <ul className="header__mobile-list">
            {nav.map((item, index) => (
              <li key={item.href} style={{ '--i': index }}>
                <a href={item.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
                  <span className="header__mobile-num">{`0${index + 1}`}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header__mobile-foot">
            <a
              className="btn btn--primary header__mobile-cta"
              href={cta.href}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              {...(cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <cta.icon size={18} aria-hidden="true" />
              <span>{cta.label}</span>
            </a>
            <p className="header__mobile-info">
              <Phone size={15} aria-hidden="true" />
              <a href={negocio.telefono.href} tabIndex={open ? 0 : -1}>
                {negocio.telefono.display}
              </a>
            </p>
          </div>
        </nav>
      </div>

      {open && <button className="header__scrim" aria-hidden="true" tabIndex={-1} onClick={closeMenu} />}
    </header>
  )
}
