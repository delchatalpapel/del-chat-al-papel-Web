import { EMPRESA } from '../data/contenido'

export default function Nosotros() {
  return (
    <section id="nosotros">
      <div className="wrap">
        <p className="eyebrow reveal">Sobre nosotros</p>
        <hr className="rule" />
        <div className="two-col">
          <div>
            <h2 className="h-section reveal">
              Una papelería que <em>cabe en tu celular.</em>
            </h2>
            <p className="reveal d1">
              <strong>{EMPRESA.nombre}</strong> nació en Jilotepec con una idea sencilla: nadie debería perder la mañana
              haciendo fila para imprimir una tarea o un trámite. Por eso convertimos el chat de WhatsApp en un mostrador:
              tú mandas tu archivo desde donde estés, nosotros lo revisamos, te decimos el precio exacto y lo dejamos listo
              para que lo recojas en {EMPRESA.entrega}.
            </p>
            <p className="reveal d2">
              Imprimimos en blanco y negro, a color y en doble carta; engargolamos, y trabajamos papel fotográfico y de
              sublimación para quienes hacen tazas, playeras y regalos. Somos un equipo pequeño, cuidamos cada hoja y
              hablamos claro sobre precios y tiempos.
            </p>
            <div className="stats reveal d3">
              <div className="stat"><strong>$1</strong><span>por hoja en blanco y negro</span></div>
              <div className="stat"><strong>11 a.m.</strong><span>corte para entrega el mismo día</span></div>
              <div className="stat"><strong>3</strong><span>pasos: envías, confirmamos, recibes</span></div>
            </div>
          </div>

          <div className="media-card reveal d2">
            <video
              src="/media/del-chat-al-papel.mp4"
              poster="/media/video-poster.jpg"
              controls
              muted
              loop
              playsInline
              preload="metadata"
            >
              Tu navegador no puede reproducir este video.
            </video>
            <div className="cap">
              <small>VIDEO · ASÍ FUNCIONA</small>
              <span>Del chat al papel en cinco segundos.</span>
              <small>AUDIO · TONO DE BIENVENIDA</small>
              <audio controls preload="none" src="/media/tono-bienvenida.mp3">
                Tu navegador no puede reproducir audio.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
