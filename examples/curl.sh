#!/usr/bin/env bash
set -euo pipefail
: "${APIMART_KEY:?set APIMART_KEY}"

curl -sS -X POST https://api.apimart.ai/v1/images/generations \
  -H "Authorization: Bearer $APIMART_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"model":"gpt-image-2.5-ext","prompt":"cozy reading nook, warm lamp, cinematic","size":"1:1","resolution":"1K","n":1}}'
