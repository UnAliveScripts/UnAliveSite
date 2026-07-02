# UnAlive Script Hub

## Quick Edit Guide

### To change the Lua script
Edit `raw/script.lua` and push - the worker auto-updates.

### To change site branding
Edit `config.json` - update name, tagline, Discord link, etc.

### To deploy
Push to main branch - Cloudflare Pages auto-deploys.

## Structure
```
public/          - Main website (unalive.net)
  index.html     - Script hub page
  icons/         - Site favicon
  images/        - Preview images
raw/             - Lua scripts
  script.lua     - Main Roblox script
src/             - Cloudflare Workers
  raw-worker.js  - Serves .lua files on raw.unalive.net
config.json      - Easy-edit site configuration
```

## Domains
- Main site: https://unalive.net
- Raw scripts: https://raw.unalive.net/script.lua
