export const site = {
  name: 'Nexo Celer',
  title: 'Nexo Celer — Consultoría de software B2B',
  description:
    'Consultoría de software para empresas que digitalizan procesos administrativos. Producto estrella: constanci.ar — constancias AFIP en lote desde Excel.',
  url: 'https://nexoceler.ar',
  locale: 'es_AR',
  email: 'mariano.argentato@gmail.com',
  whatsapp: '',
  product: {
    name: 'constanci.ar',
    url: 'https://constanci.ar/',
    tagline:
      'Automatización de constancias AFIP: subí un Excel con CUITs y descargá PDFs oficiales en lote.',
  },
} as const;

/** URL absoluta del producto — siempre con https para evitar rutas relativas. */
export const productExternalUrl = site.product.url;

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: productExternalUrl, label: site.product.name, external: true },
  { href: '#clientes', label: 'Para quién' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#contacto', label: 'Contacto' },
] as const;
