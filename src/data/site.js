/**
 * ============================================================================
 *  FUENTE UNICA DE DATOS DEL SITIO — Barbería Torito
 * ----------------------------------------------------------------------------
 *  Todos los datos confirmados con el dueño viven acá.
 *  TODO dato no confirmado está en `null` o como array vacío y marcado con
 *  `// PENDIENTE: confirmar con el dueño`.
 *  La interfaz oculta de forma elegante lo que esté vacío (sin inventar nada).
 * ============================================================================
 */

/* ------------------------------------------------------------------ Assets --- */
import logo from '../assets/brand/logo-torito.png'
import logoBlanco from '../assets/brand/logo-torito-blanco.png'
import encabezado from '../assets/brand/encabezado.jpg'
import localAmbiente from '../assets/photos/local-ambiente.jpg'
import localEspacioTrabajo from '../assets/photos/local-espacio-trabajo.jpg'
import localEspejoAmbiente from '../assets/photos/local-espejo-ambiente.jpg'
import localEspejo from '../assets/photos/local-espejo.jpg'
import localRecepcion from '../assets/photos/local-recepcion.jpg'
import localRecepcion2 from '../assets/photos/local-recepcion-2.jpg'
import localSillaCorte from '../assets/photos/local-silla-corte.jpg'
import localLugar from '../assets/photos/local-lugar.jpg'
import localLugar2 from '../assets/photos/local-lugar-2.jpg'
import clienteHombre from '../assets/photos/cliente-hombre.jpg'
import perfilPeluquero from '../assets/photos/perfil-peluquero.jpg'
import perfilPeluqueroRedondo from '../assets/photos/perfil-peluquero-redondo.jpg'
import reservaPoster from '../assets/photos/reserva-poster-2.jpg'

export const marca = {
  nombre: 'Torito Barbería',
  nombreCorto: 'Torito',
  // Logo real provisto por el negocio (PNG con fondo transparente). Se usa tal cual.
  logo,
  logoAlt: 'Logotipo de Barbería Torito',
  // Versión en blanco del logo (para fondos oscuros), sin filtros CSS.
  logoBlanco,
  logoBlancoAlt: 'Logotipo de Barbería Torito en blanco',
  // Imagen de encabezado real del local.
  encabezado,
}

/* ------------------------------------------------------------- Datos base --- */
export const negocio = {
  nombre: 'Barbería Torito',
  direccion: {
    calle: 'Alberdi 320',
    codigoPostal: 'T4146',
    ciudad: 'Concepción',
    provincia: 'Tucumán',
    pais: 'Argentina',
    plusCode: 'MC54+59 Concepción, Tucumán',
  },
  // Teléfono fijo confirmado.
  telefono: {
    display: '03865 22-4504',
    href: 'tel:+543865224504',
  },
  // WhatsApp confirmado (mismo número, en formato móvil internacional).
  whatsapp: {
    display: '9 3865 22-4504',
    href: 'https://wa.me/5493865224504',
  },
  // PENDIENTE: confirmar con el dueño — email de contacto
  email: null,
  // Redes sociales del negocio. Cada valor es la URL completa del perfil, o null
  // si no está confirmado. Un valor null muestra el ícono sin enlace en el footer
  // (nunca se dejan enlaces rotos ni "#").
  redes: {
    facebook: 'https://www.facebook.com/share/1DwVEKwnDP/',
    instagram: 'https://instagram.com/torito_barberia',
    tiktok: 'https://www.tiktok.com/@torito_barberia',
    whatsapp: 'https://wa.me/5493865224504',
  },
  /**
   * Horarios: el único dato conocido es que abre a las 9:30 h.
   * El resto está pendiente. `dias` vacío = no se muestra grilla de días.
   */
  horarios: {
    aperturaConocida: '09:30',
    texto: 'Abre a las 9:30 h',
    // PENDIENTE: confirmar con el dueño — horario completo por día
    dias: [],
  },
}

/* --------------------------------------------------------------- Contacto --- */
const _mapsQuery = encodeURIComponent(
  'Alberdi 320, T4146 Concepción, Tucumán, Argentina',
)

export const maps = {
  // Mapa embebido apuntando a Alberdi 320, Concepción, Tucumán.
  embed: `https://www.google.com/maps?q=${_mapsQuery}&hl=es&z=16&output=embed`,
  // Enlace "Cómo llegar".
  link: `https://www.google.com/maps/dir/?api=1&destination=${_mapsQuery}`,
}

/* ------------------------------------------------------------------ Nav --- */
export const nav = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'El local', href: '/#el-local' },
  { label: 'Cortes', href: '/#cortes' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
]

/* --------------------------------------------------------------- Anuncios --- */
/* Frases de la marquesina publicitaria. La banda también lista, al final,
   todos los tipos de corte (se toman del catálogo, ver `seccionesCortes`). */
export const anuncios = [
  'Lo mejor está acá',
  'Torito Barbería',
  'Reservá ya tu turno',
  'Tenemos todos los tipos de corte',
]

/* ------------------------------------------- Anuncios de cierre (marquesina) --- */
/* Frases de la marquesina previa al footer. */
export const anunciosCierre = [
  'Reservá ya tu turno',
  'Te esperamos en el local',
  'Efectivo y transferencia',
  'Torito Barbería · Concepción',
]

/* ------------------------------------------------------------------ Hero --- */
export const hero = {
  kicker: 'Concepción · Tucumán',
  // PENDIENTE: validar frase principal con el dueño
  titulo: 'Tu estilo. Tu identidad.',
  subtitulo: 'Cortes con carácter, precisión y atención a cada detalle.',
  ctaPrincipal: { label: 'Consultar turnos', href: negocio.telefono.href },
  ctaSecundario: { label: 'Ver cortes', href: '#cortes' },
  // Foto real del local usada como fondo (se oscurece con overlay).
  imagen: localSillaCorte,
  imagenAlt: 'Sillón de corte en el interior de Barbería Torito',
}

/* ----------------------------------------------------------- Presentación --- */
export const presentacion = {
  numeral: '01',
  kicker: 'La barbería',
  titulo: 'Un oficio que se nota en el detalle',
  imagen: encabezado,
  imagenAlt: 'Imagen de encabezado de Barbería Torito',
  // Video de presentación (se sirve desde /public/videos). El encabezado queda como póster.
  video: {
    src: '/videos/presentacion.mp4',
    poster: encabezado,
    alt: 'Video de presentación de Barbería Torito',
  },
  // PENDIENTE: validar texto con el dueño (sin afirmar trayectoria, premios ni certificaciones)
  parrafos: [
    'En Barbería Torito, cada detalle cuenta. Un espacio pensado para quienes valoran su estilo, buscan un buen corte y disfrutan de una atención cuidada.',
  ],
}

/* -------------------------------------------------------------- Servicios --- */
/**
 * EJEMPLOS para mostrar el diseño. NO son servicios confirmados.
 * PENDIENTE: confirmar con el dueño la lista real, descripciones y precios.
 * Sin precio confirmado se muestra "Consultar".
 */
export const servicios = {
  numeral: '02',
  kicker: 'Servicios',
  titulo: 'Trabajos con carácter',
  intro:
    'Cada servicio se trabaja con precisión y asesoramiento. Precios y disponibilidad a confirmar.',
  // PENDIENTE: confirmar con el dueño — servicios, descripciones y precios
  lista: [
    {
      id: 'corte',
      nombre: 'Corte de cabello',
      descripcion: 'Corte a medida según tu tipo de rostro y estilo.',
      icono: 'Scissors',
      acento: 'azul',
      precio: null, // PENDIENTE: confirmar con el dueño
      provisional: true,
    },
    {
      id: 'degradados',
      nombre: 'Degradados',
      descripcion: 'Transiciones limpias y prolijas, de suave a marcado.',
      icono: 'Layers',
      acento: 'rojo',
      precio: null, // PENDIENTE: confirmar con el dueño
      provisional: true,
    },
    {
      id: 'barba',
      nombre: 'Barba',
      descripcion: 'Perfilado y arreglo de barba con terminaciones cuidadas.',
      icono: 'Brush',
      acento: 'azul',
      precio: null, // PENDIENTE: confirmar con el dueño
      provisional: true,
    },
    {
      id: 'disenos',
      nombre: 'Diseños y líneas',
      descripcion: 'Detalles y líneas a mano para un acabado con identidad.',
      icono: 'PenTool',
      acento: 'rojo',
      precio: null, // PENDIENTE: confirmar con el dueño
      provisional: true,
    },
  ],
  precioFallback: 'Consultar',
}

/* -------------------------------------------------------------- El local --- */
export const elLocal = {
  numeral: '03',
  kicker: 'El local',
  titulo: 'Nuestro espacio',
  intro: 'Un recorrido por la barbería: el ambiente, las estaciones de trabajo y la recepción.',
  // Fotos reales del local provistas por el negocio. Sin stock externo ni hotlinking.
  items: [
    { src: localSillaCorte, alt: 'Sillón de corte de Barbería Torito', w: 1008, h: 1600, span: 'tall' },
    { src: localEspejo, alt: 'Espejo y estación de trabajo del local', w: 990, h: 1600, span: 'normal' },
    { src: localRecepcion, alt: 'Recepción de Barbería Torito', w: 1179, h: 1511, span: 'normal' },
    { src: localAmbiente, alt: 'Ambiente general del local', w: 1006, h: 1600, span: 'normal' },
    { src: localEspejoAmbiente, alt: 'Espejo y ambiente del local', w: 1088, h: 1600, span: 'normal' },
    { src: localEspacioTrabajo, alt: 'Espacio de trabajo de la barbería', w: 982, h: 1600, span: 'wide' },
    { src: localRecepcion2, alt: 'Sector de recepción del local', w: 1002, h: 1600, span: 'normal' },
    { src: localLugar, alt: 'Ambiente del local de Barbería Torito', w: 738, h: 1600, span: 'tall' },
    { src: localLugar2, alt: 'Interior del local de Barbería Torito', w: 1179, h: 1565, span: 'normal' },
  ],
}

/* --------------------------------------------------------------- Cortes --- */
export const cortes = {
  numeral: '04',
  kicker: 'Cortes',
  titulo: 'Elegí tu estilo',
  intro: 'Trabajamos cortes para todas las edades. Tocá una imagen para ver los cortes y precios.',
}

/* -------------------------------------------------- Catálogo de cortes --- */
/**
 * Tipos de corte y coloración, agrupados en secciones con subtítulo.
 * Precios provistos por el negocio (rango $10.000–$30.000).
 * Se usa en la página de categoría (/hombres).
 * Si un precio no estuviera definido, la interfaz muestra `precios.precioFallback`.
 */
const seccionesCortes = [
  {
    id: 'fade',
    nombre: 'Cortes Fade (degradados)',
    corto: 'Fade',
    items: [
      { id: 'fade-low', nombre: 'Low Fade (degradado bajo)', precio: 14000 },
      { id: 'fade-mid', nombre: 'Mid Fade (degradado medio)', precio: 14000 },
      { id: 'fade-high', nombre: 'High Fade (degradado alto)', precio: 15000 },
      { id: 'fade-skin', nombre: 'Skin Fade (a cero)', precio: 16000 },
      { id: 'fade-taper', nombre: 'Taper Fade', precio: 14000 },
      { id: 'fade-drop', nombre: 'Drop Fade', precio: 15000 },
      { id: 'fade-burst', nombre: 'Burst Fade', precio: 16000 },
      { id: 'fade-temple', nombre: 'Temple Fade', precio: 13000 },
    ],
  },
  {
    id: 'modernos',
    nombre: 'Cortes modernos',
    corto: 'Modernos',
    items: [
      { id: 'mod-french-crop', nombre: 'French Crop', precio: 16000 },
      { id: 'mod-textured-crop', nombre: 'Textured Crop', precio: 16000 },
      { id: 'mod-edgar', nombre: 'Edgar', precio: 15000 },
      { id: 'mod-mullet', nombre: 'Mullet moderno', precio: 18000 },
      { id: 'mod-wolf-cut', nombre: 'Wolf Cut', precio: 19000 },
      { id: 'mod-broccoli', nombre: 'Broccoli Haircut', precio: 18000 },
      { id: 'mod-quiff', nombre: 'Quiff', precio: 17000 },
      { id: 'mod-faux-hawk', nombre: 'Faux Hawk', precio: 16000 },
    ],
  },
  {
    id: 'clasicos',
    nombre: 'Cortes clásicos y cortos',
    corto: 'Clásicos',
    items: [
      { id: 'clas-buzz', nombre: 'Buzz Cut', precio: 12000 },
      { id: 'clas-crew', nombre: 'Crew Cut', precio: 13000 },
      { id: 'clas-ivy-league', nombre: 'Ivy League', precio: 14000 },
      { id: 'clas-militar', nombre: 'Corte militar', precio: 12000 },
      { id: 'clas-caesar', nombre: 'Caesar Cut', precio: 13000 },
      { id: 'clas-tijera', nombre: 'Corte clásico a tijera', precio: 15000 },
      { id: 'clas-side-part', nombre: 'Side Part (raya al costado)', precio: 14000 },
      { id: 'clas-slick-back', nombre: 'Slick Back (peinado hacia atrás)', precio: 14000 },
    ],
  },
  {
    id: 'volumen',
    nombre: 'Cortes con volumen y flequillo',
    corto: 'Volumen',
    items: [
      { id: 'vol-pompadour', nombre: 'Pompadour', precio: 17000 },
      { id: 'vol-comb-over', nombre: 'Comb Over', precio: 16000 },
      { id: 'vol-fringe', nombre: 'Fringe', precio: 15000 },
      { id: 'vol-messy', nombre: 'Messy Hair', precio: 16000 },
      { id: 'vol-curtains', nombre: 'Curtains (cortina)', precio: 17000 },
    ],
  },
  {
    id: 'medio-largo',
    nombre: 'Cortes de pelo medio y largo',
    corto: 'Medio y largo',
    items: [
      { id: 'largo-mullet-clasico', nombre: 'Mullet clásico', precio: 18000 },
      { id: 'largo-shag', nombre: 'Shag', precio: 19000 },
      { id: 'largo-capas', nombre: 'Capas largas', precio: 20000 },
      { id: 'largo-man-bun', nombre: 'Man Bun', precio: 20000 },
      { id: 'largo-bro-flow', nombre: 'Bro Flow', precio: 20000 },
      { id: 'largo-wolf-cut', nombre: 'Wolf Cut largo', precio: 21000 },
    ],
  },
  {
    id: 'coloracion',
    nombre: 'Coloración y tintes',
    corto: 'Coloración',
    items: [
      {
        id: 'color-tenido',
        nombre: 'Teñido completo',
        descripcion: 'Se cambia el color de todo el cabello, por ejemplo, rubio, negro, rojo o gris.',
        precio: 26000,
      },
      {
        id: 'color-mechas',
        nombre: 'Mechas o reflejos',
        descripcion: 'Se aclaran o colorean algunas partes del pelo para crear contraste.',
        precio: 28000,
      },
      {
        id: 'color-fantasia',
        nombre: 'Color fantasía',
        descripcion: 'Colores llamativos como azul, rojo, violeta, verde o rosa.',
        precio: 30000,
      },
      {
        id: 'color-platinado',
        nombre: 'Platinado o gris',
        descripcion:
          'Se busca un tono rubio muy claro, plateado o gris, normalmente con decoloración previa.',
        precio: 30000,
      },
    ],
  },
]

/* Fotos de cada corte: se cargan desde `src/assets/photos/cortes`, con nombre
   `<id>-<n>` (1, 2, 3…) y se ordenan por variante. */
const fotosCortes = import.meta.glob('../assets/photos/cortes/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const fotosDeCorte = (id) => {
  const patron = new RegExp(`/${id}-\\d+\\.`)
  return Object.entries(fotosCortes)
    .filter(([ruta]) => patron.test(ruta))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, url]) => url)
}

seccionesCortes.forEach((seccion) => {
  seccion.items.forEach((item) => {
    item.fotos = fotosDeCorte(item.id)
    item.imagen = item.fotos[0] ?? null
    item.imagenAlt = `Corte ${item.nombre} realizado en Barbería Torito`
  })
})

/* -------------------------------------------------------------- Precios --- */
/**
 * Categoría (hombres) con su catálogo de cortes y coloración.
 * Los precios provienen del negocio. Sin precio definido se muestra
 * `precioFallback` ("Consultar").
 */
export const precios = {
  numeral: '05',
  kicker: 'Precios',
  titulo: 'Tipos de corte y precios',
  intro: 'Estos son los tipos de corte y precios de cada categoría.',
  verLabel: 'Ver cortes y precios',
  precioFallback: 'Consultar',
  nota: null,
  pagos: 'Los pagos se realizan en el local. Se acepta efectivo y transferencia.',
  // Catálogo único (página /hombres).
  grupos: [
    {
      id: 'hombres',
      nombre: 'Hombres',
      resumen: 'Cortes con carácter, precisión y atención a cada detalle.',
      imagen: clienteHombre,
      imagenAlt: 'Cliente con corte realizado en Barbería Torito',
      w: 711,
      h: 1067,
      acento: 'rojo',
      // Catálogo compartido (ver `seccionesCortes`).
      secciones: seccionesCortes,
      // PENDIENTE: confirmar con el dueño — promociones reales y su vigencia.
      // EJEMPLOS para mostrar el diseño. NO son promociones confirmadas.
      promociones: [
        { id: 'hombre-corte-barba', titulo: 'Corte + barba', detalle: 'Corte y perfilado de barba juntos.', vigencia: null, provisional: true },
        { id: 'hombre-frecuente', titulo: 'Cliente frecuente', detalle: 'Beneficio para clientes frecuentes.', vigencia: null, provisional: true },
      ],
    },
  ],
}

/* ----------------------------------------------------------- Promociones --- */
/**
 * Textos de la sección de promociones de las páginas por categoría.
 * PENDIENTE: confirmar con el dueño — promociones reales y vigencia.
 */
export const promociones = {
  kicker: 'Promociones',
  titulo: 'Promos vigentes',
  intro: 'Beneficios y combos para esta categoría.',
  // PENDIENTE: confirmar con el dueño
  nota: 'Promociones de ejemplo. A confirmar con el local.',
}

/* --------------------------------------------------------------- Categoría --- */
/** Encabezado (hero) de la página por categoría (/hombres) */
export const categoria = {
  cortesKicker: 'Cortes',
  cortesTitulo: 'Tipos de corte',
  // Imagen de fondo de marca (más baja que el hero de inicio).
  fondo: encabezado,
  fondoAlt: 'Interior de Barbería Torito',
  // Foto del local usada como fondo SOLO en la sección "Tipos de corte".
  fondoTipos: localLugar2,
  fondoTiposAlt: 'Interior del local de Barbería Torito',
}

/* --------------------------------------------------------------- Nosotros --- */
export const nosotros = {
  numeral: '06',
  kicker: 'Identidad',
  titulo: 'Gabriel Enrique Rios',
  imagen: perfilPeluqueroRedondo,
  imagenAlt: 'Barbero de Barbería Torito en el local',
  // Página del barbero (la foto de esta sección enlaza a /peluquero).
  paginaHref: '/peluquero',
  paginaLabel: 'Ver cortes y videos del barbero',
  // Valores de diseño. NO son afirmaciones comerciales verificables ni cifras.
  principios: [
    { id: 'precision', titulo: 'Precisión', icono: 'Target', texto: 'Cortes medidos y prolijos, sin apuro.' },
    { id: 'estilo', titulo: 'Estilo', icono: 'Sparkles', texto: 'Un acabado con identidad propia.' },
    { id: 'detalle', titulo: 'Atención al detalle', icono: 'Eye', texto: 'Los detalles que hacen la diferencia.' },
    { id: 'cuidado', titulo: 'Atención cuidada', icono: 'Heart', texto: 'Un trato cercano, de principio a fin.' },
  ],
}

/* -------------------------------------------------------------- Peluquero --- */
/**
 * Página /peluquero del barbero (se abre al tocar su foto en Nosotros).
 * Videos reales provistos por el negocio (se sirven desde /public/videos).
 */
export const peluquero = {
  kicker: 'El barbero',
  titulo: 'Cortes y videos del barbero',
  // Nombre del barbero confirmado con el dueño.
  nombre: 'Gabriel Enrique Rios',
  // PENDIENTE: confirmar con el dueño — descripción breve del barbero
  breve: null,
  foto: perfilPeluqueroRedondo,
  fotoAlt: 'Barbero de Barbería Torito en el local',
  // Galería de cortes que hace el barbero.
  // PENDIENTE: subir las fotos a /public/images/cortes/ y cargarlas acá.
  cortes: [],
  cortesNumeral: '01',
  cortesKicker: 'Cortes',
  cortesTitulo: 'Sus cortes',
  cortesLead: 'Fotos de algunos cortes que hace el barbero.',
  cortesEmptyTitulo: 'Galería en camino',
  cortesEmptyTexto:
    'Próximamente vas a poder ver acá las fotos de los cortes que hace el barbero.',
  // Video de perfil del barbero (provisto por el negocio).
  videoPerfil: {
    src: '/videos/perfil-peluquero-1.mp4',
    videoAlt: 'Video del barbero de Barbería Torito',
    poster: perfilPeluquero,
  },
  // Momentos divertidos provistos por el negocio.
  videosNumeral: '02',
  videosKicker: 'Videos',
  videosTitulo: 'Videos del perfil y momentos',
  divertidos: [
    { id: 'momento-1', src: '/videos/momentos-divertidos-1.mp4', videoAlt: 'Momento divertido en Barbería Torito — 1' },
    { id: 'momento-2', src: '/videos/momentos-divertidos-2.mp4', videoAlt: 'Momento divertido en Barbería Torito — 2' },
  ],
}

/* ---------------------------------------------------------------- Reserva --- */
/**
 * Sección de reserva de turno: video de fondo con un botón delante.
 * El botón abre WhatsApp (confirmado en `negocio.whatsapp`); si no hubiera
 * WhatsApp, el componente cae al teléfono fijo.
 */
export const reserva = {
  numeral: '07',
  kicker: 'Turnos',
  titulo: 'Reservá tu turno',
  texto: 'Elegí el día y el horario que mejor te queden. Te confirmamos por WhatsApp.',
  video: {
    src: '/videos/reservacion-turno-2.mp4',
    poster: reservaPoster,
    alt: 'Video de reserva de turno de Barbería Torito',
  },
  boton: { label: 'Reservar turno' },
}

/* --------------------------------------------------------------- Contacto --- */
export const contacto = {
  numeral: '08',
  kicker: 'Contacto',
  titulo: 'Pasá por la barbería',
  // PENDIENTE: confirmar con el dueño si el local atiende con o sin turno previo
  introCta: 'Consultá disponibilidad por teléfono.',
}

/* ---------------------------------------------------------------- Footer --- */
export const footer = {
  // PENDIENTE: confirmar con el dueño — frase corta o lema para el footer
  lema: null,
  // PENDIENTE: confirmar con el dueño — sección "Historia".
  // Solo si el dueño confirma esa sección se renderiza el enlace "Historia" (#historia).
  historiaConfirmada: false,
}

/* ------------------------------------------------------------------ Video --- */
/**
 * Videos reales provistos por el negocio (sirven desde /public/videos).
 * Se usan de forma moderada y con respeto por `prefers-reduced-motion`.
 */
export const video = {
  ambiente: { src: '/videos/local.mp4', poster: localAmbiente, alt: 'Video del local de Barbería Torito' },
  // Los videos del barbero (perfil + momentos divertidos) viven en `peluquero`.
}
