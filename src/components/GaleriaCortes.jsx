import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Scissors, X } from 'lucide-react'
import { precios } from '../data/site.js'
import './GaleriaCortes.css'

const precio = (valor) =>
  typeof valor === 'number' ? `$${valor.toLocaleString('es-AR')}` : precios.precioFallback

const contar = (corte) => corte.fotos?.length ?? 0

/**
 * Galería de tipos de corte: navegación por categoría, grilla de tarjetas
 * (foto + nombre + precio) y visor (lightbox) para ver todas las fotos.
 */
export default function GaleriaCortes({ secciones }) {
  // `abierto` = { corte, indice } mientras el visor está activo.
  const [abierto, setAbierto] = useState(null)

  const cerrar = useCallback(() => setAbierto(null), [])

  const mover = useCallback((delta) => {
    setAbierto((estado) => {
      if (!estado) return estado
      const total = contar(estado.corte)
      if (total <= 1) return estado
      return { corte: estado.corte, indice: (estado.indice + delta + total) % total }
    })
  }, [])

  useEffect(() => {
    if (!abierto) return

    const alTeclear = (evento) => {
      if (evento.key === 'Escape') cerrar()
      else if (evento.key === 'ArrowRight') mover(1)
      else if (evento.key === 'ArrowLeft') mover(-1)
    }

    document.addEventListener('keydown', alTeclear)
    const overflowPrevio = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', alTeclear)
      document.body.style.overflow = overflowPrevio
    }
  }, [abierto, cerrar, mover])

  const irA = (id) => {
    const destino = document.getElementById(`gal-${id}`)
    if (destino) destino.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const corte = abierto?.corte
  const fotos = corte?.fotos ?? []

  return (
    <div className="galeria-cortes">
      <nav className="gal-nav" aria-label="Ir a una categoría de corte">
        {secciones.map((seccion) => (
          <button
            key={seccion.id}
            type="button"
            className="gal-nav__chip"
            onClick={() => irA(seccion.id)}
          >
            {seccion.corto ?? seccion.nombre}
          </button>
        ))}
      </nav>

      {secciones.map((seccion) => (
        <section
          className="gal-group"
          id={`gal-${seccion.id}`}
          key={seccion.id}
          aria-labelledby={`gal-${seccion.id}-t`}
        >
          <header className="gal-group__head">
            <h3 className="gal-group__title" id={`gal-${seccion.id}-t`}>
              {seccion.nombre}
            </h3>
            <span className="gal-group__count">{seccion.items.length} cortes</span>
          </header>

          <ul className="gal-grid">
            {seccion.items.map((item, index) => {
              const total = contar(item)
              return (
                <li className="gal-card" key={item.id}>
                  <button
                    type="button"
                    className="gal-card__btn"
                    onClick={() => setAbierto({ corte: item, indice: 0 })}
                    aria-label={`${item.nombre}. ${precio(item.precio)}. Ver fotos`}
                    style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
                  >
                    <span className="gal-card__media">
                      {item.imagen ? (
                        <img
                          className="gal-card__img"
                          src={item.imagen}
                          alt={item.imagenAlt}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="gal-card__ph">
                          <Scissors size={26} strokeWidth={1.5} aria-hidden="true" />
                          <span>Foto próximamente</span>
                        </span>
                      )}
                      <span className="gal-card__veil" aria-hidden="true" />
                      {total > 1 && <span className="gal-card__badge">{total} fotos</span>}
                      <span className="gal-card__body">
                        <span className="gal-card__name">{item.nombre}</span>
                        <span className="gal-card__price">{precio(item.precio)}</span>
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      ))}

      {corte && (
        <div
          className="gal-lb"
          role="dialog"
          aria-modal="true"
          aria-label={`${corte.nombre} — ${precio(corte.precio)}`}
          onClick={cerrar}
        >
          <div className="gal-lb__panel" onClick={(evento) => evento.stopPropagation()}>
            <button className="gal-lb__close" type="button" onClick={cerrar} aria-label="Cerrar">
              <X size={22} aria-hidden="true" />
            </button>

            {fotos.length > 1 && (
              <button
                className="gal-lb__nav gal-lb__nav--prev"
                type="button"
                onClick={() => mover(-1)}
                aria-label="Foto anterior"
              >
                <ChevronLeft size={26} aria-hidden="true" />
              </button>
            )}

            <figure className="gal-lb__figure">
              {fotos.length > 0 ? (
                <img className="gal-lb__img" src={fotos[abierto.indice]} alt={corte.imagenAlt} />
              ) : (
                <span className="gal-lb__sin">
                  <Scissors size={28} strokeWidth={1.5} aria-hidden="true" />
                  Foto próximamente
                </span>
              )}

              <figcaption className="gal-lb__caption">
                <span className="gal-lb__name">{corte.nombre}</span>
                <span className="gal-lb__price">{precio(corte.precio)}</span>
                {fotos.length > 1 && (
                  <span className="gal-lb__contador">
                    {abierto.indice + 1} / {fotos.length}
                  </span>
                )}
              </figcaption>
            </figure>

            {fotos.length > 1 && (
              <button
                className="gal-lb__nav gal-lb__nav--next"
                type="button"
                onClick={() => mover(1)}
                aria-label="Foto siguiente"
              >
                <ChevronRight size={26} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
