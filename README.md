# Del chat al papel · Sitio web

Sitio de presencia para **Del chat al papel**, impresión en línea con entrega en Jilotepec Centro.
Hecho con **React + Vite** (carpeta `frontend/`) y publicado en **Netlify**.
**No usa base de datos ni servidor propio:** el formulario se envía por WhatsApp o por correo
(Netlify Forms) a **delchatalpapel@gmail.com**.

```
del-chat-al-papel/
├── netlify.toml               Configuración de Netlify (carpeta, comando y salida)
└── frontend/
    ├── index.html             Incluye el formulario oculto "contacto" que lee Netlify
    ├── public/media/          Imágenes, video (.mp4) y audio (.mp3)
    ├── public/_headers        Encabezados de seguridad y caché en Netlify
    ├── src/components/        Una sección por archivo (Hero, Nosotros, Servicios, …)
    ├── src/data/contenido.js  ← Textos, precios, teléfono, correo, redes: edita aquí
    ├── src/lib/api.js         Envío del formulario a Netlify Forms
    └── src/index.css          Colores y tipografías del cartel
```

## Cómo funciona el formulario

- **Enviar por WhatsApp:** abre WhatsApp con el mensaje ya escrito para el 55 4032 3871.
- **Enviar por correo:** manda los datos a Netlify Forms; Netlify los guarda en el panel
  (*Forms*) y te avisa por correo a delchatalpapel@gmail.com.
  Si el envío falla, la página ofrece abrir la app de correo o WhatsApp con el mensaje listo.

Si agregas o cambias un campo del formulario en `Contacto.jsx`, cámbialo también en el
formulario oculto de `frontend/index.html`; si no, Netlify no guarda ese campo.

## Qué incluye la página

| Requisito            | Dónde está |
|----------------------|------------|
| Menú con anclas      | `Header.jsx` → cada enlace `#inicio`, `#servicios`, … baja a su sección y se resalta al hacer scroll |
| Aparición progresiva | Clase `.reveal` + `useReveal.js` (IntersectionObserver) |
| Hipervínculos        | WhatsApp (`wa.me`), correo `mailto:`, redes sociales, herramientas externas |
| Tabla                | Lista de precios con filtros (`Servicios.jsx`), datos en `contenido.js` |
| Formulario           | `Contacto.jsx` → WhatsApp o correo (Netlify Forms) |
| iframes              | Mapa de Google Maps y calendario de días festivos (`Redes.jsx`) |
| Multimedia           | `<video>` y `<audio>` en *Sobre nosotros*; galería con vista ampliada |

Secciones: Inicio · Sobre nosotros · Misión y visión · Servicios/Productos · Principales clientes · Galería ·
Testimonios · Contacto · Redes sociales/Enlaces · Aviso de privacidad/Términos.

> **Antes de publicar:** cambia en `src/data/contenido.js` las URLs de Facebook/Instagram/TikTok
> (hoy apuntan a las páginas principales), y revisa el aviso de privacidad con tus datos reales.

## Correr en tu computadora (VS Code)

Requisito: Node 20.19+ (recomendado 22). En la terminal de VS Code:

```bash
cd frontend
npm install        # solo la primera vez o si cambian las dependencias
npm run dev        # http://localhost:5173
```

En tu computadora el botón **Enviar por correo** muestra el aviso de respaldo: es normal,
Netlify Forms solo funciona en la página publicada.

## Publicar y actualizar

La página se publica sola: cada vez que haces `git push` a `main`, Netlify vuelve a compilar
y en 1–2 minutos los cambios están en línea. Flujo diario desde VS Code:

```bash
git add .
git commit -m "Describe tu cambio"
git push
```

(O desde el panel **Source Control** de VS Code: escribe el mensaje → **Commit** → **Sync Changes**.)
