import { marca } from '../data/site.js'
import './Logo.css'

/**
 * Isotipo PROVISORIO en SVG (toro de frente, trazo monolineal geométrico).
 * Reemplazar por el isotipo definitivo cuando el dueño lo confirme.
 * Se usa SOLO como respaldo si no existiera el logo real.
 */
function IsotipoProvisorio({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M11 12c-3-1-6 .5-7 3 3 1.2 6 1.6 9 .6" />
      <path d="M37 12c3-1 6 .5 7 3-3 1.2-6 1.6-9 .6" />
      <path d="M13 13c1-2.4 4.6-3.6 11-3.6S34 10.6 35 13" />
      <path d="M13 13.5c-2 3-2 7.6 0 10.8C15 28.6 19.2 31 24 31s9-2.4 11-6.7c2-3.2 2-7.8 0-10.8" />
      <path d="M18.5 30.5c0 2.8 3 4.8 5.5 4.8s5.5-2 5.5-4.8" />
      <path d="M24 23.5v4" />
      <circle cx="19" cy="21.5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="29" cy="21.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Logo del sitio.
 * - Usa el LOGO REAL provisto (PNG transparente) tal cual, sin recolorear.
 * - `blanco`: usa la versión en blanco del logo (para fondos oscuros).
 * - `plate`: muestra el logo sobre una placa clara para asegurar contraste
 *   sobre fondos negros (header / footer). No modifica el logo en sí.
 */
export default function Logo({
  size = 40,
  plate = false,
  blanco = false,
  className = '',
  alt,
}) {
  const label = alt ?? (blanco ? marca.logoBlancoAlt : marca.logoAlt)
  const src = blanco ? marca.logoBlanco : marca.logo

  const content = src ? (
    <img
      className="logo__img"
      src={src}
      alt={label}
      width={size}
      height={size}
      decoding="async"
    />
  ) : (
    <IsotipoProvisorio className="logo__img logo__img--svg" />
  )

  return (
    <span
      className={`logo${plate ? ' logo--plate' : ''} ${className}`.trim()}
      style={{ '--logo-size': `${size}px` }}
    >
      {content}
    </span>
  )
}
