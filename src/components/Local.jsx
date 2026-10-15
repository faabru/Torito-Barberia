import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { elLocal, video } from '../data/site.js'
import VideoAmbient from './VideoAmbient.jsx'
import Numeral from './Numeral.jsx'
import './Local.css'

/* ---------------------------------------------------------------- Lightbox --- */
function Lightbox({ items, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const item = items[index]

  useEffect(() => {
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNavigate(1)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onNavigate(-1)
        return
      }
      if (event.key !== 'Tab') return
      const nodes = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      )
      if (!nodes || nodes.length === 0) return
      const list = Array.from(nodes)
      const first = list[0]
      const last = list[list.length - 1]
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
  }, [onClose, onNavigate])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} de ${items.length}: ${item.alt}`}
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="lightbox__bar">
        <span className="lightbox__count">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <button ref={closeRef} type="button" className="lightbox__btn" onClick={onClose} aria-label="Cerrar visor">
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={() => onNavigate(-1)}
        aria-label="Foto anterior"
      >
        <ChevronLeft size={28} aria-hidden="true" />
      </button>

      <figure className="lightbox__figure">
        <img className="lightbox__img" src={item.src} alt={item.alt} width={item.w} height={item.h} />
        <figcaption className="lightbox__caption">{item.alt}</figcaption>
      </figure>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={() => onNavigate(1)}
        aria-label="Foto siguiente"
      >
        <ChevronRight size={28} aria-hidden="true" />
      </button>
    </div>
  )
}

/* --------------------------------------------------------------- El local --- */
export default function Local() {
  const [openIndex, setOpenIndex] = useState(null)
  const openerRef = useRef(null)

  const open = useCallback((index) => {
    openerRef.current = document.activeElement
    setOpenIndex(index)
  }, [])

  const close = useCallback(() => setOpenIndex(null), [])

  const navigate = useCallback((step) => {
    setOpenIndex((current) => (current + step + elLocal.items.length) % elLocal.items.length)
  }, [])

  /* Devuelve el foco a la miniatura que abrió el visor al cerrar */
  useEffect(() => {
    if (openIndex === null && openerRef.current) {
      openerRef.current.focus?.()
      openerRef.current = null
    }
  }, [openIndex])

  return (
    <section className="section section--light local" id="el-local" aria-labelledby="el-local-title">
      <div className="container">
        <header className="local__head">
          <Numeral value={elLocal.numeral} className="reveal" />
          <div className="local__head-text reveal" data-delay="1">
            <p className="eyebrow">{elLocal.kicker}</p>
            <h2 id="el-local-title">{elLocal.titulo}</h2>
            <p className="lead">{elLocal.intro}</p>
          </div>
        </header>

        {/* Video real del local (banda ambiental, carga diferida) */}
        {video.ambiente && (
          <figure className="local__video reveal">
            <VideoAmbient
              className="local__video-el"
              src={video.ambiente.src}
              poster={video.ambiente.poster}
              posterAlt={video.ambiente.alt}
            />
            <figcaption className="local__video-cap">Un recorrido por el local</figcaption>
          </figure>
        )}

        <ul className="local__grid">
          {elLocal.items.map((item, index) => (
            <li className={`local__cell g--${item.span}`} key={item.src + index}>
              <button
                type="button"
                className="local__tile reveal"
                onClick={() => open(index)}
                aria-label={`Ver foto: ${item.alt}`}
                data-delay={String((index % 3) + 1)}
              >
                <img
                  className="local__img"
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  loading="lazy"
                  decoding="async"
                />
                <span className="local__zoom" aria-hidden="true">
                  <Expand size={20} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {openIndex !== null && (
        <Lightbox items={elLocal.items} index={openIndex} onClose={close} onNavigate={navigate} />
      )}
    </section>
  )
}
