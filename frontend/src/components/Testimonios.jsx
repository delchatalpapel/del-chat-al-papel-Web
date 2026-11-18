import { TESTIMONIOS } from '../data/contenido'

export default function Testimonios() {
  return (
    <section id="testimonios" className="dark" style={{ borderTop: '1px solid var(--line-dark)' }}>
      <div className="wrap">
        <p className="eyebrow reveal">Testimonios de clientes</p>
        <hr className="rule" />
        <h2 className="h-section reveal">
          Lo que dicen <em>en el chat.</em>
        </h2>
        <div className="testis" style={{ marginTop: 40 }}>
          {TESTIMONIOS.map((t, i) => (
            <figure key={t.nombre} className={`testi reveal d${(i % 2) + 1}`} style={{ margin: 0 }}>
              <div className="stars" aria-label="5 de 5 estrellas">★★★★★</div>
              <blockquote>{t.texto}</blockquote>
              <figcaption>
                <cite>
                  {t.nombre}
                  <span>{t.rol}</span>
                </cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
