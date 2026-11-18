// Envío del formulario con Netlify Forms (sin servidor propio).
// Netlify detecta el formulario oculto "contacto" de index.html al publicar,
// guarda cada envío y manda un aviso por correo a delchatalpapel@gmail.com.
// En tu computadora (npm run dev) el envío falla a propósito y la página ofrece
// mandarlo por WhatsApp o por la app de correo; en Netlify sí funciona.
export async function enviarCorreo(datos) {
  const cuerpo = new URLSearchParams({ 'form-name': 'contacto' })
  for (const [k, v] of Object.entries(datos)) cuerpo.append(k, v ?? '')

  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: cuerpo.toString(),
  })
  if (!res.ok) throw Object.assign(new Error('No se pudo enviar'), { status: res.status })
  return { detail: `¡Gracias, ${String(datos.nombre).trim().split(/\s+/)[0]}! Recibimos tu mensaje y te respondemos pronto.` }
}
