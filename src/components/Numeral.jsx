import { useEffect, useRef, useState } from 'react'

const DURACION = 2600 // ms del conteo
const UMBRAL = 0.2 // porción de la sección visible para activar el conteo

/**
 * Número de sección animado.
 * Cuenta de 0 al valor cuando su sección entra en pantalla y vuelve a 0 al
 * salir, de modo que el conteo se repite cada vez que el usuario la visita.
 * El texto se rellena con ceros para no cambiar de ancho mientras cuenta.
 */
export default function Numeral({ value, className = '' }) {
  const raw = String(value ?? '').trim()
  const objetivo = parseInt(raw.replace(/\D/g, ''), 10) || 0
  const ancho = raw.length || String(objetivo).length

  const [actual, setActual] = useState(0)
  const ref = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Observamos la sección contenedora: el valor se mantiene mientras el
    // usuario está en esa parte y vuelve a 0 al salir.
    const vigilado = el.closest('section') ?? el

    if (reducirMovimiento || !('IntersectionObserver' in window)) {
      setActual(objetivo)
      return
    }

    const detener = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }

    const contar = () => {
      detener()
      let inicio = 0
      const paso = (t) => {
        if (!inicio) inicio = t
        const p = Math.min((t - inicio) / DURACION, 1)
        const suave = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setActual(Math.round(suave * objetivo))
        if (p < 1) rafRef.current = requestAnimationFrame(paso)
      }
      rafRef.current = requestAnimationFrame(paso)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contar()
          } else {
            detener()
            setActual(0)
          }
        })
      },
      { threshold: UMBRAL },
    )

    observer.observe(vigilado)

    return () => {
      detener()
      observer.disconnect()
    }
  }, [objetivo])

  return (
    <span ref={ref} className={`numeral ${className}`.trim()} aria-hidden="true">
      {String(actual).padStart(ancho, '0')}
    </span>
  )
}
