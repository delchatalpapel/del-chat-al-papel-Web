const VALORES = [
  { t: 'Claridad', d: 'Precio y hora de entrega antes de imprimir. Sin sorpresas.' },
  { t: 'Puntualidad', d: 'Respetamos el corte de las 11 a.m. y la urgencia de cada pedido.' },
  { t: 'Cuidado', d: 'Revisamos cada archivo y cada hoja antes de entregarla.' },
  { t: 'Privacidad', d: 'Tus archivos se usan solo para imprimir y luego se borran.' },
]

export default function MisionVision() {
  return (
    <section id="mision" className="dark">
      <div className="wrap">
        <p className="eyebrow reveal">Misión y visión</p>
        <hr className="rule" />
        <h2 className="h-section reveal">
          Lo que nos mueve, <em>hoja por hoja.</em>
        </h2>
        <div className="mv">
          <article className="reveal d1">
            <h3><em>Misión</em></h3>
            <p>
              Hacer que imprimir sea tan fácil como mandar un mensaje: recibir archivos por WhatsApp, imprimirlos con
              calidad y precio justo, y entregarlos a tiempo en Jilotepec Centro para que estudiantes, familias y negocios
              ahorren tiempo y vueltas.
            </p>
          </article>
          <article className="reveal d2">
            <h3><em>Visión</em></h3>
            <p>
              Ser para 2030 el servicio de impresión en línea de referencia en el norte del Estado de México, con más
              puntos de entrega, pedidos que se siguen en tiempo real y productos personalizados para emprendedores de la
              región.
            </p>
          </article>
        </div>
        <div className="valores">
          {VALORES.map((v, i) => (
            <div key={v.t} className={`valor reveal d${i + 1}`}>
              <h4>{v.t}</h4>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
