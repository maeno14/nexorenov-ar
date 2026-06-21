#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CREDS="$ROOT/cloudflare.credentials"

if [[ ! -f "$CREDS" ]]; then
  echo "Falta cloudflare.credentials. Copiá cloudflare.credentials.example y completalo."
  exit 1
fi

# shellcheck disable=SC1090
source "$CREDS"

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" || -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  echo "Completá CLOUDFLARE_API_TOKEN y CLOUDFLARE_ACCOUNT_ID en cloudflare.credentials"
  exit 1
fi

PROJECT="${CLOUDFLARE_PAGES_PROJECT:-nexorenov-ar}"

if [[ -z "${PUBLIC_WEB3FORMS_ACCESS_KEY:-}" ]]; then
  PUBLIC_WEB3FORMS_ACCESS_KEY="$(
    curl -sS "https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/pages/projects/${PROJECT}" \
      -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
      | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('result',{}).get('deployment_configs',{}).get('production',{}).get('env_vars',{}).get('PUBLIC_WEB3FORMS_ACCESS_KEY',{}).get('value',''))"
  )"
fi

cd "$ROOT"

if [[ -n "${PUBLIC_WEB3FORMS_ACCESS_KEY}" ]]; then
  export PUBLIC_WEB3FORMS_ACCESS_KEY
  echo "Formulario: PUBLIC_WEB3FORMS_ACCESS_KEY cargada desde Cloudflare."
else
  echo "Formulario: sin PUBLIC_WEB3FORMS_ACCESS_KEY (se usará fallback mailto)."
fi

npm run build

export CLOUDFLARE_API_TOKEN
export CLOUDFLARE_ACCOUNT_ID

npx wrangler pages project list 2>/dev/null | grep -q "$PROJECT" || \
  npx wrangler pages project create "$PROJECT" --production-branch main

npx wrangler pages deploy dist \
  --project-name "$PROJECT" \
  --branch main \
  --commit-dirty=true

echo ""
echo "Deploy enviado. URL esperada: https://${PROJECT}.pages.dev"
