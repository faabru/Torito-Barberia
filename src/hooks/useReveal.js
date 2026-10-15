import { useEffect } from 'react'

/**
 * Aparición suave al hacer scroll usando IntersectionObserver.
 * Añade `.is-visible` a los elementos `.reveal`. Sin librerías externas.
 * Respeta `prefers-reduced-motion` (revela todo de inmediato).
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}
