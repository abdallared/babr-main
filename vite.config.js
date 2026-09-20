import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'

const hasCname = fs.existsSync('./public/CNAME')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages project subpath on Actions, or '/' locally and for custom domains
  base: (process.env.GITHUB_ACTIONS || process.env.GITHUB_PAGES) && !hasCname ? '/babr-main/' : '/',
  server: { port: 5180 },
})
