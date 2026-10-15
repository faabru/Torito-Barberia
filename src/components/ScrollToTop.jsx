import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Lleva el scroll al inicio al cambiar de ruta (React Router no lo hace solo).
 * Si la URL trae hash, respeta el ancla en lugar de saltar arriba.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
