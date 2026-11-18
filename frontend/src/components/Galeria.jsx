import { useEffect, useState } from 'react'
import { GALERIA } from '../data/contenido'

export default function Galeria() {
  const [abierta, setAbierta] = useState(null)

  useEffect(() => {
    if (!abierta) return
    const esc = (e) => e.key === 'Escape' && setAbierta(null)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [abierta])

  return (
    <section id="galeria" className="dark">
      <div className="wrap">
        <p className="eyebrow reveal">Galería</p>
        <hr className="rule" />
        <h2 className="h-section reveal">
          Hojas que ya <em>salieron del chat.</em>
        </h2>
        <p className="lead reveal d1" style={{ marginBottom: 40 }}>Toca una imagen para verla en grande.</p>
        <div className="galeria">
          {GALERIA.map((g, i) => (
            <figure
              key={g.src}
              className={`reveal d${(i % 4) + 1} ${g.src.includes('flyer') ? 'tall' : ''}`}
              tabIndex={0}
              role="button"
              aria-label={`Ampliar: ${g.alt}`}
              onClick={() => setAbierta(g)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setAbierta(g)}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              {g.src.includes('flyer') ? <figcaption>{g.t}</figcaption> : <figcaption className="sr-only">{g.t}</figcaption>}
            </figure>
          ))}
        </div>
      </div>

      {abierta && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={abierta.alt} onClick={() => setAbierta(null)}>
          <img src={abierta.src} alt={abierta.alt} onClick={(e) => e.stopPropagation()} />
          <button onClick={() => setAbierta(null)} aria-label="Cerrar" autoFocus>×</button>
        </div>
      )}
    </section>
  )
}
