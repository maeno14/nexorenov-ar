export const site = {
  name: 'Nexo Celer',
  title: 'Nexo Celer | Procesos claros, sistemas que trabajan',
  description:
    'Consultoría de software para conectar, automatizar y ordenar procesos administrativos B2B.',
  url: 'https://nexoceler.ar',
  locale: 'es_AR',
  email: 'mariano.argentato@gmail.com',
  whatsapp: '',
  product: {
    name: 'constanci.ar',
    url: 'https://constanci.ar/',
    tagline: 'Automatización de constancias AFIP en lote, desde Excel hasta PDF.',
    summary:
      'Plataforma para descargar constancias AFIP masivamente. Uno de los productos que desarrollamos al resolver procesos reales con clientes.',
  },
} as const;

/** URL absoluta del producto — siempre con https para evitar rutas relativas. */
export const productExternalUrl = site.product.url;

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#clientes', label: 'Cuándo intervenir' },
  { href: '#proceso', label: 'Método' },
  { href: '#productos', label: 'Producto' },
  { href: '#contacto', label: 'Contacto' },
] as const;
