# Nexo Renov

Landing page de consultoría de software B2B para [nexorenov.ar](https://nexorenov.ar). Producto estrella: [contanci.ar](https://contanci.ar).

## Stack

- [Astro](https://astro.build) 6 + Tailwind CSS 4
- Deploy en [Cloudflare Pages](https://pages.cloudflare.com) (tier gratuito)

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Clave de [Web3Forms](https://web3forms.com) para el formulario de contacto |

Copiá `.env.example` a `.env` para desarrollo local.

## Deploy

Ver [DEPLOY.md](./DEPLOY.md) para GitHub + Cloudflare Pages.

Ver [DOMAIN.md](./DOMAIN.md) para conectar `nexorenov.ar`.

## Estructura

```
src/
├── components/   # Secciones de la landing
├── config/     # Datos del sitio
├── layouts/    # BaseLayout con SEO
├── pages/      # index.astro
└── styles/     # Tailwind + tokens de marca
```
