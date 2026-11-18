import { useEffect, useState } from 'react'
import { EMPRESA, MENU, waLink } from '../data/contenido'

const ANIO = new Date().getFullYear()

export default function Footer() {
  const [arriba, setArriba] = useState(false)
  useEffect(() => {
    const on = () => setArriba(window.scrollY > 700)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <p className="eyebrow plain" style={{ color: 'var(--gold)' }}>Envía tu archivo por WhatsApp</p>
              <a className="tel" href={waLink()} target="_blank" rel="noopener noreferrer">[{EMPRESA.telefono}]</a>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p className="eyebrow plain" style={{ color: 'var(--gold)' }}>Punto de entrega</p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 34, color: 'var(--cream)', margin: 0 }}>{EMPRESA.entrega}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {ANIO} {EMPRESA.nombre} · {EMPRESA.lema}</span>
            <nav aria-label="Enlaces del pie de página" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              {MENU.slice(1).map((m) => <a key={m.id} href={`#${m.id}`}>{m.label}</a>)}
            </nav>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
        <span>WA</span>Imprime ahora
      </a>
      <button className={`to-top ${arriba ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0 })} aria-label="Volver arriba">↑</button>
    </>
  )
}
