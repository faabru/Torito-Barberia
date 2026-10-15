import { anuncios, anunciosCierre, precios } from '../data/site.js'
import './Anuncios.css'

/* Todos los nombres del catálogo de cortes (para la marquesina principal). */
const cortes = (precios.grupos[0]?.secciones ?? []).flatMap((seccion) =>
  seccion.items.map((item) => item.nombre),
)

/* Juegos de frases por variante de marquesina. */
const FRASES = {
  principal: [...anuncios, ...cortes],
  cierre: anunciosCierre,
}

/**
 * Marquesina publicitaria: banda de anuncios que se desplaza en loop.
 * - variante="principal": frases de marca + todos los tipos de corte.
 * - variante="cierre": frases de cierre (antes del footer).
 */
export default function Anuncios({ variante = 'principal' }) {
  const frases = FRASES[variante] ?? FRASES.principal

  return (
    <section className="anuncios" aria-label="Anuncios de Torito Barbería">
      <div className="anuncios__track">
        {[0, 1].map((copia) => (
          <ul
            className="anuncios__row"
            key={copia}
            aria-hidden={copia === 1 ? 'true' : undefined}
          >
            {frases.map((frase, index) => (
              <li className="anuncios__item" key={`${copia}-${index}`}>
                <span>{frase}</span>
                <span className="anuncios__sep" aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
