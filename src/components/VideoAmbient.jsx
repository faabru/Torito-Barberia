import { useEffect, useRef } from 'react'

/**
 * Video ambiental con carga diferida y responsable:
 * - Solo carga y reproduce cuando entra en viewport, en escritorio y sin
 *   `prefers-reduced-motion`. En móvil/uso reducido muestra únicamente el poster.
 * - Silenciado, en bucle y sin controles (contenido ambiental, no narrativo).
 */
export default function VideoAmbient({ src, poster, posterAlt, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Repetición en bucle garantizada: además del atributo `loop`, se fuerza
    // por JS y se reinicia al terminar por si el entorno ignora el atributo.
    video.loop = true
    const restart = () => {
      video.currentTime = 0
      video.play?.().catch(() => {})
    }
    video.addEventListener('ended', restart)

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    const canObserve = 'IntersectionObserver' in window

    if (reduce || !isDesktop || !canObserve) {
      return () => video.removeEventListener('ended', restart)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = ref.current
          if (!el) return
          if (entry.isIntersecting) {
            if (!el.getAttribute('src')) {
              el.setAttribute('src', src)
              el.load()
            }
            el.play?.().catch(() => {})
          } else {
            el.pause?.()
          }
        })
      },
      { threshold: 0.35 },
    )

    observer.observe(video)
    return () => {
      observer.disconnect()
      video.removeEventListener('ended', restart)
    }
  }, [src])

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={posterAlt}
    />
  )
}
