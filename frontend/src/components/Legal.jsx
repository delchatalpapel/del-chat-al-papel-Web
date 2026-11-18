import { EMPRESA } from '../data/contenido'

export default function Legal() {
  return (
    <section id="legal" className="legal">
      <div className="wrap">
        <p className="eyebrow reveal">Aviso de privacidad y términos</p>
        <hr className="rule" />
        <h2 className="h-section reveal">
          Lo legal, <em>en claro.</em>
        </h2>

        <details className="reveal" open>
          <summary>Aviso de privacidad</summary>
          <div className="body">
            <p>
              <strong>{EMPRESA.nombre}</strong>, con punto de entrega en {EMPRESA.entrega}, Estado de México, es responsable
              del tratamiento de los datos personales que nos proporcionas, conforme a la Ley Federal de Protección de Datos
              Personales en Posesión de los Particulares.
            </p>
            <h4>Datos que recabamos</h4>
            <p>Nombre, número de WhatsApp, correo electrónico (opcional) y los archivos que nos envías para imprimir.</p>
            <h4>Para qué los usamos</h4>
            <p>
              Cotizar e imprimir tu pedido, avisarte cuándo está listo y coordinar la entrega. De forma secundaria, y solo si
              lo aceptas, para enviarte promociones; puedes negarte en cualquier momento escribiendo por WhatsApp.
            </p>
            <h4>Cómo llegan tus datos</h4>
            <p>
              Si eliges WhatsApp, el mensaje va directo a nuestro chat. Si eliges correo, el formulario pasa por
              nuestro proveedor de hospedaje (Netlify), que lo reenvía a {EMPRESA.correo}; borramos esos registros
              cuando terminamos de atender tu pedido.
            </p>
            <h4>Tus archivos</h4>
            <p>
              Los archivos se usan exclusivamente para imprimir tu pedido, no se comparten con terceros y se eliminan de
              nuestros equipos y del chat a más tardar 7 días después de la entrega.
            </p>
            <h4>Transferencias</h4>
            <p>No vendemos ni transferimos tus datos a terceros, salvo al proveedor de hospedaje de esta página para el envío del formulario y por requerimiento de autoridad competente.</p>
            <h4>Derechos ARCO</h4>
            <p>
              Puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos escribiendo a{' '}
              <a href={`mailto:${EMPRESA.correo}`}>{EMPRESA.correo}</a> o al WhatsApp {EMPRESA.telefono}. Responderemos en
              un plazo máximo de 20 días hábiles.
            </p>
            <h4>Cambios</h4>
            <p>Cualquier cambio a este aviso se publicará en esta página. Última actualización: noviembre de 2026.</p>
          </div>
        </details>

        <details className="reveal d1">
          <summary>Términos y condiciones del servicio</summary>
          <div className="body">
            <h4>1. Pedidos</h4>
            <p>
              Un pedido se confirma cuando te enviamos el precio por WhatsApp y respondes que estás de acuerdo. Imprimimos el
              archivo tal como lo recibimos; te recomendamos enviarlo en PDF para evitar cambios de formato.
            </p>
            <h4>2. Tiempos de entrega</h4>
            <p>
              Pedidos confirmados antes de las 11:00 a.m. se entregan el mismo día por la tarde. Después de esa hora, al día
              siguiente según la urgencia. Pedidos grandes o especiales pueden requerir más tiempo; te lo diremos antes.
            </p>
            <h4>3. Precios y pagos</h4>
            <p>
              Los precios publicados son por hoja, en pesos mexicanos, y pueden cambiar sin previo aviso. En impresión a color
              el precio depende de cuánta página cubra la imagen. El pago se realiza al momento de la entrega o por
              transferencia previa cuando así se acuerde.
            </p>
            <h4>4. Contenido de los archivos</h4>
            <p>
              Eres responsable de contar con los derechos sobre el contenido que nos envías. Nos reservamos el derecho de no
              imprimir material ilegal, ofensivo o que infrinja derechos de terceros.
            </p>
            <h4>5. Aclaraciones</h4>
            <p>
              Si una impresión sale con defecto atribuible a nosotros, la repetimos sin costo. Revisa tu pedido al recibirlo;
              las aclaraciones se atienden dentro de las 48 horas siguientes a la entrega.
            </p>
          </div>
        </details>
      </div>
    </section>
  )
}
