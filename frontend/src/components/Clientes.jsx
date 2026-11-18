import { CLIENTES } from '../data/contenido'

export default function Clientes() {
  return (
    <section id="clientes">
      <div className="wrap">
        <p className="eyebrow reveal">Principales clientes</p>
        <hr className="rule" />
        <h2 className="h-section reveal">
          A quién le <em>imprimimos.</em>
        </h2>
        <p className="lead reveal d1" style={{ marginBottom: 40 }}>
          Atendemos a la comunidad de Jilotepec y alrededores: de la tarea de mañana al pedido de cada semana.
        </p>
        <div className="clientes">
          {CLIENTES.map((c, i) => (
            <article key={c.nombre} className={`cliente reveal d${(i % 3) + 1}`}>
              <span className="tag">{String(i + 1).padStart(2, '0')}</span>
              <h3>{c.nombre}</h3>
              <p>{c.detalle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
