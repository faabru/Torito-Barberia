import { useEffect, useRef } from 'react'
import { Phone, Scissors } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { peluquero, negocio } from '../data/site.js'
import useReveal from '../hooks/useReveal.js'
import Numeral from './Numeral.jsx'
import './PeluqueroPage.css'

/**
 * Video con controles del barbero. Carga diferida:
 * - No asigna `src` hasta acercarse al viewport (IntersectionObserver).
 * - `preload="none"` + poster: no descarga el video hasta tocar play.
 */
function PeluqueroVideo({ src, poster, label }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.loop = true
    const restart = () => {
      el.currentTime = 0
      el.play?.().catch(() => {})
    }
    el.addEventListener('ended', restart)

    if (!('IntersectionObserver' in window)) {
      if (!el.getAttribute('src')) {
        el.setAttribute('src', src)
        el.load()
      }
      el.play?.().catch(() => {})
      return () => el.removeEventListener('ended', restart)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = ref.current
          if (!video) return
          if (entry.isIntersecting) {
            if (!video.getAttribute('src')) {
              video.setAttribute('src', src)
              video.load()
            }
            video.play?.().catch(() => {})
          } else {
            video.pause?.()
          }
        })
      },
      { rootMargin: '240px' },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      el.removeEventListener('ended', restart)
    }
  }, [src])

  return (
    <video
      ref={ref}
      className="pelu-video__player"
      muted
      loop
      playsInline
      preload="none"
      poster={poster || undefined}
      aria-label={label}
    />
  )
}

export default function PeluqueroPage() {
  useReveal()

  return (
    <div className="pelu-page">
      <Header />

      <main id="contenido">
        {/* Hero: foto redonda del barbero + presentación */}
        <section className="section section--dark pelu-hero" aria-labelledby="pelu-title">
          <div className="container pelu-hero__grid">
            <figure className="pelu-hero__foto">
              <img
                className="pelu-hero__img"
                src={peluquero.foto}
                alt={peluquero.fotoAlt}
                width="987"
                height="987"
                decoding="async"
              />
            </figure>

            <div className="pelu-hero__content">
              <p className="eyebrow">{peluquero.kicker}</p>
              <h1 id="pelu-title">{peluquero.titulo}</h1>
              {peluquero.nombre && <p className="pelu-hero__nombre">{peluquero.nombre}</p>}
              {peluquero.breve && <p className="lead">{peluquero.breve}</p>}

              <div className="pelu-hero__acciones">
                <a className="btn btn--primary" href={negocio.telefono.href}>
                  <Phone size={18} aria-hidden="true" />
                  <span>{negocio.telefono.display}</span>
                </a>
                <a className="btn btn--ghost" href="#pelu-cortes">
                  <span>Ver cortes</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="pole" aria-hidden="true" />

        {/* Cortes del barbero */}
        <section
          className="section section--light pelu-cortes"
          id="pelu-cortes"
          aria-labelledby="pelu-cortes-title"
        >
          <div className="container">
            <header className="pelu-head">
              <Numeral value={peluquero.cortesNumeral} className="reveal" />
              <div className="pelu-head-text">
                <p className="eyebrow">{peluquero.cortesKicker}</p>
                <h2 id="pelu-cortes-title">{peluquero.cortesTitulo}</h2>
                <p className="lead">{peluquero.cortesLead}</p>
              </div>
            </header>

            {peluquero.cortes.length > 0 ? (
              <ul className="pelu-galeria">
                {peluquero.cortes.map((corte) => (
                  <li className="pelu-galeria__item" key={corte.id}>
                    <img
                      src={corte.src}
                      alt={corte.alt}
                      width={corte.w}
                      height={corte.h}
                      loading="lazy"
                      decoding="async"
                    />
                    {corte.nombre && <p className="pelu-galeria__name">{corte.nombre}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="pelu-empty">
                <Scissors size={28} strokeWidth={1.6} aria-hidden="true" />
                <h3>{peluquero.cortesEmptyTitulo}</h3>
                <p>{peluquero.cortesEmptyTexto}</p>
              </div>
            )}

            <p className="pelu-note">
              Listas completas de cortes y precios:
              <Link className="link-underline" to="/hombres">
                {' '}Hombres
              </Link>
            </p>
          </div>
        </section>

        {/* Videos del barbero y momentos divertidos */}
        <section
          className="section section--dark pelu-videos"
          id="pelu-videos"
          aria-labelledby="pelu-videos-title"
        >
          <div className="container">
            <header className="pelu-head">
              <Numeral value={peluquero.videosNumeral} className="reveal" />
              <div className="pelu-head-text">
                <p className="eyebrow">{peluquero.videosKicker}</p>
                <h2 id="pelu-videos-title">{peluquero.videosTitulo}</h2>
              </div>
            </header>

            <h3 className="pelu-video__title">Perfil del barbero</h3>
            <div className="pelu-video-featured">
              <PeluqueroVideo
                src={peluquero.videoPerfil.src}
                poster={peluquero.videoPerfil.poster}
                label={peluquero.videoPerfil.videoAlt}
              />
            </div>

            {peluquero.divertidos.length > 0 && (
              <>
                <h3 className="pelu-video__title">Momentos divertidos</h3>
                <div className="pelu-videos__grid">
                  {peluquero.divertidos.map((video) => (
                    <div className="pelu-video" key={video.id}>
                      <PeluqueroVideo src={video.src} poster={null} label={video.videoAlt} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}