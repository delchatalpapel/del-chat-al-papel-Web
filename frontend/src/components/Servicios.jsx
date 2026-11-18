import { useMemo, useState } from 'react'
import { PRECIOS, SERVICIOS, EMPRESA, waLink } from '../data/contenido'

const ICONOS = {
  bn: <><rect x="10" y="6" width="26" height="34" fill="#fff" stroke="#18223F" strokeWidth="2"/><rect x="15" y="14" width="16" height="2" fill="#18223F"/><rect x="15" y="20" width="12" height="2" fill="#6E7488"/><rect x="15" y="26" width="14" height="2" fill="#6E7488"/></>,
  color: <><rect x="10" y="6" width="26" height="34" fill="#fff" stroke="#18223F" strokeWidth="2"/><circle cx="18" cy="22" r="5" fill="#E0A458"/><circle cx="27" cy="22" r="5" fill="#3D5A99"/><circle cx="22.5" cy="30" r="5" fill="#C85A50"/></>,
  doble: <><rect x="4" y="10" width="40" height="28" fill="#fff" stroke="#18223F" strokeWidth="2"/><line x1="24" y1="10" x2="24" y2="38" stroke="#E0A458" strokeWidth="2" strokeDasharray="2 3"/></>,
  engargolado: <><rect x="14" y="6" width="26" height="36" fill="#fff" stroke="#18223F" strokeWidth="2"/>{[10,16,22,28,34].map(y=><ellipse key={y} cx="14" cy={y} rx="4" ry="2.4" fill="none" stroke="#E0A458" strokeWidth="2"/>)}</>,
  foto: <><rect x="6" y="10" width="36" height="28" fill="#3D5A99" stroke="#18223F" strokeWidth="2"/><path d="M6 38 L18 24 L26 32 L31 27 L42 38Z" fill="#18223F"/><circle cx="33" cy="18" r="3.5" fill="#E0A458"/></>,
  subli: <><rect x="10" y="12" width="22" height="28" rx="3" fill="#fff" stroke="#18223F" strokeWidth="2"/><path d="M32 18 h6 v14 h-6" fill="none" stroke="#18223F" strokeWidth="2"/>{[0,1,2].map(i=><rect key={i} x={14+i*6} y="20" width="4" height="4" fill="#E0A458"/>)}{[0,1].map(i=><rect key={i} x={17+i*6} y="27" width="4" height="4" fill="#3D5A99"/>)}</>,
}

const formato = (n) => `$${Number(n) % 1 ? Number(n).toFixed(2) : Number(n)}`

export default function Servicios() {
  // Los precios están en src/data/contenido.js; edítalos ahí.
  const precios = PRECIOS
  const [filtro, setFiltro] = useState('Todos')

  const categorias = useMemo(() => ['Todos', ...new Set(precios.map((p) => p.categoria))], [precios])
  const grupos = useMemo(() => {
    const out = {}
    precios
      .filter((p) => filtro === 'Todos' || p.categoria === filtro)
      .forEach((p) => (out[p.categoria] ||= []).push(p))
    return out
  }, [precios, filtro])

  return (
    <section id="servicios" className="alt">
      <div className="wrap">
        <p className="eyebrow reveal">Servicios y productos</p>
        <hr className="rule" />
        <h2 className="h-section reveal">
          Lo que imprimimos, <em>precio por hoja.</em>
        </h2>
        <p className="lead reveal d1" style={{ marginBottom: 40 }}>
          Del documento rápido al regalo personalizado. Si no ves lo que buscas, pregúntanos por WhatsApp.
        </p>

        <div className="cards">
          {SERVICIOS.map((s, i) => (
            <article key={s.t} className={`card reveal d${(i % 3) + 1}`}>
              <svg className="ico" viewBox="0 0 48 48" aria-hidden="true">{ICONOS[s.icon]}</svg>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>

        <div className="filtros reveal" role="group" aria-label="Filtrar tabla de precios">
          {categorias.map((c) => (
            <button key={c} className={`chip ${filtro === c ? 'on' : ''}`} aria-pressed={filtro === c} onClick={() => setFiltro(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="tabla-wrap reveal">
          <table className="tabla">
            <caption>
              Lista de precios
              <small>Precios en pesos mexicanos por hoja.</small>
            </caption>
            <thead>
              <tr>
                <th scope="col">Servicio</th>
                <th scope="col">Tamaño</th>
                <th scope="col" style={{ textAlign: 'right' }}>Precio</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(grupos).map(([cat, filas]) => [
                <tr key={cat} className="grupo"><th colSpan="3" scope="colgroup">{cat}</th></tr>,
                ...filas.map((p) => (
                  <tr key={cat + p.nombre}>
                    <th scope="row">{p.nombre}</th>
                    <td>{p.tamano}</td>
                    <td className="precio">{formato(p.precio)}</td>
                  </tr>
                )),
              ])}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  Precios vigentes. Papeles especiales: cotiza por WhatsApp.
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="especiales reveal">
          <div>
            <p className="eyebrow plain">Especiales · cotiza por WhatsApp</p>
            <p>Papel fotográfico<br />Papel texturizado<br />Papel adhesivo<br /> Papel de sublimación</p>
          </div>
          <a className="tel" href={waLink('Hola, quiero cotizar la impresión en un papel especial.')} target="_blank" rel="noopener noreferrer">
            [{EMPRESA.telefono}]
          </a>
        </div>
      </div>
    </section>
  )
}
