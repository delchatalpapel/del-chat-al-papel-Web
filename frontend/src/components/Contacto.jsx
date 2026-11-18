import { useState } from 'react'
import { EMPRESA, waLink } from '../data/contenido'
import { enviarCorreo } from '../lib/api'

const INICIAL = { nombre: '', telefono: '', correo: '', servicio: '', cantidad: '', urgencia: 'normal', mensaje: '', acepta: false, sitio: '' }
const OPCIONES = ['Impresión blanco y negro', 'Impresión a color', 'Doble carta', 'Engargolado', 'Papel fotográfico', 'Papel de sublimación', 'Otro']
const URGENCIAS = { normal: 'Sin prisa', hoy: 'Hoy mismo', manana: 'Mañana' }

function validar(f) {
  const e = {}
  if (f.nombre.trim().length < 2) e.nombre = 'Escribe tu nombre.'
  if (!/^\d{10}$/.test(f.telefono.replace(/\D/g, ''))) e.telefono = 'Usa 10 dígitos.'
  if (f.correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.correo)) e.correo = 'Correo no válido.'
  if (!f.servicio) e.servicio = 'Elige un servicio.'
  if (f.mensaje.trim().length < 5) e.mensaje = 'Cuéntanos un poco más.'
  if (!f.acepta) e.acepta = 'Necesitamos tu aceptación.'
  return e
}

// Mismo texto para WhatsApp y para el correo
function armarTexto(f) {
  return [
    `Hola, soy ${f.nombre.trim()}.`,
    `Servicio: ${f.servicio}${f.cantidad ? ` (${f.cantidad} hojas)` : ''}`,
    `Para cuándo: ${URGENCIAS[f.urgencia]}`,
    `Mi WhatsApp: ${f.telefono}${f.correo ? ` · Correo: ${f.correo}` : ''}`,
    '',
    f.mensaje.trim(),
  ].join('\n')
}

const mailtoLink = (f) =>
  `mailto:${EMPRESA.correo}?subject=${encodeURIComponent(`Contacto web: ${f.servicio} · ${f.nombre}`)}&body=${encodeURIComponent(armarTexto(f))}`

export default function Contacto() {
  const [f, setF] = useState(INICIAL)
  const [err, setErr] = useState({})
  const [estado, setEstado] = useState({ tipo: '', msg: '', respaldo: null })
  const [enviando, setEnviando] = useState(false)

  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  function revisar() {
    const v = validar(f)
    setErr(v)
    setEstado({ tipo: '', msg: '', respaldo: null })
    return Object.keys(v).length === 0
  }

  function porWhatsApp() {
    if (!revisar() || f.sitio) return
    window.open(waLink(armarTexto(f)), '_blank', 'noopener')
    setEstado({ tipo: 'ok', msg: 'Abrimos WhatsApp con tu mensaje listo. Solo presiona enviar.', respaldo: null })
  }

  async function porCorreo(e) {
    e.preventDefault()
    if (!revisar()) return
    setEnviando(true)
    try {
      const r = await enviarCorreo({
        subject: `Contacto web: ${f.servicio} · ${f.nombre.trim()}`,
        nombre: f.nombre.trim(),
        telefono: f.telefono.replace(/\D/g, ''),
        correo: f.correo.trim(),
        servicio: f.servicio,
        cantidad: f.cantidad,
        urgencia: URGENCIAS[f.urgencia],
        mensaje: f.mensaje.trim(),
        acepta: f.acepta ? 'Sí' : 'No',
        sitio: f.sitio,
      })
      setEstado({ tipo: 'ok', msg: r.detail || '¡Gracias! Recibimos tu mensaje.', respaldo: null })
      setF(INICIAL)
    } catch {
      // Si el envío falla, el mismo mensaje se puede mandar desde la app de correo o por WhatsApp
      setEstado({ tipo: 'warn', msg: 'No pudimos enviar el correo en este momento. Envíalo desde tu app de correo o por WhatsApp:', respaldo: { ...f } })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="contacto" className="alt">
      <div className="wrap">
        <p className="eyebrow reveal">Contacto</p>
        <hr className="rule" />
        <div className="two-col">
          <div className="contact-side">
            <h2 className="h-section reveal">
              Cuéntanos qué <em>necesitas imprimir.</em>
            </h2>
            <p className="lead reveal d1">
              Llena el formulario y elige cómo mandarlo: por WhatsApp o por correo. Te respondemos con el precio y la hora
              de entrega. Si ya tienes el archivo, adjúntalo directo en WhatsApp.
            </p>
            <div className="reveal d2" style={{ marginTop: 24 }}>
              <p className="eyebrow plain">WhatsApp</p>
              <a className="tel" href={waLink()} target="_blank" rel="noopener noreferrer">[{EMPRESA.telefono}]</a>
              <p className="eyebrow plain">Correo</p>
              <p><a href={`mailto:${EMPRESA.correo}`} style={{ fontFamily: 'var(--serif)', fontSize: 24 }}>{EMPRESA.correo}</a></p>
              <p className="eyebrow plain" style={{ marginTop: 20 }}>Punto de entrega</p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 28 }}>{EMPRESA.entrega}</p>
              <p style={{ color: 'var(--grey)' }}>{EMPRESA.horario}</p>
            </div>
          </div>

          <form className="form reveal d1" onSubmit={porCorreo} noValidate>
            <div className="field">
              <label htmlFor="nombre">Nombre *</label>
              <input id="nombre" value={f.nombre} onChange={set('nombre')} autoComplete="name" required />
              {err.nombre && <div className="err">{err.nombre}</div>}
            </div>
            <div className="field">
              <label htmlFor="telefono">WhatsApp *</label>
              <input id="telefono" type="tel" inputMode="numeric" placeholder="10 dígitos" value={f.telefono} onChange={set('telefono')} autoComplete="tel" required />
              {err.telefono && <div className="err">{err.telefono}</div>}
            </div>
            <div className="field">
              <label htmlFor="correo">Correo (opcional)</label>
              <input id="correo" type="email" value={f.correo} onChange={set('correo')} autoComplete="email" />
              {err.correo && <div className="err">{err.correo}</div>}
            </div>
            <div className="field">
              <label htmlFor="servicio">Servicio *</label>
              <select id="servicio" value={f.servicio} onChange={set('servicio')} required>
                <option value="">Elige uno…</option>
                {OPCIONES.map((o) => <option key={o}>{o}</option>)}
              </select>
              {err.servicio && <div className="err">{err.servicio}</div>}
            </div>
            <div className="field">
              <label htmlFor="cantidad">Número de hojas</label>
              <input id="cantidad" type="number" min="1" max="5000" value={f.cantidad} onChange={set('cantidad')} />
              {err.cantidad && <div className="err">{err.cantidad}</div>}
            </div>
            <div className="field">
              <label htmlFor="urgencia">¿Para cuándo?</label>
              <select id="urgencia" value={f.urgencia} onChange={set('urgencia')}>
                <option value="normal">Sin prisa</option>
                <option value="hoy">Hoy mismo (antes de las 11 a.m.)</option>
                <option value="manana">Mañana</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea id="mensaje" value={f.mensaje} onChange={set('mensaje')} placeholder="Ej. 30 hojas a color de una presentación, engargolado." required />
              {err.mensaje && <div className="err">{err.mensaje}</div>}
            </div>
            {/* Campo trampa contra bots: las personas no lo ven */}
            <input className="honey" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.sitio} onChange={set('sitio')} name="sitio" />
            <div className="full">
              <label className="check">
                <input type="checkbox" checked={f.acepta} onChange={set('acepta')} />
                <span>He leído y acepto el <a href="#legal">aviso de privacidad</a>.</span>
              </label>
              {err.acepta && <div className="field"><div className="err">{err.acepta}</div></div>}
            </div>
            {estado.msg && (
              <div className={`form-msg ${estado.tipo}`} role="status">
                {estado.msg}
                {estado.respaldo && (
                  <span style={{ display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
                    <a href={mailtoLink(estado.respaldo)}><strong>Abrir mi correo</strong></a>
                    <a href={waLink(armarTexto(estado.respaldo))} target="_blank" rel="noopener noreferrer"><strong>Abrir WhatsApp</strong></a>
                  </span>
                )}
              </div>
            )}
            <div className="full form-actions">
              <button className="btn btn-gold" type="button" onClick={porWhatsApp}>
                Enviar por WhatsApp
              </button>
              <button className="btn btn-navy" type="submit" disabled={enviando}>
                {enviando ? 'Enviando…' : 'Enviar por correo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
