export const site = {
  name: 'Nexo Renov',
  title: 'Nexo Renov — Consultoría de software B2B',
  description:
    'Consultoría de software para empresas que quieren digitalizar procesos administrativos con IA. Producto estrella: constanci.ar.',
  url: 'https://nexorenov.ar',
  locale: 'es_AR',
  email: 'mariano.argentato@gmail.com',
  whatsapp: '',
  product: {
    name: 'constanci.ar',
    url: 'https://constanci.ar/',
    tagline: 'Gestión administrativa digital con trazabilidad y cumplimiento.',
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
