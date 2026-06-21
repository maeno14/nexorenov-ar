export const site = {
  name: 'Nexo Celer',
  title: 'Nexo Celer — Consultoría de software B2B',
  description:
    'Consultoría de software para empresas que aceleran procesos administrativos en etapas de modernización e innovación con IA.',
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
  { href: '#clientes', label: 'Para quién' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#productos', label: 'Productos' },
  { href: '#contacto', label: 'Contacto' },
] as const;
