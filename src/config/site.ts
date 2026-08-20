export const site = {
  name: 'Nexo Celer',
  title: 'Nexo Celer | Software para operaciones administrativas',
  description:
    'Relevamos procesos administrativos, conectamos las herramientas existentes y construimos el software que falta.',
  url: 'https://nexoceler.ar',
  locale: 'es_AR',
  email: 'mariano.argentato@gmail.com',
  whatsapp: '',
  product: {
    name: 'constanci.ar',
    url: 'https://constanci.ar/',
    tagline: 'Automatización de constancias AFIP en lote, desde Excel hasta PDF.',
    summary:
      'Plataforma propia para procesar listas de CUITs y descargar constancias AFIP en lote.',
  },
} as const;

/** URL absoluta del producto. Usa https para evitar rutas relativas. */
export const productExternalUrl = site.product.url;

export const navLinks = [
  { href: '#clientes', label: 'Cuándo intervenir' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#productos', label: 'Producto' },
  { href: '#proceso', label: 'Método' },
  { href: '#contacto', label: 'Contacto' },
] as const;
