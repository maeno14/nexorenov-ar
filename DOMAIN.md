# Conectar nexoceler.ar como dominio custom

Guía para pasar de `*.pages.dev` a `https://nexoceler.ar`.

## Prerrequisitos

- Dominio **nexoceler.ar** registrado
- Proyecto ya desplegado en Cloudflare Pages (ver [DEPLOY.md](./DEPLOY.md))

## Paso 1: Agregar el dominio a Cloudflare

1. Cloudflare Dashboard → **Add a site**
2. Ingresá `nexoceler.ar`
3. Elegí el plan **Free**
4. Cloudflare te muestra 2 nameservers

## Paso 2: Delegar DNS en el registrador

En el panel de tu registrador (NIC Argentina, DonWeb, etc.):

1. Cambiá los nameservers por los de Cloudflare
2. Guardá y esperá propagación (24–72 h típico; a veces minutos)

Cuando la zona esté **Active** en Cloudflare, seguí.

## Paso 3: Vincular dominio al proyecto Pages

1. **Workers & Pages** → tu proyecto `nexoceler-ar`
2. **Custom domains** → **Set up a custom domain**
3. Ingresá `nexoceler.ar` → **Continue**
4. Cloudflare crea los registros DNS automáticamente
5. (Opcional) Agregá `www.nexoceler.ar` y configurá redirect a apex:

   - `www.nexoceler.ar/*` → `https://nexoceler.ar/$1` (301)

## Paso 4: Verificar HTTPS

```
https://nexoceler.ar
```

## Paso 5: SEO

El `site` en `astro.config.mjs` apunta a `https://nexoceler.ar`. Tras activar el dominio, el sitemap y las meta tags OG usarán la URL correcta.

## Durante la transición

- `https://nexoceler-ar.pages.dev` sigue funcionando en paralelo
- El proyecto anterior `nexorenov-ar.pages.dev` puede eliminarse desde el dashboard cuando ya no lo necesites

## Troubleshooting

| Problema | Solución |
|----------|----------|
| Dominio no resuelve | Verificá nameservers en el registrador |
| SSL pendiente | Esperá 15–30 min; revisá que el proxy esté activo |
| 522 / error de origen | Revisá que el deploy de Pages esté en Success |
| www no redirige | Configurá redirect rule www → apex |
