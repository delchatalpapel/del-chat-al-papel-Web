import { REDES, ENLACES, EMPRESA } from '../data/contenido'

export default function Redes() {
  return (
    <section id="redes">
      <div className="wrap">
        <p className="eyebrow reveal">Redes sociales y enlaces</p>
        <hr className="rule" />
        <h2 className="h-section reveal">
          Síguenos y <em>encuéntranos.</em>
        </h2>

        <div className="redes">
          {REDES.map((r, i) => (
            <a key={r.nombre} className={`red reveal d${i + 1}`} href={r.url} target="_blank" rel="noopener noreferrer">
              <strong>{r.nombre}</strong>
              <span>{r.handle}</span>
            </a>
          ))}
        </div>

        <div className="frames">
          <div className="frame reveal">
            <iframe
              title={`Mapa del punto de entrega: ${EMPRESA.entrega}`}
              src="https://maps.google.com/maps?q=Jilotepec%20de%20Molina%20Enr%C3%ADquez%20Centro%2C%20Estado%20de%20M%C3%A9xico&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="cap">Punto de entrega: {EMPRESA.entrega}. Te confirmamos el lugar exacto por WhatsApp.</div>
          </div>
          <div className="reveal d1">
            <p className="eyebrow plain">Herramientas útiles</p>
            <ul className="enlaces">
              {ENLACES.map((e) => (
                <li key={e.nombre}>
                  <a href={e.url} target="_blank" rel="noopener noreferrer">{e.nombre} ↗</a>
                  <small>{e.d}</small>
                </li>
              ))}
            </ul>
            <div className="frame" style={{ marginTop: 20 }}>
              <iframe
                title="Calendario de días festivos en México"
                src="https://calendar.google.com/calendar/embed?src=es.mexican%23holiday%40group.v.calendar.google.com&ctz=America%2FMexico_City&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0"
                loading="lazy"
                style={{ height: 240 }}
              />
              <div className="cap">Días festivos: revisa antes si necesitas tu pedido urgente.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
