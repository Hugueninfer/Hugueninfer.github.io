#!/usr/bin/env bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
codex_node_bin="/home/huguenin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"

if ! node -e 'const [major,minor]=process.versions.node.split(".").map(Number);process.exit(major>22||(major===22&&minor>=13)?0:1)' 2>/dev/null; then
  if [[ -x "$codex_node_bin/node" ]]; then
    export PATH="$codex_node_bin:$PATH"
  else
    echo "É necessário instalar Node.js 22.13 ou mais recente." >&2
    exit 1
  fi
fi

exec npm run dev -- --host 127.0.0.1
