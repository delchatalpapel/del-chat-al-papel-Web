import { useState, useEffect } from 'react'
import { MENU } from '../data/contenido'
import { useActiveSection } from '../hooks/useReveal'

const IDS = MENU.map((m) => m.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  useActiveSection(IDS, setActive)

  useEffect(() => {
    const close = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <header className="header">
      <div className="wrap">
        <a href="#inicio" className="brand" aria-label="Del chat al papel, ir al inicio">
          <img src="/favicon.svg" alt="" width="30" height="30" />
          <span>Del chat <em>al papel</em></span>
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
        <nav id="menu-principal" className={`nav ${open ? 'open' : ''}`} aria-label="Menú principal">
          {MENU.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className={active === m.id ? 'active' : ''}
              aria-current={active === m.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {m.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
