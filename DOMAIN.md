# Conectar nexorenov.ar como dominio custom

Guía para pasar de `*.pages.dev` a `https://nexorenov.ar`.

## Prerrequisitos

- Dominio **nexorenov.ar** registrado
- Proyecto ya desplegado en Cloudflare Pages (ver [DEPLOY.md](./DEPLOY.md))

## Paso 1: Agregar el dominio a Cloudflare

1. Cloudflare Dashboard → **Add a site**
2. Ingresá `nexorenov.ar`
3. Elegí el plan **Free**
4. Cloudflare te muestra 2 nameservers (ej. `ada.ns.cloudflare.com`)

## Paso 2: Delegar DNS en el registrador

En el panel de tu registrador (NIC Argentina, DonWeb, etc.):

1. Cambiá los nameservers por los de Cloudflare
2. Guardá y esperá propagación (24–72 h típico; a veces minutos)

Cuando la zona esté **Active** en Cloudflare, seguí.

## Paso 3: Vincular dominio al proyecto Pages

1. **Workers & Pages** → tu proyecto `nexorenov-ar`
2. **Custom domains** → **Set up a custom domain**
3. Ingresá `nexorenov.ar` → **Continue**
4. Cloudflare crea los registros DNS automáticamente
5. (Opcional) Agregá `www.nexorenov.ar` y configurá redirect a apex:

   - **Rules** → **Redirect Rules** (o Page Rules en cuentas legacy)
   - `www.nexorenov.ar/*` → `https://nexorenov.ar/$1` (301)

## Paso 4: Verificar HTTPS

Cloudflare emite el certificado SSL automáticamente (puede tardar unos minutos). Verificá:

```
https://nexorenov.ar
```

## Paso 5: SEO

El `site` en `astro.config.mjs` ya apunta a `https://nexorenov.ar`. Tras activar el dominio, el sitemap y las meta tags OG usarán la URL correcta.

## Durante la transición

- `https://nexorenov-ar.pages.dev` sigue funcionando en paralelo
- Podés probar en Pages.dev antes de cortar DNS

## Troubleshooting

| Problema | Solución |
|----------|----------|
| Dominio no resuelve | Verificá nameservers en el registrador |
| SSL pendiente | Esperá 15–30 min; revisá que el proxy esté activo (nube naranja) |
| 522 / error de origen | Revisá que el deploy de Pages esté en Success |
| www no redirige | Configurá redirect rule www → apex |
