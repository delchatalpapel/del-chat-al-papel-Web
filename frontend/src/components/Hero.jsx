import { EMPRESA, PASOS, waLink } from '../data/contenido'

function Ilustracion() {
  // Avión de papel -> píxeles -> hoja impresa (la misma idea del cartel)
  const cuadros = []
  for (let c = 0; c < 6; c++)
    for (let r = 0; r < 9; r++)
      if ((c * 7 + r * 3) % 5 < 3) cuadros.push({ c, r })
  const mix = (t) => {
    const a = [58, 66, 92], b = [224, 164, 88]
    return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(',')})`
  }
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Un avión de papel se convierte en píxeles y luego en una hoja impresa">
      <path d="M40 250 C 100 190, 150 300, 210 230" fill="none" stroke="#E0A458" strokeWidth="3" strokeDasharray="1 9" strokeLinecap="round" />
      <g className="plane">
        <path d="M30 255 L92 222 L60 285 L55 262 Z" fill="none" stroke="#F5F2EC" strokeWidth="3" strokeLinejoin="round" />
      </g>
      {cuadros.map(({ c, r }, i) => (
        <rect key={i} className="px" style={{ animationDelay: `${(i % 7) * 0.25}s` }}
          x={200 + c * 16} y={120 + r * 18} width="10" height="10" fill={mix(c / 5)} />
      ))}
      <g>
        <rect x="290" y="110" width="100" height="140" fill="#F5F2EC" />
        <path d="M370 110 L390 110 L390 130 Z" fill="#D2CCC0" />
        <rect x="304" y="124" width="12" height="12" fill="#E0A458" />
        <rect x="304" y="152" width="70" height="4" fill="#283048" />
        <rect x="304" y="164" width="58" height="4" fill="#808696" />
        <rect x="304" y="176" width="64" height="4" fill="#808696" />
        <rect x="304" y="188" width="44" height="4" fill="#A9AEBB" />
        <rect x="304" y="222" width="34" height="4" fill="#3D5A99" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero dark">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow plain reveal">{EMPRESA.lema}</p>
            <h1 className="h-display reveal d1">
              Del chat <em>al papel.</em>
            </h1>
            <p className="lead reveal d2">
              Mándanos tu archivo por WhatsApp. Nosotros lo imprimimos y te lo entregamos en {EMPRESA.entrega}.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-gold" href={waLink()} target="_blank" rel="noopener noreferrer">
                Enviar archivo por WhatsApp
              </a>
              <a className="btn btn-ghost" href="#servicios">Ver precios</a>
            </div>
          </div>
          <div className="hero-art reveal d2">
            <Ilustracion />
          </div>
        </div>

        <div className="steps">
          {PASOS.map((p, i) => (
            <div key={p.n} className={`step reveal d${i + 1}`}>
              <span className="num">{p.n}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>

        <div className="horarios reveal">
          <div>
            <p className="eyebrow plain">Pedidos antes de las 11 a.m.</p>
            <p>Se entregan ese mismo día, por la tarde.</p>
          </div>
          <div>
            <p className="eyebrow plain">Pedidos después de las 11 a.m.</p>
            <p>Se entregan al día siguiente, según la urgencia.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
