#!/usr/bin/env bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js en npm zijn nodig. Installeer een Node.js-versie die door Nuxt wordt ondersteund." >&2
  exit 1
fi

if [[ ! -x node_modules/.bin/nuxt || ! -f node_modules/.package-lock.json || package-lock.json -nt node_modules/.package-lock.json ]]; then
  echo "Dependencies installeren met npm ci…"
  npm ci
fi

lesson_port="${PORT:-3000}"
if [[ ! "$lesson_port" =~ ^[1-9][0-9]{0,4}$ ]] || (( lesson_port > 65535 )); then
  echo "PORT moet een poortnummer tussen 1 en 65535 zijn." >&2
  exit 1
fi
printf '\nWebsite:       http://127.0.0.1:%s\nOntwikkeling:   http://127.0.0.1:%s/ontwikkeling\nLokale review: http://127.0.0.1:%s/ontwikkeling/review\n\nStoppen: Ctrl+C. Als de poort bezet is, meldt Nuxt de gekozen poort.\n\n' "$lesson_port" "$lesson_port" "$lesson_port"
exec npm run dev -- --host 127.0.0.1 --port "$lesson_port"
