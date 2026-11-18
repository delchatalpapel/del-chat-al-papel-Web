// Contenido de la página. Edita aquí textos, precios y datos de contacto.

export const EMPRESA = {
  nombre: 'Del chat al papel',
  lema: 'Impresión en línea',
  telefono: '55 4032 3871',
  whatsapp: '525540323871', 
  correo: 'delchatalpapel@gmail.com',
  entrega: 'Jilotepec Centro',
  horario: 'Lunes a viernes · 9:00 a 19:00',
}

export const waLink = (texto = 'Hola, quiero imprimir un archivo.') =>
  `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(texto)}`

export const MENU = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'mision', label: 'Misión y visión' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'galeria', label: 'Galería' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contacto', label: 'Contacto' },
  { id: 'redes', label: 'Redes' },
  { id: 'legal', label: 'Aviso legal' },
]

export const PASOS = [
  { n: '01', t: 'Envía tu archivo', d: 'PDF, Word o imagen, por WhatsApp.' },
  { n: '02', t: 'Confirmamos', d: 'Te decimos el precio y cuándo está listo.' },
  { n: '03', t: 'Recíbelo', d: 'Te lo entregamos en Jilotepec Centro.' },
]

// Precios por hoja (MXN). 

export const PRECIOS = [
  { categoria: 'Blanco y negro', nombre: 'Impresión', tamano: 'Carta', precio: 1 },
  { categoria: 'Blanco y negro', nombre: 'Ambos lados', tamano: 'Carta', precio: 1.5 },
  { categoria: 'Blanco y negro', nombre: 'Saturada', tamano: 'Carta', precio: 5 },
  { categoria: 'Color', nombre: 'Mínimo', tamano: 'Carta', precio: 3 },
  { categoria: 'Color', nombre: 'Media página', tamano: 'Carta', precio: 5 },
  { categoria: 'Color', nombre: 'Página completa', tamano: 'Carta', precio: 10 },
  { categoria: 'Doble carta', nombre: 'Blanco y negro', tamano: 'Doble carta', precio: 15 },
  { categoria: 'Doble carta', nombre: 'Color mínimo', tamano: 'Doble carta', precio: 20 },
  { categoria: 'Doble carta', nombre: 'Color media página', tamano: 'Doble carta', precio: 25 },
  { categoria: 'Doble carta', nombre: 'Color completo', tamano: 'Doble carta', precio: 30 },
  { categoria: 'También', nombre: 'Engargolado', tamano: 'Desde', precio: 25 },
]

export const SERVICIOS = [
  { t: 'Impresión blanco y negro', d: 'Tareas, trámites, apuntes y documentos del día a día, a una o dos caras.', icon: 'bn' },
  { t: 'Impresión a color', d: 'Cobramos según cuánta página cubra la imagen: mínimo, media o completa.', icon: 'color' },
  { t: 'Doble carta', d: 'Carteles, menús, planos y pósters en formato grande.', icon: 'doble' },
  { t: 'Engargolado', d: 'Tesis, reportes y manuales con acabado limpio y resistente.', icon: 'engargolado' },
  { t: 'Papel fotográfico', d: 'Tus fotos impresas con buena definición. Cotiza por WhatsApp.', icon: 'foto' },
  { t: 'Papel de sublimación', d: 'Para tazas, playeras y regalos personalizados. Cotiza por WhatsApp.', icon: 'subli' },
]

export const CLIENTES = [
  { nombre: 'Estudiantes de preparatoria y universidad', detalle: 'Tareas, tesis y engargolados a contrarreloj.' },
  { nombre: 'Escuelas y maestros', detalle: 'Exámenes, material didáctico y listas.' },
  { nombre: 'Despachos y oficinas', detalle: 'Contratos, reportes y trámites.' },
  { nombre: 'Comercios locales', detalle: 'Menús, volantes, listas de precios y carteles.' },
  { nombre: 'Emprendedores de sublimación', detalle: 'Papel de sublimación para tazas y playeras.' },
  { nombre: 'Familias', detalle: 'Fotos, invitaciones y documentos personales.' },
]

export const GALERIA = [
  { src: '/media/galeria-bn.jpg', alt: 'Impresiones en blanco y negro', t: 'Blanco y negro' },
  { src: '/media/galeria-color.jpg', alt: 'Impresiones a color', t: 'A color' },
  { src: '/media/galeria-engargolado.jpg', alt: 'Documento engargolado', t: 'Engargolado' },
  { src: '/media/galeria-foto.jpg', alt: 'Impresión en papel fotográfico', t: 'Papel fotográfico' },
  { src: '/media/galeria-sublimacion.jpg', alt: 'Taza con impresión por sublimación', t: 'Sublimación' },
  { src: '/media/galeria-doble-carta.jpg', alt: 'Impresión en doble carta', t: 'Doble carta' },
  { src: '/media/flyer-precios.jpg', alt: 'Cartel de precios por hoja', t: 'Nuestros precios' },
  { src: '/media/flyer-proceso.jpg', alt: 'Cartel de cómo funciona el servicio', t: 'Cómo funciona' },
]

export const TESTIMONIOS = [
  { nombre: 'Daniela R.', rol: 'Estudiante de enfermería', texto: 'Mandé mi trabajo a las 9 y en la tarde ya lo tenía engargolado. Me salvaron la entrega.' },
  { nombre: 'Jorge M.', rol: 'Dueño de taquería', texto: 'Les pido los menús a color en doble carta. Siempre me dicen el precio antes y cumplen con la hora.' },
  { nombre: 'Maestra Lupita', rol: 'Primaria en Jilotepec', texto: 'Les mando los exámenes por WhatsApp desde la casa y paso por ellos camino a la escuela.' },
  { nombre: 'Andrea S.', rol: 'Emprendedora de sublimación', texto: 'El papel de sublimación sale con colores muy vivos. Ya no tengo que ir hasta Toluca.' },
]

export const REDES = [
  { nombre: 'WhatsApp', url: waLink(), handle: EMPRESA.telefono },
  { nombre: 'Facebook', url: 'https://www.facebook.com/', handle: '/delchatalpapel' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/', handle: '@delchatalpapel' },
  { nombre: 'TikTok', url: 'https://www.tiktok.com/', handle: '@delchatalpapel' },
]

export const ENLACES = [
  { nombre: 'Convertir Word a PDF', url: 'https://www.ilovepdf.com/es/word_a_pdf', d: 'Para que tu archivo se imprima tal cual lo ves.' },
  { nombre: 'Unir varios PDF', url: 'https://www.ilovepdf.com/es/unir_pdf', d: 'Manda un solo archivo y te cotizamos más rápido.' },
  { nombre: 'Escanear con Google Drive', url: 'https://support.google.com/drive/answer/3145835?hl=es-419', d: 'Escanea documentos con tu celular.' },
  { nombre: 'Diseñar en Canva', url: 'https://www.canva.com/es_mx/', d: 'Crea carteles e invitaciones y envíanos el PDF.' },
]
