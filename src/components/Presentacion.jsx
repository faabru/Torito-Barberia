import { presentacion } from '../data/site.js'
import VideoAmbient from './VideoAmbient.jsx'
import Numeral from './Numeral.jsx'
import './Presentacion.css'

export default function Presentacion() {
  return (
    <section className="section section--light presentacion" id="presentacion" aria-labelledby="presentacion-title">
      <div className="container presentacion__grid">
        <div className="presentacion__head reveal">
          <Numeral value={presentacion.numeral} />
          <p className="eyebrow">{presentacion.kicker}</p>
          <h2 id="presentacion-title">{presentacion.titulo}</h2>
        </div>

        <div className="presentacion__body reveal" data-delay="1">
          {presentacion.parrafos.map((parrafo) => (
            <p className="lead" key={parrafo}>
              {parrafo}
            </p>
          ))}

          <figure className="presentacion__media">
            <VideoAmbient
              className="presentacion__img"
              src={presentacion.video.src}
              poster={presentacion.video.poster}
              posterAlt={presentacion.video.alt}
            />
            <figcaption className="presentacion__caption">Barbería Torito</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
