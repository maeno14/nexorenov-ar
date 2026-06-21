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

cd "$ROOT"
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
