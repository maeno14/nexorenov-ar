# Deploy en Cloudflare Pages

## Requisitos previos

- Cuenta en [Cloudflare](https://dash.cloudflare.com) (gratis)
- Cuenta en [GitHub](https://github.com)
- Este repositorio subido a GitHub

## Paso 1: Repositorio en GitHub

El código ya está en: **https://github.com/maeno14/nexorenov-ar**

Para clonar o contribuir:

```bash
git clone https://github.com/maeno14/nexorenov-ar.git
cd nexorenov-ar
npm install && npm run dev
```

Si necesitás crear el repo desde cero en otra cuenta:

```bash
gh repo create nexorenov-ar --public --source=. --remote=origin --push
```

## Paso 2: Conectar Cloudflare Pages

1. Entrá a [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**
2. **Create** → **Pages** → **Connect to Git**
3. Autorizá GitHub y seleccioná el repo `nexorenov-ar`
4. Configurá el build:

| Campo | Valor |
|-------|-------|
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

5. En **Environment variables** (Production), agregá:

| Variable | Valor |
|----------|-------|
| `NODE_VERSION` | `22` |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Tu clave de Web3Forms (opcional) |

6. **Save and Deploy**

## Paso 3: Verificar

Tras el build exitoso, Cloudflare asigna una URL:

```
https://nexorenov-ar.pages.dev
```

(o similar según el nombre del proyecto). Cada push a `main` redeploya automáticamente. Cada PR genera una preview URL.

## Formulario de contacto

1. Registrate en [web3forms.com](https://web3forms.com)
2. Copiá el `access_key`
3. Agregalo como `PUBLIC_WEB3FORMS_ACCESS_KEY` en Cloudflare Pages → Settings → Environment variables
4. Redeployá el sitio

Sin la clave, el sitio muestra un fallback con enlace `mailto:contacto@nexorenov.ar`.

## Analytics (opcional)

1. Cloudflare Dashboard → **Web Analytics** → **Add a site**
2. Copiá el snippet y agregalo en `BaseLayout.astro` antes de `</head>`

## Límites del tier gratuito

- 500 builds/mes
- 1 build concurrente
- Bandwidth ilimitado
- HTTPS automático
